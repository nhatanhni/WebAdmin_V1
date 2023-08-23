import request from "helpers/request"
const Por_ThuaDat = "Por_ThuaDat";
const ThuaDatService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_ThuaDat}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_ThuaDat}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_ThuaDat}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_ThuaDat}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_ThuaDat}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_ThuaDat}/DeleteById/${id}`,
            method: 'delete'            
        });
        return res
    },
    GetByHoSoId: async (idHoSo:any) => {
        let res:any = await request({
            url: `/${Por_ThuaDat}/GetByHoSoId?hosoId=${idHoSo}`,
            method: 'get'            
        });
        return res
    }
}
export default ThuaDatService
