import React, { useEffect, useState } from "react"
import "./Home.css"
import { HOME } from "../../../config/cstModule"
import { getPageData } from "../../../utils/handlers"
import { notification } from "antd"
import { FrownOutlined } from "@ant-design/icons"
import setAuthToken from "../../../utils/setAuthToken"
import { setToken } from "../../../state/reducers/auth"
import { useDispatch } from "react-redux"

function Home() {
    const dispatch = useDispatch()
    const [data, setData] = useState(null)

    useEffect(() => {
        getPageData(HOME.FULL_PATH)
            .then(res => {
                setData(res.data.data)
            })
            .catch(() => {
                dispatch(setToken(""))
                setAuthToken("")
                localStorage.removeItem("TOKEN")
                notification.open({
                    message: "需要登录",
                    description: "验证失败，请重新登录",
                    icon: <FrownOutlined style={{ color: "#ff4d4f" }} />,
                })
            })
    }, [])
    
    return (
        <div id={HOME.KEY} className={HOME.KEY}>
            I am Home {data ? data.msg : "loading"}
        </div>
    )
}

export default Home