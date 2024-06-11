import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavigateFunction } from "react-router-dom";

export function Register(navigate : NavigateFunction, email : string, password : string){
    createUserWithEmailAndPassword(auth, email, password).then(()=>{
        navigate('/login');
    })
}

export function Login(navigate : NavigateFunction, email : string, password : string){
    signInWithEmailAndPassword(auth, email, password).then(()=>{
        navigate('/home');
    })
}

