import React from "react"
import {Layout, Menu, message} from "antd"
import {UserOutlined} from "@ant-design/icons"
import "./Nav.css"
import setAuthToken from "../utils/setAuthToken"
import { useNavigate } from "react-router-dom"
import { deleteLogout } from "../utils/handlers"
import { HOME, MAXBLOG } from "../config/cstModule"

const { Header } = Layout

function Nav(props) {
    const navigate = useNavigate()

    const logout = () => {
        deleteLogout()
            .then(() => {
                setAuthToken("")
                localStorage.removeItem("TOKEN")
                message.success("Logout Succeeded.")
            })
            .catch(err => {
                message.success("Logout Failed.")
                console.log(err)
            })
    }

    const jumpToHome = () => {
        navigate(HOME.FULL_PATH)
    }

    return (
        <Header className="header">
            <div className="logo" onClick={jumpToHome}/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={props.defaultSelectedKeys}>
                <Menu.Item className="nav" key={ MAXBLOG.KEY }>{ MAXBLOG.NAME }</Menu.Item>
                {/*<Menu.Item className="nav" key="2">Website 2</Menu.Item>*/}
            </Menu>
            <div className="profile">
                <UserOutlined className="profile-icon"/>
            </div>
            <div className="logout" onClick={logout}>Logout</div>
        </Header>
    )
}

export default Nav