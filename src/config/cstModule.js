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
    FILE_PATH: "pages/home/Home",
}

export const COMPONENT = {
    NAME: "模块",
    KEY: "COMPONENT",
    PATH: "comp",
    FULL_PATH: "/maxblog/comp",
    FILE_PATH: "pages/component/Component",
    FUNCTIONS: [
        {
            NAME: "模块-功能1",
            KEY: "COMPONENT_FUNC1",
            PATH: "func1",
            FULL_PATH: "/maxblog/comp/func1",
        },
    ],
}

export const MODULE_MAXBLOG = {
    HOME,
    COMPONENT,
}

export const MAXBLOG = {
    NAME: "MaxBlog",
    KEY: "MAXBLOG",
    MODULE_MAXBLOG,
}