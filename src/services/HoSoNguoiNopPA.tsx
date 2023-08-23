import { IModelItem } from "components/User/Role/InitState";
import request from "helpers/request"
const Por_HoSoNguoiNopPA = "Por_HoSoNguoiNopPA";
const Por_NopHoSoTrucTuyen = "NopHoSoTrucTuyen";
var Sys_Dashboard = "Sys_Dashboard";
const HoSoNguoiNopService = {    
    HuyQuyTrinh: async (Id:any, NoiDung:any) => {
        var data = {
            Id: Id,
            NoiDungHuy: NoiDung
        }
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/HuyQuyTrinh`,
            method: 'post',
            data
        });
        return res
    },
    DsBuocQuyTrinhHoSo: async (Id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/DsBuocQuyTrinhHoSo?Id=` + Id,
            method: 'get'
        });
        return res
    },
    TiepNhanHoSo: async (Id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/TiepNhanHoSo?Id=` + Id,
            method: 'get'
        });
        return res
    },
    InPhieuTiepNhan: async (Id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/InPhieuTiepNhan?Id=` + Id,
            method: 'get'            
        });
        return res
    },
    HoSoDashboard: async () => {
        let res:any = await request({
            url: `/${Sys_Dashboard}/HoSoDashboard`,
            method: 'get'            
        });
        return res
    },
    TraNguocLai: async (Id:any, NoiDung:any) => {
        var data = {
            Id: Id,
            NoiDungXuLy: NoiDung
        }
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/TraNguocLai`,
            method: 'post',
            data
        });
        return res
    }, 
    ChuyenXuLy: async (Id:any, NoiDung:any) => {
        var data = {
            Id: Id,
            NoiDungXuLy: NoiDung
        }
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/ChuyenXuLy`,
            method: 'post',
            data
        });
        return res
    },  
    TraKetQua: async (Id:any, NoiDung:any) => {
        var data = {
            Id: Id,
            NoiDungXuLy: NoiDung
        }
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/TraKetQua`,
            method: 'post',
            data
        });        
        return res
    },  
    TraCuuHoSo: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/TraCuuHoSo?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoHoanThanh: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/HoSoHoanThanh?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoTamNgung: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/HoSoTamNgung?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoHuy: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/HoSoHuy?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoTraKetQua: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/HoSoTraKetQua?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoChoTiepNhan: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/HoSoChoTiepNhan?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoXuLy: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/HoSoXuLy?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/${id}`,
            method: 'get'
        });
        return res
    },
    LuuHoSoQuyTrinh: async (formData:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/LuuHoSoQuyTrinh`,
            method: 'post',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res
    },
    UploadFileBuocQuyTrinh: async (formData:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/UploadFileBuocQuyTrinh`,
            method: 'post',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res
    },
    SuaHoSoQuyTrinh: async (formData:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/SuaHoSoQuyTrinh`,
            method: 'post',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res
    },
    LayChiTietHoSoQuyTrinh: async (id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/LayChiTietHoSoQuyTrinh?id=` + id,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNopPA}/XoaHoSo/${id}`,
            method: 'delete'            
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any) => {
        let res:any = await request({
          url: `/${Por_HoSoNguoiNopPA}/CheckDuplicateAttributes?Id=${id}&Code=${code}`,
          method: 'get'
        })
        return res;
    },
    LayDsFileMauThanhPhanHS: async (idQuyTrinh:any) => {        
        let res:any = await request({
            url: `/${Por_NopHoSoTrucTuyen}/LayDsFileMauThanhPhanHS?IdQuyTrinh=` + idQuyTrinh,
            method: 'get'            
        });
        return res
    },
}
export default HoSoNguoiNopService
