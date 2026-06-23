export default function handler(req, res) {
  // On autorise le site à lire l'API (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const bonneGueuleData = {
    id: "recuf8OlUa68Yflkt",
    created_at: "2025-06-04 13:19",
    updated_at: "2026-04-27 09:52",
    name: "Bonnegueule",
    code: "BO",
    siren: "840 528 624",
    company: "BG GROUPE",
    type: "SAS",
    capital: "796 640 €",
    status: "ACTIVE",
    tva: "FR55988599247",
    country: "France",
    currency: "EUR",
    official_site: "https://bonnegueule.fr/",
    second_hand_site: "https://secondemain.bonnegueule.fr/",
    shopify: "psyq6z-tq.myshopify.com",
    shop_name: "Bonnegueule Seconde Main",
    lang_default: "Français",
    langs: "fr",
    title_font: "Arial",
    text_font: "Arial",
    title_format: "MAJUSCULES",
    color_light: "#ffffff",
    color_dark: "#000000",
    invoices: "Oui",
    gift_card_event: "ORDER_CONFIRMED",
    gift_card_bonus: "110 %",
    payout_commission: "15 € TTC",
    gift_card_commission: "18 € TTC",
    photo_orientation: "PORTRAIT",
    buyer_review_url: "https://f6ztyemwvbu.typeform.com/to/V6Pz3FJ0",
    seller_review_url: "https://f6ztyemwvbu.typeform.com/to/aVDp8Jig",
    rules: "• Si le produit est Femme, ajouter dans le titre et dans le Genre.\n\n• Supprimer les photos horizontales.\n\n• Appliquer la grille de prix :\nhttps://docs.google.com/spreadsheets/d/1scYgEFcy8jMXtaqNgH39TU48T_lSPnns\n\n• Catalogue :\nhttps://docs.google.com/spreadsheets/d/1OgiRm_JlQtLyrkXf5rIk6krpaVGfnqed\n\n• La première photo doit être une photo à plat.",
    wallet_id: "wallet_01JZQ8H76T5C8DEM96GBY4WT6W",
    address_id: "address_01KJWMZZC5XPMTAXPMQCKWJ3BK",
    logo_url: "https://tbuzxjeicktekxddacna.supabase.co/storage/v1/object/public/brands-media//BO%20Logo.png",
    banner_url: "https://tbuzxjeicktekxddacna.supabase.co/storage/v1/object/public/brands-media//IMG_Logo.jpg"
  };

  res.status(200).json(bonneGueuleData);
}