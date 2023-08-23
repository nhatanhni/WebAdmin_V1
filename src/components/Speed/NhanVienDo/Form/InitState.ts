import { Guid } from "models/Enums";

export interface IModelItem {
    Id: String;
    ho_va_ten: String;
    don_vi: String;
    so_dien_thoai: String;
    email: String;
    link_ket_qua: String;
    ngay_test: Date;
    id_result: String;
}
export interface IState {
    DataItem: IModelItem
}
export const InitState: IState = {
    DataItem: {
        Id: Guid.Empty,
        ho_va_ten: "",
        don_vi: "",
        so_dien_thoai: "",
        email: "",
        link_ket_qua: "",
        ngay_test: new Date(),
        id_result: ""
    }
};  
