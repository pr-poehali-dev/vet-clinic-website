import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-vetcare-light py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-vetcare-dark mb-4">
              Забота о здоровье ваших
              <span className="text-vetcare-primary"> питомцев</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Наша ветеринарная клиника предлагает полный спектр услуг по диагностике, 
              лечению и профилактике заболеваний ваших любимцев. Мы гарантируем 
              профессиональный подход и заботу о каждом пациенте.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">
                Записаться на приём
              </Button>
              <Button variant="outline" size="lg">
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in hidden md:block">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Ветеринар с питомцами" 
                className="rounded w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-vetcare-primary text-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm font-medium">
                "Превосходная забота о моём коте! Врачи профессиональны и внимательны."
              </p>
              <p className="text-xs mt-2">— Анна, владелец питомца</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
