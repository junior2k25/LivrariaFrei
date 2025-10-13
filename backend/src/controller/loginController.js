import * as repo from '../repository/loginRepo.js';

import { Router } from "express";
const endpoints = Router();


endpoints.post('/login', async (req, resp) => {
  const novoLogin = req.body;

 const id = await repo.criarConta(novoLogin);
  resp.send({ novoId: id });
})



export default endpoints;