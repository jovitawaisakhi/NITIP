/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { NavigateFunction } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export function Register(navigate : NavigateFunction, email : string, password : string){
    createUserWithEmailAndPassword(auth, email, password).then(
        async(user) => {
            await addDoc(collection(db, "users"), {
                userID : user.user.uid,
                email : email,
                role : 'customer',
                status : 'approved',
                phoneNumber : '',
                linkProfile : '',
                dob : ''
            })

            navigate('/login')
        }
    )
}

export async function Login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
    const q = query(collection(db, "users"), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        throw new Error("Email is not registered");
    }

    const userDoc = querySnapshot.docs[0];
    const data = userDoc.data();
    const status = data.status;

    if (status === 'approved') {
        localStorage.setItem('user', data.userID);
    } else {
        throw new Error("Password doesn't match");
    }
}

export async function isEmailRegistered(email: string): Promise<boolean> {
    const q = query(collection(db, "users"), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
}

export function LogOut() {
    localStorage.removeItem('user');
}

export const getCurrentUserId = () => {
    const user = auth.currentUser;
    if (user) {
        return user.uid;
    } else {
        throw new Error('No user logged in');
    }
};