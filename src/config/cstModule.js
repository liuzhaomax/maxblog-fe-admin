export const LOGIN = {
    NAME: "登录页",
    KEY: "Login",
    PATH: "login",
    FULL_PATH: "/login",
    FILE_PATH: "pages/login/Login",
}

export const HOME = {
    NAME: "首页",
    KEY: "HOME",
    PATH: "home",
    FULL_PATH: "/maxblog/home",
    FILE_PATH: "pages/maxblog/home/Home",
}

export const ARTICLE = {
    NAME: "文章",
    KEY: "ARTICLE",
    PATH: "article",
    FULL_PATH: "/maxblog/article",
    FUNCTIONS: {
        ARTICLE_LIST: {
            NAME: "文章列表",
            KEY: "ARTICLE_LIST",
            PATH: "articleList",
            FULL_PATH: "/maxblog/article/articleList",
            FILE_PATH: "pages/maxblog/article/Article",
        },
    },
}

export const MODULE_MAXBLOG = {
    HOME,
    ARTICLE,
}

export const MAXBLOG = {
    NAME: "MaxBlog",
    KEY: "MAXBLOG",
    PATH: "maxblog",
    MODULE_MAXBLOG,
}