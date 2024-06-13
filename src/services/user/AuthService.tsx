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

export function Login(navigate : NavigateFunction, email : string, password : string){
    signInWithEmailAndPassword(auth, email, password).then( 
        async() => {
            const q = query(collection(db, "users"), where('email', '==', email));

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                const data = doc.data()
                const status = data.status

                if (status == 'approved') {
                    localStorage.setItem('user', data.email)
                    navigate('/home');
                } else {
                    navigate('/login')
                }
            })
        }
    )
}

export function LogOut(){
    localStorage.removeItem('user')
}

