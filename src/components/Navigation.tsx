import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-playfair font-bold text-vetcare-primary">
              ВетКлиника
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-vetcare-primary transition-colors duration-200">
              Главная
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-vetcare-primary transition-colors duration-200">
              Услуги
            </Link>
            <Link to="/doctors" className="text-gray-700 hover:text-vetcare-primary transition-colors duration-200">
              Врачи
            </Link>
            <Link to="/contacts" className="text-gray-700 hover:text-vetcare-primary transition-colors duration-200">
              Контакты
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-vetcare-primary" />
              <span className="text-gray-700 font-medium">+7 (800) 123-45-67</span>
            </div>
            <Button>Записаться</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} size="sm">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-vetcare-primary py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-vetcare-primary py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                to="/doctors" 
                className="text-gray-700 hover:text-vetcare-primary py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Врачи
              </Link>
              <Link 
                to="/contacts" 
                className="text-gray-700 hover:text-vetcare-primary py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <div className="flex items-center space-x-2 py-2">
                <Phone size={18} className="text-vetcare-primary" />
                <span className="text-gray-700 font-medium">+7 (800) 123-45-67</span>
              </div>
              <Button className="w-full">Записаться</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
