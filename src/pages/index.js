import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const IndexPage = () => (
  <div className='site-intro'>
    <h1> Nomava </h1>
    <h3> Indigenous African Knowledge</h3>
    <div class='recent-articles'>
      <ArticleGroup articles={config.articles} />
    
    </div>
  </div>
)

export default IndexPage
