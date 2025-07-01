


import { Button } from '@/components/ui/button';
const CallToActionSection = () => {
  return <section className="px-4 py-20 md:px-6 lg:px-8 bg-gradient-to-r from-[#FF4438] to-[#FDBD50]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Empieza tu primera colaboración hoy</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Únete a miles de restaurantes y creadores gastronómicos que ya están formando alianzas increíbles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-[#FF4438] hover:bg-white/10 hover:text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold">
            QUIERO COLABORAR COMO FOODIE
          </Button>
          <Button variant="outline" className="border-white text-[#FF4438] bg-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold">
            SOY UN RESTAURANTE, QUIERO RECIBIR CREADORES
          </Button>
        </div>
      </div>
    </section>;
};
export default CallToActionSection;


