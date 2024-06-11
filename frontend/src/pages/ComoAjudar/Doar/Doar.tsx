import './_doar.scss';

function Doar() {
  return (
    <div className="fundo">
      <section className="container doar">
        <article>
          <h2 className="doar__titulo">Saiba como doar</h2>
          <p className="doar__text">
            Você pode doar diretamente na nossa{' '}
            <strong className="doar__text--cor">conta</strong>, pelo Banco do
            Brasil, ou através de cartão de crédito, via{' '}
            <strong className="doar__text--cor">PagSeguro</strong>. Além disso,
            temos opções de valores para quem quer se tornar um{' '}
            <strong className="doar__text--cor">padrinho</strong> ou{' '}
            <strong className="doar__text--cor">madrinha</strong> (doações
            mensais a partir de{' '}
            <strong className="doar__text--cor">R$ 10,00</strong>).
          </p>
          <figure className="doar__pets">
            <img
              className="doar__pets--img doar1"
              src="/public/images/comoAjudar/doar1.png"
              alt=""
            />
            <img
              className="doar__pets--img doar2"
              src="/public/images/comoAjudar/doar2.png"
              alt=""
            />
            <img
              className="doar__pets--img doar3"
              src="/public/images/comoAjudar/doar3.png"
              alt=""
            />
            <img
              className="doar__pets--img doar4"
              src="/public/images/comoAjudar/doar4.png"
              alt=""
            />
          </figure>
        </article>
        <article>
          <h2 className="doar__titulo">Transferência bancária</h2>
          <div className="doar__bbContainer">
            <figure className="doar__bbContainer--fundo">
              <img src="/public/images/comoAjudar/logoBb.png" alt="" />
            </figure>
            <address className="info">
              <p className="info__bbText">Banco do Brasil</p>
              <p>Banco: 001</p>
              <p>Agência: 1216-5</p>
              <p>Conta: 85.884-6</p>
              <p className="info__pix">
                Pix | CNPJ: 01.819.063/0001-37
                <img src="/public/images/comoAjudar/copy.png" alt="" />
              </p>
            </address>
          </div>
          <h3 className="doar__tituloPag">Cartão de Crédito - PagSeguro</h3>
          <div className="doar__pagContainer">
            <a className="doar__pagContainer__link" href="">
              <figure className="pigMoney">
                <img src="/public/images/comoAjudar/pigMoney.png" alt="" />
              </figure>
              <p>R$ 10</p>
            </a>
            <a className="doar__pagContainer__link" href="">
              <figure className="pigMoney">
                <img src="/public/images/comoAjudar/pigMoney.png" alt="" />
              </figure>
              <p>R$ 25</p>
            </a>
            <a className="doar__pagContainer__link" href="">
              <figure className="pigMoney">
                <img src="/public/images/comoAjudar/pigMoney.png" alt="" />
              </figure>
              <p>R$ 50</p>
            </a>
            <a className="doar__pagContainer__link" href="">
              <figure className="pigMoney">
                <img src="/public/images/comoAjudar/pigMoney.png" alt="" />
              </figure>
              <p>R$ 100</p>
            </a>
            <a className="doar__pagContainer__link" href="">
              <figure className="pigMoney">
                <img src="/public/images/comoAjudar/pigMoney.png" alt="" />
              </figure>
              <p>Doação única</p>
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Doar;
