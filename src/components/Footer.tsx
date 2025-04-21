import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vetcare-dark text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4 text-white">ВетКлиника</h3>
            <p className="text-gray-300 mb-4">
              Профессиональная забота о здоровье ваших питомцев. Мы работаем, чтобы ваши животные были здоровы и счастливы.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-vetcare-primary" />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-vetcare-primary" />
                <span>info@vetclinic.ru</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-vetcare-primary mt-1" />
                <span>г. Москва, ул. Ветеринарная, д. 15</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Часы работы</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-vetcare-primary mt-1" />
                <div>
                  <p>Пн-Пт: 9:00 - 20:00</p>
                  <p>Сб-Вс: 10:00 - 18:00</p>
                </div>
              </li>
              <li className="mt-4">
                <p className="text-vetcare-primary font-medium">Экстренные случаи 24/7</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Врачи
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ВетКлиника. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
