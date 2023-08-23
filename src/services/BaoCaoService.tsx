import request from "helpers/request"
const Sys_BaoCao = "Sys_BaoCao";

const BaoCaoService = {    
    BaoCaoHoSoTheoTungLoai: async (data:any, totalLimitItems:any) => {        
        let res:any = await request({
            url: `/${Sys_BaoCao}/BaoCaoHoSoTheoTungLoai/${totalLimitItems}`,
            method: 'post',
            data
        });
        return res
    },
    XuatBaoCaoHoSoTheoTungLoai: async (data:any, totalLimitItems:any) => {        
        let res:any = await request({
            url: `/${Sys_BaoCao}/XuatBaoCaoHoSoTheoTungLoai/${totalLimitItems}`,
            method: 'post',
            data
        });
        return res
    },
    XuatBaoCaoThuaDatDuocTimKiem: async (data:any, totalLimitItems:any) => {        
        let res:any = await request({
            url: `/${Sys_BaoCao}/XuatBaoCaoThuaDatDuocTimKiem/${totalLimitItems}`,
            method: 'post',
            data
        });
        return res
    },
    XuatBaoCaoTiepNhanHoSo: async (data:any, totalLimitItems:any) => {        
        let res:any = await request({
            url: `/${Sys_BaoCao}/XuatBaoCaoTiepNhanHoSo/${totalLimitItems}`,
            method: 'post',
            data
        });
        return res
    },
    BaoCaoThuaDatDuocTimKiem: async (data:any, totalLimitItems:any) => {        
        let res:any = await request({
            url: `/${Sys_BaoCao}/BaoCaoThuaDatDuocTimKiem/${totalLimitItems}`,
            method: 'post',
            data
        });
        return res
    },
    BaoCaoTiepNhanHoSo: async (data:any, totalLimitItems:any) => {        
      let res:any = await request({
          url: `/${Sys_BaoCao}/BaoCaoTiepNhanHoSo/${totalLimitItems}`,
          method: 'post',
          data
      });
      return res
  }
}
export default BaoCaoService
