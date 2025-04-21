import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Doctor {
  name: string;
  position: string;
  specialization: string;
  experience: string;
  image: string;
  initials: string;
}

const Doctors = () => {
  const doctors: Doctor[] = [
    {
      name: "Елена Смирнова",
      position: "Главный ветеринарный врач",
      specialization: "Терапия, Хирургия",
      experience: "Опыт работы: 15 лет",
      image: "/placeholder.svg",
      initials: "ЕС"
    },
    {
      name: "Андрей Петров",
      position: "Ветеринарный хирург",
      specialization: "Ортопедия, Офтальмология",
      experience: "Опыт работы: 10 лет",
      image: "/placeholder.svg",
      initials: "АП"
    },
    {
      name: "Ирина Ковалева",
      position: "Ветеринарный терапевт",
      specialization: "Дерматология, Гастроэнтерология",
      experience: "Опыт работы: 8 лет",
      image: "/placeholder.svg",
      initials: "ИК"
    },
    {
      name: "Дмитрий Иванов",
      position: "Узи-специалист",
      specialization: "Эхокардиография, Узи-диагностика",
      experience: "Опыт работы: 7 лет",
      image: "/placeholder.svg",
      initials: "ДИ"
    },
    {
      name: "Мария Соколова",
      position: "Анестезиолог",
      specialization: "Анестезиология, Реаниматология",
      experience: "Опыт работы: 9 лет",
      image: "/placeholder.svg",
      initials: "МС"
    },
    {
      name: "Алексей Кузнецов",
      position: "Ветеринарный дантист",
      specialization: "Стоматология, Челюстно-лицевая хирургия",
      experience: "Опыт работы: 6 лет",
      image: "/placeholder.svg",
      initials: "АК"
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
                Наши <span className="text-vetcare-primary">специалисты</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Познакомьтесь с нашей командой высококвалифицированных ветеринарных врачей, 
                готовых предоставить лучший уход вашим питомцам
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-vetcare-light p-6 flex justify-center">
                    <Avatar className="h-32 w-32 border-4 border-white">
                      <AvatarImage src={doctor.image} alt={doctor.name} />
                      <AvatarFallback className="text-2xl bg-vetcare-primary text-white">{doctor.initials}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-vetcare-primary font-medium mb-2">{doctor.position}</p>
                    <p className="text-gray-600 mb-1">{doctor.specialization}</p>
                    <p className="text-gray-500 text-sm mb-4">{doctor.experience}</p>
                    <Button variant="outline" className="w-full">Записаться</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-4">
                  Повышение квалификации <span className="text-vetcare-primary">врачей</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Наши специалисты регулярно проходят курсы повышения квалификации, посещают международные 
                  конференции и семинары, чтобы быть в курсе последних достижений ветеринарной медицины.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-vetcare-primary mr-2">•</span>
                    <span>Участие в международных ветеринарных конференциях</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vetcare-primary mr-2">•</span>
                    <span>Прохождение специализированных курсов и тренингов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vetcare-primary mr-2">•</span>
                    <span>Обмен опытом с ведущими клиниками мира</span>
                  </li>
                </ul>
                <Button>Подробнее о нашей команде</Button>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Стажировка и обучение</h3>
                <p className="text-gray-600 mb-4">
                  Мы также проводим стажировки для молодых специалистов и студентов ветеринарных факультетов, 
                  помогая им получить практический опыт под руководством наших опытных врачей.
                </p>
                <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                  <h4 className="font-medium mb-2">Для студентов</h4>
                  <p className="text-gray-600 text-sm">
                    Обучающие программы и практика для студентов ветеринарных факультетов
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium mb-2">Для специалистов</h4>
                  <p className="text-gray-600 text-sm">
                    Программы повышения квалификации и обмена опытом для действующих ветеринарных врачей
                  </p>
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

export default Doctors;
