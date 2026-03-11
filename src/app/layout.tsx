
import type { Metadata } from 'next';
import './globals.css';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Sandoval Strategics | Digital Product Specialist & Visual Designer',
  description: 'Portafolio profesional de Karen Sandoval. Estrategia de producto, desarrollo front-end y optimización de negocio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              if (theme === 'dark') document.documentElement.classList.add('dark');
            })();
          `
        }} />
      </head>
      <body className="font-body antialiased bg-background text-foreground transition-colors duration-500">
        <SidebarProvider defaultOpen={false}>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <SidebarInset className="flex flex-col w-full">
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </SidebarInset>
          </div>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
