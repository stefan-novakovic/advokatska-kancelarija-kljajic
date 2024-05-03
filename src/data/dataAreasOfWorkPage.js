import krivicnoImg from "../assets/images/krivicno-pravo.png";
import gradjanskoImg from "../assets/images/gradjansko-pravo.png";
import radnoImg from "../assets/images/radno-pravo.png";
import upravnoImg from "../assets/images/upravno-pravo.png";
import privrednoImg from "../assets/images/privredno-pravo.png";
import porodicnoImg from "../assets/images/porodicno-pravo.png";
import gradjanskoPlaceholderImg from "../assets/images/placeholders/gradjansko-pravo-placeholder.png";
import privrednoPlaceholderImg from "../assets/images/placeholders/privredno-pravo-placeholder.png";
import radnoPlaceholderImg from "../assets/images/placeholders/radno-pravo-placeholder.png";
import krivicnoPlaceholderImg from "../assets/images/placeholders/krivicno-pravo-placeholder.png";
import upravnoPlaceholderImg from "../assets/images/placeholders/upravno-pravo-placeholder.png";
import porodicnoPlaceholderImg from "../assets/images/placeholders/porodicno-pravo-placeholder.png";

export const AreasOfWorkPageData = {
  SRB: {
    pageTitle: "Oblasti rada",
    aopArray: [
      {
        id: "gradjansko-pravo",
        title: "Građansko pravo",
        desc: "Naknada štete, razvrgnuće imovinske zajednice, sporovi u vezi sa rešavanjem imovinsko—pravnih odnosa, svojinske tužbe, ugovori o prometu nekretnina (kupoprodaja, poklon i sl.), ostavinski postupci, međunarodna overa ugovora, zaštita autorskih i srodnih prava, potrošački sporovi.",
        img: gradjanskoImg,
        placeholderImg: gradjanskoPlaceholderImg,
      },
      {
        id: "privredno-pravo",
        title: "Privredno pravo",
        desc: "Konsultanstske usluge, osnivanje privrednih društava, zabrana konkurencije, carinski propisi, carinski prekršaji, međunarodna špedicija, naplata potraživanja, likvidacija, stečaj.",
        img: privrednoImg,
        placeholderImg: privrednoPlaceholderImg,
      },
      {
        id: "radno-pravo",
        title: "Radno pravo",
        desc: "Sporovi povodom naknada štete zbog neisplaćene zarade, sporovi povodom nezakonitih otkaza ugovora o radu, naknade štete prilikom povrede na radu, zaštite prava radnika, mobing, izrada svih opštih akata u skladu sa Zakonom o radu (pravilnici o radu, akt o sistematizaciji radnih mesta i sl.).",
        img: radnoImg,
        placeholderImg: radnoPlaceholderImg,
      },
      {
        id: "krivicno-pravo",
        title: "Krivično pravo",
        desc: "Odbrana okrivljenih lica i zastupanje prava oštećenih, odbrana maloletnih učinilaca krivičnih dela.",
        img: krivicnoImg,
        placeholderImg: krivicnoPlaceholderImg,
      },
      {
        id: "upravno-pravo",
        title: "Upravno pravo",
        desc: "Legalizacija objekata, upis prava svojine na objektima — uknjižba, zastupanje u poreskim i drugim upravnim postupcima, podnošenje prijava Zavodu za intelektualnu svojinu, restitucija.",
        img: upravnoImg,
        placeholderImg: upravnoPlaceholderImg,
      },
      {
        id: "porodicno-pravo",
        title: "Porodično pravo",
        desc: "Razvod braka, dečije izdržavanje, vršenje roditeljskog prava, nasilje u porodici.",
        img: porodicnoImg,
        placeholderImg: porodicnoPlaceholderImg,
      },
    ],
  },
  ENG: {
    pageTitle: "Practice areas",
    aopArray: [
      {
        id: "gradjansko-pravo",
        title: "Civil rights",
        desc: "Compensation for damages, dissolution of property communities, disputes related to the settlement of property—related legal matters, ownership lawsuits, real estate transactions (buying, selling, gifting, etc.), probate proceedings, international contract notarization, protection of copyright and related rights, consumer disputes.",
        img: gradjanskoImg,
        placeholderImg: gradjanskoPlaceholderImg,
      },
      {
        id: "privredno-pravo",
        title: "Commercial law",
        desc: "Consulting services, establishment of commercial companies, non-compete agreements, customs regulations, customs offenses, international freight forwarding, debt collection, liquidation, bankruptcy.",
        img: privrednoImg,
        placeholderImg: privrednoPlaceholderImg,
      },
      {
        id: "radno-pravo",
        title: "Labor law",
        desc: "Disputes regarding compensation for unpaid wages, disputes regarding unlawful terminations of employment contracts, compensation for workplace injuries, protection of workers' rights, mobbing, drafting of all general acts in accordance with the Labor Law (work regulations, job classification acts, etc.).",
        img: radnoImg,
        placeholderImg: radnoPlaceholderImg,
      },
      {
        id: "krivicno-pravo",
        title: "Criminal law",
        desc: "Defense of accused individuals and representation of the rights of victims, defense of juvenile offenders in criminal cases.",
        img: krivicnoImg,
        placeholderImg: krivicnoPlaceholderImg,
      },
      {
        id: "upravno-pravo",
        title: "Administrative law",
        desc: "Legalization of buildings, registration of property rights on buildings (land registry), representation in tax and other administrative procedures, filing applications with the Intellectual Property Office, restitution.",
        img: upravnoImg,
        placeholderImg: upravnoPlaceholderImg,
      },
      {
        id: "porodicno-pravo",
        title: "Family law",
        desc: "Divorce, child support, exercise of parental rights, domestic violence.",
        img: porodicnoImg,
        placeholderImg: porodicnoPlaceholderImg,
      },
    ],
  },
};
