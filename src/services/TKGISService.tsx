import request from "helpers/request"
const Por_LogGis = "Por_LogGis";
const Por_LogEmailSms = "Por_LogEmailSms";
const TKGISService = {    
    SearchItems: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_LogGis}/Search`,
            method: 'post',
            data
        });
        return res
    },
    SearchDate: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_LogGis}/SearchDate`,
            method: 'post',
            data
        });
        return res
    },
    SearchLogEmailSmsDate: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_LogEmailSms}/SearchDate`,
            method: 'post',
            data
        });
        return res
    },
    Import: async (data:any) => {        
        let formdata = new FormData()
        formdata.append("file", data)
        let res:any = await request({
            url: `/${Por_LogGis}/Import`,
            method: 'post',
            data:formdata
        });
        return res
    },
    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_LogGis}/1/500/500`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_LogGis}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_LogGis}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_LogGis}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_LogGis}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_LogGis}`,
            method: 'delete',
            data: [{Id:id}]          
        });
        return res
    }
    
}
export default TKGISService
