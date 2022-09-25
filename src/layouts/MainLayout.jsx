import React from "react"
import {Layout} from "antd"
import "./MainLayout.css"
import Nav from "./Nav"
import SideMenu from "./SideMenu"
import { Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <Layout className="Layout">
            <Nav defaultSelectedKeys={["1"]}/>
            <Layout style={{"height": "93.5vh"}}>
                <SideMenu/>
                <Outlet/>
            </Layout>
        </Layout>
    )
}

export default MainLayout

