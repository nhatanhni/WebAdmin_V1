import request from "../helpers/request"
const Por_TaiKhoanLopBanDo = "Por_TaiKhoanLopBanDo";

const Por_TaiKhoanLopBanDoService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_TaiKhoanLopBanDo}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_TaiKhoanLopBanDo}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_TaiKhoanLopBanDo}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_TaiKhoanLopBanDo}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_TaiKhoanLopBanDo}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteByIdLopBanDo: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_TaiKhoanLopBanDo}/DeleteByIdLopBanDo/${id}`,
            method: 'get'   
        });
        return res
    },
}
export default Por_TaiKhoanLopBanDoService
