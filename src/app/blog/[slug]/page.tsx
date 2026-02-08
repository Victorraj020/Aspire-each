import { notFound } from "next/navigation"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { blogs } from "@/data/blogs"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

interface Props {
    params: { slug: string }
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }))
}

export function generateMetadata({ params }: Props) {
    const blog = blogs.find((b) => b.slug === params.slug)
    if (!blog) return { title: "Blog Not Found" }

    return {
        title: blog.title,
        description: blog.excerpt,
    }
}

export default function BlogPostPage({ params }: Props) {
    const blog = blogs.find((b) => b.slug === params.slug)

    if (!blog) {
        notFound()
    }

    return (
        <div>
            <section className="bg-background py-12">
                <Container>
                    <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Link>

                    <article className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full flex items-center gap-1 font-medium text-xs">
                                <Tag className="h-3 w-3" /> {blog.category}
                            </span>
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {blog.date}</span>
                            <span className="flex items-center gap-1"><User className="h-4 w-4" /> {blog.author}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">{blog.title}</h1>

                        <div className="aspect-video bg-muted rounded-xl mb-12 flex items-center justify-center text-muted-foreground">
                            Blog Image Placeholder
                        </div>

                        <div className="prose prose-lg prose-blue max-w-none text-muted-foreground">
                            <p className="lead text-xl text-foreground font-medium mb-8">
                                {blog.excerpt}
                            </p>
                            {/* This serves as the content body */}
                            <p>
                                Studying abroad is a transformative experience. {blog.content}
                            </p>
                            <h3>Key Takeaways</h3>
                            <p>
                                Make sure you understand the requirements and plan ahead. Financial planning is key.
                            </p>
                        </div>
                    </article>
                </Container>
            </section>
        </div>
    )
}
