import usuarioController from './src/controller/usuarioController.js'
import livroController from './src/controller/livroController.js'

export default function adicionarRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(livroController);
}