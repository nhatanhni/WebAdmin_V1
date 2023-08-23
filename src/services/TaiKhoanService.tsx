import request from "helpers/request"
const Por_TaiKhoan = "Por_TaiKhoan";
const TaiKhoanService = {    
    GetItems: async (loginName:any, isActive:any) => {        
        let res:any = await request({
            url: `/${Por_TaiKhoan}?page=1&pageSize=1000&totalLimitItems=1000&trangthai=${isActive}&tentaikhoan=${loginName}`,
            method: 'get'
        });
        return res
    },
    Login: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_TaiKhoan}/Login`,
            method: 'post',
            data
        });
        return res
    },
    Signup: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_TaiKhoan}/Signup`,
            method: 'post',
            data
        });
        return res
    },
    DeleteById: async(data:any) => {
        let res:any = await request({
          url: `/${Por_TaiKhoan}`,
          method: 'delete',
          data
        })
        return res;
    },
    CreateItem: async(data:any) => {
        let res:any = request({
          url: `/${Por_TaiKhoan}`,
          method: 'post',
          data: data
        })
        return res;
    },
    UpdateItem: async(data:any) => {
        let res:any = request({
          url: `/${Por_TaiKhoan}`,
          method: 'put',
          data: data
        })
        return res;
    },
    GetItem: async(id:any) => {
        let res:any = request({
          url: '/Por_TaiKhoan/' + id,
          method: 'get'
        })
        return res;
    },
    CheckDuplicateAttributes: async (id: any, userName: any, email: any) => {
        let res:any = await request({
          url: `/${Por_TaiKhoan}/CheckDuplicateAttributes?Id=${id}&UserName=${userName}&Email=${email}`,
          method: 'get'
        })
        return res;
    } 
}
export default TaiKhoanService
