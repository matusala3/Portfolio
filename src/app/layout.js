import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matusala Gebrehiwot – Software Engineer & System Architect",
  description: "Portfolio of Matusala Gebrehiwot – Software Engineering student specializing in complex systems design, performance optimization, and scalable solutions. Based in Finland.",
  keywords: [
    "Matusala Gebrehiwot",
    "Software Engineer",
    "System Architect",
    "Portfolio",
    "matikif.tech",
    "United States",
    "Software Engineering Student",
    "mati hive",
    "mati kif",
    "mati oulu university of applied sciences",
  ],
  authors: [{ name: "Matusala Gebrehiwot" }],
  creator: "Matusala Gebrehiwot",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
    shortcut: ['/favicon-16x16.png'],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: "Matusala Gebrehiwot – Software Engineer",
    description: "Portfolio showcasing software engineering projects and system architecture expertise",
    url: "https://matikif.tech",
    siteName: "Matusala Gebrehiwot Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Matusala Gebrehiwot",
    "jobTitle": "Software Engineering Student",
    "description": "Software Engineer specializing in system architecture and performance optimization",
    "url": "https://matikif.tech",
    "sameAs": [
      "https://www.linkedin.com/in/matusala-gebrehiwot-b0435624b/",
      "https://github.com/matusala3"
    ],
    "alumniOf": "Your University Name",
    "nationality": "Ethiopian",
    "knowsAbout": [
      "Software Engineering",
      "System Architecture",
      "Performance Optimization",
      "Scalable Systems",
      "Complex Problem Solving"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
