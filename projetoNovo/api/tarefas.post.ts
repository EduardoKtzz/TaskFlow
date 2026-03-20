// server/api/tarefas.post.ts
// Rota: POST /api/tarefas

export default defineEventHandler(async (event) => {

  // readBody = lê o JSON do corpo da requisição
  const body = await readBody(event)

  // Validação — lança erro HTTP 400 se inválido
  if (!body.texto) {
    throw createError({
      statusCode: 400,
      message: 'Campo texto é obrigatório'
    })
  }

  // Aqui salvaria no banco:
  // const nova = await db.insert('tarefas').values(body)

  return {
    id:       Date.now(),
    texto:    body.texto,
    feita:    false,
    criadaEm: new Date().toISOString(),
  }
})

// Consumir no frontend:
// await $fetch('/api/tarefas', {
//   method: 'POST',
//   body: { texto: 'Nova tarefa' }
// })