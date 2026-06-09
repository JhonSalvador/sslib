import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: 'Método não permitido.',
      }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Preencha todos os campos obrigatórios.',
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Mensagem recebida com segurança.',
      }),
    };
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Formato inválido.',
      }),
    };
  }
};