import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export function CommentSection() {
    const [comments, setComments] = useState<{ name: string; comment: string }[]>([])
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name && comment) {
            setComments([...comments, { name, comment }])
            setName('')
            setComment('')
        }
    }

    return (
        <section id="comments" className="py-12">
            <h2 className="text-3xl font-bold text-center mb-6">Leave a Comment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Textarea
                    placeholder="Your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
                <Button type="submit">Submit Comment</Button>
            </form>
            <div className="mt-8 space-y-4">
                {comments.map((c, index) => (
                    <div key={index} className="bg-secondary p-4 rounded-lg">
                        <h3 className="font-bold">{c.name}</h3>
                        <p>{c.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}