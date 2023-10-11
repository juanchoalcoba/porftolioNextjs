import Image from 'next/image'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import Certifications from './components/Certifications'
import InConstruction from './components/InConstruction'
import PreAbout from './components/PreAbout'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container mt-16 mx-auto px-12 py-4 ">
        <HeroSection/>
        <PreAbout />
        <AboutSection/>
        <hr className='w-full color-white' />
        <ProjectsSection />
        <hr className='w-full color-gray-600 mt-4'/>
        <Certifications />
        <hr className='w-full color-slate-600 mt-8' />
        <InConstruction />
      </div>
    </main>
  )
}
