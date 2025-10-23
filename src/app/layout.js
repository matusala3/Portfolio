import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mati Kif - Software Engineer & System Architect",
  description: "Portfolio of Mati Kif - Software Engineering student specializing in complex systems design, performance optimization, and scalable solutions. Based in Finland.",
  keywords: [
    "Mati Kif",
    "Software Engineer",
    "System Architect",
    "Portfolio",
    "matikif.tech",
    "United States",
    "Software Engineering Student"
  ],
  authors: [{ name: "Mati Kif" }],
  creator: "Mati Kif",
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Mati Kif - Software Engineer",
    description: "Portfolio showcasing software engineering projects and system architecture expertise",
    url: "https://matikif.tech",
    siteName: "Mati Kif Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mati Kif",
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
