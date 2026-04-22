import type { Metadata } from 'next'
import { Exo_2, Gowun_Dodum } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const gowunDodum = Gowun_Dodum({ weight: "400", subsets: ["latin"], variable: "--font-gowun" });

export const metadata: Metadata = {
  title: '온새나로 스튜디오',
  description: '온새나로 스튜디오는 새로운 아이디어를 실현하는 프로젝트를 진행합니다.',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${exo2.variable} ${gowunDodum.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
