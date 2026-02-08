import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { blogs } from "@/data/blogs"
import { Calendar, User } from "lucide-react"

export const metadata = {
    title: "Study Abroad Blog - Tips, Guides & News",
    description: "Stay updated with the latest trends in overseas education, scholarship opportunities, and career advice.",
}

export default function BlogPage() {
    return (
        <div>
            <section className="bg-muted py-12 md:py-20">
                <Container>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Latest Insights</h1>
                    <p className="text-xl text-muted-foreground max-w-[600px]">
                        Expert advice, guides, and news for your study abroad journey.
                    </p>
                </Container>
            </section>

            <Section>
                <Container>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <Card key={blog.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="aspect-video bg-muted relative flex items-center justify-center text-muted-foreground">
                                    {/* Placeholder for blog image */}
                                    <span>{blog.category}</span>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {blog.date}</span>
                                        <span className="flex items-center gap-1"><User className="h-3 w-3" /> {blog.author}</span>
                                    </div>
                                    <CardTitle className="line-clamp-2"><Link href={`/blog/${blog.slug}`} className="hover:text-primary transition-colors">{blog.title}</Link></CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="line-clamp-3">
                                        {blog.excerpt}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    )
}
