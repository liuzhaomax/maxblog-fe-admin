import React from "react"
import {LaptopOutlined, AreaChartOutlined} from "@ant-design/icons"
import {Layout, Menu} from "antd"
import "./SideMenu.css"
import { useNavigate } from "react-router-dom"
import { ARTICLE, HOME, MAXBLOG } from "../config/cstModule"

const { SubMenu } = Menu
const { Sider } = Layout

function SideMenu() {
    const navigate = useNavigate()

    const jump = e => {
        switch (e.key) {
        case HOME.KEY:
            navigate(HOME.FULL_PATH)
            break
        case ARTICLE.FUNCTIONS.ARTICLE_LIST.KEY:
            navigate(ARTICLE.FUNCTIONS.ARTICLE_LIST.FULL_PATH)
            break
        default:
            console.log("无效 Menu.Item key.")
        }
    }

    const getSelectedKey = modules => {
        let keys
        for (let k in modules) {
            if (modules[k].FUNCTIONS) {
                keys = getSelectedKey(modules[k].FUNCTIONS)
                return keys
            }
            if (location.pathname === modules[k].FULL_PATH) {
                return [modules[k].KEY]
            }
        }
    }

    const getOpenKey = modules => {
        let keys
        for (let k in modules) {
            if (modules[k].FUNCTIONS) {
                keys = getOpenKey(modules[k].FUNCTIONS)
                keys = [modules[k].KEY, ...keys]
                return keys
            }
            if (location.pathname === modules[k].FULL_PATH) {
                return []
            }
        }
    }
    
    return (
        <Sider width={200} className="sider">
            <Menu
                mode="inline"
                defaultSelectedKeys={getSelectedKey(MAXBLOG.MODULE_MAXBLOG)}
                defaultOpenKeys={getOpenKey(MAXBLOG.MODULE_MAXBLOG)}
                style={{ height: "100%", borderRight: 0 }}
            >
                <Menu.Item key={ HOME.KEY } onClick={ jump }>{ HOME.NAME }</Menu.Item>
                <SubMenu key={ ARTICLE.KEY } icon={<LaptopOutlined />} title={ ARTICLE.NAME }>
                    <Menu.Item key={ ARTICLE.FUNCTIONS.ARTICLE_LIST.KEY } onClick={ jump }>{ARTICLE.FUNCTIONS.ARTICLE_LIST.NAME}</Menu.Item>
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