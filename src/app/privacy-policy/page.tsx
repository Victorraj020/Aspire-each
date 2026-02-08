import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"

export default function PrivacyPolicyPage() {
    return (
        <div className="py-12">
            <Container className="prose prose-blue max-w-4xl">
                <h1>Privacy Policy</h1>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <p>
                    At Aspire Each Overseas Education, we are committed to protecting your privacy and ensuring the security of your personal information.
                    This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                    We may collect personal information such as your name, email address, phone number, and educational background when you:
                </p>
                <ul>
                    <li>Fill out a form on our website</li>
                    <li>Register for our services</li>
                    <li>Subscribe to our newsletter</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>
                    We use the information we collect to:
                </p>
                <ul>
                    <li>Provide counseling and admission services</li>
                    <li>Communicate with you regarding updates and offers</li>
                    <li>Improve our website and user experience</li>
                </ul>

                <h2>3. Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2>4. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at contact@aspireeach.com.
                </p>
            </Container>
        </div>
    )
}
