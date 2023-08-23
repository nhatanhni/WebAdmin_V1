import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from 'components/Home';
import { Config } from 'components/System';
import { Account, Organ, Permission, Role } from 'components/User';
import { CategoryTrangThai } from 'components/Category';
import menu_config from 'assets/json/menu_config.json'
import Page404 from 'components/common/Page404';
import Profile from 'components/common/Profile';
import Page401 from 'components/common/Page401';
import { Cookie } from 'helpers/cookie';
import { IUserInfo } from 'models/Apps';
import Setting from 'components/common/Setting';
import Support from 'components/common/Support';
import ImportFileMNP from 'components/Speed/ImportFileMNP';
import NhanVienDo from 'components/Speed/NhanVienDo';
import MauTestCBCNV from 'components/BaoCao/MauTestCBNV'
interface Props {
    Apps: any
}

const MainPageRoute = (props: Props) => {  
    const GetPage = (code:String) => {
        switch(code)
        {
            case "Home":
                return <Home />;
            case "Config":
                return <Config />;  
            case "Account":
                return <Account />;              
            case "Organ":
                return <Organ />;
            case "Permission":
                return <Permission />;
            case "Role":
                return <Role />;  
            case "CategoryTrangThai":
                return <CategoryTrangThai />; 
            case "ImportFileMNP":
                return <ImportFileMNP />;     
            case "NhanVienDo":
                return <NhanVienDo />; 
            case "MauTestCBCNV":
                return <MauTestCBCNV />;                                     
            default:
                return <Page404 />;                                                                                                         
        }        
    }
    const RouteRender = () => {
        let html = [];
        let rootMenu:any = menu_config.Menu;
        for(let i = 0;i < rootMenu.length;i++)
        {
            let menu = rootMenu[i];
            if(IsMenuOfUser(menu)) {
                html.push(<Route key={menu.code} path={menu.url} element={GetPage(menu.code)} />)
            }
            if(menu.subMenu && menu.subMenu.length > 0) 
            {
                for(let j = 0;j < menu.subMenu.length;j++)
                {
                    let subMenu = menu.subMenu[j];
                    if(IsMenuOfUser(subMenu)) {
                        html.push(<Route key={subMenu.code} path={subMenu.url} element={GetPage(subMenu.code)} />)
                    }
                }
            }
        }
        return html;
    }
    const IsMenuOfUser = (menu:any) => {      
        let userInfo:IUserInfo = JSON.parse(Cookie.getCookie("UserInfo"));
        if(userInfo.UserName == "admin") return true;   
        if(userInfo)
        {
            for(let i = 0;i < userInfo.Menus.length;i++)
            {
              if(userInfo.Menus[i] == menu.code)
              {
                return true
              }
            }
        }
        return false;
      }
    return(
        <Routes>
            {RouteRender()}
            <Route key="Profile" path="/profile" element={<Profile />} />
            <Route key="Setting" path="/setting" element={<Setting />} />
            <Route key="Support" path="/support" element={<Support />} />
            <Route key="401" path="/page401" element={<Page401 />} />
            <Route key="404" path="/page404" element={<Page404 />} />       
        </Routes>
    )
}
const mapState = ({ ...state }) => ({
    Apps: state.apps
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(MainPageRoute);