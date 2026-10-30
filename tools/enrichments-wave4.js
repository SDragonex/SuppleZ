/**
 * SuppleZ Wave 4 Enrichments: Pharmacy Staples, GymBeam Bestsellers & American Supplements
 * 25 essential commercial compounds completing the standard tablet/capsule repertoire.
 * Zero emojis, 100% complete clinical and pharmacological schema.
 */

const wave4Data = {
  health: [
    {
      id: 148,
      name: "MSM (Methylsulfonylmethan)",
      categoryKey: "health",
      tags: ["klouby", "chrupavky", "síra", "zánět", "GymBeam", "lékárna"],
      rating: 4.8,
      colorType: "neon-cyan",
      shortDesc: "Organická biologicky dostupná forma síry nezbytná pro tvorbu disulfidových můstků v kolagenu, integritu chrupavek a tlumení zánětu.",
      description: "MSM (Methylsulfonylmethan) je přirozeně se vyskytující organická sloučenina síry (obsahuje cca 34 % elementární síry). V těle slouží jako primární donor síry pro syntézu aminokyselin methioninu a cysteinu, kolagenu a keratinu. Působí jako silný lapač volných radikálů a inhibitor transkripčního faktoru NF-kB, čímž snižuje produkci zánětlivých cytokinů IL-6 a TNF-alfa v kloubních pouzdrech. Je základním kamenem všech špičkových kloubních výživ (Alavis, Animal Flex, GymBeam Joint Max).",
      effects: [
        "Snížení bolesti a ztuhlosti kloubů při osteoartróze",
        "Podpora syntézy kolagenu a zpevnění vazů a šlach",
        "Zlepšení kvality vlasů, nehtů a kůže (tvorba keratinu)",
        "Potlačení zánětu a urychlení regenerace po tréninku"
      ],
      dosage: {
        short: "1 500 – 3 000 mg denně s jídlem",
        long: "Standardní terapeutická dávka je 1 500 až 3 000 mg rozdělená do 2 dávek (např. 1 000–1 500 mg ráno a v poledne s jídlem). Při akutních kloubních potížích lze krátkodobě zvýšit až na 5 000 mg denně. Doporučuje se kombinovat s vitamínem C pro maximální podporu hydroxylace kolagenu."
      },
      warning: "Velmi bezpečný profil. U citlivých jedinců může vysoká počáteční dávka nalačno vyvolat mírné nadýmání nebo řidší stolici. Začínejte na 1 000 mg a postupně navyšujte.",
      mechanism: "Dodává organické sulfhydrylové a disulfidové vazby nezbytné pro terciární strukturu kolagenu a glykosaminoglykanů; inhibuje expresi COX-2, iNOS a NF-kB, snižuje hladinu synoviálních prostaglandinů PGE2.",
      halfLife: "T1/2 cca 12 hodin (eliminace močí)",
      interactions: [
        "Vitamín C (esenciální synergie pro syntézu kolagenu)",
        "Glukosamin a Chondroitin sulfát (zlatý standard kloubní trojkombinace)",
        "Boswellia serrata (synergické potlačení kloubního zánětu)"
      ],
      naturalSources: "Stopové množství v syrové zelenině, ovoci, kravském mléce a obilovinách; vařením a zpracováním se většina MSM odpařuje.",
      bannedStatus: "Povoleno WADA, běžně dostupný volně prodejný doplněk stravy."
    },
    {
      id: 149,
      name: "Boswellia Serrata (Kyselina boswellová / 5-LOX inhibitor)",
      categoryKey: "health",
      tags: ["klouby", "artróza", "5-LOX", "zánět", "bylina", "lékárna"],
      rating: 4.7,
      colorType: "neon-green",
      shortDesc: "Standardizovaný pryskyřičný extrakt z kadidlovníku pilovitého s obsahem AKBA, nejsilnějšího přírodního inhibitoru 5-lipoxygenázy.",
      description: "Boswellia serrata (kadidlovník pilovitý) je tradiční ajurvédská dřevina, jejíž pryskyřice obsahuje pentacyklické triterpenové kyseliny boswellové, zejména 3-O-acetyl-11-keto-beta-boswellovou kyselinu (AKBA). AKBA je vysoce specifický nekompetitivní inhibitor enzymu 5-lipoxygenázy (5-LOX), který zastavuje kaskádu tvorby prozánětlivých leukotrienů (LTB4). Na rozdíl od běžných nesteroidních antirevmatik (NSAID) nedráždí žaludeční sliznici a nepoškozuje glykosaminoglykany v kloubní chrupavce.",
      effects: [
        "Rychlá úleva od bolesti kloubů a ranní ztuhlosti",
        "Specifická inhibice 5-lipoxygenázy a leukotrienů",
        "Ochrana synoviální chrupavky před enzymatickou degradací",
        "Podpora při chronických zánětech střev (IBD, Crohnova choroba)"
      ],
      dosage: {
        short: "300 – 500 mg standardizovaného extraktu (min. 30–65 % kyselin boswellových) 2x denně",
        long: "Užívejte 300 až 500 mg standardizovaného extraktu dvakrát denně vždy s jídlem obsahujícím tuky (lipofilní látka). U patentovaných fosfolipidových či mikronizovaných forem (např. AprèsFlex / 5-Loxin s 20–30 % AKBA) postačuje 100 mg denně."
      },
      warning: "Může mírně ovlivňovat jaterní enzymy CYP2C9 a CYP3A4. Těhotné a kojící ženy by měly užívání konzultovat s lékařem.",
      mechanism: "Přímá alosterická vazba AKBA na enzym 5-lipoxygenázu blokuje přeměnu kyseliny arachidonové na leukotrien A4 (LTA4) a B4 (LTB4); inhibice elastázy lidských leukocytů (HLE).",
      halfLife: "T1/2 cca 6 hodin",
      interactions: [
        "Kurkumin (duální blokáda zánětu: Kurkumin tlumí COX-2, Boswellia tlumí 5-LOX)",
        "MSM a Glukosamin (komplexní podpora chrupavek)"
      ],
      naturalSources: "Pryskyřice stromu Boswellia serrata (kadidlovník) rostoucího v suchých oblastech Indie a severní Afriky.",
      bannedStatus: "Povoleno WADA, volně prodejný standardizovaný bylinný extrakt."
    },
    {
      id: 150,
      name: "Železo (Bisglycinát železnatý / Ferritin)",
      categoryKey: "health",
      tags: ["krev", "anémie", "hemoglobin", "energie", "minerál", "lékárna"],
      rating: 4.8,
      colorType: "neon-orange",
      shortDesc: "Chelátová forma esenciálního stopového prvku pro syntézu hemoglobinu, myoglobinu a enzymů buněčného dýchání bez zácpy.",
      description: "Železo je klíčový esenciální stopový prvek lidského těla. Tvoří centrální koordinační atom hemu v molekule hemoglobinu (transport kyslíku z plic do tkání) a myoglobinu (svalové zásobení kyslíkem). Železo je rovněž nezbytné pro cytochromy v mitochondriálním dýchacím řetězci (tvorba ATP) a enzymy syntézy neurotransmiterů. Aminokyselinový chelát (bisglycinát železnatý, Ferrochel) má násobně vyšší biologickou dostupnost než anorganický síran železnatý a nezpůsobuje zácpu, křeče ani podráždění žaludku.",
      effects: [
        "Obnova tvorby červených krvinek a zvýšení hladiny hemoglobinu",
        "Odstranění chronické únavy, slabosti a dušnosti způsobené anémií",
        "Zlepšení termoregulace a kognitivních funkcí",
        "Podpora imunitního systému a enzymatické obrany"
      ],
      dosage: {
        short: "14 – 28 mg elementárního železa denně nalačno s vitamínem C",
        long: "Preventivní dávka u ohrožených skupin (ženy s těžkou menstruací, vytrvalostní sportovci, vegani) je 14 až 20 mg elementárního železa denně. Při prokázané sideropenické anémii (nízký ferritin) se užívá 28 až 50 mg denně. Užívejte ráno nalačno nebo mezi jídly společně se 100–250 mg vitamínu C pro zajištění redukce Fe3+ na vstřebatelnou formu Fe2+."
      },
      warning: "Nadbytek železa je vysoce toxický (Fentonova reakce generující hydroxylové radikály) a tělo nemá aktivní vylučovací mechanismus pro železo. Užívejte pouze na základě krevních testů (krevní obraz, sérové železo, ferritin). Kontraindikováno při hemochromatóze.",
      mechanism: "Vstřebává se v duodenu přes transportér DMT-1 (Divalent Metal Transporter 1) nebo jako intaktní chelát bisglycinátu; v enterocytu se váže na ferritin nebo je přes ferroportin uvolňováno do krve navázané na transferrin pro erytropoézu v kostní dřeni.",
      halfLife: "Recykluje se v těle (zánik erytrocytů po 120 dnech v makrofázích sleziny)",
      interactions: [
        "Vitamín C (zvyšuje vstřebávání železa až 3násobně)",
        "Vápník a Mléčné výrobky (přímý kompetitor na transportéru DMT-1, nutný odstup min. 2 hodiny)",
        "Káva a Čaj / Taniny a Fytáty (chelatují železo a blokují jeho absorpci)"
      ],
      naturalSources: "Hemové železo: hovězí játra, červené maso, ústřice; Nehemové železo: čočka, špenát, dýňová semínka, quinoa.",
      bannedStatus: "Povoleno WADA, volně prodejný registrovaný minerální doplněk."
    },
    {
      id: 151,
      name: "Vápník (Citrát vápenatý / Aquamin)",
      categoryKey: "health",
      tags: ["kosti", "minerál", "zuby", "svaly", "lékárna"],
      rating: 4.6,
      colorType: "neon-cyan",
      shortDesc: "Klíčový makrominerál pro hustotu kostní tkáně, neuromuskulární transmisi a svalovou kontrakci v organicky vázané formě.",
      description: "Vápník (Calcium) je nejrozšířenější minerál v lidském těle. Přibližně 99 % celkového vápníku je uloženo v hydroxyapatitových krystalech kostí a zubů, zbývající 1 % cirkuluje v krevní plazmě a intracelulární tekutině, kde řídí akční potenciály srdce, svalovou kontrakci (vazba na troponin C) a krevní srážlivost. Organické formy (Citrát vápenatý nebo bioaktivní multiminerální komplex z červených mořských řas Aquamin) nevyžadují silně kyselé žaludeční pH pro rozpuštění a mají podstatně vyšší absorpci než levný uhličitan vápenatý.",
      effects: [
        "Udržení normální hustoty a mineralizace kostí a zubů (prevence osteoporózy)",
        "Nezbytný kofaktor pro normální svalové stahy včetně srdečního myokardu",
        "Neuromuskulární signalizace a uvolňování neurotransmiterů",
        "Účast na kaskádě srážení krve (faktor IV)"
      ],
      dosage: {
        short: "500 – 1 000 mg elementárního vápníku denně rozděleně s jídlem",
        long: "Doporučený denní příjem ze stravy a suplementace je 1 000 mg (u žen v menopauze a seniorů 1 200 mg). Jednorázová dávka by neměla překročit 500 mg, protože vstřebávací kapacita střeva se při vyšších jednorázových dávkách prudce snižuje. Vždy kombinujte s vitamínem D3 a K2!"
      },
      warning: "Samotný vápník bez dostatku vitamínu K2 a D3 zvyšuje riziko kardiovaskulární kalcifikace cév a ledvinových kamenů. Neužívejte společně s hořčíkem nebo železem ve stejné dávce.",
      mechanism: "Střevní absorpce probíhá aktivním transcelulárním transportem závislým na kalcitriolu (vitamín D3) přes kanál TRPV6 a kalbindin-D9k, a pasivním paracelulárním transportem.",
      halfLife: "Dynamický kostní obrat (remodelace kostry cca 10 % ročně)",
      interactions: [
        "Vitamín D3 a Vitamín K2 MK-7 (kritická synergie pro správnou depozici vápníku do kostí místo cév)",
        "Hořčík (antagonista a kompetitor na transportních systémech, užívat odděleně)",
        "Železo a Zinek (kompetice o DMT-1 transportér)"
      ],
      naturalSources: "Mléčné výrobky, tvrdé sýry (Parmezán), mák (extrémní obsah vápníku), sardinky s kostmi, mořské řasy, tofu.",
      bannedStatus: "Povoleno WADA, esenciální makrominerál."
    },
    {
      id: 152,
      name: "Vitamín A (Retinyl palmitát & Beta-karoten)",
      categoryKey: "health",
      tags: ["zrak", "imunita", "pleť", "vitamín", "lékárna"],
      rating: 4.7,
      colorType: "neon-yellow",
      shortDesc: "Esenciální v tucích rozpustný vitamín pro fotochemickou transdukci zraku (rodopsin), regeneraci epitelů a slizniční imunitu.",
      description: "Vitamín A je souhrnný název pro skupinu retinoidů (retinol, retinal, kyselina retinová) a provitamínových karotenoidů (zejména beta-karoten). V oční sítnici se 11-cis-retinal váže na protein opsin za vzniku rodopsinu – zrakového pigmentu tyčinek odpovědného za vidění za šera. Kyselina retinová funguje jako hormonální ligand pro nukleární receptory RAR a RXR, kterými reguluje transkripci stovek genů pro buněčný růst, diferenciaci kůže, epitelů dýchacích a močových cest a tvorbu T-lymfocytů.",
      effects: [
        "Podpora zraku, adaptace na tmu a prevence šerosleposti",
        "Udržení integrity sliznic dýchacího, trávicího a urogenitálního traktu",
        "Podpora diferenciace a hojení pokožky (akné, epitelizace)",
        "Zásadní role v imunitní odpovědi a obraně proti infekcím"
      ],
      dosage: {
        short: "800 – 1 500 mcg RAE (cca 2 500 – 5 000 IU) denně s jídlem obsahujícím tuky",
        long: "Běžná denní dávka je 700–900 mcg RAE (cca 3 000 IU). V doplňcích stravy je ideální kombinace předtvořeného retinolu (např. retinyl palmitát 1 500 IU) s přírodním beta-karotenem (3 000 IU), který si tělo konvertuje na retinol pouze podle aktuální potřeby."
      },
      warning: "Předtvořený vitamín A (retinol) se kumuluje v játrech a ve vysokých dávkách (>10 000 IU denně dlouhodobě) je teratogenní a hepatotoxický! Těhotné ženy nesmí překračovat doporučenou denní dávku retinolu. Beta-karoten je netoxický, ale u kuřáků se nedoporučují izolované vysoké dávky.",
      mechanism: "Aktivace jaderných receptorů RAR (Retinoic Acid Receptor) a RXR (Retinoid X Receptor) moduluje expresi genů pro keratinocyty a imunitní buňky; retinal v tyčinkách podléhá fotoizomerizaci na trans-retinal.",
      halfLife: "T1/2 v játrech několik měsíců (hlavní zásoba těla)",
      interactions: [
        "Zinek (esenciální pro syntézu proteinu RBP vázajícího retinol a konverzi retinolu na retinal)",
        "Vitamín D3 (RXR receptory vytvářejí heterodimery s VDR receptory pro vitamín D)"
      ],
      naturalSources: "Hovězí játra, tresčí játra, vaječný žloutek, máslo (retinol); mrkev, sladké brambory, dýně, špenát (beta-karoten).",
      bannedStatus: "Povoleno WADA, esenciální vitamín."
    },
    {
      id: 153,
      name: "Vitamín E (Kompletní spektrum Tokoferolů & Tokotrienolů)",
      categoryKey: "health",
      tags: ["antioxidant", "cévy", "membrány", "vitamín", "lékárna"],
      rating: 4.6,
      colorType: "neon-green",
      shortDesc: "Hlavní v tucích rozpustný antioxidant lidského těla chránící buněčné membrány a LDL částice před peroxidací lipidů.",
      description: "Vitamín E není jediná sloučenina, nýbrž rodina osmi příbuzných izomerů: čtyř tokoferolů (alfa, beta, gama, delta) a čtyř tokotrienolů. Je primárním řetězec-přerušujícím antioxidantem v lipidových dvouvrstvách buněčných membrán a v krevních lipoproteinech (LDL a HDL). Zabraňuje volnoradikálové peroxidaci polynenasycených mastných kyselin (PUFA), čímž udržuje elasticitu cév, chrání endotel před aterosklerózou a podporuje reprodukční systém. Nejúčinnější doplňky obsahují přírodní směs d-alfa-tokoferolu obohacenou o tokotrienoly z palmového oleje nebo annatta.",
      effects: [
        "Vychytávání volných peroxylových radikálů v buněčných membránách",
        "Prevence oxidace LDL cholesterolu a ochrana endotelu cév",
        "Podpora mikrocirkulace a snížení agregace krevních destiček",
        "Ochrana pokožky před fotostárnutím a oxidačním poškozením UV zářením"
      ],
      dosage: {
        short: "100 – 400 IU (cca 67 – 268 mg) přírodního d-alfa tokoferolu se směsnými tokoferoly s jídlem",
        long: "Běžná preventivní dávka je 100 až 200 IU denně. U sportovců a při kardiovaskulární ochraně se užívá 400 IU přírodní formy (označované jako d-alfa-tokoferol, nikoliv syntetický dl-alfa). Užívejte vždy s tučným jídlem."
      },
      warning: "Ve velmi vysokých dávkách (>800 IU denně) antagonizuje vitamín K a prodlužuje dobu srážení krve. Neužívejte vysoké dávky před plánovanými chirurgickými zákroky nebo společně s warfarinem bez lékařského dohledu.",
      mechanism: "Reaguje s lipidovými peroxylovými radikály (LOO•) rychleji než nenasycené mastné kyseliny, tvoří tokoferylový radikál, který je následně regenerován zpět vitamínem C a glutathionem.",
      halfLife: "T1/2 alfa-tokoferolu cca 48 hodin v plazmě",
      interactions: [
        "Vitamín C (regeneruje oxidovaný tokoferylový radikál zpět na aktivní vitamín E)",
        "Omega-3 mastné kyseliny (vitamín E zabraňuje oxidaci křehkých molekul EPA a DHA)",
        "Antikoagulancia / Warfarin (zvýšené riziko krvácivosti při vysokých dávkách)"
      ],
      naturalSources: "Olej z pšeničných klíčků, slunečnicová semínka, mandle, lískové ořechy, avokádo, olivový olej.",
      bannedStatus: "Povoleno WADA, esenciální vitamín."
    },
    {
      id: 154,
      name: "Draslík (Citrát draselný)",
      categoryKey: "health",
      tags: ["krevní tlak", "elektrolyty", "srdce", "minerál", "lékárna"],
      rating: 4.8,
      colorType: "neon-blue",
      shortDesc: "Hlavní intracelulární elektrolyt nezbytný pro membránový klidový potenciál, srdeční rytmus a kontrolu krevního tlaku.",
      description: "Draslík (Potassium) je dominantní kationt uvnitř lidských buněk (cca 98 % celkového draslíku je intracelulárně v koncentraci kolem 140–150 mmol/l). V součinnosti se sodíkem udržuje membránový klidový potenciál přes enzym Na+/K+-ATPázu, což je základem vedení vzruchů v neuronech, srdečních převodních vláknech a kosterních svalech. Adekvátní příjem draslíku stimuluje natriurézu (vylučování přebytečného sodíku ledvinami), snižuje periferní cévní odpor a prokazatelně normalizuje krevní tlak. Citrátová sůl navíc alkalizuje moč a působí jako silná prevence urátových a kalcium-oxalátových ledvinových kamenů.",
      effects: [
        "Regulace krevního tlaku a snížení napětí v cévních stěnách",
        "Prevence svalových křečí a rychlá neuromuskulární repolarizace",
        "Udržení stabilního srdečního rytmu a prevence arytmií",
        "Prevence vzniku ledvinových kamenů (alkalizace moči citrátem)"
      ],
      dosage: {
        short: "200 – 400 mg elementárního draslíku v jedné dávce s vodou a jídlem",
        long: "Doporučený denní příjem draslíku ze stravy je 3 500 až 4 700 mg. V doplňcích stravy je legislativní limit na jednu tabletu obvykle 99 mg až 300 mg elementárního draslíku, aby se zabránilo lokálnímu podráždění střevní stěny. Rozmíchejte práškový citrát draselný ve větším objemu vody (500 ml) a popíjejte s jídlem."
      },
      warning: "Přísně kontraindikováno při chronickém renálním selhání (snížená glomerulární filtrace nedokáže vylučovat draslík, hrozí smrtelná hyperkalémie a zástava srdce). Zvýšená opatrnost při užívání ACE inhibitorů, sartanů (ARB) a draslík šetřících diuretik (Spironolakton).",
      mechanism: "Aktivace Na+/K+-ATPázy; v cévním hladkém svalu otevírá draslíkové kanály Kir a KCa, což vede k hyperpolarizaci membrány, uzavření napěťově řízených vápníkových kanálů a vazodilataci.",
      halfLife: "Rychlý renální obrat, poločas plazmatické rovnováhy 1–2 hodiny",
      interactions: [
        "Hořčík (nezbytný kofaktor pro funkci Na+/K+-ATPázy, bez hořčíku dochází k úniku draslíku z buněk)",
        "Sodík (vyvážený poměr K:Na cca 2:1 až 4:1 je základem kardiovaskulárního zdraví)",
        "Telmisartan a ACE inhibitory (riziko hyperkalémie, monitorovat sérové hladiny)"
      ],
      naturalSources: "Brambory pečené ve slupce, banány, avokádo, kokosová voda, sušené meruňky, fazole, listová zelenina.",
      bannedStatus: "Povoleno WADA, esenciální elektrolyt."
    },
    {
      id: 155,
      name: "D-Manóza (D-Mannose / Blokurima)",
      categoryKey: "health",
      tags: ["močové cesty", "infekce", "e-coli", "lékárna", "bestseller"],
      rating: 4.9,
      colorType: "neon-cyan",
      shortDesc: "Přírodní monosacharid, který se nemetabolizuje na glukózu, nýbrž se vylučuje ledvinami a mechanicky vyplavuje bakterie E. coli.",
      description: "D-Manóza je přirozeně se vyskytující jednoduchý cukr (aldohexóza), strukturní izomer glukózy. Po perorálním požití se téměř vůbec nemetabolizuje na glykogen ani energii a neovlivňuje glykémii. Během 30–60 minut je v intaktní formě přefiltrována glomerulární membránou do močových cest. Tam funguje jako kompetitivní návnada pro lektinové adheziny FimH na povrchu fimbrií uropatogenních kmenů Escherichia coli (původce >90 % všech infekcí močového měchýře). Bakterie se naváží na volnou D-manózu namísto stěny močového měchýře a jsou přirozeně a bezbolestně vyplaveny močí.",
      effects: [
        "Okamžitá mechanická eliminace bakterií E. coli z močového traktu",
        "Rychlá úleva od pálení, řezání a častého nutkání na močení",
        "Prevence recidivujících zánětů močového měchýře (cystitid)",
        "Nevyvolává bakteriální rezistenci a neničí přirozený mikrobiom jako antibiotika"
      ],
      dosage: {
        short: "Akutně: 2 000 mg každé 2–3 hodiny první 2 dny; Prevence: 2 000 mg 1x denně před spaním",
        long: "Při akutním zánětu: 2 000 mg (1 sáček či odměrka rozpuštěná ve sklenici vody) každé 2–3 hodiny po dobu prvních 48 hodin. Po vypití 45 minut nepijte, aby manóza působila v měchýři v koncentrované formě, poté se vymočte a doplňte tekutiny. Preventivní dlouhodobý režim: 2 000 mg denně večer před spaním po vymočení."
      },
      warning: "Bezpečný i pro těhotné ženy a diabetiky. Pokud se příznaky zánětu nezlepší do 48 hodin nebo se objeví horečka a bolest v bedrech (riziko pyelonefritidy), neprodleně vyhledejte lékaře.",
      mechanism: "Vysokoafinitní vazba na FimH adhesin typu 1 fimbrií uropatogenní E. coli; zabraňuje adhezi bakterie k uroplakinům uroepitelu a biofilmu.",
      halfLife: "T1/2 cca 30–90 minut (rychlá renální exkrece)",
      interactions: [
        "Extrakt z kanadských brusinek / Proanthokyanidiny (synergická inhibice adheze bakterií)",
        "Probiotika (Lactobacillus rhamnosus a reuteri pro urogenitální kolonizaci)"
      ],
      naturalSources: "Broskve, jablka, pomeranče, brusinky a bobulovité ovoce v nepatrném množství.",
      bannedStatus: "Povoleno WADA, volně prodejný doplněk stravy a zdravotnický prostředek."
    },
    {
      id: 156,
      name: "Rutin & Hesperidin (Ascorutin komplex)",
      categoryKey: "health",
      tags: ["cévy", "žíly", "křečové žíly", "kapiláry", "bioflavonoidy", "lékárna"],
      rating: 4.7,
      colorType: "neon-yellow",
      shortDesc: "Klíčové rostlinné bioflavonoidy zpevňující kapilární stěnu, snižující její propustnost a podporující žilní návrat.",
      description: "Rutin (rutosid) a hesperidin jsou citrusové a pohankové glykosidické bioflavonoidy tradičně označované jako vitamín P. Zvyšují tonus žilních stěn a lymfatických cév, inhibují enzym hyaluronidázu (která štěpí mezibuněčný cement cévní stěny) a chrání endotel před volnými radikály. Tím dramaticky snižují křehkost a permeabilitu krevních vlásečnic (kapilár), brání tvorbě petechií, modřin, epistaxe (krvácení z nosu) a otoků dolních končetin při chronické žilní insuficienci a hemoroidech. V lékárnách je nejznámější kombinace s vitamínem C (Ascorutin).",
      effects: [
        "Zpevnění cévní stěny a snížení křehkosti a lámavosti kapilár",
        "Prevence a úleva při křečových žilách, otocích nohou a těžkých nohou",
        "Léčba a prevence hemoroidálních uzlů a zánětů žil",
        "Zastavení krvácivosti z dásní a spontánního krvácení z nosu"
      ],
      dosage: {
        short: "500 – 1 000 mg rutinu denně rozděleně do 2 dávek společně s vitamínem C",
        long: "Běžná dávka je 500 mg 1x až 2x denně s jídlem. Vždy kombinujte s minimálně 200–500 mg vitamínu C, se kterým bioflavonoidy vykazují silný synergismus v syntéze a stabilizaci kolagenu v cévním endotelu."
      },
      warning: "Velmi dobrá snášenlivost. Opatrnost při souběžném užívání silných antikoagulancií vzhledem k mírnému antiagregačnímu působení.",
      mechanism: "Inhibice hyaluronidázy a katechol-O-methyltransferázy (COMT), ochrana endogenního noradrenalinu vedoucí k udržení venózního tonu; potlačení oxidační degradace kolagenu.",
      halfLife: "T1/2 metabolitů rutinu (kvercetin glukuronidů) cca 11–18 hodin",
      interactions: [
        "Vitamín C (esenciální synergie pro ochranu kolagenu v cévách)",
        "Diosmin a Mikronizovaný Hesperidin (klinický zlatý standard pro žilní insuficienci / Detralex)"
      ],
      naturalSources: "Pohanka (Fagopyrum esculentum - nejbohatší zdroj), kůra citrusových plodů, jablka, aronie, černý rybíz.",
      bannedStatus: "Povoleno WADA, volně prodejný bioflavonoid."
    },
    {
      id: 157,
      name: "Česnekový extrakt (Allicin standardizovaný)",
      categoryKey: "health",
      tags: ["srdce", "tlak", "cholesterol", "imunita", "lékárna"],
      rating: 4.7,
      colorType: "neon-green",
      shortDesc: "Koncentrovaný extrakt z česneku se standardizovaným potenciálem uvolnění allicinu pro snížení krevního tlaku a lipidů.",
      description: "Česnek setý (Allium sativum) obsahuje sirnou aminokyselinu alliin a enzym alliinázu, které při narušení buněčné stěny syntetizují nestabilní, avšak vysoce bioaktivní sloučeninu allicin (diallyldisulfid). Allicin a jeho metabolity stimulují produkci sirovodíku (H2S) a oxidu dusnatého (NO) v cévním řečišti, což vyvolává hyperpolarizaci hladké svaloviny cév a snížení krevního tlaku srovnatelné s monoterapií mírnými antihypertenzivy. Současně allicin inhibuje klíčový enzym syntézy cholesterolu v játrech (HMG-CoA reduktázu) a působí jako širokospektrální přírodní antimikrobiotikum.",
      effects: [
        "Průkazné snížení systolického i diastolického krevního tlaku (o 5–10 mmHg)",
        "Snížení celkového a oxidovaného LDL cholesterolu v plazmě",
        "Prevence tvorby aterosklerotických plátů a krevních sraženin",
        "Antimikrobiální, protiplísňový a antiparazitární účinek v trávicím traktu"
      ],
      dosage: {
        short: "600 – 1 200 mg extraktu se standardizací na min. 1,2 % allicinu (cca 6–10 mg allicinu) denně s jídlem",
        long: "Užívejte enterosolventní tablety nebo zrající extrakt z černého česneku (Aged Garlic Extract / Kyolic v dávce 600–1 200 mg denně). Enterosolventní potah chrání enzym alliinázu před zničením kyselinou chlorovodíkovou v žaludku a zabraňuje nepříjemnému zápachu z úst."
      },
      warning: "Česnek mírně ředí krev inhibicí agregace trombocytů. Vysaďte 7–10 dní před plánovanou operací nebo porodem. Neužívejte vysoké dávky s léky proti srážlivosti krve bez konzultace s lékařem.",
      mechanism: "Reakce s thiolovou skupinou enzymu HMG-CoA reduktázy a skvalenmonoxygenázy; uvolňování H2S a aktivace endoteliální syntázy oxidu dusnatého (eNOS).",
      halfLife: "T1/2 allicinu v krvi je velmi krátký (minuty), aktivní metabolity přetrvávají 12–24 hodin",
      interactions: [
        "Koenzym Q10 (synergická kardioprotekce a podpora endotelu)",
        "Antikoagulancia a antiagregancia (mírné zvýšení rizika krvácivosti)"
      ],
      naturalSources: "Čerstvý rozdrcený stroužek česneku (nechat 10 minut na vzduchu pro aktivaci alliinázy), zrající černý česnek.",
      bannedStatus: "Povoleno WADA, tradiční potravina a doplněk stravy."
    },
    {
      id: 158,
      name: "Betain HCL s Pepsinem",
      categoryKey: "health",
      tags: ["trávení", "žaludek", "kyselina", "bílkoviny", "americké doplňky"],
      rating: 4.8,
      colorType: "neon-orange",
      shortDesc: "Hydrochlorid betainu s proteolytickým enzymem pepsinem pro obnovu optimálního kyselého žaludečního pH a štěpení bílkovin.",
      description: "Betain hydrochlorid (Betaine HCL) je kyselá forma betainu, která se v žaludeční tekutině okamžitě disociuje na volný betain a kyselinu chlorovodíkovou (HCL). Drtivá většina lidí trpících pálením žáhy a refluxem po 30. roce života netrpí překyselením, nýbrž hypochlorhydrií (nedostatkem žaludeční kyseliny), což brání uzavření dolního jícnového svěrače (LES). Betain HCL sráží pH žaludku do optimálního rozmezí 1,5–2,0, což aktivuje neaktivní pepsinogen na proteolytický pepsin, zahajuje denaturaci bílkovin a umožňuje ionizaci a vstřebávání vitamínu B12, železa, zinku a vápníku.",
      effects: [
        "Rychlé odstranění refluxu, pálení žáhy a pocitu těžkého žaludku po jídle",
        "Kompletní rozštěpení zkonzumovaných bílkovin na peptidy a aminokyseliny",
        "Likvidace patogenních bakterií v potravě (antimikrobiální bariéra žaludku)",
        "Obnova vstřebávání mikronutrientů (vitamín B12, železo, hořčík, vápník)"
      ],
      dosage: {
        short: "650 – 1 300 mg (1–2 kapsle) uprostřed velkého bílkovinného jídla",
        long: "Užívejte VŽDY v průběhu nebo bezprostředně po jídle obsahujícím pevné bílkoviny (maso, vejce, sýry). Začněte 1 kapslí (cca 650 mg). Pokud necítíte mírné teplo v žaludku, můžete při dalším velkém jídle navýšit na 2 kapsle. NIKDY neužívejte nalačno nebo před jídlem!"
      },
      warning: "Přísně kontraindikováno při aktivním žaludečním nebo dvanáctníkovém vředu a při souběžném užívání nesteroidních antirevmatik (Ibalgin, Aspirin, Diklofenak) a kortikosteroidů (riziko perforace žaludeční sliznice).",
      mechanism: "Exogenní dodání H+ iontů do žaludečního lumen; acidifikace spouští autokatalytickou přeměnu pepsinogenu na pepsin a stimuluje uvolňování sekretinu v duodenu.",
      halfLife: "Působí lokálně v žaludku po dobu trávení chymu (1–3 hodiny)",
      interactions: [
        "Trávicí enzymy pankreatu (kyselý chymus po přechodu do duodena stimuluje slinivku břišní)",
        "Železo a Vitamín B12 (dramaticky zlepšuje jejich absorpci)",
        "Antacida a inhibitory protonové pumpy / Omeprazol (přímý protichůdný účinek)"
      ],
      naturalSources: "Betain se nachází v červené řepě, špenátu a celozrnných obilovinách; chlorovodíková forma HCL je vyráběna synteticky.",
      bannedStatus: "Povoleno WADA, volně prodejný trávicí doplněk."
    },
    {
      id: 159,
      name: "Komplex trávicích enzymů (Pankreatin, Bromelain, Papain)",
      categoryKey: "health",
      tags: ["trávení", "enzymy", "slinivka", "nadýmání", "GymBeam", "lékárna"],
      rating: 4.8,
      colorType: "neon-cyan",
      shortDesc: "Širokospektrální směs proteáz, amyláz, lipáz a rostlinných enzymů pro rozklad bílkovin, tuků a sacharidů bez nadýmání.",
      description: "Komplexní enzymatické formule kombinují pankreatické enzymy (proteáza, amyláza, lipáza z pankreatinu) s odolnými rostlinnými proteolytickými enzymy (bromelain z ananasu a papain z papáji). Pomáhají enzymaticky rozložit komplexní makronutrienty v tenkém střevě: proteázy štěpí bílkoviny na peptidy, amylázy hydrolyzují škroby na jednoduché cukry a lipázy emulgují triacylglyceroly na mastné kyseliny a glycerol. Zabraňují přechodu nerozštěpených zbytků potravy do tlustého střeva, kde by jinak podléhaly hnilobným a kvasným procesům za vzniku plynů, křečí a toxinů.",
      effects: [
        "Odstranění plynatosti, nadýmání a pocitu plnosti po vydatném jídle",
        "Maximalizace vstřebávání živin a anabolického využití bílkovin u sportovců",
        "Podpora funkce slinivky břišní při enzymatické insuficienci",
        "Systémový protizánětlivý účinek bromelainu při užití nalačno"
      ],
      dosage: {
        short: "1 – 2 kapsle na začátku nebo v průběhu každého hlavního jídla",
        long: "Užívejte 1 až 2 kapsle těsně před prvním soustem nebo uprostřed jídla zapité trochou vody. Pro systémový protizánětlivý účinek na otoky a šlachy (enzymoterapie) se bromelain užívá naopak nalačno 45 minut před jídlem."
      },
      warning: "Neotevírejte kapsle a nevysypávejte obsah do úst (proteázy mohou podráždit sliznici ústní dutiny a jícnu). Alergici na ananas by se měli vyhnout bromelainu.",
      mechanism: "Hydrolytické štěpení peptidových, glykosidických a esterových vazeb v makromolekulách potravy v duodenu a jejunu při neutrálním až mírně zásaditém pH (6,5–8,0).",
      halfLife: "Lokální enzymatická aktivita v GIT cca 2–4 hodiny",
      interactions: [
        "Betain HCL (připravuje natráveninu v žaludku před působením střevních enzymů)",
        "Probiotika (zdravé trávení podporuje symbiotickou střevní mikroflóru)"
      ],
      naturalSources: "Ananas (bromelain), papája (papain), slinivka břišní skotu/vepřů (pankreatin).",
      bannedStatus: "Povoleno WADA, volně prodejný trávicí doplněk."
    },
    {
      id: 160,
      name: "Calcium D-Glucarát",
      categoryKey: "health",
      tags: ["játra", "detoxikace", "estrogen", "glukuronidace", "americké doplňky"],
      rating: 4.8,
      colorType: "neon-green",
      shortDesc: "Vápenatá sůl kyseliny D-glukarové inhibující enzym beta-glukuronidázu pro efektivní vyloučení estrogenu a toxinů játry.",
      description: "Calcium D-Glucarát je v doplňcích stravy vápenatá sůl kyseliny glukarové. V těle slouží jako prekurzor D-glukaro-1,4-laktonu – přirozeného a silného inhibitoru enzymu beta-glukuronidázy. Během fáze II jaterní detoxikace (glukuronidace) játra navazují kyselinu glukuronovou na toxiny, karcinogeny a nadbytečné steroidní hormony (zejména metabolity estrogenu E1 a E2), které jsou následně žlučí vyloučeny do střeva. Přemnožené nezdravé střevní bakterie však produkují beta-glukuronidázu, která tento vazebný svazek rozštěpí a umožní volnému toxickému estrogenu reabsorbovat se zpět do krve (enterohepatální cirkulace). Calcium D-Glucarát tomu spolehlivě zabraňuje.",
      effects: [
        "Odstranění nadbytečného estrogenu a úprava estrogenové dominance u mužů i žen",
        "Prevence vzniku gynekomastie a zadržování vody u sportovců",
        "Podpora fáze II jaterní detoxikace a eliminace chemických karcinogenů",
        "Snížení hladiny celkového a LDL cholesterolu v plazmě"
      ],
      dosage: {
        short: "500 – 1 000 mg 1x až 2x denně s jídlem",
        long: "Standardní dávkování je 500 mg ráno a 500 mg večer s jídlem. Při akutní estrogenové dominanci nebo v průběhu anabolických cyklů lze užívat až 1 500–2 000 mg denně rozděleně."
      },
      warning: "Protože urychluje clearance látek eliminovaných glukuronidací, může mírně snižovat plazmatické hladiny některých léčiv (např. paracetamol, statiny, hormonální přípravky).",
      mechanism: "Konverze na D-glukaro-1,4-lakton v kyselém prostředí; kompetitivní inhibice enzymu beta-glukuronidázy v játrech, žlučových cestách a střevním lumen brání dekonjugaci toxinů a estrogenu.",
      halfLife: "T1/2 cca 4–6 hodin",
      interactions: [
        "DIM (Diindolylmethan - DIM optimalizuje poměr metabolitů 2-OH vs 16-OH, Glucarát zajistí jejich finální vyloučení ze střeva)",
        "TUDCA a Silymarin (kompletní jaterní ochrana a obnova žlučových cest)"
      ],
      naturalSources: "Jablka, grapefruity, pomeranče, brokolice, růžičková kapusta a zelí v nepatrném množství.",
      bannedStatus: "Povoleno WADA, volně prodejný doplněk stravy."
    },
    {
      id: 161,
      name: "Butyrát sodný (Kyselina máselná enterosolventní)",
      categoryKey: "health",
      tags: ["střeva", "IBS", "mikrobiom", "leaky-gut", "lékárna", "bestseller"],
      rating: 4.9,
      colorType: "neon-yellow",
      shortDesc: "Enterosolventní forma mastné kyseliny s krátkým řetězcem (SCFA), primární palivo pro kolonocyty a regeneraci střevní bariéry.",
      description: "Kyselina máselná (Butyrát) je mastná kyselina s krátkým řetězcem (SCFA), kterou přirozeně produkují symbiotické střevní bakterie fermentací prebiotické vlákniny v tlustém střevě. Butyrát pokrývá více než 70 % energetických nároků buněk střevní sliznice (kolonocytů). Působí jako silný inhibitor histondeacetylázy (HDAC), čímž stimuluje genovou expresi proteinů těsných spojů (claudin, occludin) a obnovuje narušenou střevní bariéru (Leaky Gut Syndrome). Současně stimuluje diferenciaci regulačních T-lymfocytů (Treg), čímž potlačuje zánět u syndromu dráždivého tračníku (IBS) a ulcerózní kolitidy. Enterosolventní mikropelety zabraňují vstřebání v žaludku a uvolňují butyrát až v tlustém střevě.",
      effects: [
        "Obnova celistvosti a těsných spojů střevní sliznice (léčba Leaky Gut)",
        "Rychlé zklidnění křečí, průjmů a nepravidelné stolice u IBS",
        "Inhibice prozánětlivých cytokinů a podpora regulačních imunitních buněk",
        "Prevence poškození střevní sliznice při užívání antibiotik a NSAID"
      ],
      dosage: {
        short: "150 – 300 mg čistého butyrátu sodného 1–2x denně po jídle",
        long: "Užívejte 1 enterosolventní kapsli ráno a 1 večer po jídle, zapijte dostatečným množstvím vlažné vody. Kapsle se nesmí kousat ani drtit, aby se nerozpadl speciální obal chránící zápach a účinek před žaludeční kyselinou."
      },
      warning: "Neotevírejte kapsle – samotná kyselina máselná má velmi intenzivní, nepříjemný zápach zkaženého másla. Jinak má preparát vynikající bezpečnostní profil.",
      mechanism: "Inhibice enzymu HDAC (histondeacetyláza) vede k hyperacetylaci histonů a aktivaci transkripce protizánětlivých genů; primární substrát pro beta-oxidaci a syntézu ATP v kolonocytech.",
      halfLife: "T1/2 v krvi několik minut (téměř kompletně spotřebován enterocyty a játry)",
      interactions: [
        "Glutamin (duální výživa střeva: Glutamin sytí tenké střevo, Butyrát tlusté střevo)",
        "BPC-157 (maximální akcelerace hojení střevních zánětů a erozí)",
        "Probiotika a Prebiotika (komplexní obnova mikrobiální eubiózy)"
      ],
      naturalSources: "Máslo a přepuštěné máslo (Ghee - obsahuje cca 3–4 % butyrátu), fermentované sýry; přirozeně vzniká fermentací vlákniny.",
      bannedStatus: "Povoleno WADA, bezpečný fyziologický metabolit a doplněk stravy."
    },
    {
      id: 162,
      name: "Komplex probiotik (Laktobacily & Bifidobakterie)",
      categoryKey: "health",
      tags: ["imunita", "mikrobiom", "střeva", "lékárna", "bestseller"],
      rating: 4.8,
      colorType: "neon-cyan",
      shortDesc: "Širokospektrální komplex živých kultur se zárukou CFU pro kolonizaci střev, modulaci imunity a prevenci dysbiózy.",
      description: "Širokospektrální probiotické formule obsahují desítky miliard CFU (jednotek tvořících kolonie) pečlivě vybraných kmenů rodů Lactobacillus (L. acidophilus, L. rhamnosus GG, L. plantarum, L. casei) a Bifidobacterium (B. lactis, B. longum, B. bifidum). Tyto komenzální mikroorganismy kolonizují hlenovou vrstvu střevního epitelu, produkují kyselinu mléčnou, peroxid vodíku a bakteriociny, které brání přemnožení kvasinek (Candida albicans) a patogenů. Přes Peyerovy plaky modulují slizniční imunitu GALT (tvorba sekretorického IgA) a přes bloudivý nerv (nervus vagus) komunikují přímo s centrální nervovou soustavou (osa střevo-mozek).",
      effects: [
        "Obnova střevní mikroflóry během a po antibiotické léčbě",
        "Posílení slizniční i celkové imunity a tvorby sekretorického IgA",
        "Prevence cestovatelských a infekčních průjmů",
        "Zlepšení nálady a snížení úzkosti přes osu střevo-mozek (psychobiotický efekt)"
      ],
      dosage: {
        short: "10 – 50 miliard CFU denně s lehkým jídlem nebo nalačno",
        long: "Užívejte 1 kapsli denně, ideálně s lehkým studeným jídlem nebo ráno 20 minut před snídaní. Při užívání antibiotik užívejte probiotika s odstupem minimálně 2–3 hodin po požití antibiotika a pokračujte ještě alespoň 3–4 týdny po dobrání léků."
      },
      warning: "Nezapíjejte horkými nápoji ani alkoholem, které živé bakterie usmrcují. U pacientů s těžkou imunosupresí (po transplantaci, akutní chemoterapie) je nutný dohled ošetřujícího lékaře.",
      mechanism: "Kompeticí o vazebná místa na enterocytech vytěsňují patogeny; stimulace produkce mucinu (MUC2), sekrece sIgA a down-regulace zánětlivých signálů TLR4 a NF-kB.",
      halfLife: "Vyžaduje pravidelné doplňování pro udržení kolonizační denzity",
      interactions: [
        "Prebiotika (Inulin, FOS, rezistentní škrob jako potrava pro probiotické kmeny)",
        "Antibiotika (antagonistický efekt, nutný časový odstup min. 3 hodiny)"
      ],
      naturalSources: "Kefír, živý bílý jogurt, kysané zelí, kimchi, kombucha, tempeh.",
      bannedStatus: "Povoleno WADA, esenciální součást lidského mikrobiomu."
    },
    {
      id: 163,
      name: "Zelené superpotraviny (Chlorella & Spirulina)",
      categoryKey: "health",
      tags: ["detoxikace", "chlorofyl", "antioxidanty", "GymBeam", "lékárna"],
      rating: 4.6,
      colorType: "neon-green",
      shortDesc: "Kombinace sladkovodní řasy s rozbitou buněčnou stěnou a modrozelené sinice bohaté na chlorofyl, fykocyanin a mikronutrienty.",
      description: "Chlorella vulgaris a Spirulina platensis představují nejpopulárnější zelené superpotraviny na světě. Chlorella je jednobuněčná sladkovodní řasa s mimořádně vysokou koncentrací chlorofylu a specifickým růstovým faktorem (CGF). Její zmechanizovaně rozbitá buněčná stěna (mechanická desintegrace) funguje v trávicím traktu jako přírodní iontoměnič a absorbent těžkých kovů a xenobiotik. Spirulina je modrozelená sinice bohatá na kompletní rostlinné bílkoviny (až 65 % sušiny), beta-karoten, železo a unikátní antioxidační pigment fykocyanin, který inhibuje enzym NADPH oxidázu (NOX).",
      effects: [
        "Vychytávání a chelatace těžkých kovů a toxinů v trávicím traktu",
        "Podpora krvetvorby díky strukturální podobnosti chlorofylu s hemem",
        "Silný antioxidační a protizánětlivý účinek fykocyaninu",
        "Podpora vitality, energetického metabolismu a alkalizace organismu"
      ],
      dosage: {
        short: "3 – 5 gramů (6–10 tablet) denně zapít sklenicí vody",
        long: "Užívejte 3 až 5 g denně (cca 6–10 malých tablet nebo 1 vrchovatá čajová lžička prášku) 15–30 minut před jídlem. Začněte na poloviční dávce (1–2 g), aby si trávicí trakt přivykl na vysoký obsah chlorofylu a vlákniny."
      },
      warning: "Kupujte výhradně produkty s certifikací čistoty na těžké kovy a microcystiny (toxiny sinic z nekontrolovaných vod). Vzhledem k vysokému obsahu vitamínu K opatrnost při léčbě warfarinem.",
      mechanism: "Fykocyanin selektivně inhibuje NADPH oxidázu a COX-2; chlorofylin tvoří nerozpustné komplexy s polycyklickými aromatickými uhlovodíky a aflatoxiny, čímž brání jejich vstřebání.",
      halfLife: "T1/2 trávicí eliminace 24–48 hodin",
      interactions: [
        "Vitamín C (zvyšuje absorpci obsaženého nehemového železa)",
        "Ostropestřec mariánský (komplexní detoxikační synergie jater a střev)"
      ],
      naturalSources: "Kultivované sladkovodní nádrže a bioreaktory v ekologicky čistých oblastech s vysokým slunečním svitem.",
      bannedStatus: "Povoleno WADA, přírodní potravina a doplněk stravy."
    },
    {
      id: 164,
      name: "C8 MCT Olej (Kyselina kaprylová)",
      categoryKey: "health",
      tags: ["ketóza", "energie", "mozek", "tuky", "BrainMarket", "GymBeam"],
      rating: 4.8,
      colorType: "neon-yellow",
      shortDesc: "100% čistá frakce triglyceridů se středním řetězcem (C8 kyselina kaprylová) pro okamžitou tvorbu mozkových ketonů bez trávení žlučí.",
      description: "C8 MCT olej je vysoce purifikovaná frakce kyseliny kaprylové (oktanové kyseliny, 8 atomů uhlíku), získávaná z kokosového oleje. Na rozdíl od běžných tuků s dlouhým řetězcem (LCT) i delší kyseliny kaprinové (C10) a laurové (C12) nevyžaduje C8 emulgaci žlučovými kyselinami ani štěpení pankreatickou lipázou. Ze střeva putuje portální žílou přímo do jater, kde je okamžitě metabolizován na ketolátky: acetoacetát a beta-hydroxybutyrát (BHB). Ty snadno překonávají hematoencefalickou bariéru a poskytují neuronům a srdečnímu myokardu okamžitý, čistý zdroj ATP nezávislý na inzulínu a glukóze.",
      effects: [
        "Rychlý vzestup hladiny krevních ketonů (BHB) během 15–30 minut",
        "Okamžitá mentální jasnost, fokus a odstranění mozkové mlhy",
        "Stabilní energie bez kolísání krevního cukru a inzulínových píků",
        "Potlačení chuti k jídlu stimulací hormonů sytosti leptinu a peptidu YY"
      ],
      dosage: {
        short: "5 – 15 ml (1 lžička až 1 polévková lžíce) do kávy, čaje nebo jídla",
        long: "Začněte opatrně na 1 čajové lžičce (5 ml) denně. Po adaptaci trávicího traktu (3–5 dní) zvyšte na 1 polévkovou lžíci (10–15 ml) 1x až 2x denně. Oblíbené v tzv. Bulletproof kávě (káva + C8 olej + máslo/ghee) nebo zamíchané do proteinového nápoje."
      },
      warning: "Příliš vysoká počáteční dávka (>15 ml bez předchozí adaptace) vyvolá prudký osmotický efekt v tenkém střevě a akutní průjem (disaster pants). Vždy začínejte pozvolna!",
      mechanism: "Přednostní beta-oxidace v mitochondriální matrici hepatocytů; nadbytek acetyl-CoA je směrován do ketogeneze za vzniku acetoacetátu a beta-hydroxybutyrátu (BHB).",
      halfLife: "Tmax ketonů v krvi 30–60 minut po požití, clearance 3–4 hodiny",
      interactions: [
        "Kofein (synergický stimulant: kofein stimuluje lipolýzu a C8 dodává okamžité ketony pro mozek)",
        "L-Karnitin (podpora transportu mastných kyselin)",
        "Nootropika (Alfa-GPC, Tyrosin pro maximální ranní soustředění)"
      ],
      naturalSources: "Kokosový olej (obsahuje cca 6–7 % C8), palmojádrový tuk, mateřské mléko.",
      bannedStatus: "Povoleno WADA, zdravý funkční lipid."
    },
    {
      id: 165,
      name: "Zázvorový extrakt (Standardizované Gingeroly & Shogaoly)",
      categoryKey: "health",
      tags: ["trávení", "žaludek", "kinetóza", "zánět", "imunita", "lékárna"],
      rating: 4.7,
      colorType: "neon-orange",
      shortDesc: "Standardizovaný extrakt ze zázvoru lékařského s prokinetickým účinkem na žaludeční motilitu a inhibicí receptorů 5-HT3.",
      description: "Zázvor lékařský (Zingiber officinale) obsahuje fenolické bioaktivní látky gingeroly (v čerstvém oddenku) a shogaoly (ve vysušeném extraktu). Působí jako vysoce účinné přírodní prokinetikum – urychluje vyprazdňování žaludku a stimuluje antrální kontrakce, čímž odstraňuje pocit plnosti a městnání potravy. Současně funguje jako periferní i centrální antagonista serotoninových receptorů 5-HT3 v chemorecepční spouštěcí zóně mozkového kmene, což z něj činí nejspolehlivější přírodní lék proti nevolnosti, kinetóze (nevolnost při cestování), těhotenské ranní nevolnosti a pooperační nauzee.",
      effects: [
        "Rychlá eliminace nevolnosti, kinetózy a žaludečního diskomfortu",
        "Zrychlení žaludeční motility a vyprázdnění potravy do střeva",
        "Protizánětlivý účinek srovnatelný s mírnými NSAID přes inhibici COX-2 a 5-LOX",
        "Snížení svalové bolesti a úponových zánětů po těžkém tréninku"
      ],
      dosage: {
        short: "500 – 1 000 mg standardizovaného extraktu (min. 5 % gingerolů) denně s jídlem",
        long: "Preventivně proti kinetóze: 1 000 mg extraktu 30–60 minut před cestou. Pro podporu trávení: 500 mg před nebo s velkým jídlem. Při zánětech kloubů a svalů: 500 mg 2x denně dlouhodobě."
      },
      warning: "Ve velmi vysokých dávkách může mírně ředit krev a dráždit jícen při nedostatečném zapití. Opatrnost při žlučových kamenech (zázvor zvyšuje sekreci žluči).",
      mechanism: "Antagonismus na 5-HT3 a cholinergních M3 receptorech v GIT; potlačení exprese cyklooxygenázy-2 (COX-2) a syntézy prostaglandinů PGE2 a leukotrienů.",
      halfLife: "T1/2 gingerolů cca 1–3 hodiny",
      interactions: [
        "Kurkumin a Piperin (mohutná protizánětlivá synergie pro klouby a střeva)",
        "Trávicí enzymy a Betain HCL (komplexní podpora celého trávicího traktu)"
      ],
      naturalSources: "Čerstvý a sušený oddenek zázvoru lékařského (Zingiber officinale).",
      bannedStatus: "Povoleno WADA, běžné koření a bezpečný doplněk stravy."
    },
    {
      id: 166,
      name: "Vitamín B12 (Methylkobalamin & Adenosylkobalamin)",
      categoryKey: "health",
      tags: ["krev", "nervy", "únava", "B12", "lékárna", "americké doplňky"],
      rating: 4.9,
      colorType: "neon-cyan",
      shortDesc: "Dvě biologicky aktivní koenzymové formy vitamínu B12 pro syntézu DNA, myelinových pochev neuronů a tvorbu erytrocytů.",
      description: "Vitamín B12 (Kobalamin) je esenciální ve vodě rozpustný vitamín s komplexní korinoidní strukturou obsahující atom kobaltu. V lidském těle funguje ve dvou bioaktivních koenzymových formách: Methylkobalamin (nezbytný pro enzym methioninsyntázu, remethylaci toxického homocysteinu na methionin a syntézu SAMe) a Adenosylkobalamin (působí v mitochondriích pro enzym methylmalonyl-CoA mutázu, metabolismus mastných kyselin a syntézu myelinu chránícího nervová vlákna). Běžný lékárenský kyanokobalamin obsahuje kyanidovou skupinu a vyžaduje enzymatickou dekyanaci. Sublingvální pastilky s methylkobalaminem obcházejí nutnost vnitřního faktoru (intrinsic factor) v žaludku a vstřebávají se přímo přes bukální sliznici.",
      effects: [
        "Okamžitá prevence a léčba makrocytární megaloblastické anémie",
        "Podpora tvorby myelinových pochev a regenerace periferních nervů",
        "Dramatické snížení hladiny kardiotoxického homocysteinu v krvi",
        "Odstranění únavy, mozkové mlhy a podpora neurologických funkcí"
      ],
      dosage: {
        short: "500 – 1 000 mcg sublingválně denně nebo obden",
        long: "Nechte sublingvální pastilku nebo kapky volně rozpustit pod jazykem po dobu 1–2 minut, aby došlo k maximální transmukózní absorpci přímo do krevního oběhu. U vegetariánů, veganů, seniorů a osob užívajících Metformin nebo inhibitory protonové pumpy (Omeprazol) je sublingvální suplementace B12 kriticky nezbytná."
      },
      warning: "Extrémně bezpečný vitamín bez horní hranice toxicity (přebytek se vylučuje močí). U aknózní pleti mohou megadávky (>5 000 mcg týdně) přechodně stimulovat kožní bakterie Cutibacterium acnes.",
      mechanism: "Methylkobalamin předává methylovou skupinu homocysteinu za vzniku methioninu v Kennedyho cyklu; adenosylkobalamin přeměňuje methylmalonyl-CoA na sukcinyl-CoA pro Krebsův cyklus.",
      halfLife: "T1/2 jaterních zásob je 1 až 4 roky (jediný vitamín rozpustný ve vodě s masivní jaterní rezervou)",
      interactions: [
        "Kyselina listová / Methylfolát (nerozlučná synergie v metylačním cyklu)",
        "Metformin a Omeprazol (blokují vstřebávání B12 ze stravy, vyžadují suplementaci)"
      ],
      naturalSources: "Hovězí játra, hovězí maso, losos, vejce, sýry (živočišné produkty; rostlinná strava B12 neobsahuje).",
      bannedStatus: "Povoleno WADA, esenciální vitamín."
    },
    {
      id: 167,
      name: "Hloh obecný (Crataegus oxyacantha / Oligomerní procyanidiny)",
      categoryKey: "health",
      tags: ["srdce", "tlak", "cévy", "arytmie", "bylina", "lékárna"],
      rating: 4.7,
      colorType: "neon-green",
      shortDesc: "Královský kardioprotektivní fytoterapeutický extrakt z listů a květů hlohu pro posílení myokardu a mikrocirkulace věnčitých tepen.",
      description: "Hloh obecný a jednosemenný (Crataegus oxyacantha / monogyna) je v evropské fytoterapii a lékárenství nejuznávanějším přírodním kardiotonikem. Standardizovaný extrakt (WS 1442) z listů a květů obsahuje oligomerní proanthokyanidiny (OPC) a flavonoidy (vitexin-rhamnosid, hyperosid). Hloh vykazuje mírný pozitivně inotropní účinek (zvyšuje sílu srdečního stahu bez zvýšení spotřeby kyslíku), negativně dromotropní (stabilizuje převodní systém myokardu a tlumí arytmie) a koronárně vazodilatační efekt. Je oficiálně schválen pro podporu srdeční funkce při mírném srdečním selhávání (NYHA I a II), stařeckém srdci a hypertenzi.",
      effects: [
        "Zvýšení síly a efektivity srdečních stahů a ejekční frakce",
        "Vazodilatace koronárních cév a zlepšení prokrvení myokardu",
        "Zklidnění nervózního bušení srdce (palpitací) a nočních arytmií",
        "Mírné snížení periferního cévního odporu a krevního tlaku"
      ],
      dosage: {
        short: "300 – 900 mg standardizovaného extraktu (min. 18–20 % proanthokyanidinů) denně s jídlem",
        long: "Užívejte 300 mg dvakrát až třikrát denně s jídlem. Hloh působí jemně a kumulativně – plný terapeutický nástup vyžaduje kontinuální užívání po dobu minimálně 6 až 12 týdnů."
      },
      warning: "Pokud užíváte digoxin, beta-blokátory nebo jiné léky na srdce, užívejte hloh pouze po konzultaci s kardiologem (může zesilovat jejich účinek).",
      mechanism: "Inhibice enzymu fosfodiesterázy (PDE-III) vede ke zvýšení cAMP v kardiomyocytech a zvýšení kontraktility; stimulace syntézy endoteliálního NO v cévách; antioxidační ochrana myokardu.",
      halfLife: "T1/2 flavonoidních metabolitů cca 4–8 hodin",
      interactions: [
        "Koenzym Q10 (ultimátní synergie pro mitochondriální bioenergetiku myokardu)",
        "Draslík a Hořčík (stabilizace srdečního rytmu a prevence křečí)"
      ],
      naturalSources: "Listy, květy a zralé červené plody hlohu obecného (Crataegus).",
      bannedStatus: "Povoleno WADA, volně prodejná tradiční léčivá rostlina."
    },
    {
      id: 168,
      name: "Mladý ječmen (Green Barley - Sušená bio šťáva)",
      categoryKey: "health",
      tags: ["antioxidanty", "enzymy", "chlorofyl", "imunita", "lékárna", "bestseller"],
      rating: 4.6,
      colorType: "neon-green",
      shortDesc: "Vakuově sušená šťáva z mladých lístků ječmene bohatá na enzym superoxiddismutázu (SOD), chlorofyl a bioflavonoid 2-O-GIV.",
      description: "Mladý ječmen (Hordeum vulgare) sklizený v době raného růstu (před fází tvorby zrn) představuje jeden z celosvětově nejpopulárnějších zelených elixírů (Green Ways apod.). Špičkové přípravky neobsahují drcenou celulózovou trávu, nýbrž vylisovanou a za studena usušenou šťávu, která je 100% rozpustná a nezatěžuje trávicí trakt. Obsahuje vysoké koncentrace živých antioxidačních enzymů (především superoxiddismutázu - SOD a katalázu), chlorofyl, široké spektrum vitamínů skupiny B, beta-karoten, draslík a unikátní antioxidační glykosid 2-O-glycosylisovitexin (2-O-GIV), který vykazuje vyšší antioxidační potenciál proti peroxidaci lipidů než samotný vitamín E.",
      effects: [
        "Silná neutralizace superoxidových volných radikálů díky enzymu SOD",
        "Podpora acidobazické rovnováhy a alkalizace tkání",
        "Zrychlení hojení zánětů sliznic a epitelů díky chlorofylu",
        "Přirozená enzymatická podpora buněčné energie a detoxikace"
      ],
      dosage: {
        short: "1 čajová lžička (cca 3–5 g) prášku rozmíchaná v chladné vodě 1–2x denně nalačno",
        long: "Rozmíchejte 1 lžičku ve sklenici vlažné nebo studené vody (nikdy teplé, aby se nezničily termolabilní enzymy) a vypijte ráno 20 minut před snídaní. Popíjejte po doušcích."
      },
      warning: "Bezpečný i pro celiaky (v době raného růstu lístků neobsahuje ječmen lepek – lepek vzniká až v zrnech). Začínejte na poloviční dávce, abyste předešli přechodné detoxikační reakci.",
      mechanism: "Enzymatická dismutace superoxidového radikálu enzymem SOD na peroxid vodíku a vodu; bioflavonoid 2-O-GIV inhibuje oxidaci buněčných lipidových membrán; chlorofyl chelatuje cizorodé látky.",
      halfLife: "Enzymatická a trávicí aktivita v těle cca 12–24 hodin",
      interactions: [
        "Chlorella a Spirulina (dokonalá synergie pro celkovou očistu organismu)",
        "Vitamín C (zesílení antioxidační bariéry)"
      ],
      naturalSources: "Mladé zelené výhonky ječmene setého pěstovaného v ekologickém zemědělství.",
      bannedStatus: "Povoleno WADA, přírodní zelená potravina."
    }
  ],

  fatloss: [
    {
      id: 426,
      name: "Zelená káva (Kyselina chlorogenová / Svetol)",
      categoryKey: "fatloss",
      tags: ["metabolismus", "glukóza", "spalovač", "kyselina-chlorogenová", "GymBeam", "lékárna"],
      rating: 4.6,
      colorType: "neon-green",
      shortDesc: "Standardizovaný extrakt z nepražených zelených kávových zrn s kyselinou chlorogenovou tlumící enzym glukózo-6-fosfatázu.",
      description: "Extrakt ze zelené kávy (Green Coffee Bean Extract) se získává z nepražených zrn kávovníku Coffea canephora/arabica. Na rozdíl od pražené kávy, kde pražení rozloží většinu termolabilních polyfenolů, si zelená káva uchovává vysoký obsah kyselin chlorogenových (zejména 5-caffeoylchinové kyseliny). Kyselina chlorogenová je specifickým kompetitivním inhibitorem jaterního enzymu glukózo-6-fosfatázy, čímž snižuje uvolňování glukózy z jaterního glykogenu do krve. Současně tlumí absorpci sacharidů v tenkém střevě, což nutí organismus využívat tukové zásoby jako primární zdroj energie pro bazální metabolismus.",
      effects: [
        "Snížení glykémie a postprandiálního inzulínového píku po jídle",
        "Podpora oxidace mastných kyselin a redukce viscerálního tuku",
        "Inhibice glukózo-6-fosfatázy v játrech",
        "Silný antioxidační účinek na kardiovaskulární systém"
      ],
      dosage: {
        short: "400 – 800 mg standardizovaného extraktu (min. 45–50 % kyseliny chlorogenové) 30 min před jídlem",
        long: "Užívejte 200–400 mg extraktu 2x denně (ideálně před snídaní a před obědem) zapité sklenicí vody. Obsahuje pouze nepatrné množství přirozeného kofeinu (kolem 2–4 %), takže nezpůsobuje nervozitu ani třes."
      },
      warning: "Velmi dobrá snášenlivost. U diabetiků může vést ke snížení potřeby inzulínu nebo perorálních antidiabetik (monitorujte glykémii).",
      mechanism: "Inhibice glukózo-6-fosfáttranslokázy v játrech; aktivace AMPK v kosterních svalech; zpomalení střevní absorpce glukózy inhibicí Na+/glukózového kotransportéru SGLT1.",
      halfLife: "T1/2 metabolitů kyseliny chlorogenové (kyselina kávová a ferulová) cca 2–4 hodiny",
      interactions: [
        "Berberin a Chrom (trojkombinace pro dokonalou kontrolu inzulínové senzitivity)",
        "Zelený čaj EGCG (synergická stimulace termogeneze)"
      ],
      naturalSources: "Nepražená zelená zrna kávovníku (Coffea arabica / canephora).",
      bannedStatus: "Povoleno WADA, bezpečný přírodní rostlinný extrakt."
    },
    {
      id: 427,
      name: "Extrakt z bílých fazolí (Phaseolus vulgaris / Blokátor sacharidů)",
      categoryKey: "fatloss",
      tags: ["sacharidy", "škroby", "blokátor", "amyláza", "lékárna", "GymBeam"],
      rating: 4.5,
      colorType: "neon-yellow",
      shortDesc: "Přírodní glykoproteinový extrakt (Phase 2 / Phaseolamin) blokující alfa-amylázu a zabraňující štěpení komplexních škrobů na cukry.",
      description: "Extrakt z bílých fazolí (Phaseolus vulgaris) je celosvětově nejznámějším a klinicky ověřeným přírodním blokátorem sacharidů (Carb Blocker). Obsahuje specifický rostlinný glykoprotein phaseolamin, který funguje jako přirozený inhibitor slinné a pankreatické alfa-amylázy. Alfa-amyláza je klíčový trávicí enzym odpovědný za štěpení komplexních škrobů (chléb, těstoviny, rýže, brambory) na vstřebatelné jednoduché cukry. Zablokováním tohoto enzymu projdou nestrávené škroby tenkým střevem do tlustého střeva, aniž by se vstřebaly do krevního oběhu, kde fungují jako prebiotická vláknina.",
      effects: [
        "Snížení kalorického příjmu z komplexních škrobových sacharidů až o 60–65 %",
        "Zploštění glykemické křivky po bohatém sacharidovém jídle",
        "Prevence ukládání přebytečných sacharidů do tukových polštářů",
        "Podpora sytosti a prebiotické výživy tlustého střeva"
      ],
      dosage: {
        short: "500 – 1 500 mg standardizovaného extraktu (Phase 2) těsně před jídlem bohatým na sacharidy",
        long: "Užívejte 1 až 3 kapsle (500–1 500 mg) 5–10 minut před velkým sacharidovým jídlem (pizza, těstoviny, pečivo, rýže) zapité velkou sklenicí vody. Blokuje POUZE komplexní škroby, NEFUNGUJE na jednoduché cukry (sladkosti, slazené nápoje, ovoce)!"
      },
      warning: "Nestrávené škroby mohou při prvních užitích v tlustém střevě kvasit a způsobit plynatost nebo kručení v břiše. Začínejte na menší dávce (500 mg).",
      mechanism: "Reverzibilní vazba phaseolaminu na aktivní místo pankreatické alfa-amylázy brání vazbě molekuly škrobu a jeho enzymatické hydrolýze na maltózu a dextriny.",
      halfLife: "Působí lokálně v trávicím traktu po dobu průchodu potravy (cca 2–4 hodiny)",
      interactions: [
        "Chromium Picolinate (kontrola chuti na sladké)",
        "Glucomannan (synergické navození pocitu sytosti a zpomalení vyprazdňování žaludku)"
      ],
      naturalSources: "Bílé fazole (Phaseolus vulgaris). Surové fazole obsahují toxický lektin fytohemaglutinin, proto se užívá výhradně čištěný standardizovaný extrakt.",
      bannedStatus: "Povoleno WADA, volně prodejný doplněk stravy."
    }
  ],

  performance: [
    {
      id: 234,
      name: "ZMA / ZMB6 (Zinek + Hořčík + Vitamín B6)",
      categoryKey: "performance",
      tags: ["regenerace", "spánek", "testosteron", "zinek", "hořčík", "GymBeam", "bestseller"],
      rating: 4.8,
      colorType: "neon-cyan",
      shortDesc: "Kultovní patentovaná noční minerální formule kombinující zinek monomethionin, aspartát hořečnatý a pyridoxin pro hlubokou regeneraci.",
      description: "ZMA (nebo ZMB6) je jednou z celosvětově nejprodávanějších fitness formulí pro noční regeneraci. Původní patentovaná směs obsahuje přesný poměr zinku vázaného na aminokyselinu methionin (Zinek monomethionin a aspartát - 30 mg), hořčíku (Magnesium aspartát - 450 mg) a vitamínu B6 (Pyridoxin HCl - 10,5 mg). Tvrdý trénink a pocení vedou k masivní depleci zinku a hořčíku, což sráží syntézu testosteronu, IGF-1 a oslabuje imunitu. Podání ZMA 30–60 minut před spaním nalačno maximalizuje biologickou dostupnost, navozuje svalové uvolnění přes GABAergní receptory a optimalizuje hormonální profil během spánku.",
      effects: [
        "Prohloubení pomalovlnného spánku (SWS) a urychlení neuromuskulární regenerace",
        "Prevence poklesu volného testosteronu a IGF-1 po vyčerpávajícím tréninku",
        "Snížení nočních svalových křečí a oxidativního stresu ve svalech",
        "Podpora syntézy neurotransmiterů a imunitní obrany"
      ],
      dosage: {
        short: "Muži: 3 kapsle (30 mg Zn, 450 mg Mg, 10,5 mg B6); Ženy: 2 kapsle 30–60 min před spaním",
        long: "Užívejte 30 až 60 minut před ulehnutím do postele na prázdný žaludek. KRITICKY DŮLEŽITÉ: Neužívejte společně s mléčnými výrobky, vápníkem nebo kaseinovým proteinem, protože vápník kompletně blokuje absorpci zinku!"
      },
      warning: "Při užití s vápníkem ztrácí formule účinek. Vitamín B6 může u některých lidí vyvolat velmi živé a intenzivní sny.",
      mechanism: "Aspartát hořečnatý blokuje NMDA receptory a uvolňuje svalový tonus; zinek monomethionin slouží jako kofaktor pro 17beta-HSD enzymy steroidogeneze a thymulin v imunitním systému; B6 působí jako koenzym dekarboxyláz aminokyselin.",
      halfLife: "Dlouhodobá tkáňová homeostáza minerálů",
      interactions: [
        "Vápník a Mléčné výrobky (přísný antagonista – blokuje vstřebávání, dodržet odstup min. 2 hodiny)",
        "Ashwagandha (synergické zklidnění večerního kortizolu a noční anabolismus)",
        "L-Theanin a Glycin (dokonalý stack pro hluboký spánek)"
      ],
      naturalSources: "Kombinace doplňku; zinek a hořčík se vyskytují v dýňových semínkách, hovězím mase a ořeších.",
      bannedStatus: "Povoleno WADA, volně prodejná minerální formule."
    },
    {
      id: 235,
      name: "Cordyceps CS-4 / Sinensis (Kyselina cordycepsová)",
      categoryKey: "performance",
      tags: ["vytrvalost", "kyslík", "ATP", "VO2max", "adaptogen", "GymBeam"],
      rating: 4.8,
      colorType: "neon-yellow",
      shortDesc: "Standardizovaný myceliální extrakt z housenice čínské stimulující buněčnou syntézu ATP a využití kyslíku při vytrvalostním výkonu.",
      description: "Cordyceps sinensis (housenice čínská) je vysoce ceněná parazitická houba tibetských náhorních plošin. Fermentovaný myceliální kmen CS-4 obsahuje vysokou koncentraci adenosinu, cordycepinu (3-deoxyadenosin) a kyseliny cordycepsové (D-mannitol). Cordyceps prokazatelně zvyšuje buněčnou fosforylaci a intracelulární poměr ATP/anorganický fosfát až o 45–55 %. Zároveň zlepšuje difuzní kapacitu plicních sklípků, stimuluje erytropoézu a zvyšuje ventilaci a maximální spotřebu kyslíku (VO2 max) u vytrvalostních sportovců, běžců a cyklistů.",
      effects: [
        "Zvýšení maximální spotřeby kyslíku (VO2 max) a oddálení laktátového prahu",
        "Stimulace mitochondriální syntézy ATP a buněčné bioenergetiky",
        "Zlepšení bronchiální dilatace a kyslíkové výměny v plicích",
        "Podpora vitality, libida a snížení únavy při extrémní fyzické zátěži"
      ],
      dosage: {
        short: "1 000 – 2 000 mg standardizovaného extraktu CS-4 (min. 7–10 % polysacharidů, 0,2 % adenosinu) denně",
        long: "Užívejte 1 000 až 1 500 mg ráno a 500–1 000 mg cca 45 minut před vytrvalostním tréninkem. Užívejte s vodou nalačno nebo s lehkým sacharidovým jídlem. Pro kumulativní nárůst VO2 max je nutné užívat alespoň 3–4 týdny."
      },
      warning: "Cordyceps má mírné imunostimulační a hypoglykemické účinky. Diabetici na inzulínu by měli monitorovat glykémii.",
      mechanism: "Cordycepin strukturálně napodobuje adenosin a moduluje adenosinové A1/A2 receptory; stimulace AMPK a aktivace mitochondriální syntázy ATP; zvýšení NO-dependentní vazodilatace v plicním řečišti.",
      halfLife: "T1/2 adenosinových derivátů cca 2–4 hodiny",
      interactions: [
        "Extrakt z červené řepy a Citrulin (extrémní synergie pro oxid dusnatý a kyslíkovou kapacitu)",
        "Rhodiola Rosea (adaptogenní synergismus pro odolnost vůči hypoxii a stresu)"
      ],
      naturalSources: "Mycelium Cordyceps sinensis a plodnice Cordyceps militaris pěstované na substrátech.",
      bannedStatus: "Povoleno WADA, přírodní medicinální houba."
    }
  ],

  sleep: [
    {
      id: 320,
      name: "Třezalka tečkovaná (Hypericum perforatum / St. John's Wort)",
      categoryKey: "sleep",
      tags: ["nálada", "deprese", "spánek", "CYP3A4", "kritické-interakce", "lékárna"],
      rating: 4.5,
      colorType: "neon-yellow",
      shortDesc: "Tradiční bylinné antidepresivum s hypericinem a hyperforinem; KRITICKÝ lékárenský induktor jaterního enzymu CYP3A4 a P-glykoproteinu.",
      description: "Třezalka tečkovaná (Hypericum perforatum) je nejznámější a klinicky nejprozkoumanější léčivá bylina pro léčbu mírné až středně těžké deprese, úzkosti a sezónní afektivní poruchy. Její bioaktivní složka hyperforin neselektivně inhibuje reuptake serotoninu, dopaminu, noradrenalinu, GABA a L-glutamátu. Zásadní medicínský význam třezalky však spočívá v tom, že je nejsilnějším známým přírodním aktivátorem pregnanového X receptoru (PXR), čímž masivně indukuje jaterní a střevní enzym cytochrom P450 CYP3A4 a efluxní pumpu P-glykoprotein (P-gp). Tím dramaticky urychluje odbourávání stovek léčiv (od antikoncepce přes antidepresiva až po léky na srdce), což může způsobit fatální selhání léčby!",
      effects: [
        "Prokazatelné zlepšení nálady, útlum úzkosti a vnitřního neklidu",
        "Podpora architektury spánku a regulace cirkadiánního rytmu",
        "Neselektivní inhibice zpětného vychytávání monoaminových neurotransmiterů",
        "Kritická farmakologická indukce enzymu CYP3A4 a P-glykoproteinu"
      ],
      dosage: {
        short: "300 mg standardizovaného extraktu (0,3 % hypericinu) 2x až 3x denně s jídlem",
        long: "Standardní klinická dávka je 300 mg extraktu třikrát denně s jídlem (nebo 900 mg v jedné denní dávce). Nástup plného antidepresivního účinku vyžaduje 2 až 4 týdny pravidelného užívání. PŘED ZAHÁJENÍM UŽÍVÁNÍ ZKONTROLUJTE VŠECHNY UŽÍVANÉ LÉKY!"
      },
      warning: "KRITICKÁ VAROVÁNÍ: 1. Přísně zakázáno kombinovat se syntetickými antidepresivy (SSRI, SNRI, IMAO) – hrozí život ohrožující SEROTONINOVÝ SYNDROM! 2. Způsobuje selhání perorální hormonální antikoncepce (nechtěné otěhotnění). 3. Vyvolává fotosenzitivitu kůže (snadné spálení na slunci).",
      mechanism: "Hyperforin moduluje sodíkové gradienty a blokuje synaptosomální reuptake serotoninu a dopaminu; aktivace nukleárního receptoru PXR spouští masivní transkripci genu CYP3A4 a ABCB1 (P-glykoprotein).",
      halfLife: "T1/2 hyperforinu cca 9 hodin, T1/2 hypericinu cca 24–48 hodin",
      interactions: [
        "Hormonální antikoncepce (masivní indukce CYP3A4 způsobuje selhání antikoncepce)",
        "SSRI / Antidepresiva (extrémní riziko serotoninového syndromu)",
        "Warfarin, Cyklosporin, Digoxin, Statiny (prudký pokles účinnosti léčiv)"
      ],
      naturalSources: "Kvetoucí nať třezalky tečkované (Hypericum perforatum).",
      bannedStatus: "Povoleno WADA, volně prodejná léčivá bylina podléhající lékovým varováním."
    },
    {
      id: 321,
      name: "Mučenka pletní (Passiflora incarnata - Extrakt)",
      categoryKey: "sleep",
      tags: ["úzkost", "spánek", "GABA", "zklidnění", "bylina", "lékárna"],
      rating: 4.7,
      colorType: "neon-cyan",
      shortDesc: "Jemný bylinný anxiolytický a sedativní extrakt s obsahem vitexinu modulující GABA-A receptory bez návykovosti a ranní otupělosti.",
      description: "Mučenka pletní (Passiflora incarnata) je tradiční americká léčivá liána, jejíž kvetoucí nať obsahuje bioaktivní flavonoidy (vitexin, isovitexin, orientin) a harmanové alkaloidy. Extrakt z mučenky se váže přímo na GABA-A receptorový komplex (na odlišné vazebné místo než benzodiazepiny) a usnadňuje vazbu kyseliny gama-aminomáselné. Tím tlumí neuronální excitabilitu v limbickém systému a amygdale, eliminuje roztěkanost, somatické projevy stresu a noční přemýšlení (racing thoughts), což umožňuje přirozený a ničím nerušený přechod do hlubokého spánku bez rizika tolerance či ranní kocoviny.",
      effects: [
        "Rychlé odbourání psychického napětí, stresu a generalizované úzkosti",
        "Zkrácení doby usínání a zlepšení kvality a kontinuity spánku",
        "Neuvolňuje svaly natolik, aby způsobila slabost, nezpůsobuje závislost",
        "Synergická součinnost s ostatními spánkovými bylinami (kozlík, meduňka)"
      ],
      dosage: {
        short: "250 – 500 mg standardizovaného suchého extraktu 30–60 minut před spaním",
        long: "Užívejte 250 až 500 mg extraktu zapitého vodou 30–60 minut před ulehnutím do postele. Při denní úzkosti a nervozitě lze užívat menší dávku 150–200 mg 2x denně."
      },
      warning: "Nekombinujte s alkoholem a silnými sedativy (benzodiazepiny, z-hypnotika). Neužívejte před řízením motorových vozidel.",
      mechanism: "Pozitivní allosterická modulace GABA-A receptorů; mírná inhibice monoaminooxidázy (MAO) alkaloidy harmanové řady v nepatrném rozsahu.",
      halfLife: "T1/2 flavonoidních metabolitů cca 4–6 hodin",
      interactions: [
        "Kozlík lékařský a Meduňka (osvědčená lékárenská trojkombinace pro spánek)",
        "L-Theanin a Magnesium Bisglycinát (komplexní večerní ztišení mozku)"
      ],
      naturalSources: "Kvetoucí nadzemní část liány Passiflora incarnata.",
      bannedStatus: "Povoleno WADA, bezpečná léčivá bylina."
    }
  ],

  nootropics: [
    {
      id: 639,
      name: "Ginkgo Biloba (Standardizovaný extrakt EGb 761)",
      categoryKey: "nootropics",
      tags: ["paměť", "prokrvení", "tinitus", "mikrocirkulace", "lékárna", "bestseller"],
      rating: 4.7,
      colorType: "neon-cyan",
      shortDesc: "Globální lékárenský bestseller standardizovaný na 24 % flavonových glykosidů a 6 % terpenolaktonů pro prokrvení mozku a vnitřního ucha.",
      description: "Ginkgo biloba (jinan dvoulaločný) je prehistorický strom, jehož listy poskytují celosvětově nejprodávanější fytoterapeutický nootropní extrakt (klinický standard EGb 761). Extrakt je přesně standardizován na 24 % ginkgoflavonových glykosidů (kvercetin, kempferol) a 6 % terpenických laktonů (ginkgolidy A, B, C a bilobalid). Ginkgolid B je vysoce specifický antagonista faktoru aktivujícího krevní destičky (PAF), čímž snižuje viskozitu krve a brání mikrotrombózám. Bilobalid chrání mitochondrie neuronů před ischémií. Ginkgo prokazatelně zvyšuje perfuzi a mikrocirkulaci v mozkové kůře a vláskových buňkách vnitřního ucha, což z něj činí lék volby pro tinitus (pískání v uších), závratě a vaskulární kognitivní deficit.",
      effects: [
        "Zlepšení mozkové mikrocirkulace, oxygenace a dodávky glukózy do neuronů",
        "Léčba a zmírnění tinitu (hučení a pískání v uších) a závratí vaskulárního původu",
        "Podpora krátkodobé paměti, rychlosti zpracování informací a pozornosti",
        "Ochrana cévního endotelu a prevence syndromu studených rukou a nohou"
      ],
      dosage: {
        short: "120 – 240 mg standardizovaného extraktu (24/6) denně rozděleně s jídlem",
        long: "Standardní klinické dávkování je 60–120 mg dvakrát denně s jídlem (ráno a v poledne). Nástup znatelného klinického účinku na tinitus a kognici vyžaduje minimálně 4 až 8 týdnů kontinuálního užívání."
      },
      warning: "Vzhledem k inhibici PAF mírně prodlužuje dobu krvácení. Neužívejte s warfarinem, nesteroidními antirevmatiky nebo před operacemi bez konzultace s lékařem.",
      mechanism: "Inhibice destičkového aktivačního faktoru (PAF) ginkgolidy snižuje viskozitu krve a agregaci destiček; stimulace endoteliální syntézy NO a prostacyklinu vede k mikrovazodilataci; bilobalid udržuje mitochondriální respiraci a syntézu ATP.",
      halfLife: "T1/2 ginkgolidu A a B je cca 4 hodiny, bilobalidu cca 3 hodiny",
      interactions: [
        "Vinpocetin (synergická cerebrální vazodilatace a perfuze)",
        "Bacopa Monnieri a Lion's Mane (komplexní neuroprotekce a konsolidace paměti)",
        "Antikoagulancia a Warfarin (zvýšené riziko krvácivosti)"
      ],
      naturalSources: "Listy jinanu dvoulaločného (Ginkgo biloba); surové listy a plody obsahují toxické ginkgolové kyseliny, proto se užívá výhradně čištěný extrakt.",
      bannedStatus: "Povoleno WADA, volně prodejný standardizovaný bylinný lék a doplněk."
    },
    {
      id: 640,
      name: "Ženšen pravý (Panax Ginseng / C.A. Meyer)",
      categoryKey: "nootropics",
      tags: ["energie", "vitalita", "adaptogen", "imunita", "lékárna", "americké doplňky"],
      rating: 4.8,
      colorType: "neon-yellow",
      shortDesc: "Král asijských adaptogenů, standardizovaný korejský červený ženšen s obsahem ginsenosidů pro mentální energii a odolnost vůči stresu.",
      description: "Panax ginseng (ženšen pravý, korejský červený ženšen) je nejznámějším a historicky nejvíce ceněným adaptogenem asijské medicíny. Za své účinky vděčí skupině triterpenoidních saponinů nazývaných ginsenosidy (protopanaxadioly Rb1, Rc, Rd a protopanaxatrioly Rg1, Re), které zráním a napařováním kořene přecházejí na vysoce bioaktivní vzácné ginsenosidy (Rg3, Rh2, Compound K). Ženšen normalizuje osu hypotalamus-hypofýza-nadledviny (HPA), zvyšuje citlivost na inzulín, stimuluje syntézu oxidu dusnatého v endotelu a centrálně moduluje neurotransmisi acetylcholinu a dopaminu.",
      effects: [
        "Odstranění chronické mentální i fyzické vyčerpanosti a únavy",
        "Zvýšení pracovní kapacity, soustředění a psychické odolnosti pod tlakem",
        "Podpora erektilní funkce a libida díky stimulaci endoteliálního NO",
        "Posílení vrozené imunity a fagocytární aktivity makrofágů"
      ],
      dosage: {
        short: "200 – 400 mg standardizovaného extraktu (min. 4–10 % ginsenosidů) ráno se snídaní",
        long: "Užívejte 200 až 400 mg kvalitního extraktu ráno nebo dopoledne s jídlem. U fermentovaných forem ženšenu (bohatých na Compound K) postačuje 100–200 mg. Doporučuje se cyklovat: 6–8 týdnů užívání následovaných 2 týdny pauzy."
      },
      warning: "Neužívejte pozdě odpoledne nebo večer (může způsobit nespavost). Opatrnost u lidí s neléčenou hypertenzí.",
      mechanism: "Modulace osy HPA a glukokortikoidních receptorů; aktivace eNOS stimuluje vazodilataci; ginsenosid Rg1 stimuluje uvolňování acetylcholinu v hippocampu.",
      halfLife: "T1/2 ginsenosidů 2–4 hodiny, finální metabolit Compound K cca 12–18 hodin",
      interactions: [
        "Rhodiola Rosea (ultimátní adaptogenní stack proti stresu a vyhoření)",
        "Ginkgo Biloba (klasická synergie pro mentální energii a krevní oběh)",
        "Kofein (ženšen prodlužuje a stabilizuje energetický účinek kofeinu bez propadu)"
      ],
      naturalSources: "Kořen rostliny Panax ginseng (ideálně 6letý korejský červený ženšen).",
      bannedStatus: "Povoleno WADA, volně prodejný přírodní adaptogen."
    }
  ],

  hormones: [
    {
      id: 571,
      name: "DAA (Kyselina D-asparagová / D-Aspartic Acid)",
      categoryKey: "hormones",
      tags: ["testosteron", "LH", "plodnost", "GymBeam", "bestseller"],
      rating: 4.6,
      colorType: "neon-orange",
      shortDesc: "Endogenní D-enantiomer aminokyseliny stimulující uvolňování GnRH a LH a přímou syntézu testosteronu v Leydigových buňkách.",
      description: "Kyselina D-asparagová (DAA) je přirozeně se vyskytující D-aminokyselina, která se fyziologicky akumuluje v neuroendokrinních tkáních: v hypotalamu, adenohypofýze a varlatech. V hypotalamu aktivuje NMDA receptory, což spouští pulzní sekreci gonadoliberinu (GnRH). V hypofýze stimuluje uvolňování luteinizačního hormonu (LH) a růstového hormonu (GH). V Leydigových buňkách varlat DAA přímo upreguluje protein StAR (Steroidogenic Acute Regulatory Protein), který přenáší cholesterol přes mitochondriální membránu, což je rychlost určující krok celé steroidogeneze. U mužů s hraničním testosteronem prokazatelně zvyšuje hladinu volného testosteronu a hustotu spermií.",
      effects: [
        "Akutní vzestup luteinizačního hormonu (LH) a celkového testosteronu (o 30–45 %)",
        "Zvýšení počtu, motility a kvality spermií u subfertilních mužů",
        "Podpora svalové síly, libida a tréninkové agresivity",
        "Stimulace proteinu StAR a mitochondriálního transportu cholesterolu ve varlatech"
      ],
      dosage: {
        short: "3 000 mg (3 g) denně ráno nalačno nebo před tréninkem",
        long: "Standardní klinicky ověřená dávka je 3 000 mg rozpuštěná ve vodě ráno nalačno. Zásadní je DAA cyklovat: užívejte 12 až 14 dní v kuse, poté zařaďte 10–14 dní pauzu. Tělo po cca 2 týdnech aktivuje kompenzační enzym D-aspartát oxidázu (D-ASPO), která DAA odbourává."
      },
      warning: "Při kontinuálním užívání bez pauz ztrácí účinnost a může vést ke zvýšení aromatizace na estradiol nebo mírnému vzestupu prolaktinu. Vždy dodržujte cyklování!",
      mechanism: "Aktivace NMDA receptorů v hypotalamu; up-regulace exprese mRNA proteinu StAR a cytochromu P450scc v mitochondriích Leydigových buněk.",
      halfLife: "T1/2 cca 4–6 hodin (rychle metabolizováno enzymem D-aspartát oxidázou)",
      interactions: [
        "Zinek a Bor (synergie pro snížení SHBG a podporu volného testosteronu)",
        "DIM (Diindolylmethan - prevence aromatizace nově vytvořeného testosteronu na estrogen)"
      ],
      naturalSources: "V nepatrném stopovém množství ve fermentovaných potravinách a klíčcích; pro suplementaci se syntetizuje.",
      bannedStatus: "Povoleno WADA, volně prodejná aminokyselina."
    }
  ]
};

module.exports = wave4Data;
