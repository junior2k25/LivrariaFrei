import Cabecalho from "../components/cabecalho"
import CartaoDestaque from "../components/cartaoDestaque"
import Rodape from "../components/rodape"
import './sobre.scss'

export default function Sobre() {
    return(
        <div className="container-incio">
        <Cabecalho />
        <hr />
        <main>
        <p>Bem-vindo à nossa tela de sobre! Aqui você encontrará informações sobre a nossa livraria, nossa missão de promover a leitura e o amor pelos livros, além de detalhes sobre nossa equipe apaixonada e os eventos que realizamos. Explore e descubra tudo o que temos a oferecer!</p>

        <CartaoDestaque
                imagem="https://miro.medium.com/v2/resize:fit:1400/0*qKksSvflsm_XHdI7.jpg"
                titulo="Livraria do naruto"
                descricao="A livraria que traz o melhor da literatura para você!"
                imagemDireita={false}
            />
<br />
            <CartaoDestaque
                imagem="https://uploads.metroimg.com/wp-content/uploads/2017/01/03200908/SITE-SADIA.jpg"
                titulo="livro de receitas"
                descricao="Descubra sabores incríveis com nosso livro de receitas exclusivo!"
                imagemDireita={true}
            />
        </main>

        <Rodape/>
        </div>
    )
}