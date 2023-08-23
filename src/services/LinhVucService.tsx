import { IModelItem } from "components/User/Role/InitState";
import request from "helpers/request"
const Por_LinhVuc = "Por_LinhVuc";
const LinhVucService = {  
    GetTree: async () => {
      let res:any = await request({
        url: `/${Por_LinhVuc}/Tree`,
        method: 'get'
      })
      return res;
    },  
    GetByParentId: async (parentId:any) => {
        let res:any = await request({
          url: `/${Por_LinhVuc}/List/${parentId}`,
          method: 'get'
        })
        return res;
    },
    GetItem: async (id:String) => {        
      let res:any = await request({
          url: `/${Por_LinhVuc}/${id}`,
          method: 'get'
      });
      return res
    },    
    DeleteById: async (id:any) => {
        let res:any = await request({
          url: `/${Por_LinhVuc}/DeleteById/${id}`,
          method: 'delete'
        })
        return res;
    },
    CreateItem: async (data:any) => {        
      let res:any = await request({
          url: `/${Por_LinhVuc}`,
          method: 'post',
          data
      });
      return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_LinhVuc}`,
            method: 'put',
            data
        });
        return res
    },   
    // CheckDuplicateAttributes: async (id:any, code:any, parentId:any) => {
    //   let res:any = await request({
    //     url: `/${Por_LinhVuc}/CheckDuplicateAttributes?Id=${id}&Code=${code}&ParentId=${parentId}`,
    //     method: 'get'
    //   })
    //   return res;
    // }     
}
export default LinhVucService
