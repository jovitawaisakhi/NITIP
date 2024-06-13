import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import { NavigateFunction } from "react-router-dom"
import { Food } from "../../interfaces/Food";

export async function getAllFood(){
    let foodList : Food[] = [];
    const querySnapshot = await getDocs(collection(db, "foods"));

    querySnapshot.forEach((doc)=>{
        const foodData = doc.data() as Food
        foodList.push(foodData)
    })

    return foodList
}

export async function getFoodID(foodName : string) {
    let foodID : string | null = '';
    const q = query(collection(db, "foods"), where("foodName", "==", foodName));

    const querySnapshot = await getDocs(q);

    if(querySnapshot){
        querySnapshot.forEach((doc)=>{
            foodID = doc.id
        })
    } else {
        return null
    }

    return foodID
}

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

export async function DeleteFood(foodID : string | null) {
    try {
        await deleteDoc(doc(db, "foods", foodID!))
    } catch (e) {
        console.log(e)
    }
}

export async function UpdateFood(foodID : string) {
    try {
        
    } catch (e) {
        console.log(e)
    }
}