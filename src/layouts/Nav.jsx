import React from "react"
import "./Nav.css"
import { Menu, message, Layout } from "antd"
import { UserOutlined } from "@ant-design/icons"
import setAuthToken from "../utils/setAuthToken"
import { useNavigate } from "react-router-dom"
import { deleteLogout } from "../utils/handlers"
import { LOGIN, MAXBLOG } from "../config/cstModule"
import { useDispatch } from "react-redux"
import { setToken, toggleAuth } from "../state/reducers/auth"

const { Header } = Layout

function Nav() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        deleteLogout()
            .then(() => {
                dispatch(toggleAuth())
                dispatch(setToken(""))
                setAuthToken()
                localStorage.removeItem("TOKEN")
                message.success("登出成功")
                navigate(LOGIN.FULL_PATH)
            })
            .catch(() => {
                dispatch(toggleAuth())
                dispatch(setToken(""))
                setAuthToken()
                localStorage.removeItem("TOKEN")
                message.error("登出失败")
                navigate(LOGIN.FULL_PATH)
            })
    }

    return (
        <Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={MAXBLOG.KEY}>
                <Menu.Item className="nav" key={ MAXBLOG.KEY }>{ MAXBLOG.NAME }</Menu.Item>
                {/*<Menu.Item className="nav" key="2">Website 2</Menu.Item>*/}
            </Menu>
            <div className="profile">
                <UserOutlined className="profile-icon"/>
            </div>
            <div className="logout" onClick={logout}>登出</div>
        </Header>
    )
}

export default Nav