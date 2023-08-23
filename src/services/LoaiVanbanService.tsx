import request from "helpers/request"
const Por_LoaiVanBanPhapQuy = "Por_LoaiVanBanPhapQuy";
const LoaiVanBanService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_LoaiVanBanPhapQuy}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_LoaiVanBanPhapQuy}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_LoaiVanBanPhapQuy}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_LoaiVanBanPhapQuy}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_LoaiVanBanPhapQuy}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        var data = [{ Id: id }]
        let res:any = await request({
            url: `/${Por_LoaiVanBanPhapQuy}`,
            method: 'delete',
            data: data      
        });
        return res
    }
}
export default LoaiVanBanService
