import con from "./conection.js";

export async function criarConta(novoLogin) {
    const comando = `INSERT INTO login(nome,senha)
    VALUES (?, MD5(?))`

    const [info] = await con.query(comando, [
     novoLogin.nome,
     novoLogin.senha
    ]);

    return info.insertId;
}