import { Menu } from 'lucide-react';
import { Link } from 'react-scroll';
import logoReal from '../../images/Logo/Logo-MirandaPropiedades.png'; // Asegúrate de que el nombre coincida

const Navbar = () => {
  const navItems = ['Inicio', 'Servicios', 'Nosotros', 'Contacto'];

  return (
    <nav className="fixed w-full z-50 top-0 bg-surface/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link 
            to="inicio" 
            smooth={true} 
            duration={500} 
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* Logo insertado aquí manteniendo el layout original */}
            <img 
              src={logoReal} 
              alt="Logo" 
              className="h-20 w-auto object-contain" 
            />
            <span className="font-serif font-bold text-primary text-lg tracking-tight uppercase hidden sm:block">
              Miranda Propiedades
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item} 
                to={item.toLowerCase()} 
                smooth={true} 
                duration={500}
                offset={-80}
                className="text-primary hover:text-secondary-dark font-medium transition-colors text-sm uppercase tracking-wider cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Botón Call to Action */}
          <div className="hidden md:flex">
            <Link 
                to="contacto" 
                smooth={true} 
                duration={800}
                className="bg-primary text-white px-6 py-2.5 rounded font-medium hover:bg-secondary-dark transition-all duration-300 shadow-md cursor-pointer"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Icono Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button className="text-primary hover:text-secondary-dark transition-colors">
              <Menu size={55} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;