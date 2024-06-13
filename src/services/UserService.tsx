import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export async function getRoleUser(){
    const email = localStorage.getItem('user');
    let role : string | null = null;

    if(email){
        const q = query(collection(db, "users"), where('email', '==', email));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const data = doc.data()
            
            role = data.role
        })

        return role
    } 

    return null
}

