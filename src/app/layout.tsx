import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Source_Code_Pro } from "next/font/google";
import "./globals.css";

// Primary display - condensed, architectural, engineering feel
const barlowCondensed = Barlow_Condensed({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

// Body text - clean, precise, technical
const barlow = Barlow({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

// Monospace - technical accent
const sourceCodePro = Source_Code_Pro({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
    weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
    title: "Analogical Engines — Coming Soon",
    description:
        "Breakthroughs don't come from nowhere. They come from elsewhere. Analogical Engines is building a cognitive AI platform that helps scientists, engineers, and innovators systematically discover and adapt breakthrough ideas from across domains.",
    keywords: [
        "innovation",
        "AI",
        "R&D",
        "analogical reasoning",
        "breakthrough",
        "CMU",
        "HCII",
    ],
    openGraph: {
        title: "Analogical Engines — Coming Soon",
        description:
            "Turning serendipity into a system for breakthrough innovation.",
        type: "website",
    },
    icons: {
        icon: [
            { url: "/assets/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/assets/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/assets/favicon_io/favicon.ico", sizes: "any" },
        ],
        apple: [
            { url: "/assets/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: "/assets/favicon_io/site.webmanifest",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${barlowCondensed.variable} ${barlow.variable} ${sourceCodePro.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
