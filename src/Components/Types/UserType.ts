export type Users = { 
    logo: string
    id: number;
    name: string;
    address: AddressType[];
}

export type AddressType = {
    address: string,
    city: string
}