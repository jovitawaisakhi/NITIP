import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"
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

export async function getFood(foodID : string | undefined) {
    if(foodID){
        const docRef = doc(db, "foods", foodID);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            return docSnap.data() as Food
        } 
    }
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

export async function AddFood(navigate : NavigateFunction, foodName : string, description : string, price : string, tenantID : string){
    const parsedPrice = parseInt(price)
    
    try{
        await addDoc(collection(db, "foods"), {
            foodName: foodName,
            description: description,
            price: parsedPrice,
            tenantID : tenantID,
            foodImage : "https://www.andy-cooks.com/cdn/shop/articles/20230911192023-andy-20cooks-20-20hainanese-20chicken-20rice.jpg?v=1694460111"
            // quantityOrder: 0
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

export async function UpdateFood( 
    navigate: any,
    foodID: string,
    foodName: string,
    description: string,
    price: string,
    tenantID: string
) {
    try {
        const foodDocRef = doc(db, 'foods', foodID);

        await updateDoc(foodDocRef, {
            foodName,
            description,
            price,
            tenantID
        });
        navigate('/restaurantDetail')
    } catch (error) {
        console.error('Error updating food:', error);
        throw error;
    }
}

export async function getFoodByTenantID(tenantID: string): Promise<Food[]> {
    if (tenantID) {
        const foodsCollectionRef = collection(db, "foods");
        const q = query(foodsCollectionRef, where("tenantID", "==", tenantID));
        const querySnapshot = await getDocs(q);

        const foods: Food[] = [];
        querySnapshot.forEach((doc) => {
            if (doc.exists()) {
                foods.push(doc.data() as Food);
            }
        });

        return foods;
    } else {
        throw new Error("Invalid tenantID");
    }
}