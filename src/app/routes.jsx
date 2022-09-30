import React, {Suspense} from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/index/Index"
import NotFound from "../pages/notFound/NotFound"
import Home from "../pages/maxblog/home/Home"
import { HOME, ARTICLE, LOGIN, MAXBLOG } from "../config/cstModule"
import { CENTER_CONTENT, MAIN_LAYOUT } from "../config/cstLayout"
import Login from "../pages/login/Login"
import MaxBlog from "../pages/maxblog/index/MaxBlog"

const lazyLoad = path => {
    const Comp = React.lazy(() => import(`../${path}`))
    return (
        <Suspense fallback={<>加载中...</>}>
            <Comp />
        </Suspense>
    )
}

export default (
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path={LOGIN.PATH} element={<Login/>}/>
        <Route path={MAXBLOG.PATH} element={<MaxBlog/>}/>
        <Route element={lazyLoad(MAIN_LAYOUT.FILE_PATH)}>
            <Route element={lazyLoad(CENTER_CONTENT.FILE_PATH)}>
                <Route path={HOME.FULL_PATH} element={<Home/>}/>
                <Route path={ARTICLE.FUNCTIONS.ARTICLE_LIST.FULL_PATH} element={lazyLoad(ARTICLE.FUNCTIONS.ARTICLE_LIST.FILE_PATH)}/>
            </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
)