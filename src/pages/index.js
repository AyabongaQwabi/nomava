import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import { ArticleGroup } from '../components/article';
const config = [
  {
    title:'Imbali ka Nongqawuse',
    info:'Iinkcukaca kwiziganeko ezehleyo kule mbali yeli gqiyazana libaluleke kakhul...',
    by:{
      name:'Siyanda Mtshona'
    },
    image: '/static/images/img3.jpg',
  },
  {
    title:'The Caves of Kuvuki Land',
    info:'The ancient caves of Kuvuki land have been home to not just one but many...',
    by:{
      name:'Afikile Magwaza'
    },
    image: '/static/images/img3.jpg',
  },
  {
    title:'Imbila yase Qoqodala',
    info:'Yawuswela umsila imbila ngenxa yokuthumela oogxa bayo ukuba zebaiyiphath...',
    by:{
      name:'Nkolombisa Shiyenga'
    },
    image: '/static/images/img3.jpg',
  },
  {
    title:'The Herbs of the Khoi',
    info:'The khoi are widely know for their cast knowledge in natural herbistry of plants and...',
    by:{
      name:'Elrigh Theodore'
    },
    image: '/static/images/img3.jpg',
  }
]
const IndexPage = () => (
  <div className='site-intro'>
    <h1> Nomava </h1>
    <h3> Indigenous African Knowledge</h3>
    <div class='recent-articles'>
      <ArticleGroup articles={config} title="Recent Articles" />
    </div>
  </div>
)

export default IndexPage
