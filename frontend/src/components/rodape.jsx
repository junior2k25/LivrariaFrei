import './rodape.scss'
export default function Rodape() {
    return(
        <><div className="rodape">
        <div className="coluna">
          <img src="/agenda.jpg" height="80" alt="Logo" />
          <h4>Contato</h4>
          <p>(11) 91690-5383</p>
          <p>livraria@frei.com.br</p>
        </div>

        <div className="coluna">
          <h4>Desenvolvido por</h4>
          <p>sergio ramalho macedo junior</p>
          <p>PROF: pedro</p>
        </div>

        <div className="coluna">
          <h4>Turma</h4>
          <p>INFO-a</p>
        </div>
      </div><div className="rodape-final">
          <p>2025 © Instituto Nossa Senhora de Fátima</p>
        </div></>
    )
}