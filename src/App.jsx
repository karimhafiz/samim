import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  LanguageIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SEO({ title, description, canonicalUrl }) {
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

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <SEO
          title="Samim Services - Assistance with Forms, Documents, and Communication"
          description="Samim Services helps with form filling, document translation, and phone call assistance for those who need support with paperwork and communication."
          canonicalUrl="https://www.samimservices.com"
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
                  <section
                    id="services"
                    className="w-full py-12 md:py-24 lg:py-32 bg-white"
                  >
                    <div className="container mx-auto px-4 md:px-6">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                        Our Services
                      </h2>
                      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <ClipboardDocumentListIcon className="h-16 w-16 text-blue-600 mb-4" />
                          <h3 className="text-xl font-bold mb-2">
                            Form Filling
                          </h3>
                          <p className="text-gray-600">
                            We help you fill out important forms correctly and
                            quickly.
                          </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <DocumentTextIcon className="h-16 w-16 text-blue-600 mb-4" />
                          <h3 className="text-xl font-bold mb-2">
                            Document Translation
                          </h3>
                          <p className="text-gray-600">
                            We translate your documents to help you understand
                            them better.
                          </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <PhoneIcon className="h-16 w-16 text-blue-600 mb-4" />
                          <h3 className="text-xl font-bold mb-2">
                            Phone Call Assistance
                          </h3>
                          <p className="text-gray-600">
                            We help you make important phone calls and explain
                            things clearly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    id="contact"
                    className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
                  >
                    <div className="container mx-auto px-4 md:px-6">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                        Contact Us
                      </h2>
                      <div className="mx-auto max-w-lg space-y-8">
                        <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                          <PhoneIcon className="h-8 w-8 text-blue-600" />
                          <p className="text-xl font-semibold">Phone</p>
                          <a
                            href="tel:123-456-7890"
                            className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            123-456-7890
                          </a>
                        </div>
                        <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                          <EnvelopeIcon className="h-8 w-8 text-blue-600" />
                          <p className="text-xl font-semibold">Email</p>
                          <a
                            href="mailto:help@samimservices.com"
                            className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            help@samimservices.com
                          </a>
                        </div>
                        <div className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                          <MapPinIcon className="h-8 w-8 text-blue-600" />
                          <p className="text-xl font-semibold">Address</p>
                          <p className="text-lg text-center">
                            123 Main Street, City, Country
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
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
                to="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                to="#"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
