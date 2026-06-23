export const users = [
  { id: 1, name: "Alice", role: "Développeuse" },
  { id: 2, name: "Bob", role: "Designer" }
];

export const products = [
  { id: 101, name: "Ordinateur", price: 999 },
  { id: 102, name: "Souris", price: 49 }
];
// Exemple d'appel à ajouter dans ton index.html
fetch('/api/brands')
  .then(res => res.json())
  .then(brands => {
    console.log("Marques reçues :", brands);
    // Ici, tu peux créer des éléments HTML pour les afficher dans ta page
  })
  .catch(error => console.error("Erreur marques :", error));