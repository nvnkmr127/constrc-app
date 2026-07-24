export default function PageHero({ title, image = "/images/bangalore_hero_building.png" }: { title: string, image?: string }) {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <img
          alt="Header Background"
          className="w-full h-full object-cover"
          src={image}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          {title}
        </h1>
        <div className="w-24 h-1 bg-primary-orange mx-auto rounded-full"></div>
      </div>
    </section>
  );
}
