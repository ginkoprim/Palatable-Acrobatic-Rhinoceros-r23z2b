import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Palatable Acrobatic Rhinoceros</title>
        <meta property="og:title" content="Palatable Acrobatic Rhinoceros" />
      </Helmet>
    </div>
  )
}

export default Home
