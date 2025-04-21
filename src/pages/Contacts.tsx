import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
                Свяжитесь <span className="text-vetcare-primary">с нами</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Мы всегда рады ответить на ваши вопросы и помочь вашим питомцам
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Имя
                      </label>
                      <Input id="name" placeholder="Введите ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Телефон
                      </label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="example@mail.ru" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Тема
                    </label>
                    <Input id="subject" placeholder="Укажите тему обращения" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Введите ваше сообщение"
                      rows={5}
                    />
                  </div>
                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Отправить сообщение
                  </Button>
                </form>
              </div>

              <div>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-6">
                  <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-vetcare-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Адрес</p>
                        <p className="text-gray-600">г. Москва, ул. Ветеринарная, д. 15</p>
                        <p className="text-gray-500 text-sm mt-1">
                          Метро "Площадь Ильича", 5 минут пешком
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-vetcare-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-gray-600">+7 (800) 123-45-67</p>
                        <p className="text-gray-500 text-sm mt-1">
                          Для экстренных случаев: +7 (800) 765-43-21
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-vetcare-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@vetclinic.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-vetcare-primary mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Часы работы</p>
                        <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                        <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                        <p className="text-vetcare-primary font-medium text-sm mt-1">
                          Экстренные случаи 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-vetcare-primary text-white p-6 md:p-8 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Как добраться</h2>
                  <p className="mb-4">
                    Наша клиника удобно расположена в центре города, 
                    недалеко от станции метро "Площадь Ильича".
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>От метро "Площадь Ильича" - 5 минут пешком</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Автобусы №123, №456 - остановка "Ветеринарная"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Есть собственная парковка для клиентов</span>
                    </li>
                  </ul>
                  <Button variant="secondary">Построить маршрут</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Часто задаваемые вопросы</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded shadow-sm">
                  <h3 className="font-bold mb-2">Как подготовить питомца к приёму?</h3>
                  <p className="text-gray-600">
                    Не кормите животное за 2-4 часа до приёма. Возьмите с собой медицинскую карту 
                    и информацию о вакцинациях, если посещаете нас впервые.
                  </p>
                </div>
                <div className="bg-white p-5 rounded shadow-sm">
                  <h3 className="font-bold mb-2">Нужна ли предварительная запись?</h3>
                  <p className="text-gray-600">
                    Для планового осмотра рекомендуем записаться заранее. В экстренных случаях 
                    мы примем вашего питомца без записи в порядке живой очереди.
                  </p>
                </div>
                <div className="bg-white p-5 rounded shadow-sm">
                  <h3 className="font-bold mb-2">Можно ли привезти животное на такси?</h3>
                  <p className="text-gray-600">
                    Да, но обязательно используйте переноску для безопасности. Также у нас есть 
                    услуга выезда ветеринара на дом для некоторых процедур.
                  </p>
                </div>
                <div className="bg-white p-5 rounded shadow-sm">
                  <h3 className="font-bold mb-2">Как часто нужно вакцинировать питомца?</h3>
                  <p className="text-gray-600">
                    Первая вакцинация проводится в возрасте 8-12 недель, затем ежегодно. 
                    Точный график вакцинации зависит от вида животного и типа вакцины.
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

export default Contacts;
