import type { Metadata } from 'next';
import { Inter, Cedarville_Cursive, Saira_Stencil_One } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cedarville = Cedarville_Cursive({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cursive'
});

const sairaStencil = Saira_Stencil_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-saira-stencil'
});

export const metadata: Metadata = {
  title: 'Scrollytelling Portfolio',
  description: 'High-end personal portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cedarville.variable} ${sairaStencil.variable} font-sans`}>{children}</body>
    </html>
  );
}
