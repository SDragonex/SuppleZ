/**
 * SuppleZ Complete Peptides & Experimental Compounds Dataset (57 compounds)
 * Scientific medical intelligence inspired by PeptideWiki (https://peptidewiki.cc/)
 */

const experimentalData = [
  {
    id: 700,
    name: "BPC-157",
    categoryKey: "experimental",
    tags: ["peptid", "regenerace", "slachy", "zaludek", "hojeni"],
    rating: 5,
    colorType: "green",
    shortDesc: "Průlomový regenerační pentadekapeptid urychlující hojení šlach, svalů, vazů a střevní sliznice.",
    description: "BPC-157 (Body Protection Compound 157) je syntetický 15-aminokyselinový peptid (sekvence: Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val) odvozený z přirozeného žaludečního proteinu BPC. Je jedním z nejpopulárnějších peptidů současnosti díky schopnosti mimořádně urychlovat angiogenezi (tvorbu nových cév) a migraci fibroblastů do místa poškození. Efektivně regeneruje natržené šlachy (včetně Achillovy šlachy), vazy, svalová zranění a léčí poruchy střevní permeability (leaky gut, IBD, žaludeční vředy) bez systémové toxicity.",
    effects: [
      "výrazné urychlení hojení šlach, vazů a svalových ruptur",
      "silná podpora angiogeneze (tvorba nových kapilár via VEGFR2)",
      "obnova a ochrana žaludeční a střevní sliznice (léčba vředů a leaky gut)",
      "protizánětlivý a cytoprotektivní účinek na játra a vnitřní orgány",
      "přímá stimulace produkce kolagenu typu I v pojivové tkáni"
    ],
    dosage: {
      "short": "250–500 mcg denně subkutánně (nebo orálně na střeva)",
      "long": "Standardní dávka je 250–500 mcg 1–2x denně subkutánně (SubQ) inzulínovou stříkačkou v blízkosti zranění nebo do břišního tuku. Ředění: do 5 mg lahvičky vstříknout 2 ml bakteriostatické vody (BAC water) = koncentrace 2.5 mg/ml (každých 10 dílků na inzulínce U-100 = 250 mcg). Po naředění skladovat v temnu při 2–8 °C (vydrží 3–4 týdny). Pro střevní potíže lze užívat orálně nalačno (stabilní BPC-157 arginát)."
    },
    warning: "Experimentální výzkumný peptid. Z důvodu stimulace angiogeneze (VEGF) je striktně kontraindikován u jedinců s aktivním nádorovým onemocněním. Přísně dbát na sterilitu při ředění a aplikaci.",
    mechanism: "Upregulace transkripčního faktoru časné růstové odpovědi 1 (EGR-1), aktivace exprese receptorů VEGFR2 v endotelu cév a stimulace signální osy FAK-paxillin v tenocytech a fibroblastech vedoucí k migraci buněk a syntéze kolagenu.",
    halfLife: "Plazmatický poločas cca 4 hodiny (tkáňové regenerační signály přetrvávají dny)",
    interactions: [
      "TB-500 (slavný synergický 'Wolverine protocol' pro kompletní regeneraci pohybového aparátu)",
      "GHK-Cu (aditivní stimulace fibroblastů)",
      "NSAID analgetika (BPC-157 chrání žaludek a játra před poškozením způsobeným ibuprofenem)"
    ],
    naturalSources: ["syntetický fragment žaludečního proteinu lidské žaludeční šťávy"],
    bannedStatus: "banned-sport (WADA S2.1), výzkumná substance"
  },
  {
    id: 701,
    name: "TB-500 (Thymosin Beta-4 fragment)",
    categoryKey: "experimental",
    tags: ["peptid", "TB-500", "aktin", "flexibilita", "hojeni"],
    rating: 5,
    colorType: "green",
    shortDesc: "Syntetický bioaktivní fragment thymosinu beta-4 pro buněčnou migraci a regeneraci svalů.",
    description: "TB-500 je syntetický peptid obsahující aktivní doménu přirozeného proteinu thymosinu beta-4 (konkrétně aminokyselinovou sekvenci Ac-Ser-Asp-Lys-Pro-Asp-Met-Ala-Glu-Ile-Glu-Lys-Phe-Asp-Lys-Ser-Lys-Leu-Lys-Lys-Thr-Glu-Thr-Gln-Glu-Lys-Asn-Pro-Leu-Pro-Ser-Lys-Glu-Thr-Ile-Glu-Gln-Glu-Lys-Gln-Ala-Gly-Glu-Ser). Jeho hlavní funkcí je sekvestrace a regulace buněčného stavebního proteinu G-aktinu. Umožňuje rychlou migraci kmenových a endoteliálních buněk do místa zánětu, snižuje tvorbu jizevnaté tkáně, obnovuje flexibilitu vazů a podporuje regeneraci srdečního i kosterního svalu.",
    effects: [
      "rychlá migrace buněk do místa tkáňového poškození",
      "výrazné snížení zánětu a bolesti kloubů a šlach",
      "prevence vzniku adhezí a tuhé jizevnaté tkáně (fibrózy)",
      "zlepšení elasticity a rozsahu pohybu vazů",
      "kardioprotekce a podpora novotvorby kapilár"
    ],
    dosage: {
      "short": "Nasycovací fáze: 2–5 mg týdně; Udržovací: 2 mg každé 2 týdny",
      "long": "Nasycovací protokol: 2 mg 2x týdně (např. pondělí/čtvrtek) subkutánně po dobu 4–6 týdnů. Následně udržovací fáze: 2 mg jednou za 2 až 4 týdny. Ředění: do 5 mg lahvičky 2 ml bakteriostatické vody = 2.5 mg/ml. Skladovat po naředění při 2–8 °C v chladničce."
    },
    warning: "Výzkumná substance. Vzhledem k podpoře migrace buněk a angiogeneze nepoužívat při podezření na onkologické onemocnění. Dopingová látka pod WADA.",
    mechanism: "Sekvestrace monomerního G-aktinu a jeho polymerace na filamentózní F-aktin, což řídí cytoskeletální přestavbu, buněčnou motilitu a hojení; downregulace prozánětlivých cytokinů a enzymů (COX-2, TNF-alfa).",
    halfLife: "Cca 24–48 hodin (působí systémově po celém těle)",
    interactions: [
      "BPC-157 (ideální synergie: BPC-157 působí lokálně na cévy a šlachy, TB-500 systémově na buněčnou mobilitu)",
      "GHK-Cu (synergie v remodelaci tkání)"
    ],
    naturalSources: ["aktivní doména thymosinu beta-4 přítomného v brzlíku a krevních destičkách"],
    bannedStatus: "banned-sport (WADA S2.1), výzkumná látka"
  },
  {
    id: 702,
    name: "GHK-Cu (Měďnatý tripeptid)",
    categoryKey: "experimental",
    tags: ["GHK-Cu", "peptid", "kolagen", "plet", "epigenetika"],
    rating: 5,
    colorType: "green",
    shortDesc: "Přírodní měďnatý tripeptid pro masivní syntézu kolagenu, omlazení pleti a růst vlasů.",
    description: "GHK-Cu je přirozeně se vyskytující tripeptid (glycyl-L-histidyl-L-lysin) v komplexu s dvojmocným iontem mědi (Cu2+). V mladém věku dosahuje v lidské plazmě koncentrace kolem 200 ng/ml, avšak do věku 60 let klesá o 60 % na pouhých 80 ng/ml. Má mimořádnou schopnost resetovat genovou expresi tisíců lidských genů směrem k mladistvému stavu: masivně stimuluje tvorbu kolagenu typu I a III, elastinu a glykosaminoglykanů, remodeluje poškozenou tkáň, stimuluje růst vlasových folikulů a působí jako silný protizánětlivý a antioxidační činitel.",
    effects: [
      "masivní syntéza nového kolagenu a elastinu v kůži i šlachách",
      "obnova tloušťky dermis, vyhlazení vrásek a zpevnění pokožky",
      "stimulace růstu vlasů a zbytnění vlasových folikulů",
      "modulace genové exprese směrem k omlazení tkání",
      "urychlení hojení chirurgických ran a popálenin"
    ],
    dosage: {
      "short": "Injekčně: 1–2 mg denně SubQ; Topicky: 1–3% sérum",
      "long": "Systémový injekční protokol: 1.5–2 mg denně subkutánně po dobu 30–60 dnů. Ředění: 50 mg lahvičku naředit 5 ml bakteriostatické vody = 10 mg/ml (každých 10 dílků na inzulínce U-100 = 1 mg). Topicky: 1–3% kosmetické sérum aplikované na obličej nebo vlasovou pokožku ráno a večer."
    },
    warning: "Při injekční aplikaci může způsobit mírné lokální pálení nebo zčervenání (způsobené iontem mědi). Nepřekračovat doporučené dávkování, aby nedošlo k předávkování mědí.",
    mechanism: "Chelační transport iontů mědi do buněčného jádra; modulace exprese více než 4000 lidských genů (upregulace genů pro kolagen, elastin a metaloproteinázy TIMP, downregulace prozánětlivých cytokinů a TGF-beta).",
    halfLife: "Plazmatický poločas volného tripeptidu je cca 30–60 minut, tkáňové remodelace probíhají kontinuálně",
    interactions: [
      "Vitamín C topický (nekombinovat přímo v jedné směsi: vitamín C může chelatovat měď z peptidu)",
      "BPC-157 (synergie v regeneraci vazů a kůže)"
    ],
    naturalSources: ["lidská krevní plazma, sliny, moč"],
    bannedStatus: "legal (v kosmetice), injekční forma je výzkumná látka"
  },
  {
    id: 703,
    name: "KPV (Alfa-MSH fragment)",
    categoryKey: "experimental",
    tags: ["KPV", "peptid", "streva", "protizanetlivy", "IBD"],
    rating: 5,
    colorType: "green",
    shortDesc: "Silný protizánětlivý C-terminální tripeptid alfa-MSH specifický pro střeva a autoimunitu.",
    description: "KPV je tripeptid tvořený aminokyselinami Lysin-Prolin-Valin (Lys-Pro-Val), který představuje C-terminální aktivní sekvenci přirozeného hormonu alfa-MSH. Vykazuje mimořádně silné protizánětlivé a antimikrobiální účinky, aniž by stimuloval melanogenezi a pigmentaci kůže (nemá pigmentační účinek jako Melanotan). Působí přímo v buněčném jádře na inhibici zánětlivé kaskády NF-kB a je vysoce účinný při léčbě ulcerózní kolitidy, Crohnovy choroby, SIBO a systémových zánětů.",
    effects: [
      "silná suprese chronického střevního zánětu (IBD, kolitida)",
      "přímá inhibice zánětlivého transkripčního faktoru NF-kB",
      "přirozená antimikrobiální aktivita proti Staphylococcus aureus a Candida albicans",
      "zklidnění autoimunitních zánětů kůže (psoriáza, ekzém)"
    ],
    dosage: {
      "short": "200–400 mcg denně subkutánně (nebo orálně enterosolventně)",
      "long": "Aplikuje se subkutánně 200–400 mcg denně. Pro léčbu střevních potíží (kolitida, leaky gut) jsou preferovány enterosolventní kapsle (200–500 mcg denně nalačno), které dopraví KPV přímo do tlustého střeva."
    },
    warning: "Výzkumný peptid. Výborný bezpečnostní profil bez hormonálních vedlejších účinků.",
    mechanism: "Translokace KPV do cytoplazmy a jádra buňky přes transportér PepT1; přímá inhibice translokace podjednotky p65 faktoru NF-kB a blokáda fosforylace IkB-alfa.",
    halfLife: "Plazmatický poločas cca 2 hodiny",
    interactions: [
      "BPC-157 (vrcholný synergický stack pro léčbu těžkých střevních onemocnění)",
      "Glutamin (stavební podpora enterocytů)"
    ],
    naturalSources: ["C-konec přirozeného neuropeptidu alfa-MSH"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 704,
    name: "ARA-290 (Cibinetide)",
    categoryKey: "experimental",
    tags: ["ARA-290", "neuropatie", "nervy", "bolest", "peptid"],
    rating: 5,
    colorType: "green",
    shortDesc: "Peptid odvozený z erytropoetinu specificky regenerující periferní nervy bez vlivu na krev.",
    description: "ARA-290 (Cibinetide / pyroglutamátový 11-aminokyselinový peptid) je průlomový syntetický peptid navržený na základě terciární struktury Helixu B erytropoetinu. Zatímco celý EPO stimuluje tvorbu červených krvinek (což je při dlouhodobé aplikaci nebezpečné zahuštěním krve), ARA-290 se váže výhradně na tzv. 'vrozený opravný receptor' (Innate Repair Receptor - heterodimer EPOR/CD131). Aktivuje masivní regeneraci poškozených tenkých periferních nervových vláken (small fiber neuropathy), potlačuje neuropatickou bolest a hojí chronické diabetické a autoimunitní poškození nervů.",
    effects: [
      "obnova a regenerace tenkých periferních nervových vláken",
      "výrazná redukce chronické neuropatické bolesti a pálení",
      "silný protizánětlivý a tkáňově protektivní účinek",
      "nulový vliv na tvorbu červených krvinek (žádný hematologický vliv na hematokrit)"
    ],
    dosage: {
      "short": "4 mg denně subkutánně po dobu 28–30 dnů",
      "long": "Klinicky ověřený protokol: 4 mg denně subkutánně (SubQ) inzulínovou stříkačkou po dobu 4 týdnů (celková kúra 28–30 dní). Ředění: 16 mg nebo 32 mg lahvičku naředit 2–4 ml bakteriostatické vody."
    },
    warning: "Výzkumná substance. Vyšší cena peptidové kúry. Dávkování vyžaduje přesné dodržování sterility.",
    mechanism: "Selektivní vazba na tkáňový opravný receptor IRR (heteromerní komplex receptoru pro EPO a beta-společného receptoru CD131); aktivace protizánětlivé kaskády a zástava apoptózy Schwannových buněk a neuronů.",
    halfLife: "Plazmatický poločas cca 20 minut, tkáňový reparační efekt přetrvává měsíce po ukončení kúry",
    interactions: [
      "Kyselina alfa-lipoová (ALA) a Benfotiamin (komplementární podpora periferních nervů)",
      "analgetika (postupný pokles nutnosti užívat léky na bolest)"
    ],
    naturalSources: ["strukturní doména Helix B lidského erytropoetinu"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 705,
    name: "Retatrutide (LY-3437943)",
    categoryKey: "experimental",
    tags: ["retatrutide", "trojity-agonista", "GLP-1", "GIP", "glukagon", "lipolyza"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Revoluční trojitý agonista (GLP-1 / GIP / Glukagon) – absolutní král spalování tuků a metabolické akcelerace.",
    description: "Retatrutide (vývojový kód LY-3437943 od společnosti Eli Lilly) je nejpokročilejší peptidový metabolický lék současnosti. Jedná se o 39-aminokyselinový jednolištový peptid modifikovaný mastnou dikyselinou (C20), který působí jako agonista hned na třech klíčových receptorech současně: GLP-1 (potlačení chuti k jídlu), GIP (zlepšení inzulínové senzitivity a ukládání živin do svalů) a nově také na GLUKAGONOVÉM receptoru. Glukagonová komponenta je přelomová: přímo zvyšuje energetický výdej v játrech, akceleruje oxidaci tuků a spalování jaterního tuku, díky čemuž v klinických fázích studie dosáhl průměrného úbytku hmotnosti přes 24 % (nejvíce v celé historii medicíny).",
    effects: [
      "bezprecedentní redukce tělesného tuku (v klinických studiích přes 24 % tělesné váhy)",
      "přímé zvýšení bazálního energetického výdeje a termogeneze přes glukagonový receptor",
      "kompletní eliminace ztukovatění jater (steatózy)",
      "silné potlačení chuti k jídlu, 'potravinového hluku' v mozku a zpomalení vyprazdňování žaludku",
      "masivní zlepšení glykémie, HbA1c a kardiovaskulárních rizikových parametrů"
    ],
    dosage: {
      "short": "Zahajovací: 1–2 mg 1x týdně; Titrace až na 4–8 mg týdně",
      "long": "Aplikuje se subkutánně (SubQ) inzulínovou stříkačkou POUZE JEDNOU TÝDNĚ (stejný den v týdnu). PŘÍSNÁ TITRAČNÍ SCHÉMA: 1. až 4. týden: 1–2 mg týdně. 5. až 8. týden: 4 mg týdně. Následně při dobré toleranci 6–8 mg týdně. Ředění: do 5 mg lahvičky vstříknout 2 ml bakteriostatické vody = 2.5 mg/ml (každých 8 dílků na inzulínce U-100 = 1 mg). Uchovávat při 2–8 °C."
    },
    warning: "Výzkumná substance fáze III. Časté gastrointestinální vedlejší účinky na začátku léčby (nauzea, průjem, reflux – nutno jíst malé porce a dodržovat hydrataci). Vzhledem ke stimulaci glukagonového receptoru dochází k mírnému přechodnému vzestupu klidové tepové frekvence (o 3–8 tepů/min). Kontraindikováno při osobní či rodinné anamnéze medulárního karcinomu štítné žlázy.",
    mechanism: "Vyvážený trojitý agonismus: vazba na receptor GLP-1R (centrální sytost v hypotalamu), GIPR (modulace adipocytů a inzulínu) a GCGR (aktivace jaterní beta-oxidace mastných kyselin a termogeneze).",
    halfLife: "Cca 6 dní (144 hodin – ideální pro stabilní dávkování 1x týdně)",
    interactions: [
      "Inzulín a sulfonylmočoviny (nutno výrazně snížit dávky, riziko hypoglykémie)",
      "orální léčiva (zpomalené vyprazdňování žaludku může mírně zpozdit absorpci perorálních léků)"
    ],
    naturalSources: ["syntetický multireceptorový peptid"],
    bannedStatus: "banned-sport (WADA S2.1 mimetika růstových faktorů a metabolické modulátory), výzkumná látka fáze III"
  },
  {
    id: 706,
    name: "Tirzepatid (Mounjaro / Zepbound)",
    categoryKey: "experimental",
    tags: ["tirzepatid", "duální-agonista", "GLP-1", "GIP", "cukr", "hubnuti"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Schválený duální agonista GIP a GLP-1 receptorů – zásadní průlom v léčbě obezity a diabetu.",
    description: "Tirzepatid je syntetický 39-aminokyselinový peptid s C20 dikyselinovým řetězcem schválený pod názvy Mounjaro (diabetes 2. typu) a Zepbound (obezita). Je prvním schváleným duálním agonistou receptorů GIP (glukózo-dependentní inzulinotropní polypeptid) a GLP-1. V klinických studiích SURPASS a SURMOUNT prokázal výrazně vyšší redukci tělesné hmotnosti (kolem 20–22 %) i lepší glykemickou kontrolu než samotný Semaglutid, s nižším výskytem těžké nauzey díky tlumivému účinku GIP.",
    effects: [
      "výrazná redukce tělesné hmotnosti (průměrný úbytek 15–22 %)",
      "silná obnova citlivosti na inzulín a normalizace glykémie",
      "potlačení chuti k jídlu a eliminace přejídání",
      "zlepšení lipidového profilu a kardiovaskulárních ukazatelů"
    ],
    dosage: {
      "short": "2.5 mg 1x týdně (titrace po 4 týdnech na 5, 7.5, 10 až 15 mg)",
      "long": "Aplikace subkutánně 1x týdně do břicha nebo stehna. Zahájení na 2.5 mg týdně po dobu 4 týdnů (adaptační dávka pro trávicí trakt). Poté postupné navyšování o 2.5 mg každé 4 týdny až na optimální terapeutickou dávku (obvykle 5–10 mg týdně)."
    },
    warning: "Trávicí obtíže při rychlém navýšení dávky (pocit plnosti, zácpa, plynatost). Nutno jíst dostatek bílkovin a cvičit silově k ochraně svalové hmoty.",
    mechanism: "Současná stimulace receptorů pro GIP a GLP-1, která synergicky stimuluje glukózo-dependentní sekreci inzulínu, potlačuje glukagon a tlumí chuťové signály v hypotalamu.",
    halfLife: "Cca 5 dní (116–120 hodin)",
    interactions: [
      "Antidiabetika (riziko hypoglykémie při souběhu)",
      "perorální antikoncepce (doporučena bariérová ochrana první týdny kvůli pomalejšímu vstřebávání)"
    ],
    naturalSources: ["syntetický acylovaný peptid"],
    bannedStatus: "banned-sport (WADA S2.1), prescription-only"
  },
  {
    id: 707,
    name: "Semaglutid (Ozempic / Wegovy)",
    categoryKey: "experimental",
    tags: ["semaglutid", "GLP-1", "hubnuti", "sytost", "diabetes"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Klinicky nejrozšířenější týdenní GLP-1 receptorový agonista pro redukci tuku a sytost.",
    description: "Semaglutid je syntetický analog lidského GLP-1 (s 94% homologní sekvencí) upravený substitucí Aib v pozici 8 a navázáním hydrofobní dikyseliny na lysin v pozici 26. To zajišťuje silnou reverzibilní vazbu na krevní albumin a chrání molekulu před enzymem DPP-4. Působí v mozkovém centru sytosti, vypíná nutkavé myšlenky na jídlo, zpomaluje vyprazdňování žaludku a normalizuje hladiny krevního cukru.",
    effects: [
      "silná redukce chuti k jídlu a celkového kalorického příjmu",
      "průměrný úbytek tělesné hmotnosti 12–15 %",
      "stabilizace hladiny inzulínu a redukce glykémie",
      "kardiovaskulární protekce u diabetiků a obézních pacientů"
    ],
    dosage: {
      "short": "0.25 mg 1x týdně (titrace po měsíci na 0.5 mg, 1.0 mg, max 2.4 mg)",
      "long": "Subkutánní aplikace 1x týdně. Titrace: 1. měsíc 0.25 mg týdně; 2. měsíc 0.5 mg týdně; 3. měsíc 1.0 mg týdně; udržovací dávka pro obezitu (Wegovy) je až 2.4 mg týdně."
    },
    warning: "Při přejedení těžkým nebo tučným jídlem hrozí silná nauzea, zvracení a žaludeční reflux. Riziko pankreatitidy a cholelitiázy (žlučové kameny z rychlého úbytku váhy).",
    mechanism: "Selektivní agonismus GLP-1 receptoru v nucleus tractus solitarii a hypotalamu; zpomalení žaludeční motility; glukózo-dependentní stimulace inzulínu.",
    halfLife: "Cca 7 dní (168 hodin)",
    interactions: [
      "Inzulín (nutno redukovat dávku)",
      "všechny perorální léky (mírné zpoždění absorpce v žaludku)"
    ],
    naturalSources: ["syntetický acylovaný peptidový analog inkretinu"],
    bannedStatus: "banned-sport (WADA S2.1), prescription-only"
  },
  {
    id: 708,
    name: "AOD-9604",
    categoryKey: "experimental",
    tags: ["AOD-9604", "lipolyza", "chrupavky", "peptid", "tuk"],
    rating: 4,
    colorType: "green",
    shortDesc: "Modifikovaný lipolytický fragment růstového hormonu bez vlivu na inzulín a IGF-1.",
    description: "AOD-9604 (Advanced Obesity Drug 9604) je syntetický peptid vyvinutý na Monash University v Austrálii. Představuje C-terminální fragment lidského růstového hormonu (Tyr-hGH 177-191) stabilizovaný disulfidickým můstkem a přidaným tyrosinem. Byl specificky izolován pro jeho schopnost stimulovat lipolýzu (spalování tuků) a inhibovat lipogenezi, aniž by vykazoval nežádoucí účinky celého HGH – nezvyšuje hladinu IGF-1, nezpůsobuje inzulínovou rezistenci a nestimuluje proliferaci buněk. Vykazuje také chondroprotektivní účinky na kloubní chrupavky.",
    effects: [
      "selektivní stimulace lipolýzy v tukových buňkách",
      "inhibice ukládání nových tukových zásob (lipogeneze)",
      "obnova a regenerace kloubní chrupavky (při intraartikulární aplikaci)",
      "žádný vliv na krevní cukr ani stimulaci nádorového růstu (žádný vzestup IGF-1)"
    ],
    dosage: {
      "short": "300–500 mcg denně ráno nalačno subkutánně",
      "long": "Aplikuje se 300–500 mcg subkutánně ráno ihned po probuzení, ideálně 30–60 minut před ranním kardiem nalačno. Ředění: do 5 mg lahvičky vstříknout 2 ml bakteriostatické vody = 2.5 mg/ml (každých 10 dílků = 250 mcg)."
    },
    warning: "Výzkumná substance. Aby fungoval, vyžaduje přísné podávání nalačno (přítomnost inzulínu a sacharidů blokuje lipolytické signály).",
    mechanism: "Upregulace beta-3 adrenergních receptorů v adipocytech a stimulace hormon-senzitivní lipázy (HSL) bez vazby na receptor pro somatotropin (GHR).",
    halfLife: "Plazmatický poločas cca 30 minut, buněčné lipolytické signály přetrvávají několik hodin",
    interactions: [
      "Kofein / Synefrin (synergická stimulace oxidace mastných kyselin)",
      "Sacharidy (inzulín antagonizuje efekt)"
    ],
    naturalSources: ["C-terminální doména lidského somatotropinu"],
    bannedStatus: "banned-sport (WADA S2.2), výzkumná látka"
  },
  {
    id: 709,
    name: "HGH Fragment 176-191",
    categoryKey: "experimental",
    tags: ["HGH-frag", "spalovani-tuku", "lipolyza", "peptid"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Čistý lipolytický fragment somatotropinu – 12.5x silnější spalování tuků než celý růstový hormon.",
    description: "HGH Fragment 176-191 je syntetický peptid reprezentující aminokyselinovou sekvenci 176 až 191 na samém C-konci molekuly lidského růstového hormonu. Tato specifická oblast je zodpovědná za spalování tuků. V laboratorních studiích prokázala schopnost stimulovat lipolýzu 12.5x silněji než celá molekula HGH, přičemž postrádá diabetogenní vlastnosti (nezhoršuje glykémii ani inzulínovou senzitivitu).",
    effects: [
      "extrémní stimulace rozpadu tukových buněk a mobilizace triglyceridů",
      "zacílení na tvrdošíjný viscerální a podkožní tuk",
      "nulový vliv na proliferaci buněk a hladiny IGF-1",
      "udržení svalové hmoty během hypokalorické diety"
    ],
    dosage: {
      "short": "250–500 mcg 1–2x denně nalačno",
      "long": "Aplikuje se 250 mcg ráno nalačno a 250 mcg před spaním (minimálně 2–3 hodiny po posledním jídle) subkutánně inzulínovou stříkačkou. Po aplikaci minimálně hodinu nejíst žádné sacharidy ani tuky."
    },
    warning: "Velmi citlivý na přítomnost inzulínu: konzumace sacharidů před nebo těsně po aplikaci zcela vyruší spalovací účinek.",
    mechanism: "Aktivace beta-3 adrenergní kaskády v adipocytech vedoucí ke zvýšení intracelulárního cAMP a aktivaci lipáz.",
    halfLife: "Cca 15–30 minut",
    interactions: ["L-Karnitin (podpora transportu uvolněných mastných kyselin do mitochondrií)"],
    naturalSources: ["fragment molekuly somatotropinu"],
    bannedStatus: "banned-sport (WADA S2.2), výzkumná látka"
  },
  {
    id: 710,
    name: "Liraglutid (Saxenda / Victoza)",
    categoryKey: "experimental",
    tags: ["liraglutid", "GLP-1", "denni-aplikace", "hubnuti"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "První generace dlouhodobě působícího GLP-1 agonisty pro denní subkutánní podávání.",
    description: "Liraglutid je syntetický acylovaný analog lidského GLP-1 s 97% sekvenční shodou. Zajišťuje stabilní celodenní stimulaci receptoru GLP-1. Používá se v léčbě diabetu 2. typu (Victoza, do 1.8 mg denně) a jako lék na obezitu (Saxenda, až 3.0 mg denně). Na rozdíl od novějšího Semaglutidu a Tirzepatidu vyžaduje každodenní aplikaci.",
    effects: [
      "stabilní celodenní kontrola sytosti a redukce porcí",
      "úbytek tělesné hmotnosti (v průměru 8–10 %)",
      "výrazné zlepšení glykemického profilu",
      "kardiovaskulární ochrana u diabetiků"
    ],
    dosage: {
      "short": "0.6 mg denně (titrace každý týden o 0.6 mg až na 3.0 mg denně)",
      "long": "Aplikuje se 1x denně subkutánně ve stejnou dobu (např. ráno nebo večer). Titrace: 1. týden 0.6 mg; 2. týden 1.2 mg; 3. týden 1.8 mg; 4. týden 2.4 mg; od 5. týdne plná dávka 3.0 mg denně."
    },
    warning: "Vyžaduje každodenní injekce. Způsobuje nauzeu v prvních týdnech titrace. Vyhýbat se při rodinné anamnéze MTC.",
    mechanism: "Reverzibilní vazba na albumin v plazmě via kyselinu palmitovou; aktivace GLP-1 receptorů v hypotalamu a pankreatu.",
    halfLife: "13 hodin (vyžaduje aplikaci jednou za 24 hodin)",
    interactions: ["Inzulín", "perorální léky"],
    naturalSources: ["syntetický rekombinantní analog GLP-1"],
    bannedStatus: "banned-sport (WADA S2.1), prescription-only"
  },
  {
    id: 711,
    name: "Ipamorelin",
    categoryKey: "experimental",
    tags: ["ipamorelin", "GHRP", "čistý-pulz", "regenerace", "HGH"],
    rating: 5,
    colorType: "green",
    shortDesc: "Nejčistší a nejbezpečnější peptidový sekretagog růstového hormonu bez stimulace kortizolu a prolaktinu.",
    description: "Ipamorelin je syntetický pentapeptid (sekvence: Aib-His-D-2-Nal-D-Phe-Lys-NH2) patřící do 3. generace sekretagogů růstového hormonu (GHRP). Je považován za absolutní zlatý standard své kategorie: stimuluje mohutný fyziologický pulz růstového hormonu z hypofýzy přes ghrelinový receptor, ale na rozdíl od starších látek (GHRP-2, GHRP-6, Hexarelin) NEMÁ žádný stimulační vliv na prolaktin, ACTH ani kortizol a nevyvolává vlčí hlad. Zachovává přirozený pulzní charakter sekrece.",
    effects: [
      "stimulace čistého pulzu vlastního růstového hormonu (HGH)",
      "urychlení regenerace šlach, svalů, vazů a kostí",
      "zlepšení kvality hlubokého spánku a noční obnovy sil",
      "podpora spalování podkožního tuku a syntézy kolagenu",
      "žádný vzestup prolaktinu, kortizolu ani hladu"
    ],
    dosage: {
      "short": "100–300 mcg 1–3x denně subkutánně nalačno",
      "long": "Běžná dávka je 100–200 mcg subkutánně inzulínovou stříkačkou těsně před spaním. Lze aplikovat i ráno nalačno nebo po tréninku. Pro maximální účinek se kombinuje v poměru 1:1 s GHRH peptidem (Mod GRF 1-29 / CJC-1295 no DAC - 100 mcg). Ředění: do 5 mg lahvičky 2.5 ml bakteriostatické vody = 2 mg/ml (každých 5 dílků na inzulínce U-100 = 100 mcg). Uchovávat při 2–8 °C."
    },
    warning: "Výzkumná substance. Nutno aplikovat nalačno (minimálně 2 hodiny po jídle bez sacharidů a tuků), protože přítomnost glukózy a mastných kyselin v krvi blokuje vyplavení růstového hormonu.",
    mechanism: "Vysokoselektivní vazba na receptor pro sekretagogy růstového hormonu (GHS-R1a) na somatotrofních buňkách předního laloku hypofýzy bez afinity k jiným neuroendokrinním receptorům.",
    halfLife: "Plazmatický poločas cca 2 hodiny, vyvolaný pulz HGH vrcholí za 30–45 minut",
    interactions: [
      "CJC-1295 No DAC / Mod GRF 1-29 (slavný synergický stack: zdesetinásobí velikost pulzu HGH)",
      "Sacharidy (inzulín potlačuje účinek)"
    ],
    naturalSources: ["syntetický pentapeptid"],
    bannedStatus: "banned-sport (WADA S2.2), výzkumná látka"
  },
  {
    id: 712,
    name: "CJC-1295 No DAC (Mod GRF 1-29)",
    categoryKey: "experimental",
    tags: ["CJC-no-dac", "mod-grf", "GHRH", "pulzní", "regenerace"],
    rating: 5,
    colorType: "green",
    shortDesc: "Modifikovaný tetrasubstituovaný analog GHRH stimulující fyziologické pulzy růstového hormonu.",
    description: "CJC-1295 bez DAC (správně označovaný jako Mod GRF 1-29) je 29-aminokyselinový syntetický analog lidského GHRH, u kterého byly 4 aminokyseliny nahrazeny stabilnějšími variantami (D-Ala2, Gln8, Ala15, Leu27). Tím se zvýšila odolnost peptidu proti štěpení krevním enzymem DPP-4 z původních 2 minut (u Sermorelinu) na cca 30 minut. Zachovává přesný fyziologický pulzní rytmus a v kombinaci s Ipamorelinem vytváří nejúčinnější a nejbezpečnější kombinaci pro stimulaci vlastního HGH.",
    effects: [
      "stimulace fyziologického pulzního vyplavení HGH z hypofýzy",
      "přirozený vzestup cirkulujícího IGF-1 v těle",
      "hluboká podpora NREM spánku a tkáňové regenerace",
      "urychlení lipolýzy a zpevnění pojivových tkání"
    ],
    dosage: {
      "short": "100 mcg 1–3x denně subkutánně nalačno (spolu s Ipamorelinem)",
      "long": "Aplikuje se 100 mcg (nasycovací dávka na receptor) subkutánně těsně před spaním nalačno. Často se natahuje do stejné inzulínové stříkačky společně se 100 mcg Ipamorelinu. Ředění: do 2 mg lahvičky 1 ml BAC water = 2 mg/ml (každých 5 dílků na inzulínce U-100 = 100 mcg)."
    },
    warning: "Výzkumná substance. Může způsobit krátkodobé návaly horka nebo mírné brnění obličeje těsně po aplikaci (způsobené vazodilatací).",
    mechanism: "Specifická vazba na GHRH receptor na somatotrofech v hypofýze, aktivace cAMP kaskády a stimulace syntézy i exocytózy HGH.",
    halfLife: "Cca 30 minut",
    interactions: [
      "Ipamorelin (dokonalá synergie: GHRH otevírá stavidla, GHRP stlačuje spoušť)",
      "mastné kyseliny v krvi (tlumí odpověď)"
    ],
    naturalSources: ["tetrasubstituovaný analog lidského GHRH"],
    bannedStatus: "banned-sport (WADA S2.2), výzkumná látka"
  },
  {
    id: 713,
    name: "CJC-1295 DAC",
    categoryKey: "experimental",
    tags: ["CJC-DAC", "GHRH", "dlouhý-poločas", "kontinuální", "HGH"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "GHRH analog s vazbou na krevní albumin (DAC) zajišťující kontinuální elevaci HGH a IGF-1 po 8 dní.",
    description: "CJC-1295 DAC je tetrasubstituovaný analog GHRH obohacený o Drug Affinity Complex (DAC) tvořený reaktivní skupinou maleimidopropionové kyseliny navázané přes lysin. Tato technologie umožňuje peptidu po vstříknutí okamžitě vytvořit pevnou kovalentní vazbu s cirkulujícím lidským sérovým albuminem. Tím je peptid chráněn před degradací a filtrací v ledvinách a jeho biologický poločas se prodlužuje z 30 minut na neuvěřitelných 6 až 8 dní. Způsobuje kontinuální, nepulzní zvýšení bazálních hladin HGH a IGF-1.",
    effects: [
      "dlouhodobé kontinuální zvýšení bazální hladiny růstového hormonu",
      "stabilní masivní vzestup IGF-1 po dobu celého týdne",
      "pohodlná aplikace pouze 1x až 2x týdně",
      "urychlení regenerace a spalování tuků"
    ],
    dosage: {
      "short": "1–2 mg jednou týdně (nebo 1 mg 2x týdně) subkutánně",
      "long": "Aplikuje se 1–2 mg subkutánně jednou za týden. Na rozdíl od verze bez DAC není nutné hlídat lačnění, jelikož peptid působí nepřetržitě po mnoho dní. Ředění: do 2 mg lahvičky 1 ml BAC water."
    },
    warning: "Vzhledem ke kontinuální nepulzní stimulaci hypofýzy (tzv. GH bleeding) dochází ke ztrátě přirozené pulzace HGH, což může vést k mírné inzulínové rezistenci a retenci vody. Doporučuje se cyklovat (maximálně 8–12 týdnů)."
    ,
    mechanism: "Kovalentní biokonjugace s Cys34 zbytkem endogenního albuminu; kontinuální stimulace GHRH receptorů hypofýzy.",
    halfLife: "6–8 dní (150–200 hodin)",
    interactions: ["Inzulín (kontrolovat glykémii nalačno při dlouhodobém užívání)"],
    naturalSources: ["syntetický biokonjugovaný peptid"],
    bannedStatus: "banned-sport (WADA S2.2), výzkumná látka"
  },
  {
    id: 714,
    name: "Tesamorelin (Egrifta)",
    categoryKey: "experimental",
    tags: ["tesamorelin", "visceralni-tuk", "GHRH", "mozek", "schvaleny"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Klinicky schválený trans-3-hexenoyl analog GHRH redukující viscerální tuk a chránící mozek.",
    description: "Tesamorelin (obchodní název Egrifta) je stabilizovaný analog lidského GHRH skládající se ze 44 aminokyselin s navázanou hydrofobní trans-3-hexenoylovou skupinou na N-konci. Je to jediný peptid své třídy schválený americkou FDA pro redukci patologického viscerálního (břišního) tuku. Kromě dramatického odbourávání hlubokého tuku obklopujícího vnitřní orgány vykazuje v klinických studiích mimořádné prokognitivní účinky: zvyšuje hladinu GABA a myoinositolu v mozku a zlepšuje kognitivní funkce u pacientů s mírnou kognitivní poruchou (MCI).",
    effects: [
      "specifická masivní redukce viscerálního (útrobního) břišního tuku",
      "přirozená stimulace pulzního vylučování HGH a IGF-1",
      "zlepšení kognitivních funkcí, exekutivní kontroly a paměti",
      "zlepšení lipidogramu a redukce jaterního tuku"
    ],
    dosage: {
      "short": "1–2 mg denně subkutánně na noc nalačno",
      "long": "Standardní klinická dávka je 1–2 mg subkutánně do břišní stěny těsně před spaním nalačno. Ředění: do 2 mg lahvičky 1 ml přiloženého sterilního rozpouštědla. Kúra obvykle trvá 3 až 6 měsíců."
    },
    warning: "Léčivo na předpis / výzkumná látka. Může způsobit lokální zarudnutí v místě vpichu, mírné otoky kloubů a syndrom karpálního tunelu. Kontraindikováno při aktivním nádorovém onemocnění.",
    mechanism: "Aktivace receptorů GHRH v adenohypofýze; selektivní stimulace lipolýzy ve viscerálních adipocytech přes zvýšení IGF-1 a potlačení syntézy mastných kyselin.",
    halfLife: "Plazmatický poločas cca 26–38 minut",
    interactions: ["Látky ovlivňující cytochrom P450 (HGH indukuje enzymatický metabolismus)"],
    naturalSources: ["syntetický N-terminálně modifikovaný peptid"],
    bannedStatus: "banned-sport (WADA S2.2), prescription-only"
  },
  {
    id: 715,
    name: "GHRP-2 (Pralmorelin)",
    categoryKey: "experimental",
    tags: ["GHRP-2", "HGH-stimulace", "peptid", "regenerace"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Vysoce potentní syntetický hexapeptid stimulující masivní pulzy růstového hormonu.",
    description: "GHRP-2 (Pralmorelin) je syntetický hexapeptid (D-Ala-D-2-Nal-Ala-Trp-D-Phe-Lys-NH2) druhé generace sekretagogů růstového hormonu. Je podstatně silnější v produkci HGH než starší GHRP-6. Působí přes ghrelinové receptory a stimuluje silné vyplavení růstového hormonu. Oproti GHRP-6 způsobuje méně agresivní pocit hladu, ale při vyšších dávkách (>200 mcg) může mírně zvyšovat hladiny prolaktinu a kortizolu.",
    effects: [
      "silné pulzní vyplavení růstového hormonu z hypofýzy",
      "zvýšení cirkulujících hladin IGF-1",
      "urychlení regenerace svalů a kloubního aparátu",
      "mírná stimulace chuti k jídlu"
    ],
    dosage: {
      "short": "100–200 mcg 2–3x denně subkutánně nalačno",
      "long": "Aplikuje se 100–150 mcg subkutánně inzulínovou stříkačkou ráno nalačno, po tréninku nebo před spaním. Vždy kombinovat se 100 mcg Mod GRF 1-29 pro synergii. Ředění: do 5 mg lahvičky 2.5 ml BAC water."
    },
    warning: "Výzkumná substance. Může vést k mírnému vzestupu kortizolu a prolaktinu při překročení dávky 200 mcg.",
    mechanism: "Agonismus receptoru GHS-R1a s aktivací fosfolipázy C a přímou stimulací depolarizace somatotrofů.",
    halfLife: "Cca 30 minut",
    interactions: ["Mod GRF 1-29 (masivní zesílení účinku)", "sacharidy (blokují vyplavení GH)"],
    naturalSources: ["syntetický hexapeptid"],
    bannedStatus: "banned-sport (WADA S2.2), výzkumná látka"
  },
  {
    id: 716,
    name: "GHRP-6",
    categoryKey: "experimental",
    tags: ["GHRP-6", "hlad", "HGH", "peptid", "chut-k-jidlu"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Klasický sekretagog první generace vyvolávající extrémní stimulaci chuti k jídlu.",
    description: "GHRP-6 (His-D-Trp-Ala-Trp-D-Phe-Lys-NH2) je historicky první vyvinutý hexapeptid z rodiny GHRP. Kromě stimulace uvolňování růstového hormonu je proslulý svou schopností vyvolat extrémní, téměř okamžitý vlčí hlad během 20 minut po aplikaci. Využívá se proto v objemových fázích u sportovců, kteří mají potíže ujíst potřebné množství kalorií pro anabolismus, a při léčbě nechutenství a kachexie.",
    effects: [
      "extrémní okamžitá stimulace apetitu a chuti k jídlu",
      "stimulace uvolnění růstového hormonu",
      "ochrana srdečního svalu před ischémií",
      "protizánětlivý účinek v gastrointestinálním traktu"
    ],
    dosage: {
      "short": "100–200 mcg 2–3x denně subkutánně nalačno",
      "long": "Aplikuje se 100 mcg subkutánně 30 minut před plánovaným velkým jídlem. Hlad nastupuje velmi rychle."
    },
    warning: "Způsobuje výrazný vzestup prolaktinu a kortizolu. U disponovaných jedinců může vést k otokům a citlivosti bradavek. Pro čisté HGH bez hladu je lepší Ipamorelin.",
    mechanism: "Silná vazba na ghrelinový receptor GHS-R1a v hypofýze a nucleus arcuatus hypotalamu vyvolávající expresi neuropeptidu Y (NPY).",
    halfLife: "20–30 minut",
    interactions: ["GHRH peptidy", "inzulín"],
    naturalSources: ["syntetický hexapeptid"],
    bannedStatus: "banned-sport (WADA S2.2), výzkumná látka"
  },
  {
    id: 717,
    name: "Hexarelin",
    categoryKey: "experimental",
    tags: ["hexarelin", "nejsilnejsi-GHRP", "kardioprotekce", "CD36"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Nejpotentnější GHRP hexapeptid s unikátním kardioprotektivním účinkem přes receptory CD36.",
    description: "Hexarelin (Examorelin) je strukturně nejpotentnější sekretagog růstového hormonu ze skupiny GHRP. V testech vyvolává nejvyšší absolutní amplitudu pulzu HGH ze všech peptidů. Mimořádnou vlastností Hexarelinu je jeho vazba na scavenger receptory CD36 v srdci a cévách, což mu dává silné kardioprotektivní vlastnosti: chrání kardiomyocyty před ischémií, zlepšuje ejekční frakci levé komory a snižuje fibrózu srdeční tkáně.",
    effects: [
      "maximální možná stimulace amplitudy pulzu HGH",
      "silná kardioprotekce a podpora funkce srdečního svalu",
      "urychlení hojení kostí, šlach a svalové tkáně",
      "žádný vliv na chuť k jídlu (nevyvolává hlad jako GHRP-6)"
    ],
    dosage: {
      "short": "100–200 mcg subkutánně nalačno (max 4–6 týdnů)",
      "long": "Aplikuje se 100 mcg 1–2x denně subkutánně. DŮLEŽITÉ: Hexarelin způsobuje rychlou desenzitizaci receptorů (toleranci), proto se smí užívat maximálně 4–6 týdnů v kuse s následnou minimálně měsíční pauzou."
    },
    warning: "Rychlý rozvoj tolerance (po 4 týdnech klesá účinnost). Zvyšuje hladinu kortizolu a prolaktinu silněji než jiné GHRP.",
    mechanism: "Duální vazba na receptory GHS-R1a (hypofýza) a receptory CD36 (kardiovaskulární aparát).",
    halfLife: "Cca 70 minut",
    interactions: ["Mod GRF 1-29 (zesílení pulzu)", "sacharidy"],
    naturalSources: ["syntetický hexapeptid"],
    bannedStatus: "banned-sport (WADA S2.2), výzkumná látka"
  },
  {
    id: 718,
    name: "Sermorelin (GHRH 1-29)",
    categoryKey: "experimental",
    tags: ["sermorelin", "GHRH", "spanek", "anti-aging", "hypofyza"],
    rating: 4,
    colorType: "green",
    shortDesc: "Zkrácený bioidentický fragment GHRH pro přirozenou stimulaci noční regenerace.",
    description: "Sermorelin je syntetický 29-aminokyselinový polypeptid reprezentující funkční aminoterminální konec přirozeného lidského růstového hormonu uvolňujícího hormonu (GHRH 1-44). Obsahuje plně zachovanou biologickou aktivitu pro vazbu na receptory hypofýzy. Je oblíben v anti-aging medicíně jako jemný, bezpečný stimulátor nočního uvolňování HGH, který zachovává přirozenou negativní zpětnou vazbu a nezpůsobuje vyčerpání žlázy.",
    effects: [
      "obnova přirozené fyziologické noční sekrece HGH",
      "zlepšení architektury hlubokého pomalovlnného spánku",
      "omlazení stavu kůže, vlasů a nehtů",
      "podpora štíhlé tělesné hmotnosti a regenerace"
    ],
    dosage: {
      "short": "200–500 mcg subkutánně před spaním nalačno",
      "long": "Aplikuje se 200–500 mcg subkutánně inzulínovou stříkačkou cca 30 minut před spaním nalačno (minimálně 2 hodiny po jídle). Ředění: do 5 mg lahvičky 2.5 ml BAC water."
    },
    warning: "Náchylný k rychlému enzymatickému rozkladu v krvi (poločas pouze 10–12 minut), proto vyžaduje vyšší mikrogramové dávky než modifikovaný CJC-1295 no DAC.",
    mechanism: "Specifický agonismus receptoru GHRH-R na somatotrofních buňkách adenohypofýzy.",
    halfLife: "10–12 minut",
    interactions: ["Ipamorelin / GHRP (synergický nárůst amplitudy pulzu)"],
    naturalSources: ["funkční biologická doména lidského GHRH"],
    bannedStatus: "banned-sport (WADA S2.2), prescription-only"
  },
  {
    id: 719,
    name: "MK-677 (Ibutamoren)",
    categoryKey: "experimental",
    tags: ["MK-677", "ibutamoren", "oralni", "HGH", "IGF-1", "hlad"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Perorálně aktivní nepeptidový agonista ghrelinu s celodenním poločasem 24 hodin.",
    description: "MK-677 (Ibutamoren mesylát) je perorálně biologicky dostupná malá molekula fungující jako vysoce potentní agonista ghrelinového receptoru GHS-R1a. Původně byl vyvinut firmou Merck pro léčbu svalové atrofie a osteoporózy u seniorů. Jeho obrovskou výhodou je, že nevyžaduje žádné injekce a má biologický poločas plných 24 hodin. Jediná ranní dávka prokazatelně zvyšuje pulzní sekreci HGH a vede k trvalému, stabilnímu vzestupu cirkulujícího IGF-1 o 40–80 % po dobu několika měsíců.",
    effects: [
      "dlouhodobý vzestup hladin růstového hormonu a IGF-1 bez injekcí",
      "zlepšení hustoty kostí a stimulace syntézy kolagenu",
      "výrazné zlepšení kvality a délky REM a NREM spánku",
      "masivní stimulace chuti k jídlu (výhodné v objemové přípravě)",
      "urychlení hojení šlach a kůže"
    ],
    dosage: {
      "short": "10–25 mg denně orálně (ráno nebo před spaním)",
      "long": "Užívá se 10–25 mg orálně jednou denně. Pokud způsobuje nadměrnou denní ospalost a vlčí hlad, užívejte večer před spaním. Běžně se cykluje (např. 5 dní užívání / 2 dny pauza, nebo 8–12 týdnů v kuse)."
    },
    warning: "Výzkumná substance. Způsobuje zhoršení inzulínové rezistence a vzestup glykémie nalačno (nutno hlídat hladinu cukru v krvi a omezit jednoduché sacharidy; vhodné kombinovat s Berberinem). Zadržuje podkožní vodu v prvních týdnech.",
    mechanism: "Nepeptidový alosterický agonismus receptoru GHS-R1a v hypofýze a hypotalamu napodobující endogenní ghrelin.",
    halfLife: "24 hodin",
    interactions: [
      "Berberin / Metformin (kompenzace inzulínové rezistence vyvolané zvýšeným HGH)",
      "P5P (prevence případného mírného vzestupu prolaktinu)"
    ],
    naturalSources: ["syntetická nepeptidová sloučenina"],
    bannedStatus: "banned-sport (WADA S2.2 sekretagoga HGH), výzkumná látka"
  },
  {
    id: 720,
    name: "Epithalon (Epitalon)",
    categoryKey: "experimental",
    tags: ["epithalon", "telomery", "longevity", "epifyza", "peptid"],
    rating: 5,
    colorType: "green",
    shortDesc: "Průlomový tetrapeptid aktivující telomerázu a prodlužující biologický věk buněk.",
    description: "Epithalon (Epitalon) je syntetický tetrapeptid tvořený sekvencí aminokyselin Ala-Glu-Asp-Gly (AGAG). Byl vyvinut profesorem Vladimírem Khavinsonem v Petrohradském institutu bioregulace na základě extraktu z hovězí epifýzy (Epithalamin). Je celosvětově nejznámějším 'longevity' peptidem: v buněčných kulturách prokazatelně aktivuje enzym telomerázu, prodlužuje telomery lidských fibroblastů za Hayflickův limit, normalizuje cirkadiánní produkci melatoninu a v dlouhodobých studiích na primátech a lidech signifikantně prodloužil délku dožití a snížil kardiovaskulární i onkologickou mortalitu.",
    effects: [
      "aktivace enzymu telomerázy a prodloužení délky telomer v buňkách",
      "obnova přirozené sekrece melatoninu a synchronizace epifýzy",
      "normalizace endokrinní a imunitní rovnováhy při stárnutí",
      "silná antioxidační ochrana a redukce chromozomálních aberací",
      "omlazení tělesných tkání a buněčné integrity"
    ],
    dosage: {
      "short": "5–10 mg denně subkutánně po dobu 10–20 dnů (1–2x ročně)",
      "long": "Khavinsonův protokol: 5–10 mg subkutánně (nebo intramuskulárně) denně ráno po dobu 10 až 20 po sobě jdoucích dnů. Tato kúra se opakuje 1x až 2x ročně. Ředění: do 10 mg lahvičky 2 ml BAC water = 5 mg/ml (každých 20 dílků na inzulínce U-100 = 5 mg). Skladovat při 2–8 °C."
    },
    warning: "Výzkumný peptid. Má mimořádně vysoký bezpečnostní profil bez jakékoliv zjištěné toxicity i při vysokých dávkách.",
    mechanism: "Epigenetická vazba tetrapeptidu na specifické histonové a DNA sekvence promotoru genu hTERT, což vede k rozvolnění chromatinu a indukci transkripce enzymu telomerázy.",
    halfLife: "Plazmatický poločas cca 20–30 minut, epigenetické prodloužení telomer přetrvává",
    interactions: [
      "Thymosin Alpha-1 (synergická kombinace pro kompletní omlazení imunity a epifýzy)",
      "NAD+ donory"
    ],
    naturalSources: ["syntetický tetrapeptid odvozený z hovězího pineálního peptidu Epithalaminu"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 721,
    name: "MOTS-c",
    categoryKey: "experimental",
    tags: ["MOTS-c", "mitochondrie", "AMPK", "metabolismus", "longevity"],
    rating: 5,
    colorType: "green",
    shortDesc: "Mitochondriální peptid kódovaný v 12S rRNA působící jako master regulátor metabolické flexibility.",
    description: "MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA Type-c) je revoluční 16-aminokyselinový peptid kódovaný přímo v mitochondriální DNA (objeven v roce 2015 na USC). Působí jako mitochondriální hormon: putuje z mitochondrií do buněčného jádra a aktivuje klíčový enzym energetické rovnováhy AMPK (AMP-aktivovanou proteinkinázu). Zvyšuje inzulínovou senzitivitu kosterního svalu, stimuluje oxidaci mastných kyselin a dramaticky zlepšuje fyzickou kapacitu a odolnost vůči metabolickému syndromu.",
    effects: [
      "aktivace AMPK dráhy simulující účinky vytrvalostního cvičení a půstu",
      "výrazné zvýšení citlivosti na inzulín a glukózového vstřebávání ve svalech",
      "stimulace oxidace mastných kyselin a prevence ukládání tuku",
      "zvýšení fyzické výkonnosti, vytrvalosti a kapacity svalů",
      "ochrana před metabolickým stárnutím"
    ],
    dosage: {
      "short": "5–10 mg subkutánně 1–3x týdně (před cvičením)",
      "long": "Protokol: 5 mg subkutánně 2–3x týdně (např. pondělí/středa/pátek) ráno nalačno nebo 30–60 minut před vytrvalostním tréninkem po dobu 4–8 týdnů. Ředění: do 10 mg lahvičky 2 ml BAC water = 5 mg/ml (1 ml roztoku = 5 mg)."
    },
    warning: "Výzkumná substance. V profesionálním sportu zakázáno pod WADA jako metabolický modulátor.",
    mechanism: "Inhibice folátového cyklu vedoucí k akumulaci AICAR a následné silné alosterické aktivaci AMPK nezávisle na poměru ATP/AMP; translokace transportérů GLUT4 do membrány.",
    halfLife: "Cca 2–4 hodiny (metabolické účinky přetrvávají dny)",
    interactions: [
      "Metformin / Berberin (aditivní aktivace AMPK)",
      "SLU-PP-332 (synergie v simulaci vytrvalostního cvičení)"
    ],
    naturalSources: ["mitochondriální genom lidských buněk (12S rRNA)"],
    bannedStatus: "banned-sport (WADA S4.4), výzkumná látka"
  },
  {
    id: 722,
    name: "SS-31 (Elamipretide)",
    categoryKey: "experimental",
    tags: ["SS-31", "elamipretide", "kardiolipin", "mitochondrie", "ATP"],
    rating: 5,
    colorType: "green",
    shortDesc: "Mitochondriálně cílený tetrapeptid vázající se na kardiolipin – záchrana buněčného dýchání.",
    description: "SS-31 (Elamipretide / Bendavia / D-Arg-Dmt-Lys-Phe-NH2) je syntetický tetrapeptid navržený tak, aby volně procházel přes buněčnou i vnější mitochondriální membránu a selektivně se vázal na kardiolipin – unikátní fosfolipid tvořící vnitřní mitochondriální membránu. Kardiolipin je nezbytný pro stabilitu elektronového transportního řetězce (ETC), avšak s věkem oxiduje a degraduje. SS-31 obnovuje strukturu mitochondriálních krist, optimalizuje produkci ATP, dramaticky snižuje produkci reaktivních forem kyslíku (ROS) a regeneruje srdce, ledviny i kosterní svalstvo.",
    effects: [
      "obnova a stabilizace vnitřní mitochondriální membrány",
      "zvýšení syntézy ATP a buněčné bioenergetiky bez produkce ROS",
      "ochrana a regenerace srdečního svalu (léčba srdečního selhání)",
      "obnova funkce ledvin a ochrana před ischemicko-reperfuzním poškozením",
      "zvrácení věkem podmíněného svalového vyčerpání"
    ],
    dosage: {
      "short": "2–5 mg denně subkutánně po dobu 4–8 týdnů",
      "long": "Aplikuje se 2–4 mg subkutánně (SubQ) jednou denně ráno inzulínovou stříkačkou. Ředění: do 50 mg lahvičky vstříknout 5 ml bakteriostatické vody = 10 mg/ml (každých 20 dílků = 2 mg). Kúra trvá 4 až 8 týdnů."
    },
    warning: "Výzkumná substance (fáze III klinického testování). Vynikající bezpečnostní profil.",
    mechanism: "Elektrostatická a hydrofobní vazba na kardiolipin na vnitřní mitochondriální membráně; stabilizace superkomplexů dýchacího řetězce (respirasomů) a prevence uvolňování cytochromu c.",
    halfLife: "Plazmatický poločas cca 2–4 hodiny (mitochondriální akumulace je dlouhodobá)",
    interactions: [
      "NAD+ / NMN (synergie: SS-31 opravuje hardware mitochondrií, NAD+ dodává palivo)",
      "Koenzym Q10"
    ],
    naturalSources: ["syntetický Szeto-Schiller tetrapeptid"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 723,
    name: "Humanin",
    categoryKey: "experimental",
    tags: ["humanin", "mitochondrie", "neuroprotekce", "longevity"],
    rating: 5,
    colorType: "green",
    shortDesc: "Mitochondriální 24-aminokyselinový polypeptid chránící neurony před smrtí a Alzheimerem.",
    description: "Humanin je 24-aminokyselinový peptid kódovaný v mitochondriálním genomu (16S rRNA). Byl objeven v roce 2001 v buňkách pacientů s Alzheimerovou chorobou, které přežily neurodegeneraci. Působí jako endogenní záchranný faktor chránící neurony před apoptózou vyvolanou amyloidem beta a oxidačním stresem. Kromě neuroprotekce zvyšuje inzulínovou senzitivitu a chrání buňky cévního endotelu před aterosklerózou.",
    effects: [
      "silná ochrana neuronů před buněčnou smrtí a toxicitou amyloidu beta",
      "zvýšení citlivosti na inzulín v játrech a svalech",
      "kardioprotekce a ochrana endotelu cév před zánětem",
      "zpomalení systémového buněčného stárnutí"
    ],
    dosage: {
      "short": "1–2 mg subkutánně 2–3x týdně",
      "long": "Aplikuje se subkutánně inzulínovou stříkačkou. Běžný protokol je 1 mg každý druhý den nebo 2 mg 2x týdně po dobu 4–8 týdnů. Ředění: do 10 mg lahvičky 2 ml BAC water."
    },
    warning: "Výzkumný peptid. Omezené množství klinických dat na lidech.",
    mechanism: "Vazba na membránový triformní receptor (gp130/WSX-1/CNTFR) s aktivací STAT3 a vazba na pro-apoptotické proteiny Bax a Bid v cytoplazmě, čímž blokuje buněčnou smrt.",
    halfLife: "Cca 1–2 hodiny",
    interactions: ["MOTS-c (komplementární mitochondriální peptid)"],
    naturalSources: ["mitochondriální genom člověka (16S rRNA)"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 724,
    name: "FOXO4-DRI",
    categoryKey: "experimental",
    tags: ["FOXO4-DRI", "senolytikum", "zombie-bunky", "omlazeni", "peptid"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Cílený D-retro-inverzní senolytický peptid nutící přestárlé 'zombie' buňky spáchat sebevraždu.",
    description: "FOXO4-DRI je syntetický senolytický peptid tvořený sekvencí D-aminokyselin v obráceném pořadí (D-retro-inverso). Vytvořil jej nizozemský tým z Erasmus University. Je specificky navržen tak, aby narušil interakci mezi transkripčním faktorem FOXO4 a nádorovým supresorem p53 v senescentních buňkách. Senescentní buňky ('zombie buňky') se odmítají dělit, ale neumírají a vylučují toxický zánětlivý sekret SASP. FOXO4-DRI uvolní p53 z vazby na FOXO4, což spustí okamžitou apoptózu (sebevraždu) těchto poškozených buněk, zatímco zdravé buňky nechá zcela nedotčené.",
    effects: [
      "cílená eliminace senescentních tkáňových buněk (senolýza)",
      "obnova hustoty srsti/vlasů a svalové síly v preklinických studiích",
      "obnova renálních a plicních funkcí postižených stárnutím",
      "dramatické snížení hladin systémových zánětlivých markerů SASP"
    ],
    dosage: {
      "short": "Pulzní protokol: 2–5 mg subkutánně 3x za týden (kúra jednou za rok)",
      "long": "Jelikož jde o senolytikum, neužívá se kontinuálně! Podává se v krátkém pulzu: 3–5 mg subkutánně obden (celkem 3–4 aplikace) jednou za 6 až 12 měsíců. Ředění: 10 mg lahvičku naředit 2 ml BAC water."
    },
    warning: "Výzkumná látka. Extrémně drahá syntéza (D-retro-inverzní struktura). Vždy dodržovat pulzní charakter podávání.",
    mechanism: "Kompetitivní vazba na transkripční faktor FOXO4, zabránění sekvestraci p53 v buněčném jádře; uvolněný p53 migruje k mitochondriím a aktivuje kaspázy spouštějící apoptózu.",
    halfLife: "Díky D-retro-inverzní konfiguraci je vysoce odolný proti proteázám (poločas v tkáních cca 24–48 hodin)",
    interactions: [
      "Fisetin / Kvercetin (přírodní senolytická synergie)",
      "NMN / NAD+ (podpora regenerace tkání po eliminaci senescentních buněk)"
    ],
    naturalSources: ["syntetický D-retro-inverzní peptid"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 725,
    name: "NAD+ (injekční / IV protokol)",
    categoryKey: "experimental",
    tags: ["NAD+", "energie", "sirtuiny", "mitochondrie", "DNA-oprava"],
    rating: 5,
    colorType: "green",
    shortDesc: "Injekční nikotinamidadenindinukleotid pro okamžitou aktivaci sirtuinů a opravy DNA.",
    description: "NAD+ (nikotinamidadenindinukleotid v oxidované formě) je základní koenzym přítomný v každé buňce, nezbytný pro buněčné dýchání a přenos elektronů v mitochondriích. Slouží také jako nezbytný spotřební substrát pro enzymy dlouhověkosti sirtuiny (SIRT1–SIRT7) a enzymy opravy poškozené DNA (PARP1). S věkem jeho hladina klesá o více než 50 %. Injekční podání (subkutánní nebo nitrožilní infuze) obchází trávicí trakt a jaterní degradaci a dodává intaktní NAD+ přímo do krevního oběhu.",
    effects: [
      "okamžitá obnova buněčné hladiny energie a vitality",
      "přímá aktivace sirtuinů a mitochondriální biogeneze",
      "stimulace enzymů PARP pro opravu zlomů DNA",
      "mentální jasnost, eliminace mozkové mlhy a podpora odvykání závislostí"
    ],
    dosage: {
      "short": "SubQ: 50–100 mg denně; IV infuze: 250–500 mg pomalu",
      "long": "Subkutánní protokol: 50–100 mg subkutánně inzulínovou stříkačkou ráno nalačno (může vyvolat mírné přechodné pálení). Nitrožilní infuze (IV): 250–500 mg ve fyziologickém roztoku podávané velmi pomalu (kapání minimálně 2–3 hodiny, aby se předešlo tlaku na hrudi a křečím v břiše)."
    },
    warning: "Při rychlé intravenózní aplikaci způsobuje svírání na hrudi, návaly horka, křeče v břiše a dušnost (vyžaduje velmi pomalé kapání). Subkutánní aplikace lokálně pálí po dobu 5–10 minut.",
    mechanism: "Přímé zvýšení intracelulárního poměru NAD+/NADH aktivující NAD-dependentní deacetylázy sirtuiny a ADP-ribosyltransferázy.",
    halfLife: "Rychle vychytáván buňkami a metabolizován (plazmatický poločas v minutách)",
    interactions: [
      "Resveratrol (alosterický aktivátor sirtuinů vyžadující NAD+ jako palivo)",
      "TMG (trimethylglycin / betain - nutný donor methylových skupin k prevenci deplece methylace při metabolismu NAD+)"
    ],
    naturalSources: ["endogenní koenzym syntetizovaný v buňkách ze stravy"],
    bannedStatus: "legal (IV infuze >100 ml zakázány WADA z procedurálních důvodů)"
  },
  {
    id: 726,
    name: "Glutathion (injekční / IV protokol)",
    categoryKey: "experimental",
    tags: ["glutathion", "master-antioxidant", "detoxikace", "jatra", "peptid"],
    rating: 5,
    colorType: "green",
    shortDesc: "Master intracelulární antioxidant lidského těla v čisté injekční formě.",
    description: "Glutathion (GSH) je tripeptid tvořený kyselinou glutamovou, cysteinem a glycinem. Je nejdůležitějším intracelulárním antioxidantem a detoxikačním činidlem lidského těla, syntetizovaným převážně v játrech. Neutralizuje toxiny, těžké kovy, reaktivní formy kyslíku a regeneruje ostatní antioxidanty (vitamín C a E). Běžný perorální glutathion je v žaludku rozložen na jednotlivé aminokyseliny; injekční forma (IV infuze nebo intramuskulární injekce) dodává intaktní redukovaný GSH přímo do buněk.",
    effects: [
      "maximální antioxidační ochrana jaterních a mozkových buněk",
      "vazba a eliminace xenobiotik, toxinů a těžkých kovů přes žluč a moč",
      "rozjasnění pokožky a potlačení tvorby melaninu (přeměna eumelaninu na feomelanin)",
      "ochrana mitochondrií a imunitních lymfocytů před oxidačním stresem"
    ],
    dosage: {
      "short": "600–1200 mg 1–2x týdně intramuskulárně nebo pomalou IV infuzí",
      "long": "Aplikuje se 600–1200 mg redukovaného glutathionu (Tationil, TAD-600) rozpuštěného ve sterilní vodě intramuskulárně hluboko do svalu nebo jako pomalá intravenózní infuze. Kúra obvykle trvá 4–8 týdnů."
    },
    warning: "Po naředění sterilní vodou má roztok typický sirovodíkový zápach (způsobený thioly). Roztok musí být čerstvý a bezbarvý – pokud zežloutne, došlo k oxidaci a nesmí se použít.",
    mechanism: "Konjugace s toxickými látkami enzymem glutathion S-transferázou (GST) a neutralizace peroxidů enzymem glutathion peroxidázou (GPx) za vzniku oxidovaného disulfidu GSSG.",
    halfLife: "Plazmatický poločas cca 10–15 minut, v tkáních udržován v redukované formě enzymem glutathion reduktázou",
    interactions: [
      "Vitamín C (udržuje glutathion v aktivním redukovaném stavu)",
      "NAC (perorální prekurzor pro udržení zásob)"
    ],
    naturalSources: ["čerstvá zelenina, maso, endogenní syntéza ve všech lidských buňkách"],
    bannedStatus: "legal (IV infuze nad 100 ml zakázány WADA)"
  },
  {
    id: 727,
    name: "Semax",
    categoryKey: "experimental",
    tags: ["semax", "BDNF", "nootropikum", "mozek", "peptid", "pamet"],
    rating: 5,
    colorType: "green",
    shortDesc: "Ruský neuropeptid odvozený z ACTH vyvolávající masivní stimulaci BDNF a neuroplasticity.",
    description: "Semax je syntetický heptapeptid (sekvence: Met-Glu-His-Phe-Pro-Gly-Pro) vyvinutý v Ústavu molekulární genetiky Ruské akademie věd. Je odvozen z fragmentu adrenokortikotropního hormonu (ACTH 4-10) s přidaným tripeptidem Pro-Gly-Pro pro stabilitu. Nemá žádnou hormonální aktivitu na nadledviny. V mozku způsobuje masivní, rychlý vzestup hladiny mozkového neurotrofického faktoru (BDNF) a jeho receptoru TrkB v hipokampu, urychluje tvorbu nových neuronálních spojení, chrání mozek před ischémií a dramaticky zostřuje paměť, pozornost a mentální energii.",
    effects: [
      "masivní stimulace exprese neurotrofinů BDNF a NGF v mozku",
      "výrazné zlepšení pracovní paměti, soustředění a rychlosti myšlení",
      "silná neuroprotekce proti hypoxii, mrtvici a excitotoxicitě",
      "zvýšení dopaminergní a serotoninergní neurotransmise v prefrontální kůře",
      "potlačení mentální únavy a vyhoření"
    ],
    dosage: {
      "short": "200–600 mcg denně intranasálně (1–2 kapky do každé nosní dírky ráno)",
      "long": "Aplikuje se intranasálně (nosní kapky nebo sprej 0.1% či 1.0%) ráno a případně v poledne. 1 kapka 0.1% roztoku obsahuje 50 mcg. Běžná denní nootropní dávka je 200–400 mcg po dobu 10–14 dnů. Pro pooperační stavy či zotavení po mrtvici se používá silnější 1.0% roztok (až 2000 mcg denně)."
    },
    warning: "Neužívejte pozdě odpoledne nebo večer (může způsobit nespavost kvůli vysoké mozkové stimulaci). Lahvičku s naředěným roztokem uchovávat v chladničce při 2–8 °C.",
    mechanism: "Rychlá aktivace exprese genů pro neurotrofiny BDNF a NGF v hipokampu a frontální kůře; modulace exprese receptorů TrkB a stimulace cholinergního a dopaminergního systému.",
    halfLife: "Plazmatický poločas cca 20–30 minut, downstream neurotrofické účinky přetrvávají 20–24 hodin",
    interactions: [
      "Selank (klasický ruský stack: Semax dává mentální fokus a energii, Selank odstraňuje úzkost a stres)",
      "Alfa-GPC (synergická podpora cholinergní soustavy)"
    ],
    naturalSources: ["syntetický peptid odvozený z neuropeptidu ACTH 4-10"],
    bannedStatus: "legal (v Rusku registrované léčivo, mezinárodně výzkumná látka)"
  },
  {
    id: 728,
    name: "NA-Semax Amidate",
    categoryKey: "experimental",
    tags: ["NA-semax", "amidate", "dlouhy-polocas", "fokus", "BDNF"],
    rating: 5,
    colorType: "green",
    shortDesc: "Acetylovaná a amidovaná verze Semaxu s prodlouženou stabilitou a silnějším průnikem do mozku.",
    description: "NA-Semax Amidate (N-Acetyl Semax Amidate) je moderní synteticky vylepšená molekula Semaxu. Přidáním acetylové skupiny na N-konec a amidové skupiny na C-konec byl peptid ochráněn před degradací aminopeptidázami a karboxypeptidázami. Výsledkem je podstatně vyšší lipofilita, snadnější přestup přes hematoencefalickou bariéru (BBB) a několikanásobně delší biologická stabilita v mozkové tkáni s ještě silnějším účinkem na koncentraci a BDNF než u původního Semaxu.",
    effects: [
      "extrémní soustředění a mentální ostrost trvající celý den",
      "vyšší potence a prodloužené působení oproti běžnému Semaxu",
      "masivní stimulace hipokampální neuroplasticity a BDNF",
      "zvýšená odolnost proti stresu a mentálnímu přetížení"
    ],
    dosage: {
      "short": "100–300 mcg ráno intranasálně nebo subkutánně",
      "long": "Díky vyšší potenci postačuje nižší dávka: 100–300 mcg intranasálně ráno před mentálním výkonem. Lze aplikovat i subkutánně inzulínovou stříkačkou (100–200 mcg). Uchovávat v chladu."
    },
    warning: "Výzkumná substance. Velmi silný stimulační efekt na mozek – začínat na nejnižší dávce 100 mcg. Neužívat večer.",
    mechanism: "Odolnost proti degradaci peptidázami; stimulace TrkB receptorů a indukce exprese mRNA pro BDNF v hipokampu.",
    halfLife: "Prodloužený poločas v CNS (cca 2–4 hodiny, působení celý den)",
    interactions: ["NA-Selank Amidate (vyvážený synergický neuro-stack)"],
    naturalSources: ["synteticky modifikovaný peptid"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 729,
    name: "Selank",
    categoryKey: "experimental",
    tags: ["selank", "anxiolytikum", "GABA", "klid", "nootropikum", "peptid"],
    rating: 5,
    colorType: "green",
    shortDesc: "Ruský neuropeptid odvozený z tuftsinu – silné anxiolytikum bez sedace, otupělosti a závislosti.",
    description: "Selank je syntetický heptapeptid (sekvence: Thr-Lys-Pro-Arg-Pro-Gly-Pro) vyvinutý v Rusku jako analog přirozeného imunomodulačního peptidu tuftsinu. Funguje jako unikátní anxiolytikum a nootropikum: má srovnatelnou účinnost v potlačení úzkosti a paniky jako benzodiazepiny (např. medazepam), avšak s naprosto odlišným profilem – nezpůsobuje žádnou sedaci, ospalost, svalovou slabost, útlum kognice ani závislost. Naopak zlepšuje paměť, soustředění a moduluje expresi interleukinu-6 (IL-6).",
    effects: [
      "výrazné snížení úzkosti, sociálního strachu a vnitřního napětí",
      "zachování plné mentální jasnosti, soustředění a bdělosti bez útlumu",
      "zlepšení konsolidace paměti a schopnosti učení pod stresem",
      "modulace hladiny serotoninu a dopaminu v mozkové kůře",
      "imunomodulační protizánětlivý účinek"
    ],
    dosage: {
      "short": "250–500 mcg 1–2x denně intranasálně (kapky nebo sprej)",
      "long": "Aplikuje se intranasálně 250–500 mcg ráno a v případě potřeby odpoledne. 1 kapka 0.15% roztoku obsahuje cca 75 mcg. Standardní terapeutická kúra trvá 10–14 dnů. Skladovat v chladničce při 2–8 °C."
    },
    warning: "Výborný bezpečnostní profil, nenávykový. Nenahrazuje náhlé vysazení těžkých benzodiazepinů (neslouží k překonání abstinenčního syndromu GABA-A).",
    mechanism: "Allosterická modulace GABA-A receptorů ovlivněním vazby GABA; regulace metabolismu serotoninu a exprese genu pro neurotrofin BDNF; inhibice enzymů štěpících enkefaliny.",
    halfLife: "Plazmatický poločas cca 20 minut, anxiolytický efekt trvá několik hodin",
    interactions: [
      "Semax (klasický ruský stack pro synergii fokus + klid)",
      "alkohol (Selank snižuje kognitivní poškození způsobené alkoholem)"
    ],
    naturalSources: ["syntetický analog přirozeného tetrapeptidu tuftsinu"],
    bannedStatus: "legal (v Rusku registrované léčivo, mezinárodně výzkumná látka)"
  },
  {
    id: 730,
    name: "NA-Selank Amidate",
    categoryKey: "experimental",
    tags: ["NA-selank", "amidate", "anxiolytikum", "GABA", "stres"],
    rating: 5,
    colorType: "green",
    shortDesc: "Acetylovaná a amidovaná forma Selanku s prodlouženým anxiolytickým a stabilizačním účinkem.",
    description: "NA-Selank Amidate (N-Acetyl Selank Amidate) je synteticky modifikovaná verze Selanku s acetylovaným N-koncem a amidovaným C-koncem. Tyto terminální úpravy brání rychlé degradaci enzymy v nosní sliznici a krvi, zvyšují lipofilitu a zajišťují hladký průnik přes hematoencefalickou bariéru. Poskytuje výrazně delší a stabilnější odstranění úzkosti, sociální fobie a stresového napětí než standardní Selank.",
    effects: [
      "dlouhotrvající odstranění úzkosti a nervozity bez otupělosti",
      "zvýšená emoční stabilita a odolnost v náročných situacích",
      "podpora kognitivního výkonu a pracovní paměti pod tlakem",
      "stabilizace nálady bez rizika tolerance"
    ],
    dosage: {
      "short": "100–300 mcg 1–2x denně intranasálně nebo subkutánně",
      "long": "Aplikuje se 100–250 mcg intranasálně ráno a odpoledne. Lze aplikovat i subkutánně inzulínovou stříkačkou (100–200 mcg). Uchovávat při 2–8 °C."
    },
    warning: "Výzkumná substance. Nenávyková alternativa k běžným anxiolytikům.",
    mechanism: "Modulace afinity GABA-A receptorů a stabilizace hladiny enkefalinů v mozku s prodlouženou biologickou dostupností.",
    halfLife: "Prodloužený poločas v CNS (cca 2–4 hodiny)",
    interactions: ["NA-Semax Amidate (ideální komplementární nootropní kombinace)"],
    naturalSources: ["synteticky modifikovaný peptid"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 731,
    name: "Cerebrolysin",
    categoryKey: "experimental",
    tags: ["cerebrolysin", "neurotrofiny", "mrtvice", "mozek", "demence"],
    rating: 5,
    colorType: "green",
    shortDesc: "Standardizovaný neuropeptidový komplex z prasečího mozku s aktivitou podobnou NGF, BDNF a GDNF.",
    description: "Cerebrolysin je přírodní biotechnologicky připravený nízkomolekulární neuropeptidový a aminokyselinový komplex získávaný standardizovanou enzymatickou štěpnou hydrolýzou purifikovaných prasečích mozkových proteinů (vyvinutý v Rakousku firmou EVER Pharma). Obsahuje biologicky aktivní peptidy schopné procházet hematoencefalickou bariérou, které napodobují účinky přirozených neurotrofických faktorů (NGF, BDNF, GDNF, CNTF). Je celosvětově schváleným lékem pro léčbu cévní mozkové příhody, traumatického poranění mozku (TBI) a Alzheimerovy demence.",
    effects: [
      "masivní stimulace neurogeneze a přežití poškozených neuronů",
      "obnova a růst nových synaptických spojení (synaptogeneze)",
      "výrazné urychlení zotavení po úrazech hlavy a mozkové mrtvici",
      "zlepšení kognitivních funkcí, řeči, motoriky a paměti",
      "silná ochrana mozku před excitotoxicitou glutamátu"
    ],
    dosage: {
      "short": "Kognice / biohacking: 2–5 ml intramuskulárně denně po dobu 20 dnů",
      "long": "Aplikuje se intramuskulárně (IM) hluboko do gluteálního svalu nebo pomalou IV infuzí (10–30 ml zředěné ve fyziologickém roztoku). Biohacking protokol: 5 ml denně IM po dobu 5 po sobě jdoucích dnů, 2 dny pauza, po dobu 4 týdnů (celkem 20 ampulí). Ampule se otevírá těsně před aplikací a spotřebuje okamžitě."
    },
    warning: "Léčivo na předpis. Ampule je sterilní roztok připravený k okamžitému použití – nikdy neředit dopředu. Kontraindikováno při těžkém selhání ledvin a status epilepticus.",
    mechanism: "Vazba biologicky aktivních peptidových fragmentů na neurotrofní receptory TrkA, TrkB a Ret; aktivace intracelulárních signálních kaskád PI3K/Akt a MAPK/ERK bránících apoptóze neuronů.",
    halfLife: "Peptidové fragmenty spouštějí trvalé neurotrofické kaskády",
    interactions: [
      "Antidepresiva / MAOI (může zesílit účinek)",
      "Semax (synergická neuroprotekce)"
    ],
    naturalSources: ["purifikovaný enzymatický peptidový hydrolyzát porcinní mozkové tkáně"],
    bannedStatus: "prescription-only"
  },
  {
    id: 732,
    name: "Dihexa (PNB-0408)",
    categoryKey: "experimental",
    tags: ["dihexa", "synaptogeneze", "HGF", "c-Met", "pamet", "nootropikum"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Extrémně potentní oligopeptid – 7x milionkrát účinnější než BDNF ve tvorbě nových nervových synapsí.",
    description: "Dihexa (N-hexanoyl-Tyr-Ile-(6) aminohexanová kyselina / PNB-0408) je syntetický lipofilní oligopeptid odvozený z angiotensinu IV, vyvinutý na Washington State University pro léčbu těžkých kognitivních deficitů a Alzheimerovy choroby. V laboratorních studiích prokázal schopnost stimulovat tvorbu nových nervových spojení (synaptogenezi) s potencí, která je sedmmilionkrát vyšší než u samotného BDNF. Překonává hematoencefalickou bariéru jak orálně, tak transdermálně a spouští masivní dendritické větvení v hipokampu.",
    effects: [
      "masivní tvorba nových funkčních nervových synapsí v mozku",
      "dramatické zlepšení konsolidace dlouhodobé paměti a schopnosti učení",
      "obnova kognitivních funkcí po poškození mozku",
      "vysoká orální i transdermální biologická dostupnost"
    ],
    dosage: {
      "short": "10–20 mg orálně nebo transdermálně 1–2x týdně",
      "long": "Vzhledem k extrémní potenci a dlouhodobému efektu na synaptogenezi se užívá pouze 10–20 mg 1x až 2x týdně (např. pondělí/čtvrtek) orálně s tuky nebo transdermálně rozpuštěné v DMSO. Neužívat denně!"
    },
    warning: "Výzkumná substance. Jelikož aktivuje dráhu HGF/c-Met (která hraje roli i v buněčné motilitě), je STRIKTNĚ KONTRAINDIKOVÁNA u osob s jakýmkoliv podezřením na aktivní onkologické onemocnění.",
    mechanism: "Vysokoafinitní vazba na hepatocytární růstový faktor (HGF), která dimerizuje a alostericky aktivuje tyrozinkinázový receptor c-Met v neuronech.",
    halfLife: "Plazmatický poločas cca několik hodin, vytvořené synaptické sítě přetrvávají trvale",
    interactions: ["Lion's Mane / Noopept (komplementární synaptická podpora)"],
    naturalSources: ["syntetický oligopeptid odvozený z angiotensinu IV"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 733,
    name: "Pinealon",
    categoryKey: "experimental",
    tags: ["pinealon", "bioregulator", "mozek", "hypoxie", "pamet"],
    rating: 4,
    colorType: "green",
    shortDesc: "Krátký peptidový bioregulátor mozkové kůry chránící neurony před stárnutím a nedostatkem kyslíku.",
    description: "Pinealon je syntetický bioregulační tripeptid složený z aminokyselin Glu-Arg-Asp (kyselina glutamová, arginin, kyselina asparagová), vyvinutý v Petrohradském institutu bioregulace. Patří do skupiny Khavinsonových peptidů specifických pro mozkovou kůru. Působí přímo na epigenetické úrovni: normalizuje syntézu bílkovin v neuronech mozkové kůry, chrání mozkové buňky před hypoxií a oxidačním stresem a zlepšuje kognitivní koordinaci a paměť.",
    effects: [
      "ochrana neuronů před nedostatkem kyslíku (hypoxií) a ischemií",
      "zlepšení paměti, mentální koncentrace a schopnosti multitaskingu",
      "obnova narušených funkcí centrálního nervového systému",
      "vysoká odolnost vůči mentálnímu vyčerpání"
    ],
    dosage: {
      "short": "100–200 mcg subkutánně (nebo 10–20 mg orálně) denně po dobu 10–20 dnů",
      "long": "Aplikuje se subkutánně 100–200 mcg denně ráno po dobu 10 až 20 dnů. V orální formě v kapslích 10–20 mg denně. Kúra se opakuje 2x ročně."
    },
    warning: "Výborná snášenlivost, zcela netoxický bioregulační peptid.",
    mechanism: "Přímá interakce tripeptidu s DNA sekvencemi neuronů v mozkové kůře regulující genovou transkripci proteinů buněčného přežití a antioxidačních enzymů (SOD, kataláza).",
    halfLife: "Metabolický obrat rychlý, epigenetický efekt přetrvává měsíce",
    interactions: ["Epithalon / Cortexin (synergická Khavinsonova kúra)"],
    naturalSources: ["bioregulační tripeptid odvozený z kortikálního mozkového komplexu"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 734,
    name: "P21",
    categoryKey: "experimental",
    tags: ["P21", "CNTF", "neurogeneze", "tau-protein", "pamet"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Neurogenní peptid odvozený z CNTF blokující fosforylaci tau proteinu a stimulující růst nových neuronů.",
    description: "P21 je syntetický peptid tvořený 4 aminokyselinami s navázaným adamantanovým jádrem, odvozený z aktivní oblasti ciliárního neurotrofického faktoru (CNTF - sekvence 147-150: Ac-DGGL(A)-NH2). Byl vyvinut v New York State Institute for Basic Research. Vykazuje mimořádnou schopnost procházet hematoencefalickou bariérou, kde stimuluje masivní neurogenezi (tvorbu nových funkčních neuronů z kmenových buněk v gyrus dentatus hipokampu) a inhibuje enzymy zodpovědné za patologickou hyperfosforylaci tau proteinu.",
    effects: [
      "masivní stimulace tvorby nových nervových buněk (neurogeneze)",
      "inhibice enzymů fosforylujících tau protein (ochrana před Alzheimerem)",
      "zlepšení prostorové orientace, dlouhodobé paměti a neuroplasticity",
      "zvýšení hladiny synaptofysinu v mozku"
    ],
    dosage: {
      "short": "1–2 mg denně subkutánně nebo intranasálně",
      "long": "Aplikuje se 1 mg subkutánně nebo intranasálně jednou denně ráno po dobu 4 až 8 týdnů. Ředění: do 10 mg lahvičky 2 ml BAC water."
    },
    warning: "Výzkumná substance. Začínat na nižší dávce 500 mcg k ověření snášenlivosti.",
    mechanism: "Kompetitivní inhibice protilátkami indukované neutralizace CNTF a inhibice kinázy GSK-3beta a cdk5; aktivace signální dráhy JAK/STAT v nervových prekurzorech.",
    halfLife: "Plazmatický poločas cca 2 hodiny",
    interactions: ["Cerebrolysin (komplementární neurotrofická obnova)"],
    naturalSources: ["aktivní doména neurotrofního faktoru CNTF"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 735,
    name: "Thymosin Alpha-1 (Zadaxin)",
    categoryKey: "experimental",
    tags: ["thymosin-alpha-1", "imunita", "brzlik", "T-lymfocyty", "infekce"],
    rating: 5,
    colorType: "green",
    shortDesc: "Přirozený 28-aminokyselinový brzlíkový peptid – absolutní master velitel adaptivní imunitní obrany.",
    description: "Thymosin Alpha-1 (Tα1 / Zadaxin) je 28-aminokyselinový acetylovaný peptid přirozeně syntetizovaný epitelovými buňkami brzlíku (thymu). Hraje centrální roli v imunitním systému: stimuluje zrání a diferenciaci naivních T-lymfocytů na zralé CD4+ pomocné a CD8+ cytotoxické T-buňky, aktivuje přirozené zabíječe (NK buňky) a dendritické buňky a zvyšuje expresi MHC třídy I. V medicíně je schválen ve více než 30 zemích k léčbě chronické hepatitidy B a C, těžkých virových infekcí a jako podpůrná imunoterapie u onkologických pacientů.",
    effects: [
      "zásadní posílení protivirové a antibakteriální imunity",
      "stimulace zrání T-lymfocytů a aktivace NK buněk",
      "modulace imunitního systému bez rizika vyvolání cytokinové bouře",
      "zvýšení protilátkové odpovědi na vakcíny",
      "obnova imunitních funkcí vyčerpaných stárnutím (imunosenescence)"
    ],
    dosage: {
      "short": "1.6 mg subkutánně 2x týdně (akutní infekce: 1.6 mg denně)",
      "long": "Při preventivním imunomodulačním protokolu se podává 1.5–1.6 mg subkutánně inzulínovou stříkačkou dvakrát týdně (např. pondělí/čtvrtek) po dobu 4 až 6 týdnů. Při akutním nástupu virové infekce 1.6 mg denně po dobu prvních 3–5 dnů. Ředění: do 5 mg lahvičky 2 ml BAC water."
    },
    warning: "Výjimečně bezpečný profil bez systémových vedlejších účinků. Opatrnost je nutná pouze u pacientů po orgánové transplantaci užívajících imunosupresiva (může snížit imunosupresi).",
    mechanism: "Aktivace Toll-like receptorů TLR-9 a TLR-2 na dendritických buňkách a buňkách vrozené imunity s následnou indukcí exprese interferonu gama (IFN-gama) a interleukinu-2 (IL-2).",
    halfLife: "Plazmatický poločas cca 2 hodiny (biologická stimulace imunitních buněk trvá několik dní)",
    interactions: [
      "Vitamín D3 a Zinek (základní kofaktory pro zrání bílých krvinek)",
      "BPC-157 (komplementární hojení a imunomodulace)"
    ],
    naturalSources: ["brzlík (thymus) savců"],
    bannedStatus: "banned-sport (WADA S2.1), v mnoha zemích schválené léčivo na předpis"
  },
  {
    id: 736,
    name: "LL-37 (Lidský kathelicidin)",
    categoryKey: "experimental",
    tags: ["LL-37", "antimikrobialni", "kathelicidin", "bakterie", "imunita"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Hostitelský obranný 37-aminokyselinový peptid s přímou baktericidní aktivitou proti biofilmům.",
    description: "LL-37 je 37-aminokyselinový amfipatický alfa-helikální antimikrobiální peptid (AMP) tvořící C-terminální konec lidského kathelicidinu hCAP18. Je syntetizován neutrofily, makrofágy a epiteliálními buňkami. Působí jako přirozené endogenní antibiotikum: díky kladnému náboji se elektrostaticky váže na záporně nabité buněčné membrány bakterií (grampozitivních i gramnegativních), kde vytváří póry a způsobuje okamžitou lýzu bakteriální buňky. Je schopen rozbíjet odolné bakteriální biofilmy (např. Borrelia, Pseudomonas).",
    effects: [
      "přímá lýza širokého spektra bakterií, virů a plísní",
      "schopnost rozbíjet odolné patogenní biofilmy",
      "neutralizace bakteriálního endotoxinu LPS (prevence sepse)",
      "stimulace angiogeneze a epitelizace při hojení ran"
    ],
    dosage: {
      "short": "100–250 mcg subkutánně 1x denně po dobu 2–3 týdnů",
      "long": "Aplikuje se subkutánně 100–200 mcg denně. Začínat vždy na nižší dávce (50–100 mcg), protože rychlý rozpad bakterií může vyvolat Herxheimerovu reakci (přechodné zhoršení příznaků únavy a bolesti z uvolněných toxinů). Ředění: do 5 mg lahvičky 2.5 ml BAC water."
    },
    warning: "Výzkumná substance. Může způsobit lokální zarudnutí a svědění v místě vpichu. Při vysokých dávkách může působit prozánětlivě.",
    mechanism: "Elektrostatická vazba na fosfolipidy bakteriální stěny (lipid A a kyselinu teichoovou), tvorba transmembránových toroidních pórů a osmotický rozpad patogenu (metoda 'koberec').",
    halfLife: "Cca 1–2 hodiny",
    interactions: [
      "Vitamín D3 (aktivní kalcitriol přímo řídí genovou transkripci endogenního LL-37 v buňkách)",
      "probiotika (užívat s časovým odstupem)"
    ],
    naturalSources: ["neutrofilní granulocyty a epiteliální buňky člověka"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 737,
    name: "VIP (Vazoaktivní intestinální peptid)",
    categoryKey: "experimental",
    tags: ["VIP", "plice", "CIRS", "protizanetlivy", "neuropeptid"],
    rating: 5,
    colorType: "green",
    shortDesc: "Silný neuropeptid tlumící plicní zánět a klíčový nástroj protokolu léčby biotoxických onemocnění (CIRS).",
    description: "Vazoaktivní intestinální peptid (VIP) je 28-aminokyselinový neuropeptid syntetizovaný v centrálním i periferním nervovém systému a gastrointestinálním traktu. Má masivní vazodilatační a protizánětlivý účinek. V moderní funkční medicíně (protokol Dr. Shoemakera) je zlatým standardem léčby syndromu chronické zánětlivé odpovědi (CIRS způsobeného expozicí černým plísním a biotoxinům). Obnovuje atrofované šedé hmoty mozku v MRI neurokvantifikačních skenech, normalizuje plicní hypertenzi a tlumí systémový zánět.",
    effects: [
      "normalizace chronického zánětu u CIRS a post-mold syndromu",
      "snížení plicní arteriální hypertenze a vazodilatace cév",
      "obnova objemu mozkové tkáně a neuroplasticity",
      "relaxace hladkého svalstva trávicího traktu a stimulace střevní sekrece"
    ],
    dosage: {
      "short": "Intranasální sprej: 50 mcg 2–4x denně",
      "long": "Aplikuje se intranasálně (nosní sprej) v dávce 50 mcg do jedné nosní dírky 2x až 4x denně nalačno. V Shoemakerově protokolu se nasazuje jako finální krok po odstranění biotoxinů z těla a vyčištění prostředí od plísní."
    },
    warning: "Před nasazením VIP v CIRS protokolu musí mít pacient negativní kultivaci na MARCoNS v nose a normální hodnoty ergometrického testu. Může mírně snížit krevní tlak.",
    mechanism: "Vazba na receptory VPAC1 a VPAC2 spřažené s Gs proteinem; masivní vzestup cAMP a inhibice exprese prozánětlivých cytokinů (TNF-alfa, IL-1beta, TGF-beta1).",
    halfLife: "Plazmatický poločas cca 2–3 minuty (v nosní sliznici a CNS přetrvává déle)",
    interactions: ["Léky na krevní tlak (aditivní vazodilatační účinek)"],
    naturalSources: ["neurony trávicího traktu, hypotalamus"],
    bannedStatus: "prescription-only / compounding pharmacies"
  },
  {
    id: 738,
    name: "Follistatin-344",
    categoryKey: "experimental",
    tags: ["follistatin", "inhibitor-myostatinu", "svaly", "anabolismus", "peptid"],
    rating: 4,
    colorType: "red",
    shortDesc: "Autokrinní glykoprotein neutralizující myostatin pro extrémní nárůst svalové hmoty.",
    description: "Follistatin-344 je rekombinantní forma přirozeného glykoproteinu follistatinu. Jeho primární biologickou funkcí je vysoce afinní vazba na myostatin (GDF-8) a aktivin A. Myostatin funguje v těle jako genetická brzda bránící svalům v nekonečném růstu. Follistatin myostatin ireverzibilně zablokuje a neutralizuje, což umožní extrémní nárůst svalových vláken přesahující běžné genetické limity organismu. Zkoumá se pro léčbu svalové dystrofie.",
    effects: [
      "zablokování myostatinové brzdy a extrémní stimulace svalového růstu",
      "nárůst čisté svalové hmoty a absolutní síly",
      "zlepšení regenerace po těžkých svalových traumatech",
      "potlačení svalového úbytku (kachexie) v nemoci"
    ],
    dosage: {
      "short": "100 mcg denně intramuskulárně po dobu 10–14 dnů",
      "long": "Aplikuje se 100 mcg denně intramuskulárně (často lokálně do trénované svalové partie, např. bicepsy, ramena, lýtka) po dobu maximálně 10 až 14 dnů. Poté musí následovat minimálně 1 až 2 měsíce pauza. Ředění: do 1 mg lahvičky 1 ml BAC water."
    },
    warning: "Výzkumná substance. Vzhledem k neutralizaci aktivinu může ovlivnit funkci šlach (svaly rostou rychleji, než se stačí adaptovat šlachy – riziko utržení úponu). Může tlumit sekreci FSH v hypofýze.",
    mechanism: "Vazba na myostatin v poměru 2:1 bránící jeho navázání na receptor ActRIIB, což zabrání fosforylaci Smad2/3 a uvolní inhibici proteosyntézy v myoblastech.",
    halfLife: "Cca 2 hodiny v krvi, blokáda myostatinu v tkáních trvá několik dní",
    interactions: ["Anabolické steroidy (masivní aditivní hypertrofie)"],
    naturalSources: ["folikulární tekutina vaječníků, varlata, kosterní svaly"],
    bannedStatus: "banned-sport (WADA S4.3 inhibitory myostatinu), výzkumná látka"
  },
  {
    id: 739,
    name: "DSIP (Delta Sleep-Inducing Peptide)",
    categoryKey: "experimental",
    tags: ["DSIP", "delta-spanek", "NREM", "peptid", "stres", "regenerace"],
    rating: 4,
    colorType: "green",
    shortDesc: "Endogenní nonapeptid indukující hluboký delta spánek a modulující stresovou osu.",
    description: "DSIP (Delta Sleep-Inducing Peptide) je přirozený 9-aminokyselinový neuropeptid (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu) poprvé izolovaný v roce 1977 ze žilní krve spících králíků. Je specifický tím, že nepůsobí jako klasické chemické sedativum (nevyvolává omámenost ani útlum), ale přirozeně synchronizuje elektroencefalografické delta vlny mozku (0.5–4 Hz) typické pro hlubokou III. a IV. fázi pomalovlnného NREM spánku. Zlepšuje spánkovou architekturu, tlumí chronickou bolest a snižuje ranní hladinu stresového kortizolu.",
    effects: [
      "výrazné prohloubení pomalovlnného delta spánku (SWS)",
      "obnova přirozené spánkové architektury bez ranní kocoviny",
      "modulace cirkadiánního uvolňování kortizolu a LH",
      "snížení chronického stresu a abstinenčních příznaků",
      "silný neuroprotektivní účinek"
    ],
    dosage: {
      "short": "100–250 mcg subkutánně 30–60 minut před spaním",
      "long": "Aplikuje se 100–200 mcg subkutánně inzulínovou stříkačkou cca 30–60 minut před spaním. Doporučuje se užívat v cyklech (např. 3–5 dní v týdnu po dobu 2–3 týdnů). Ředění: do 2 mg lahvičky 2 ml BAC water."
    },
    warning: "Výzkumná substance. U některých jedinců vyžaduje 2–3 dny k plnému nástupu efektu.",
    mechanism: "Modulace GABAergního a glutamátergního systému v thalamu a hypotalamu; indukce pomalých delta oscilací na EEG.",
    halfLife: "Plazmatický poločas cca 15–20 minut, synchronizace spánkových vln přetrvává celou noc",
    interactions: ["Epithalon / Melatonin (synergie pro dokonalý spánek a epifýzu)"],
    naturalSources: ["hypotalamus, hypofýza, krev savců"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 740,
    name: "Melanotan II (MT-2)",
    categoryKey: "experimental",
    tags: ["melanotan", "MT-2", "opaleni", "libido", "erekce", "peptid"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Syntetický cyklický lakto-analog alfa-MSH pro hluboké opálení pokožky a extrémní stimulaci libida.",
    description: "Melanotan II je syntetický cyklický heptapeptidový lakto-analog přirozeného hormonu alfa-MSH vyvinutý na University of Arizona. Působí jako neselektivní agonista melanokortinových receptorů (MC1R, MC3R, MC4R, MC5R). Vazba na MC1R v kůži stimuluje melanocyty k masivní produkci tmavého pigmentu eumelaninu bez nutnosti dlouhého pobytu na slunci (ochrana před spálením). Současná aktivace centrálních receptorů MC3R a MC4R v hypotalamu způsobuje silné zvýšení sexuální touhy, libida a spontánní erekce.",
    effects: [
      "rychlé, hluboké a dlouhotrvající opálení pokožky",
      "ochrana DNA kožních buněk před spálením UV zářením",
      "výrazná stimulace libida a sexuální touhy u mužů i žen",
      "silná podpora erekce a zkrácení refrakterní fáze",
      "mírné potlačení chuti k jídlu"
    ],
    dosage: {
      "short": "Zahajovací: 250 mcg; Běžná: 500 mcg subkutánně před UV expozicí",
      "long": "PŘÍSNÁ TITRACE KVŮLI NAUZEI: První 3 dny mikrodávka 250 mcg subkutánně na noc (pro minimalizaci nevolnosti). Poté 500 mcg denně nebo každý druhý den spolu s mírným vystavením slunci (15–20 minut) až do dosažení požadovaného tónu pleti. Poté udržovací dávka 500 mcg jednou za 7–14 dní. Ředění: do 10 mg lahvičky 2 ml BAC water = 5 mg/ml (každých 10 dílků = 500 mcg)."
    },
    warning: "Výzkumná substance. Způsobuje ztmavnutí stávajících pih a mateřských znamének (nutno sledovat změny znamének u dermatologa!). Časté vedlejší účinky: nauzea, návaly horka v obličeji a spontánní dlouhotrvající erekce. Neužívat při podezření na melanom.",
    mechanism: "Neselektivní stimulace receptorů MC1R (kožní melanocyty), MC3R/MC4R (erektilní a sexuální centra hypotalamu) a MC5R (mazové žlázy).",
    halfLife: "Cca 1–2 hodiny v plazmě, pigmentace přetrvává měsíce",
    interactions: [
      "L-Tyrosin (substrát pro tvorbu melaninu)",
      "antihistaminika (mohou zmírnit počáteční nauzeu a flushing)"
    ],
    naturalSources: ["syntetický cyklický peptid"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 741,
    name: "PT-141 (Bremelanotide)",
    categoryKey: "experimental",
    tags: ["PT-141", "bremelanotide", "libido", "erekce", "afrodiziakum", "schvaleny"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Schválený centrální melanokortinový agonista pro léčbu hypoaktivní sexuální touhy a erektilní dysfunkce.",
    description: "PT-141 (Bremelanotide / Vyleesi) je cyklický heptapeptid, který vznikl jako metabolit Melanotanu II s odstraněnou pigmentační složkou. Je schválen FDA pro léčbu hypoaktivní poruchy sexuální touhy (HSDD) u premenopauzálních žen a je široce využíván u mužů s erektilní dysfunkcí refrakterní na inhibitory PDE-5 (Viagru/Cialis). Na rozdíl od Viagry, která působí čistě mechanicky na cévy v penisu, PT-141 působí přímo v centrálním nervovém systému (v mozku): aktivuje sexuální touhu, vzrušení a motivaci.",
    effects: [
      "přímá stimulace sexuální touhy a libida v centrálním nervovém systému",
      "obnova tvrdosti a spolehlivosti erekce nezávisle na cévním základu",
      "zvýšení sexuální citlivosti a intenzity prožitku u žen",
      "funguje i v případech, kdy selhává Viagra či Cialis"
    ],
    dosage: {
      "short": "1–1.75 mg subkutánně 45 minut až 2 hodiny před sexuální aktivitou",
      "long": "Aplikuje se subkutánně inzulínovou stříkačkou do břicha v dávce 1–1.75 mg cca 1 až 2 hodiny před plánovaným stykem. Účinek nastupuje po 45–90 minutách a může přetrvávat 8 až 12 hodin. Nepoužívat více než jednou za 24 hodin."
    },
    warning: "Léčivo na předpis / výzkumná látka. Přechodně zvyšuje krevní tlak (o 4–6 mmHg) po dobu prvních několika hodin po injekci – opatrnost u těžkých hypertoniků. Častá lehká nauzea a nával horka bezprostředně po aplikaci.",
    mechanism: "Vysoce selektivní agonismus centrálních melanokortinových receptorů MC3R a MC4R v mediálním preoptickém jádře hypotalamu vedoucí k uvolnění dopaminu v mesolimbickém systému.",
    halfLife: "Plazmatický poločas cca 2.7 hodiny",
    interactions: [
      "Tadalafil / Sildenafil (silná synergie: PT-141 dodá centrální touhu a signál, Cialis zajistí periferní cévní dilataci)",
      "alkohol (může snížit účinek)"
    ],
    naturalSources: ["syntetický peptidový metabolit"],
    bannedStatus: "FDA schválené léčivo na předpis (Vyleesi), výzkumná substance"
  },
  {
    id: 742,
    name: "Ostarine (MK-2866 / Enobosarm)",
    categoryKey: "experimental",
    tags: ["ostarine", "MK-2866", "SARM", "slachy", "anabolismus"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Nejlépe prozkoumaný selektivní modulátor androgenních receptorů (SARM) s vynikajícím vlivem na šlachy a svaly.",
    description: "Ostarine (MK-2866 / Enobosarm / GTx-024) je nesteroidní perorální selektivní modulátor androgenních receptorů (SARM) vyvinutý firmou GTx pro léčbu svalové atrofie u kachexie a osteoporózy. Vyznačuje se vysokou tkáňovou selektivitou pro kosterní svaly a kostní tkáň s minimálním androgenním dopadem na prostatu a vlasové folikuly. Je proslulý svou schopností udržet veškerou svalovou hmotu v hlubokém kalorickém deficitu a prokazatelně urychlovat hojení šlach a vazů stimulací syntézy kolagenu.",
    effects: [
      "udržení a nárůst čisté svalové hmoty bez retence vody",
      "urychlení hojení šlach, vazů a zvýšení kostní minerální denzity",
      "vynikající výsledky v rýsovacích dietách a rekompozici postavy",
      "minimální androgenní vedlejší účinky na prostatu"
    ],
    dosage: {
      "short": "10–25 mg denně orálně ráno (cyklus 6–8 týdnů)",
      "long": "Běžná dávka je 15–25 mg denně ráno s jídlem (pro ženy 5–10 mg denně). Délka cyklu je 6 až 8 týdnů. Po skončení cyklu je vhodné provést krevní testy a v případě potlačení testosteronu nasadit lehkou PCT (např. Enclomifen 12.5 mg po dobu 3–4 týdnů)."
    },
    warning: "Výzkumná substance, zakázaná ve sportu (WADA S1.2). Ačkoliv je mírnější než steroidy, způsobuje závisle na dávce částečnou supresi vlastní osy HPTA (pokles LH a volného testosteronu) a může mírně snížit HDL cholesterol. Vyžaduje PCT.",
    mechanism: "Vysokoafinitní selektivní vazba na androgenní receptor (Ki = 4 nM) fungující jako plný agonista v myocytech a osteoblastech bez schopnosti redukce 5α-reduktázou na DHT a bez aromatizace na estrogen.",
    halfLife: "24 hodin (ideální pro stabilní dávkování 1x denně ráno)",
    interactions: [
      "TUDCA / NAC (ochrana jater při perorálním podání)",
      "Enclomifen (PCT pro obnovu endogenního testosteronu)"
    ],
    naturalSources: ["syntetická arylpropionamidová sloučenina"],
    bannedStatus: "banned-sport (WADA S1.2), výzkumná látka"
  },
  {
    id: 743,
    name: "Ligandrol (LGD-4033)",
    categoryKey: "experimental",
    tags: ["ligandrol", "LGD-4033", "SARM", "objem", "sila"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Vysoce anabolický orální SARM pro masivní nárůst svalového objemu a síly.",
    description: "Ligandrol (LGD-4033 / Anabolicum) je nepeptidový perorální SARM vyvinutý společností Ligand Pharmaceuticals pro léčbu svalové atrofie spojené s rakovinou a věkem. Patří k nejsilnějším SARMům na trhu z hlediska anabolické potence na miligram látky. Již v dávkách 1 mg denně v klinických studiích na lidech prokázal signifikantní nárůst beztukové svalové hmoty během 21 dní. Vykazuje silný anabolický účinek svalové hypertrofie s mírným zadržováním intramuskulární vody.",
    effects: [
      "masivní nárůst čisté svalové hmoty a plnosti svalů",
      "výrazné zvýšení silových výkonů v posilovně",
      "stimulace kostní minerální denzity",
      "vysoký anabolický index bez aromatizace na estrogen"
    ],
    dosage: {
      "short": "5–10 mg denně orálně ráno (cyklus 6–8 týdnů)",
      "long": "Začátečníci 5 mg denně ráno s jídlem. Pokročilí 10 mg denně. Cyklus nesmí přesáhnout 8 týdnů. PO CYKLU JE VŽDY NUTNÉ PCT (post cycle therapy s Enclomifenem nebo Tamoxifenem), protože LGD-4033 znatelně potlačuje vlastní produkci testosteronu."
    },
    warning: "Výzkumná látka, doping (WADA). Způsobuje znatelnou supresi přirozeného testosteronu, pokles SHBG a přechodné snížení HDL cholesterolu. Může mírně zatížit jaterní enzymy (ALT/AST).",
    mechanism: "Vazba na androgenní receptor s extrémně vysokou afinitou (Ki = 1 nM), stimulace genové transkripce anabolických svalových proteinů.",
    halfLife: "24–36 hodin",
    interactions: [
      "Enclomifen / Nolvadex (nezbytné PCT po cyklu)",
      "TUDCA / Cholin (podpora jaterních enzymů)"
    ],
    naturalSources: ["syntetická sloučenina"],
    bannedStatus: "banned-sport (WADA S1.2), výzkumná látka"
  },
  {
    id: 744,
    name: "Testolone (RAD-140)",
    categoryKey: "experimental",
    tags: ["RAD-140", "testolone", "SARM", "sucha-svalova-hmota", "sila"],
    rating: 5,
    colorType: "red",
    shortDesc: "Nejagresivnější a nejsilnější SARM s vysokou afinitou k AR a neuroprotektivním účinkem.",
    description: "Testolone (RAD-140) je syntetický SARM vyvinutý společností Radius Health. Vykazuje mimořádně vysoký anabolicko-androgenní poměr (přibližně 90:1). Je známý tím, že způsobuje extrémní nárůst svalové tvrdosti, hustoty, síly a vaskularity srovnatelný s mírnými dávkami injekčního testosteronu, aniž by docházelo k jakékoliv aromatizaci na estrogen. Unikátní vlastností RAD-140 je jeho specifická neuroprotektivita: v preklinických modelech chránil neurony hipokampu před apoptózou vyvolanou amyloidem beta.",
    effects: [
      "extrémní nárůst silových parametrů a svalové tvrdosti",
      "suché svalové přírůstky bez jakéhokoliv zadržování vody",
      "zrychlení regenerace mezi těžkými tréninky",
      "neuroprotektivní účinek na mozkové neurony"
    ],
    dosage: {
      "short": "10–20 mg denně orálně ráno (cyklus 6–8 týdnů)",
      "long": "Běžná dávka je 10–15 mg denně ráno s jídlem. Zkušení uživatelé 20 mg denně. Maximální délka cyklu 8 týdnů. Po skončení cyklu je POVINNÁ plnohodnotná PCT (Enclomifen 12.5–25 mg denně po dobu 4 týdnů)."
    },
    warning: "Výzkumná látka, přísně zakázaná WADA. Silná suprese endogenní osy HPTA (testosteron může klesnout velmi nízko). Může způsobit přechodné zvýšení jaterních enzymů (ALT/AST), nespavost a agresivitu na tréninku. Nutno užívat jaterní ochranu (TUDCA) a provést PCT.",
    mechanism: "Selektivní vazba na androgenní receptor s extrémní afinitou; plný agonismus ve svalech a selektivní antagonismus v prostatě; aktivace kaskády MAPK v neuronech.",
    halfLife: "Cca 20–24 hodin (některé studie naznačují až 48–60 hodin u lidí, proto nepřekračovat dávkování)",
    interactions: [
      "TUDCA a NAC (nezbytná ochrana jater během cyklu)",
      "Enclomifen (nezbytné PCT pro nastartování varlat)"
    ],
    naturalSources: ["syntetická sloučenina"],
    bannedStatus: "banned-sport (WADA S1.2), výzkumná látka"
  },
  {
    id: 745,
    name: "Cardarine (GW-501516)",
    categoryKey: "experimental",
    tags: ["cardarine", "GW-501516", "PPAR-delta", "vytrvalost", "spalovani-tuku"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Agonista receptoru PPAR-delta – extrémní vytrvalostní 'plíce v tabletě' a spalovač tuků.",
    description: "Cardarine (GW-501516 / Endurobol) je syntetický agonista jaderného receptoru PPAR-delta (často mylně řazený mezi SARMy, i když nemá s androgenními receptory nic společného). Byl vyvinut společnostmi GlaxoSmithKline a Ligand Pharmaceuticals pro léčbu metabolického syndromu a kardiovaskulárních chorob. V těle přepíná preferenci energetického paliva: nutí svaly přednostně pálit mastné kyseliny místo glukózy, čímž dramaticky šetří svalový glykogen. To přináší až nadlidské zvýšení aerobní vytrvalosti, kardiovaskulární kapacity a výrazné zlepšení lipidového profilu (zvyšuje HDL a sráží triglyceridy).",
    effects: [
      "extrémní nárůst aerobní vytrvalosti, kapacity plic a kardiovaskulárního výkonu",
      "urychlení oxidace tuků i v klidovém režimu bez stimulantů",
      "dramatické zlepšení lipidového profilu (masivní nárůst dobrého HDL cholesterolu)",
      "zvýšení inzulínové senzitivity a šetření svalového glykogenu"
    ],
    dosage: {
      "short": "10–20 mg denně orálně (45–60 minut před tréninkem)",
      "long": "Užívá se 10–20 mg orálně jednou denně ráno nebo cca hodinu před vytrvalostním tréninkem. Běžná délka cyklu je 6 až 8 týdnů, po které následuje minimálně stejně dlouhá pauza. Nevyžaduje PCT (neovlivňuje hormony)."
    },
    warning: "Výzkumná substance, přísný zákaz WADA. Klinický vývoj byl v roce 2007 pozastaven poté, co studie na hlodavcích s extrémně vysokým dávkováním (v přepočtu na člověka cca 40–80 mg denně po dobu dvou let) ukázala zvýšenou tvorbu polypů a tumorů v trávicím traktu. Ačkoliv sportovci používají podstatně nižší dávky v krátkých cyklech, riziko je nutné brát v potaz.",
    mechanism: "Selektivní vazba na jaderný receptor PPAR-delta aktivující geny pro beta-oxidaci mastných kyselin (CPT-1) a geny podmiňující tvorbu pomalých oxidačních svalových vláken typu I.",
    halfLife: "16–24 hodin",
    interactions: [
      "Stenabolic SR-9009 (vynikající vytrvalostní synergie)",
      "statiny (Cardarine kompenzuje některé vedlejší účinky statinů na lipidy)"
    ],
    naturalSources: ["syntetická sloučenina"],
    bannedStatus: "banned-sport (WADA S4.4 metabolické modulátory), výzkumná látka"
  },
  {
    id: 746,
    name: "Stenabolic (SR-9009)",
    categoryKey: "experimental",
    tags: ["stenabolic", "SR-9009", "Rev-ErbA", "mitochondrie", "vytrvalost"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Syntetický agonista jaderných receptorů Rev-ErbA synchronizující mitochondrie a spalování lipidů.",
    description: "Stenabolic (SR-9009) je syntetická molekula vyvinutá profesorem Thomasem Burrissim ve Scripps Research Institute. Funguje jako agonista jaderných receptorů Rev-ErbA (alfa i beta), které hrají klíčovou roli v řízení vnitřních cirkadiánních hodin buňky a mitochondriálního obratu. V preklinických studiích prokázal schopnost zvýšit počet mitochondrií v kosterním svalu, zvýšit spotřebu kyslíku o 5 % i v úplném klidu a dramaticky zvýšit běžeckou vytrvalost.",
    effects: [
      "stimulace mitochondriální biogeneze v kosterních svalech",
      "zvýšení klidového energetického výdeje a spalování tuků",
      "podpora kardiovaskulární vytrvalosti a snížení zánětu",
      "synchronizace buněčných cirkadiánních rytmů"
    ],
    dosage: {
      "short": "20–30 mg denně rozděleno do 3–4 dávek (sublinguálně)",
      "long": "Vzhledem k velmi nízké orální biodostupnosti (kolem 2–3 %) a krátkému poločasu je nutné podávat 10 mg 3x denně (např. ráno, v poledne, odpoledne) nejlépe sublinguálně (podržet tekutinu pod jazykem). Cyklus trvá 6–8 týdnů."
    },
    warning: "Výzkumná látka, zakázaná WADA. Špatná orální vstřebatelnost při běžném spolknutí tablety. Neužívat večer (aktivuje denní fázi cirkadiánních hodin a může narušit usínání).",
    mechanism: "Konformační vazba na receptory Rev-ErbA s následným náborem ko-represorů NCoR/HDAC3; stimulace oxidace glukózy a mastných kyselin.",
    halfLife: "Cca 4 hodiny (vyžaduje časté dávkování během dne)",
    interactions: ["Cardarine GW-501516 (populární vytrvalostní stack)"],
    naturalSources: ["syntetická sloučenina"],
    bannedStatus: "banned-sport (WADA S4.4), výzkumná látka"
  },
  {
    id: 747,
    name: "Andarine (S-4)",
    categoryKey: "experimental",
    tags: ["andarine", "S-4", "SARM", "vaskularita", "tvrdost"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "První generace SARM s vysokou afinitou pro svalovou tvrdost, vaskularitu a spalování tuků.",
    description: "Andarine (S-4 / GTx-007) je jedním z prvních historicky vyvinutých SARMů firmou GTx. Strukturálně vychází z bicalutamidu. Vyznačuje se silnou schopností vysušovat podkožní vodu, zvyšovat vaskularitu a svalovou tvrdost podobně jako orální steroid Winstrol, avšak bez poškození jater a kloubů. Je vysoce ceněn v závěrečných fázích předsoutěžní přípravy a rýsování.",
    effects: [
      "výrazné zvýšení svalové tvrdosti a hustoty",
      "vynikající vaskularita a eliminace podkožní vody",
      "udržení síly v hlubokém kalorickém deficitu",
      "parciální antagonismus v prostatě (prevence zbytnění)"
    ],
    dosage: {
      "short": "25–50 mg denně rozděleno do 2 dávek (cyklus 6 týdnů)",
      "long": "Vzhledem ke kratšímu poločasu (cca 4–6 hodin) se denní dávka 25–50 mg rozděluje na dvě části (např. 25 mg ráno a 25 mg odpoledne) s jídlem. Populární je protokol 5 dní užívání a 2 dny pauza (víkendy) k prevenci očních nežádoucích účinků."
    },
    warning: "Výzkumná látka, doping WADA. Unikátní vedlejší účinek: vazba metabolitů na oční receptory způsobuje žluté zabarvení vidění (yellow tint) a zhoršenou noční adaptaci na šero. Tento efekt je zcela reverzibilní a vymizí do několika dnů po vysazení nebo při režimu 5 dní on / 2 dny off.",
    mechanism: "Parciální selektivní agonismus androgenního receptoru v kosterním svalu a kostech.",
    halfLife: "4–6 hodin",
    interactions: ["Cardarine (oblíbená rýsovací kombinace)", "Enclomifen (PCT po cyklu)"],
    naturalSources: ["syntetická sloučenina"],
    bannedStatus: "banned-sport (WADA S1.2), výzkumná látka"
  },
  {
    id: 748,
    name: "S-23",
    categoryKey: "experimental",
    tags: ["S-23", "SARM", "nejsilnejsi-SARM", "tvrdost", "antikoncepce"],
    rating: 4,
    colorType: "red",
    shortDesc: "Nejsilnější selektivní modulátor androgenních receptorů na trhu – síla a tvrdost na úrovni anabolických steroidů.",
    description: "S-23 je perorální nesteroidní SARM vyvinutý společností GTx jako potenciální mužská hormonální antikoncepce. Má nejvyšší vazebnou afinitu k androgenním receptorům ze všech známých SARMů (Ki = 1.7 nM). V těle vyvolává extrémní svalovou tvrdost, vaskularitu a nárůst síly srovnatelný se silnými DHT steroidy (jako je Masteron nebo Winstrol). Způsobuje však kompletní supresi vlastní produkce testosteronu a spermatogeneze (odtud zkoumání jako antikoncepce).",
    effects: [
      "extrémní svalová tvrdost, hustota a prořezání svalů",
      "masivní nárůst síly a agresivity na tréninku",
      "nulová retence vody a silné spalování podkožního tuku",
      "silná suprese spermatogeneze (původní cíl vývoje)"
    ],
    dosage: {
      "short": "10–20 mg denně rozděleno do 2 dávek (ráno a večer)",
      "long": "Užívá se 10–20 mg denně rozděleno do dvou dávek (např. 10 mg ráno a 10 mg večer) kvůli kratšímu poločasu. Cyklus maximálně 6–8 týdnů. VYŽADUJE TESTOSTERONOVÝ ZÁKLAD (TRT) NEBO MASIVNÍ PCT PO CYKLU."
    },
    warning: "Výzkumná látka, doping WADA. Extrémně silná suprese vlastní osy HPTA (srazí LH a FSH k nule). Není vhodný pro začátečníky. Může způsobit agresivitu, vypadávání vlasů a zhoršení lipidového profilu.",
    mechanism: "Vysokoafinitní vazba na androgenní receptor vyvolávající masivní transkripci v myocytech a silnou negativní zpětnou vazbu v hypofýze.",
    halfLife: "Cca 11–12 hodin",
    interactions: [
      "Testosteron (nutný základ cyklu, aby tělo mělo estrogen z aromatizace)",
      "TUDCA (ochrana jater)",
      "Enclomifen / Nolvadex (intenzivní PCT)"
    ],
    naturalSources: ["syntetická sloučenina"],
    bannedStatus: "banned-sport (WADA S1.2), výzkumná látka"
  },
  {
    id: 749,
    name: "YK-11",
    categoryKey: "experimental",
    tags: ["YK-11", "myostatin", "SARM", "follistatin", "anabolismus"],
    rating: 4,
    colorType: "red",
    shortDesc: "Unikátní hybridní nesteroidní SARM působící jako inhibitor myostatinu stimulací exprese follistatinu.",
    description: "YK-11 (methyl 2-(4,5-dioxo-tetrahydrofuran-3-yliden)ethyl ester) byl syntetizován japonským vědcem Yuchiro Kannem v roce 2011 na Toho University. Ačkoliv je klasifikován mezi SARMy, jeho chemická struktura obsahuje steroidní jádro. Jeho unikátnost spočívá v tom, že kromě vazby na androgenní receptory stimuluje svalové buňky k masivní produkci follistatinu – přirozeného antagonisty myostatinu. Tím působí jako duální anabolikum: stimuluje růst přes AR a zároveň vypíná genetickou brzdu růstu myostatin.",
    effects: [
      "stimulace exprese follistatinu ve svalech a blokáda myostatinu",
      "překonání genetických limitů svalové hypertrofie",
      "rychlý a masivní nárůst svalové hmoty a síly",
      "vysoká svalová tvrdost bez aromatizace na estrogen"
    ],
    dosage: {
      "short": "5–10 mg denně orálně rozděleno do 2 dávek (cyklus 4–6 týdnů)",
      "long": "Vzhledem k extrémní síle se začíná na 5 mg denně rozděleno na 2.5 mg ráno a 2.5 mg odpoledne. Zkušení maximálně 10 mg denně. Cyklus nesmí přesáhnout 6 týdnů. Nutná jaterní ochrana a důkladné PCT."
    },
    warning: "Výzkumná látka, doping WADA. Silná suprese vlastní hormonální produkce. Díky blokádě myostatinu může vést k nadměrnému zatížení šlach a vazů (bolesti kloubů). Steroidní struktura zatěžuje játra.",
    mechanism: "Parciální agonismus androgenního receptoru v kombinaci s upregulací exprese follistatinové mRNA přes specifické promotory.",
    halfLife: "Cca 6–10 hodin",
    interactions: [
      "TUDCA a NAC (ochrana jater)",
      "Enclomifen / Tamoxifen (PCT pro obnovu HPTA)"
    ],
    naturalSources: ["syntetická látka odvozená z dihydrotestosteronového jádra"],
    bannedStatus: "banned-sport (WADA S1.2), výzkumná látka"
  },
  {
    id: 750,
    name: "SLU-PP-332",
    categoryKey: "experimental",
    tags: ["SLU-PP-332", "ERR", "exercise-mimetic", "vytrvalost", "mitochondrie"],
    rating: 5,
    colorType: "green",
    shortDesc: "Revoluční pan-agonista receptorů souvisejících s estrogenem (ERR) simulující účinky vytrvalostního cvičení.",
    description: "SLU-PP-332 je nová syntetická malá molekula vyvinutá výzkumníky z University of Florida. Patří do přelomové skupiny tzv. 'exercise mimetics' (látek napodobujících tělesné cvičení). Funguje jako pan-agonista jaderných receptorů souvisejících s estrogenem (ERR-alfa, ERR-beta a ERR-gama). V těle spouští přesně stejné biochemické kaskády, které normálně nastávají po hodinách intenzivního kardio tréninku: zvyšuje mitochondriální biogenezi, oxidaci tuků a vytrvalost kosterních svalů bez jakékoliv fyzické námahy.",
    effects: [
      "simulace buněčných a metabolických adaptací na vytrvalostní trénink",
      "masivní nárůst oxidace mastných kyselin a snížení tělesného tuku",
      "zvýšení vytrvalosti a běžeckého výkonu až o 70 % v preklinických studiích",
      "zlepšení inzulínové senzitivity a ochrana před srdečním selháním"
    ],
    dosage: {
      "short": "20–50 mg denně orálně nebo subkutánně (výzkumné dávkování)",
      "long": "V preklinickém výzkumu se podává orálně nebo intraperitoneálně. V biohackingových experimentech se testuje dávka 20–40 mg denně rozdělená do dvou dávek s jídlem obsahujícím tuky po dobu 4–6 týdnů."
    },
    warning: "Výzkumná substance v rané fázi testování. Nemá žádnou estrogenní aktivitu (nemění hladiny pohlavních hormonů), působí specificky na metabolické receptory ERR.",
    mechanism: "Přímý pan-agonismus jaderných receptorů ERR-alfa/beta/gama; koaktivace s PGC-1alfa vedoucí k transkripci genů pro mitochondriální oxidační fosforylaci a beta-oxidaci mastných kyselin.",
    halfLife: "Cca 4–6 hodin",
    interactions: ["MOTS-c (synergický bioenergetický stack)"],
    naturalSources: ["syntetická molekula"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 751,
    name: "5-Amino-1MQ",
    categoryKey: "experimental",
    tags: ["5-amino-1mq", "NNMT", "tuk", "NAD+", "metabolismus"],
    rating: 5,
    colorType: "green",
    shortDesc: "Inhibitor enzymu NNMT v tukových buňkách – zrychlení metabolismu a zvýšení hladiny buněčného NAD+.",
    description: "5-Amino-1MQ (5-amino-1-methylchinolin) je malá molekula specificky vyvinutá na University of Texas Medical Branch. Funguje jako selektivní membránově propustný inhibitor enzymu nikotinamid N-methyltransferázy (NNMT). Enzym NNMT je vysoce aktivní v tukových buňkách obézních jedinců, kde plýtvá methylovými skupinami a vyčerpává buněčný NAD+. Zablokováním NNMT pomocí 5-Amino-1MQ dojde k prudkému vzestupu intracelulárního NAD+ a SAM, což dramaticky urychluje bazální spalování tuků a brání zvětšování adipocytů.",
    effects: [
      "zmenšení velikosti tukových buněk a redukce viscerálního tuku",
      "zvýšení hladiny NAD+ v buňkách až o 20 % bez nutnosti brát NMN",
      "zvýšení svalové síly a kontraktilní funkce",
      "podpora sirtuinů a mitochondriální biogeneze"
    ],
    dosage: {
      "short": "50–150 mg denně orálně ráno s jídlem",
      "long": "Užívá se 50 mg 1–2x denně (ráno a v poledne) s jídlem po dobu 1 až 2 měsíců. Vzhledem k výborné perorální biologické dostupnosti se polyká v kapslích."
    },
    warning: "Výzkumná substance. Výborný bezpečnostní profil bez vlivu na centrální nervovou soustavu (není to stimulant, nezvyšuje tep ani tlak).",
    mechanism: "Selektivní kompetitivní inhibice enzymu nikotinamid N-methyltransferázy (NNMT); zachování nikotinamidu pro salvage dráhu syntézy NAD+.",
    halfLife: "Cca 6–8 hodin",
    interactions: [
      "NAD+ / NMN (synergie: 5-amino-1MQ brání rozkladu NAD+, NMN dodává surovinu)",
      "Retatrutide / Semaglutid (masivní podpora metabolické redukce tuku)"
    ],
    naturalSources: ["syntetický chinolinový derivát"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 752,
    name: "Cartalax",
    categoryKey: "experimental",
    tags: ["cartalax", "chrupavka", "klouby", "bioregulator", "peptid"],
    rating: 4,
    colorType: "green",
    shortDesc: "Bioregulační tripeptid chrupavkové tkáně stimulující regeneraci chondrocytů a kloubní matrix.",
    description: "Cartalax je syntetický bioregulační tripeptid složený z aminokyselin Ala-Glu-Asp (alanin, kyselina glutamová, kyselina asparagová). Patří do skupiny Khavinsonových peptidů specifických pro pojivovou tkáň a chrupavku. Proniká přímo do jader chondrocytů, kde normalizuje syntézu proteoglykanů a kolagenu typu II a zabraňuje degenerativním změnám v kloubech, páteři a meziobratlových ploténkách.",
    effects: [
      "stimulace regenerace chrupavkové tkáně a chondrocytů",
      "obnova syntézy endogenního kolagenu a proteoglykanů v kloubech",
      "snížení bolesti a ztuhlosti při artróze a opotřebení páteře",
      "ochrana kloubů před degenerativním poškozením při těžkém tréninku"
    ],
    dosage: {
      "short": "100–200 mcg subkutánně (nebo 10–20 mg orálně) denně po dobu 10–20 dnů",
      "long": "Aplikuje se subkutánně 100–200 mcg denně ráno po dobu 10 až 20 dnů. V orální formě 10–20 mg denně. Kúra se opakuje 2x ročně."
    },
    warning: "Výborná tolerance, zcela netoxický fyziologický peptid.",
    mechanism: "Epigenetická interakce tripeptidu s promotory genů pro chrupavkovou extracelulární matrix v chondrocytech.",
    halfLife: "Krátký poločas obratu, epigenetická obnova chrupavky přetrvává měsíce",
    interactions: [
      "BPC-157 (perfektní synergická kombinace pro klouby a vazy)",
      "Kyselina hyaluronová a Kolagen"
    ],
    naturalSources: ["bioregulační peptid odvozený z chrupavek mladých telat"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 753,
    name: "Vesugen",
    categoryKey: "experimental",
    tags: ["vesugen", "cevy", "endotel", "bioregulator", "mikrocirkulace"],
    rating: 4,
    colorType: "green",
    shortDesc: "Vaskulární bioregulační tripeptid obnovující elasticitu cévního endotelu a mikrocirkulaci.",
    description: "Vesugen je syntetický bioregulační tripeptid skládající se z aminokyselin Lys-Glu-Asp (lysin, kyselina glutamová, kyselina asparagová). Je specificky zacílen na cévní systém: proniká do endoteliálních buněk krevních cév, normalizuje syntézu cévního kolagenu a elastinu, obnovuje elasticitu cévní stěny a dramaticky zlepšuje periferní a cerebrální mikrocirkulaci u osob s aterosklerózou nebo hypertenzí.",
    effects: [
      "obnova elasticity a tonu cévní stěny",
      "zlepšení mikrocirkulace v periferních tkáních a mozku",
      "podpora normalizace krevního tlaku",
      "ochrana endotelu cév před aterosklerotickými plaky"
    ],
    dosage: {
      "short": "100–200 mcg subkutánně (nebo 10–20 mg orálně) denně po dobu 10–20 dnů",
      "long": "Aplikuje se 100–200 mcg subkutánně denně ráno po dobu 10–20 dnů 2x do roka. Nebo orálně 10–20 mg v kapslích."
    },
    warning: "Výborná tolerance bez nežádoucích účinků.",
    mechanism: "Regulace genové exprese v cévních endoteliálních buňkách; stimulace syntézy vaskulárních strukturálních proteinů.",
    halfLife: "Rychlý obrat v plazmě, tkáňový efekt trvá měsíce",
    interactions: ["Pinealon (synergie pro prokrvení a regeneraci mozkových cév)"],
    naturalSources: ["bioregulační peptid cévních stěn telat"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 754,
    name: "Endoluten",
    categoryKey: "experimental",
    tags: ["endoluten", "epifyza", "melatonin", "cirkadianni", "bioregulator"],
    rating: 5,
    colorType: "green",
    shortDesc: "Přírodní peptidový extrakt epifýzy normalizující celý neuroendokrinní systém.",
    description: "Endoluten je purifikovaný přírodní peptidový extrakt z epifýzy (pineální žlázy) mladých zvířat. V Khavinsonově bioregulační medicíně je považován za 'krále všech bioregulátorů'. Epifýza je centrálním časovačem celého hormonálního systému. Endoluten obnovuje fyziologickou syntézu vlastního melatoninu, synchronizuje biologické hodiny a normalizuje funkci celé endokrinní soustavy včetně vaječníků, varlat a štítné žlázy.",
    effects: [
      "přirozená obnova noční sekrece endogenního melatoninu",
      "synchronizace cirkadiánního rytmu a hluboká obnova vitality",
      "normalizace neuroendokrinní rovnováhy a prodloužení biologického věku",
      "podpora reprodukčního systému u mužů i žen"
    ],
    dosage: {
      "short": "20 mg orálně ráno nalačno každé 3 dny po dobu 1 měsíce",
      "long": "V orální formě v kapslích se užívá 20 mg (1 kapsle) ráno nalačno každé 3 dny po dobu jednoho měsíce (celkem 10 kapslí v kúře). Kúra se opakuje 2x ročně."
    },
    warning: "Výjimečně bezpečný přírodní peptidový extrakt bez lékových interakcí.",
    mechanism: "Epigenetická indukce genové exprese v pinealocytech s normalizací enzymu serotonin N-acetyltransferázy (AANAT).",
    halfLife: "Dlouhodobý bioregulační účinek přetrvává 4–6 měsíců po kúře",
    interactions: ["Epithalon (syntetický analog Endolutenu)"],
    naturalSources: ["přírodní peptidový extrakt z epifýzy mladých telat"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 755,
    name: "Prostamax",
    categoryKey: "experimental",
    tags: ["prostamax", "prostata", "bioregulator", "moceni", "peptid"],
    rating: 4,
    colorType: "green",
    shortDesc: "Bioregulační peptid prostaty snižující zánět, otok a potíže s močením.",
    description: "Prostamax (Libidon) je peptidový bioregulátor tvořený specifickými nízkomolekulárními peptidy extrahovanými z prostatické tkáně. Působí přímo v buňkách předstojné žlázy: normalizuje metabolismus v buňkách prostaty, snižuje otok a leukocytární infiltraci, zlepšuje urodynamiku močového měchýře a podporuje mikrocirkulaci v pánevním dnu u mužů s benigní hyperplazií prostaty (BPH) nebo chronickou prostatitidou.",
    effects: [
      "redukce otoku a zánětu v prostatické tkáni",
      "výrazné zlepšení proudu moči a vymizení pocitu neúplného vyprázdnění",
      "eliminace nočního probouzení kvůli močení (nykturie)",
      "podpora kvality ejakulátu a potence"
    ],
    dosage: {
      "short": "10–20 mg orálně (nebo 100 mcg subkutánně) denně po dobu 20–30 dnů",
      "long": "Užívá se 10–20 mg orálně v kapslích ráno před jídlem po dobu 20 až 30 dnů. Kúra se opakuje každých 6 měsíců."
    },
    warning: "Bezpečný přírodní peptid bez vedlejších účinků na hormonální hladiny (nesnižuje testosteron ani DHT).",
    mechanism: "Epigenetická obnova diferenciace a proteosyntézy v epiteliálních buňkách prostaty.",
    halfLife: "Bioregulační efekt přetrvává měsíce po ukončení kúry",
    interactions: ["Saw Palmetto (komplementární bylinná synergie pro prostatu)"],
    naturalSources: ["peptidový extrakt prostaty mladých býků"],
    bannedStatus: "experimental / research chemical"
  },
  {
    id: 756,
    name: "Bronchogen",
    categoryKey: "experimental",
    tags: ["bronchogen", "plice", "dychani", "bioregulator", "peptid"],
    rating: 4,
    colorType: "green",
    shortDesc: "Bioregulační tetrapeptid plic a průdušek podporující regeneraci epitelu dýchacích cest.",
    description: "Bronchogen je syntetický bioregulační tetrapeptid složený z aminokyselin Ala-Asp-Glu-Leu (alanin, kyselina asparagová, kyselina glutamová, leucin). Je specificky zacílen na epiteliální tkáň plic a průdušek. Zvyšuje funkční aktivitu řasinkového epitelu, urychluje odkašlávání a čištění dýchacích cest, snižuje bronchiální hyperreaktivitu a křeče a stimuluje regeneraci plicní tkáně po prodělaných respiračních infekcích nebo u kuřáků.",
    effects: [
      "stimulace regenerace sliznice průdušek a plicních alveolů",
      "zlepšení funkce řasinkového epitelu a samočištění plic",
      "snížení záchvatů kašle a pocitu dušnosti",
      "podpora dechové kapacity u sportovců a kuřáků"
    ],
    dosage: {
      "short": "100–200 mcg subkutánně (nebo 10–20 mg orálně) denně po dobu 10–20 dnů",
      "long": "Aplikuje se 100–200 mcg subkutánně nebo 10–20 mg orálně denně po dobu 10–20 dnů. Vhodné na podzim/zimu pro posílení plic."
    },
    warning: "Zcela netoxický bioregulační peptid bez nežádoucích účinků.",
    mechanism: "Regulace genové exprese strukturálních a obranných proteinů v bronchiálních epiteliálních buňkách.",
    halfLife: "Krátký obrat, tkáňový efekt přetrvává měsíce",
    interactions: ["NAC (synergie v rozpouštění hlenu v dýchacích cestách)"],
    naturalSources: ["tetrapeptid odvozený z bronchiální tkáně"],
    bannedStatus: "experimental / research chemical"
  }
];

console.log(`Loaded ${experimentalData.length} comprehensive experimental/peptide definitions.`);
module.exports = { experimentalData };
