import Adocao from './Adocao/adocao';
import Doar from './Doar/Doar';
import Hero from './Hero/Hero';
import Voluntario from './Voluntario/Voluntario';

function ComoAjudar() {
  return (
    <main>
      <Hero />
      <Voluntario />
      <Doar />
      <Adocao />
    </main>
  );
}

export default ComoAjudar;
