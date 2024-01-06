import Person from "./../class/person.js";
import ListPerson from "./../class/ListPerson.js"
import Validation from "./../validation/validation.js"
import Student from "../class/student.js";
import Employee from "../class/employee.js";
import Customer from "../class/customer.js";
const dsus = new ListPerson()
const validation = new Validation()


//Hien thi giao dien tung loai
document.getElementById("ChoseType").addEventListener("change", function () {
    const type = document.getElementById("ChoseType").value
    let content = ``
    if (type === "Giảng viên") {
        content += `
        <div class="container-fluid py-1">
            <h5>Số ngày làm việc</h5>
            <input id="AddWorkingDay" type="number" class="form-control" placeholder="Nhập số ngày làm việc">
            <span id="spanWorkingDay" class="text-danger"></span>
        </div>
        <div class="container-fluid py-1">
            <h5>Lương theo ngày</h5>
            <input id="AddSalary" type="number" class="form-control" placeholder="Nhập lương theo ngày">
            <span id="spanSalary" class="text-danger"></span>
        </div>
    `
    } else if (type === "Khách hàng") {
        content += `
        <div class="container-fluid py-1">
            <h5>Tên công ty</h5>
            <input id="AddCompName" type="text" class="form-control" placeholder="Nhập tên công ty">
            <span id="spanCompName" class="text-danger"></span>
        </div>
        <div class="container-fluid py-1">
            <h5>Trị giá hoá đơn</h5>
            <input id="AddBillPrice" type="number" class="form-control" placeholder="Nhập trị giá hoá đơn">
            <span id="spanBillPrice" class="text-danger"></span>
        </div>
        <div class="container-fluid py-1">
            <h5>Đánh giá</h5>
            <input id="AddRate" type="text" class="form-control" placeholder="Nhập đánh giá">
            <span id="spanRate" class="text-danger"></span>
        </div>
    `
    } else if (type === "Học viên") {
        content += `
        <div class="container-fluid py-1">
            <h5>Điểm Toán</h5>
            <input id="AddToan" type="number" class="form-control" placeholder="Nhập điểm toán">
            <span id="spanToan" class="text-danger"></span>
        </div>
        <div class="container-fluid py-1">
            <h5>Điểm Lý</h5>
            <input id="AddLy" type="number" class="form-control" placeholder="Nhập điểm lý">
            <span id="spanLy" class="text-danger"></span>
        </div>
        <div class="container-fluid py-1">
            <h5>Điểm Hoá</h5>
            <input id="AddHoa" type="number" class="form-control" placeholder="Nhập điểm hoá">
            <span id="spanHoa" class="text-danger"></span>
        </div>
`
    }
    document.getElementById("UserInfo").innerHTML = content
})

//Hien thi nguoi dung
const renderUI = function (data) {
    let content = '';
    for (let i = 0; i < data.length; i++) {
        const user = data[i];

        content += `<tr>
            <td>${i + 1}</td>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.type}</td>`;

        if (user.type === "Giảng viên") {
            content += `
                <td>Giảng viên</td>
                <td class="text-left">
                    <b>Lương theo giờ:</b> ${user.workDay} <br>
                    <b>Lương theo ngày:</b> ${user.SalaryByDay}
                </td>
                <td>
                    <button class="btn btn-primary">Tính lương</button>
                    <button class="btn btn-secondary" onclick = "handleEdit(${user.id})" data-toggle="modal" data-target="#modelId" data-id="${user.id}">Edit</button>
                </td>
            </tr>`;
        } else if (user.type === "Khách hàng") {
            content += `
                <td>Khách hàng</td>
                <td class="text-left">
                    <b>Tên công ty:</b> ${user.NameCompany}  <br>
                    <b>Giá trị hoá đơn:</b> ${user.billCost}  <br>
                    <b>Đánh giá:</b> ${user.rating}
                </td>
                <td>
                <button class="btn btn-secondary" id="btnEdit" data-toggle="modal" data-target="#modelId"  data-id="${user.id}">Edit</button>
                </td>
            </tr>`;
        } else if (user.type === "Học viên") {
            content += `
                <td>Học viên</td>
                <td class="text-left">
                    <b>Điểm toán:</b> ${user.toan} <br>
                    <b>Điểm lý:</b> ${user.ly}  <br>
                    <b>Điểm hoá: </b> ${user.hoa}
                </td>
                <td>
                    <button class="btn btn-primary">Tính điểm trung bình</button>
                    <button class="btn btn-secondary" data-toggle="modal" data-target="#modelId" data-id="${user.id}">Edit</button>
                </td>
            </tr>`;
        }

    }

    document.getElementById("tblDanhSachSP").innerHTML = content;
};
//Lay thong tin & ktra
const CheckValidAndOut = function () {
    const UserId = document.getElementById("AddID").value
    const UserName = document.getElementById("AddName").value
    const UserAddress = document.getElementById("AddAddress").value
    const UserEmail = document.getElementById("AddEmail").value
    const UserType = document.getElementById("ChoseType").value

    //ktra valid
    let isValid = true
    //Ktra ID
    isValid &= validation.ktraRong(UserId, "spanID", "Hãy nhập mã người dùng")
        && validation.kiemTraDoDaiKyTu(UserId, "spanID", "Nhập từ 4 - 10 ký tự", 4, 8)
        && validation.ktraTrungLap(dsus.arr, UserId, "spanID", "Mã người đã được sở hữu")
    //Ktra Name
    isValid &= validation.ktraRong(UserName, "spanName", "Hãy nhập tên người dùng")
        && validation.kiemTraChuoiKyTu(UserName, "spanName", "Nhập đúng tên")
    //Ktra dia chi
    isValid &= validation.ktraRong(UserAddress, "spanAddress", "Hãy nhập địa chỉ")
    //ktra email
    isValid &= validation.ktraRong(UserEmail, "spanEmail", "Hãy nhập email")
        && validation.ktraEmail(UserEmail, "spanEmail", "Nhập đúng cú pháp của email")
    //Ktra dạng
    isValid &= validation.ktraDang("spanTypeUser", "Hãy chọn vị trí người dùng")

    if (UserType === "Học viên") {
        const diemToan = document.getElementById("AddToan").value
        const diemLy = document.getElementById("AddLy").value
        const diemHoa = document.getElementById("AddHoa").value
        //Ktra toan & ly & hoa
        isValid &= validation.ktraRong(diemToan, "spanToan", "Hãy nhập điểm toán")
        isValid &= validation.ktraRong(diemLy, "spanLy", "Hãy nhập lý")
        isValid &= validation.ktraRong(diemHoa, "spanHoa", "Hãy nhập điểm hoá")

        if (!isValid) return
        const student = new Student(UserName, UserAddress, UserId, UserEmail, UserType, diemToan, diemLy, diemHoa)
        return student
    } else if (UserType === "Giảng viên") {
        const NgayLamViec = document.getElementById("AddWorkingDay").value
        const LuongNgay = document.getElementById("AddSalary").value
        //Ktra gio lam va luong
        isValid &= validation.ktraRong(NgayLamViec, "spanWorkingDay", "Hãy nhập ngày làm")
        isValid &= validation.ktraRong(LuongNgay, "spanSalary", "Hãy nhập lương theo ngày")

        if (!isValid) return
        const employee = new Employee(UserName, UserAddress, UserId, UserEmail, UserType, NgayLamViec, LuongNgay)
        return employee
    } else if (UserType === "Khách hàng") {
        const CompanyName = document.getElementById("AddCompName").value
        const billCost = document.getElementById("AddBillPrice").value
        const rating = document.getElementById("AddRate").value
        //Ktra ten cong ty & tri gia bill & danh gia
        isValid &= validation.ktraRong(CompanyName, "spanCompName", "Hãy nhập tên công ty")
        isValid &= validation.ktraRong(billCost, "spanBillPrice", "Hãy nhập trị giá hoá đơn")
        isValid &= validation.ktraRong(rating, "spanRate", "Hãy nhập đánh giá")

        if (!isValid) return
        const customer = new Customer(UserName, UserAddress, UserId, UserEmail, UserType, CompanyName, billCost, rating)
        return customer
    }
}

//Them nv
function handleAddUser() {
    //laythongtin
    const user = CheckValidAndOut()

    if (!user) return
    //Them vao mang
    dsus.AddUser(user)
    //Show
    renderUI(dsus.arr)
    //lưu data xuong localStorage
    setLocalStorage()
    //lấy data từ localStorage
    getLocalStorage()
}

document.getElementById("btnConfirmAdd").addEventListener("click", handleAddUser)

//Xoa nv
function DelUser() {
    const idDel = document.getElementById("txtDelete").value
    if (idDel) {
        dsus.DelUser(idDel)
        //Show
        renderUI(dsus.arr)
        //lưu data xuong localStorage
        setLocalStorage()
        //lấy data từ localStorage
        getLocalStorage()
        //reset
        document.getElementById("txtDelete").value = ""
    } else {
        console.log("asda");
    }
}
document.getElementById("deleteBtn").addEventListener("click", DelUser)

//edit thong tin
function handleEdit(id) {
    document.getElementsByClassName("modal-title")[0].innerHTML = `Sửa thông tin`
    user = dsus.layThongTin(id)
    // hiên nút cập nhật
    if (sv) {
        //DOM tới thẻ input gắn value từ sv
        document.getElementById("AddID").value = user.id
        //disable txtmaSV
        document.getElementById("AddID").disabled = true

        document.getElementById("AddName").value = user.name
        document.getElementById("AddAddress").value = user.address
        document.getElementById("AddEmail").value = user.email
        document.getElementById("ChoseType").value = user.type

        if (user.type === "Khách hàng") {
            document.getElementById("AddCompName").value = user.NameCompany
            document.getElementById("AddBillPrice").value = user.billCost
            document.getElementById("AddRate").value = user.rating
        } else if (user.type === "Học viên") {
            document.getElementById("AddToan").value = user.toan
            document.getElementById("AddLy").value = user.ly
            document.getElementById("AddHoa").value = user.hoa
        } else if (user.type === "Giảng viên") {
            document.getElementById("AddWorkingDay").value = user.workDay
            document.getElementById("AddSalary").value = user.SalaryByDay
        }
    }

}



// editButton.addEventListener('click',handleEdit())
window.addEventListener("DOMContentLoaded", () => {
    function handleEdit(id) {
        document.getElementsByClassName("modal-title")[0].innerHTML = `Sửa thông tin`
        user = dsus.layThongTin(id)
        // hiên nút cập nhật
        if (sv) {
            //DOM tới thẻ input gắn value từ sv
            document.getElementById("AddID").value = user.id
            //disable txtmaSV
            document.getElementById("AddID").disabled = true

            document.getElementById("AddName").value = user.name
            document.getElementById("AddAddress").value = user.address
            document.getElementById("AddEmail").value = user.email
            document.getElementById("ChoseType").value = user.type

            if (user.type === "Khách hàng") {
                document.getElementById("AddCompName").value = user.NameCompany
                document.getElementById("AddBillPrice").value = user.billCost
                document.getElementById("AddRate").value = user.rating
            } else if (user.type === "Học viên") {
                document.getElementById("AddToan").value = user.toan
                document.getElementById("AddLy").value = user.ly
                document.getElementById("AddHoa").value = user.hoa
            } else if (user.type === "Giảng viên") {
                document.getElementById("AddWorkingDay").value = user.workDay
                document.getElementById("AddSalary").value = user.SalaryByDay
            }
        }

    }
});


//Lọc theo loại
const typeFilter = function (type) {
    if (type === "Lọc theo vị trí") {
        renderUI(dsus.arr)
    } else {
        const userFilter = dsus.typeFilter(type)
        renderUI(userFilter)
    }
}
document.getElementById("TypeFilter").addEventListener("change", function() {
    const filterType = document.getElementById("TypeFilter").value
    typeFilter(filterType)
})


//Lưu xuong local
const setLocalStorage = function () {
    //convert data  JSON =>string
    const dataString = JSON.stringify(dsus.arr)
    //Lưu xuống localStorage
    localStorage.setItem("dsus", dataString);
}
//Lay du lieu local
const getLocalStorage = function () {
    const dataString = localStorage.getItem("dsus");

    //có dữ liệu mới dc hoạt động
    if (!dataString) return

    // convert string  => json
    const dataJson = JSON.parse(dataString);

    //Phục hồi data cho dssv.arr
    dsus.arr = dataJson;

    //render UI
    renderUI(dsus.arr)
}
getLocalStorage()