import React from 'react'
import Hero from './sections/Hero'
import CardsSec from './sections/CardsSec'
import Head from 'next/head'
const page = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Welcome to Pupharma, the official Pharmacy educational website for Punjab University Lahore. Access resources, courses, and information related to pharmacy education." />
        <meta name="keywords" content="Pupharma, Pharmacy, Punjab University, Lahore, Education, Website" />
        <meta property="og:title" content="Pupharma - Pharmacy Educational Website 👻" />
        <meta property="og:description" content="Welcome to Pupharma, the official Pharmacy educational website for Punjab University Lahore. Access resources, courses, and information related to pharmacy education." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pupharma.online" /> 
        <meta property="og:image" content="https://img.playbook.com/kMp_Lpo2OEzpTE6zrm4wTc6m8Ue-aYaO42JrEATtJJQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y3NTQ1NmJi/LWYzZjktNDZjYy1i/OWJmLTcxNjI0OGQ5/M2RmZg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pupharma - Pharmacy Educational Website for Punjab University Lahore" />
        <meta name="twitter:description" content="Welcome to Pupharma, the official Pharmacy educational website for Punjab University Lahore. Access resources, courses, and information related to pharmacy education." />
        <meta name="twitter:image" content="https://img.playbook.com/kMp_Lpo2OEzpTE6zrm4wTc6m8Ue-aYaO42JrEATtJJQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y3NTQ1NmJi/LWYzZjktNDZjYy1i/OWJmLTcxNjI0OGQ5/M2RmZg" /> 
      </Head>
      <Hero />
      <CardsSec />
    </div>
  )
}

export default page
