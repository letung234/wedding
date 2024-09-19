"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPinIcon, ClockIcon, CalendarIcon, GlassesIcon, MusicIcon } from "lucide-react"

export function EventDetails() {
    const [activeCard, setActiveCard] = useState<string | null>(null)

    const events = [
        {
            id: "ceremony",
            title: "Wedding Ceremony",
            date: "September 15, 2023",
            time: "2:00 PM - 3:30 PM",
            venue: "St. Mary's Church",
            address: "123 Church St, Anytown, USA",
            details: "Join us as we exchange vows and begin our journey together.",
            icon: <GlassesIcon className="w-6 h-6 text-primary" />,
        },
        {
            id: "reception",
            title: "Reception",
            date: "September 15, 2023",
            time: "6:00 PM - 11:00 PM",
            venue: "Grand Ballroom, Hilton Hotel",
            address: "456 Main St, Anytown, USA",
            details: "Celebrate with us over dinner, drinks, and dancing!",
            icon: <MusicIcon className="w-6 h-6 text-primary" />,
        },
    ]

    return (
        <section id="event-details" className="py-12 px-4 max-w-7xl mx-auto ">
            <motion.h2
                className="text-4xl font-bold text-center mb-8 text-primary"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Event Details
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[20rem]">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Card
                            className="overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300"
                            onClick={() => setActiveCard(activeCard === event.id ? null : event.id)}
                        >
                            <CardHeader className="bg-primary/10">
                                <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                                    {event.icon}
                                    {event.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                                    <p>{event.date}</p>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <ClockIcon className="w-5 h-5 text-muted-foreground" />
                                    <p>{event.time}</p>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPinIcon className="w-5 h-5 text-muted-foreground" />
                                    <p>{event.venue}</p>
                                </div>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: activeCard === event.id ? "auto" : 0,
                                        opacity: activeCard === event.id ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="mt-2 text-sm text-muted-foreground">{event.address}</p>
                                    <p className="mt-2 italic">{event.details}</p>
                                    <Button className="mt-4" variant="outline">
                                        Get Directions
                                    </Button>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <p className="text-lg text-muted-foreground mb-4">
                    We can't wait to celebrate with you!
                </p>
                <Button size="lg">
                    RSVP Now
                </Button>
            </motion.div>
        </section>
    )
}