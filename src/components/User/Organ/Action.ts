import { IResponseMessage } from "models/Apps";
import CategoryService from "services/CategoryService";
import OrganService from "services/OrganService";
import QuyTrinhService from "services/QuyTrinhService";

export const Actions: any = { 
    GetLopBanDo: async (dispatch:any)  =>  {
        let res:IResponseMessage = await CategoryService.GetItems(10);               
        if(res && res.Success)
        {           
            dispatch({
                type: "GetLopBanDo",
                items: res.Data.Items
            })
        }                       
    },
    DsQuyTrinh: async (dispatch:any) => {
        let res:IResponseMessage = await QuyTrinhService.DsQuyTrinh();               
        if(res && res.Success)
        {           
            dispatch({
                type: "GetDsQuyTrinh",
                items: res.Data
            })
        } 
    },
    GetItems: async (parentId:any, dispatch:any)  =>  {
        let res:IResponseMessage = await OrganService.GetByParentId(parentId);               
        if(res && res.Success)
        {           
            dispatch({
                type: "GetItems",
                items: res.Data
            })
        }                       
    },
    GetTree: async (dispatch:any) => {
        let res:IResponseMessage = await OrganService.GetTree();               
        if(res && res.Success)
        {           
            dispatch({
                type: "GetTree",
                tree: res.Data
            })
        }    
    },
    DeleteById: async (id:String, dispatch:any) => {                
        let res:IResponseMessage = await OrganService.DeleteById(id);               
        return res;
    }
}