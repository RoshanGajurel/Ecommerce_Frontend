import React from 'react'
import SmallBanner from '../components/SmallBanner'

const About = () => {

  const subTitle = 'We sale fresh fruits'
  const title = 'About Us'

  return (
    <>
      <SmallBanner subTitle={subTitle} title={title} />
    </>
  )
}

export default About