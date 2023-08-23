import { CtrlButton, CtrlNotification } from "components/common";
import Card from "components/common/Card";
import { Upload } from "element-react";
import { Cookie } from "helpers/cookie";
import { Message } from "models/Enums";
import React, { useRef, useState } from 'react'
import Speed_DataOklaService from "services/Speed_DataOklaService";
interface Props {

}

const Index = (props: Props) => {  
    const [fileList, setFileList] = useState<any>();
    const refNotification = useRef<any>();
    const refUpload = useRef<any>();
    const UploadFile = async () => {
        refUpload.current.submit()
        // await Speed_DataOklaService.ImportFileMnp(fileList[0]);
        refNotification.current.showNotification("success", Message.Response_Success);
        // setFileList([])
    }
    let ButtonGroupsRender = () => {
        return <>
            <CtrlButton title="Upload File" onClick={() => { UploadFile() }} />
        </>;
    }   

    return(
        <>
        <CtrlNotification ref={refNotification} />   
        <Card key='ImportFIle' title='Import file MNP' buttonGroups={ButtonGroupsRender()}>
            <Upload
                ref={refUpload}
                fileList={fileList}
                className="upload-demo"
                drag
                autoUpload={false}
                headers={{ Authorization : 'Bearer ' + Cookie.getCookie("Token")}}
                action={`${process.env.API_URL}/Speed_DataOkla/ImportFileMnpAsync`}
                multiple={false}
                >
                <i className="el-icon-upload"></i>
                <div className="el-upload__text">Thả tập tin của bạn ở đây</div>
            </Upload>
        </Card>
        </>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
  
};

export default Index;