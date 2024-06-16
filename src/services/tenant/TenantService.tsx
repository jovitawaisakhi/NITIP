import { DocumentData, DocumentSnapshot, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Tenant } from "../../interfaces/Tenant";

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

export async function GetAllTenant() {
    const tenants : Tenant[] = []
    try {
        const querySnapshot = await getDocs(collection(db, "tenant"));

        querySnapshot.forEach((doc) => {
            tenants.push(doc.data() as Tenant)
        });

        return tenants
    } catch (error) {
        console.log(error)
    }
}