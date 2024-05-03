import goran from "../assets/images/goran.jpg";
import vuksa from "../assets/images/vuksa.png";
import milica from "../assets/images/milica.jpg";
import goranPlaceholder from "../assets/images/placeholders/goran-placeholder.jpg";
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
        role: "osnivač / advokat",
        email: "goran.kljajic@advokatkljajic.rs",
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
      // {
      //   id: "nadja-knezevic",
      //   fullName: "Nađa Knežević",
      //   image: "",
      //   imagePlaceholder: "",
      //   role: "advokat — saradnik u kancelariji",
      //   email: "nadja.knezevic@advokatkljajic.rs",
      //   emailIcon: <GoMail />,
      //   phone: "065/346-50-80",
      //   phoneLink: "+381653465080",
      //   phoneIcon: <HiOutlinePhone />,
      //   bio: "Nađa Knežević rođena je 1994. godine u Novom Sadu. Osnovnu školu “Jovan Jovanović Zmaj” u Sremskoj Kamenici završila je 2009. godine, a potom i Karlovačku gimnaziju, italijanski smer, 2013. godine. Pravni fakultet u Novom Sadu upisala je 2013. godine i diplomira na opštem smeru 2019. godine.\n\nNakon završenog Pravnog fakulteta 2019. godine, započela je pripravničku vežbu u Privrednom sudu u Novom Sadu od decembra 2019. do marta 2021. godine, i Višem krivičnom sudu u Novom Sadu od marta 2021. do decembra 2021. godine.\n\nPravosudni ispit položila je u Beogradu 2022. godine, a zatim i advokatski ispit 2023. godine.\n\nOblast interesovanja joj je poresko i prekršajno pravo.\n\nGovori engleski jezik i služi se italijanskim jezikom.",
      // },
      {
        id: "vuksa-jerkovic",
        fullName: "Vukša Jerković",
        image: vuksa,
        imagePlaceholder: vuksaPlaceholder,
        role: "saradnik u kancelariji",
        email: "vuksa.jerkovic@advokatkljajic.rs",
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
      "The freedom of individuals lies in their ability to regulate legal and business relationships by their own will, to conclude contracts, and to possess the capability and skill to negotiate. Certainly, it is essential to have a solid foundation and basis, which has been ingrained in many laws of our country since time immemorial.\n\nIf you are unsure about your rights and obligations, your possibilities and limitations, and how to create the best legal protection for yourself or your business, the strategic move you can make is to always have an excellent lawyer, representative, and advisor who solely prioritizes your interests.\n\nWe are precisely such a law office, aiming to build a professional and loyal relationship with all of our clients.\n\nKljajić Law Office was established in 2011. We approach all client issues with full attention, providing special protection of their interests, strictly safeguarding attorney—client privilege, and respecting the attorney—client relationship.\n\nThe goal of our law office is to provide quality legal services to all potential clients with the utmost respect for their individuality and with an objective assessment of all their legal problems, striving to resolve their issues in the most efficient and effective manner possible.",
    mottoTitle: "Our motto:",
    mottoDesc:
      "By the law of nature, it is fair that no one becomes richer by the loss and injury of another.\n\nIure naturae aequum est neminem cum alterius detrimento et iniuria fieri locupletiorem. (Pomponius — D. 51, 17, 206)",
    staffArray: [
      {
        id: "goran-kljajic",
        fullName: "Goran Kljajić",
        image: goran,
        imagePlaceholder: goranPlaceholder,
        role: "founder / attorney",
        email: "goran.kljajic@advokatkljajic.rs",
        emailIcon: <GoMail />,
        phone: "069/166-98-92",
        phoneLink: "+381691669892",
        phoneIcon: <HiOutlinePhone />,
        bio: "Attorney Goran Kljajić was born in Zrenjanin in 1984. He completed his elementary education at “Dositej Obradović” School in Zrenjanin in 1999, followed by graduating from the “Jovan Trajković” High School of Economics in 2003. He enrolled in the Faculty of Law at the University of Novi Sad in 2003 and graduated with a general degree in 2008.\n\nAfter completing his legal studies, in 2009, he began his internship at the Zoran Koprivica Law Office in Novi Sad, where he worked until 2011, initially as a trainee lawyer and later as an associate lawyer.\n\nHe passed the bar exam in 2011 with a very good result. Following his experience as an associate lawyer at Koprivica's office, he established his own law office in 2011 and started practicing law independently.\n\nIn 2016, he was selected as an arbitrator and mediator at the Republic Agency for Peaceful Settlement of Labor Disputes in Belgrade through a competition.\n\nHe successfully arbitrated in over 200 arbitration cases, including cases involving JKP Put from Novi Sad, the Student Center of Novi Sad, and the preschool institution Radost from Novi Banovci. During these cases, he mediated between employees and their employers regarding issues such as holiday pay, meal allowances, travel expenses, jubilee awards, and prevention of workplace harassment (mobbing).\n\nDuring his tenure as an arbitrator and mediator, he participated in numerous seminars and conferences, including the annual conference of the Federal Mediation Service from Washington (USA) held in July 2018 in Aranđelovac. This led to his desire for further training and gaining experience in labor relations from the perspective of a lawyer.\n\nHe holds numerous certificates, including one for defending juvenile offenders in criminal cases and representing juvenile victims of crimes, as well as a certificate in environmental law.\n\nHe represents numerous individuals and legal entities in various areas of law, particularly in civil law (property disputes, real estate disputes, ownership issues), labor law (representation in cases of annulment of decisions, lost wages, workplace discrimination (mobbing), compensation for work—related injuries), and criminal defense (defense of accused individuals and representation of victims). Additionally, he deals with banking law and contract law, drafting various types of contracts.\n\nHis areas of interest are labor law and civil (property) law.\n\nHe lives in Novi Sad, is married, and has two children. He speaks English, and his hobby is table tennis, which he actively plays with friends and currently competes in the city's recreational league.",
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
        bio: "Milica Popov was born in Novi Sad in 1995. She graduated from the “Svetozar Miletić” High School of Economics in Novi Sad, specializing in legal office administration as an excellent student. Already then, as she familiarized herself with subjects such as Constitutional Law, Registry Office, Administrative Law, Correspondence, she became interested in working in the legal profession.\n\nAfter completing high school, she enrolled in the Faculty of Law in Novi Sad, completing the general law program, showing interest in civil law, criminal law, and related sciences. Without hesitation, she decided to continue her further education and development in a law office that would help her acquire the necessary knowledge for future work.\n\nShe joined the Kljajić Law Office in September 2023, when she also registered with the Bar Association of Vojvodina as a trainee lawyer.\n\nAt Kljajić Law Office, she deals with representation in the field of civil law (resolving property—related legal matters, ownership issues, disputes concerning real estate), as well as banking law, general litigation, representation in compensation claims, drafting lawsuits in commercial and property law. Additionally, she deals with contract law and drafting various types of contracts.\n\nShe speaks English and is proficient in Spanish. She frequently participates in humanitarian aid campaigns for children without parental care. Her hobbies include biking and rollerblading.",
      },
      // {
      //   id: "nadja-knezevic",
      //   fullName: "Nađa Knežević",
      //   image: "",
      //   imagePlaceholder: "",
      //   role: "attorney — office associate",
      //   email: "nadja.knezevic@advokatkljajic.rs",
      //   emailIcon: <GoMail />,
      //   phone: "065/346-50-80",
      //   phoneLink: "+381653465080",
      //   phoneIcon: <HiOutlinePhone />,
      //   bio: "Nađa Knežević was born in 1994 in Novi Sad. In 2009, she completed elementary school at “Jovan Jovanović Zmaj” in Sremska Kamenica, and then attended the Karlovci Grammar School, specializing in Italian, graduating in 2013. She enrolled in the Faculty of Law in Novi Sad in 2013, graduating in general law in 2019.\n\nAfter completing her law degree in 2019, she began her internship at the Commercial Court in Novi Sad from December 2019 to March 2021, and then at the Higher Criminal Court in Novi Sad from March 2021 to December 2021.\n\nShe passed the judicial exam in Belgrade in 2022, and then the bar exam in 2023.\n\nHer areas of interest are tax law and misdemeanor law.\n\nShe speaks English and is proficient in Italian.",
      // },
      {
        id: "vuksa-jerkovic",
        fullName: "Vukša Jerković",
        image: vuksa,
        imagePlaceholder: vuksaPlaceholder,
        role: "office associate",
        email: "vuksa.jerkovic@advokatkljajic.rs",
        emailIcon: <GoMail />,
        phone: "065/562-34-51",
        phoneLink: "+381655623451",
        phoneIcon: <HiOutlinePhone />,
        bio: "Vukša Jerković was born in 1985 in Zrenjanin. He graduated from the Zrenjanin Grammar School in 2004, after which he enrolled in the Faculty of Philosophy at the University of Novi Sad, majoring in Serbian literature and language, graduating in 2009 with an average grade of 8,95.\n\nAfter completing his studies, he became a Serbian language teacher at the “Žarko Zrenjanin“ elementary school in Boka, municipality of Sečanj.\n\nWorking as a teacher, he developed a desire for further professional development and acquiring new knowledge. As he had always been interested in law and legal science, in 2012, he enrolled in the Faculty of Law at the University of Novi Sad, general program, graduating in 2020 with an average grade of 8.00 while still working at the school.\n\nRealizing that law was indeed his calling and that his desire for knowledge and experience in legal science outweighed his desire for a teaching career, he decided to pursue further professional development in this rather complicated field.\n\nDuring his studies, he showed interest in the areas of civil and commercial law.\n\nHe joined the Kljajić Law Office in July 2020, and officially registered with the Bar Association of Vojvodina as a trainee lawyer in September 2020.\n\nAt Kljajić Law Office, he deals with representation in the field of civil law (resolving property—related legal matters, ownership issues, disputes concerning real estate), banking law, general litigation, representation in compensation claims, and drafting lawsuits in the areas of banking law, commercial law, and property law. Additionally, he deals with contract law and drafting various types of contracts.\n\nHe speaks English and is proficient in Russian and Latin. His hobby is hiking.",
      },
    ],
    staffDetailsPageTitle: "Our team",
    staffDetailsPageBioTitle: "Biography",
  },
};
