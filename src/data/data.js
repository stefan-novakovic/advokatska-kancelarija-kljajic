import krivicnoImg from "../assets/images/krivicno-pravo.png";
import gradjanskoImg from "../assets/images/gradjansko-pravo.png";
import radnoImg from "../assets/images/radno-pravo.png";
import upravnoImg from "../assets/images/upravno-pravo.png";
import privrednoImg from "../assets/images/privredno-pravo.png";
import porodicnoImg from "../assets/images/porodicno-pravo.png";

export const lawsDataArray = [
  {
    id: "gradjansko-pravo",
    title: "Građansko pravo",
    body: "Naknada štete, razvod braka, dečije izdržavanje i izdržavanje između supružnika, ostavinski postupci, izrada i overe ugovora, međunarodna overa ugovora, zaštita autorskih i srodnih prava, prinudno izvršenje, promet nekretnina.",
    img: gradjanskoImg,
  },
  {
    id: "privredno-pravo",
    title: "Privredno pravo",
    body: "Konsultanstske usluge, osnivanje privrednih društava, zabrana konkurencije, carinski propisi, carinski prekršaji, međunarodna špedicija, naplata potraživanja, likvidacija, stečaj.",
    img: privrednoImg,
  },
  {
    id: "radno-pravo",
    title: "Radno pravo",
    body: "Sporovi povodom naknada štete zbog neisplaćene zarade, naknade štete prilikom povrede na radu, zaštite prava radnika, mobing, izrada svih akata u skladu sa Zakonom o radu.",
    img: radnoImg,
  },
  {
    id: "krivicno-pravo",
    title: "Krivično pravo",
    body: "Odbrana okrivljenih lica i zastupanje prava oštećenih, odbrana maloletnih učinilaca krivičnih dela.",
    img: krivicnoImg,
  },
  {
    id: "upravno-pravo",
    title: "Upravno pravo",
    body: "Legalizacija objekata, upis prava svojine na objektima – uknjižba, zastupanje u poreskim i drugim upravnim postupcima, podnošenje prijava Zavodu za intelektualnu svojinu, restitucija.",
    img: upravnoImg,
  },
  {
    id: "porodicno-pravo",
    title: "Porodično pravo",
    body: "Razvod braka, dečije izdržavanje, vršenje roditeljskog prava, nasilje u porodici.",
    img: porodicnoImg,
  },
];

export const clientNamesArray = [
  "Poljoprivredni fakultet, Novi Sad",
  "Istraživačko-obrazovni centar u poljoprivredi ,,Agro Campus”, Temerin",
  "Vranić farm DOO, Kać",
  "Adrijana DOO, Novi Sad",
  "Veterinarska stanica Zrenjanin DOO, Zrenjanin",
  "Veterinarska stanica ZOVET DOO, Obrva (Kraljevo)",
  "Downtown Media Systems DOO, Zrenjanin",
  "Arborspalet 2010 DOO, Bačka Palanka",
  "Excentar DOO, Novi Sad",
  "Stilles DOO, Novi Sad",
  `Ing. „B-SD Gradnja‟ DOO, Novi Sad`,
  "Suins DOO, međunarodna špedicija i transport, Novi Sad",
  "OZZ ,,Begečki povrtari”, Begeč",
  "STR ,,Skalar”, Novi Sad",
];
