import Image from 'next/image'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import Certifications from './components/Certifications'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <hr  className='w-full mt-14'/>

      <div className="container mt-14 mx-auto px-12 py-4 ">
        <HeroSection/>
        <AboutSection/>
        <hr className='w-full color-white' />
        <ProjectsSection />
        <Certifications />
      </div>
    </main>
  )
}
