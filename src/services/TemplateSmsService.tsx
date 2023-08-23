import request from "helpers/request"
const Por_TemplateSms = "Por_TemplateSms";
const TemplateSmsService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_TemplateSms}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_TemplateSms}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_TemplateSms}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_TemplateSms}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_TemplateSms}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_TemplateSms}`,
            method: 'delete',
            data: [{Id:id}]         
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any) => {
        let res:any = await request({
          url: `/${Por_TemplateSms}/CheckDuplicateAttributes?Id=${id}&Ma=${code}`,
          method: 'get'
        })
        return res;
    }
}
export default TemplateSmsService
