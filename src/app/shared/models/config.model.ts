export interface Agency {
 
     agency_code: number;
     name: string;
     contact: string;
     email: string;
     currentAddress: AddressMetaData[];
     users: User[];
     companies: Company[];
  
}

export interface User {
     user_id: number;
     name: string;
     contact: string;
     email: string;
     currentAddress: AddressMetaData[];    

}

export interface Company {
     company_id: number;
     name: string;
     contact: string;
     email: string;
     currentAddress: AddressMetaData[];    

}

export interface AddressMetaData {
     addressLine1: string;
     city: string;
     state: string;
     zipCode: string;
     country: string;
}



