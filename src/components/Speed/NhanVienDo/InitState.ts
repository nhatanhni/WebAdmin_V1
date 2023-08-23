export interface IModelItem {
    Id: String;
    ho_va_ten: String;
    don_vi: String;
    so_dien_thoai: String;
    email: String;
    link_ket_qua: String;
    ngay_test: String;
}
export interface IState {
    DataItems: IModelItem[]
}
export const InitState: IState = {
    DataItems: []
};  
