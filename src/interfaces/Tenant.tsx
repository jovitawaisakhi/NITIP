import { Food } from "./Food"

export type Tenant = {
    name : string,
    linkProfile : string,
    status : string,
    desc? : string,
    email : string,
    phoneNumber : string,
    dob : Date,
    foods? : Food[]
}