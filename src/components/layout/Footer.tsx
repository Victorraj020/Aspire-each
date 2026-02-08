import Link from "next/link"
import { GraduationCap, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Container } from "@/components/ui/Container"

export function Footer() {
    return (
        <footer className="w-full border-t bg-muted/40">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold tracking-tight text-primary">Aspire Each</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Fueling inspiration, achieving dreams together. Your trusted partner in overseas education and career building.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold">Services</h3>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Career Counseling</Link>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">University Admissions</Link>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Visa Assistance</Link>
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Test Preparation</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold">Company</h3>
                        <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
                        <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link>
                        <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-semibold">Contact</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="h-4 w-4" />
                            <span>contact@aspireeach.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>Pune, India</span>
                        </div>
                        <div className="mt-2 flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Aspire Each Overseas Education. All rights reserved.
                </div>
            </Container>
        </footer>
    )
}
