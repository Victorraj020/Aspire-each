import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    fullWidth?: boolean
}

export function Section({ children, className, fullWidth = false, ...props }: SectionProps) {
    return (
        <section
            className={cn("py-12 md:py-16 lg:py-24", className)}
            {...props}
        >
            {children}
        </section>
    )
}
