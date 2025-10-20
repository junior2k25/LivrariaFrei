import Cabecalho from '../components/cabecalho'
import CartaoDestaque from '../components/cartaoDestaque'
import Rodape from '../components/rodape'
import './inicio.scss'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../api";


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
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [livros, setLivros] = useState([])

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO")

        // Se o usuário não estiver logado
        if (nomeUsuario == undefined || nomeUsuario == null) {
            navigate('/login')
        } else {
            setUsuario(nomeUsuario)
        }
    }, [])

    function sair() {
        localStorage.removeItem("USUARIO");
        localStorage.removeItem("TOKEN");

        navigate('/login')
    }

    async function listarLivros() {
        const reponse = await api.get('/livros')
        setLivros(reponse.data)
    } 




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
            
                 {livros.map(livro => <div>
                    <img height={150} src={livro.capa_url} />
                    <h1>{livro.titulo}</h1>
                    <h2>{livro.autor}</h2>
                </div>)}

            </main>
            <Rodape />
            <button onClick={sair}>Sair</button>
                <button onClick={listarLivros}>Listar</button>
             </div>
    )
}