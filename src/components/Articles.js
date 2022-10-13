import React from "react";
import './Articles.css'
const Articles = ({children}) => {
    return (
        <section className="article-section content-margin">
         <h1>Articles</h1>
            {children}
        <div className='more-articles'> <button className="more-btn">More articles</button>  </div> 
        </section>
    )
}

export default Articles;