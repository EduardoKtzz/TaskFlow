// server/api/tarefas.get.ts
// Rota: GET /api/tarefas
// Roda APENAS no servidor — nunca no browser

export default defineEventHandler(async (event) => {

  // Aqui você conectaria ao banco:
  // const tarefas = await db.query('SELECT * FROM tarefas')

  // Retorna JSON automaticamente
  return [
    { id: 1, texto: 'Tarefa do servidor', feita: false },
    { id: 2, texto: 'Outra tarefa',       feita: true  },
  ]
})

// Consumir no frontend (em qualquer .vue):
// const { data } = await useFetch('/api/tarefas')
//
// Com loading e erro:
// const { data, pending, error }