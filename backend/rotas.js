import livroCrotroller from './src/controller/livroController.js'
import loginController from './src/controller/loginController.js'

export default function adicionarRotas(servidor) {
    servidor.use(livroCrotroller);
    servidor.use(loginController);

}