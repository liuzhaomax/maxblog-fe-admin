import React from "react"
import {Navigate} from "react-router-dom"
import { HOME, LOGIN } from "../../config/cstModule"
import { useSelector } from "react-redux"

function MaxBlog() {
    const auth = useSelector(state => state.auth)
    return (
        <React.Fragment>
            {
                auth.isAuthenticated ?
                    <Navigate to={HOME.FULL_PATH} replace/> :
                    <Navigate to={LOGIN.FULL_PATH} replace/>
            }
        </React.Fragment>
    )
}

export default MaxBlog
