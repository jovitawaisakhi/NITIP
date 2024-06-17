import { getFirestore, collection, getDocs, query, where, addDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { Cart } from '../../interfaces/Cart';
import { fetchTenantById } from '../tenant/TenantService';
import { NavigateFunction } from 'react-router-dom';

const db = getFirestore();

export async function AddToCart(navigate: NavigateFunction, foodID: string, tenantID: string, userID: string){
    try {
        const cartCollection = collection(db, 'cart');
        const q = query(cartCollection, where('userID', '==', userID), where('tenantID', '==', tenantID));
        const querySnapshot = await getDocs(q);

        console.log(querySnapshot.docs)
        if (!querySnapshot.empty) {
            querySnapshot.forEach(async (document) => {
                const docRef = doc(db, 'cart', document.id);
                await updateDoc(docRef, {
                    Foods: arrayUnion(foodID)
                });
            });
        } else {
            await addDoc(collection(db, "cart"), {
                Foods: [foodID],
                tenantID: tenantID,
                userID: userID,
            });
        }

        navigate('/cart');
    } catch (error) {
        console.log(error)
    }

} 

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