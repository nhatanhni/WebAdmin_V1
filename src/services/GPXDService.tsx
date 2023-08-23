import request from "helpers/request"
const Por_GPXD = "Por_GPXD";
const GPXDService = {    
    SearchItems: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_GPXD}/Search`,
            method: 'post',
            data
        });
        return res
    },
    Import: async (data:any) => {        
        let formdata = new FormData()
        formdata.append("file", data)
        let res:any = await request({
            url: `/${Por_GPXD}/Import`,
            method: 'post',
            data:formdata
        });
        return res
    },
    FileTemplate: async () => {        
        let res:any = await request({
            url: `/${Por_GPXD}/FileTemplate`,
            method: 'get'
        });
        return res
    },
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_GPXD}/1/1000/0`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_GPXD}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_GPXD}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_GPXD}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_GPXD}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_GPXD}`,
            method: 'delete',
            data: [{Id:id}]          
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, soto:any, sothua:any) => {
        let res:any = await request({
          url: `/${Por_GPXD}/CheckDuplicateAttributes?Id=${id}&Soto=${soto}&Sothua=${sothua}`,
          method: 'get'
        })
        return res;
    }
}
export default GPXDService
