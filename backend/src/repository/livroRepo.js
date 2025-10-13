import con from "./conection.js";

export async function procuraLivro() {
    const comando = `SELECT * FROM livro`;

    const [registros] = await con.query(comando);
    return registros;
}