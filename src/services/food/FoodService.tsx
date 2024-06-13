import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase"
import { NavigateFunction } from "react-router-dom"

export async function AddFood(navigate : NavigateFunction, foodName : string, description : string, price : string){
    const parsedPrice = parseInt(price)
    
    try{
        await addDoc(collection(db, "foods"), {
            foodName: foodName,
            description: description,
            price: parsedPrice,
            quantityOrder: 0
        })

        navigate('/restaurantDetail')
    } catch (e){
        console.log(e)
    }
}