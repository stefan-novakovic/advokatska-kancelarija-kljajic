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
import goran from "../assets/images/goran.png";
import milana from "../assets/images/milana.png";
import vuksa from "../assets/images/vuksa.png";

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

const aboutUs_p1 = (
  <p key="p1">
    Čovekova sloboda je da svojom voljom reguliše pravne i poslovne odnose,
    zaključuje ugovore, ima sposobnost i veštinu da dogovara ili pregovara.
    Svakako, neophodno je imati dobru osnovu i podlogu, koja je od pamtiveka
    utkana u mnoge zakone naše zemlje.
  </p>
);
const aboutUs_p2 = (
  <p key="p2">
    Ako niste sigurni u to koja su Vaša prava a šta su Vaše obaveze, kolike su
    Vam mogućnosti i dometi, na koji način ćete za sebe lično ili svoj posao
    stvoriti najbolju pravnu zaštinu, šah-mat poslovni potez koji možete
    napraviti je da uvek imate odličnog advokata, zastupnika i savetnika, čiji
    je posao isključivo Vaš interes.
  </p>
);
const aboutUs_p3 = (
  <p key="p3">
    Mi smo upravo takva kancelarija i cilj nam je da gradimo profesionalan i
    lojalan odnos sa svojim klijentima.
  </p>
);
const aboutUs_p4 = (
  <p key="p4">
    Advokatska kancelarija Kljajić osnovana je 2012. godine. Sa punom pažnjom
    pristupa svim problemima klijenata, uz posebnu zaštitu njihovih interesa,
    strogo čuvanje advokatske tajne i poštovanje odnosa advokat-klijent.
  </p>
);
const aboutUs_p5 = (
  <p key="p5">
    Cilj advokatske kancelarije je pružanje kvalitetnih advokatskih usluga svim
    potencijalnim klijentima uz najveću meru poštovanja njihovih ličnosti i uz
    objektivno sagledavanje svih njihovih pravnih problema , sa nastojanjem da
    svoje probleme reše na najefikasniji i najbolji mogući način.
  </p>
);
const aboutUs_motto_heading = <h3 key="motto">Moto našeg tima je:</h3>;

const aboutUs_motto_p1 = (
  <p key="motto-p1">
    Opšti je princip pravičnosti da se niko ne obogati čineći drugom štetu i
    nepravdu.
  </p>
);

const aboutUs_motto_p2 = (
  <p key="motto-p2">
    Iure naturae aequum est neminem cum alterius detrimento et iniuria fieri
    locupletiorem. (Pomponius – D. 51, 17, 206)
  </p>
);

export const aboutUsTextArray = [
  aboutUs_p1,
  aboutUs_p2,
  aboutUs_p3,
  aboutUs_p4,
  aboutUs_p5,
];

export const aboutUsMottoTextArray = [
  aboutUs_motto_heading,
  aboutUs_motto_p1,
  aboutUs_motto_p2,
];

export const aboutUsStaffArray = [
  {
    id: "goran-kljajic",
    fullName: "Goran Kljajić",
    image: goran,
    role: "advokat",
    email: "info@advokatkljajic.com",
    phone: "069/166-98-92",
    bio: "Advokat Goran Kljajić rođen je u Zrenjaninu 1984. godine. Osnovnu školu “Dositej Obradović” u Zrenjaninu završio je 1999. godine, a potom i srednju ekonomsku školu “Jovan Trajković” 2003. godine. Pravni fakultet u Novom Sadu upisao je 2003. godine i diplomirao na opštem smeru 2008. godine. Nakon završenog Pravnog fakulteta, 2009. godine započeo je pripravničku vežbu u advokatskoj kancelariji novosadskog advokata Zorana Koprivice, u kojoj je radio do 2012. godine, u početku kao advokatski pripravnik, a potom i jedno vreme kao advokat – saradnik. Pravosudni ispit položio je 2011. godine sa vrlo dobrim uspehom, a nakon rada u svojstvu advokata – saradnika u kancelariji advokata Koprivice, osniva samostalnu advokatsku kancelariju 2012. godine i započinje samostalno bavljenje advokaturom. Godine 2016. na konkursu koji je raspisan od strane Republičke Agencije za mirno rešavanje radnih sporova u Beogradu, izabran je za aribtra/miritelja pri Agenciji za mirno rešavanje radnih sporova, i tim poslovima se bavio do septembra 2020. godine kada mu je istekao mandat. Tokom rada na poslovima arbitra, uspešno je arbitrirao u preko 200 arbitražnih postupaka, između ostalog u arbitraži JKP Put iz Novog Sada, Studentski centar Novi Sad i predškolska ustanova Radost iz Novih Banovaca, kojom prilikom je radio na poslovima pomirenja između zaposlenih i njihovih poslodavaca, a u vezi sa problemima oko isplate regresa, toplog obroka, putnih troškova i jubilarnih nagrada. Za vreme mandata arbitra i miritelja učestvovao je na brojnim seminarima i konferencijama, uključujući i godišnju konferenciju Federalne službe za mirenje iz Vašingtona (SAD) održane u julu 2018. godine u Aranđelovcu, usled čega se kod njega javila želja za dodatnim usavršavanjem i sticanjem iskustva iz oblasti radnih odnosa iz perspektive advokata. Poseduje brojne sertifikate između ostalog i sertifikat za odbranu maloletnih učinilaca krivičnih dela i zastupanje maloletnih lica oštećenih krivičnim delima, kao i sertifikat iz oblasti prava zaštite životne sredine. Bavi se zastupanjem brojnih fizičkih i pravnih lica iz svih oblasti prava, posebno iz domena građanskog prava (imovinski sporovi, sporovi u vezi sa nepokretnostima, svojinski odnosi), radnog prava (zastupanje u sporovima poništaja rešenja,izgubljene zarade, diskriminacije na radu – mobinga, naknade štete usled povreda na radu) kao i odbranom u krivičnim postupcima (odbrana okrivljenih i zastupanje oštećenih). Osim toga bavi se bankarskim pravom kao i obligacionim pravom i izradom svih vrsta obligacionih ugovora. Oblast interesovanja su mu radno pravo i građansko (imovinsko) pravo. Živi u Novom Sadu, oženjen je i otac je dvoje dece. Govori engleski jezik, a hobi mu je stoni tenis, koji aktivno igra sa prijateljima i trenutno se takmiči u trećoj gradskoj rekreativnoj ligi.",
  },
  {
    id: "milana-forkapa",
    fullName: "Milana Forkapa",
    image: milana,
    role: "advokatski pripravnik",
    email: "milana.forkapa@advokatkljajic.com",
    phone: "063/803-90-13",
    bio: "Milana Forkapa je rođena u Novom Sadu 1994. godine. Završila je ekonomsku školu “Svetozar Miletić” u Novom Sadu, smer turistički tehničar, kao odličan učenik. Praktičnu nastavu je obavljala u hotelu “Park “, kao i u turističkoj agenciji “Grand tours”, kojom prilikom je stekla dragoceno iskustvo u radu sa ljudima raznih profila, što će se kasnije pokazati kao prednost u radu u advokatskoj kancelariji. Nakon završene srednje škole, upisuje Pravni fakultet, Univerziteta u Novom Sadu, opšti smer koji takođe završava sa veoma dobrim uspehom. Kako potiče iz porodice gde su i otac i majka diplomirani pravnici, logičan izbor obrazovanja upravo pada na Pravni fakultet, na kojem već na samom početku studija, pokazuje veliko interesovanje za oblast porodičnog i naslednog prava. Pored navedenog, oblast interesovanja joj je i krivično pravo kao i kriminologija, za koje pokazuje visok stepen pravne logike i želju za usavršavanjem i sticanjem nepohodnih znanja i iskustava. Advokatskoj kancelariji Kljajić pristupa u julu 2020. godine, a zvanično se upisuje u Advokatsku komoru Vojvodine kao advokatski pripravnik u septembru 2020. godine. U advokatskoj kancelariji bavi se poslovima zastupanja iz oblasti porodičnih odnosa (razvod braka, dečija izdržavanja, vršenje roditeljskog prava, nasilje u porodici), bavi se bankarskim pravom, opštom parnicom (sporovi iz oblasti građanskog prava), poslovima zastupanja iz oblasti naknade štete kao i pisanjem tužbi iz oblasti bankarskog prava, porodičnih odnosa i naknade štete. Osim toga, bavi se obligacionim pravom i izradom svih vrsta obligacionih ugovora. Govori engleski jezik, a služi se španskim i ruskim jezikom. Hobi joj je fotografisanje i kreativni poslovi. Omiljena destinacija joj je Kuba, a želja joj je da živi u Španiji.",
  },
  {
    id: "vuksa-jerkovic",
    fullName: "Vukša Jerković",
    image: vuksa,
    role: "advokatski pripravnik",
    email: "vuksa.jerkovic@advokatkljajic.com",
    phone: "065/562-34-51",
    bio: "Vukša Jerković rodjen je 1985. godine u Zrenjaninu. Završio je zrenjaninsku “Gimnaziju” 2004. godine, nakon čega je upisao Filozofski fakultet Univerziteta u Novom Sadu, smer Srpska književnost i jezik, na kojem je diplomirao 2009. godine sa prosečnom ocenom 8,95. Nakon završenih studija, zaposlio se kao nastavnik srpskog jezika u osnovnoj školi ,,Žarko Zrenjanin” u mestu Boka, opština Sečanj. Radeći kao nastavnik, kod njega se javila želja za novim dokazivanjem, i sticanjem novih znanja, te kako je oduvek voleo pravo i pravnu nauku, 2012. godine upisuje Pravni fakultet Univerziteta u Novom Sadu, opšti smer, na kojem je uz rad u školi, diplomirao 2020. godine sa prosečnom ocenom 8,00. Shvativši da je pravo ipak njegov poziv i da je želja za sticanjem znanja i iskustva u pravnoj nauci prevagnula u odnosu na profesorsko zanimanje, donosi odluku da se u daljem profesionalnom usavršavanju bavi ovom dosta komplikovanom oblašću. Još tokom studija, pokazivao je interesovanje za oblast građanskog i privrednog prava. Advokatskoj kancelariji Kljajić pristupa u julu 2020. godine, a zvanično se upisuje u Advokatsku komoru Vojvodine kao advokatski pripravnik u septembru 2020. godine. U advokatskoj kancelariji bavi se poslovima zastupanja iz oblasti građanskog prava (rešavanje imovinskopravnih odnosa, svojinski odnosi, sporovi u vezi sa nepokretnostima), bavi se bankarskim pravom, opštom parnicom, poslovima zastupanja iz oblasti naknade štete kao i pisanjem tužbi iz oblasti bankarskog prava, privrednog prava i stvarnog prava. Osim toga, bavi se obligacionim pravom i izradom svih vrsta obligacionih ugovora. Govori engleski jezik, a služi se ruskim i latinskim, hobi mu je planinarenje.",
  },
];
