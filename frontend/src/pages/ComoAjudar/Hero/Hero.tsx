import { SidebarProvider } from '@/hooks/SidebarProvider';
import Header from '../../../../src/components/Header/Header';

import '../_index.scss';
import './_hero.scss';

function Hero() {
  return (
    <SidebarProvider>
      <section className="hero">
        <div className="container">
          <Header />
          <article className="hero__container">
            <h1 className="hero__container__titulo">
              Nós ajudamos animais sem lar a ter uma vida digna
            </h1>
            <p className="hero__container__text">Saiba como ajudar</p>
            <div>
              <a href="#" className="btn btn--voluntario">
                Voluntário
              </a>
              <a href="#" className="btn btn--doacao">
                Doação
              </a>
              <a href="#" className="btn btn--adocao">
                Adoção
              </a>
            </div>
          </article>
        </div>
      </section>
    </SidebarProvider>
  );
}

export default Hero;
