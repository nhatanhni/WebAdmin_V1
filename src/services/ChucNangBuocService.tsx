import request from "helpers/request"
const Por_ChucNang_BuocQuyTrinh = "Por_ChucNang_BuocQuyTrinh";
const ChucNang_BuocQuyTrinhService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_ChucNang_BuocQuyTrinh}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    DeleteById: async(data:any) => {
        let res:any = await request({
          url: `/${Por_ChucNang_BuocQuyTrinh}`,
          method: 'delete',
          data
        })
        return res;
    },
    CreateItem: async(data:any) => {
        let res:any = request({
          url: `/${Por_ChucNang_BuocQuyTrinh}`,
          method: 'post',
          data: data
        })
        return res;
    },
    UpdateItem: async(data:any) => {
        let res:any = request({
          url: `/${Por_ChucNang_BuocQuyTrinh}`,
          method: 'put',
          data: data
        })
        return res;
    },
    GetItem: async(id:any) => {
        let res:any = request({
          url: `/${Por_ChucNang_BuocQuyTrinh}/` + id,
          method: 'get'
        })
        return res;
    },
    CheckDuplicateAttributes: async (id: any, ten: any) => {
        let res:any = await request({
          url: `/${Por_ChucNang_BuocQuyTrinh}/CheckDuplicateAttributes?Id=${id}&Ten=${ten}`,
          method: 'get'
        })
        return res;
    }
}
export default ChucNang_BuocQuyTrinhService
