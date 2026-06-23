import { brands } from '../data/mockData.js';

export default function handler(request, response) {
  // On autorise tout le monde à interroger notre API (CORS)
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET');
  
  // On renvoie les marques au format JSON avec un statut 200 (Succès)
  return response.status(200).json(brands);
}