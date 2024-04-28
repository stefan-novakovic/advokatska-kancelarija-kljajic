import goran from "../assets/images/goran.png";
import vuksa from "../assets/images/vuksa.png";
import milica from "../assets/images/milica.jpg";
import goranPlaceholder from "../assets/images/placeholders/goran-placeholder.png";
import vuksaPlaceholder from "../assets/images/placeholders/vuksa-placeholder.png";
import milicaPlaceholder from "../assets/images/placeholders/milica-placeholder.jpg";
import au1 from "../assets/images/o-nama-1.JPG";
import au2 from "../assets/images/o-nama-2.JPG";
import au3 from "../assets/images/o-nama-3.JPG";
import au4 from "../assets/images/o-nama-4.JPG";
import au5 from "../assets/images/o-nama-5.JPG";
import au6 from "../assets/images/o-nama-6.JPG";
import au1Placeholder from "../assets/images/placeholders/o-nama-1-placeholder.jpg";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";

export const AboutUsPageData = {
  SRB: {
    pageTitle: "O nama",
    pageText:
      "Čovekova sloboda je da svojom voljom reguliše pravne i poslovne odnose, zaključuje ugovore, ima sposobnost i veštinu da dogovara ili pregovara. Svakako, neophodno je imati dobru osnovu i podlogu, koja je od pamtiveka utkana u mnoge zakone naše zemlje.\n\nAko niste sigurni u to koja su Vaša prava a šta su Vaše obaveze, kolike su Vam mogućnosti i dometi, na koji način ćete za sebe lično ili svoj posao stvoriti najbolju pravnu zaštinu, šah—mat poslovni potez koji možete napraviti je da uvek imate odličnog advokata, zastupnika i savetnika, čiji je posao isključivo Vaš interes.\n\nMi smo upravo takva kancelarija i cilj nam je da gradimo profesionalan i lojalan odnos sa svojim klijentima.\n\nAdvokatska kancelarija Kljajić osnovana je 2011. godine. Sa punom pažnjom pristupa svim problemima klijenata, uz posebnu zaštitu njihovih interesa, strogo čuvanje advokatske tajne i poštovanje odnosa advokat—klijent.\n\nCilj advokatske kancelarije je pružanje kvalitetnih advokatskih usluga svim potencijalnim klijentima uz najveću meru poštovanja njihovih ličnosti i uz objektivno sagledavanje svih njihovih pravnih problema, sa nastojanjem da svoje probleme reše na najefikasniji i najbolji mogući način.",
    mottoTitle: "Moto našeg tima je:",
    mottoDesc:
      "Opšti je princip pravičnosti da se niko ne obogati čineći drugom štetu i nepravdu.\n\nIure naturae aequum est neminem cum alterius detrimento et iniuria fieri locupletiorem. (Pomponius — D. 51, 17, 206)",
    aboutUsImageArray: [au1, au2, au3, au4, au5, au6],
    imageCarouselPlaceholder: au1Placeholder,
    staffArray: [
      {
        id: "goran-kljajic",
        fullName: "Goran Kljajić",
        image: goran,
        imagePlaceholder: goranPlaceholder,
        role: "advokat",
        email: "info@advokatkljajic.rs",
        emailIcon: <GoMail />,
        phone: "069/166-98-92",
        phoneLink: "+381691669892",
        phoneIcon: <HiOutlinePhone />,
        bio: "Advokat Goran Kljajić rođen je u Zrenjaninu 1984. godine. Osnovnu školu “Dositej Obradović” u Zrenjaninu završio je 1999. godine, a potom i srednju ekonomsku školu “Jovan Trajković” 2003. godine. Pravni fakultet u Novom Sadu upisao je 2003. godine i diplomirao na opštem smeru 2008. godine.\n\nNakon završenog Pravnog fakulteta, 2009. godine započeo je pripravničku vežbu u advokatskoj kancelariji novosadskog advokata Zorana Koprivice, u kojoj je radio do 2011. godine, u početku kao advokatski pripravnik, a potom i jedno vreme kao advokat—saradnik.\n\nPravosudni ispit položio je 2011. godine sa vrlo dobrim uspehom, a nakon rada u svojstvu advokata—saradnika u kancelariji advokata Koprivice, osniva samostalnu advokatsku kancelariju 2011. godine i započinje samostalno bavljenje advokaturom.\n\nGodine 2016. na konkursu koji je raspisan od strane Republičke Agencije za mirno rešavanje radnih sporova u Beogradu, izabran je za arbitra i miritelja pri Agenciji za mirno rešavanje radnih sporova.\n\nNa poslovima arbitra i miritelja, uspešno je arbitrirao u preko 200 arbitražnih postupaka, između ostalog u arbitraži JKP Put iz Novog Sada, Studentski centar Novi Sad i predškolska ustanova Radost iz Novih Banovaca, kojom prilikom je radio na poslovima pomirenja između zaposlenih i njihovih poslodavaca, a u vezi sa problemima oko isplate regresa, toplog obroka, putnih troškova i jubilarnih nagrada, kao i sprečavanja zlostavljanja na radu (mobing).\n\nZa vreme mandata arbitra i miritelja učestvovao je na brojnim seminarima i konferencijama, uključujući i godišnju konferenciju Federalne službe za mirenje iz Vašingtona (SAD) održane u julu 2018. godine u Aranđelovcu, usled čega se kod njega javila želja za dodatnim usavršavanjem i sticanjem iskustva iz oblasti radnih odnosa iz perspektive advokata.\n\nPoseduje brojne sertifikate između ostalog i sertifikat za odbranu maloletnih učinilaca krivičnih dela i zastupanje maloletnih lica oštećenih krivičnim delima, kao i sertifikat iz oblasti prava zaštite životne sredine.\n\nBavi se zastupanjem brojnih fizičkih i pravnih lica iz svih oblasti prava, posebno iz domena građanskog prava (imovinski sporovi, sporovi u vezi sa nepokretnostima, svojinski odnosi), radnog prava (zastupanje u sporovima poništaja rešenja,izgubljene zarade, diskriminacije na radu — mobinga, naknade štete usled povreda na radu) kao i odbranom u krivičnim postupcima (odbrana okrivljenih i zastupanje oštećenih). Osim toga bavi se bankarskim pravom kao i obligacionim pravom i izradom svih vrsta obligacionih ugovora.\n\nOblast interesovanja su mu radno pravo i građansko (imovinsko) pravo.\n\nŽivi u Novom Sadu, oženjen je i otac je dvoje dece. Govori engleski jezik, a hobi mu je stoni tenis, koji aktivno igra sa prijateljima i trenutno se takmiči u gradskoj rekreativnoj ligi.",
      },
      {
        id: "milica-popov",
        fullName: "Milica Popov",
        image: milica,
        imagePlaceholder: milicaPlaceholder,
        role: "advokatski pripravnik",
        email: "milica.popov@advokatkljajic.rs",
        emailIcon: <GoMail />,
        phone: "062/159-78-75",
        phoneLink: "+381621597875",
        phoneIcon: <HiOutlinePhone />,
        bio: "Milica Popov rođena je u Novom Sadu 1995. godine. Završila je srednju ekonomsku školu “Svetozar Miletić” u Novom Sadu, smer pravni—birotehničar kao odličan učenik. Već tada, upoznavajući se sa predmetima kao što su: Ustav i prava građana, Matična evidencija, Upravno pravo, Korespondencija, počinje da se interesuje za rad u pravnoj struci.\n\nNakon završene srednje škole, upisuje Pravni fakultet u Novom Sadu, opšti smer koji potom i završava, a pokazuje interesovanje za građansko—pravnu oblast kao i za krivično pravo i njegove propratne nauke. Bez dvoumljenja, odlučuje da dalji put učenja i usavršavanja nastavi u advokatskoj kancelariji koja će joj pomoći da stekne potrebna znanja za dalji rad.\n\nAdvokatskoj kancelariji Kljajić pridružuje se u septembru 2023. godine, kada se i upisuje u Advokatsku Komoru Vojvodine kao advokatski pripravnik.\n\nU advokatskoj kancelariji Kljajić se bavi poslovima zastupanja iz oblasti građanskog prava (rešavanje imovinsko—pravnih odnosa, svojinskih odnosa, sporovi u vezi sa nepokretnostima), kao i bankarskim pravom, opštom parnicom, poslovima zastupanja iz oblasti naknade štete kao i pisanjem tužbi iz oblasti privrednog prava i stvarnog prava. Takođe, bavi se i obligacionim pravom i izradom svih vrsta obligacionih ugovora.\n\nGovori engleski jezik a služi se i španskim. Često učestvuje u humanitarnim akcijama pomoći za decu bez roditeljskog staranja. Hobi joj je vožnja bicikla i rolera.",
      },
      {
        id: "vuksa-jerkovic",
        fullName: "Vukša Jerković",
        image: vuksa,
        imagePlaceholder: vuksaPlaceholder,
        role: "saradnik u kancelariji",
        email: "vuksa.jerkovic@advokatkljajic.com",
        emailIcon: <GoMail />,
        phone: "065/562-34-51",
        phoneLink: "+381655623451",
        phoneIcon: <HiOutlinePhone />,
        bio: "Vukša Jerković rodjen je 1985. godine u Zrenjaninu. Završio je zrenjaninsku “Gimnaziju” 2004. godine, nakon čega je upisao Filozofski fakultet Univerziteta u Novom Sadu, smer Srpska književnost i jezik, na kojem je diplomirao 2009. godine sa prosečnom ocenom 8,95.\n\nNakon završenih studija, zaposlio se kao nastavnik srpskog jezika u osnovnoj školi ,,Žarko Zrenjanin” u mestu Boka, opština Sečanj.\n\nRadeći kao nastavnik, kod njega se javila želja za novim dokazivanjem, i sticanjem novih znanja, te kako je oduvek voleo pravo i pravnu nauku, 2012. godine upisuje Pravni fakultet Univerziteta u Novom Sadu, opšti smer, na kojem je uz rad u školi, diplomirao 2020. godine sa prosečnom ocenom 8,00.\n\nShvativši da je pravo ipak njegov poziv i da je želja za sticanjem znanja i iskustva u pravnoj nauci prevagnula u odnosu na profesorsko zanimanje, donosi odluku da se u daljem profesionalnom usavršavanju bavi ovom dosta komplikovanom oblašću.\n\nJoš tokom studija, pokazivao je interesovanje za oblast građanskog i privrednog prava.\n\nAdvokatskoj kancelariji Kljajić pristupa u julu 2020. godine, a zvanično se upisuje u Advokatsku komoru Vojvodine kao advokatski pripravnik u septembru 2020. godine.\n\nU advokatskoj kancelariji bavi se poslovima zastupanja iz oblasti građanskog prava (rešavanje imovinskopravnih odnosa, svojinski odnosi, sporovi u vezi sa nepokretnostima), bavi se bankarskim pravom, opštom parnicom, poslovima zastupanja iz oblasti naknade štete kao i pisanjem tužbi iz oblasti bankarskog prava, privrednog prava i stvarnog prava. Osim toga, bavi se obligacionim pravom i izradom svih vrsta obligacionih ugovora.\n\nGovori engleski jezik, a služi se ruskim i latinskim, hobi mu je planinarenje.",
      },
    ],
    staffDetailsPageTitle: "Naš tim",
    staffDetailsPageBioTitle: "Biografija",
  },
  ENG: {
    pageTitle: "About us",
    pageText:
      "Man's freedom is to regulate legal and business relations of his own free will, conclude contracts and have the ability and skill to agree or negotiate. Certainly, it's necessary to have a good foundation, which has been woven into the laws of our country a long time ago.\n\nIf you are not sure what your rights are, what your obligations are, what your opportunities are and their possible scope, or how you will create the best legal protection for yourself personally or your business, the best move you can make is to always have an excellent lawyer, representative and advisor, whose work is exclusively in your interest.\n\nWe are that kind of office, and our goal is to build a professional and loyal relationship with our clients.\n\nKljajić Law Office was founded in 2011. We approach all client problems with full attention, with the protection of their interests, strict preservation of a lawyer's secrecy, and respect for attorney—client privilege.\n\nOur goal is to provide high—quality legal services to all potential clients with the utmost respect for their personalities and an objective assessment of all their legal problems, with an effort to solve their problems in the most efficient and best possible way.",
    mottoTitle: "Our motto:",
    mottoDesc:
      "By the law of nature, it is fair that no one becomes richer by the loss and injury of another\n\nIure naturae aequum est neminem cum alterius detrimento et iniuria fieri locupletiorem. (Pomponius — D. 51, 17, 206)",
    staffArray: [
      {
        id: "goran-kljajic",
        fullName: "Goran Kljajić",
        image: goran,
        imagePlaceholder: goranPlaceholder,
        role: "attorney",
        email: "info@advokatkljajic.rs",
        emailIcon: <GoMail />,
        phone: "069/166-98-92",
        phoneLink: "+381691669892",
        phoneIcon: <HiOutlinePhone />,
        bio: "Attorney Goran Kljajić was born in Zrenjanin in 1984. He graduated from the “Dositej Obradović“ elementary school in Zrenjanin in 1999, and then from the “Jovan Trajković“ secondary school of economics in 2003. He enrolled in the Faculty of Law at the University of Novi Sad in 2003 and graduated in 2008.\n\nAfter graduating from the Faculty of Law, in 2009 he began his internship at the Zoran Koprivica Law Office, where he worked until 2011, initially as a trainee lawyer, and then for a while as a lawyer—associate.\n\nHe passed the bar exam in 2011 with very good success, and after working as a lawyer—associate in the Koprivica lawyer's office, he founded his own law office in 2011 and started practicing law independently.\n\nIn 2016, at a competition announced by the Republic Agency for the Peaceful Resolution of Labor Disputes in Belgrade, he was chosen as an arbitrator and conciliator at the Agency for the Peaceful Resolution of Labor Disputes.\n\nOn the duties of arbitrator and conciliator, he successfully arbitrated in over 200 arbitration proceedings, among others in the arbitration of JKP Put from Novi Sad, Student Center Novi Sad and preschool institution Radost from Novi Banovac, where he worked on reconciliation between employees and their employers, and in connection with the problems regarding the payment of holiday pay, hot meals, travel expenses, jubilee awards, as well as prevention of abuse at work (mobbing).\n\nDuring his mandate as an arbitrator and conciliator, he participated in numerous seminars and conferences, including the annual conference of the Federal Conciliation Service from Washington (USA) held in July 2018 in Arandjelovac, as a result of which he expressed a desire for additional training and gaining experience in the field of labor relations from a lawyer's perspective.\n\nHe has numerous certificates, including a certificate for the defense of juvenile offenders and representation of minors injured by criminal offenses, as well as a certificate in the field of environmental protection law.\n\nHe deals with the representation of numerous individuals and legal entities from all areas of law, especially in the domain of civil law (property disputes, disputes related to real estate, property relations), labor law (representation in disputes over annulment of decisions, lost earnings, discrimination at work — mobbing, compensation for damages due to injuries at work) as well as defense in criminal proceedings (defense of defendants and representation of injured parties). In addition, he deals with banking law as well as bond law and the drafting of all types of bond contracts.\n\nHis area of interest is labor law and civil (property) law.\n\nHe lives in Novi Sad, is married and is the father of two. He speaks English, and his hobby is table tennis, which he actively plays with his friends and currently competes in the city's recreational league.",
      },
      {
        id: "milica-popov",
        fullName: "Milica Popov",
        image: milica,
        imagePlaceholder: milicaPlaceholder,
        role: "trainee lawyer",
        email: "milica.popov@advokatkljajic.rs",
        emailIcon: <GoMail />,
        phone: "062/159-78-75",
        phoneLink: "+381621597875",
        phoneIcon: <HiOutlinePhone />,
        bio: "Milica Popov was born in Novi Sad in 1995. She graduated from the “Svetozar Miletić” high school of economics in Novi Sad, majoring in law—office technician, as an excellent student. Even then, familiarizing herself with subjects such as the Constitution and citizens' rights, civil registry, administrative law, and correspondence, she became interested in working in the legal profession.\n\nAfter finishing high school, she enrolled in the Faculty of Law in Novi Sad, a general major, which she then graduated from, showing an interest in civil law as well as in criminal law and its related fields. Without hesitation, she decides to continue learning and improving in a law office, which will help her acquire the necessary knowledge for further work.\n\nShe joined the Kljajić Law Office in September 2023 and, at the same time, enrolled in the Vojvodina Bar Association as a trainee lawyer.\n\nWorking for Kljajić Law Office, she deals with representation in the field of civil law (resolving property law relations, property relations, disputes related to real estate), banking law, general litigation, representation in the field of compensation for damages, as well as writing lawsuits in the fields of commercial law and real law. Also, she deals with obligation law and the drafting of all types of obligation contracts.\n\nShe speaks English and is familiar with Spanish. She often participates in humanitarian aid actions for children without parental care. Her hobbies are cycling and rollerblading.",
      },
      {
        id: "vuksa-jerkovic",
        fullName: "Vukša Jerković",
        image: vuksa,
        imagePlaceholder: vuksaPlaceholder,
        role: "office associate",
        email: "vuksa.jerkovic@advokatkljajic.com",
        emailIcon: <GoMail />,
        phone: "065/562-34-51",
        phoneLink: "+381655623451",
        phoneIcon: <HiOutlinePhone />,
        bio: "Vukša Jerković was born in 1985 in Zrenjanin. He graduated from the Zrenjanin high school in 2004, after which he enrolled in the Faculty of Philosophy, University of Novi Sad, majoring in Serbian literature and language, from which he graduated in 2009 with an average grade of 8,95.\n\nAfter completing his studies, he got a job as a Serbian language teacher at the “Žarko Zrenjanin“ elementary school in Boka, Sečanj municipality.\n\nWhile working as a teacher, he had a desire to prove himself and gain new knowledge, and since he always had love for law and legal science, in 2012 he enrolled in the Faculty of Law, University of Novi Sad, general major, where, along with his work at the school, he graduated in 2020 with an average grade of 8.00.\n\nRealizing that law is still his vocation and that the desire to acquire knowledge and experience in legal science prevailed in relation to the profession of a teacher, he made the decision to pursue further professional development in this rather complicated field.\n\nEven during his studies, he showed great interest in the field of civil and commercial law.\n\nHe joins Kljajić Law Office in July 2020, and officially enrolled in the Vojvodina Bar Association as a trainee lawyer in September 2020.\n\nWorking for Kljajić Law Office, he deals with representation in the field of civil law (resolving property law relations, property relations, disputes related to real estate), banking law, general litigation, representation in the field of damages as well as writing lawsuits in the field of banking law, commercial rights and real rights. In addition, he deals with obligation law and the drafting of all types of obligation contracts.\n\nHe speaks English and is familiar with Russian and Latin. His hobby is hiking.",
      },
    ],
    staffDetailsPageTitle: "Our team",
    staffDetailsPageBioTitle: "Biography",
  },
};
