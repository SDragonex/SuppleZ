/**
 * SuppleZ Database Enrichment & Normalization Tool
 * Fills complete scientific medical data for all substances.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');

// 1. HEALTH ENRICHMENTS (IDs 124 - 131)
const healthAdditions = [
  {
    id: 124,
    name: "Spermidin",
    categoryKey: "health",
    tags: ["longevity", "autofagie", "kardiovaskulární", "buňky"],
    rating: 5,
    colorType: "green",
    shortDesc: "Přírodní polyamin stimulující autofagii a buněčné čištění.",
    description: "Spermidin je tělu vlastní alifatický polyamin obsažený v pšeničných klíčcích, sóji a zrajících sýrech. Je jedním z nejlépe prozkoumaných induktorů autofagie – procesu, při němž buňky rozkládají a recyklují poškozené organely a agregované bílkoviny. Podporuje kardiovaskulární zdraví, buněčné omlazení a kognitivní funkce.",
    effects: [
      "indukce buněčné autofagie",
      "kardioprotekce a elasticita cév",
      "podpora dlouhověkosti",
      "ochrana mitochondrií"
    ],
    dosage: {
      "short": "1–3 mg denně (čistý spermidin)",
      "long": "Běžná dávka je 1–3 mg čistého spermidinu denně (odpovídá 800–1200 mg standardizovaného extraktu z pšeničných klíčků). Užívá se s jídlem ráno nebo v poledne."
    },
    warning: "Výborný bezpečnostní profil. U onkologických pacientů s aktivním tumorem konzultovat s lékařem kvůli vlivu polyaminů na buněčný růst.",
    mechanism: "Inhibice acetyltransferázy EP300, hypusilace translačního faktoru eIF5A a upregulace transkripce autofagických genů (ATG5, ATG7).",
    halfLife: "Cirkulující v plazmě cca 1–2 hodiny, intracelulární metabolický obrat 24–48 hodin",
    interactions: [
      "resveratrol (aditivní autofagický efekt)",
      "NMN / NAD+ donory (synergická buněčná oprava)",
      "inhibitory polyaminové syntézy"
    ],
    naturalSources: ["pšeničné klíčky", "sójové boby (natto)", "zrající sýry", "houby shiitake"],
    bannedStatus: "legal"
  },
  {
    id: 125,
    name: "Fisetin",
    categoryKey: "health",
    tags: ["senolytikum", "longevity", "flavonoid", "antioxidant"],
    rating: 5,
    colorType: "green",
    shortDesc: "Silný rostlinný flavonoid se senolytickým a protizánětlivým účinkem.",
    description: "Fisetin je přírodní polyfenolický flavonoid přítomný v jahodách, jablkách a persimonech. V preklinických studiích Mayo Clinic prokázal mimořádnou schopnost selektivně eliminovat senescentní („zombie“) buňky, které vylučují prozánětlivé cytokiny SASP. Podporuje zdravé stárnutí tkání, elasticitu cév a kognitivní funkce.",
    effects: [
      "selektivní senolýza stárnoucích buněk",
      "redukce chronického systémového zánětu (SASP)",
      "aktivace sirtuinů (SIRT1)",
      "ochrana mozkových neuronů"
    ],
    dosage: {
      "short": "100–500 mg denně nebo pulzně 20 mg/kg",
      "long": "Pro běžnou antioxidační podporu 100–300 mg denně s tuky. Pro senolytický pulzní protokol (Mayo Clinic protokol) se podává 20 mg/kg tělesné hmotnosti po dobu 2–3 po sobě jdoucích dnů jednou za měsíc."
    },
    warning: "Dobře snášen. Vzhledem k lipofilní povaze vyžaduje konzumaci s kvalitními tuky (např. olivový olej nebo lecitin) pro dostatečnou biologickou dostupnost.",
    mechanism: "Downregulace anti-apoptotických drah BCL-2 a BCL-xL v senescentních buňkách, inhibice PI3K/Akt/mTOR osy a aktivace AMPK.",
    halfLife: "3–4 hodiny (v plazmě), biologické senolytické účinky přetrvávají týdny",
    interactions: [
      "kvercetin (senolytická synergie)",
      "antikoagulancia (mírné antiagregační působení)",
      "léčiva metabolizovaná CYP3A4"
    ],
    naturalSources: ["jahody", "jablka", "persimony", "cibule", "okurky"],
    bannedStatus: "legal"
  },
  {
    id: 126,
    name: "Ca-AKG (Alfa-ketoglutarát vápenatý)",
    categoryKey: "health",
    tags: ["longevity", "epigenetika", "mitochondrie", "kosti"],
    rating: 5,
    colorType: "green",
    shortDesc: "Klíčový meziprodukt Krebsova cyklu pro epigenetické omlazení.",
    description: "Alfa-ketoglutarát vápenatý (Ca-AKG) je stabilní vápenatá sůl centrálního metabolitu Krebsova cyklu. Hladina AKG v těle dramaticky klesá mezi 40. a 80. rokem života až o 90 %. Suplementace Ca-AKG prokázala schopnost zvrátit biologický věk (měřený DNA metylačními hodinami) a podporovat syntézu kolagenu, kostní minerální hustotu a buněčné dýchání.",
    effects: [
      "modulace epigenetických DNA demetyláz",
      "podpora mitochondriální produkce ATP",
      "syntéza prolinu a hydroxyprolinu pro kolagen",
      "snížení systémových zánětlivých markerů"
    ],
    dosage: {
      "short": "1000–1500 mg denně",
      "long": "Doporučená dávka je 1000 mg denně nalačno nebo s lehkým jídlem ráno. Při intenzivní longevity kůře až 1500 mg rozděleno do dvou dávek."
    },
    warning: "Velmi bezpečný profil. U jedinců s poruchou metabolismu vápníku nebo hyperkalcémií kontrolovat příjem vápníku.",
    mechanism: "Kofaktor pro TET enzymy a JmjC demetylázy histonů; inhibice ATP syntázy vedoucí k aktivaci AMPK a autofagie; regulace mTOR dráhy.",
    halfLife: "Plazmatický poločas cca 60–90 minut, intracelulární metabolické ovlivnění dlouhodobé",
    interactions: [
      "NMN / NR (zesílení energetického metabolismu)",
      "vápníkové blokátory (nutno zohlednit vázaný iont vápníku)",
      "tetracyklinová antibiotika (oddělit o 3 hodiny kvůli vápníku)"
    ],
    naturalSources: ["endogenní metabolit Krebsova cyklu", "stopově ve fermentovaných potravinách"],
    bannedStatus: "legal"
  },
  {
    id: 127,
    name: "Astaxanthin",
    categoryKey: "health",
    tags: ["antioxidant", "oči", "kůže", "mitochondrie"],
    rating: 5,
    colorType: "green",
    shortDesc: "Král karotenoidů chránící buněčné membrány zevnitř i zvenčí.",
    description: "Astaxanthin je červený keto-karotenoid získávaný z mikrořasy Haematococcus pluvialis. Na rozdíl od jiných antioxidantů jeho unikátní molekulární struktura překlenuje celou fosfolipidovou dvojvrstvu buněčné membrány, čímž chrání buňku zevnitř i zvenku bez rizika, že by se stal pro-oxidantem. Má 6000x vyšší antioxidační kapacitu než vitamín C proti volným hydroxylovým radikálům.",
    effects: [
      "ochrana buněčných membrán a mitochondrií",
      "zlepšení elasticity kůže a ochrana před UV zářením",
      "snížení únavy očí a podpora makulárního pigmentu",
      "urychlení svalové regenerace po zátěži"
    ],
    dosage: {
      "short": "4–12 mg denně s jídlem",
      "long": "Základní protektivní dávka je 4–8 mg denně. Pro sportovce a při zvýšené zátěži očí nebo kůže 12 mg denně. Vždy užívat společně s jídlem obsahujícím tuky pro maximální vstřebatelnost."
    },
    warning: "Zcela netoxický. Při velmi vysokých dávkách (>24 mg) může dojít k neškodnému oranžovému zabarvení stolice a mírnému tónování pokožky.",
    mechanism: "Překlenutí membránové lipidové dvojvrstvy a neutralizace reaktivních forem kyslíku (ROS); aktivace dráhy Nrf2-ARE; inhibice NF-kB.",
    halfLife: "16–21 hodin (výborná stabilní tkáňová akumulace)",
    interactions: [
      "Omega-3 EPA/DHA (synergická absorpce v tucích)",
      "lutein a zeaxantin (komplementární ochrana sítnice)",
      "statiny (astaxanthin redukuje statiny indukovanou myopatii)"
    ],
    naturalSources: ["řasa Haematococcus pluvialis", "divoký losos", "krill", "krevety"],
    bannedStatus: "legal"
  },
  {
    id: 128,
    name: "Sulforafan",
    categoryKey: "health",
    tags: ["detoxikace", "nrf2", "antioxidant", "epigenetika"],
    rating: 5,
    colorType: "green",
    shortDesc: "Nejsilnější přírodní aktivátor buněčné antioxidační obrany Nrf2.",
    description: "Sulforafan je organosírová sloučenina ze skupiny isothiokyanátů vznikající štěpením glukorafaninu enzymem myrosinázou v brukvovité zelenině (zejména v brokolicových klíčcích). Funguje jako master-spínač buněčné obrany tím, že aktivuje transkripční faktor Nrf2, který spouští produkci stovek endogenních detoxikačních enzymů 2. fáze a antioxidačních enzymů včetně glutathionu.",
    effects: [
      "masivní stimulace Nrf2 antioxidační dráhy",
      "indukce detoxikačních enzymů II. fáze v játrech",
      "podpora eliminace karcinogenů a toxických zplodin",
      "inhibice HDAC (epigenetická ochrana DNA)"
    ],
    dosage: {
      "short": "10–30 mg volného sulforafanu denně",
      "long": "Doporučuje se 10–30 mg stabilizovaného volného sulforafanu (nebo extrakt z brokolicových klíčků s garantovaným obsahem aktivní myrosinázy) ráno na lačno nebo s lehkým jídlem."
    },
    warning: "U extraktů bez myrosinázy je konverze z glukorafaninu ve střevech velmi nízká. Může mírně dráždit citlivý žaludek nalačno.",
    mechanism: "Alkylace cysteinových zbytků proteinu Keap1, disociace transkripčního faktoru Nrf2 a jeho translokace do buněčného jádra s vazbou na sekvence ARE (Antioxidant Response Element).",
    halfLife: "2–3 hodiny v krvi, epigenetická indukce enzymů trvá 48–72 hodin",
    interactions: [
      "selen (synergie pro syntézu glutathion peroxidázy)",
      "léky metabolizované cytochromem P450 fáze I (modulace aktivity)"
    ],
    naturalSources: ["brokolicové klíčky (3–4 dny staré)", "syrová brokolice", "růžičková kapusta", "rukola"],
    bannedStatus: "legal"
  },
  {
    id: 129,
    name: "PQQ (Pyrrolochinolin chinon)",
    categoryKey: "health",
    tags: ["mitochondrie", "energie", "mozek", "biogeneze"],
    rating: 5,
    colorType: "green",
    shortDesc: "Mitochondriální kofaktor stimulující vznik nových buněčných elektráren.",
    description: "PQQ (Pyrrolochinolin chinon) je redoxní kofaktor a mikronutrient s unikátní schopností stimulovat mitochondriální biogenezi – tedy tvorbu zcela nových mitochondrií v buňkách s vysokým energetickým výdejem (mozek, srdce, kosterní svaly). Vykazuje 20 000x vyšší katalytickou kapacitu redoxního cyklování než vitamín C.",
    effects: [
      "mitochondriální biogeneze (vznik nových mitochondrií)",
      "zvýšení buněčné produkce energie (ATP)",
      "neuroprotekce a stimulace faktoru NGF",
      "kardioprotekce srdečního svalu"
    ],
    dosage: {
      "short": "10–20 mg denně ráno",
      "long": "Standardní terapeutická dávka je 10–20 mg disodné soli PQQ denně ráno se snídaní. Vynikající synergie s koenzymem Q10 (100–200 mg)."
    },
    warning: "Výborně snášen, bez známých nežádoucích účinků při doporučeném dávkování.",
    mechanism: "Aktivace cAMP-responzivního elementu CREB a transkripčního koaktivátoru PGC-1alfa, který přímo řídí replikaci a tvorbu nových mitochondrií.",
    halfLife: "Plazmatický poločas eliminace cca 3–5 hodin, bioenergetický efekt přetrvává",
    interactions: [
      "Koenzym Q10 (silná klinicky ověřená synergie pro kognici a ATP)",
      "NMN / NR (komplementární podpora mitochondriálního zdraví)"
    ],
    naturalSources: ["fermentované sójové boby (natto)", "zelený čaj", "papáje", "petržel", "mateřské mléko"],
    bannedStatus: "legal"
  },
  {
    id: 130,
    name: "Kyselina hyaluronová",
    categoryKey: "health",
    tags: ["klouby", "kůže", "hydratace", "vazy"],
    rating: 5,
    colorType: "green",
    shortDesc: "Vysokomolekulární glykosaminoglykan pro hydrataci tkání a kloubní maz.",
    description: "Kyselina hyaluronová (hyaluronan) je přirozený nesulfatovaný glykosaminoglykan tvořící hlavní složku extracelulární matrix, synoviální tekutiny v kloubech a dermis. Dokáže na sebe navázat až 1000násobek své hmotnosti ve vodě. Orální suplementace kombinuje vysokomolekulární formu (promazání kloubů a střevní bariéra) a nízkomolekulární formu (vstřebání do krevního oběhu a hydratace hlubokých vrstev kůže).",
    effects: [
      "zvýšení viskozity synoviální kloubní tekutiny",
      "hloubková hydratace a elasticita pokožky",
      "redukce tření a opotřebení kloubních chrupavek",
      "urychlení regenerace pojivových tkání"
    ],
    dosage: {
      "short": "100–200 mg denně",
      "long": "Užívejte 100–200 mg denně zapité velkým množstvím vody (nejlépe 300–400 ml). Účinek se plně rozvíjí po 4–8 týdnech pravidelného užívání."
    },
    warning: "Bezpečná látka přirozená tělu. Klíčové je pít dostatek tekutin, jinak hyaluronan nemůže plnit svou hydratační funkci.",
    mechanism: "Vazba na buněčný povrchový receptor CD44 na chondrocytech a fibroblastech, stimulace endogenní syntézy hyaluronanu a inhibice degradativních enzymů MMP.",
    halfLife: "V tkáních 1–3 dny (v synoviální tekutině až několik dní)",
    interactions: [
      "kolagenní peptidy (synergická výstavba kloubní matrix)",
      "vitamín C (nezbytný kofaktor pro kolagenní a vazivové syntézy)"
    ],
    naturalSources: ["kostní vývary", "drůbeží a hovězí chrupavky", "endogenní syntéza hyaluronansyntázami"],
    bannedStatus: "legal"
  },
  {
    id: 131,
    name: "Kolagenní peptidy (Hydrolyzovaný kolagen)",
    categoryKey: "health",
    tags: ["klouby", "šlachy", "kůže", "regenerace"],
    rating: 5,
    colorType: "green",
    shortDesc: "Specifické bioaktivní peptidy pro obnovu šlach, vazů a chrupavek.",
    description: "Hydrolyzované kolagenní peptidy jsou enzymaticky naštěpené fragmenty kolagenu typu I, II a III s nízkou molekulovou hmotností (kolem 2–5 kDa). Obsahují vysoké koncentrace unikátních aminokyselin glycinu, prolinu a hydroxyprolinu v di- a tripeptidických vazbách (Pro-Hyp), které se vstřebávají intaktní a přímo stimulují fibroblasty a chondrocyty k syntéze vlastní extracelulární matrix.",
    effects: [
      "obnova a posílení šlach, vazů a kloubní chrupavky",
      "zlepšení elasticity a pevnosti pokožky",
      "podpora syntézy endogenního kolagenu",
      "zkrácení doby hojení pohybového aparátu"
    ],
    dosage: {
      "short": "10–15 g denně s vitamínem C",
      "long": "Standardní dávka je 10–15 g hydrolyzovaného kolagenu denně rozmíchaného ve vodě nebo nápoji. Pro maximální účinek na šlachy užívejte 30–60 minut před tréninkem nebo rehabilitací spolu s 50–100 mg vitamínu C."
    },
    warning: "Velmi bezpečné. U citlivých jedinců může zpočátku způsobit mírné nadýmání při jednorázové vysoké dávce (>20 g).",
    mechanism: "Akumulace bioaktivních dipeptidů Prolyl-hydroxyprolin (Pro-Hyp) v chrupavkách a šlachách, stimulace receptorů integrinů a aktivace syntézy proteoglykanů.",
    halfLife: "Absorpce dipeptidů vrcholí za 1–2 hodiny, tkáňový metabolismus probíhá kontinuálně",
    interactions: [
      "Vitamín C (esenciální kofaktor enzymů prolyl- a lysylhydroxylázy)",
      "Kyselina hyaluronová (komplementární hydratace matrix)"
    ],
    naturalSources: ["kostní vývar", "hovězí a rybí kůže a chrupavky"],
    bannedStatus: "legal"
  }
];

// 2. NOOTROPICS ENRICHMENTS (IDs 613 - 621)
const nootropicsAdditions = [
  {
    id: 613,
    name: "Magnesium L-Threonát (Magtein)",
    categoryKey: "nootropics",
    tags: ["mozek", "paměť", "spánek", "synapse"],
    rating: 5,
    colorType: "green",
    shortDesc: "Jediná forma hořčíku efektivně překonávající hematoencefalickou bariéru.",
    description: "Magnesium L-Threonát (vyvinutý vědci z MIT pod patentovaným názvem Magtein) je specifická chelátová forma hořčíku navázaná na kyselinu threonovou. Na rozdíl od běžných forem hořčíku (citrát, oxid, dokonce i bisglycinát) prokazatelně zvyšuje koncentraci hořčíku přímo v mozkomíšním moku a neuronální tkáni. Zvyšuje hustotu a plasticitu nervových synapsí v hipokampu, zlepšuje krátkodobou i dlouhodobou paměť a usnadňuje hluboký spánek.",
    effects: [
      "zvýšení hladiny hořčíku v mozku a mozkomíšním moku",
      "zvýšení synaptické plasticity a hustoty nervových spojení",
      "zlepšení pracovní paměti, učení a kognitivní rychlosti",
      "zklidnění nervového systému a podpora spánkové architektury"
    ],
    dosage: {
      "short": "1500–2000 mg denně (poskytuje 108–144 mg elementárního Mg)",
      "long": "Standardní dávka Magteinu je 1500–2000 mg denně. Obvykle se rozděluje na 1000 mg odpoledne a 1000 mg cca 1 hodinu před spaním."
    },
    warning: "Výborná tolerance bez projímavých účinků typických pro jiné formy hořčíku. U malého procenta lidí může v prvních dnech vyvolat živé sny nebo lehkou bolest hlavy z adaptace průtoku krve.",
    mechanism: "Přestup přes hematoencefalickou bariéru via glukózové transportéry; aktivace NMDA receptorů zvýšením hustoty funkčních synapsí; upregulace exprese NR2B podjednotek.",
    halfLife: "Plazmatický poločas elementárního Mg cca 24 hodin, akumulace v mozkové tkáni trvá 2–4 týdny",
    interactions: [
      "Apigenin / L-Theanin (synergické zklidnění CNS před spaním)",
      "tetracyklinová a chinolonová antibiotika (oddělit od hořčíku o 3 hodiny)"
    ],
    naturalSources: ["pouze syntetická chelátová vazba s L-threonátem (metabolit vitamínu C)"],
    bannedStatus: "legal"
  },
  {
    id: 614,
    name: "Bromantan (Ladasten)",
    categoryKey: "nootropics",
    tags: ["dopamin", "aktoprotektor", "vytrvalost", "anxiolytikum"],
    rating: 5,
    colorType: "yellow",
    shortDesc: "Ruský aktoprotektor zvyšující dopamin bez vyčerpání a tolerance.",
    description: "Bromantan (N-(2-adamantyl)-N-(4-bromofenyl)amin) je unikátní syntetický derivát adamantanu vyvinutý v Rusku v 80. letech. Patří do vzácné skupiny „aktoprotektorů“ – látek zvyšujících fyzickou a mentální výkonnost v extrémních podmínkách bez zvýšení spotřeby kyslíku nebo přehřátí organismu. Na rozdíl od klasických stimulantů (kofein, amfetaminy) nezpůsobuje závislost, náhlý propad energie ani toleranci, protože působí epigenetickou upregulací enzymů tvořících dopamin.",
    effects: [
      "stimulace syntézy dopaminu a tyrosin hydroxylázy",
      "zvýšení fyzické vytrvalosti a mentálního soustředění",
      "anxiolytický účinek (odstranění úzkosti bez sedace)",
      "imunostimulační a termoprotektivní vlastnosti"
    ],
    dosage: {
      "short": "50–100 mg ráno sublinguálně nebo orálně",
      "long": "Užívá se 50–100 mg ráno, ideálně s jídlem obsahujícím tuky nebo sublinguálně (pod jazyk) pro lepší absorpci. Neužívat odpoledne a večer kvůli riziku nespavosti. Cykluje se 2–4 týdny s následnou pauzou."
    },
    warning: "Zakázáno v profesionálním sportu pod WADA (skupina stimulancií S6). Při orálním požití nalačno má nízkou biodostupnost.",
    mechanism: "Transkripční upregulace enzymů tyrosin hydroxylázy (TH) a aromatické L-aminokyselinové dekarboxylázy (AADC) v substantia nigra; slabá inhibice zpětného vychytávání dopaminu a serotoninu.",
    halfLife: "11–12 hodin (dlouhé stabilní působení)",
    interactions: [
      "L-Tyrosin (dodání substrátu pro syntézu dopaminu)",
      "MAO-A / MAO-B inhibitory (riziko dopaminergní toxicity)",
      "silná psychostimulancia (zvýšené riziko agitovanosti)"
    ],
    naturalSources: ["pouze syntetická sloučenina (adamantanový derivát)"],
    bannedStatus: "banned-sport"
  },
  {
    id: 615,
    name: "Sulbutiamin (Arcalion)",
    categoryKey: "nootropics",
    tags: ["energie", "thiamin", "únava", "paměť"],
    rating: 4,
    colorType: "green",
    shortDesc: "Lipofilní dimer vitamínu B1 s vysokou afinitou pro mozkovou tkáň.",
    description: "Sulbutiamin je syntetická molekula skládající se ze dvou molekul thiaminu (vitamínu B1) spojených disulfidickým můstkem. Díky extrémní lipofilitě snadno prochází hematoencefalickou bariérou mnohem efektivněji než běžný thiamin. V mozku zvyšuje hladiny thiamin trifosfátu, moduluje cholinergní, dopaminergní a glutamátergní neurotransmisi a klinicky se využívá proti astenii a chronické únavě.",
    effects: [
      "potlačení chronické psychické i fyzické únavy",
      "zlepšení konsolidace dlouhodobé paměti",
      "zvýšení motivace a bdělosti",
      "modulace dopaminu v prefrontálním kortexu"
    ],
    dosage: {
      "short": "200–400 mg ráno s tuky",
      "long": "Běžná dávka je 200–400 mg denně ráno se snídaní. Vzhledem k vysoké rozpustnosti v tucích je nezbytné užívat s jídlem. Doporučuje se užívat v cyklech (např. 5 dní v týdnu), aby nedocházelo k adaptaci receptorů."
    },
    warning: "Neužívejte večer (může narušit usínání). Při každodenním kontinuálním užívání po několik měsíců může slábnout stimulační účinek.",
    mechanism: "Zvýšení syntézy thiamin trifosfátu v neuronech, downregulace a následná upregulace D1 dopaminových receptorů v prefrontální kůře, modulace acetylcholinu v hipokampu.",
    halfLife: "Cca 5 hodin",
    interactions: [
      "Cholinergní látky (Alfa-GPC, Huperzin A - synergie v paměťových procesech)",
      "kofein (zesílený stimulační efekt)"
    ],
    naturalSources: ["syntetický derivát thiaminu vyvinutý v Japonsku"],
    bannedStatus: "legal"
  },
  {
    id: 616,
    name: "Fasoracetam (NS-105)",
    categoryKey: "nootropics",
    tags: ["gaba", "adhd", "fokus", "glutamát"],
    rating: 4,
    colorType: "yellow",
    shortDesc: "Racetam upregulující GABA-B receptory a modulující glutamát.",
    description: "Fasoracetam je moderní člen rodiny racetamů zkoumaný pro terapii ADHD a kognitivních poruch. Jeho nejvýznamnější unikátní vlastností je schopnost upregulovat (zvyšovat hustotu) GABA-B receptorů při opakovaném podávání, což z něj činí vysoce ceněné nootropikum pro zklidnění přestimulovaného mozku a obnovu citlivosti po užívání látek jako phenibut.",
    effects: [
      "upregulace a resenzitizace GABA-B receptorů",
      "zlepšení soustředění a potlačení symptomů ADHD",
      "anxiolýza bez útlumu kognice",
      "podpora acetylcholinu v mozkové kůře"
    ],
    dosage: {
      "short": "10–20 mg 1–2x denně sublinguálně nebo perorálně",
      "long": "Začíná se na nízké dávce 10 mg 1–2x denně. Lze užívat sublinguálně pro okamžitější nástup. Maximální denní dávka je obvykle 50 mg."
    },
    warning: "Výzkumné nootropikum. Vyvarujte se kombinace s vysokými dávkami agonistů GABA-B.",
    mechanism: "Agonismus metabotropních glutamátových receptorů mGluR II/III; upregulace hustoty GABA-B receptorů v mozkové kůře a hipokampu; stimulace vychytávání cholinu.",
    halfLife: "4–6 hodin",
    interactions: [
      "Alfa-GPC / Cholin (prevence vyčerpání acetylcholinu typického pro racetamy)",
      "Phenibut / Baclofen (komplexní interakce na GABA-B, může blokovat nebo naopak senzibilizovat)"
    ],
    naturalSources: ["pouze syntetická sloučenina"],
    bannedStatus: "experimental"
  },
  {
    id: 617,
    name: "Aniracetam",
    categoryKey: "nootropics",
    tags: ["ampa", "anxiolytikum", "kreativita", "cholin"],
    rating: 5,
    colorType: "green",
    shortDesc: "Lipofilní racetam stimulující AMPA receptory s anxiolytickým efektem.",
    description: "Aniracetam je v tucích rozpustný analog piracetamu vyvinutý v 70. letech firmou Hoffmann-La Roche. Funguje jako pozitivní alosterický modulátor AMPA receptorů a vykazuje specifický duální účinek: stimuluje kognitivní funkce a slovní plynulost a zároveň působí jako silné anxiolytikum díky modulaci serotoninových (5-HT2A) a dopaminových (D2) receptorů.",
    effects: [
      "zlepšení verbální plynulosti a holistického myšlení",
      "výrazná anxiolýza a snížení sociální úzkosti",
      "zvýšení synaptické plasticity přes AMPA receptory",
      "neuroprotekce proti excitotoxicitě"
    ],
    dosage: {
      "short": "750 mg 1–2x denně s tuky",
      "long": "Standardní dávka je 750 mg jednou až dvakrát denně. Jelikož je rozpustný v tucích, je nutné jej zapít mlékem, olejem nebo užít po jídle s obsahem lipidů. Vždy kombinovat se zdrojem cholinu (např. 250 mg Alfa-GPC)."
    },
    warning: "Při užití bez cholinu může způsobit typickou 'racetamovou bolest hlavy'.",
    mechanism: "Pozitivní alosterická modulace AMPA receptorů (zpomalení jejich desenzitizace); stimulace uvolňování acetylcholinu, dopaminu a serotoninu v prefrontální kůře a hipokampu.",
    halfLife: "1–2.5 hodiny (krátký poločas, metabolity zůstávají aktivní déle)",
    interactions: [
      "Alfa-GPC / Citicolin (nutný zdroj cholinu pro acetylcholin)",
      "kofein / L-theanin (synergie kognitivního toku)"
    ],
    naturalSources: ["pouze syntetická sloučenina"],
    bannedStatus: "legal"
  },
  {
    id: 618,
    name: "Oxiracetam",
    categoryKey: "nootropics",
    tags: ["paměť", "stimulace", "logika", "energie"],
    rating: 4,
    colorType: "green",
    shortDesc: "Mírně stimulační ve vodě rozpustný racetam podporující logické myšlení.",
    description: "Oxiracetam je hydroxylovaný derivát piracetamu. Na rozdíl od aniracetamu je plně rozpustný ve vodě a má spíše čistě stimulační, pro-kognitivní profil zaměřený na logické operace, matematické myšlení a zpracování dat. Zvyšuje hladiny ATP v mozku a stimuluje syntézu proteinů nezbytných pro dlouhodobou potenciaci (LTP).",
    effects: [
      "stimulace logického uvažování a analytického myšlení",
      "zvýšení mentální energie a oddálení kognitivního vyčerpání",
      "urychlení konsolidace paměťových stop",
      "stimulace metabolismu mozkového ATP"
    ],
    dosage: {
      "short": "600–800 mg 1–2x denně",
      "long": "Standardní dávka je 600–800 mg ráno a v poledne zapitá vodou. Lze užívat nalačno. Neužívejte v pozdních odpoledních hodinách, aby nenarušil spánek."
    },
    warning: "Jako u všech racetamů je nutné zajistit dostatečný příjem cholinu k prevenci bolestí hlavy.",
    mechanism: "Pozitivní modulace AMPA a NMDA glutamátových receptorů; aktivace proteinkinázy C (PKC) a stimulace uvolňování acetylcholinu v hipokampu.",
    halfLife: "6–8 hodin (stabilnější než aniracetam)",
    interactions: [
      "Alfa-GPC (dodávka acetylcholinu)",
      "Modafinil (silná aditivní bdělost, nutná opatrnost)"
    ],
    naturalSources: ["pouze syntetická sloučenina"],
    bannedStatus: "legal"
  },
  {
    id: 619,
    name: "Sabroxy (Oroxylin A)",
    categoryKey: "nootropics",
    tags: ["dopamin", "bdnf", "fokus", "rostlinný"],
    rating: 5,
    colorType: "green",
    shortDesc: "Přírodní inhibitor zpětného vychytávání dopaminu a stimulátor BDNF.",
    description: "Sabroxy je standardizovaný extrakt z kůry stromu Oroxylum indicum obsahující vysoké koncentrace oroxylinu A. Jedná se o jedno z mála vědecky doložených rostlinných nootropik, které funguje jako účinný inhibitor zpětného vychytávání dopaminu (DRI) a negativní alosterický modulátor GABA-A receptorů. Výrazně zvyšuje hladinu mozkového neurotrofického faktoru (BDNF) a neurogenezi v hipokampu.",
    effects: [
      "výrazné zostření pozornosti a soustředění",
      "zvýšení motivace a dopaminergního tonusu",
      "masivní stimulace exprese BDNF a neuroplasticity",
      "podpora pracovní paměti"
    ],
    dosage: {
      "short": "100–500 mg ráno",
      "long": "Začátečníci 100 mg ráno. Zkušení uživatelé 250–500 mg nalačno před mentálním výkonem. Nepodávat po 14:00 hodině."
    },
    warning: "Díky inhibici GABA-A může u predisponovaných jedinců vyvolat mírnou nervozitu nebo úzkost při vysokých dávkách. Lze kombinovat s L-theaninem pro vyhlazení stimulace.",
    mechanism: "Inhibice dopaminového transportéru (DAT), inhibice vazby na benzodiazepinové vazebné místo GABA-A receptorů a stimulace CREB fosforylace vedoucí k uvolnění BDNF.",
    halfLife: "Cca 2–4 hodiny",
    interactions: [
      "L-Theanin (vynikající synergie pro fokus bez nervozity)",
      "kofein (aditivní stimulace)",
      "antikonvulziva (vyhýbat se kvůli negativní modulaci GABA)"
    ],
    naturalSources: ["kůra stromu Oroxylum indicum (oroxylum indické)", "Scutellaria baicalensis"],
    bannedStatus: "legal"
  },
  {
    id: 620,
    name: "7,8-Dihydroxyflavon (7,8-DHF)",
    categoryKey: "nootropics",
    tags: ["bdnf", "trkb", "neurogeneze", "paměť"],
    rating: 5,
    colorType: "green",
    shortDesc: "Přírodní molekula přímo aktivující receptor TrkB jako mimetikum BDNF.",
    description: "7,8-Dihydroxyflavon (7,8-DHF) je monomerní flavonoid přítomný v listech stromu Godmania aesculifolia a Tridax procumbens. Je průlomový tím, že funguje jako přímý, biologicky dostupný orální agonista receptoru tropomyosin-receptorové kinázy B (TrkB) – hlavního receptoru pro BDNF (mozkový neurotrofický faktor). Zatímco samotný BDNF nemůže projít přes hematoencefalickou bariéru, 7,8-DHF jí prochází snadno a spouští identické neuroplastické a neuroprotektivní signály.",
    effects: [
      "přímá aktivace TrkB receptoru (simulace BDNF)",
      "indukce synaptogeneze a dendritického větvení",
      "obnova plasticity hipokampu a dlouhodobé paměti",
      "neuroprotekce proti oxidačnímu stresu a excitotoxicitě"
    ],
    dosage: {
      "short": "25–50 mg ráno sublinguálně",
      "long": "Běžná dávka je 25–50 mg denně ráno. Vzhledem k jaternímu first-pass metabolismu se silně doporučuje sublinguální aplikace (podržet pod jazykem 5–10 minut)."
    },
    warning: "Při orálním spolknutí má nižší biologickou dostupnost (kolem 5 %), proto je preferována sublinguální forma.",
    mechanism: "Přímá vazba na extracelulární doménu receptoru TrkB, jeho autofosforylace a spuštění signálních kaskád MAPK/ERK a PI3K/Akt.",
    halfLife: "Cca 2 hodiny v plazmě, downstream neurotrofické účinky přetrvávají dny",
    interactions: [
      "Lion's Mane (synergická stimulace neurogeneze NGF + TrkB)",
      "Magnesium L-Threonát (synergická výstavba synapsí)"
    ],
    naturalSources: ["strom Godmania aesculifolia", "bylina Tridax procumbens", "Primula veris"],
    bannedStatus: "legal"
  },
  {
    id: 621,
    name: "Centrophenoxine (Meclofenoxát)",
    categoryKey: "nootropics",
    tags: ["cholin", "lipofuscin", "mozek", "energie"],
    rating: 4,
    colorType: "green",
    shortDesc: "Výkonný donor cholinu a odstraňovač buněčného pigmentu stárnutí.",
    description: "Centrophenoxine (Meclofenoxát) je ester dimethylaminoethanolu (DMAE) a kyseliny parachlorfenoxyoctové (pCPA). Proniká hematoencefalickou bariérou podstatně efektivněji než čistý DMAE. V mozku působí jako silný prekurzor acetylcholinu a vykazuje mimořádnou, klinicky ověřenou schopnost čistit neurony od lipofuscinu – toxického „pigmentu stárnutí“, který se s věkem hromadí v buňkách mozku a srdce.",
    effects: [
      "odstraňování lipofuscinu z neuronů a buněk mozku",
      "zvýšení hladiny acetylcholinu v CNS",
      "zlepšení průtoku krve a absorpce kyslíku v mozku",
      "zvýšení mentální energie a koncentrace"
    ],
    dosage: {
      "short": "250–500 mg 1–2x denně ráno/v poledne",
      "long": "Obvyklá dávka je 250–500 mg ráno s jídlem. Pro intenzivní kognitivní očistu lze užívat 500 mg 2x denně po dobu 1–2 měsíců. Neužívat večer."
    },
    warning: "Může způsobit svalové napětí v čelisti nebo krku při předávkování (přebytek acetylcholinu). V takovém případě snížit dávku.",
    mechanism: "Konverze na DMAE a následně fosfatidylcholin; stimulace syntézy acetylcholinu; aktivace enzymů degradujících lipofuscinové agregáty v lysozomech.",
    halfLife: "2–4 hodiny",
    interactions: [
      "Racetamy (perfektní cholinergní základ pro piracetam, aniracetam)",
      "inhibitory acetylcholinesterázy (sčítání cholinergního účinku)"
    ],
    naturalSources: ["pouze syntetická sloučenina (vyvinuto v Institut Pasteur)"],
    bannedStatus: "legal"
  }
];

// 3. PCT ENRICHMENTS (IDs 911 - 913)
const pctAdditions = [
  {
    id: 911,
    name: "Enclomiphene Citrate (Enclomifen)",
    categoryKey: "pct",
    tags: ["SERM", "HPTA", "testosteron", "LH", "FSH"],
    rating: 5,
    colorType: "green",
    shortDesc: "Čistý trans-izomer klomifenu – nejmodernější a nejčistší stimulátor HPTA osy.",
    description: "Enclomiphene je purifikovaný trans-izomer klomifen citrátu (na rozdíl od klasického Clomidu, který je směsí enclomifenu a zuclomifenu v poměru 62:38). Zuclomifen je slabý estrogenní agonista s dlouhým poločasem (30 dní), který způsobuje emoční labilitu, poruchy nálad a potlačení libida. Enclomiphene je čistý, vysoce potentní antagonista estrogenových receptorů v hypofýze s krátkým poločasem, který masivně zvyšuje pulzní sekreci LH a FSH bez jakýchkoliv estrogenních vedlejších účinků.",
    effects: [
      "silná stimulace sekrece hypofyzárního LH a FSH",
      "masivní obnova endogenní produkce testosteronu v Leydigových buňkách",
      "podpora spermatogeneze a testikulárního objemu",
      "absence emočních výkyvů a estrogenních nežádoucích účinků typických pro Clomid"
    ],
    dosage: {
      "short": "12.5–25 mg denně ráno",
      "long": "V rámci PCT protokolu se užívá 12.5–25 mg denně po dobu 4–6 týdnů. Pro léčbu sekundárního hypogonadismu postačuje 12.5 mg každý den nebo každý druhý den."
    },
    warning: "Na předpis / výzkumná substance. Může způsobit mírné zvýšení IGF-1 suprese (typické pro perorální SERMy). Kontrolovat hladiny celkového a volného testosteronu, LH, FSH a estradiolu.",
    mechanism: "Selektivní kompetitivní antagonismus estrogenových receptorů (ER-alfa a ER-beta) v hypotalamu a předním laloku hypofýzy, odstranění negativní zpětné vazby cirkulujících estrogenů a spuštění pulzního uvolňování GnRH, LH a FSH.",
    halfLife: "10–12 hodin (na rozdíl od zuclomifenu s poločasem 30 dní)",
    interactions: [
      "Aromatázové inhibitory (při souběhu hrozí nadměrný pád estradiolu)",
      "hCG (enclomifen obnovuje centrální hypofýzu, zatímco hCG přímo stimuluje varlata)",
      "TUDCA / NAC (podpora jater při perorální aplikaci)"
    ],
    naturalSources: ["pouze syntetická farmaceutická látka"],
    bannedStatus: "banned-sport (WADA S4.1 SERM), prescription-only"
  },
  {
    id: 912,
    name: "Telmisartan",
    categoryKey: "pct",
    tags: ["krevní tlak", "kardioprotekce", "PPAR-gamma", "ledviny"],
    rating: 5,
    colorType: "green",
    shortDesc: "Sartany nové generace s duálním účinkem: kontrola krevního tlaku a aktivace PPAR-gamma.",
    description: "Telmisartan je selektivní blokátor receptorů pro angiotensin II (ARB) primárně určený k léčbě arteriální hypertenze. V kulturistice a biohackingu je považován za zlatý standard kardiovaskulární a renální protekce. Na rozdíl od jiných antihypertenziv funguje také jako parciální agonista jaderného receptoru PPAR-gamma, čímž zlepšuje citlivost na inzulín, snižuje viscerální tuk a zabraňuje hypertrofii levé srdeční komory (LVH).",
    effects: [
      "optimalizace krevního tlaku při užívání anabolických látek",
      "ochrana ledvin (snížení intraglomerulárního tlaku a proteinurie)",
      "prevence a regrese hypertrofie levé komory srdeční (LVH)",
      "zvýšení inzulínové senzitivity přes PPAR-gamma dráhu"
    ],
    dosage: {
      "short": "20–40 mg denně ráno",
      "long": "Zahajovací dávka je 20 mg denně ráno. Při těžší hypertenzi indukované retencí vody se navyšuje na 40–80 mg denně. Pravidelně měřit krevní tlak tonometrem."
    },
    warning: "Léčivo vázané na lékařský předpis. Kontrolovat hladiny draslíku v séru (může způsobit hyperkalémii) a funkci ledvin (kreatinin, eGFR). Nekombinovat s draslíkovými doplňky.",
    mechanism: "Selektivní blokáda AT1 receptorů pro angiotensin II vedoucí k vazodilataci a snížení sekrece aldosteronu; strukturální aktivace receptorů PPAR-gamma modulující geny metabolismu lipidů a glukózy.",
    halfLife: "24 hodin (ideální pro stabilní dávkování 1x denně)",
    interactions: [
      "Doplňky s vysokým obsahem draslíku (riziko nebezpečné hyperkalémie)",
      "NSAID analgetika (ibuprofen může snižovat antihypertenzní efekt a zatěžovat ledviny)",
      "diuretika (riziko hypotenze)"
    ],
    naturalSources: ["pouze syntetické léčivo"],
    bannedStatus: "prescription-only"
  },
  {
    id: 913,
    name: "Raloxifen (Evista)",
    categoryKey: "pct",
    tags: ["gynekomastie", "SERM", "kosti", "estrogen"],
    rating: 5,
    colorType: "green",
    shortDesc: "Druhá generace SERM s nejvyšší afinitou pro prsní tkáň a prevenci gynekomastie.",
    description: "Raloxifen je selektivní modulátor estrogenových receptorů (SERM) 2. generace. V klinických srovnávacích studiích prokázal podstatně vyšší úspěšnost v reverzi a prevenci gynekomastie než tamoxifen (Nolvadex). V prsní tkáni působí jako čistý antagonista estrogenu, zatímco v kostní tkáni působí jako agonista (chrání kostní minerální hustotu) a na rozdíl od tamoxifenu nepředstavuje riziko pro děložní nebo oční tkáň.",
    effects: [
      "vysoká účinnost při reverzi počínající i rozvinuté gynekomastie",
      "kompetitivní blokáda estrogenových receptorů v prsní žláze",
      "pozitivní vliv na kostní denzitu a lipidový profil",
      "absence vlivu na endometriální tkáň"
    ],
    dosage: {
      "short": "60 mg denně (akutní gynekomastie: až 120 mg)",
      "long": "Při akutním nástupu gynekomastie (bolest, otok žlázy) se podává 60 mg denně (v těžkých případech 120 mg denně rozděleno do dvou dávek po dobu 2 týdnů, poté snížit na 60 mg) až do úplného odeznění příznaků."
    },
    warning: "Na předpis. Zvyšuje riziko hluboké žilní trombózy (DVT) podobně jako jiné SERMy. Vyhnout se dlouhodobému sezení a dehydrataci.",
    mechanism: "Vazba na estrogenové receptory v prsní tkáni vyvolávající konformační změnu bránící navázání koaktivátorů transkripce; estrogenně-agonistické působení na kosti a metabolismus lipoproteinů.",
    halfLife: "27.7 hodin",
    interactions: [
      "Inhibitory aromatázy (lze kombinovat při silné estrogenní zátěži)",
      "antikoagulancia (může mírně ovlivnit protrombinový čas)",
      "cholestyramin (výrazně snižuje vstřebávání raloxifenu)"
    ],
    naturalSources: ["pouze syntetická farmaceutická látka"],
    bannedStatus: "banned-sport (WADA S4.1), prescription-only"
  }
];

console.log('Enrichment definitions loaded.');
module.exports = { healthAdditions, nootropicsAdditions, pctAdditions };
