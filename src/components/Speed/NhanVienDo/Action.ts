import { IResponseMessage } from "models/Apps";
import NhanVienDoService from "services/NhanVienDoService";

export const Actions: any = { 
    GetItems: async (dispatch:any)  =>  {
        let res:IResponseMessage = await NhanVienDoService.GetItems();               
        if(res && res.Success)
        {           
            dispatch({
                type: "GetItems",
                items: res.Data.Items
            })
        }                       
    },
    DeleteById: async (id:String, dispatch:any) => {                
        let res:IResponseMessage = await NhanVienDoService.DeleteById(id);               
        return res;
    }
}