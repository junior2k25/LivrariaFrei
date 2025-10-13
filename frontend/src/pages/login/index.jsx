 import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
 
 export default function Login() {
    return (
        <div>
            <Cabecalho/>
            <div className="login">
            <h1>Usuario</h1>
            <input type="text" placeholder="aluno..."/>
            <h1>Senha</h1>
            <input type="senha" placeholder="*******"/>
            
            <button>Entrar</button>
            </div>

            <Rodape/>
        </div>
   
)
    }