import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Cart } from '../../interfaces/Cart';
import { fetchTenantById } from '../tenant/TenantService';

const db = getFirestore();

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