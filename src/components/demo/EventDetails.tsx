import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EventDetails() {
    return (
        <section id="event-details" className="py-12">
            <h2 className="text-3xl font-bold text-center mb-6">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Wedding Ceremony</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Date: September 15, 2023</p>
                        <p>Time: 2:00 PM - 3:30 PM</p>
                        <p>Venue: St. Mary's Church</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Reception</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Date: September 15, 2023</p>
                        <p>Time: 6:00 PM - 11:00 PM</p>
                        <p>Venue: Grand Ballroom, Hilton Hotel</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}