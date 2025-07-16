import './globals.css';
import Navbar from './components/Navbar';
import Providers from './Providers';

export const metadata = {
  title: 'Mi tienda',
  description: 'App de ecommerce de libros',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}