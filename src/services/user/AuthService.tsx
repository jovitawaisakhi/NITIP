/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { NavigateFunction } from "react-router-dom";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { User } from "../../interfaces/User";
import { Tenant } from "../../interfaces/Tenant";

export function Register(navigate : NavigateFunction, userRegist : User, password : string, role : string, tenantName : string){

    createUserWithEmailAndPassword(auth, userRegist.email, password).then((userCredential)=>{
        const user = userCredential.user;

        if (role === 'customer') {
            const userDocRef = doc(db, 'users', user.uid);
            return setDoc(userDocRef, userRegist);
        }
        else if(role === 'tenant'){
            const userDocRef = doc(db, 'tenant', user.uid);
            const tenant : Tenant = {
                name : tenantName,
                linkProfile : userRegist.linkProfile,
                status : 'pending',
                email : userRegist.email,
                phoneNumber : userRegist.phoneNumber,
                dob : new Date()
            }
            return setDoc(userDocRef, tenant);
        }

    }).then(()=>{
        navigate('/login');
    })
    .catch((error) => {
        if (error.code === 'auth/invalid-email') {
            console.error('Invalid email:', error.message);
        } else {
            console.error('Error registering user:', error.message);
        }
    });
}

export async function Login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
    const q = query(collection(db, "users"), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        tenantLogin(email, password);
    }
    else{
        const userDoc = querySnapshot.docs[0];
        localStorage.setItem('user', userDoc.id);   
    }
}


export async function tenantLogin(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
    const q = query(collection(db, "tenant"), where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        throw new Error("Email is not registered");
    }

    const userDoc = querySnapshot.docs[0];
    const data = userDoc.data();
    const status = data.status;

    if (status === 'approved') {
        localStorage.setItem('user', userDoc.id);
    } else {
        throw new Error("Not Approved Yet!");
    }
}

export async function isEmailRegistered(email: string): Promise<boolean> {
    const userQuery = query(collection(db, "users"), where('email', '==', email));
    const tenantQuery = query(collection(db, "tenant"), where('email', '==', email));
    
    const [userSnapshot, tenantSnapshot] = await Promise.all([getDocs(userQuery), getDocs(tenantQuery)]);
    
    return !userSnapshot.empty || !tenantSnapshot.empty;
}

export function LogOut() {
    localStorage.removeItem('user');
}
