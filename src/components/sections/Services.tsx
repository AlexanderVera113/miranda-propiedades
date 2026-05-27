import { Home, Key, FileText, Gavel, Scale, BedDouble } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Corretaje: Venta',
      description: 'Gestión integral para la venta de su propiedad al mejor precio de mercado.',
      icon: <Home size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Corretaje: Arriendos',
      description: 'Encontramos al arrendatario ideal, garantizando contratos seguros y rentables.',
      icon: <Key size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Asesoría Inmobiliaria',
      description: 'Asesoría jurídica y financiera completa para proteger su patrimonio.',
      icon: <FileText size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Remates Macal',
      description: 'Representación profesional y asesoría en compra de propiedades en remate.',
      icon: <Gavel size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Posesión Efectiva',
      description: 'Tramitación legal y notarial completa para regularizar su herencia.',
      icon: <Scale size={40} strokeWidth={1.5} />,
    },
    {
      title: 'Administración Airbnb',
      description: 'Anuncios, precios, reservas, limpieza y atención a pasajeros 24/7.',
      icon: <BedDouble size={40} strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-primary font-bold mb-4">
            Nuestra Misión
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-6 text-primary-light max-w-2xl mx-auto text-lg font-light">
            Nuestra mision principal es brindarle soluciones integrales para la gestión, rentabilización y protección de su patrimonio inmobiliario en la Región de Tarapacá.
          </p>
        </div>

        {/* Grilla de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-secondary mb-6 group-hover:scale-110 transition-transform origin-left duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-serif tracking-wide">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;