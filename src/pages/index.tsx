import Image from 'next/image';
import Navbar2 from './Navbar';
import Estimer_mes_revenus_locatifs from './Bouton';

export default function Home() {
  return (
    <div>
      <Navbar2 />
      <section className="relative flex items-center justify-center">
        <Image
          src="/images/Accueil.webp"
          width={800}
          height={600}
          layout="responsive"
          alt="Image représentant un salon"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
          <p className="text-white p-4 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
            NOTRE CONCIERGERIE,<br />
            <span className="font-bold">VOTRE SOLUTION AIRBNB</span>
          </p>
          <p className="text-white text-center p-4 text-sm sm:text-base md:text-lg lg:text-xl">
            On gère la location de votre logement : de l’annonce au dépôt des clés, jusqu’à votre retour chez vous.
          </p>
          <Estimer_mes_revenus_locatifs className='px-32' />
          <p className='text-white'>
            ( Gratuitement et sans inscription )
          </p>
        </div>
      </section>
    </div>
  );
}
