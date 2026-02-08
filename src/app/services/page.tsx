import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { services } from "@/data/services"
import { ArrowRight } from "lucide-react"

export const metadata = {
    title: "Our Services - Expert Study Abroad Guidance",
    description: "Explore our comprehensive range of services including career counseling, university admissions, visa assistance, and test preparation.",
}

export default function ServicesPage() {
    return (
        <div>
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <Container>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
                    <p className="text-xl text-primary-foreground/90 max-w-[800px]">
                        Comprehensive solutions for every step of your study abroad journey.
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <Card key={service.slug} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base">
                                        {service.description.substring(0, 100)}...
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/services/${service.slug}`} className="w-full">
                                        <Button variant="outline" className="w-full justify-between">
                                            Read More <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    )
}
