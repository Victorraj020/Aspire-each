"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <div>
            {/* Header */}
            <section className="bg-muted py-12 md:py-20">
                <Container>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-[600px]">
                        Get in touch with our expert counselors to start your study abroad journey.
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-muted-foreground mb-8">
                                    Have questions? We are here to help. Reach out to us via phone, email or visit our office.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Phone</h3>
                                            <p className="text-muted-foreground">+91 98765 43210</p>
                                            <p className="text-sm text-muted-foreground">Mon-Sat 10am to 7pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p className="text-muted-foreground">contact@aspireeach.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Office</h3>
                                            <p className="text-muted-foreground">
                                                101, Education Hub, <br />
                                                FC Road, Pune, Maharashtra 411005
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="aspect-video bg-muted rounded-lg border flex items-center justify-center text-muted-foreground">
                                Google Map Embed Placeholder
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a Message</CardTitle>
                                <CardDescription>Fill out the form below and we will get back to you within 24 hours.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                            <input id="first-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                            <input id="last-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                        <input id="phone" type="tel" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="+91 99999 99999" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="I am interested in studying in UK..." />
                                    </div>
                                    <Button className="w-full">Send Message</Button>
                                </form>
                            </CardContent>
                        </Card>

                    </div>
                </Container>
            </Section>
        </div>
    )
}
