import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from 'lucide-react'

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="fixed bottom-4 right-4">
            <audio ref={audioRef} loop>
                <source src="/path-to-your-music-file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <Button onClick={togglePlay} variant="outline" size="icon">
                {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
        </div>
    )
}