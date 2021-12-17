// import Head from 'next/head'
// import Image from 'next/image'
import React, { useReducer } from 'react';
import styles from '../styles/Home.module.css'

import Landing from '../components/welcome/Landing'
import Services from '../components/DevServices/Services'
import Steps from '../components/steps/Steps'
import Contact from '../components/contact/Contact'
import Principles from '../components/principles/Principles'
import Footer from '../components/footer/Footer'
import ChatContext from '../Data/ChatContext';
import { StateProvider } from '../Data/store';
import { reducer } from '../Data/store';

// export const DiscussionContext = React.createContext();

const sharedState = {
  selectedValue: 10,
  chatPoints : [ 
      { value: 10, label: 'General' },
      { value: 20, label: "Let's discuss your product idea" },
      { value: 30, label: 'Improve your product' },
      { value: 40, label: 'Data and business analysis'}
  ]
};

export default function Home() {
  // const value = 20
  const [state, dispatch] = useReducer(reducer, sharedState)

  return (
    // <StateProvider>
    // <ChatContext.Provider value={sharedState}>
    <ChatContext.Provider value={[state, dispatch]}>
      <div className={styles.container}>
        <Landing />
        <Services />
        <Steps />
        <Principles />
        <Contact />
        <Footer />
      </div>
    </ChatContext.Provider>
    // {/* </StateProvider> */}
  )
}

// export DiscussionContext;
