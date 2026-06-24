
import { products } from '../data/mockData.js';

export default function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  return response.status(200).json(products);
}