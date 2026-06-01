import { MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-primary rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Columna de Información */}
          <div className="p-10 md:p-16 text-white md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
              ¿Lista para rentabilizar tu propiedad?
            </h2>
            <p className="text-white/80 font-light mb-10 text-lg">
              Garantizamos aumentar tus reservas de Airbnb y proteger tu propiedad. Contáctanos hoy para una asesoría personalizada.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-light uppercase tracking-wider">WhatsApp 24/7</p>
                  <p className="font-medium text-lg tracking-wide">+56 9 8995 0568</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-light uppercase tracking-wider">Correo Electrónico</p>
                  <p className="font-medium text-lg tracking-wide">travelingpropiedades@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 font-light uppercase tracking-wider">Ubicación</p>
                  <p className="font-medium text-lg tracking-wide">Iquique, Región de Tarapacá</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Acción (Botón Gigante) */}
          <div className="md:w-1/2 bg-secondary flex items-center justify-center p-10 relative overflow-hidden">
             {/* Textura de fondo sutil (opcional) */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
             
             <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-8 font-serif">
                  Agenda una cita rápidamente
                </h3>
                {/* Enlace directo a WhatsApp de Elizabeth */}
                <a
                  href="https://wa.me/56989950568?text=Hola%20Elizabeth,%20vengo%20desde%20tu%20sitio%20web%20y%20me%20gustaría%20agendar%20una%20cita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <MessageCircle size={22} />
                  Enviar Mensaje
                </a>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;