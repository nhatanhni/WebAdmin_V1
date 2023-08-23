import request from "helpers/request"
const Por_GCNQSDD = "Por_GCNQSDD";
const GCNQSDDService = {    
    SearchItems: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_GCNQSDD}/Search`,
            method: 'post',
            data
        });
        return res
    },
    Import: async (data:any) => {        
        let formdata = new FormData()
        formdata.append("file", data)
        let res:any = await request({
            url: `/${Por_GCNQSDD}/Import`,
            method: 'post',
            data:formdata
        });
        return res
    },
    FileTemplate: async () => {        
        let res:any = await request({
            url: `/${Por_GCNQSDD}/FileTemplate`,
            method: 'get'
        });
        return res
    },
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_GCNQSDD}/1/1000/0`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_GCNQSDD}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_GCNQSDD}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_GCNQSDD}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_GCNQSDD}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_GCNQSDD}`,
            method: 'delete',
            data: [{Id:id}]          
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, soto:any, sothua:any) => {
        let res:any = await request({
          url: `/${Por_GCNQSDD}/CheckDuplicateAttributes?Id=${id}&Soto=${soto}&Sothua=${sothua}`,
          method: 'get'
        })
        return res;
    }
}
export default GCNQSDDService
