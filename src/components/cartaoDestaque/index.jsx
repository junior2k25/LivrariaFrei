import './index.scss'
 
export default function CartaoDestaque({imagem, titulo, descricao, imagemDireita}) {
        return(
            <div className="cartaodestaque">
                <div className={`imagem ${imagemDireita ? "direita" :""}`}>
                    <img src={imagem} />
                </div>

                <div className="info">
                    <h1>{titulo}</h1>
                    <p>{descricao}</p>
                    

                </div>
            </div>

        )
}