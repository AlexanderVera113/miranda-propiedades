import { useState } from 'react';
import { Bed, Bath, Car, ArrowLeft, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import logoReal from '../images/Logo/Logo-MirandaPropiedades.png';
import Vendido1 from '../images/Inmobiliario/Vendido1.png';
import Vendido2 from '../images/Inmobiliario/Vendido2.png';
import Vendido3 from '../images/Inmobiliario/Vendido3.png';
import Venta1 from '../images/Inmobiliario/Venta1.webp';
import HotelCorona from '../images/Inmobiliario/HotelCorona.png';
import CasaLaSerena from '../images/Inmobiliario/Casa_La_Serena1.jpeg'

const Properties = () => {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  const properties = [
    { id: 6, price: 'CLP 230.000.000', title: '2 Casas en Venta en el mismo terreno, Villa La Arboleda, La Serena', beds: 6, baths: 4, parking: 2, tipo: 'Venta', image: CasaLaSerena, featured: true },
    { id: 5, price: 'CLP 13.000.000', title: 'Residencia Corporativa para Empresas Mineras y Contratistas, Bernardo OHiggins 944, Iquique.', beds: 20, baths: 22, parking: 10, tipo: 'Arriendo', image: HotelCorona, featured: true },
    { id: 4, price: 'CLP 200.000.000', title: 'Casa en Venta, Pasaje Playa el Saladero con avenida Padre Hurtado, Iquique', beds: 6, baths: 2, parking: 2, tipo: 'Venta', image: Venta1, featured: true },
    { id: 2, price: 'CLP 87.000.000', title: 'Edificio Matiz Cavancha. Calle 18 de Septiembre, 1961, Iquique.', beds: 1, baths: 1, parking: 1, tipo: 'Vendido', image: Vendido2, featured: false },
    { id: 3, price: 'CLP 150.000.000', title: 'Condominio Portal Los Heroes, Avenida Heroes De La Concepcion 2784 Torre B, Iquique.', beds: 3, baths: 2, parking: 1, tipo: 'Vendido', image: Vendido3, featured: false },
    { id: 1, price: 'CLP 130.000.000', title: 'Edificio Amunategui. Calle Zegers 910, Iquique.', beds: 3, baths: 2, parking: 0, tipo: 'Vendido', image: Vendido1, featured: false }
  ];

  const propiedadesFiltradas = properties.filter(prop => {
    if (filtroActivo === 'Todos') return true;
    return prop.tipo === filtroActivo;
  });

  const opcionesFiltro = ['Todos', 'Venta', 'Arriendo', 'Vendido'];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      
      {/* Navegación corregida para el build */}
      <nav className="w-full bg-white border-b border-gray-200 py-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-1 text-primary hover:text-secondary transition-colors">
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

      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">Catálogo de Propiedades</h1>
              <p className="text-gray-600 font-light max-w-xl text-lg">
                Explore nuestra cartera completa. Encuentre el lugar perfecto para su próximo hogar o inversión.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 border border-gray-200 shadow-sm mb-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter size={20} className="text-gray-400 mr-2 hidden sm:block" />
              <div className="flex bg-gray-100 p-1 rounded-sm w-full sm:w-auto">
                {opcionesFiltro.map(opcion => (
                  <button
                    key={opcion}
                    onClick={() => setFiltroActivo(opcion)}
                    className={`flex-1 sm:flex-none px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all rounded-sm ${
                      filtroActivo === opcion 
                        ? 'bg-primary text-secondary shadow-md' 
                        : 'text-gray-500 hover:text-primary'
                    }`}
                  >
                    {opcion}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative w-full sm:w-72">
              <input 
                type="text" 
                placeholder="Buscar por sector..." 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-sm text-sm focus:ring-2 focus:ring-secondary/50 outline-none"
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propiedadesFiltradas.map((prop) => (
              <Link to={`/propiedad/${prop.id}`} key={prop.id} className="block group">
                <div className="bg-white border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300 h-full flex flex-col relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 tracking-widest uppercase shadow-sm">{prop.tipo}</span>
                  </div>
                  {prop.featured && (
                    <span className="absolute top-4 right-4 z-10 bg-secondary text-primary text-xs font-bold px-3 py-1 tracking-widest uppercase shadow-sm">Destacado</span>
                  )}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-3xl font-serif text-secondary mb-3">{prop.price}</h3>
                    <p className="text-primary font-medium text-lg leading-tight mb-6 flex-grow">{prop.title}</p>
                    <div className="w-full h-px bg-gray-100 mb-6"></div>
                    <div className="flex items-center justify-between text-gray-500">
                      <div className="flex flex-col items-center gap-1"><Bed size={20} className="text-secondary" /><span className="text-xs font-bold uppercase tracking-wider">{prop.beds} Hab</span></div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div className="flex flex-col items-center gap-1"><Bath size={20} className="text-secondary" /><span className="text-xs font-bold uppercase tracking-wider">{prop.baths} Baños</span></div>
                      <div className="w-px h-8 bg-gray-200"></div>
                      <div className="flex flex-col items-center gap-1"><Car size={20} className="text-secondary" /><span className="text-xs font-bold uppercase tracking-wider">{prop.parking} Estac.</span></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Properties;