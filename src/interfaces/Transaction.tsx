import { Tenant } from "./Tenant";
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
    tenant? : Tenant,
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