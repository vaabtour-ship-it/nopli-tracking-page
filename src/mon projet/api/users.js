// api/users.js
import { users } from '../data/mockData.js';

export default function handler(request, response) {
  // Permet à n'importe quel site de requêter cette API (CORS)
  response.setHeader('Access-Control-Allow-Origin', '*');
  // Réponse HTTP 200 (Succès) avec les données au format JSON
  return response.status(200).json(users);
}