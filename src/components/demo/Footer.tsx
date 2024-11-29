import { Heart } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-[100px] px-10 z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold">Irfan & Rima</h3>
                        <p className="mt-2">Forever & Always</p>
                    </div>
                    <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-2" />
                        <p>October 10, 2024</p>
                    </div>
                    <div className="flex flex-col items-center mt-4  md:mt-0">
                        <p>&copy; 20244 Irfan & Rima Wedding</p>
                        <p>Created by 🚀<a href="https://www.github.com/mochrks" target="_blank" rel="noopener noreferrer" className="hover:underline">@mochrks</a>.</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}