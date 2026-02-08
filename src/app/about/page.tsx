import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"

export default function AboutPage() {
    return (
        <div>
            {/* Header */}
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <Container>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">About Us</h1>
                    <p className="text-xl text-primary-foreground/90 max-w-[800px]">
                        We are a team of passionate counselors dedicated to making your study abroad dreams a reality.
                    </p>
                </Container>
            </section>

            {/* Narrative Section */}
            <Section>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Narrative</h2>
                            <div className="space-y-4 text-muted-foreground text-lg">
                                <p>
                                    Enabling individuals worldwide to unlock limitless possibilities. Imagine ditching those regular class rooms and diving into your studies while sipping Cappuccino in New York, practicing your Spanish with locals in the heart of Madrid, or learning about sustainable living in the lush landscapes of Costa Rica.
                                </p>
                                <p>
                                    We're all about making education an experience. Our team is like your personal squad of career-building enthusiasts, here to help you pick the perfect program, sort out the nitty-gritty details, and make sure you're comfy and confident every step of the way.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-4 text-foreground font-medium">
                                    <li>100% Visa Success Ratio</li>
                                    <li>Over 10 years of Experience</li>
                                    <li>Transparent Process</li>
                                    <li>Certified Counselors with International degrees</li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
                            {/* Team Image Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-white flex items-center justify-center text-muted-foreground">
                                Team / Office Image
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Team Section */}
            <Section className="bg-muted/30">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">The Innovators-in-chief</h2>
                        <p className="text-muted-foreground mt-2">Meet the leaders guiding your path.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Team Member 1 */}
                        <div className="bg-background border rounded-lg overflow-hidden text-center group">
                            <div className="aspect-[4/5] bg-muted relative">
                                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                                    Photo
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold">Aniket Shinde</h3>
                                <p className="text-primary font-medium">Co-Founder, Counselor</p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-background border rounded-lg overflow-hidden text-center group">
                            <div className="aspect-[4/5] bg-muted relative">
                                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                                    Photo
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold">Kranti Joshi</h3>
                                <p className="text-primary font-medium">Co-Founder, Counselor</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="text-center">
                <Container>
                    <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
                    <Link href="/contact">
                        <Button size="lg">Talk to our Experts</Button>
                    </Link>
                </Container>
            </Section>
        </div>
    )
}
