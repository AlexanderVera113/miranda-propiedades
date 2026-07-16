import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Car, CheckCircle, MessageCircle, HomeIcon } from 'lucide-react';
import Footer from '../components/layout/Footer';
import logoReal from '../images/Logo/Logo-MirandaPropiedades.png';
import Venta1 from '../images/Inmobiliario/Venta1.webp';
import Arriendo1 from '../images/Inmobiliario/Arriendo1.webp';
import CasaLaSerena from '../images/Inmobiliario/Casa_La_Serena1.webp'
import CondominioTadeoHaenke from '../images/Inmobiliario/CondominioTadeoHaenke2.webp'
import CostaAzul from '../images/Inmobiliario/CostaAzul22.webp'
import PuertoVallarta from '../images/Inmobiliario/PuertoVallarta2.webp'
import EdificioAmunategui from '../images/Inmobiliario/EdificioAmunategui.webp'
import Vendido1 from '../images/Inmobiliario/Vendido1.webp'
import Vendido2 from '../images/Inmobiliario/Vendido2.webp'
import Vendido3 from '../images/Inmobiliario/Vendido3.webp'
import MatizCavancha from '../images/Inmobiliario/matizcavancha.webp'

const PropertyDetail = () => {
  const { id } = useParams();

  const properties = [
    {
      id: 1,
      price: 'CLP 130.000.000',
      title: 'Edificio Amunategui, Calle Zegers 910, Iquique.',
      description: 'Espectacular departamento amoblado. con cocina integrada equipada con electrodomésticos, cuenta con bodega, terraza con hermosas vistas. El edificio cuenta con gimnasio, ascensor y seguridad 24/7.',
      beds: 3,
      baths: 2,
      parking: 0,
      image: Vendido1,
      features: ['Amoblado', 'Gimnasio', 'Seguridad 24/7', 'Cocina equipada'],
    },
    {
      id: 2,
      price: 'CLP 87.000.000',
      title: 'Edificio Matiz Cavancha. Calle 18 de Septiembre, 1961, Iquique.',
      description: 'Espectacular departamento amoblado. con cocina integrada equipada con electrodomésticos, cuenta con bodega y estacionamiento, terraza con hermosas vistas. El edificio cuenta con gimnasio, piscina, ascensor y seguridad 24/7.',
      beds: 1,
      baths: 1,
      parking: 1,
      image: Vendido2,
      features: ['Amoblado', 'Estacionamiento', 'Piscina', 'Bodega', 'Gimnasio'],
    },
    {
      id: 3,
      price: 'CLP 150.000.000',
      title: 'Condominio Portal Los Heroes, Avenida Heroes De La Concepcion 2784 Torre B, Iquique.',
      description: 'Espectacular departamento ubicado en zona costera cerca de Casino, Mall y Supermercados. Cuenta con bodega y estacionamiento, terraza amplia con hermosas vistas. El edificio cuenta con gimnasio, piscina, ascensor y seguridad 24/7.',
      beds: 3,
      baths: 2,
      parking: 1,
      image: Vendido3,
      features: ['Piscina', 'Terraza Amplia', 'Cercano a comercios', 'Estacionamiento', 'Bodega', 'Espectacular Vista a la Costa'],
    },
        {
      id: 4,
      price: 'CLP 250.000.000',
      title: 'Casa en Venta. Pasaje Playa el Saladero con avenida Padre Hurtado, Iquique.',
      description: 'Amplia y espectacular casa de 2 pisos, ideal para familias numerosas. Cuenta con 6 confortables dormitorios, 2 baños, living, comedor, cocina tradicional y una práctica bodega. En su exterior, ofrece un acogedor antejardín, un pequeño patio interior y capacidad para 2 estacionamientos. Propiedad de único dueño y sin deudas (ampliación no regularizada).',
      beds: 6,
      baths: 2,
      parking: 2,
      image: Venta1,
      features: ['6 Dormitorios', 'Estacionamientos', 'Antejardin', 'Patio Interior', 'Bodega', 'Unico Dueño', '🚫 Ampliación no regularizada'],
    },
            {
      id: 5,
      price: 'CLP 12.000.000',
      title: 'Residencia Comercial en Arriendo para Empresas Mineras y Contratistas, Bernardo OHiggins 944, Iquique.',
      description: 'Residencia comercial en arriendo completamente operativa e implementada para el alojamiento de personal, ideal para empresas mineras, contratistas y prestadores de servicios. Ubicada en Bernardo OHiggins 944, Iquique, ofrece una solución habitacional lista para funcionar con capacidad para 44 trabajadores distribuidos en 20 habitaciones con baño privado, TV de 32", WiFi y agua caliente. Destaca por sus completos servicios orientados al bienestar del equipo, incluyendo desayuno, personal de limpieza, comedor habilitado con TV de 55", cocina equipada, gimnasio y sala de eventos. Además, garantiza seguridad con recepción 24/7, cámaras de vigilancia, 7 estacionamientos y señalética laboral. El valor de arriendo es de $12.000.000 mensuales (conversable), exclusivo para empresas con opción a contrato de largo plazo (se entrega factura). Requisitos: 1 mes de garantía y 50% de comisión de corretaje.',
      beds: 20,
      baths: 22,
      parking: 7,
      image: Arriendo1,
      features: ['20 Habitaciones con baño privado', '7 Estacionamientos Con Vigilancia', 'Disponible para contrato de largo plazo', 'Se entrega factura', 'Requisitos: Arriendo comercial para empresas.'],
    },
                {
      id: 6,
      price: 'CLP 250.000.000',
      title: '2 Casas en Venta en el mismo terreno, Ulmo 1939, La Arboleda, La Serena',
      description: '¡Una excelente inversión en una ubicación privilegiada! Se vende propiedad esquina que cuenta con dos casas en un mismo terreno, ubicada en el consolidado sector de Barrio Universitario (Calle Ulmo 1939, Villa La Arboleda, La Serena). Por su amplitud y conectividad, es ideal para uso habitacional, arriendos, empresas, oficinas o consultas profesionales. La Casa A (construcción original) cuenta con 3 dormitorios, 2 baños, living, comedor, cocina, lavandería, bodega, patio y 2 estacionamientos interiores. La Casa B (ampliación no regularizada de distribución similar) ofrece 3 dormitorios, 2 baños, living, comedor, cocina y patio. La propiedad destaca porque se entrega completamente amoblada, es de único dueño, sin deudas y con su documentación al día.',
      beds: 6,
      baths: 4,
      parking: 2,
      image: CasaLaSerena,
      features: ['2 Casas en el mismo terreno', 'Estacionamiento interior con espacio para 2 Vehiculos.', 'Sector Tranquilo, Barrio Universitario', 'Casa Esquina', 'Cercano a Comercios, Bencineras, Colegios/Universidades.', '🚫 Ampliacion no Regularizada.'],
    },
                    {
      id: 7,
      price: 'UF 4.500',
      secondaryprice: 'CLP 183.642,480',
      title: 'Condominio Tadeo Haenke, Av. Tadeo Haenke 2221, Iquique',
      description: 'Excelente oportunidad de inversión o para vivir en el corazón de Iquique. Este cómodo departamento de 77 m² se encuentra en el Condominio Tadeo Haenke (Av. Tadeo Haenke 2221). Cuenta con 3 dormitorios, 2 baños, living-comedor, cocina, un agradable balcón, bodega y estacionamiento. El edificio ofrece excelentes amenidades para sus residentes, incluyendo conserjería, gimnasio y sala de eventos. Todo esto ubicado en una zona de alta plusvalía, con acceso directo a supermercados, bancos, restaurantes, locomoción y todos los servicios necesarios.',
      beds: 3,
      baths: 2,
      parking: 1,
      image: CondominioTadeoHaenke,
      features: ['Conserjeria', 'Sala de Eventos', 'Balcón', 'Bodega', 'Estacionamiento', 'Gimnasio'],
    },
                        {
      id: 8,
      price: 'UF 5.100',
      secondaryprice: 'CLP 208.128.144',
      title: 'Edificio Costa Azul 2, Arturo Fernández 2098, Iquique',
      description: 'Excelente oportunidad de inversión o para vivir en el cotizado sector turístico de Iquique. Este amplio departamento de 100 m² se encuentra en el Edificio Costa Azul 2 (Calle Arturo Fernández 2098). Cuenta con 4 cómodos dormitorios, 2 baños, espacioso living-comedor, cocina, un agradable balcón, además de incluir bodega y estacionamiento. El edificio ofrece completas amenidades para sus residentes: conserjería 24/7, gimnasio, sala de eventos, quinchos y lavandería. Su ubicación es inmejorable, a pasos de Playa Cavancha, el Mall, supermercados y todos los servicios, lo que lo convierte en una opción ideal tanto para residencia familiar como para inversión con alto potencial para Airbnb.',
      beds: 4,
      baths: 2,
      parking: 1,
      image: CostaAzul,
      features: ['Conserjeria', 'Sala de Eventos', 'Balcón', 'Bodega', 'Estacionamiento', 'Gimnasio'],
    },
                            {
      id: 9,
      price: 'UF 2.490',
      secondaryprice: 'CLP 101.615.506',
      thirdprice: '+ 2% Comisión de Venta',
      title: 'Edificio Puerto Vallarta, Arturo Fernández 2011, Iquique',
      description: 'Excelente oportunidad de inversión o para vivir en el cotizado sector turístico de Iquique. Este acogedor y funcional departamento de 39 m² se encuentra ubicado en el Edificio Puerto Vallarta (Arturo Fernández 2011). Cuenta con 1 dormitorio, 1 baño, living-comedor y un agradable balcón, además de incluir bodega y estacionamiento. El edificio brinda seguridad y comodidad con conserjería 24/7, sala de eventos y quinchos. Destaca por su inmejorable ubicación a pasos de Playa Cavancha, el Mall, supermercados, bancos, restaurantes y locomoción. Es una opción ideal tanto para quienes buscan una vivienda cómoda como para inversionistas que buscan alta rentabilidad a través de plataformas como Airbnb.',
      beds: 1,
      baths: 1,
      parking: 1,
      image: PuertoVallarta,
      features: ['Sector Turistico', 'Sala de Eventos', 'Balcón', 'Bodega', 'Estacionamiento', 'Conserjeria 24/7'],
    },
        {
      id: 10,
      price: 'UF 2.500',
      secondaryprice: 'CLP 102.024.000',
      thirdprice: '+ 2% Comisión de Venta',
      title: 'Edificio Amunategui, Calle Zegers 910, Iquique.',
      description: 'Excelente oportunidad de inversión o para vivir en el corazón de Iquique. Este funcional departamento de 47 m² se encuentra ubicado en el Edificio Amunátegui (Zegers 910, pleno centro). Su distribución contempla 1 dormitorio, 1 baño, living-comedor, cocina y un cómodo balcón. El edificio ofrece espacios pensados para el bienestar y la seguridad de sus residentes, incluyendo conserjería 24/7, gimnasio y sala de eventos. Destaca por su excelente conectividad y ubicación, muy cercano al Colegio Corona School, supermercados, bancos, restaurantes, comercio y locomoción. Es una alternativa ideal tanto para quienes buscan una vivienda cómoda como para inversionistas.',
      beds: 1,
      baths: 1,
      parking: 0,
      image: EdificioAmunategui,
      features: ['Balcón', 'Gimnasio', 'Conserjeria 24/7', 'Cocina equipada', 'Gimnasio', 'Sala de Eventos'],
    },
        {
      id: 11,
      price: 'UF 2.800',
      secondaryprice: 'CLP 114.268.000',
      thirdprice: '+ 2% Comisión de Venta',
      title: 'Edificio Matiz Cavancha. Calle 18 de Septiembre, 1961, Iquique.',
      description: 'Excelente oportunidad de inversión o para vivir en el cotizado sector turístico de Iquique. Este funcional departamento de 37 m² se ubica en el Edificio Matiz Cavancha (Calle 18 de Septiembre 1961). Su distribución contempla 1 dormitorio, 1 baño, living-comedor, cocina y un cómodo balcón, además de incluir estacionamiento subterráneo y bodega. El edificio ofrece completas instalaciones para sus residentes, como conserjería 24/7, gimnasio, sala de eventos y quinchos. Su ubicación es inmejorable, a pasos de Playa Cavancha, el Mall, supermercados, bancos, restaurantes y todo tipo de comercio. Es una opción perfecta para quienes buscan una vivienda cómoda o una propiedad con gran potencial de rentabilidad vía Airbnb.',
      beds: 1,
      baths: 1,
      parking: 1,
      image: MatizCavancha,
      features: ['Quincho', 'Estacionamiento', 'Piscina', 'Bodega', 'Gimnasio'],
    }
  ];

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

  const whatsappMessage = `Hola Elizabeth, me interesa obtener más información sobre la propiedad: ${property.title} (${property.price}).`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      
      {/* Navegación corregida */}
      <nav className="w-full bg-white border-b border-gray-200 py-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            <Link to="/propiedades" className="flex items-center gap-1 text-primary hover:text-secondary transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm font-medium hidden sm:block">Volver</span>
            </Link>
            
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <img src={logoReal} alt="Logo Miranda Propiedades" className="h-14 w-auto object-contain" />
              <span className="font-serif font-bold text-primary text-lg tracking-tight uppercase hidden sm:block">
                Propiedades Traveling
              </span>
            </Link>
          </div>

          <div>
            <a 
                href={`https://wa.me/56989950568?text=${encodeURIComponent(whatsappMessage)}`}
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
        <div className="w-full h-[50vh] md:h-[65vh] relative bg-primary">
          <img src={property.image} alt={property.title} className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12">
            
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 text-gray-500 mb-4">
                <HomeIcon size={18} className="text-secondary" />
                <span className="text-sm font-medium tracking-wide uppercase">Propiedades Traveling</span>
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

            <div className="md:w-1/3">
              <div className="bg-surface p-8 border border-gray-200 sticky top-24">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-bold">Valor de la Propiedad</p>
                <h2 className="text-4xl font-serif text-secondary mb-4">{property.price}</h2>
                <h2 className="text-2xl font-serif text-secondary mb-4">{property.secondaryprice}</h2>
                <h2 className="text-2xl font-serif text-secondary mb-4">{property.thirdprice}</h2>
                
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