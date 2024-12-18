import React from 'react'
import Hero from '../../components/Hero'
// import AboutUs from '../../components/AboutUs'
import styles from '../../styles/pages/main/Home.module.css'
// import Membership from '../../components/Membership'


const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero/>
      {/* <AboutUs/> */}
        {/* <Membership/> */}
    </div>
  )
}

export default Home
