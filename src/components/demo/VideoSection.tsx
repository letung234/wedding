export function VideoSection() {
    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
            <div className="aspect-w-16 aspect-h-10">
                <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                ></iframe>
            </div>
        </section>
    )
}