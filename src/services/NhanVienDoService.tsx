import { IModelItem } from "components/User/Role/InitState";
import request from "helpers/request"
const Speed_NhanVienDo = "Speed_ThongTinNhanVienDo";
const NhanVienDoService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Speed_NhanVienDo}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Speed_NhanVienDo}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Speed_NhanVienDo}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Speed_NhanVienDo}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Speed_NhanVienDo}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        // let res:any = await request({
        //     url: `/${Speed_NhanVienDo}/DeleteById/${id}`,
        //     method: 'delete'            
        // });
        // return res
        var data = [{ Id: id }]
        let res:any = await request({
            url: `/${Speed_NhanVienDo}`,
            method: 'delete',
            data: data      
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any) => {
        let res:any = await request({
          url: `/${Speed_NhanVienDo}/CheckDuplicateAttributes?Id=${id}&Code=${code}`,
          method: 'get'
        })
        return res;
    }
}
export default NhanVienDoService
