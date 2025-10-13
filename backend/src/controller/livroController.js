import * as repo from '../repository/livroRepo.js';
import { generateToken } from '../utils/jwt.js'

import { Router } from "express";
const endpoints = Router();


endpoints.post('/autor/titulo', async (req, resp) => {
  let livro = req.body;

  let id = await repo.procuraLivro(livro);
  resp.send({ novoId: id });
})


endpoints.post('/autor', async (req, resp) => {
  let autor = req.body.autor;
  let titulo = req.body.titulo;

  let credenciais = await repo.consultarCredenciais(email, senha);

  if (!credenciais) {
    resp.status(401).send({
      erro: 'Credenciais inválidas.'
    });
  }
  else {
    resp.send({
      token: generateToken(credenciais)
    });
  }
})


export default endpoints;