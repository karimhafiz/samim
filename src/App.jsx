import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  LanguageIcon,
  PhoneIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Lazy load components
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SEO({ title, description, canonicalUrl, schema }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Samim Services",
    description: "Assistance with forms, documents, and communication",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "City",
      addressCountry: "Country",
    },
    telephone: "123-456-7890",
    email: "help@samimservices.com",
    url: "https://www.samimservices.com",
    sameAs: [
      "https://www.facebook.com/samimservices",
      "https://www.linkedin.com/company/samimservices",
      "https://twitter.com/samimservices",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <SEO
          title="Samim Services - Expert Assistance with Forms, Documents, and Communication"
          description="Samim Services provides professional help with form filling, document translation, and phone call assistance. We support individuals and businesses with efficient paperwork and clear communication."
          canonicalUrl="https://www.samimservices.com"
          schema={schemaData}
        />
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white shadow-md fixed w-full z-10">
          <Link
            className="flex items-center justify-center"
            to="/"
            onClick={closeMenu}
          >
            <span className="sr-only">Samim Services</span>
            <LanguageIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl md:text-2xl font-bold text-gray-900">
              Samim Services
            </span>
          </Link>
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </nav>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </header>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md fixed top-16 left-0 right-0 z-10">
            <nav className="flex flex-col p-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium py-2 hover:text-blue-600 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium py-2 hover:text-blue-600 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
        <main className="flex-1 pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
                    <div className="container mx-auto px-4 md:px-6">
                      <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Welcome to Samim Services
                          </h1>
                          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                            We help you with important paperwork and
                            communication. Easy to understand, quick to use.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-lg font-semibold">
                            Contact us now:
                          </p>
                          <a
                            href="tel:123-456-7890"
                            className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <PhoneIcon className="h-5 w-5" />
                            <span className="text-lg">123-456-7890</span>
                          </a>
                          <a
                            href="mailto:help@samimservices.com"
                            className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <EnvelopeIcon className="h-5 w-5" />
                            <span className="text-lg">
                              help@samimservices.com
                            </span>
                          </a>
                        </div>
                        <div className="space-x-4 mt-4">
                          <button
                            onClick={() => scrollToSection("contact")}
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 h-10 py-2 px-4"
                          >
                            Get Help Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Services />
                    <Contact />
                  </Suspense>
                </>
              }
            />
          </Routes>
        </main>
        <footer className="bg-gray-100 py-6 px-4 md:px-6">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 sm:mb-0">
              © 2024 Samim Services. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                to="/terms"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                to="/privacy"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
