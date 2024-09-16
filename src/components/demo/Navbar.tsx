import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Event Details', href: '#event-details' },
        { name: 'Location', href: '#location' },
        { name: 'Comments', href: '#comments' },
        { name: 'Donate', href: '#donate' },
    ]

    return (
        <nav className="bg-background pt-7">
            <div className="max-w-7xl mx-auto px-4 pb-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between h-16">
                    <div className="flex items-center mb-5">
                        <a href="#" className="text-2xl font-bold">J&J</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-10">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}