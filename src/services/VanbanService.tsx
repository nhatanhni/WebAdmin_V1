import request from "helpers/request"
const Por_VanBanPhapQuy = "Por_VanBanPhapQuy";
const VanbanService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_VanBanPhapQuy}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetItemsByLoaiVanBanId: async (id:any) => {
        let res:any = await request({
            url: `/${Por_VanBanPhapQuy}/GetItemsByLoaiVanBanId/1/1000/1000/` + id,
            method: 'get'
        });
        return res
    },
    GetVanbanParam: async (text:any) => {        
        let res:any = await request({
            url: `/${Por_VanBanPhapQuy}/GetDSVanBan?search=${text}`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_VanBanPhapQuy}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_VanBanPhapQuy}`,
            method: 'post',
            data
        });
        return res
    },
    CreateItemAndFile: async (data:any) => {              
        var formData = new FormData();           
        if(data.Files)
        {
            for(let i = 0;i < data.Files.length;i++)
            {
                if(typeof data.Files[i].Url == "object")
                {
                    var file = data.Files[i].Url;
                    formData.append("file_" + i, file);  
                    // delete data["Files"];
                }
            }
        }
        var tempData = {...data};
        delete tempData["Files"];
        formData.append("data", JSON.stringify(tempData));  
        let res:any = await request({
            url: `/${Por_VanBanPhapQuy}/SaveMultipleAndUploadFile`,
            method: 'post',
            data: formData
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_VanBanPhapQuy}`,
            method: 'put',
            data
        });
        return res
    },
    UpdateItemAndFile: async (data:any) => {        
        var formData = new FormData();           
        if(data.Files && data.Files.length > 0)
        {
            for(let i = 0;i < data.Files.length;i++)
            {
                if(typeof data.Files[i].Url == "object")
                {
                    var file = data.Files[i].Url;
                    formData.append("file_" + i, file);  
                    // delete data["Files"];
                }
            }
        }
        else
        {
            data.TenFile = "";
            data.URL = "";
        }
        var tempData = {...data};
        delete tempData["Files"];
        formData.append("data", JSON.stringify(tempData));  
        let res:any = await request({
            url: `/${Por_VanBanPhapQuy}/SaveMultipleAndUploadFile`,
            method: 'post',
            data: formData
        });
        return res
    },
    DeleteById: async (id:any) => {        
        var data = [{ Id: id }]
        let res:any = await request({
            url: `/${Por_VanBanPhapQuy}/DeleteVB/${id}`,
            method: 'delete',
            data: data      
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, TenVanBan:any, type:any) => {
        let res:any = await request({
          url: `/${Por_VanBanPhapQuy}/CheckDuplicateAttributes?Id=${id}&TenVanBan=${TenVanBan}`,
          method: 'get'
        })
        return res;
    }
}
export default VanbanService
