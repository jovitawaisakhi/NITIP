import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export async function getUser(){
    const userID = localStorage.getItem('user');
    let data : DocumentData = [];

    if(userID){
        const userDocRef = doc(db, 'users', userID);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            data = userDocSnap.data();
            data = {...data, role: "customer"}
        }
        else{
            const tenantDocRef = doc(db, 'tenant', userID);
            const tenantDocSnap = await getDoc(tenantDocRef);

            if (tenantDocSnap.exists()) {
                data = tenantDocSnap.data();
                data = {...data, role: "tenant"}
            }
        }

        return data
    } 

    return null
}

