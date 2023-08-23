import request from "helpers/request"
const TemplateMauPhieuBienNhan = "Por_TemplatePhieuBienNhan";
const TemplateMauPhieuBienNhanService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${TemplateMauPhieuBienNhan}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${TemplateMauPhieuBienNhan}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${TemplateMauPhieuBienNhan}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${TemplateMauPhieuBienNhan}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${TemplateMauPhieuBienNhan}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${TemplateMauPhieuBienNhan}`,
            method: 'delete',
            data: [{Id:id}]         
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any) => {
        let res:any = await request({
          url: `/${TemplateMauPhieuBienNhan}/CheckDuplicateAttributes?Id=${id}&Ma=${code}`,
          method: 'get'
        })
        return res;
    }
}
export default TemplateMauPhieuBienNhanService
