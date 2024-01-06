import Person from "./person.js";

class Customer extends Person{
    constructor(_name,_address,_id,_email,_type,_NameCompany,_billCost,_rate){
        super(_name,_address,_id,_email,_type)
        this.NameCompany = _NameCompany
        this.billCost = _billCost
        this.rating = _rate
    }
}

export default Customer