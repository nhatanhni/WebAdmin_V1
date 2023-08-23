import request from "helpers/request"
const Sys_EmailSms = "Sys_EmailSmsConfig";
const ConfigEmailSmsService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Sys_EmailSms}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Sys_EmailSms}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Sys_EmailSms}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Sys_EmailSms}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Sys_EmailSms}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let data = [{Id: id}]
        let res:any = await request({
            url: `/${Sys_EmailSms}`,
            method: 'delete',
            data: data         
        });
        return res
    }
}
export default ConfigEmailSmsService
