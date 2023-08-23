import request from "helpers/request"
const Por_NCCDMDSDD = "Por_NCCDMDSDD";
const GPXDService = {    
    SearchItems: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_NCCDMDSDD}/Search`,
            method: 'post',
            data
        });
        return res
    },
    Import: async (data:any) => {        
        let formdata = new FormData()
        formdata.append("file", data)
        let res:any = await request({
            url: `/${Por_NCCDMDSDD}/Import`,
            method: 'post',
            data:formdata
        });
        return res
    },
    FileTemplate: async () => {        
        let res:any = await request({
            url: `/${Por_NCCDMDSDD}/FileTemplate`,
            method: 'get'
        });
        return res
    },
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_NCCDMDSDD}/1/1000/0`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_NCCDMDSDD}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_NCCDMDSDD}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_NCCDMDSDD}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_NCCDMDSDD}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_NCCDMDSDD}`,
            method: 'delete',
            data: [{Id:id}]          
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, soto:any, sothua:any) => {
        let res:any = await request({
          url: `/${Por_NCCDMDSDD}/CheckDuplicateAttributes?Id=${id}&Soto=${soto}&Sothua=${sothua}`,
          method: 'get'
        })
        return res;
    }
}
export default GPXDService
