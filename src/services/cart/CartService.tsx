import { getFirestore, collection, getDocs, query, where, addDoc, doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { Cart } from '../../interfaces/Cart';
import { fetchTenantById } from '../tenant/TenantService';
import { NavigateFunction } from 'react-router-dom';
import { Food } from '../../interfaces/Food';

const db = getFirestore();

export async function AddToCart(navigate: NavigateFunction, foodID: string, tenantID: string, userID: string){
    try {
        const cartCollection = collection(db, 'cart');
        const q = query(cartCollection, where('userID', '==', userID), where('tenantID', '==', tenantID));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            querySnapshot.forEach(async (document) => {
                const cartData = document.data();
                const foods = cartData.Foods || {};

                if (foodID in foods) {
                    console.log('foodID:', foodID);
                    foods[foodID] += 1;
                } else {
                    foods[foodID] = 1;
                }

                const docRef = doc(db, 'cart', document.id);
                await updateDoc(docRef, {
                    Foods: foods
                });
                console.log(foods)
            });
        } else {
            await addDoc(collection(db, "cart"), {
                Foods: { [foodID]: 1 }, 
                tenantID: tenantID,
                userID: userID,
            });
        }

        navigate('/cart');
    } catch (error) {
        console.log(error);
    }
}

const fetchFoodDetails = async (foodIDs: string[]): Promise<Food[]> => {
    const foodCollection = collection(db, "foods");
    const foodDocs = await Promise.all(foodIDs.map(foodID => getDoc(doc(foodCollection, foodID))));
    return foodDocs.map(docSnap => ({ foodID: docSnap.id, ...docSnap.data() })) as Food[];
};

export const getCartById = async (cartID: string): Promise<{ cart: Cart; foods: Food[] } | null> => {
    try {
        const cartRef = doc(db, "cart", cartID);
        const cartSnap = await getDoc(cartRef);

        if (cartSnap.exists()) {
            const cartData = cartSnap.data() as Cart;
            const foodIDs = Object.keys(cartData.Foods);
            const foods = await fetchFoodDetails(foodIDs);
            console.log(cartData, foods)
            return { cart: cartData, foods: foods };
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};

export const updateQuantityInCart = async (cartID: string, foodID: string, newQuantity: number) => {
    try {
        const cartRef = doc(db, 'cart', cartID);
        await updateDoc(cartRef, {
            [`Foods.${foodID}`]: newQuantity
        });
        console.log(`Quantity updated for foodID ${foodID} in cartID ${cartID} to ${newQuantity}`);
    } catch (error) {
        console.error('Error updating quantity:', error);
        throw error; 
    }
};

export const deleteCart = async (cartID: string) => {
    const cartRef = doc(db, 'cart', cartID);
    await deleteDoc(cartRef);        
};

export const fetchUserCartItems = async (userId: string): Promise<Cart[]> => {
    try {
        const cartCollection = collection(db, 'cart');
        const q = query(cartCollection, where('userID', '==', userId));
        const querySnapshot = await getDocs(q);

        const items: Cart[] = [];

        await Promise.all(querySnapshot.docs.map(async (doc) => {
            const cartItem = doc.data() as Cart; 
            cartItem.cartID = doc.id; 

            if (cartItem.tenantID) {
                cartItem.tenant = await fetchTenantById(cartItem.tenantID);
            }

            items.push(cartItem);
        }));

        return items;
    } catch (error) {
        console.error('Error fetching user cart items:', error);
        throw error;
    }
};