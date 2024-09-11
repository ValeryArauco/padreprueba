import axios from 'axios';

const analyzeRepository = async (repositoryUrl: string) => {
  try {
    // Codacy API URL para analizar un repositorio
    const codacyApiUrl = 'https://api.codacy.com/2.0/analysis';

    // Configura tu API Token de Codacy
    const codacyApiToken = 'your_codacy_api_token_here';

    // Payload para enviar a la API
    const payload = {
      repositoryUrl,
      tool: 'complexity', // Especificar que queremos analizar la complejidad ciclomática
    };

    // Configuración de la solicitud, incluyendo el token de autenticación
    const config = {
      headers: {
        'Authorization': `Bearer ${codacyApiToken}`,
        'Content-Type': 'application/json'
      }
    };

    // Realiza la solicitud POST a la API de Codacy
    const response = await axios.post(codacyApiUrl, payload, config);

    // Manejo de la respuesta
    if (response.status === 200) {
      console.log('Análisis exitoso:', response.data);
    } else {
      console.error('Error al realizar el análisis:', response.statusText);
    }
  } catch (error) {
    console.error('Error al analizar el repositorio:', error.message);
  }
};

// Ejemplo de uso
const repositoryUrl = 'https://github.com/usuario/repositorio';
analyzeRepository(repositoryUrl);
