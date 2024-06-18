import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../../firebase";
import { TransactionInterface } from "../../interfaces/Transaction";
import { Food } from "../../interfaces/Food";

interface TransactionData {
    cartID: string;
    subtotal: number;
    notes: string;
    cart : any;
    tenantID : string,
    userID : string,
}

export const addTransaction = async (transactionData: TransactionData): Promise<void> => {
    const { cartID, cart, subtotal, notes, tenantID, userID } = transactionData;

    try {
        const transactionRef = doc(db, 'transaction', cartID); 
        await setDoc(transactionRef, {
            cartID,
            food : cart,
            subtotal,
            notes,
            status : "confirmation",
            tenantID,
            userID,
        });
        console.log('Transaction added successfully');
    } catch (error) {
        console.error('Error adding transaction: ', error);
        throw new Error('Failed to add transaction');
    }
};

export const fetchTransactionsByTenantID = async (tenantID: string) => {
    try {
        const transactionsCollection = collection(db, 'transaction');
        const q = query(
            transactionsCollection,
            where('tenantID', '==', tenantID)
        );

        const querySnapshot = await getDocs(q);

        const transactions: TransactionInterface[] = querySnapshot.docs.map(doc => ({
            transactionID: doc.id,
            ...doc.data() as TransactionInterface
        }));

        let foodIDs: string[] = [];
        transactions.forEach(transaction => {
            const transactionFoodIDs = Object.keys(transaction.food || {});
            foodIDs = [...foodIDs, ...transactionFoodIDs];
        });
        foodIDs = Array.from(new Set(foodIDs));
        console.log(foodIDs)
        if (foodIDs.length === 0) {
            console.log('No foodIDs found in transactions.');
            return [];
        }

        const foodCollection = collection(db, 'foods');
        const foodDocs = await Promise.all(foodIDs.map(foodID => getDoc(doc(foodCollection, foodID))));
        const foods: Food[] = foodDocs.map(docSnap => ({
            foodID: docSnap.id,
            ...docSnap.data() as Food
        }));

        const transactionsWithFoods = transactions.map(transaction => ({
            ...transaction,
            foods: Object.keys(transaction.food || {}).map(foodID => ({
                ...foods.find(food => food.foodID === foodID),
                quantity: transaction.food[foodID]
            }))
        }));

        const userCollection = collection(db, 'users');
        const transactionsWithUsers = await Promise.all(
            transactionsWithFoods.map(async transaction => {
                const userDocRef = doc(userCollection, transaction.userID);
                const userDocSnapshot = await getDoc(userDocRef);
                if (userDocSnapshot.exists()) {
                    const user = userDocSnapshot.data();
                    return {
                        ...transaction,
                        user: user 
                    };
                } else {
                    console.log(`User document not found for userID: ${transaction.userID}`);
                    return transaction; 
                }
            })
        );
        console.log(transactionsWithUsers)
        return transactionsWithUsers;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        throw new Error('Failed to fetch transactions');
    }
};

export const acceptTransaction= async (transactionID: string) => {
    try {
        const transactionRef = doc(db, 'transaction', transactionID);
        await setDoc(transactionRef, { status: 'processing' }, { merge: true });
    } catch (error) {
        //error handling
    }
}

export const finishTransaction = async (transactionID: string) => {
    try {
        const transactionRef = doc(db, 'transaction', transactionID);
        await setDoc(transactionRef, { status: 'finishing' }, { merge: true });
    } catch (error) {
        //error handling
    }
}