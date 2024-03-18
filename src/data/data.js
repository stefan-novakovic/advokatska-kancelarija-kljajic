import krivicnoImg from "../assets/images/krivicno-pravo.png";
import gradjanskoImg from "../assets/images/gradjansko-pravo.png";
import radnoImg from "../assets/images/radno-pravo.png";
import upravnoImg from "../assets/images/upravno-pravo.png";
import privrednoImg from "../assets/images/privredno-pravo.png";
import porodicnoImg from "../assets/images/porodicno-pravo.png";
import arborspaletImg from "../assets/images/arborspalet-logo.png";
import skalarImg from "../assets/images/skalar-logo.png";
import poljoprivredniImg from "../assets/images/poljoprivredni-logo.png";
import agrocampusImg from "../assets/images/agrocampus-logo.png";
import zovetImg from "../assets/images/zovet-logo.png";

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

export const aboutUsTextShortVersion =
  "Advokatska kancelarija Kljajić osnovana je 2012. godine. Sa punom pažnjom pristupa svim problemima klijenata, uz posebnu zaštitu njihovih interesa, strogo čuvanje advokatske tajne i poštovanje odnosa advokat-klijent. Cilj advokatske kancelarije je pružanje kvalitetnih advokatskih usluga svim potencijalnim klijentima uz najveću meru poštovanja njihovih ličnosti i uz objektivno sagledavanje svih njihovih pravnih problema, sa nastojanjem da svoje probleme reše na najefikasniji i najbolji mogući način.";

export const AOWArray = [
  { id: "radno-pravo", img: radnoImg, caption: "Radno pravo" },
  { id: "gradjansko-pravo", img: gradjanskoImg, caption: "Građansko pravo" },
  { id: "upravno-pravo", img: upravnoImg, caption: "Upravno pravo" },
  { id: "krivicno-pravo", img: krivicnoImg, caption: "Krivično pravo" },
  { id: "privredno-pravo", img: privrednoImg, caption: "Privredno pravo" },
];

export const clientsImgArray = [
  arborspaletImg,
  skalarImg,
  poljoprivredniImg,
  agrocampusImg,
  zovetImg,
];

export const usefulLinksArray = [
  { title: "OSNOVNI SUD U NOVOM SADU", url: "https://www.ns.os.sud.rs/" },
  { title: "VIŠI SUD U NOVOM SADU", url: "https://www.ns.vi.sud.rs/" },
  { title: "APELACIONI SUD U NOVOM SADU", url: "https://www.ns.ap.sud.rs/" },
  { title: "PRIVREDNI SUD U NOVOM SADU", url: "https://www.ns.pr.sud.rs/" },
  { title: "VRHOVNI KASACIONI SUD", url: "https://www.vrh.sud.rs/" },
  { title: "USTAVNI SUD REPUBLIKE SRBIJE", url: "https://www.ustavni.sud.rs/" },
  {
    title: "NARODNA SKUPŠTINA REPUBLIKE SRBIJE",
    url: "http://www.parlament.gov.rs/",
  },
  { title: "VLADA REPUBLIKE SRBIJE", url: "https://www.srbija.gov.rs/" },
  { title: "MINISTARSTVO PRAVDE", url: "https://www.mpravde.gov.rs/" },
  {
    title: "MINISTARSTVO UNUTRAŠNJIH POSLOVA",
    url: "http://www.mup.gov.rs/",
  },
  { title: "NARODNA BANKA SRBIJE", url: "https://www.nbs.rs/" },
  {
    title: "AGENCIJA ZA PRIVREDNE REGISTRE",
    url: "https://www.apr.gov.rs/",
  },
  {
    title: "KATASTAR NEPOKRETNOSTI",
    url: "https://katastar.rgz.gov.rs/",
  },
  { title: "ADVOKATSKA KOMORA VOJVODINE", url: "https://akv.org.rs/" },
  {
    title: "ADVOKATSKA KOMORA SRBIJE",
    url: "https://www.advokatska-komora.co.rs/",
  },
  { title: "EVROPSKI SUD ZA LJUDSKA PRAVA", url: "https://www.echr.coe.int/" },
  { title: "MEĐUNARODNI SUD PRAVDE", url: "https://www.icj-cij.org/" },
  { title: "MEĐUNARODNI KRIVIČNI SUD", url: "https://www.icc-cpi.int/" },
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
