import request from "helpers/request"
const Por_TemplateEmail = "Por_TemplateEmail";
const TemplateEmailService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_TemplateEmail}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_TemplateEmail}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_TemplateEmail}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_TemplateEmail}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_TemplateEmail}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_TemplateEmail}`,
            method: 'delete',
            data: [{Id:id}]         
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any) => {
        let res:any = await request({
          url: `/${Por_TemplateEmail}/CheckDuplicateAttributes?Id=${id}&Ma=${code}`,
          method: 'get'
        })
        return res;
    }
}
export default TemplateEmailService
