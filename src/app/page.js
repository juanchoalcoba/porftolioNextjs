
import AboutMe from './components/About'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container mt-16 mx-auto px-12 py-4 ">
        <HeroSection/>
      </div>
      <AboutMe />
    </main>
  )
}
