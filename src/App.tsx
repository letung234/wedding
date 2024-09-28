import { useState, useEffect } from 'react'
import { Navbar } from '@/components/demo/Navbar'
import { Carousel } from '@/components/demo/Carousel'
import { VideoSection } from '@/components/demo/VideoSection'
import { EventDetails } from '@/components/demo/EventDetails'
import { LocationMap } from '@/components/demo/LocationMap'
import { CommentSection } from '@/components/demo/CommentSection'
import { DonationSection } from '@/components/demo/DonationSection'
import { BankAccounts } from '@/components/demo/BankAccounts'
import { MusicPlayer } from '@/components/demo/MusicPlayer'
import { CountdownTimer } from '@/components/demo/CountdownTimer'
import { About } from '@/components/demo/About'
import { Footer } from '@/components/demo/Footer'
import { PhotoGallery } from './components/demo/PhotoGallery'
import { bg } from './assets'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {

    setTimeout(() => setIsLoaded(true), 2000)
  }, [])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className=" min-h-screen text-foreground">
      {/* Background Image */}


      {/* Content Layer */}
      <header >
        <Navbar />
      </header>
      <main className="z-50 container mx-auto px-4 space-y-12 mt-10">
        <Carousel />
        <About />
        <CountdownTimer targetDate={new Date('2024-10-30T00:00:00')} />
        <EventDetails />
        <CommentSection />
        <PhotoGallery />
        <DonationSection />
        <BankAccounts />
        {/* <VideoSection /> */}
      </main>
      <Footer />
      <MusicPlayer />
    </div>

  )
}