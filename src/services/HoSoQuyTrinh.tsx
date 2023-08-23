import { IModelItem } from "components/User/Role/InitState";
import request from "helpers/request"
const Por_HoSo_QuyTrinh = "Por_HoSo_QuyTrinh";
const HoSoQuyTrinhService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_HoSo_QuyTrinh}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_HoSo_QuyTrinh}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_HoSo_QuyTrinh}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_HoSo_QuyTrinh}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_HoSo_QuyTrinh}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_HoSo_QuyTrinh}/DeleteById/${id}`,
            method: 'delete'            
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any) => {
        let res:any = await request({
          url: `/${Por_HoSo_QuyTrinh}/CheckDuplicateAttributes?Id=${id}&Code=${code}`,
          method: 'get'
        })
        return res;
    }
}
export default HoSoQuyTrinhService
