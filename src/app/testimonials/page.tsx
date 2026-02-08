import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Card, CardContent, CardHeader } from "@/components/ui/Card"
import { testimonials } from "@/data/testimonials"
import { Quote } from "lucide-react"

export const metadata = {
    title: "Success Stories - Aspire Each Students",
    description: "Read what our students have to say about their experience with Aspire Each Overseas Education.",
}

export default function TestimonialsPage() {
    return (
        <div>
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <Container>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Success Stories</h1>
                    <p className="text-xl text-primary-foreground/90 max-w-[800px]">
                        Hear from our students who have successfully reached their dream universities.
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid gap-8 md:grid-cols-2">
                        {testimonials.map((testimonial, i) => (
                            <Card key={i} className="bg-muted/30">
                                <CardHeader>
                                    <Quote className="h-8 w-8 text-primary/20 mb-2" />
                                    <p className="text-lg italic text-muted-foreground">"{testimonial.text}"</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                                            {testimonial.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{testimonial.name}</h4>
                                            <p className="text-sm text-primary">{testimonial.course}</p>
                                            <p className="text-xs text-muted-foreground">{testimonial.university}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    )
}
