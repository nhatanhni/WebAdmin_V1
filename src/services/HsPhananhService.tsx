import request from "helpers/request"
const Por_PhanAnh = "Por_PhanAnh";
const PhananhService = {    
    GetItems: async (type:any) => {        
        let res:any = await request({
            url: `/${Por_PhanAnh}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_PhanAnh}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_PhanAnh}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_PhanAnh}`,
            method: 'post',
            data
        });
        return res
    },
    GhiChuPhanAnh: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_PhanAnh}/GhiChuPhanAnh`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_PhanAnh}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        var data = [{ Id: id }]
        let res:any = await request({
            url: `/${Por_PhanAnh}`,
            method: 'delete',
            data: data      
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any, type:any) => {
        let res:any = await request({
          url: `/${Por_PhanAnh}/CheckDuplicateAttributes?Id=${id}&Code=${code}&Type=${type}`,
          method: 'get'
        })
        return res;
    }
}
export default PhananhService
