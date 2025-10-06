import Cabecalho from '../components/cabecalho'
import CartaoDestaque from '../components/cartaoDestaque'
import Rodape from '../components/rodape'
import './inicio.scss'

const cartaoes =[
    {
        "imagem": "https://miro.medium.com/v2/resize:fit:1400/0*qKksSvflsm_XHdI7.jpg",
        "titulo": "Livraria do naruto",
        "descricao":"A livraria que traz o melhor da literatura para você!",
        "imagemdireita": false
    },{
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQMaOnMOPx_QsVt2CbjXBf8sFnFJvoZAzTQ&s",
        "titulo": "livro de receitas",
        "descricao": "Descubra sabores incríveis com nosso livro de receitas exclusivo!",
        "imagemdireita": true
    }
    
]



export default function Inicio() {
    return(
        <div className="container-inicio">
        <Cabecalho />
        <hr />
        <main>
            <p>seja bem-vindo à nossa livraria! Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o amor pelos livros e criar um espaço acolhedor para todos os amantes da literatura. Conheça nossa equipe dedicada e fique por dentro dos eventos emocionantes que promovemos. Venha explorar um mundo de histórias e conhecimento!</p>
            
            {
                cartaoes.map(c =>
                    <CartaoDestaque
                     imagem={c.imagem}
                     titulo={c.titulo}
                     descricao={c.descricao}
                     imagemDireita={c.imagemdireita}
                    />
                    
                )
            }
           
            </main>
            <Rodape />
             </div>
    )
}