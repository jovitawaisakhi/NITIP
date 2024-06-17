import { DocumentData, DocumentSnapshot, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { Tenant } from "../../interfaces/Tenant";
import { Food } from "../../interfaces/Food";

export async function fetchTenantById(tenantId: string): Promise<Tenant | undefined> {
    try {
        const tenantDocRef = doc(db, 'tenant', tenantId);
        const tenantDocSnap: DocumentSnapshot<DocumentData> = await getDoc(tenantDocRef);

        if (tenantDocSnap.exists()) {
            const tenantData = tenantDocSnap.data() as Tenant;
            return tenantData;
        } else {
            console.log('Tenant not found');
            return undefined;
        }
    } catch (error) {
        console.error('Error fetching tenant:', error);
        throw error;
    }
}

export async function fetchTenantAndFoodById(tenantId: string): Promise<Tenant | undefined> {
    try {
        const tenantDocRef = doc(db, 'tenant', tenantId);
        const tenantDocSnap = await getDoc(tenantDocRef);

        if (tenantDocSnap.exists()) {
            let tenantData = tenantDocSnap.data() as Tenant;

            const foodsCollectionRef = collection(db, 'foods');
            const q = query(foodsCollectionRef, where('tenantID', '==', tenantId));
            const querySnapshot = await getDocs(q);

            const foods: Food[] = [];

            querySnapshot.forEach((doc) => {
                if (doc.exists()) {
                    const foodData = doc.data() as Food;
                    foodData.foodID = doc.id;
                    foods.push(foodData);
                }
            });

            tenantData.foods = foods;
            console.log(tenantData)
            return tenantData;
        } else {
            console.log('Tenant not found');
            return undefined;
        }
    } catch (error) {
        console.error('Error fetching tenant:', error);
        throw error;
    }
}

export async function GetAllTenant() {
    const tenants : Tenant[] = [];
    let tenantTemp : Tenant;

    try {
        const querySnapshot = await getDocs(collection(db, "tenant"));

        querySnapshot.forEach((doc) => {
            console.log(doc.id)
            tenantTemp = doc.data() as Tenant;
            tenantTemp = {...tenantTemp, tenantID: doc.id}
            console.log(tenantTemp)
            tenants.push(tenantTemp)
        });

        return tenants
    } catch (error) {
        console.log(error)
    }
}