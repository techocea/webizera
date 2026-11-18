import type {Metadata} from 'next';

export function getSiteUrl(): string {
    const raw =
        process.env.NEXT_PUBLIC_SITE_URL ||
        'https://webizera.com';
    return raw.replace(/\/$/, '');
}

export function buildMetadata({
                                  title,
                                  description,
                                  path = '/',
                                  noIndex = false,
                              }: {
    title: string;
    description: string;
    path?: string;
    noIndex?: boolean;
}): Metadata {
    const siteUrl = getSiteUrl();
    const url = `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: 'website',
            siteName: 'Webizera',
            title,
            description,
            url,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
        ...(noIndex
            ? {
                robots: {
                    index: false,
                    follow: false,
                },
            }
            : {}),
    };
}

export const ORGANIZATION_GRAPH_JSON_LD = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': '#organization',
            name: 'Webizera',
            founder: {
                '@type': 'Person',
                name: 'Brightly Dunsford',
            },
            email: 'hello@webizera.com',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Colombo',
                addressCountry: 'LK',
            },
            description:
                'Digital product studio designing and building websites, booking systems, client portals, dashboards, and workflow automation.',
        },
        {
            '@type': 'WebSite',
            '@id': '#website',
            name: 'Webizera',
            publisher: {
                '@id': '#organization',
            },
        },
        {
            '@type': 'Service',
            serviceType: 'Digital Product Studio & Custom Web Systems',
            provider: {
                '@id': '#organization',
            },
            areaServed: ['LK', 'Worldwide'],
            description:
                'Conversion-focused websites, booking and inquiry systems, client portals, operational dashboards, and workflow automation.',
        },
    ],
};