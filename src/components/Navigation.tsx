import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppointmentDialog from "@/components/AppointmentDialog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src="/logo-b.svg"
              alt="ВетКэа"
              className="h-10 w-auto mr-2"
            />
            <span className="text-xl font-bold text-vetcare-primary">
              ВетКэа
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-vetcare-primary ${
                isActive("/") ? "text-vetcare-primary" : "text-gray-700"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors hover:text-vetcare-primary ${
                isActive("/services") ? "text-vetcare-primary" : "text-gray-700"
              }`}
            >
              Услуги
            </Link>
            <Link
              to="/doctors"
              className={`font-medium transition-colors hover:text-vetcare-primary ${
                isActive("/doctors") ? "text-vetcare-primary" : "text-gray-700"
              }`}
            >
              Врачи
            </Link>
            <Link
              to="/contacts"
              className={`font-medium transition-colors hover:text-vetcare-primary ${
                isActive("/contacts") ? "text-vetcare-primary" : "text-gray-700"
              }`}
            >
              Контакты
            </Link>
            <AppointmentDialog />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <AppointmentDialog buttonText="" icon={true} variant="ghost" size="icon" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium px-4 py-2 rounded-md transition-colors ${
                  isActive("/")
                    ? "bg-vetcare-light text-vetcare-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={closeMenu}
              >
                Главная
              </Link>
              <Link
                to="/services"
                className={`font-medium px-4 py-2 rounded-md transition-colors ${
                  isActive("/services")
                    ? "bg-vetcare-light text-vetcare-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={closeMenu}
              >
                Услуги
              </Link>
              <Link
                to="/doctors"
                className={`font-medium px-4 py-2 rounded-md transition-colors ${
                  isActive("/doctors")
                    ? "bg-vetcare-light text-vetcare-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={closeMenu}
              >
                Врачи
              </Link>
              <Link
                to="/contacts"
                className={`font-medium px-4 py-2 rounded-md transition-colors ${
                  isActive("/contacts")
                    ? "bg-vetcare-light text-vetcare-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={closeMenu}
              >
                Контакты
              </Link>
              <div className="px-4">
                <AppointmentDialog fullWidth={true} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
