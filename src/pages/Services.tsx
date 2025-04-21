import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, Microscope, Scissors, Pill, Activity, Shield, BatteryFull } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="h-10 w-10 text-vetcare-primary" />,
      title: "Терапия",
      description: "Диагностика и лечение заболеваний общей клинической практики"
    },
    {
      icon: <Heart className="h-10 w-10 text-vetcare-primary" />,
      title: "Хирургия",
      description: "Проведение операций любой сложности, включая стерилизацию и кастрацию"
    },
    {
      icon: <Microscope className="h-10 w-10 text-vetcare-primary" />,
      title: "Лабораторная диагностика",
      description: "Анализы крови, мочи, кала, цитология и гистология тканей"
    },
    {
      icon: <Shield className="h-10 w-10 text-vetcare-primary" />,
      title: "Вакцинация",
      description: "Профилактические прививки для защиты от инфекционных заболеваний"
    },
    {
      icon: <Scissors className="h-10 w-10 text-vetcare-primary" />,
      title: "Груминг",
      description: "Стрижка, мытье и уход за шерстью вашего питомца"
    },
    {
      icon: <Pill className="h-10 w-10 text-vetcare-primary" />,
      title: "Аптека",
      description: "Широкий ассортимент лекарств и добавок для животных"
    },
    {
      icon: <Activity className="h-10 w-10 text-vetcare-primary" />,
      title: "УЗИ и рентген",
      description: "Современные методы диагностики внутренних органов"
    },
    {
      icon: <BatteryFull className="h-10 w-10 text-vetcare-primary" />,
      title: "Стационар",
      description: "Возможность наблюдения и лечения в условиях клиники"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
                Наши <span className="text-vetcare-primary">услуги</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Мы предлагаем полный спектр ветеринарных услуг для поддержания здоровья вашего питомца
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 bg-vetcare-light rounded-full">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <Button variant="outline" className="mt-auto">Подробнее</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="bg-vetcare-primary text-white rounded-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Нужна консультация?</h2>
                  <p className="text-white/90 max-w-lg">
                    Если у вас есть вопросы о состоянии здоровья вашего питомца или вам нужна срочная помощь, 
                    свяжитесь с нами или запишитесь на приём прямо сейчас.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg">
                    Записаться на приём
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-vetcare-primary" size="lg">
                    Позвонить нам
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
