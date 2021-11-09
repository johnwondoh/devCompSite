import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Landing from '../components/welcome/Landing'
import Services from '../components/DevServices/Services'
import Steps from '../components/steps/Steps'
import Contact from '../components/contact/Contact'
import Principles from '../components/principles/Principles'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Landing />
      <Services />
      <Steps />
      <Principles />
      <Contact />
      <Footer />

      {/* floating button, contact us */}
    </div>
  )
}
