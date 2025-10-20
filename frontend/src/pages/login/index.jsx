 import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router";
 
 export default function Login() {
    const [Usuario, setUsuario] = useState("");
    const [Senha, setSenha] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO")

        if(nomeUsuario != undefined || nomeUsuario != null){
            navigate ("/")
        }
    }, [])

    async function entrar(){
        try{
            const body ={
                "usuario": Usuario,
                "senha": Senha
            }
            const response = await api.post("/login", body);
            const token = response.data.token;
            const nomeUsuario = response.data.usuario.usuario;

            localStorage.setItem("USUARIO", nomeUsuario);
            localStorage.setItem("TOKEN", token);

            navigate('/');
        }catch(erro){
            alert(erro)
        }
    }

    return (
        <div>
            <Cabecalho/>
            <div className="login">
            <h1>Usuario</h1>
            <input 
            type="text" 
            placeholder="aluno..."
            value={Usuario}
            onChange={(e) => setUsuario(e.target.value)}
            />

            <br />
            <br />
            <br />
            <br />
            <h1>Senha</h1>
            <input type="senha" 
            placeholder="*******"
            value={Senha}
            onChange={(e) => setSenha(e.target.value)}
            />
            
            <button onClick={entrar}>Entrar</button>
            </div>

            <Rodape/>
        </div>
   
)
    }