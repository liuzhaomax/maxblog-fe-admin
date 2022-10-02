import React, {Suspense} from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/index/Index"
import NotFound from "../pages/notFound/NotFound"
import { HOME, ARTICLE, LOGIN, MAXBLOG, STATS } from "../config/cstModule"
import { CENTER_CONTENT, MAIN_LAYOUT } from "../config/cstLayout"
import Login from "../pages/login/Login"
import MaxBlog from "../pages/maxblog/index/MaxBlog"
import Stats from "../pages/maxblog/stats/Stats"

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
                <Route path={STATS.FULL_PATH} element={<Stats/>}/>
                <Route path={HOME.FULL_PATH} element={lazyLoad(HOME.FILE_PATH)}/>
                <Route path={ARTICLE.FUNCTIONS.ARTICLE_LIST.FULL_PATH} element={lazyLoad(ARTICLE.FUNCTIONS.ARTICLE_LIST.FILE_PATH)}/>
                <Route path={ARTICLE.FUNCTIONS.ARTICLE_TAGS.FULL_PATH} element={lazyLoad(ARTICLE.FUNCTIONS.ARTICLE_TAGS.FILE_PATH)}/>
            </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
)