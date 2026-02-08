export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'EducationOrganization',
        name: 'Aspire Each Overseas Education Consultancy',
        image: 'https://aspireeach.com/logo.png', // Placeholder
        description: 'Leading Study Abroad Consultancy in India. 100% Visa Success Ratio. Expert counseling for USA, UK, Canada, Australia, and more.',
        url: 'https://aspireeach.com',
        telephone: '+919876543210', // Placeholder - need to update with real info
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Your Office Address', // Placeholder
            addressLocality: 'City',
            addressRegion: 'State',
            postalCode: '123456',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 18.5204, // Pune approx
            longitude: 73.8567,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ],
                opens: '10:00',
                closes: '19:00',
            },
        ],
        sameAs: [
            'https://www.facebook.com/aspireeach',
            'https://www.instagram.com/aspireeach',
            'https://www.linkedin.com/company/aspireeach',
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
