function status(request, response) {
  response.status(200).json({ chave: "alunos do curso.dev é" });
}

export default status;
