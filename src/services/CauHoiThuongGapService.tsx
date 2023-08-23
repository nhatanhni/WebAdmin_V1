import request from "helpers/request"
const Por_CauHoiThuongGap = "Por_CauHoiThuongGap";
const CauHoiThuongGapService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_CauHoiThuongGap}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_CauHoiThuongGap}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_CauHoiThuongGap}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_CauHoiThuongGap}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_CauHoiThuongGap}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let data = [{Id: id}]
        let res:any = await request({
            url: `/${Por_CauHoiThuongGap}`,
            method: 'delete',
            data: data         
        });
        return res
    }
}
export default CauHoiThuongGapService
