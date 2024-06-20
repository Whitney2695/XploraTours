export interface user{
    id: string,
    name:string,
    phone_number:string,
    email: string,
    password:string,
}

export interface login_details{
    email:string,
    password:string
}

export interface token_details{
    id: string,
    name:string,
    email: string
}