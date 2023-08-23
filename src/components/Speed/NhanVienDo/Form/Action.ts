import { IResponseMessage } from "models/Apps";
import { Guid } from "models/Enums";
import NhanVienDoService from "services/NhanVienDoService";
import { IModelItem } from "./InitState";

export const Actions: any = { 
    GetItem: async (id:String, dispatch:any) =>  {  
        if(id)
        {      
            let res:IResponseMessage = await NhanVienDoService.GetItem(id);               
            if(res && res.Success)
            {                       
                dispatch({
                    type: "GetItem",
                    item: res.Data
                })
            }          
        }
        else
        {
            let itemNew: IModelItem = { 
                Id: Guid.Empty,
                ho_va_ten: "",
                don_vi: "",
                so_dien_thoai: "",
                email: "",
                link_ket_qua: "",
                ngay_test: new Date(),
                id_result: ""
            }
            dispatch({
                type: "GetItem",
                item: itemNew
            })
        }
    },
    CreateItem: async (item: IModelItem, dispatch:any) => {   
        var split = item.link_ket_qua.split("https://www.speedtest.net/result/")     
        if(split.length == 2)
        {
            item.id_result = split[1];
        }
        let res:IResponseMessage = await NhanVienDoService.CreateItem(item);               
        return res;
    },
    UpdateItem: async (item: IModelItem, dispatch:any) => {        
        var split = item.link_ket_qua.split("https://www.speedtest.net/result/")     
        if(split.length == 2)
        {
            item.id_result = split[1];
        }
        let res:IResponseMessage = await NhanVienDoService.UpdateItem(item);               
        return res;
    },
    CheckDuplicateAttributes: async (id: any, code: any, dispatch:any) => {        
        let res:IResponseMessage = await NhanVienDoService.CheckDuplicateAttributes(id, code);               
        return res;
    }
}