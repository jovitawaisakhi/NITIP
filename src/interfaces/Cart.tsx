import { Food } from "./Food";
import { Tenant } from "./Tenant";

export type Cart = {
    cartID : string,
    tenantID : string,
    userID : string,
    Foods: { [key: string]: number };
    tenant? : Tenant
}