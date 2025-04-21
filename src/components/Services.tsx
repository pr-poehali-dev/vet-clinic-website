import { 
  Stethoscope, 
  Pill, 
  Scissors, 
  ShieldCheck, 
  Search, 
  BadgeCheck 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesList = [
  {
    icon: <Stethoscope className="h-10 w-10 text-vetcare-primary" />,
    title: "Терапия",
    description: "Диагностика и лечение внутренних заболеваний животных различной сложности."
  },
  {
    icon: <Pill className="h-10 w-10 text-vetcare-primary" />,
    title: "Вакцинация",
    description: "Профилактические прививки для защиты вашего питомца от опасных заболеваний."
  },
  {
    icon: <Scissors className="h-10 w-10 text-vetcare-primary" />,
    title: "Хирургия",
    description: "Проведение хирургических операций любой сложности с использованием современного оборудования."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-vetcare-primary" />,
    title: "Стоматология",
    description: "Профессиональная чистка зубов, лечение и удаление у животных."
  },
  {
    icon: <Search className="h-10 w-10 text-vetcare-primary" />,
    title: "Диагностика",
    description: "УЗИ, рентген, анализы крови и другие методы диагностики для выявления заболеваний."
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-vetcare-primary" />,
    title: "Груминг",
    description: "Профессиональный уход за шерстью, когтями и ушами ваших питомцев."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Наши <span className="text-vetcare-primary">услуги</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем широкий спектр ветеринарных услуг для поддержания 
            здоровья и благополучия ваших питомцев
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {service.icon}
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
