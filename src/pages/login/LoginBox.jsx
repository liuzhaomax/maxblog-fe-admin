import React, { useState } from "react"
import "./Login.css"
import {Button, Input, message, notification} from "antd"
import {EyeInvisibleOutlined, EyeTwoTone, FrownOutlined} from "@ant-design/icons"
import md5 from "md5"
import JsEncrypt from "jsencrypt"
import setAuthToken from "../../utils/setAuthToken"
import { useNavigate } from "react-router-dom"
import { HOME } from "../../config/cstModule"
import { postLogin } from "./handlers"
import { useDispatch } from "react-redux"
import { setToken } from "../../state/reducers/auth"

function LoginBox() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const encrypt = () => {
        let rsa = new JsEncrypt()
        rsa.setPublicKey(sessionStorage.getItem("puk"))
        return {
            "userName": rsa.encrypt(userName),
            "userPassword": rsa.encrypt(md5(userPassword))
        }
    }

    const submit = () => {
        setIsLoading(true)
        postLogin(encrypt())
            .then(res => {
                setIsLoading(false)
                dispatch(setToken(res.data))
                setAuthToken(res.data)
                localStorage.setItem("TOKEN", res.data)
                message.success("登录成功")
                navigate(HOME.FULL_PATH)
            })
            .catch(() => {
                setIsLoading(false)
                message.error("登录失败")
                notification.open({
                    message: "登录失败",
                    description: "请检查输入的用户名与密码",
                    icon: <FrownOutlined style={{ color: "#ff4d4f" }} />,
                })
            })
    }

    const onUserNameChange = e => {
        setUserName(e.target.value)
    }

    const onUserPasswordChange = e => {
        setUserPassword(e.target.value)
    }

    const cancelBubble = e => {
        e.stopPropagation()
    }
    
    return (
        <div className="login-box" onClick={ cancelBubble }>
            <div className="login-box-content">
                <div id="login-box-first-line">
                    <h1>登录</h1>
                    <div id="login-logo"/>
                </div>
                <Input
                    id="login-user-name"
                    name="userName"
                    placeholder="请输入用户名"
                    value={ userName }
                    onPressEnter={ submit }
                    onChange={ onUserNameChange }
                />
                <Input.Password
                    id="login-user-password"
                    name="userPassword"
                    placeholder="请输入密码"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    value={ userPassword }
                    onPressEnter={ submit }
                    onChange={ onUserPasswordChange }
                />
                <Button id="btn-login" type="primary" onClick={ submit } loading={ isLoading }>登录</Button>
            </div>
        </div>
    )
}

export default LoginBox