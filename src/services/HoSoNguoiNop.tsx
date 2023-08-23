import { IModelItem } from "components/User/Role/InitState";
import request from "helpers/request"
import { Guid } from "models/Enums";
const Por_HoSoNguoiNop = "Por_HoSoNguoiNop";
const Por_NopHoSoTrucTuyen = "NopHoSoTrucTuyen";
var Sys_Dashboard = "Sys_Dashboard";
const HoSoNguoiNopService = {    
    HuyQuyTrinh: async (Id:any, NoiDung:any) => {
        var data = {
            Id: Id,
            NoiDungHuy: NoiDung
        }
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/HuyQuyTrinh`,
            method: 'post',
            data
        });
        return res
    },
    DsBuocQuyTrinhHoSo: async (Id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/DsBuocQuyTrinhHoSo?Id=` + Id,
            method: 'get'
        });
        return res
    },
    ThanhToanHoSo: async (Id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/ThanhToanHoSo?Id=` + Id,
            method: 'get'
        });
        return res
    },
    TiepNhanHoSo: async (Id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/TiepNhanHoSo?Id=` + Id,
            method: 'get'
        });
        return res
    },
    GuiHoSo: async (Id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/GuiHoSo?Id=` + Id,
            method: 'get'
        });
        return res
    },
    InPhieuTiepNhan: async (Id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/InPhieuTiepNhan?Id=` + Id,
            method: 'get'            
        });
        return res
    },
    InPhieuBienNhan: async (Id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/InPhieuBienNhan?Id=` + Id,
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
    TiepTuc: async (Id:any) => {
        var data = {
            Id: Id
        }
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/TiepTuc`,
            method: 'post',
            data
        });
        return res
    }, 
    TamDung: async (Id:any, NoiDung:any, TieuChi:any) => {
        if(TieuChi == 0)
        {
            TieuChi = Guid.Empty;
        }
        var data = {
            Id: Id,
            NoiDung: NoiDung,
            TieuChi: TieuChi
        }
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/TamDung`,
            method: 'post',
            data
        });
        return res
    }, 
    TraNguocLai: async (Id:any, NoiDung:any) => {
        var data = {
            Id: Id,
            NoiDungXuLy: NoiDung
        }
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/TraNguocLai`,
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
            url: `/${Por_HoSoNguoiNop}/ChuyenXuLy`,
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
            url: `/${Por_HoSoNguoiNop}/TraKetQua`,
            method: 'post',
            data
        });        
        return res
    },  
    TraCuuHoSo: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/TraCuuHoSo?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoHoanThanh: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/HoSoHoanThanh?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoTamNgung: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/HoSoTamNgung?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoHuy: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/HoSoHuy?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoTraKetQua: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/HoSoTraKetQua?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoChoTiepNhan: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/HoSoChoTiepNhan?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    HoSoXuLy: async (SoHoSo:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/HoSoXuLy?SoHoSo=` + SoHoSo,
            method: 'get'
        });
        return res
    },
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/1/1000/1000`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/${id}`,
            method: 'get'
        });
        return res
    },
    LuuHoSoQuyTrinh: async (formData:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/LuuHoSoQuyTrinh`,
            method: 'post',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res
    },
    UploadFileBuocQuyTrinh: async (formData:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/UploadFileBuocQuyTrinh`,
            method: 'post',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res
    },
    SuaHoSoQuyTrinh: async (formData:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/SuaHoSoQuyTrinh`,
            method: 'post',
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        return res
    },
    LayChiTietHoSoQuyTrinh: async (id:any) => {
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/LayChiTietHoSoQuyTrinh?id=` + id,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Por_HoSoNguoiNop}/XoaHoSo/${id}`,
            method: 'delete'            
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any) => {
        let res:any = await request({
          url: `/${Por_HoSoNguoiNop}/CheckDuplicateAttributes?Id=${id}&Code=${code}`,
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
