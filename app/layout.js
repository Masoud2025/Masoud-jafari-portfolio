import ClientLogger from './components/ClientLogger';
import './globals.css';

export const metadata = {
  title: 'Coder',
  description: 'Perfections portfolio',
  icons: {
    icon: '/laptop.ico?v=1', // Add a query string
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
      <ClientLogger />
    </html>
  );
}
