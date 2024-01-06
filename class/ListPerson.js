class ListPerson {
    constructor() {
        this.arr = []
    }
    //Method
    //Thêm người dùng
    AddUser(User) {
        this.arr.push(User)
    }
    //tim vi tri
    FindIndex(id) {
        let index = -1
        for (let i = 0; i < this.arr.length; i++) {
            if (id === this.arr[i].id) {
                index = i
                break
            }
        }
        return index
    }
    //Thuc hien nguoi dung
    DelUser(id) {
        const index = this.FindIndex(id)
        if (index === -1) {
            alert("Không tìm thấy id")
        } else {
            this.arr.splice(index, 1)
        }
    };
    //Lay thong tin
    layThongTin(id) {
        const index = this.timViTri(id)
        if (index !== -1) {
            return this.arr[index]
        }
        return null
    };
    //cập nhật TT
    capNhatSV(user) {
        const index = this.timViTri(user.id)
        if (index !== -1) {
            this.arr[index] = user
        }
    };
    //sắp xếp theo loại
    typeFilter(type) {
        const user = this.arr;
        const typeFilter = [];
    
        for (let i = 0; i < user.length; i++) {
            if (user[i].type === type) {
                typeFilter.push(user[i]);
            }
        }
    
        return typeFilter;
    }
}

export default ListPerson