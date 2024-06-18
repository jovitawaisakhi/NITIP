import { User } from "./User";

export type TransactionInterface = {
    id : string,
    cartID : string, 
    food : any,
    notes : string, 
    status : string,
    subtotal : number,
    tenantID : string,
    userID : string,
    user? : User,
    foods? : FoodTransaction[]
}

type FoodTransaction = {
    foodName? : string,
    description? : string,
    price? : number,
    foodImage? : string,
    foodID? : string,
    quantity? : number
}