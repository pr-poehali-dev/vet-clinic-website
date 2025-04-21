import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
          Почему <span className="text-vetcare-primary">выбирают нас</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Мы стремимся предоставить лучший медицинский уход для ваших питомцев
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="border-t-4 border-t-vetcare-primary">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-vetcare-light rounded-full">
                <Star className="h-8 w-8 text-vetcare-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Опытные специалисты</h3>
              <p className="text-gray-600">
                Наши ветеринарные врачи имеют многолетний опыт работы и регулярно повышают квалификацию.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-vetcare-primary">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-vetcare-light rounded-full">
                <CheckCircle2 className="h-8 w-8 text-vetcare-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Современное оборудование</h3>
              <p className="text-gray-600">
                Мы используем новейшие технологии и оборудование для диагностики и лечения.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-vetcare-primary">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-vetcare-light rounded-full">
                <Calendar className="h-8 w-8 text-vetcare-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Удобный график</h3>
              <p className="text-gray-600">
                Мы работаем 7 дней в неделю, а в экстренных случаях доступны круглосуточно.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Appointments = () => (
  <section className="py-16 bg-vetcare-primary text-white">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Запишитесь на приём онлайн
          </h2>
          <p className="mb-6">
            Вы можете легко записаться на приём к нашим специалистам, выбрав удобное время. 
            Мы ценим ваше время и здоровье ваших питомцев!
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="secondary" size="lg">
              Записаться сейчас
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-vetcare-primary">
              Связаться с нами
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-bold text-vetcare-dark mb-4">Наш адрес</h3>
            <div className="flex items-start space-x-3 text-gray-700 mb-4">
              <MapPin className="text-vetcare-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">г. Москва, ул. Ветеринарная, д. 15</p>
                <p className="text-sm text-gray-500 mt-1">Метро "Площадь Ильича", 5 минут пешком</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-gray-700 font-medium">Рабочие часы:</p>
              <p className="text-gray-600 text-sm mt-1">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-gray-600 text-sm">Сб-Вс: 10:00 - 18:00</p>
              <p className="text-vetcare-primary font-medium text-sm mt-2">Экстренные случаи 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Appointments />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
