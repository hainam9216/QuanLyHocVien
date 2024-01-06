import ListPerson from "./../class/ListPerson.js"
import Person from "./../class/person.js"
import Employee from "../class/employee.js"

class Validation {
    constructor() {}
    //Method
    ktraRong(value, spanId, mess) {
        if (value === "") {
            //show error
            document.getElementById(spanId).innerHTML = mess
            return false
        } else {
            document.getElementById(spanId).innerHTML = ""
            return true
        }
    }
    //
    kiemTraDoDaiKyTu(value, spanId, mess, min, max) {
        if (value.trim().length >= min && value.trim().length <= max) {
            //true
            document.getElementById(spanId).innerHTML = ""
            return true
        }
        //false
        document.getElementById(spanId).innerHTML = mess
        return false
    }
    //
    kiemTraChuoiKyTu(value, spanId, mess) {
        const letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"

        if (value.match(letter)) {
            //true
            document.getElementById(spanId).innerHTML = ""
            return true
        }
        //false
        getEle(spanId).innerHTML = mess
        return false
    }
    //
    ktraEmail(value, spanId, mess) {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (value.match(reg)) {
            //true
            document.getElementById(spanId).innerHTML = ""
            return true
        }
        document.getElementById(spanId).innerHTML = mess
        return false
    }
    //
    ktraTrungLap(data, value, spanId, mess) {
        var valid = false;
    
        for (let i = 0; i < data.length; i++) {
            const user = data[i];
            if (user.id === value) {
                valid = true;
                break;
            }
        }
    
        if (valid) {
            // Duplicate found
            document.getElementById(spanId).innerHTML = mess;
            return false;
        }
    
        // No duplicate found
        document.getElementById(spanId).innerHTML = "";
        return true;
    }
    
    ktraDang(spanId, mess) {
        if (document.getElementById("ChoseType").selectedIndex === 0) {
            //show error
            document.getElementById(spanId).innerHTML = mess
            return false
        } else {
            document.getElementById(spanId).innerHTML = ""
            return true
        }
    }
}
export default Validation
