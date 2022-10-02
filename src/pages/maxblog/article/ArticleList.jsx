import React from "react"
import "./Article.css"
import { ARTICLE } from "../../../config/cstModule"

function ArticleList() {
    return (
        <div id={ARTICLE.FUNCTIONS.ARTICLE_LIST.KEY} className={ARTICLE.FUNCTIONS.ARTICLE_LIST.KEY}>
            I am Article List
        </div>
    )
}

export default ArticleList