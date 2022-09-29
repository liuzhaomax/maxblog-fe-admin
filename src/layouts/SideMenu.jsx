import React from "react"
import {LaptopOutlined, AreaChartOutlined} from "@ant-design/icons"
import {Layout, Menu} from "antd"
import "./SideMenu.css"
import { useNavigate } from "react-router-dom"
import { ARTICLE, HOME } from "../config/cstModule"

const { SubMenu } = Menu
const { Sider } = Layout

function SideMenu() {
    const navigate = useNavigate()

    const jump = e => {
        switch (e.key) {
        case HOME.KEY:
            navigate(HOME.FULL_PATH)
            break
        case ARTICLE.FUNCTIONS[0].KEY:
            navigate(ARTICLE.FUNCTIONS[0].FULL_PATH)
            break
        default:
            console.log("无效 Menu.Item key.")
        }
    }
    
    return (
        <Sider width={200} className="sider">
            <Menu
                mode="inline"
                defaultSelectedKeys={[ HOME.KEY ]}
                defaultOpenKeys={[]}
                style={{ height: "100%", borderRight: 0 }}
            >
                <Menu.Item key={ HOME.KEY } onClick={ jump }>{ HOME.NAME }</Menu.Item>
                <SubMenu key={ ARTICLE.KEY } icon={<LaptopOutlined />} title={ ARTICLE.NAME }>
                    <Menu.Item key={ ARTICLE.FUNCTIONS[0].KEY } onClick={ jump }>{ARTICLE.FUNCTIONS[0].NAME}</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AreaChartOutlined />} title="假模块">
                    <Menu.Item key="3">假功能1</Menu.Item>
                    <Menu.Item key="4">假功能2</Menu.Item>
                </SubMenu>
                
            </Menu>
        </Sider>
    )
}

export default SideMenu