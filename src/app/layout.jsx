import '../styles/style.css';
import '../styles/skeleton.css';
import './globals.css';
import '../styles/animations.css';
import '../components/layout/PromotionalBar.css';
import '../components/layout/LogoBar.css';
import '../components/layout/NavigationBar.css';
import PromotionalBar from '@/components/layout/PromotionalBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingChat from '@/components/layout/FloatingChat';
import PageTransition from '@/components/animations/PageTransition';
import { AuthProvider } from '@/context/AuthContext';
import { ShopProvider } from '@/context/ShopContext';
import LoginModal from '@/components/auth/LoginModal';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema-generator';
import { SITE_NAME, SITE_URL } from '@/lib/site-config';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Furniture for Your Home`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Explore furniture for every room, discover great deals, and find options to suit your home and budget.',
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Furniture for Your Home`,
    description: 'Explore furniture for every room, discover great deals, and find options to suit your home and budget.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Furniture for Your Home`,
    description: 'Explore furniture for every room and find options to suit your home and budget.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  // Generate JSON-LD schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Website JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <AuthProvider>
          <ShopProvider>
            <LoginModal />
            <ErrorBoundary>
              <div id="app" style={{ overflow: 'visible' }}>
                <div className="z605e" style={{ overflow: 'visible' }}>
                  <div className="Toastify"></div>
                  <FloatingChat />
                  <PromotionalBar />
                  <Header />
                  <div className="fdk-theme-outlet" style={{ overflow: 'visible' }}>
                    <PageTransition>
                      {children}
                    </PageTransition>
                  </div>
                  <Footer />
                </div>
              </div>
            </ErrorBoundary>
          </ShopProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
