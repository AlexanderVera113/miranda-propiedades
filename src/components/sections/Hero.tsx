import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. Video de Fondo (Capa base - z-0) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* 2. Capa oscura (Overlay) - (Capa media - z-1) */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-primary/95 via-primary/70 to-primary/95"></div>

      {/* 3. Contenido Principal - (Capa superior - z-10) */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary font-bold tracking-tight mb-6 drop-shadow-lg">
          MIRANDA PROPIEDADES
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white font-sans font-light tracking-wider uppercase mb-10 max-w-3xl mx-auto opacity-90">
          Corretaje de Propiedades y Gestión Airbnb Regional
        </p>
        
        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/propiedades" 
            className="cursor-pointer group flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-secondary-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Ver Propiedades
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>

      {/* 4. Difuminado inferior - (z-2 para que se vea sobre el overlay) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-2"></div>
      
    </section>
  );
};

export default Hero;