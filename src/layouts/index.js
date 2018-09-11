import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import image from '../static/img1.jpeg';

const Layout = ({ children, data }) => (
  <div className='home-container'>
    <div className='home-wrapper'>
     <img src={image} />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Indegenous African Knowledge' },
          { name: 'keywords', content: 'African, Knowledge, encyclopedia' },
        ]}
      />
      <div>
        {children()}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
