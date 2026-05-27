import logoReal from '../../images/Logo/Logo-MirandaPropiedades.png'; // Ajusta esta ruta si es diferente

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          {/* Marca comercial */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              {/* Aquí reemplazamos el div con MP por tu imagen */}
              <img 
                src={logoReal} 
                alt="Miranda Propiedades" 
                className="h-12 w-auto object-contain" 
              />
              <span className="font-serif font-bold text-white text-lg tracking-tight uppercase">
                Propiedades Traveling
              </span>
            </div>
            <p className="text-white/60 font-light max-w-xs text-sm leading-relaxed mt-2">
              Broker inmobiliario y corredor de propiedades, administración en portal Airbnb y coordinación de mantenimiento y servicios check-in/ check-out en arriendos vacacionales Airbnb.
            </p>
          </div>

          {/* Navegación rápida */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-2">
              Enlaces Rápidos
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#inicio" className="text-white/60 hover:text-secondary transition-colors text-sm">Inicio</a>
              <a href="#servicios" className="text-white/60 hover:text-secondary transition-colors text-sm">Servicios</a>
              <a href="#nosotros" className="text-white/60 hover:text-secondary transition-colors text-sm">Sobre Mí</a>
            </div>
          </div>

          {/* Legal / Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-2">
              Información Legal
            </h4>
            <div className="flex flex-col gap-3">
              <p className="text-white/60 text-sm cursor-pointer hover:text-white transition-colors">Políticas de Privacidad</p>
              <p className="text-white/60 text-sm cursor-pointer hover:text-white transition-colors">Términos y Condiciones</p>
            </div>
          </div>

        </div>

        {/* Barra de Copyright */}
        <div className="border-t border-white/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/40 text-xs tracking-wider uppercase">
            © {new Date().getFullYear()} Propiedades Traveling. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;