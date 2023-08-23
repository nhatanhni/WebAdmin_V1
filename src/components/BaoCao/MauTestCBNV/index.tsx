import { CtrlButton, CtrlNotification } from "components/common";
import Card from "components/common/Card";
import CtrlDate from "components/common/CtrlDate";
import { Upload } from "element-react";
import { Cookie } from "helpers/cookie";
import { Message } from "models/Enums";
import React, { useRef, useState } from 'react'
import Speed_DataOklaService from "services/Speed_DataOklaService";
interface Props {

}

const Index = (props: Props) => {  
    const [formSearch, setFormSearch] = useState({fromDate: "", toDate: "", });

    const refNotification = useRef<any>();

    let XuatBaoCao = async () => {
        let csv = await Speed_DataOklaService.ExportMauTestCBNV(formSearch);
        console.log(csv)
        const filename = 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
          csv = 'data:text/csv;charset=utf-8,' + csv;
        }
      
        const data = encodeURI(csv);
      
        const link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }

    let ButtonGroupsRender = () => {
        return <>
            <CtrlButton title="Xuất báo cáo" onClick={() => { XuatBaoCao() }} />
        </>;
    }   
    const onChangeFormSearch = (key: string, value: string) => {
        setFormSearch({
            ...formSearch,
            [key]: value
        })
    }
    return(
        <>
        <CtrlNotification ref={refNotification} />   
        <Card key='ImportFIle' title='Giám sát mẫu test của CBCNV ' buttonGroups={ButtonGroupsRender()}>
            <div>
                <div className="row"> 
                    <div className="col-sm-2">
                        <CtrlDate placeholder="Từ ngày" key={"fromDate"} onChange={(e:any) => {onChangeFormSearch('fromDate', e)}} value={formSearch.fromDate} />         
                    </div> 
                    <div className="col-sm-2">
                        <CtrlDate placeholder="Đến ngày" key={"toDate"} onChange={(e:any) => {onChangeFormSearch('toDate', e)}} value={formSearch.toDate} />    
                    </div> 
                </div>
            </div>
        </Card>
        </>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
  
};

export default Index;