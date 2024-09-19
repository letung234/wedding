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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">John & Jane's Wedding</h1>
        <p className="text-xl mt-2">We're getting married!</p>
      </header> */}

      <main className="container mx-auto px-4 space-y-12 mt-10">
        <Carousel />
        <About />
        <CountdownTimer targetDate={new Date('2024-09-30T00:00:00')} />
        <EventDetails />
        <LocationMap />
        <PhotoGallery />
        {/* <DonationSection />
        <BankAccounts /> */}
        <VideoSection />
        <CommentSection />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  )
}