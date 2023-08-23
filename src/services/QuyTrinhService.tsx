import request from "helpers/request"
const Por_QuyTrinh = "Por_QuyTrinh";
const Por_LinhVuc = "Por_LinhVuc";
const Por_ChucNang_BuocQuyTrinh = "Por_ChucNang_BuocQuyTrinh";
const Por_BuocQuyTrinh = "Por_BuocQuyTrinh";
const Por_FileMauThanhPhanHStrongQT = "Por_FileMauThanhPhanHStrongQT";
const Sys_Category = "Sys_Category";
const Sys_User = "Sys_User";
const QuyTrinhService = {    
    GetItems: async (loginName:any, isActive:any) => {        
        let res:any = await request({
            url: `/${Por_QuyTrinh}?page=1&pageSize=1000&totalLimitItems=1000&trangthai=${isActive}&tentaikhoan=${loginName}`,
            method: 'get'
        });
        return res
    },
    DeleteById: async(data:any) => {
        let res:any = await request({
          url: `/${Por_QuyTrinh}`,
          method: 'delete',
          data
        })
        return res;
    },
    CreateItem: async(data:any) => {
        let res:any = request({
          url: `/${Por_QuyTrinh}`,
          method: 'post',
          data: data
        })
        return res;
    },
    CreateItem_BuocQuyTrinh: async(data:any) => {
      let res:any = request({
        url: `/${Por_BuocQuyTrinh}/SaveMultiple`,
        method: 'post',
        data: data
      })
      return res;
    }, 
    CreateItem_ThanhPhanHoSo: async(data:any) => {
      var formData = new FormData(); 
      for(let i = 0;i < data.length;i++)
      {
        var id = data[i].Id;
        var file = data[i].Files;
        formData.append("file_" + id, file);  
        delete data[i]["Files"];
      }
      formData.append("data", JSON.stringify(data));        
      let res:any = request({
        url: `/${Por_FileMauThanhPhanHStrongQT}/SaveMultipleAndUploadFile`,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: formData
      })
      return res;
    },        
    UpdateItem: async(data:any) => {
        let res:any = request({
          url: `/${Por_QuyTrinh}`,
          method: 'put',
          data: data
        })
        return res;
    },
    GetItem: async(id:any) => {
        let res:any = request({
          url: '/Por_QuyTrinh/' + id,
          method: 'get'
        })
        return res;
    },
    DsBuocQuyTrinhTheoQuyTrinh: async(id:any) => {
      let res:any = request({
        url: '/Por_BuocQuyTrinh/DsBuocQuyTrinhTheoQuyTrinh?Id=' + id,
        method: 'get'
      })
      return res;
    },
    DsFileMauThanhPhanHSTheoQuyTrinh: async(id:any) => {
      let res:any = request({
        url: '/Por_FileMauThanhPhanHStrongQT/DsFileMauThanhPhanHSTheoQuyTrinh?Id=' + id,
        method: 'get'
      })
      return res;
    },    
    CheckDuplicateAttributes: async (id: any, tenThuTuc: any) => {
        let res:any = await request({
          url: `/${Por_QuyTrinh}/CheckDuplicateAttributes?Id=${id}&TenThuTuc=${tenThuTuc}`,
          method: 'get'
        })
        return res;
    },
    GetLoaiPhanAnh: async () => {
      let res:any = await request({
        url: `/${Sys_Category}/1/500/500/${8}`,
        method: 'get'
      })
      return res;
    },
    GetLinhVuc: async () => {
      let res:any = await request({
        url: `/${Por_LinhVuc}/TreeList`,
        method: 'get'
      })
      return res;
    },
    GetTrangThaiHoSo: async () => {
      let res:any = await request({
        url: `/${Sys_Category}/1/500/500/${5}`,
        method: 'get'
      })
      return res;
    },
    GetQuyTrinhTheoLinhVuc: async (id:any) => {
      let res:any = await request({
        url: `/${Por_QuyTrinh}/DsQuyTrinhTheoLinhVuc?Id=` + id,
        method: 'get'
      })
      return res;
    },
    GetQuyTrinhHoatDong: async () => {
      let res:any = await request({
        url: `/${Por_QuyTrinh}/DsQuyTrinhHoatDong`,
        method: 'get'
      })
      return res;
    },
    GetChucNang: async () => {
      let res:any = await request({
        url: `/${Por_ChucNang_BuocQuyTrinh}/Categories`,
        method: 'get'
      })
      return res;
    },     
    GetUser: async () => {
      let res:any = await request({
        url: `/${Sys_User}/Categories`,
        method: 'get'
      })
      return res;
    },    
    GetCapDoThuTuc: async () => {
        let res:any = await request({
          url: `/${Sys_Category}/1/500/500/${0}`,
          method: 'get'
        })
        return res;
    },
    GetMucDo: async () => {
        let res:any = await request({
          url: `/${Sys_Category}/1/500/500/${1}`,
          method: 'get'
        })
        return res;
    },
    GetHinhThucCap: async () => {
        let res:any = await request({
          url: `/${Sys_Category}/1/500/500/${2}`,
          method: 'get'
        })
        return res;
    },
    GetMucDichSuDung: async () => {
      let res:any = await request({
        url: `/${Sys_Category}/1/500/500/${4}`,
        method: 'get'
      })
      return res;
    },
    GetHinhThucNhanKetQua: async () => {
      let res:any = await request({
        url: `/${Sys_Category}/1/500/500/${6}`,
        method: 'get'
      })
      return res;
    },
    GetHinhThucThanhToan: async () => {
      let res:any = await request({
        url: `/${Sys_Category}/1/500/500/${7}`,
        method: 'get'
      })
      return res;
    },
    GetDichVuCungCap: async () => {
      let res:any = await request({
        url: `/${Sys_Category}/1/500/500/${3}`,
        method: 'get'
      })
      return res;
    },
    DsQuyTrinh: async () => {
      let res:any = await request({
        url: `/${Por_QuyTrinh}/DsQuyTrinh`,
        method: 'get'
      })
      return res;      
    },
    XoaQuyTrinh: async (id:any) => {
      let res:any = await request({
        url: `/${Por_QuyTrinh}/XoaQuyTrinh?Id=` + id,
        method: 'delete'
      })
      return res;      
    }
}
export default QuyTrinhService
