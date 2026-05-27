import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Car, MapPin, CheckCircle, MessageCircle } from 'lucide-react';
import Footer from '../components/layout/Footer';
import logoReal from '../images/Logo/Logo-MirandaPropiedades.png';
import Venta1 from '../images/Inmobiliario/Venta1.webp';

const PropertyDetail = () => {
  const { id } = useParams();

  const properties = [
    {
      id: 1,
      price: 'CLP 130.000.000',
      title: 'Edificio Amunategui. Calle Zegers 910, Iquique.',
      description: 'Espectacular departamento amoblado. con cocina integrada equipada con electrodomésticos, cuenta con bodega, terraza con hermosas vistas. El edificio cuenta con gimnasio, ascensor y seguridad 24/7.',
      beds: 3,
      baths: 2,
      parking: 0,
      image: 'https://instagram.fscl9-2.fna.fbcdn.net/v/t51.82787-15/623300357_18097456193488687_6772982885351477760_n.webp?_nc_cat=108&ig_cache_key=Mjk4OTc5MDE4Mjk0MjMzMzMyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuNzIwLnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=AcczQqYmY9AQ7kNvwGh-5ip&_nc_oc=Adp5QcFhspILzs82734oicaNOTDxhJgG1iFn4jErpA8VUPdoMCsIfP0NXC_dx6LeiuHfLsu12UP_FK83wgj-Yccc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fscl9-2.fna&_nc_gid=BiMOr5gOEwhTdLTTTBEovg&_nc_ss=7a22e&oh=00_Af4HmEP8nKPrdHmr3E7rODr7dIX2bVU9IFLaB-7k_klrwQ&oe=6A1C449B',
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
      image: 'https://instagram.fscl9-1.fna.fbcdn.net/v/t51.82787-15/642501452_17945213204978849_5138936922216918289_n.webp?_nc_cat=101&ig_cache_key=MzA4NzE1NTY0NTkyNTQxODAyMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuNzIwLnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=nooKOL-uX94Q7kNvwEU_Hjk&_nc_oc=AdqeRDU_QBu6-bh2BWsvCXsJ1C44yIqQnp48711uKYbOsO-oYlVVbZYN0s4_AEGTvtbnaWvluync_KVozareZG3D&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fscl9-1.fna&_nc_gid=BiMOr5gOEwhTdLTTTBEovg&_nc_ss=7a22e&oh=00_Af5a7eZlkXHL-ThBR18XUJ50_SpKxaa6kx84pFf2mUArsg&oe=6A1C5042',
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
      image: 'https://instagram.fscl9-1.fna.fbcdn.net/v/t51.82787-15/651021431_17999156297738752_3667345412600662185_n.webp?_nc_cat=109&ig_cache_key=MzA4NzE3NjY1ODI2NDMyNTQ2Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuNzc4LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=K7HMNMMWvAIQ7kNvwG-nq1-&_nc_oc=AdqxqFcdEB7-BRltN45HD8Wgq0STQBVI19Ja591BduMft-NQfpQqwOOcmgDQPHfloL8gonKVljCXo30vO0LMd_po&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fscl9-1.fna&_nc_gid=BiMOr5gOEwhTdLTTTBEovg&_nc_ss=7a22e&oh=00_Af4wC9KGyb1f38lZRItGF7Nsk0xXL0VN22Io6HivUpLghg&oe=6A1C40CA',
      features: ['Piscina', 'Terraza Amplia', 'Cercano a comercios', 'Estacionamiento', 'Bodega', 'Espectacular Vista a la Costa'],
    },
        {
      id: 4,
      price: 'CLP 200.000.000',
      title: 'Casa en Venta. Pasaje Playa el Saladero con avenida Padre Hurtado, Iquique',
      description: 'Amplia y espectacular casa de 2 pisos, ideal para familias numerosas. Cuenta con 6 confortables dormitorios, 2 baños, living, comedor, cocina tradicional y una práctica bodega. En su exterior, ofrece un acogedor antejardín, un pequeño patio interior y capacidad para 2 estacionamientos. Propiedad de único dueño y sin deudas (ampliación no regularizada).',
      beds: 6,
      baths: 2,
      parking: 2,
      image: Venta1,
      features: ['6 Dormitorios', 'Estacionamientos', 'Antejardin', 'Patio Interior', 'Bodega', 'Unico Dueño', '🚫 Ampliación no regularizada'],
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
                Miranda Propiedades
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