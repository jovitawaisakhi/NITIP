import { DocumentData, DocumentSnapshot, doc, getDoc } from "firebase/firestore";
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