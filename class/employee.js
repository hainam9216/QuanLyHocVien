import Person from "./person.js";

class Employee extends Person{
    constructor(_name,_address,_id,_email,_type,_workDay,_SalaryByDay) {
        super(_name,_address,_id,_email,_type)
        this.workDay = _workDay
        this.SalaryByDay =_SalaryByDay
    }
}

export default Employee