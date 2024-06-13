import { DocumentData, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export async function getUser(){
    const userID = localStorage.getItem('user');
    let role : string | null = null;
    let data : DocumentData = [];

    if(userID){
        const q = query(collection(db, "users"), where('userID', '==', userID));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            data = doc.data()
            
            role = data.role
        })

        return data
    } 

    return null
}

