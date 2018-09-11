import React from 'react'
import Link from 'gatsby-link'
import './article.css'
import defImg from '../static/img3.jpg';
export const Article = ({ title, info, by, image }) => (
  <div className="article-container" >
    <div className='article'>
      <img src={defImg} />
      <div className='detail'>
        <p className='title'>{title}</p>
        <p className='info'>{info}</p>
        <p className='writer'>
            <small> - {by.name}</small>
            <span className="btn"> Read </span>
        </p>
      </div>
    </div>
  </div>
)

export const ArticleGroup = ({ articles, title }) => (
    <div className="article-group-container" >
      <h5> Recent articles</h5>
      <div className='articles'>
        {articles.map(article => (
            <Article {...article} />
        ))}
      </div>
    </div>
  )

export default Article
