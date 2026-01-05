import { type ReactNode } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/navigation/Header";
import Footer from "../components/navigation/Footer";
import { useCart } from "../context/CartContext";

interface Breadcrumb {
  label: string;
  to?: string;
}

interface StaticPageLayoutProps {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  children: ReactNode;
}

const StaticPageLayout = ({
  title,
  description,
  breadcrumbs = [],
  children,
}: StaticPageLayoutProps) => {
  const navigate = useNavigate();
  const { cartItemCount } = useCart();

  const handleHomeClick = () => navigate("/");
  const handleCartClick = () => navigate("/cart");

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
      <Header
        currentPage="home"
        onHomeClick={handleHomeClick}
        onCartClick={handleCartClick}
        cartItemCount={cartItemCount}
      />

      <main className="flex-1 bg-gray-50 pb-16">
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            {breadcrumbs.length > 0 && (
              <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
                {breadcrumbs.map((crumb, index) => (
                  <span key={crumb.label} className="flex items-center gap-2">
                    {crumb.to ? (
                      <Link
                        to={crumb.to}
                        className="transition-colors hover:text-gray-900"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-gray-700">{crumb.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && <span className="text-gray-300">/</span>}
                  </span>
                ))}
              </nav>
            )}

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                {description}
              </p>
            )}
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StaticPageLayout;
