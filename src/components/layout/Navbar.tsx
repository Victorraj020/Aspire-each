"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, Facebook, Linkedin, Instagram, GraduationCap, ChevronDown } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header className="w-full font-sans">
            {/* Top Bar */}
            <div className="bg-[#0f1025] text-white text-xs py-2 hidden lg:block">
                <Container>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <a href="tel:+919324482899" className="flex items-center hover:text-primary-foreground/80 transition-colors">
                                <Phone className="h-3 w-3 mr-2 text-[#00aaff]" fill="currentColor" />
                                <span>+91 93244 82899</span>
                            </a>
                            <a href="mailto:info@aspireeach.com" className="flex items-center hover:text-primary-foreground/80 transition-colors">
                                <Mail className="h-3 w-3 mr-2 text-[#00aaff]" />
                                <span>info@aspireeach.com</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center space-x-4 mr-6">
                                <Link href="#" className="hover:text-primary-foreground/80 transition-colors"><Facebook className="h-4 w-4" /></Link>
                                <Link href="#" className="hover:text-primary-foreground/80 transition-colors"><Linkedin className="h-4 w-4" /></Link>
                                <Link href="#" className="hover:text-primary-foreground/80 transition-colors"><Instagram className="h-4 w-4" /></Link>
                            </div>
                            <div className="bg-gradient-to-r from-[#205d86] to-[#0a3d60] px-6 py-2 -my-2 flex items-center h-[40px]">
                                <span className="font-bold tracking-wider uppercase">LET'S ASPIRE</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Navbar */}
            <div className="bg-white border-b shadow-sm sticky top-0 z-50">
                <Container>
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="relative">
                                {/* Replicating the logo feel with icon/text if image not available */}
                                <GraduationCap className="h-10 w-10 text-[#0f3460]" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-2xl font-serif text-[#0f3460] font-bold">Aspire</span>
                                <span className="text-xl font-serif text-[#0f3460]">Each</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="group flex items-center text-[15px] font-medium text-gray-700 hover:text-[#0f3460] transition-colors"
                                >
                                    {item.name}
                                    {(item as any).hasDropdown && <ChevronDown className="ml-1 h-3 w-3 group-hover:rotate-180 transition-transform" />}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Button
                                className="bg-[#106b87] hover:bg-[#0c566d] text-white font-bold px-6 py-6 shadow-md rounded-sm uppercase leading-tight"
                            >
                                Free<br />E-Book
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="flex items-center space-x-2 lg:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </Container>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden border-b bg-background fixed w-full z-40 top-[80px]">
                    <Container className="py-4">
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium transition-colors hover:text-primary p-2 hover:bg-muted rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t flex flex-col gap-4">
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <Phone className="h-4 w-4" /> <span>+91 93244 82899</span>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <Mail className="h-4 w-4" /> <span>info@aspireeach.com</span>
                                </div>
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-[#106b87]">Free E-Book</Button>
                                </Link>
                            </div>
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    )
}
