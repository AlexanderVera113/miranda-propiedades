import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Car, MapPin, CheckCircle, MessageCircle } from 'lucide-react';
import Footer from '../components/layout/Footer';
import logoReal from '../images/Logo/Logo-MirandaPropiedades.png'; 

const PropertyDetail = () => {
  const { id } = useParams();

  // Aquí en el futuro conectarás tu base de datos. Por ahora usamos la misma data de prueba.
  const properties = [
    {
      id: 1,
      price: 'UF 24.500',
      title: 'Loft Panorámico Vista al Mar, Sector Sur Iquique',
      description: 'Espectacular loft con vista despejada al océano Pacífico. Terminaciones de lujo, cocina integrada equipada con electrodomésticos de alta gama, y terraza perimetral. El edificio cuenta con piscina infinity, gimnasio y seguridad 24/7.',
      beds: 3,
      baths: 4,
      parking: 2,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      features: ['Vista al mar', 'Piscina Infinity', 'Gimnasio', 'Seguridad 24/7', 'Cocina equipada'],
    },
    {
      id: 2,
      price: 'UF 32.000',
      title: 'Villa Contemporánea, Península de Cavancha',
      description: 'Exclusiva propiedad de diseño arquitectónico moderno. Amplios espacios iluminados naturalmente, jardín privado, y acabados en mármol y maderas nobles. Ubicada en el sector más exclusivo y seguro de la ciudad.',
      beds: 5,
      baths: 5,
      parking: 4,
      image: 'https://images.unsplash.com/photo-1600607687931-cece5ce21448?q=80&w=2070&auto=format&fit=crop',
      features: ['Jardín privado', 'Acabados en mármol', 'Sector exclusivo', 'Estacionamiento techado', 'Sala de cine'],
    },
    {
      id: 3,
      price: 'UF 18.200',
      title: 'Penthouse Exclusivo, Centro Financiero',
      description: 'Diseñado para ejecutivos de alto nivel. Este penthouse ofrece comodidad, privacidad y una ubicación estratégica inmejorable. Cuenta con domótica integrada y acceso directo por ascensor privado.',
      beds: 2,
      baths: 2,
      parking: 1,
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2012&auto=format&fit=crop',
      features: ['Domótica', 'Ascensor privado', 'Cercano a comercio', 'Aire acondicionado', 'Terraza panorámica'],
    }
  ];

  // Buscamos la propiedad que coincida con el ID de la URL
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-primary mb-4">Propiedad no encontrada</h2>
          <Link to="/propiedades" className="text-secondary font-bold hover:underline">Volver al catálogo</Link>
        </div>
      </div>
    );
  }

  // Mensaje predeterminado para WhatsApp con el nombre de la propiedad
  const whatsappMessage = `Hola Elizabeth, me interesa obtener más información sobre la propiedad: ${property.title} (${property.price}).`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navegación */}
<nav className="w-full bg-white border-b border-gray-200 py-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo alineado */}
          <Link 
            to="/" 
            className="flex items-center gap-3 cursor-pointer"
          >
            <img 
              src={logoReal} 
              alt="Logo Miranda Propiedades" 
              className="h-14 w-auto object-contain" 
            />
            <span className="font-serif font-bold text-primary text-lg tracking-tight uppercase hidden sm:block">
              Miranda Propiedades
            </span>
          </Link>

          {/* Botón de acción alineado */}
<div>
            <a 
                href="https://wa.me/56989950568?text=Hola%20Elizabeth,%20me%20gustaría%20agendar%20una%20cita." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2.5 rounded font-medium hover:bg-secondary-dark transition-all duration-300 shadow-md cursor-pointer inline-block"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow pb-24">
        {/* Imagen Principal */}
        <div className="w-full h-[50vh] md:h-[65vh] relative bg-primary">
          <img src={property.image} alt={property.title} className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12">
            
            {/* Columna Detalles */}
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <MapPin size={18} className="text-secondary" />
                <span className="text-sm font-medium tracking-wide uppercase">Iquique, Región de Tarapacá</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">{property.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-100 mb-8">
                <div className="flex items-center gap-2 text-primary">
                  <Bed className="text-secondary" size={24} /> <span className="font-bold">{property.beds} Habitaciones</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Bath className="text-secondary" size={24} /> <span className="font-bold">{property.baths} Baños</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Car className="text-secondary" size={24} /> <span className="font-bold">{property.parking} Estacionamientos</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-4 font-serif">Descripción</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">{property.description}</p>

              <h3 className="text-xl font-bold text-primary mb-4 font-serif">Características Destacadas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={18} className="text-secondary" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Precio y Contacto (Panel Lateral) */}
            <div className="md:w-1/3">
              <div className="bg-surface p-8 border border-gray-200 sticky top-24">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-bold">Valor de la Propiedad</p>
                <h2 className="text-4xl font-serif text-secondary mb-8">{property.price}</h2>
                
                <a
                  href={`https://wa.me/56989950568?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-secondary px-6 py-4 font-bold uppercase tracking-widest hover:bg-primary-light transition-all shadow-md hover:-translate-y-1 mb-4"
                >
                  <MessageCircle size={20} />
                  Solicitar Información
                </a>
                <p className="text-xs text-center text-gray-500 font-light mt-4">
                  Un broker inmobiliario le responderá a la brevedad posible.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;