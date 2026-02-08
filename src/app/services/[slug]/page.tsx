import { notFound } from "next/navigation"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { services } from "@/data/services"
import { ArrowLeft } from "lucide-react"

interface Props {
    params: { slug: string }
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export function generateMetadata({ params }: Props) {
    const service = services.find((s) => s.slug === params.slug)
    if (!service) return { title: "Service Not Found" }

    return {
        title: `${service.title} - Aspire Each Services`,
        description: service.description,
    }
}

export default function ServiceDetailPage({ params }: Props) {
    const service = services.find((s) => s.slug === params.slug)

    if (!service) {
        notFound()
    }

    return (
        <div>
            <section className="bg-muted py-12">
                <Container>
                    <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight">{service.title}</h1>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="max-w-3xl">
                        <p className="text-lg text-muted-foreground mb-8">
                            {service.description}
                        </p>

                        {/* Placeholder Content for Detailed Service Description */}
                        <div className="prose prose-blue max-w-none">
                            <h3>Why {service.title} is Important?</h3>
                            <p>
                                Proper guidance in {service.title.toLowerCase()} is crucial for a successful study abroad experience.
                                At Aspire Each, we ensure that every student gets personalized attention and expert advice.
                            </p>
                            <h3>Our Process</h3>
                            <ul>
                                <li>Initial Consultation and Profile Evaluation</li>
                                <li>Strategy Development and Planning</li>
                                <li>Execution and Support</li>
                                <li>Final Review and Success</li>
                            </ul>
                            <h3>Why Choose Aspire Each?</h3>
                            <p>
                                With over 10 years of experience and a 100% success rate, we are the most trusted name in overseas education.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Link href="/contact">
                                <Button size="lg">Book a Session for {service.title}</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
