import request from "../helpers/request"
const Por_TinhThanhPho = "Por_TinhThanhPho";
const Por_QuanHuyen = "Por_QuanHuyen";
const Por_PhuongXaThiTran = "Por_PhuongXaThiTran";
const AddressService = {    
    GetTinhThanhPho: async () => {        
        let res:any = await request({
            url: `/${Por_TinhThanhPho}/GetTinhThanhPho`,
            method: 'get'
        });
        return res
    },
    GetQuanHuyenByIDTP: async (IDTP:any) => {        
        let res:any = await request({
            url: `/${Por_QuanHuyen}/GetQuanHuyenByIDTP?IDTP=` + IDTP,
            method: 'get'
        });
        return res
    },
    GetQuanHuyenByMaQH: async (MaQH:any) => {        
        let res:any = await request({
            url: `/${Por_QuanHuyen}/GetQuanHuyenByMaQH?MaQH=` + MaQH,
            method: 'get'
        });
        return res
    },
    GetPhuongXaThiTranByIDQH: async (IDQH:any) => {        
        let res:any = await request({
            url: `/${Por_PhuongXaThiTran}/GetPhuongXaThiTranByIDQH?IDQH=` + IDQH,
            method: 'get'
        });
        return res
    },
    GetTinhThanhPhoByMaTP: async (MaTP:any) => {        
        let res:any = await request({
            url: `/${Por_TinhThanhPho   }/GetTinhThanhPhoByMaTP?MaTP=` + MaTP,
            method: 'get'
        });
        return res
    },
    GetQuanHuyenByMaTP: async (MaTP:any) => {        
        let res:any = await request({
            url: `/${Por_QuanHuyen}/GetQuanHuyenByMaTP?MaTP=` + MaTP,
            method: 'get'
        });
        return res
    },
    GetPhuongXaThiTranByMaQH: async (MaQH:any) => {        
        let res:any = await request({
            url: `/${Por_PhuongXaThiTran}/GetPhuongXaThiTranByMaQH?MaQH=` + MaQH,
            method: 'get'
        });
        return res
    },
}
export default AddressService
