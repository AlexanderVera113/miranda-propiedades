import { Shield, Star, Clock, Award } from 'lucide-react';
import perfilElizabeth from '../../images/Imagenes/Elizabeth-Miranda.webp';

const About = () => {
  const features = [
    { icon: <Shield className="text-secondary" size={24} />, text: 'Confianza y Transparencia' },
    { icon: <Star className="text-secondary" size={24} />, text: 'Experiencia Regional' },
    { icon: <Award className="text-secondary" size={24} />, text: 'Compromiso Absoluto' },
    { icon: <Clock className="text-secondary" size={24} />, text: 'Atención Personalizada 24/7' },
  ];

  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Columna de la Imagen (Izquierda) */}
<div className="w-full lg:w-1/2 relative group">
            {/* Elemento decorativo dorado detrás de la foto */}
            <div className="absolute inset-0 bg-secondary translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            
            {/* Imagen importada correctamente */}
            <img 
              src={perfilElizabeth} 
              alt="Elizabeth Miranda - Broker Inmobiliario" 
              className="relative z-10 w-full h-[500px] md:h-[600px] object-cover rounded-sm shadow-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Columna de Contenido (Derecha) */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">
              Conoce a tu asesora
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">
              Elizabeth Miranda
            </h3>
            <p className="text-xl text-primary/80 font-medium mb-6">
              Broker Inmobiliario y Especialista en Gestión Airbnb
            </p>
            
            <div className="w-16 h-1 bg-secondary mb-8"></div>
            
            <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
              Con un profundo conocimiento del mercado en Iquique y la Región de Tarapacá, 
              mi compromiso es brindarle una asesoría integral, profesional y orientada a resultados. 
              Ya sea que busque vender, arrendar o maximizar sus ingresos en Airbnb, 
              garantizamos proteger y rentabilizar su propiedad como si fuera nuestro.
            </p>

            {/* Grilla de atributos de confianza */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-surface rounded-sm border border-gray-100 shadow-sm hover:border-secondary/30 transition-colors">
                  <div className="bg-primary/5 p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-primary font-medium text-sm md:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;