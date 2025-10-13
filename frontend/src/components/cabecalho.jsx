import { Link } from "react-router";
import './cabecalho.scss'

export default function Cabecalho() {
    return(
        <div className="cabecalho">
        <img src='/agenda.jpg' height={110} />
        <h1>Livraria Frei</h1>
        <div className="links">
            <Link to='/'>inicio</Link>
            <Link to='/sobre'>sobre</Link>
        </div>
    </div>
    )
}