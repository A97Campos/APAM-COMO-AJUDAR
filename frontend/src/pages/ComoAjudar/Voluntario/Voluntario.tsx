import 'index.scss';
import './_voluntario.scss';

function Voluntario() {
  return (
    <div className="corFundo">
      <section className="container voluntario">
        <article className="voluntario__container">
          <h2 className="voluntario__container__titulo">Seja um voluntário</h2>
          <p className="voluntario__container__text">
            O serviço voluntário é uma benção para a APAM! Cuidar dos animais,
            doar tempo e amor não é para qualquer pessoa.
          </p>
          <p className="voluntario__container__text">
            Claro, esse trabalho não é para qualquer um. Aceitar esse
            compromisso é para quem se permite transbordar de bons sentimentos,
            de intensa alegria.
          </p>
          <p className="voluntario__container__text">
            Aqui na APAM a alma fica em paz e a energia é sempre recarregada!
          </p>
          <button className="btn voluntario--btn">Candidatar-se</button>
        </article>
        <figure>
          <p className="voluntario--text">Apam</p>
          <img
            className="voluntario--imagem"
            src="../public/images/comoAjudar/voluntários-Photoroom 1.png"
            alt="A imagem mostra os funcionarios da APAM"
          />
        </figure>
      </section>
    </div>
  );
}

export default Voluntario;
