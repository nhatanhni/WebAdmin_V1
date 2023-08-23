import request from "helpers/request"
const Speed_DataOkla = "Speed_DataOkla";
const Speed_DataOklaService = { 
    ExportMauTestCBNV: async (data:any) => {   
        console.log(data)
        let res:any = await request({
            url: `/${Speed_DataOkla}/ExportMauTestCBNV`,
            method: 'post',
            data
        });
        return res
    },
    ImportFileMnp: async (file:any) => {   
        var formData = new FormData(); 
        formData.append("file", file);   
        let res:any = await request({
            url: `/${Speed_DataOkla}/ImportFileMnpAsync`,
            method: 'post',
            data: formData
        });
        return res
    }
}
export default Speed_DataOklaService
