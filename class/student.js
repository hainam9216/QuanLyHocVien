import Person from "./person.js";

class Student extends Person{
    constructor(_name,_address,_id,_email,_type,_toan,_ly,_hoa) {
        super(_name,_address,_id,_email,_type)
        this.toan = _toan
        this.ly = _ly
        this.hoa = _hoa
    }
}

export default Student