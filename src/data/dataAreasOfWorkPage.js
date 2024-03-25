import krivicnoImg from "../assets/images/krivicno-pravo.png";
import gradjanskoImg from "../assets/images/gradjansko-pravo.png";
import radnoImg from "../assets/images/radno-pravo.png";
import upravnoImg from "../assets/images/upravno-pravo.png";
import privrednoImg from "../assets/images/privredno-pravo.png";
import porodicnoImg from "../assets/images/porodicno-pravo.png";

export const AreasOfWorkPageData = {
  SRB: {
    pageTitle: "Oblasti rada",
    aopArray: [
      {
        id: "gradjansko-pravo",
        title: "Građansko pravo",
        desc: "Naknada štete, razvod braka, dečije izdržavanje i izdržavanje između supružnika, ostavinski postupci, izrada i overe ugovora, međunarodna overa ugovora, zaštita autorskih i srodnih prava, prinudno izvršenje, promet nekretnina.",
        img: gradjanskoImg,
      },
      {
        id: "privredno-pravo",
        title: "Privredno pravo",
        desc: "Konsultanstske usluge, osnivanje privrednih društava, zabrana konkurencije, carinski propisi, carinski prekršaji, međunarodna špedicija, naplata potraživanja, likvidacija, stečaj.",
        img: privrednoImg,
      },
      {
        id: "radno-pravo",
        title: "Radno pravo",
        desc: "Sporovi povodom naknada štete zbog neisplaćene zarade, naknade štete prilikom povrede na radu, zaštite prava radnika, mobing, izrada svih akata u skladu sa Zakonom o radu.",
        img: radnoImg,
      },
      {
        id: "krivicno-pravo",
        title: "Krivično pravo",
        desc: "Odbrana okrivljenih lica i zastupanje prava oštećenih, odbrana maloletnih učinilaca krivičnih dela.",
        img: krivicnoImg,
      },
      {
        id: "upravno-pravo",
        title: "Upravno pravo",
        desc: "Legalizacija objekata, upis prava svojine na objektima – uknjižba, zastupanje u poreskim i drugim upravnim postupcima, podnošenje prijava Zavodu za intelektualnu svojinu, restitucija.",
        img: upravnoImg,
      },
      {
        id: "porodicno-pravo",
        title: "Porodično pravo",
        desc: "Razvod braka, dečije izdržavanje, vršenje roditeljskog prava, nasilje u porodici.",
        img: porodicnoImg,
      },
    ],
  },
  ENG: {
    pageTitle: "Areas of practice",
    aopArray: [
      {
        id: "gradjansko-pravo",
        title: "Civil rights",
        desc: "Compensation for damages, divorce, child support and spousal support, probate proceedings, drafting and certification of contracts, international certification of contracts, protection of copyright and related rights, forced execution, real estate transactions.",
        img: gradjanskoImg,
      },
      {
        id: "privredno-pravo",
        title: "Commercial law",
        desc: "Consulting services, establishment of business companies, prohibition of competition, customs regulations, customs violations, international forwarding, debt collection, liquidation, bankruptcy.",
        img: privrednoImg,
      },
      {
        id: "radno-pravo",
        title: "Labour law",
        desc: "Disputes regarding compensation for unpaid wages, compensation for injuries at work, protection of workers' rights, mobbing, drafting of all acts in accordance with the Labour Law.",
        img: radnoImg,
      },
      {
        id: "krivicno-pravo",
        title: "Criminal law",
        desc: "Defense of accused clients and representation of the rights of injured parties, defense of juvenile offenders.",
        img: krivicnoImg,
      },
      {
        id: "upravno-pravo",
        title: "Administrative law",
        desc: "Legalization of the facilities, registration of property rights on facilities, representation in tax and other administrative procedures, submission of applications to the Intellectual Property Office, restitution.",
        img: upravnoImg,
      },
      {
        id: "porodicno-pravo",
        title: "Family law",
        desc: "Divorce, child support, exercise of parental rights, domestic violence.",
        img: porodicnoImg,
      },
    ],
  },
};
