import React from "react"
import {Breadcrumb, Layout} from "antd"
import "./CenterContent.css"
import { Outlet } from "react-router-dom"

const { Content } = Layout

function CenterContent() {
    // const navigate = useNavigate()

    // const findNameByPath = (obj, value) => {
    //     let result = []
    //     for (let key in obj) {
    //         if (obj[key] === value) {
    //             result.push(obj)
    //             return flatten(result)
    //         }
    //         if (obj[key] instanceof Object) {
    //             result.push(findNameByPath(obj[key], value))
    //         }
    //     }
    //     return flatten(result)
    // }

    // const getBreadcrumbNameArray = (obj, value) => {
    //     let pathArr = value.split("/").slice(1).map(elem => "/" + elem)
    //     let result = []
    //     if (value !== HOME.FULL_PATH && value !== "/home/" ) {
    //         let func = findNameByPath(obj, pathArr[2])
    //         let modu = findNameByPath(obj, pathArr[1])
    //         let webs = findNameByPath(obj, pathArr[0])
    //         result.push(webs[0]["NAME"])
    //         result.push(modu[0]["NAME"])
    //         result.push(func[0]["NAME"])
    //     }
    //     return result
    // }

    // const jumpToHome = () => {
    //     navigate(HOME.FULL_PATH)
    // }

    // let breadcrumbNameArray = getBreadcrumbNameArray(WEBSITE_1, props.location.pathname)

    return (
        <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
                {
                    // props.location.pathname !== "/home" ?
                    //     <React.Fragment>
                    //         <Breadcrumb.Item className="bc-home" onClick={jumpToHome}>Home</Breadcrumb.Item>
                    //         <Breadcrumb.Item>{breadcrumbNameArray[0]}</Breadcrumb.Item>
                    //         <Breadcrumb.Item>{breadcrumbNameArray[1]}</Breadcrumb.Item>
                    //         <Breadcrumb.Item>{breadcrumbNameArray[2]}</Breadcrumb.Item>
                    //     </React.Fragment>
                    //     :
                    //     <Breadcrumb.Item>Home</Breadcrumb.Item>
                }
            </Breadcrumb>
            <Content className="content">
                <Outlet />
            </Content>
        </Layout>
    )
}

export default CenterContent