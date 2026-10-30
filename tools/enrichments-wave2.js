/**
 * SuppleZ Database Expansion Wave 2 (71 new medical & biohacking compounds)
 * Total target: 319 compounds.
 * 100% complete scientific profiles, 0 emojis, strict schema.
 */

const wave2Data = {
  // === HEALTH & LONGEVITY (10 compounds: 132-141) ===
  health: [
    {
      id: 132,
      name: "Urolithin A (Mitopure)",
      categoryKey: "health",
      tags: ["longevity", "mitochondrie", "mitofagie", "svaly", "vytrvalost"],
      rating: 5,
      colorType: "green",
      shortDesc: "Přírodní metabolit střevního mikrobiomu stimulující mitofágii a obnovu mitochondriální hustoty.",
      description: "Urolithin A je postbiotická sloučenina generovaná lidským mikrobiomem z ellagitanninů (obsažených v granátovém jablku, vlašských ořeších a lesních plodech). Je první známou látkou, která u lidí prokazatelně indukuje mitofágii – selektivní degradaci a recyklaci dysfunkčních a zestárlých mitochondrií. Klinické studie fáze I/II na lidech prokázaly významné zvýšení svalové vytrvalosti, buněčné bioenergetiky a snížení systémového zánětu u dospělých a seniorů.",
      effects: [
        "selektivní aktivace mitofágie v kosterním svalu a myokardu",
        "zvýšení svalové vytrvalosti a snížení únavy",
        "stimulace biogeneze nových funkčních mitochondrií",
        "snížení cirkulujících zánětlivých markerů (CRP)",
        "ochrana buněk před věkem podmíněným metabolickým úpadkem"
      ],
      dosage: {
        "short": "500–1 000 mg denně ráno s jídlem",
        "long": "Doporučená klinická dávka je 500 mg až 1 000 mg denně perorálně ráno se snídaní obsahující tuky pro optimální vstřebání. Doba užívání minimálně 2–4 měsíce pro znatelné zvýšení mitochondriální kapacity."
      },
      warning: "Velmi bezpečný profil bez závažných vedlejších účinků v klinických studiích. Přirozená syntéza ze stravy je u 60–70 % populace nedostatečná kvůli absenci specifických kmenů střevních bakterií (Clostridium species).",
      mechanism: "Aktivace signální dráhy PINK1-Parkin a indukce autofagických procesů specifických pro mitochondrie (mitofágie); upregulace exprese PGC-1alfa a mitochondriálních respiračních enzymů komplexu I a IV.",
      halfLife: "Plazmatický poločas cca 17–24 hodin (glukuronidové a sulfátové metabolity)",
      interactions: [
        "NMN / NR (mohutná synergie: Urolithin čistí staré mitochondrie a NMN dodává palivo pro nové)",
        "Resveratrol (aditivní aktivace sirtuinů)",
        "Koenzym Q10 (podpora elektronového transportního řetězce)"
      ],
      naturalSources: ["granátové jablko", "vlašské ořechy", "maliny", "jahody (při přítomnosti specifického mikrobiomu)"],
      bannedStatus: "legal"
    },
    {
      id: 133,
      name: "Apigenin (Lipozomální / Krystalický)",
      categoryKey: "health",
      tags: ["longevity", "CD38", "NAD+", "spanek", "GABA", "protizanetlivy"],
      rating: 5,
      colorType: "green",
      shortDesc: "Přírodní flavonoid, silný inhibitor enzymu CD38 chránící hladiny NAD+ a modulátor GABA-A.",
      description: "Apigenin (4',5,7-trihydroxyflavon) je bioaktivní rostlinný flavonoid hojně zastoupený v heřmánku a petrželi. V longevity medicíně je ceněn především jako jeden z nejúčinnějších přirozených inhibitorů glykoproteinu CD38 – enzymu, který s věkem rapidně roste a spotřebovává až 90 % buněčných zásob NAD+. Zároveň apigenin prochází hematoencefalickou bariérou a váže se na benzodiazepinová vazebná místa GABA-A receptorů, čímž působí relaxačně, anxiolyticky a prohlubuje fáze hlubokého spánku.",
      effects: [
        "inhibice enzymu CD38 a záchrana buněčného NAD+",
        "prohloubení hlubokých fází spánku (SWS / Slow-Wave Sleep)",
        "alosterická modulace GABA-A receptorů a redukce úzkosti",
        "protizánětlivý účinek potlačením NF-kB a COX-2",
        "podpora autofagie a neuroprotekce"
      ],
      dosage: {
        "short": "50–100 mg před spaním (nebo 200–500 mg extraktu z heřmánku)",
        "long": "Užívejte 50–100 mg čistého apigeninu přibližně 30–60 minut před ulehnutím ke spánku. Pro longevity účel (inhibice CD38) lze kombinovat ráno s NMN."
      },
      warning: "Ve vysokých dávkách může vyvolat mírnou ranní ospalost nebo sedaci. Nekombinovat s farmaceutickými benzodiazepiny a barbituráty bez lékařského dohledu.",
      mechanism: "Nekompetitivní inhibice ektoenzymu CD38 NAD+ nukleosidázy; alosterická vazba na benzodiazepinové vazebné místo GABA-A receptorového komplexu; inhibice aromatázy (CYP19A1) a enzymů rodiny kináz (MAPK).",
      halfLife: "Cca 12 hodin (relativně pomalý rozpad uvolňovaný po celou noc)",
      interactions: [
        "NMN / NAD+ (přímá synergie: apigenin zastaví rozpad NAD+ a NMN maximalizuje syntézu)",
        "Magnesium Bisglycinát (ideální noční relaxační protokol)",
        "L-Theanin (synergické zklidnění mozkových vln)"
      ],
      naturalSources: ["heřmánek pravý (Matricaria chamomilla)", "petržel", "celer", "artyčok"],
      bannedStatus: "legal"
    },
    {
      id: 134,
      name: "Quercetin Phytosome (Kvercetin)",
      categoryKey: "health",
      tags: ["imunita", "senolytikum", "zinek", "ionofor", "antioxidant"],
      rating: 4,
      colorType: "green",
      shortDesc: "Přírodní flavonoid, zinkový ionofor a součást senolytických protokolů pro buněčnou očistu.",
      description: "Quercetin je polyfenolický flavonoid ze skupiny flavonolů. Působí jako mocný intracelulární zinkový ionofor – usnadňuje transport volných iontů zinku (Zn2+) přes lipidovou dvouvrstvu buněčné membrány do nitra buňky, kde zinek blokuje virovou RNA-dependentní RNA polymerázu. Ve vazbě na slunečnicový lecitin (Phytosome) má až 20x vyšší absorpci než standardní krystalický kvercetin. Spolu s fisetinem či dasatinibem je klíčovou součástí senolytických protokolů eliminujících senescentní zombie buňky.",
      effects: [
        "zinkový ionofor (transport zinku přímo do nitra infikovaných buněk)",
        "senolytický účinek (eliminace stárnoucích nefunkčních buněk)",
        "stabilizace žírných buněk a redukce uvolňování histaminu (alergie)",
        "antioxidační ochrana cévního endotelu",
        "podpora mitochondriální biogeneze"
      ],
      dosage: {
        "short": "250–500 mg denně s jídlem (vždy současně se zinkem)",
        "long": "Pro podporu imunity: 250 mg fytosomálního kvercetinu (nebo 500 mg běžného kvercetinu s bromelainem) denně spolu s 15–30 mg bisglycinátu zinku. V senolytických pulsech: 1 000 mg denně po dobu 2–3 po sobě jdoucích dnů jednou za měsíc."
      },
      warning: "Ve vzácných případech může mírně zatěžovat ledviny při extrémních dávkách nad 2 000 mg denně. Opatrnost při současném užívání antibiotik (fluorochinolony).",
      mechanism: "Chelatace a translokace iontů Zn2+ přes plazmatickou membránu; inhibice anti-apoptotických drah BCL-2 a BCL-xL v senescentních buňkách; blokáda degradace histaminových granul v mastocytech.",
      halfLife: "Cca 11–28 hodin",
      interactions: [
        "Zinek (esenciální synergie: kvercetin slouží jako klíč a zinek jako účinná antivirová látka)",
        "Vitamín C (recykluje oxidovaný kvercetin zpět na aktivní formu)",
        "Fisetin (senolytický stack)"
      ],
      naturalSources: ["červená cibule", "kapary", "jablka", "borůvky", "černý a zelený čaj"],
      bannedStatus: "legal"
    },
    {
      id: 135,
      name: "TUDCA (Kyselina tauroursodeoxycholová)",
      categoryKey: "health",
      tags: ["jatra", "chaperon", "ER-stres", "mitochondrie", "cholestaza"],
      rating: 5,
      colorType: "green",
      shortDesc: "Endogenní hydrofilní žlučová kyselina chránící játra a buněčné organely před stresem.",
      description: "TUDCA (Tauroursodeoxycholic acid) je konjugovaná forma ursodeoxycholové kyseliny s aminokyselinou taurinem. Je přirozeně produkována v mikroskopických množstvích v lidských játrech. Působí jako chemický chaperon – stabilizuje terciární strukturu proteinů v endoplazmatickém retikulu (ER), potlačuje ER-stres a zabraňuje aktivaci apoptózy mitochondrií (blokádou proteinu BAX). Je nejúčinnějším hepatoprotektivem při toxickém a cholestatickém poškození jater žlučovými solemi či 17-alfa-alkylovanými látkami.",
      effects: [
        "hluboká ochrana jaterních hepatocytů a žlučových cest",
        "řešení cholestázy a normalizace jaterních enzymů (ALT, AST, GGT)",
        "potlačení stresu endoplazmatického retikula (ER stress)",
        "neuroprotektivní účinek u neurodegenerativních onemocnění",
        "zlepšení inzulínové senzitivity v játrech a svalech"
      ],
      dosage: {
        "short": "250–500 mg 1–2x denně s jídlem",
        "long": "Běžná ochranná dávka: 250–500 mg denně. Při akutní jaterní zátěži nebo poškození žlučovodů: 500 mg 2x denně (ráno a večer) po dobu 4–8 týdnů. Užívat výhradně s jídlem."
      },
      warning: "Neužívejte bezprostředně s konzumací alkoholu (může zvyšovat toxicitu). Při žlučových kamenech konzultujte lékaře.",
      mechanism: "Inhibice translokace proteinu BAX z cytosolu na vnější mitochondriální membránu, čímž brání uvolnění cytochromu c a spuštění kaspázové kaskády; indukce toku žluči přes stimulaci exportních transportérů žlučových solí (BSEP).",
      halfLife: "Plazmatický poločas cca 2–3 hodiny, vysoká enterohepatální recirkulace",
      interactions: [
        "NAC (dvojitá jaterní ochrana: TUDCA na žlučovody a chaperon, NAC na syntézu glutathionu)",
        "Ostropestřec mariánský (komplementární stabilizace membrán)"
      ],
      naturalSources: ["stopová množství v lidské žluči", "tradičně žluč medvěda ušatého"],
      bannedStatus: "legal"
    },
    {
      id: 136,
      name: "NACET (N-Acetylcystein Ethyl Ester)",
      categoryKey: "health",
      tags: ["antioxidant", "glutathion", "plice", "mitochondrie", "biodostupnost"],
      rating: 5,
      colorType: "green",
      shortDesc: "Pokročilá lipofilní forma NAC s 10x vyšší buněčnou a mitochondriální penetrací.",
      description: "NACET (N-acetylcysteine ethyl ester) je esterifikovaný derivát N-acetylcysteinu vytvořený za účelem vyřešení jeho zásadní slabiny – velmi nízké orální biologické dostupnosti (pouze cca 4–9 % u běžného NAC). Díky esterifikaci ztrácí molekula negativní náboj, stává se vysoce lipofilní a snadno prostupuje buněčnými membránami do nitra erytrocytů, mitochondrií a přes hematoencefalickou bariéru do mozku. Uvnitř buňky je esterázami hydrolyzována na volný cystein, čímž dramaticky zvyšuje syntézu redukovaného glutathionu (GSH).",
      effects: [
        "10x vyšší akumulace cysteinu a glutathionu v buňkách oproti NAC",
        "efektivní přestup přes hematoencefalickou bariéru do mozku",
        "masivní antioxidační ochrana mitochondrií a erytrocytů",
        "mukolytický a plicní protektivní účinek",
        "detoxikace těžkých kovů a xenobiotik"
      ],
      dosage: {
        "short": "50–100 mg 1–2x denně nalačno",
        "long": "Vzhledem k mnohonásobně vyšší biodostupnosti stačí dávka 50–100 mg 1–2x denně (odpovídá 600–1 200 mg standardního NAC). Užívat na lačno, zapít sklenicí vody."
      },
      warning: "Má charakteristický sirný zápach (zcela přirozený znak přítomnosti thiolové skupiny). Nepřekračovat doporučené dávkování.",
      mechanism: "Rychlá pasivní difuze lipofilní molekuly přes plazmatickou membránu a membrány mitochondrií; intracelulární enzymatická deesterifikace nespecifickými esterázami na NAC a cystein pro syntézu GSH.",
      halfLife: "Cca 2–4 hodiny (vysoká tkáňová retence)",
      interactions: [
        "Glycin (ideální syntéza glutathionu – obdoba GlyNAC)",
        "Vitamín C a Selen (kofaktory glutathion peroxidázy)"
      ],
      naturalSources: ["syntetický ester aminokyseliny L-cysteinu"],
      bannedStatus: "legal"
    },
    {
      id: 137,
      name: "Kyselina R-alfa-lipoová (R-ALA)",
      categoryKey: "health",
      tags: ["antioxidant", "inzulin", "mitochondrie", "nervy", "glukoza"],
      rating: 4,
      colorType: "green",
      shortDesc: "Přírodní bioaktivní R-enantiomer ALA pro mitochondriální metabolismus a citlivost na inzulín.",
      description: "Kyselina alfa-lipoová je unikátní univerzální antioxidant rozpustný ve vodě i v tucích. Zatímco běžné doplňky stravy obsahují syntetickou racemickou směs (50 % S-ALA a 50 % R-ALA), organismus přirozeně využívá výhradně R-enantiomer (R-ALA). R-ALA je klíčovým kofaktorem mitochondriálních multienzymových komplexů (pyruvátdehydrogenáza a alfa-ketoglutarátdehydrogenáza). Zvyšuje translokaci glukózových transportérů GLUT4 do svalových membrán a regeneruje ostatní antioxidanty (vitamín C, E, glutathion a CoQ10).",
      effects: [
        "zvýšení inzulínové senzitivity a transportu glukózy do svalů (GLUT4)",
        "univerzální antioxidační kapacita ve vodném i lipidovém prostředí",
        "ochrana periferních nervů před diabetickou neuropatií",
        "recyklace oxidovaného vitamínu C, E a glutathionu",
        "podpora mitochondriální tvorby energie (ATP)"
      ],
      dosage: {
        "short": "100–300 mg denně 30 minut před jídlem",
        "long": "Užívejte 100–300 mg stabilizovaného Na-R-ALA (sodná sůl R-ALA má výrazně vyšší stabilitu než volná kyselina) 30 minut před sacharidovým jídlem nalačno."
      },
      warning: "U diabetiků může výrazně snížit glykémii. ALA chelatuje minerály – udržujte odstup 2 hodin od užívání železa, zinku a vápníku.",
      mechanism: "Kofaktorová vazba na lysinové zbytky enzymových komplexů Krebsova cyklu; stimulace fosforylace AMPK a p38 MAPK vedoucí k translokaci GLUT4; redukce thioredoxinu a glutathionu.",
      halfLife: "Cca 30 minut (intracelulární účinky na enzymy přetrvávají dlouhodobě)",
      interactions: [
        "Karnitin (klasický mitochondriální rejuvenační protokol Ames)",
        "Berberin / Metformin (aditivní snížení glykémie)"
      ],
      naturalSources: ["špenát", "brokolice", "hovězí játra a srdce"],
      bannedStatus: "legal"
    },
    {
      id: 138,
      name: "Taurin (Kyselina 2-aminoethansulfonová)",
      categoryKey: "health",
      tags: ["longevity", "srdce", "osmoregulace", "mitochondrie", "svaly"],
      rating: 5,
      colorType: "green",
      shortDesc: "Průlomová longevity molekula zvracející věkem podmíněný úpadek a chránící kardiovaskulární systém.",
      description: "Taurin je sulfonová aminokyselina hojně obsažená v myokardu, kosterním svalu, sítnici a mozku. Průlomová studie publikovaná v časopise Science v roce 2023 prokázala, že hladiny taurinu klesají během života až o 80 % a jeho suplementace prodloužila zdravý dojem života a medián přežití u savců až o 10–12 %. Taurin působí jako klíčový buněčný osmolyt, stabilizuje membrány, váže se na tRNA v mitochondriích a zajišťuje správnou translaci proteinů dýchacího řetězce.",
      effects: [
        "prokázané prodloužení zdravé délky života v preklinických studiích",
        "ochrana myokardu, snížení arteriálního krevního tlaku a pulzu",
        "udržení buněčné hydratace a osmoregulace",
        "tlumení oxidačního stresu a mitochondriální dysfunkce",
        "prevence svalových křečí (včetně křečí způsobených stimulanty)"
      ],
      dosage: {
        "short": "1 000–3 000 mg denně rozděleně",
        "long": "Pro longevity a kardiovaskulární zdraví: 1 500 až 3 000 mg denně rozděleno do dvou dávek (ráno a večer). Vynikající také v pre-workoutu pro buněčný objem."
      },
      warning: "Extrémně bezpečný i při dávkách do 5–6 g denně. Velmi zřídka mírný žaludeční diskomfort při užití nalačno.",
      mechanism: "Tvorba 5-taurinomethyluridinu v mitochondriální tRNA-Leu, což je nezbytné pro syntézu proteinů komplexu I; modulace intracelulárního vápníku (Ca2+) a osmotického tlaku; agonismus na glycinových a GABA-A receptorech.",
      halfLife: "Cca 1–2 dny v tkáních",
      interactions: [
        "Hořčík (vynikající kombinace pro kardiovaskulární stabilitu)",
        "Beta-Alanin (při extrémních dávkách beta-alaninu může soutěžit o transportér TauT – doplňovat taurin)"
      ],
      naturalSources: ["maso", "mořské plody", "ryby", "mateřské mléko"],
      bannedStatus: "legal"
    },
    {
      id: 139,
      name: "Inositol (Myo-Inositol a D-Chiro-Inositol 40:1)",
      categoryKey: "health",
      tags: ["inzulin", "PCOS", "hormony", "mozek", "serotonin"],
      rating: 4,
      colorType: "green",
      shortDesc: "Klíčový sekundární posel pro inzulínovou senzitivitu, hormonální balanc a neurotransmitery.",
      description: "Inositol (dříve označovaný jako vitamín B8) je karbocyklický cukr existující v 9 stereoizomerech, z nichž nejdůležitější jsou Myo-Inositol (MI) a D-Chiro-Inositol (DCI). Slouží jako strukturální základ pro sekundární posly (IP3 a inositol fosfoglykany) v signálních drahách inzulínu, FSH a TSH. Fyziologický poměr 40:1 (Myo:DCI) je celosvětovým zlatým standardem pro léčbu inzulínové rezistence, syndromu polycystických ovarií (PCOS), obnovu ovulace a regulaci serotoninergního přenosu v mozku.",
      effects: [
        "obnova inzulínové senzitivity a stabilizace glykémie",
        "normalizace ovulačního cyklu a snížení hyperandrogenismu u PCOS",
        "zlepšení kvality oocytů a spermií",
        "podpora serotoninergní a GABAergní signalizace (proti úzkostem)",
        "snížení hladiny triglyceridů a krevního tlaku"
      ],
      dosage: {
        "short": "2 000–4 000 mg denně (poměr 40:1 Myo k D-Chiro)",
        "long": "Pro metabolický syndrom a PCOS: 2 000 mg 2x denně (ráno a večer) rozpuštěné ve vodě. Pro psychickou pohodu a spánek: 3 000–6 000 mg večer před spaním."
      },
      warning: "Při náhlém nasazení dávek nad 10 g může způsobit osmotický průjem a nadýmání. Titrujte dávku postupně.",
      mechanism: "Prekurzor fosfatidylinositol-4,5-bisfosfátu (PIP2), ze kterého vzniká IP3 aktivující uvolňování vápníku; DCI aktivuje glykogensyntázu, zatímco MI stimuluje buněčný příjem glukózy.",
      halfLife: "Cca několik hodin (intracelulární včlenění do membránových lipidů)",
      interactions: [
        "Kyselina listová / Methylfolát (synergie v reprodukčních protokolech)",
        "Berberin (zesílení inzulín-senzibilizujícího efektu)"
      ],
      naturalSources: ["citrusové plody", "luštěniny", "celozrnné obiloviny", "ořechy"],
      bannedStatus: "legal"
    },
    {
      id: 140,
      name: "Berberin Phytosome",
      categoryKey: "health",
      tags: ["inzulin", "AMPK", "cholesterol", "metabolismus", "PCSK9"],
      rating: 5,
      colorType: "green",
      shortDesc: "Fytosomální berberin s až 4x vyšší biologickou dostupností pro aktivaci AMPK a kontrolu lipidů.",
      description: "Berberin je isochinolinový rostlinný alkaloid z dřišťálu (Berberis aristata). Tradiční berberin HCl trpí extrémně nízkou perorální biologickou dostupností (kolem 0.5 %) kvůli efluxnímu transportéru P-glykoproteinu ve střevě. Patentovaná fytosomální formulace (vázaná na fosfolipidy) dramaticky zvyšuje střevní absorpci bez dráždění žaludku. Berberin aktivuje enzym AMPK (enzym dlouhověkosti), potlačuje glukoneogenezi v játrech, zvyšuje expresi inzulínových receptorů a inhibuje PCSK9, čímž čistí aterogenní LDL částice z krve.",
      effects: [
        "mohutná aktivace AMPK srovnatelná s farmakologickými biguanidy",
        "snížení postprandiální glykémie a glykovaného hemoglobinu (HbA1c)",
        "redukce LDL cholesterolu a apolipoproteinu B přes inhibici PCSK9",
        "zlepšení jaterního steatózního profilu (ztučnění jater)",
        "příznivá modulace střevního mikrobiomu"
      ],
      dosage: {
        "short": "550 mg 1–2x denně bezprostředně před jídlem",
        "long": "Jedna kapsle fytosomálního berberinu (550 mg) před hlavními sacharidovými jídly (oběd a večeře). Odpovídá 1 500 mg běžného berberinu HCl."
      },
      warning: "Neužívejte při hypoglykémii. Berberin mírně inhibuje cytochromy CYP3A4 a CYP2D6 – opatrnost při současném užívání léků na předpis.",
      mechanism: "Aktivace AMP-aktivované proteinkinázy (AMPK) nezávisle na inzulínu; stabilizace mRNA pro LDL receptor (LDLR) a downregulace proprotein konvertázy PCSK9 v hepatocytech.",
      halfLife: "Cca 4–6 hodin",
      interactions: [
        "Metformin (aditivní efekt na glykémii – sledovat krevní cukr)",
        "Ostropestřec mariánský / Silymarin (silymarin inhibuje P-glykoprotein a zvyšuje dostupnost berberinu)"
      ],
      naturalSources: ["dřišťál osinatý (Berberis aristata)", "zlatobýl"],
      bannedStatus: "legal"
    },
    {
      id: 141,
      name: "Metformin (Longevity protokol)",
      categoryKey: "health",
      tags: ["longevity", "metformin", "AMPK", "mTOR", "glykemie", "misfolding"],
      rating: 4,
      colorType: "green",
      shortDesc: "Základní lék pro metabolické zdraví a studovaná molekula pro zpomalení biologického stárnutí.",
      description: "Metformin (dimetylbiguanid) je historicky nejbezpečnější a celosvětově nejrozšířenější perorální antidiabetikum. V komunitě dlouhověkosti je předmětem masivního zájmu (včetně stěžejní americké klinické studie TAME – Targeting Aging with Metformin pod vedením Dr. Nira Barzilaie). Působí jako mírný a reverzibilní inhibitor komplexu I mitochondriálního dýchacího řetězce, což mění poměr AMP/ATP a spouští mohutnou kaskádu AMPK, potlačuje mTORC1, zlepšuje opravu DNA a snižuje incidenci kardiovaskulárních i nádorových onemocnění.",
      effects: [
        "reverzibilní aktivace AMPK a regulace energetického senzoru buňky",
        "potlačení nadměrné aktivity mTOR komplexu 1 (mTORC1)",
        "snížení jaterní glukoneogeneze a zvýšení citlivosti periferních tkání",
        "snížení systémového zánětu a hladin IGF-1 u hyperinzulinémie",
        "prodloužení zdravého věku v populačních epidemiologických datech"
      ],
      dosage: {
        "short": "500–1 000 mg denně večer s jídlem (lékařský dohled)",
        "long": "V longevity protokolech se běžně využívá forma s prodlouženým uvolňováním (XR) v dávce 500 až 1 000 mg jednou denně večer s večeří pro minimalizaci gastrointestinálního dyskomfortu. V netréninkové dny."
      },
      warning: "Léčivý přípravek na lékařský předpis. Dlouhodobé užívání snižuje absorpci vitamínu B12 (nutno doplňovat B12!). Může mírně tlumit hypertrofickou adaptaci na těžký silový tréninek (neužívat bezprostředně po cvičení).",
      mechanism: "Mírná inhibice mitochondriálního respiračního komplexu I vedoucí ke zvýšení poměru cytoplazmatického AMP:ATP a následné allosterické aktivaci AMPK; inhibice jaterní fruktózo-1,6-bisfosfatázy.",
      halfLife: "Cca 4–6 hodin (běžná forma), cca 10–12 hodin (XR forma)",
      interactions: [
        "Vitamín B12 (nutná kompenzace kvůli zhoršenému vstřebávání v ileu)",
        "Alkohol (zvyšuje riziko laktátové acidózy – striktně se vyhnout)"
      ],
      naturalSources: ["původně odvozen z jestřabiny lékařské (Galega officinalis)"],
      bannedStatus: "prescription-only"
    }
  ],

  // === NOOTROPICS & COGNITION (10 compounds: 622-631) ===
  nootropics: [
    {
      id: 622,
      name: "Pramiracetam",
      categoryKey: "nootropics",
      tags: ["racetam", "pamet", "HACU", "soustredeni", "cholin"],
      rating: 5,
      colorType: "green",
      shortDesc: "Nejvýkonnější racetam pro formování dlouhodobé paměti a logické myšlení.",
      description: "Pramiracetam je lipofilní derivát piracetamu s dipropylaminoethylovým řetězcem, díky čemuž je přibližně 30x účinnější než původní piracetam. Jeho specifickým a jedinečným mechanismem účinku je dramatická stimulace vysokoafinitního vychytávání cholinu (HACU - High-Affinity Choline Uptake) v hipokampu. Nemá sedativní ani stimulační vliv na kardiovaskulární systém, ale vyvolává intenzivní mentální fokus, podporuje kapacitu pro logické uvažování a urychluje konsolidaci paměťových stop.",
      effects: [
        "mohutná podpora dlouhodobé a pracovní paměti",
        "intenzivní stav 'tunelového' kognitivního soustředění",
        "stimulace vysokoafinitního vychytávání cholinu v hipokampu",
        "zrychlení rychlosti zpracování komplexních informací",
        "neuroprotekce při hypoxii mozkové tkáně"
      ],
      dosage: {
        "short": "200–400 mg 1–2x denně s jídlem obsahujícím tuky",
        "long": "Běžná dávka je 300 mg ráno a 300 mg brzy odpoledne. Vzhledem k vysoké rozpustnosti v tucích je nutné užívat s jídlem bohatým na lipidy nebo kvalitním olejem. Vždy doplňovat kvalitní zdroj cholinu (Alfa-GPC nebo CDP-Cholin)."
      },
      warning: "Při nedostatku cholinu může vyvolat tupou bolest hlavy. Má velmi hořkou chuť (neužívejte volný prášek, vždy kapsle).",
      mechanism: "Specifické zesílení aktivity transportéru CHT1 v presynaptických cholinergních terminálách hipokampu; stimulace syntézy oxidu dusnatého (NOS) v kůře.",
      halfLife: "Cca 5–7 hodin",
      interactions: [
        "Alfa-GPC / Citicolin (absolutní nutnost pro prevenci depletion acetylcholinu)",
        "Aniracetam (synergická kombinace pro paměť a náladu)"
      ],
      naturalSources: ["syntetická sloučenina"],
      bannedStatus: "controlled"
    },
    {
      id: 623,
      name: "Phenylpiracetam Hydrazide",
      categoryKey: "nootropics",
      tags: ["racetam", "dopamin", "energie", "vytrvalost", "chlad", "stimulant"],
      rating: 5,
      colorType: "green",
      shortDesc: "Hydrazidová forma fenylpiracetamu se zvýšenou dopaminergní aktivitou a fyzickou bdělostí.",
      description: "Phenylpiracetam Hydrazide (Fonturacetam Hydrazide) je inovativní modifikace fenylpiracetamu, kde je amidová skupina nahrazena hydrazidovou. Tato změna zvyšuje afinitu k dopaminovému transportéru (DAT) a modulaci nikotinových acetylcholinových receptorů. Poskytuje čistý nárůst motivace, mentální bdělosti, potlačení únavy a výrazné zlepšení tolerance chladu a fyzické zátěže bez periferního třesu typického pro klasické amfetaminové stimulanty.",
      effects: [
        "výrazný nárůst dopaminergní motivace a mentální energie",
        "potlačení kognitivní a fyzické únavy",
        "zvýšení operativní paměti a rychlosti reakcí",
        "zvýšená adaptace a odolnost vůči extrémnímu chladu a stresu",
        "antidepresivní a prokognitivní účinek"
      ],
      dosage: {
        "short": "50–100 mg ráno nebo před náročným výkonem",
        "long": "Dávkování 50 až 100 mg nalačno nebo lehce po snídani. Neužívejte po 15. hodině, aby nebyl narušen spánek. Doporučuje se cyklovat (např. 3–4 dny v týdnu nebo jen v dny těžkého výkonu), aby nevznikla tolerance."
      },
      warning: "WADA zakazuje fenylpiracetam i jeho analogy v soutěžním období. Nepřekračujte 150 mg denně. Při každodenním užívání dochází po 2 týdnech k poklesu stimulačního účinku.",
      mechanism: "Reverzibilní inhibice dopaminového transportéru (DAT), zvýšení hustoty NMDA, nikotinových acetylcholinových (nAChR) a D1/D2/D3 dopaminových receptorů v kortexu.",
      halfLife: "Cca 3–5 hodin",
      interactions: [
        "CDP-Cholin (doplnění substrátu pro cholinergní obrat)",
        "L-Theanin (zajištění klidného laserového fokusu)"
      ],
      naturalSources: ["syntetická sloučenina"],
      bannedStatus: "banned-sport (WADA S6)"
    },
    {
      id: 624,
      name: "Coluracetam (BCI-540)",
      categoryKey: "nootropics",
      tags: ["racetam", "zrak", "barvy", "cholin", "nalada", "neuroplasticita"],
      rating: 4,
      colorType: "green",
      shortDesc: "Racetam zvyšující příjem cholinu se specifickým účinkem na zrakovou ostrost a sytost barev.",
      description: "Coluracetam (MKC-231) je syntetický nootropní racetam původně vyvíjený japonskou společností Mitsubishi Tanabe Pharma pro léčbu Alzheimerovy choroby a těžké deprese. Jeho primárním mechanismem je podpora vysokoafinitního transportu cholinu (HACU) i v poškozených či degenerovaných neuronech. Uživatelé a klinické zprávy popisují unikátní fenomén: okamžité rozjasnění zrakového vnímání, zvýraznění barevného kontrastu a sytosti (visual color enhancement) a zlepšení rozpoznávání tvarů.",
      effects: [
        "zlepšení zrakové ostrosti a vnímání sytosti barev",
        "obnova cholinergní transmise v hipokampu",
        "anxiolytický a antidepresivní účinek",
        "podpora prostorové a asociativní paměti",
        "ochrana zrakového nervu a sítnice před toxicitou glutamátu"
      ],
      dosage: {
        "short": "10–20 mg 1–2x denně sublinguálně nebo orálně",
        "long": "Běžná dávka je 10 až 20 mg rozpuštěná pod jazykem (sublinguálně pro rychlý nástup) nebo spolknutá s jídlem. Užívejte 1–2x denně."
      },
      warning: "Velmi silná potence při nízkých miligramových dávkách – přesně vážit na laboratorní váze. Vyžaduje dostatek cholinu v dietě.",
      mechanism: "Allosterická upregulace aktivity cholinového transportéru 1 (CHT1) na presynaptických membránách; modulace AMPA receptorů v hipokampálních neuronech.",
      halfLife: "Cca 3 hodiny",
      interactions: [
        "Alfa-GPC (synergické nasycení cholinergního systému)",
        "Fasoracetam (komplexní cholinergní a GABA-B podpora)"
      ],
      naturalSources: ["syntetická sloučenina"],
      bannedStatus: "controlled"
    },
    {
      id: 625,
      name: "Nefiracetam",
      categoryKey: "nootropics",
      tags: ["racetam", "GABA", "ACh", "pamet", "vapnik", "nalada"],
      rating: 4,
      colorType: "green",
      shortDesc: "Hydrofobní racetam s duálním účinkem na acetylcholinové a GABAergní receptory.",
      description: "Nefiracetam (DM-9926) je strukturně odvozen od aniracetamu. Vyniká duálním působením: posiluje cholinergní transmisi přes nikotinové acetylcholinové receptory a současně interaguje s GABAergním systémem a L-typem i N-typem napěťově řízených vápníkových kanálů. Díky tomu současně stimuluje neuroplasticitu, formování nových spojení a vykazuje silné anxiolytické a náladu stabilizující účinky.",
      effects: [
        "stimulace dlouhodobé paměti a schopnosti učení",
        "anxiolytický a náladu pozvedající účinek",
        "zlepšení průtoku krve a přežití neuronů při ischemii",
        "modulace vápníkových kanálů v neuronech",
        "usnadnění neurogeneze v hipokampu"
      ],
      dosage: {
        "short": "150–300 mg 1–2x denně s jídlem",
        "long": "Doporučená dávka je 150 mg až 300 mg užitá s jídlem obsahujícím tuky (je rozpustný v lipidech). Maximálně 600 mg denně rozděleně."
      },
      warning: "Při extrémních supraterapeutických dávkách byla v preklinických studiích na psech zaznamenána testikulární toxicita (u lidí v klinických dávkách nepotvrzeno, přesto nepřekračujte doporučené dávkování a cyklujte).",
      mechanism: "Potenciace nikotinových receptorů nAChR alfa4beta2, prodloužení otevírací doby L/N-typů vápníkových kanálů a pozitivní modulace GABA-A receptorů.",
      halfLife: "Cca 3–5 hodin",
      interactions: [
        "Cholinové donory (Alfa-GPC, Citicolin)",
        "Noopept (synergické posílení kognice)"
      ],
      naturalSources: ["syntetická sloučenina"],
      bannedStatus: "controlled"
    },
    {
      id: 626,
      name: "TAK-653",
      categoryKey: "nootropics",
      tags: ["AMPA", "PAM", "LTP", "neuroplasticita", "fokus", "inovace"],
      rating: 5,
      colorType: "green",
      shortDesc: "Průlomový ultra-selektivní pozitivní alosterický modulátor AMPA receptorů bez křečových rizik.",
      description: "TAK-653 je revoluční nootropní sloučenina vyvinutá farmaceutickým gigantem Takeda. Patří mezi pozitivní alosterické modulátory (PAM) glutamátových AMPA receptorů. Na rozdíl od starších ampakinů (jako Aniracetam či Sunifiram) byl TAK-653 vyprojektován tak, aby měl obrovské terapeutické okno (>1000násobné) a minimální desenzitizaci receptorů. Dramaticky zesiluje dlouhodobou potenciaci (LTP) v hipokampu, což vede k extrémnímu urychlení vstřebávání nových vědomostí a neuroplasticitě bez excitotoxického rizika.",
      effects: [
        "extrémní stimulace dlouhodobé potenciace (LTP) v synapsích",
        "výrazné zrychlení kognitivního zpracování a paměťové retence",
        "antidepresivní účinek zprostředkovaný stimulací BDNF",
        "široké terapeutické okno a nulová epileptogenní aktivita",
        "obnova kognitivních deficitů a synaptické plasticity"
      ],
      dosage: {
        "short": "1–6 mg jednou denně ráno",
        "long": "Jedná se o ultra-potentní sloučeninu. Klinické a experimentální dávky se pohybují mezi 1 mg a 6 mg jednou denně ráno. Přísně odvažovat na analytické mikrováze."
      },
      warning: "Vysoce potentní výzkumná substance. Neužívejte s vysokými dávkami stimulantů nebo glutamatergních látek.",
      mechanism: "Vysoce selektivní pozitivní alosterická vazba na dimerní rozhraní ligand-vazebné domény (LBD) AMPA receptorů, čímž zpomaluje jejich deaktivaci a desenzitizaci v přítomnosti endogenního glutamátu.",
      halfLife: "Cca 24–36 hodin (umožňuje dávkování 1x denně)",
      interactions: [
        "Semax (aditivní BDNF kaskáda)",
        "Magnesium L-Threonát (stabilizace NMDA/AMPA synaptické hustoty)"
      ],
      naturalSources: ["syntetická výzkumná molekula"],
      bannedStatus: "controlled"
    },
    {
      id: 627,
      name: "Emoxypin (Mexidol)",
      categoryKey: "nootropics",
      tags: ["antioxidant", "GABA", "neuroprotekce", "stres", "prokrveni", "alkohol"],
      rating: 5,
      colorType: "green",
      shortDesc: "Ruské membránové neuroprotektivum, silný antioxidant a modulátor GABA komplexu bez sedace.",
      description: "Emoxypin (chemicky 2-ethyl-6-methyl-3-hydroxypyridin sukcinát, v lékárnách Mexidol) je strukturní analog pyridoxinu (vitamínu B6) vyvinutý v Rusku. Působí jako mocný membránový antioxidant chránící lipidy buněčných membrán před peroxidací. Zvyšuje tekutost (fluiditu) neuronálních membrán, moduluje vazebná místa GABA benzodiazepinových receptorů a zvyšuje hladiny dopaminu v mozku. Eliminuje stres, úzkost, abstinenční příznaky po alkoholu a chrání mozek před ischemií bez únavy a rizika závislosti.",
      effects: [
        "vysoká membránová antioxidační ochrana neuronů a endotelu",
        "anxiolytický účinek bez sedace, ospalosti a myorelaxace",
        "zlepšení mozkové mikrocirkulace a reologie krve",
        "obnova kognitivních funkcí po intoxikaci alkoholem a hypoxii",
        "snížení hladin celkového cholesterolu a LDL v krvi"
      ],
      dosage: {
        "short": "125–250 mg 2–3x denně s jídlem",
        "long": "Běžná perorální dávka je 125 mg až 250 mg 2–3x denně po jídle. Kúra trvá typicky 2 až 6 týdnů. Při odvykání alkoholu se užívá 250 mg 3x denně."
      },
      warning: "Velmi dobře snášen. Výjimečně může způsobit sucho v ústech nebo mírný pocit nevolnosti nalačno.",
      mechanism: "Inhibice volnoradikálové peroxidace lipidů v biomembránách; zvýšení aktivity enzymů superoxiddismutázy (SOD) a glutathionperoxidázy; allosterická modulace vazebného místa GABA-A receptoru.",
      halfLife: "Cca 4–5 hodin",
      interactions: [
        "Noopept (komplexní neuroprotektivní a kognitivní synergie)",
        "Phenibut (emoxypin zmírňuje rizika tolerance a tlumí neurotoxicitu)"
      ],
      naturalSources: ["syntetický derivát 3-hydroxypyridinu"],
      bannedStatus: "legal"
    },
    {
      id: 628,
      name: "Picamilon (Nikotinoyl-GABA)",
      categoryKey: "nootropics",
      tags: ["GABA", "niacin", "mozek", "prokrveni", "klid", "fokus"],
      rating: 4,
      colorType: "green",
      shortDesc: "Syntetické spojení GABA a niacinu pro masivní prokrvení mozku a klidné soustředění.",
      description: "Picamilon (kyselina N-nikotinoyl-gama-aminomáselná) byl syntetizován v Sovětském svazu v roce 1969. Jedná se o molekulární fúzi neurotransmitéru GABA a kyseliny nikotinové (vitamín B3). Samotná GABA nedokáže efektivně překročit hematoencefalickou bariéru, avšak vázaná na niacin je aktivně transportována do centrálního nervového systému, kde se hydrolyzuje na GABA a niacin. Výsledkem je současná aktivace GABA receptorů (odstranění strachu a tenze) a masivní vazodilatace mozkových kapilár (zvýšení průtoku krve a přísunu kyslíku bez flush efektu).",
      effects: [
        "přímý transport GABA přes hematoencefalickou bariéru",
        "výrazné rozšíření mozkových cév a zlepšení cerebrálního průtoku",
        "rychlé odbourání psychické tenze, úzkosti a trémy",
        "zlepšení rychlosti myšlení a koncentrace bez útlumu",
        "zmírnění bolestí hlavy cévního původu"
      ],
      dosage: {
        "short": "50–100 mg 2–3x denně nalačno",
        "long": "Pro klidné soustředění: 50 mg 2x denně. Pro zvládání akutního stresu či cévní bolesti hlavy: 100 mg jednorázově. Zapít vodou nalačno."
      },
      warning: "Neužívejte s inhibitory monoaminooxidázy (IMAO) nebo silnými vasodilatancii bez konzultace. Může mírně snižovat krevní tlak.",
      mechanism: "Aktivní přestup přes hematoencefalickou bariéru přes specifické transportéry; enzymatická hydrolýza na volnou GABA (agonismus GABA-A i GABA-B) a niacin (indukce relaxace hladké svaloviny mozkových arteriol).",
      halfLife: "Cca 1–2 hodiny (biologické účinky přetrvávají 4–6 hodin)",
      interactions: [
        "Kofein (odstraňuje třes a vazokonstrikci způsobenou kofeinem)",
        "Piracetam / Phenylpiracetam (synergická kognitivní kombinace)"
      ],
      naturalSources: ["syntetická sloučenina"],
      bannedStatus: "controlled"
    },
    {
      id: 629,
      name: "Cordyceps Militaris (Cordycepin)",
      categoryKey: "nootropics",
      tags: ["adaptogen", "ATP", "mitochondrie", "VO2max", "imunita", "energie"],
      rating: 5,
      colorType: "green",
      shortDesc: "Vitální adaptogenní houba bohatá na cordycepin pro buněčnou syntézu ATP a okysličení mozku.",
      description: "Cordyceps militaris (housenice bojovná) je adaptogenní funkční houba ceněná v biohackingu a sportovní medicíně. Hlavní bioaktivní molekulou je cordycepin (3'-deoxyadenosin), strukturní analog adenosinu. Cordyceps prokazatelně zvyšuje buněčnou produkci adenosintrifosfátu (ATP) v mitochondriích až o 30 %, zlepšuje využití kyslíku tkáněmi (zvýšení VO2 max), působí jako silný neuroprotektivní adaptogen a stimuluje biosyntézu steroidních hormonů v Leydigových buňkách.",
      effects: [
        "zvýšení buněčné produkce ATP v mitochondriích",
        "významné zlepšení VO2 max a vytrvalostní kapacity",
        "podpora prokrvení mozku a dodávky kyslíku neuronům",
        "modulace imunitního systému přes beta-glukany",
        "adaptogenní ochrana před chronickým vyčerpáním a přepětím"
      ],
      dosage: {
        "short": "500–1 500 mg standardizovaného extraktu ráno",
        "long": "Užívejte 500 mg až 1 500 mg standardizovaného extraktu (ideálně s obsahem min. 0.3–1 % cordycepinu a 30 % beta-glukanů) ráno nalačno nebo 45 minut před sportovním či mentálním výkonem."
      },
      warning: "Cordyceps má mírné protisrážlivé účinky – opatrnost při užívání antikoagulancií (warfarin, aspirin). Může stimulovat imunitní systém, opatrnost u autoimunitních poruch.",
      mechanism: "Fosforylace cordycepinu na cordycepin trifosfát inhibující terminaci mRNA transkripce v patologických buňkách; aktivace AMPK; stimulace exprese proteinu StAR v endokrinních tkáních.",
      halfLife: "Cca 1–2 hodiny v plazmě (mitochondriální stimulace trvá 6–8 hodin)",
      interactions: [
        "Rhodiola Rosea (elitní adaptogenní vytrvalostní stack)",
        "CoQ10 (maximalizace tvorby ATP v dýchacím řetězci)"
      ],
      naturalSources: ["housenice bojovná (Cordyceps militaris)", "housenice čínská (Ophiocordyceps sinensis)"],
      bannedStatus: "legal"
    },
    {
      id: 630,
      name: "Vinprocetin (Cavinton)",
      categoryKey: "nootropics",
      tags: ["prokrveni", "PDE1", "mozek", "pamet", "zrak", "sluch"],
      rating: 4,
      colorType: "green",
      shortDesc: "Vincaminový derivát rozšiřující mozkové cévy a stimulující glukózový metabolismus neuronů.",
      description: "Vinprocetin je semisyntetický derivát alkaloidu vinkaminu, extrahovaného z brčálu menšího (Vinca minor). Je široce využíván v neurologii pro léčbu cerebrovaskulárních poruch, tinnitus (pískání v uších) a stařecké demence. Působí jako selektivní inhibitor enzymu fosfodiesterázy typu 1 (PDE1), což vede ke zvýšení intracelulárního cGMP a cAMP v hladkém svalstvu cév. Způsobuje výraznou vazodilataci mozkových tepének bez fenoménu 'steal syndromu' (nekrade krev zdravým tkáním) a urychluje transport glukózy do neuronů.",
      effects: [
        "selektivní vazodilatace mozkových arteriol a zlepšení perfuze",
        "zvýšení příjmu a utilizace glukózy a kyslíku neurony",
        "neuroprotekce při ischemii a excitotoxicitě",
        "zlepšení zrakových funkcí a prokrvení sítnice",
        "terapeutický efekt při vaskulárním tinnitu a závratích"
      ],
      dosage: {
        "short": "10–20 mg 2–3x denně s jídlem",
        "long": "Běžná nootropní dávka je 10 mg 2–3x denně (ráno a v poledne) vždy s jídlem obsahujícím tuky (nalačno je vstřebatelnost pouhých 7 %, s jídlem stoupá na 60–70 %)."
      },
      warning: "Neužívejte při poruchách krevní srážlivosti nebo před plánovanou operací. Může mírně snižovat krevní tlak.",
      mechanism: "Inhibice Ca2+/kalmodulin-dependentní fosfodiesterázy typu 1 (PDE1); blokáda napěťově řízených sodíkových kanálů (ochrana před nadměrným uvolněním glutamátu); snížení viskozity krve potlačením agregace destiček.",
      halfLife: "Cca 1–2 hodiny",
      interactions: [
        "Ginkgo Biloba (zesílení cerebrálního prokrvení)",
        "Piracetam (klasický nootropní stack zkoumaný v neurologii)"
      ],
      naturalSources: ["polosyntetický derivát alkaloidu z brčálu menšího (Vinca minor)"],
      bannedStatus: "controlled"
    },
    {
      id: 631,
      name: "Sunifiram (DM-235)",
      categoryKey: "nootropics",
      tags: ["ampakin", "pamet", "stimulace", "AMPA", "acetylcholin", "vyzkum"],
      rating: 4,
      colorType: "green",
      shortDesc: "Vysoce potentní piperazinový ampakin stimulující AMPA receptory a uvolňování acetylcholinu.",
      description: "Sunifiram (DM-235) je syntetická sloučenina odvozená od piperazinu a strukturně příbuzná racetamům, avšak s výrazně vyšší potencí (až 1 000x silnější než piracetam na molární bázi). Působí jako pozitivní modulátor AMPA receptorů a stimuluje fosforylaci NMDA receptorů i kinázy CaMKII. Vyvolává masivní uvolňování acetylcholinu v mozkové kůře, dramaticky zvyšuje mentální bdělost, zrychluje asociativní myšlení a formování paměťových drah.",
      effects: [
        "extrémní zostření vnímání a mentální rychlosti",
        "stimulace uvolňování acetylcholinu v prefrontálním kortexu",
        "zrychlení konsolidace krátkodobé a dlouhodobé paměti",
        "zvýšení senzorického vnímání a vizuální ostrosti",
        "potlačení kognitivní únavy"
      ],
      dosage: {
        "short": "5–10 mg sublinguálně nebo orálně (striktně vážit!)",
        "long": "Dávkování 5 mg až 10 mg jednou denně ráno. Začněte na nejnižší dávce 2–5 mg. Pro sublinguální podání je nástup účinku do 15 minut. Nikdy nepřekračujte 15 mg denně."
      },
      warning: "Experimentální výzkumná molekula. Při předávkování může vyvolat bolesti hlavy, úzkost, pocení a excitotoxické riziko. Vždy doplňujte cholin.",
      mechanism: "Pozitivní allosterická modulace AMPA receptorů; aktivace proteinkinázy C alfa (PKC-alfa) a fosforylace podjednotky GluR1; facilitace acetylcholinové transmise v hipokampu.",
      halfLife: "Cca 1–2 hodiny (kognitivní efekt přetrvává cca 4 hodiny)",
      interactions: [
        "Alfa-GPC (nezbytné pro zabránění vyčerpání zásob acetylcholinu)",
        "Noopept (synergický nárůst neuroplasticity)"
      ],
      naturalSources: ["syntetická výzkumná chemikálie"],
      bannedStatus: "controlled"
    }
  ],

  // === PEPTIDES & EXPERIMENTAL (15 compounds: 757-771) ===
  experimental: [
    {
      id: 757,
      name: "BPC-157 Arginate (Stable Oral BPC)",
      categoryKey: "experimental",
      tags: ["peptid", "BPC-157", "arginat", "streva", "zaludek", "oralni"],
      rating: 5,
      colorType: "green",
      shortDesc: "Orálně stabilní arginátová sůl BPC-157 odolávající žaludeční kyselině pro střevní hojení.",
      description: "BPC-157 Arginát je patentovaná stabilizovaná sůl pentadekapeptidu BPC-157 s L-argininem. Běžný volný peptid BPC-157 se v žaludeční kyselině (pH 1–2) po 30–60 minutách začíná rozkládat. Arginátová forma prokázala stabilitu v agresivní žaludeční šťávě po více než 5 hodin s téměř 90% zachováním biologické integrity. Jedná se o ideální formu pro orální léčbu syndromu propustného střeva (leaky gut), Crohnovy choroby, ulcerózní kolitidy, GERD a zánětů trávicího traktu bez nutnosti injekčních aplikací.",
      effects: [
        "vysoká odolnost vůči žaludeční kyselině a enzymatickému rozkladu v žaludku",
        "obnova těsných spojů (tight junctions) střevní sliznice při leaky gut",
        "rychlé hojení žaludečních a dvanáctníkových vředů a erozí",
        "snížení lokálního střevního i systémového zánětu",
        "systémový přenos do krevního oběhu pro hojení kloubů a šlach"
      ],
      dosage: {
        "short": "250–500 mcg 1–2x denně nalačno orálně",
        "long": "Užívejte 250 mcg až 500 mcg v kapsli ráno nalačno 30 minut před jídlem a případně druhou dávku večer před spaním. Standardní kúra trvá 4–8 týdnů."
      },
      warning: "Neužívejte při aktivních nádorových onemocněních (stimulace angiogeneze VEGF).",
      mechanism: "Upregulace exprese růstových faktorů VEGF, bFGF a syndekanu-1; stimulace syntézy mucinu a obnova ocludinu a claudinů v enterocytech střevního epitelu.",
      halfLife: "Orální stabilita v žaludku > 5 hodin, tkáňový regenerační signál několik dní",
      interactions: [
        "Glutamin (synergická výživa pro enterocyty)",
        "Kolagenní peptidy (stavební materiál pro regeneraci střevní stěny)"
      ],
      naturalSources: ["stabilizovaná sůl syntetického žaludečního peptidu"],
      bannedStatus: "banned-sport (WADA S2.1)"
    },
    {
      id: 758,
      name: "Mazdutide (IBI362)",
      categoryKey: "experimental",
      tags: ["peptid", "GLP-1", "glukagon", "redukce", "jatra", "inovace"],
      rating: 5,
      colorType: "green",
      shortDesc: "Duální GLP-1 a glukagonový receptorový agonista pro dramatickou redukci tuku a MASH.",
      description: "Mazdutide (IBI362 / LY3305677) je syntetický peptid vyvinutý společnostmi Eli Lilly a Innovent Biologics. Jedná se o duální agonistu receptorů pro GLP-1 (glukagonu podobný peptid-1) a glukagon. Zatímco GLP-1 složka tlumí chuť k jídlu a stabilizuje hladinu inzulínu, glukagonová složka přímo stimuluje jaterní oxidaci mastných kyselin a zvyšuje klidový energetický výdej (termogenezi). V klinických studiích fáze III dosáhl Mazdutide mimořádného úbytku hmotnosti (přes 15–18 %) a bezprecedentního poklesu jaterního tuku až o 70–80 %.",
      effects: [
        "mohutné potlačení chuti k jídlu a redukce viscerálního tuku",
        "přímé zvýšení klidového energetického výdeje stimulací glukagonu",
        "dramatický úbytek tuku v játrech při MASH/NASH jaterní steatóze",
        "zlepšení lipidového profilu (pokles LDL, triglyceridů a jaterních enzymů)",
        "výrazné zlepšení inzulínové senzitivity a glykémie"
      ],
      dosage: {
        "short": "3–9 mg jednou týdně subkutánně (titrační schéma)",
        "long": "Aplikuje se subkutánně jednou týdně inzulínovou stříkačkou. Zahajuje se dávkou 3 mg týdně po dobu 4 týdnů, poté se titruje na 6 mg a u těžké obezity na 9 mg týdně."
      },
      warning: "Časté počáteční gastrointestinální příznaky (nauzea, průjem), které odeznívají při postupné titraci. Zvyšuje srdeční tep o 3–5 tepů/min v důsledku glukagonové stimulace.",
      mechanism: "Současný plný agonismus na GLP-1 receptorech v hypotalamu a beta-buňkách pankreatu a na glukagonových receptorech (GCGR) v hepatocytech, stimulující lipolýzu a beta-oxidaci mastných kyselin.",
      halfLife: "Cca 110–120 hodin (umožňuje pohodlné podání 1x týdně)",
      interactions: [
        "Inzulín a sulfonylmočoviny (nutná redukce dávky kvůli riziku hypoglykémie)",
        "Perorální léky (zpomalené vyprazdňování žaludku ovlivňuje absorpci)"
      ],
      naturalSources: ["syntetický peptidový analog oxyntomodulinu"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 759,
      name: "Survodutide (BI 456906)",
      categoryKey: "experimental",
      tags: ["peptid", "GLP-1", "glukagon", "MASH", "fibroza", "redukce"],
      rating: 5,
      colorType: "green",
      shortDesc: "Duální agonista GLP-1 a glukagonu od Boehringer Ingelheim pro léčbu MASH a obezity.",
      description: "Survodutide (BI 456906) je pokročilý duální receptorový agonista GLP-1 a glukagonu vyvinutý ve spolupráci společností Boehringer Ingelheim a Zealand Pharma. V přelomové studii fáze II publikované v The New England Journal of Medicine (NEJM 2024) dosáhl Survodutide u 83 % pacientů s MASH (metabolicky asociovanou steatohepatitidou) statisticky významného zlepšení zánětu jater a až u 65 % pacientů zvrátil jaterní fibrózu bez zhoršení stavu. Současně způsobuje úbytek tělesné hmotnosti kolem 15–19 %.",
      effects: [
        "průlomové zvrácení jaterní fibrózy a zánětu u MASH/NASH",
        "masivní redukce viscerálního a jaterního tuku",
        "silné potlačení chuti k jídlu a navození sytosti",
        "zvýšení klidového energetického výdeje přes glukagonové receptory",
        "kardiovaskulární protekce a snížení krevního tlaku"
      ],
      dosage: {
        "short": "2.4–4.8 mg jednou týdně subkutánně (s pomalou titrací)",
        "long": "Aplikace subkutánně 1x týdně. Začíná se na 0.6 mg týdně a dávka se zvyšuje každé 4 týdny (1.2 mg -> 2.4 mg -> 3.6 mg -> 4.8 mg) pro zamezení nauzey."
      },
      warning: "Výzkumná substance ve fázi III klinických zkoušek. Může způsobovat počáteční zažívací potíže. Kontraindikován při rodinné anamnéze medulárního karcinomu štítné žlázy.",
      mechanism: "Agonismus na GLP-1R a GCGR s vyváženým poměrem afinit, což vede k duální regulaci energetického příjmu (centrální sytost) a energetického výdeje (jaterní ketogeneze a termogeneze).",
      halfLife: "Cca 6–8 dní",
      interactions: [
        "Inzulín (přísně monitorovat glykémii)",
        "Orální antikoncepce (zpomalené vstřebávání v prvních týdnech)"
      ],
      naturalSources: ["syntetický peptidový analog odvozený z oxyntomodulinu"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 760,
      name: "Cagrilintide (AM833)",
      categoryKey: "experimental",
      tags: ["peptid", "amylin", "CagriSema", "redukce", "hlad", "synergie"],
      rating: 5,
      colorType: "green",
      shortDesc: "Dlouhodobě působící analog amylinu; v kombinaci se semaglutidem tvoří CagriSema.",
      description: "Cagrilintide (AM833) je syntetický, dlouhodobě působící acylovaný analog amylinu vyvinutý společností Novo Nordisk. Amylin je fyziologický neuroendokrinní peptid ko-sekretovaný s inzulínem z beta-buněk pankreatu, který působí v mozkovém kmeni (area postrema) a indukuje sytost nezávisle na GLP-1 dráze. V kombinaci se semaglutidem (ve fixní kombinaci známé jako CagriSema) spouští duální neurochemické potlačení hladu s úbytkem hmotnosti přesahujícím 25 %, což se vyrovná bariatrické operaci.",
      effects: [
        "nový non-GLP-1 mechanismus navození sytosti přes amylinové receptory",
        "zpomalení žaludeční motility bez silné nevolnosti",
        "dramatická synergie s agonisty GLP-1 (CagriSema protokol)",
        "redukce viscerálního tuku s ochranou svalové hmoty",
        "stabilizace postprandiální glykémie"
      ],
      dosage: {
        "short": "0.3–2.4 mg jednou týdně subkutánně",
        "long": "Aplikace subkutánně 1x týdně ve stejný den. Titrační protokol: zahájení na 0.3 mg týdně, s postupným navyšováním po 4 týdnech na 0.6 mg, 1.2 mg až cílových 2.4 mg týdně."
      },
      warning: "Výzkumná substance. Nekombinovat s pramlinitidem. Při titraci dodržovat dostatečný příjem tekutin a elektrolytů.",
      mechanism: "Plný agonismus na amylinových receptorech (komplexy kalcitoninového receptoru CTR s proteiny modifikujícími aktivitu receptoru RAMP1, RAMP2 a RAMP3) v area postrema a nucleus tractus solitarii.",
      halfLife: "Cca 170–180 hodin (přibližně 7–8 dní)",
      interactions: [
        "Semaglutid (slavný CagriSema stack – nejúčinnější kombinace na trhu)",
        "Tirzepatid (aditivní snížení chuti k jídlu)"
      ],
      naturalSources: ["syntetický acylovaný analog lidského amylinu"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 761,
      name: "Orforglipron (LY-3502970)",
      categoryKey: "experimental",
      tags: ["GLP-1", "oralni", "nepeptid", "tableta", "redukce", "Lilly"],
      rating: 5,
      colorType: "green",
      shortDesc: "První perorální nepeptidový plný agonista GLP-1 receptoru užívaný bez ohledu na jídlo a vodu.",
      description: "Orforglipron (LY3502970) od společnosti Eli Lilly představuje obrovský technologický skok v léčbě obezity a diabetu. Na rozdíl od perorálního semaglutidu (Rybelsus), který je peptidem a vyžaduje přísné požití na lačno s minimem vody kvůli speciálnímu nosiči SNAC, je Orforglipron malou syntetickou nepeptidovou molekulou. Má vysokou orální biologickou dostupnost a lze jej užívat kdykoliv během dne bez ohledu na příjem jídla a tekutin. V klinických studiích fáze II dosáhl průměrného úbytku hmotnosti 14.7 % za 36 týdnů.",
      effects: [
        "plný účinek GLP-1 v jednoduché denní tabletě bez injekcí",
        "žádná omezení ohledně příjmu jídla, vody či načasování",
        "silné potlačení chuti k jídlu a 'food noise' (neustálých myšlenek na jídlo)",
        "snížení glykovaného hemoglobinu HbA1c a stabilizace glukózy",
        "pokles systolického krevního tlaku a triglyceridů"
      ],
      dosage: {
        "short": "12–45 mg jednou denně perorálně (v tabletě)",
        "long": "Užívá se jedna tableta 1x denně ráno nebo večer. Titrační schéma začíná na 12 mg denně a po 4 týdnech se postupně navyšuje na 24 mg, 36 mg až cílových 45 mg denně."
      },
      warning: "Nepeptidová nízkomolekulární látka ve fázi III klinického testování. Může vyvolat přechodnou nauzeu a zácpu při příliš rychlé titraci.",
      mechanism: "Nízkomolekulární nepeptidový alosterický a ortosterický plný agonista lidského GLP-1 receptoru; stimuluje intracelulární akumulaci cAMP a glukózo-dependentní sekreci inzulínu.",
      halfLife: "Cca 29–48 hodin (ideální pro stabilní 24h působení v 1 tabletě)",
      interactions: [
        "Inzulín (riziko hypoglykémie – nutno redukovat dávku)",
        "Léky s úzkým terapeutickým oknem (sledovat vstřebávání)"
      ],
      naturalSources: ["syntetická nepeptidová molekula"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 762,
      name: "Thymalin",
      categoryKey: "experimental",
      tags: ["peptid", "bioregulator", "brzlik", "imunita", "thymus", "Khavinson"],
      rating: 5,
      colorType: "green",
      shortDesc: "Přírodní khavinsonův thymický bioregulační peptid pro obnovu imunitního systému.",
      description: "Thymalin je biologický peptidový extrakt z brzlíku (thymu) skotu, vyvinutý v Petrohradském institutu bioregulace a gerontologie profesorem Vladimírem Khavinsonem. Brzlík je klíčovým orgánem pro zrání a diferenciaci T-lymfocytů, avšak již od puberty podléhá masivní involuci (atrofii). Thymalin obnovuje buněčnou imunitu, normalizuje poměr pomocných a cytotoxických T-lymfocytů (CD4+/CD8+), stimuluje syntézu interferonu a zvrací věkem podmíněnou imunosenescenci u chronicky nemocných a stárnoucích jedinců.",
      effects: [
        "obnova struktury a funkce imunitního systému po infekcích či ozáření",
        "normalizace subpopulací T-lymfocytů (CD3+, CD4+, CD8+)",
        "stimulace fagocytózy a produkce endogenních interferonů",
        "snížení incidence virových a bakteriálních infekcí",
        "geroprotektivní účinek a prodloužení aktivního věku"
      ],
      dosage: {
        "short": "10 mg denně intramuskulárně po dobu 10 dnů",
        "long": "Standardní protokol prof. Khavinsona: 10 mg lyofilizovaného prášku rozpuštěného v 1–2 ml fyziologického roztoku (0.9% NaCl) denně do svalu (intramuskulárně) po dobu 10 po sobě jdoucích dnů. Kúra se opakuje 1–2x ročně."
      },
      warning: "Přírodní polypeptidový komplex. Extrémně bezpečná historie užívání od 80. let. Zřídka možná mírná lokální reakce v místě vpichu.",
      mechanism: "Epigenetická aktivace transkripce genů v nezralých thymocytech; stimulace diferenciace kmenových buněk kostní dřeně na funkční imunokompetentní T-buňky.",
      halfLife: "Biochemická indukce buněčné diferenciace přetrvává 6–12 měsíců po ukončení kúry",
      interactions: [
        "Epithalon (klasický Khavinsonův longevity protokol: Thymalin + Epithalon)",
        "Thymosin Alpha-1 (aditivní stimulace protivirové imunity)"
      ],
      naturalSources: ["přírodní polypeptidový extrakt z tkáně brzlíku (thymu) mladého skotu"],
      bannedStatus: "legal (východoevropské lékopisy), výzkumná substance"
    },
    {
      id: 763,
      name: "Vilon (Lys-Glu)",
      categoryKey: "experimental",
      tags: ["peptid", "bioregulator", "dipeptid", "epigenetika", "chromatin", "imunita"],
      rating: 4,
      colorType: "green",
      shortDesc: "Ultrakrátký dipeptidový bioregulátor pro dekondenzaci heterochromatinu a expresi genů.",
      description: "Vilon je syntetický bioregulační dipeptid složený ze dvou aminokyselin: L-lysinu a L-glutamové kyseliny (Lys-Glu / KE). Byl syntetizován na základě analýzy aktivních frakcí thymového extraktu. Vyznačuje se schopností pronikat přímo do buněčného jádra a vázat se na specifická místa histonů a DNA. Výzkumy prokázaly, že Vilon indukuje dekondenzaci zahuštěného heterochromatinu u starých buněk, čímž 'odemkne' a reaktivuje geny potlačené v procesu stárnutí, stimuluje proliferaci lymfocytů a potlačuje spontánní karcinogenezi.",
      effects: [
        "epigenetická dekondenzace heterochromatinu u stárnoucích buněk",
        "reaktivace umlčených genů a obnova syntézy proteinů",
        "imunomodulace a stimulace regenerace thymových epiteliálních buněk",
        "potlačení tvorby volných radikálů a oxidačního poškození DNA",
        "prodloužení maximální délky života v pokusech na hlodavcích"
      ],
      dosage: {
        "short": "10–20 mcg subkutánně denně (nebo 1 mg orálně)",
        "long": "Injekční protokol: 10–20 mcg (mikrogramů!) subkutánně 1x denně po dobu 10–20 dnů. V orální formě se užívá 1–2 mg denně nalačno. Cyklus se opakuje 2x ročně."
      },
      warning: "Velmi účinný v mikrogramových koncentracích. Přísně dodržovat stanovené ředění a sterilitu.",
      mechanism: "Specifická interakce aminokyselinových zbytků Lys a Glu s velkým žlábkem dvoušroubovice DNA v promotorových oblastech genů imunitní odpovědi a proteosyntézy; dekondenzace heterochromatinu.",
      halfLife: "Rychlý rozpad na aminokyseliny, epigenetické změny přetrvávají týdny",
      interactions: [
        "Epithalon (společné epigenetické longevity protokoly)",
        "Corticagen / Pinealon (synergická regenerace nervového a imunitního systému)"
      ],
      naturalSources: ["syntetický dipeptid odvozený z aminokyselinových sekvencí thymu"],
      bannedStatus: "legal, výzkumná substance"
    },
    {
      id: 764,
      name: "Chonluten (Glu-Asp-Arg)",
      categoryKey: "experimental",
      tags: ["peptid", "bioregulator", "plice", "dychani", "bronchy", "EDR"],
      rating: 4,
      colorType: "green",
      shortDesc: "Tripeptidový bioregulátor bronchiální sliznice a plicní tkáně pro zdravé dýchací cesty.",
      description: "Chonluten je syntetický peptidový bioregulátor tvořený třemi aminokyselinami: kyselinou glutamovou, kyselinou asparagovou a argininem (Glu-Asp-Arg / EDR). Byl vyvinut pro cílenou regeneraci a normalizaci buněčného metabolismu v epiteliálních buňkách průdušek a plicní tkáně. Obnovuje funkci řasinkového epitelu, stimuluje syntézu plicního surfaktantu, snižuje zánětlivou reakci při astmatu, CHOPN a urychluje rekonvalescenci plic po těžkých virových pneumoniích (včetně následků COVID-19).",
      effects: [
        "obnova a regenerace epiteliálních buněk průdušek a plicních alveol",
        "zvýšení syntézy plicního surfaktantu a plicní elasticity",
        "zmírnění bronchospasmů a kašle u chronických respiračních onemocnění",
        "zvýšení dechové kapacity a okysličení krve u sportovců",
        "ochrana plic před toxiny z kouření a znečištěného ovzduší"
      ],
      dosage: {
        "short": "1–2 kapsle (nebo 10–20 mcg subkutánně) denně po dobu 10–30 dnů",
        "long": "V orální formě se užívá 1–2 kapsle (100–200 mcg peptidového komplexu) ráno nalačno po dobu 20–30 dnů. Injekčně 10–20 mcg SubQ denně po dobu 10–14 dnů."
      },
      warning: "Netoxický peptid bez vedlejších účinků. Nenahrazuje akutní inhalační záchrannou léčbu při těžkém astmatickém záchvatu.",
      mechanism: "Penetrace do jader bronchiálních epiteliálních buněk, vazba na histonové proteiny a aktivace exprese genů kódujících plicní surfaktantové proteiny (SP-A, SP-B) a antioxidační enzymy.",
      halfLife: "Rychlý plazmatický poločas, buněčná indukce přetrvává měsíce",
      interactions: [
        "Bronchogen (často kombinován pro maximální regeneraci dýchacího traktu)",
        "NAC (synergie v mukolýze a ochraně plicních alveolů)"
      ],
      naturalSources: ["syntetický tripeptid odvozený z tkáně dýchacího systému"],
      bannedStatus: "legal, výzkumná substance"
    },
    {
      id: 765,
      name: "Melanotan I (Afamelanotide / Scenesse)",
      categoryKey: "experimental",
      tags: ["peptid", "melanotan", "opalovani", "fotoprotekce", "MC1R", "FDA"],
      rating: 4,
      colorType: "green",
      shortDesc: "Lineární analog alfa-MSH pro selektivní stimulaci melanogeneze a fotoprotekci bez afrodiziakálních vlivů.",
      description: "Melanotan I (Afamelanotide, komerční lék Scenesse schválený FDA a EMA) je syntetický lineární 13-aminokyselinový peptid, analog přirozeného alfa-melanocyty stimulujícího hormonu (alfa-MSH). Na rozdíl od Melanotanu II (který je cyklický a neselektivně stimuluje MC3R a MC4R v mozku s rizikem nauzey, vysokého tlaku a spontánních erekcí), je Melanotan I vysoce selektivní vůči receptoru MC1R na melanocytech v kůži. Bezpečně spouští syntézu tmavého pigmentu eumelaninu bez vedlejších neuropsychických efektů.",
      effects: [
        "selektivní stimulace produkce fotoprotektivního eumelaninu v pokožce",
        "hluboké a rovnoměrné opálení s minimální nutností expozice UV záření",
        "ochrana kožních buněk před spálením a fotopoškozením DNA",
        "léčba fototoxicity a erytropoetické protoporfyrie (EPP)",
        "absence erektilních a nauzeózních vedlejších účinků typických pro MT-2"
      ],
      dosage: {
        "short": "0.5–1.5 mg subkutánně před mírnou expozicí slunci",
        "long": "Zahajovací protokol: 0.5 mg SubQ denně večer po dobu 3–5 dnů pro ověření snášenlivosti. Následně 1 mg až 1.5 mg obden v kombinaci s mírným sluněním (10–15 minut). Ředění: 10 mg lahvička + 2 ml BAC water (1 mg = 20 jednotek na U-100 inzulínce)."
      },
      warning: "Může způsobit ztmavnutí stávajících mateřských znamének a pih (pravidelně kontrolovat u dermatologa!). Nepoužívat při anamnéze melanomu.",
      mechanism: "Vysoce afinitní selektivní agonismus na receptoru pro melanokortin typu 1 (MC1R) v membránách kožních melanocytů; aktivace adenylátcyklázy, zvýšení cAMP a aktivace enzymu tyrosinázy řídícího syntézu eumelaninu.",
      halfLife: "Cca 30–45 minut (stimulace pigmentace v melanocytech přetrvává dny až týdny)",
      interactions: [
        "Tyrosin (doplnění aminokyselinového substrátu pro syntézu melaninu)",
        "Astaxanthin (aditivní vnitřní fotoprotekce kůže)"
      ],
      naturalSources: ["syntetický lineární analog lidského hormonu alfa-MSH"],
      bannedStatus: "banned-sport (WADA S2.2), lék na předpis (Scenesse)"
    },
    {
      id: 766,
      name: "ACE-031 (Ramatercept)",
      categoryKey: "experimental",
      tags: ["peptid", "myostatin", "hypertrofie", "svaly", "sila", "ActRIIB"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Rozpustný fúzní receptor ActRIIB blokující myostatin a stimulující masivní růst svalů.",
      description: "ACE-031 (Ramatercept) je rekombinantní fúzní protein tvořený extracelulární vazebnou doménou lidského activinového receptoru typu IIB (ActRIIB) spojenou s Fc fragmentem lidského imunoglobulinu IgG1. Funguje jako solubilní 'návnada' (decoy receptor) – váže na sebe cirkulující myostatin, GDF-11 a activiny A a B v krevním oběhu dříve, než se stihnou navázat na svalové receptory. Odstraněním myostatinové brzdy vyvolává masivní a rychlý růst kosterního svalstva zcela nezávisle na androgenních receptorech.",
      effects: [
        "odstranění fyziologické myostatinové brzdy růstu svalové tkáně",
        "masivní svalová hypertrofie bez androgenních vedlejších účinků",
        "významný nárůst absolutní svalové síly a hustoty kostí",
        "nulová konverze na estrogeny a nulová toxicita pro prostatu",
        "zkoumán pro léčbu Duchennovy svalové dystrofie (DMD)"
      ],
      dosage: {
        "short": "1 mg/kg tělesné hmotnosti jednou za 1–2 týdny subkutánně",
        "long": "V experimentálních protokolech: 1–3 mg subkutánně jednou za 7 až 14 dnů po dobu maximálně 3–4 týdnů. Vysoce nákladná a vzácná sloučenina."
      },
      warning: "V klinických studiích fáze II byly u dětských pacientů zaznamenány reverzibilní epistaxe (krvácení z nosu) a dilatace kožních kapilár (telangiektázie) v důsledku blokády endoteliálních activinů. Striktně experimentální látka.",
      mechanism: "Vysokoafinitní vazba a neutralizace ligandů rodiny TGF-beta (myostatin, activin A/B, GDF-11), což brání aktivaci signální dráhy Smad2/3 a uvolňuje fosforylaci Akt/mTOR ve svalových buňkách.",
      halfLife: "Cca 10–14 dní (díky IgG1-Fc fúznímu nosiči)",
      interactions: [
        "Follistatin-344 (společné cílení na myostatinovou kaskádu)",
        "Testosteron / Anabolika (synergický nárůst svalové syntézy přes dva zcela odlišné mechanismy)"
      ],
      naturalSources: ["rekombinantní fúzní protein ActRIIB-Fc"],
      bannedStatus: "banned-sport (WADA S4.4), výzkumná substance"
    },
    {
      id: 767,
      name: "Follistatin-315",
      categoryKey: "experimental",
      tags: ["peptid", "follistatin", "myostatin", "svaly", "rust", "FST-315"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Přirozená cirkulující izoforma follistatinu s prodlouženým systémovým poločasem.",
      description: "Follistatin-315 (FST-315) je primární cirkulující izoforma glykoproteinu follistatinu v lidské krevní plazmě. Oproti kratší izoformě Follistatin-344 (která se rychle štěpí na tkáňově vázanou FST-288 s vysokou afinitou k heparansulfátu) má FST-315 neutrální C-terminální prodloužení. To mu umožňuje volně cirkulovat v systémovém oběhu, vázat volný myostatin v krvi a vykazovat delší biologický poločas. Je klíčovým inhibitorem svalové atrofie a stimulátorem satelitních svalových buněk.",
      effects: [
        "systémová blokáda cirkulujícího myostatinu a activinů v krevní plazmě",
        "stimulace proliferace a diferenciace svalových satelitních buněk",
        "delší setrvání v krevním oběhu oproti kratším formám follistatinu",
        "významná svalová hypertrofie a nárůst čisté svalové hmoty",
        "protizánětlivý vliv na klouby a pojivové tkáně"
      ],
      dosage: {
        "short": "100 mcg denně subkutánně po dobu 10–20 dnů",
        "long": "Aplikuje se 100 mcg subkutánně denně po dobu 10 až maximálně 20 po sobě jdoucích dnů. Poté je nutná pauza minimálně 2–3 měsíce."
      },
      warning: "Experimentální substance. Může dočasně oslabit pevnost šlachových úponů v důsledku extrémně rychlého růstu svalových bříšek (nutno dbát na adekvátní regeneraci šlach např. pomocí BPC-157).",
      mechanism: "Tvorba ireverzibilního ekvimolárního komplexu s myostatinem (GDF-8) a activiny, což znemožňuje jejich interakci s receptory ActRIIB; aktivace dráhy IGF-1/Akt/mTOR.",
      halfLife: "Cca několik hodin v aktivní formě, vazba na myostatin je ireverzibilní",
      interactions: [
        "BPC-157 / TB-500 (ochrana šlach a vazů před rychlým nárůstem svalové síly)",
        "Kreatin (synergická podpora buněčné hydratace a síly)"
      ],
      naturalSources: ["rekombinantní izoforma lidského follistatinu"],
      bannedStatus: "banned-sport (WADA S4.4), výzkumná substance"
    },
    {
      id: 768,
      name: "Adropin",
      categoryKey: "experimental",
      tags: ["peptid", "metabolismus", "cevy", "eNOS", "inzulin", "ENHO"],
      rating: 4,
      colorType: "green",
      shortDesc: "Peptidový hormon kódovaný genem ENHO chránící cévy a řídící spalování tuků.",
      description: "Adropin (z latinského 'aduro' - zapálit, a 'pinquis' - tuk) je 76-aminokyselinový peptidový hormon kódovaný genem ENHO (Energy Homeostasis Associated), syntetizovaný především v játrech a mozku. Jeho hladina v krvi prudce klesá u obezity a inzulínové rezistence. Adropin funguje jako hlavní metabolický přepínač: stimuluje endoteliální syntézu oxidu dusnatého (eNOS) přes receptory NB-3/Notch, chrání cévy před aterosklerózou a v játrech a svalech přepíná metabolismus z utilizace glukózy na spalování mastných kyselin.",
      effects: [
        "masivní stimulace endoteliální syntézy oxidu dusnatého (eNOS)",
        "zlepšení elasticity cév a snížení kardiovaskulárního rizika",
        "přepnutí mitochondriálního metabolismu na spalování mastných kyselin",
        "významné zlepšení inzulínové senzitivity a glukózové homeostázy",
        "neuroprotektivní účinek na hematoencefalickou bariéru"
      ],
      dosage: {
        "short": "100–300 mcg denně subkutánně (výzkumný protokol)",
        "long": "V preklinických a experimentálních modelech: 100 až 300 mcg subkutánně 1x denně ráno po dobu 2–4 týdnů. Ředění v bakteriostatické vodě, skladovat v chladničce při 2–8 °C."
      },
      warning: "Experimentální metabolický peptid ve stadiu preklinických studií. Přísně dbát na sterilitu a skladování v chladu.",
      mechanism: "Vazba na membránový receptor neural cell adhesion molecule Contactin-6 (NB-3/CNTN6) a aktivace signalizace Notch1; upregulace transkripce endoteliální syntázy oxidu dusnatého (eNOS) přes dráhu Akt/VEGFR2.",
      halfLife: "Cca 2–3 hodiny",
      interactions: [
        "MOTS-c (synergický mitochondriální a metabolický stack)",
        "Citrulin / Arginin (doplnění substrátu pro adropinem stimulovanou eNOS)"
      ],
      naturalSources: ["přirozený lidský peptidový hormon jater a mozku"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 769,
      name: "GDF11 (Growth Differentiation Factor 11)",
      categoryKey: "experimental",
      tags: ["peptid", "longevity", "omlazeni", "srdce", "neurogeneze", "Harvard"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Cirkulující protein ze skupiny TGF-beta spojovaný s omlazením srdce a neurogenezí.",
      description: "GDF11 (Growth Differentiation Factor 11) je signální protein rodiny TGF-beta. V roce 2013–2014 vzbudil celosvětovou senzaci po publikaci výzkumů Harvardovy univerzity (laboratoř Dr. Amy Wagersové), které v modelech heterochronní parabiózy (propojení krevního oběhu mladé a staré myši) identifikovaly GDF11 jako klíčový faktor mládí. Podání GDF11 vedlo k reverzi věkem podmíněné hypertrofie levé komory srdeční, obnově neurogeneze a vaskulatury v mozku a zvýšení svalové regenerace.",
      effects: [
        "reverze věkem podmíněné kardiomyopatie a hypertrofie myokardu",
        "stimulace neurogeneze a proliferace kmenových buněk v hipokampu",
        "omlazení mozkové vaskulatury a cerebrálního krevního toku",
        "obnova funkčnosti satelitních svalových buněk u starších jedinců",
        "zkoumán pro prodloužení funkční délky života"
      ],
      dosage: {
        "short": "10–50 mcg subkutánně 1–3x týdně (mikrodávkování)",
        "long": "V biohackingových protokolech se využívá výhradně ultra-nízké mikrodávkování: 10 až 50 mcg SubQ 1–2x týdně. Vyšší dávky mohou působit antianabolicky, proto je přesná titrace kritická."
      },
      warning: "Dvousečná zbraň – fyziologické hladiny omlazují tkáně, avšak vysoké supraterapeutické dávky inhibují svalovou regeneraci a mohou vést k anémii. Vyžaduje přesné laboratorní monitorování krevního obrazu.",
      mechanism: "Vazba na receptory ALK4/ALK5 a ActRIIA/ActRIIB; modulace fosforylace Smad2/3; stimulace endoteliální angiogeneze v neurogenních nikách mozku.",
      halfLife: "Cca 4–6 hodin",
      interactions: [
        "SS-31 (synergická mitochondriální kardiální protekce)",
        "Epithalon (komplexní gerontologický protokol)"
      ],
      naturalSources: ["přirozený cirkulující lidský protein"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 770,
      name: "Livagen (Lys-Glu-Asp-Ala)",
      categoryKey: "experimental",
      tags: ["peptid", "bioregulator", "jatra", "chromatin", "detoxikace", "Khavinson"],
      rating: 4,
      colorType: "green",
      shortDesc: "Krátký peptidový bioregulátor jater pro reaktivaci genů a regeneraci hepatocytů.",
      description: "Livagen je syntetický bioregulační tetrapeptid složený ze 4 aminokyselin: L-lysinu, L-glutamové kyseliny, L-asparagové kyseliny a L-alaninu (Lys-Glu-Asp-Ala). Byl vyvinut v Petrohradském institutu bioregulace pro stimulaci jaterní tkáně a imunitního systému. V cytogenetických studiích Livagen prokázal schopnost aktivovat ribozomální geny a deheterochromatizovat zahuštěné oblasti chromozomů v buňkách starých osob, což dramaticky stimuluje proteosyntézu a regeneraci jater po virových infekcích, toxickém poškození či cirhóze.",
      effects: [
        "aktivace ribozomálních genů a syntézy proteinů v hepatocytech",
        "dekondenzace heterochromatinu u stárnoucích jaterních buněk",
        "urychlení regenerace jater po toxickém a medikamentózním poškození",
        "normalizace hladin jaterních transamináz (ALT, AST)",
        "podpora detoxikační a metabolické kapacity jater"
      ],
      dosage: {
        "short": "10–20 mcg subkutánně denně po dobu 10–20 dnů (nebo 1–2 mg orálně)",
        "long": "Subkutánně 10–20 mcg denně inzulínovou stříkačkou po dobu 10–14 dnů. Orálně 1–2 mg denně nalačno po dobu 20 dnů. Cyklus opakovat 2x ročně."
      },
      warning: "Netoxický fyziologický peptid. Žádné hlášené vedlejší účinky v klinických studiích.",
      mechanism: "Epigenetická vazba tetrapeptidu na DNA a histonové proteiny v jádrech hepatocytů, vedoucí k odbalení heterochromatinu a transkripci enzymů jaterního metabolismu.",
      halfLife: "Rychlý rozklad na aminokyseliny, epigenetické nastavení přetrvává měsíce",
      interactions: [
        "TUDCA (dokonalý synergický stack pro ochranu a regeneraci jater)",
        "Vesugen (obnova jaterního i vaskulárního endotelu)"
      ],
      naturalSources: ["syntetický tetrapeptid odvozený z aminokyselinových sekvencí jaterní tkáně"],
      bannedStatus: "legal, výzkumná substance"
    },
    {
      id: 771,
      name: "Testagen (Lys-Glu-Asp-Gly)",
      categoryKey: "experimental",
      tags: ["peptid", "bioregulator", "varlata", "testosteron", "spermiogeneze", "Khavinson"],
      rating: 4,
      colorType: "green",
      shortDesc: "Khavinsonův tetrapeptidový bioregulátor varlat stimulující spermatogenezi a testosteron.",
      description: "Testagen je syntetický krátký bioregulační peptid složený z L-lysinu, L-glutamové kyseliny, L-asparagové kyseliny a L-glycinu (Lys-Glu-Asp-Gly). Působí tkáňově specificky na samčí reprodukční systém – konkrétně na Leydigovy a Sertoliho buňky varlat. Normalizuje funkci varlat narušenou stárnutím, toxickými vlivy, přetížením nebo poškozením osy HPTA. Zvyšuje motilitu a počet zdravých spermií a podporuje přirozenou syntézu endogenního testosteronu bez rizika negativní zpětné vazby na hypofýzu.",
      effects: [
        "tkáňově specifická podpora a regenerace tkáně varlat",
        "stimulace spermatogeneze (zvýšení počtu a motility spermií)",
        "podpora fyziologické syntézy testosteronu v Leydigových buňkách",
        "ochrana testikulární tkáně před oxidačním stresem a toxiny",
        "nulová suprese přirozené hormonální osy HPTA"
      ],
      dosage: {
        "short": "10–20 mcg subkutánně denně po dobu 10–20 dnů (nebo 1–2 mg orálně)",
        "long": "Subkutánní aplikace 10–20 mcg 1x denně ráno po dobu 10–14 dnů. Orální forma: 1–2 mg denně nalačno po dobu 20–30 dnů. Vhodné jako součást regeneračních protokolů a PCT."
      },
      warning: "Netoxický peptid bez hormonální supresivní aktivity. Nezpůsobuje atrofii varlat (naopak stimuluje jejich přirozenou tkáň).",
      mechanism: "Interakce s DNA v Leydigových a Sertoliho buňkách, stimulace exprese enzymů steroidogeneze (CYP11A1, 3beta-HSD) a receptorů pro LH.",
      halfLife: "Rychlý plazmatický poločas, indukce tkáňové regenerace trvá měsíce",
      interactions: [
        "Enclomifen (ideální PCT synergie: Enclomifen stimuluje LH/FSH a Testagen obnovuje varlata)",
        "Zinek a Bor (doplnění minerálních kofaktorů syntézy testosteronu)"
      ],
      naturalSources: ["syntetický tetrapeptid zkoumaný v Petrohradském institutu gerontologie"],
      bannedStatus: "legal, výzkumná substance"
    }
  ],

  // === ATHLETIC PERFORMANCE (8 compounds: 220-227) ===
  performance: [
    {
      id: 220,
      name: "Glycerol (GlycerPump 65%)",
      categoryKey: "performance",
      tags: ["hydratace", "pumpa", "vytrvalost", "objem", "osmolyz", "krevni-objem"],
      rating: 5,
      colorType: "green",
      shortDesc: "Masivní hyperhydratační činidlo zvyšující objem krevní plazmy a oddalující únavu.",
      description: "Glycerol (GlycerPump) je patentovaná stabilní forma 65% glycerolu vázaného na křemík, která na rozdíl od starého glycerolmonostearátu (GMS) netvoří hrudky a dokonale se rozpouští ve vodě. V těle působí jako mocný osmolyt: rapidně zvyšuje osmotický tlak v krevním řečišti a buňkách, čímž dočasně váže a zadržuje litry vody v cévním řečišti a kosterním svalstvu (stav hyperhydratace). To vede k obrovské svalové plnosti, brutální svalové pumpě, snížení srdeční frekvence při zátěži a dramatickému oddálení dehydratace a přehřátí.",
      effects: [
        "stav hyperhydratace (zvýšení objemu cirkulující krevní plazmy)",
        "masivní a dlouhotrvající svalová plnost a prokrvení (pumpa)",
        "snížení tělesné teploty a oddálení vyčerpání v horkém prostředí",
        "snížení kardiovaskulárního stresu a tepové frekvence při vytrvalosti",
        "ochrana před křečemi z dehydratace"
      ],
      dosage: {
        "short": "2–5 g 30–45 minut před tréninkem s 750–1 000 ml vody",
        "long": "Užijte 2 000 až 5 000 mg prášku GlycerPump přibližně 30–45 minut před fyzickou zátěží. KRITICKÉ: Vždy zapít minimálně 750 až 1 000 ml čisté vody (glycerol potřebuje vodu navázat, bez vody způsobí žaludeční křeče!)."
      },
      warning: "Nutno zapít velkým množstvím tekutin! Při požití bez vody může způsobit nevolnost a průjem. V minulosti byl na seznamu WADA pro maskování dopingu, od roku 2018 byl WADA oficiálně vyškrtnut a je legální.",
      mechanism: "Zvýšení osmolarity krevní plazmy a renální tubulární reabsorpce vody; zvýšení vaskulárního objemu a stimulace endoteliálního tlaku v kapilárách.",
      halfLife: "Cca 1–2 hodiny (hydratační efekt trvá 3–4 hodiny)",
      interactions: [
        "Citrulin Malát (extrémní synergická pumpa: oxid dusnatý + hyperhydratace)",
        "Sodík a Elektrolyty (dramatické posílení retence vnitrocévní tekutiny)"
      ],
      naturalSources: ["přirozená součást rostlinných a živočišných triglyceridů"],
      bannedStatus: "legal (WADA povoleno od 2018)"
    },
    {
      id: 221,
      name: "L-Karnitin L-Tartrát (LCLT)",
      categoryKey: "performance",
      tags: ["regenerace", "androgenni-receptory", "svaly", "karnitin", "testosteron"],
      rating: 4,
      colorType: "green",
      shortDesc: "Vysoce biodostupná forma karnitinu upregulující hustotu androgenních receptorů ve svalech.",
      description: "L-Karnitin L-Tartrát (LCLT) je sůl L-karnitinu a kyseliny vinné. Vyznačuje se výrazně rychlejším vstřebáváním oproti běžnému volnému karnitinu. Stěžejní klinické studie z University of Connecticut prokázaly, že suplementace LCLT po dobu 3 týdnů vedla k dramatickému zvýšení hustoty androgenních receptorů (AR) ve svalových buňkách po tréninku. To umožňuje svalové tkáni efektivněji vázat cirkulující testosteron, urychluje reparaci mikrotrhlin a snižuje bolestivost svalů po zátěži (DOMS).",
      effects: [
        "upregulace hustoty androgenních receptorů ve svalové tkáni",
        "významné snížení svalového poškození a bolesti po tréninku (DOMS)",
        "zrychlení regenerace mezi těžkými tréninkovými jednotkami",
        "zvýšení oxygenace svalů a mikrocirkulace",
        "podpora transportu mastných kyselin do mitochondrií"
      ],
      dosage: {
        "short": "1 000–2 000 mg denně (ideálně rozděleně kolem tréninku)",
        "long": "Doporučená dávka je 1 000 mg ráno a 1 000 mg ihned po tréninku se sacharidy a bílkovinami (inzulínový pulz výrazně zlepšuje svalové vychytávání karnitinu transportérem OCTN2)."
      },
      warning: "Při velmi vysokých orálních dávkách (>4 g) může střevní mikrobiom metabolizovat karnitin na TMAO. Užívat nepřekračující doporučené dávky, případně kombinovat s česnekem (allicin tlumí tvorbu TMAO).",
      mechanism: "Upregulace exprese mRNA pro androgenní receptor v kosterním svalu; snížení produkce purinových katabolitů a poškození buněčných membrán cvičením; kofaktor transportéru CPT-1.",
      halfLife: "Cca 3–4 hodiny",
      interactions: [
        "Syrovátkový protein a rychlé sacharidy (inzulín stimuluje svalový transportér OCTN2)",
        "Kreatin (synergický potréninkový anabolický protokol)"
      ],
      naturalSources: ["červené maso (hovězí, zvěřina)", "mléčné výrobky"],
      bannedStatus: "legal"
    },
    {
      id: 222,
      name: "Injekční L-Karnitin",
      categoryKey: "performance",
      tags: ["karnitin", "injekce", "tuk", "mitochondrie", "energie", "TMAO-free"],
      rating: 5,
      colorType: "green",
      shortDesc: "Injekční protokol obcházející bariéru vstřebávání pro 100% systémovou dostupnost bez TMAO.",
      description: "Orální podání L-karnitinu má tristní biologickou dostupnost – pouze cca 5 až 15 %, přičemž nevstřebaný zbytek je ve střevě bakteriemi fermentován na aterogenní trimethylamin (TMA) a játry konvertován na TMAO. Injekční L-karnitin (aplikovaný subkutánně nebo intramuskulárně) tuto metabolickou bariéru kompletně obchází. Poskytuje 100% biologickou dostupnost bez tvorby TMAO. Během několika týdnů plně nasytí svalové zásoby karnitinu, čímž maximalizuje oxidaci tuků na energii, šetří svalový glykogen a dramaticky zvyšuje hustotu androgenních receptorů.",
      effects: [
        "100% biologická dostupnost bez ztrát v trávicím traktu",
        "nulová tvorba škodlivého metabolitu TMAO",
        "masivní podpora transportu mastných kyselin s dlouhým řetězcem do mitochondrií",
        "významné zvýšení hustoty androgenních receptorů",
        "zlepšení regenerace a vytrvalosti"
      ],
      dosage: {
        "short": "200–500 mg subkutánně nebo i.m. denně před sacharidovým jídlem",
        "long": "Aplikuje se 200 mg až 500 mg denně inzulínovou stříkačkou subkutánně do tuku nebo do svalu. Nejvhodnější čas je ráno nebo před tréninkem, ideálně před jídlem obsahujícím sacharidy (inzulín pumpuje karnitin do svalů)."
      },
      warning: "Vyžaduje sterilní lékárenský nebo certifikovaný injekční roztok (obvykle 500 mg/ml nebo 600 mg/ml). Při aplikaci může lehce štípat (lze ředit fyziologickým roztokem nebo aplikovat pomalu).",
      mechanism: "Přímo zásobuje karnitin-palmitoyltransferázu I a II (CPT-1/2) na vnitřní mitochondriální membráně, čímž odstraňuje rychlostní limit oxidace mastných kyselin; upregulace AR exprese.",
      halfLife: "Plazmatický poločas cca 2–3 hodiny (tkáňové nasycení trvá týdny)",
      interactions: [
        "Inzulín / Sacharidy (inzulín je podmínkou pro aktivaci svalového transportéru OCTN2)",
        "Kofein (aditivní stimulace lipolýzy)"
      ],
      naturalSources: ["syntetický sterilní injekční roztok karnitinu"],
      bannedStatus: "legal (WADA omezuje i.v. infuze nad 100 ml/12 hod, standardní SubQ/i.m. injekce do 1 ml jsou legální)"
    },
    {
      id: 223,
      name: "Ecdysteron (20-Hydroxyecdyson)",
      categoryKey: "performance",
      tags: ["anabolikum", "fytosteroid", "ER-beta", "sila", "svaly", "prirodni"],
      rating: 4,
      colorType: "green",
      shortDesc: "Přírodní rostlinný fytosteroid stimulující proteosyntézu přes ER-beta bez hormonální suprese.",
      description: "Ecdysteron (20-hydroxyecdyson) je přirozeně se vyskytující fytosteroid nalezený v rostlinách jako špenát nebo leuzea šustivá (Rhaponticum carthamoides). Často je označován jako 'ruské tajemství olympijských vzpěračů'. V přelomové studii Freie Universität Berlin z roku 2019 prokázal ekdysteron u sportovců signifikantní nárůst svalové hmoty a síly. Klíčová přednost: nestimuluje androgenní receptory, nearomatizuje na estrogeny a nepotlačuje přirozenou osu HPTA (žádná atrofie varlat ani pokles testosteronu).",
      effects: [
        "stimulace proteosyntézy ve svalových vláknech srovnatelná s mírnými anaboliky",
        "významný nárůst maximální síly na benchpressu a dřepu",
        "nulová vazba na androgenní receptory (nulové androgenní nežádoucí účinky)",
        "nulová suprese přirozené produkce testosteronu a osy HPTA",
        "zlepšení inzulínové senzitivity a snížení tělesného tuku"
      ],
      dosage: {
        "short": "300–600 mg standardizovaného extraktu denně s jídlem",
        "long": "Užívejte 300 až 600 mg vysoce čistého ekdysteronu (standardizovaného na 90–95 %) denně rozděleně do 2 dávek s jídly bohatými na bílkoviny. Kúra trvá 8–12 týdnů."
      },
      warning: "Trh je zaplaven nekvalitními extrakty s reálným obsahem ekdysteronu pod 5–10 % (kupujte pouze produkty s laboratorním HPLC certifikátem). WADA zařadila ekdysteron na 'Monitoring Program', v současnosti je však legální.",
      mechanism: "Specifický agonismus na estrogenním receptoru beta (ER-beta) ve svalových buňkách; aktivace intracelulární signální kaskády PI3K/Akt bez ovlivnění androgenního receptoru.",
      halfLife: "Cca 2–4 hodiny (vyžaduje rozdělení dávky 2x denně)",
      interactions: [
        "Syrovátkový protein a EAA (nutný dostatek esenciálních aminokyselin jako stavebního materiálu)",
        "Turkesteron (synergický fytosteroidní stack)"
      ],
      naturalSources: ["leuzea šustivá (Rhaponticum carthamoides)", "špenát setý (Spinacia oleracea)"],
      bannedStatus: "legal (WADA Monitoring Program)"
    },
    {
      id: 224,
      name: "Turkesteron (Ajuga Turkestanica)",
      categoryKey: "performance",
      tags: ["turkesteron", "fytosteroid", "sila", "proteosyntéza", "adaptogen"],
      rating: 4,
      colorType: "green",
      shortDesc: "Vysokoafinitní fytoecdysteroid z Ajuga turkestanica pro podporu svalové translace a síly.",
      description: "Turkesteron je specifický ecdysteroid izolovaný z vysokohorské rostliny Ajuga turkestanica, rostoucí ve Střední Asii. Od běžného ekdysteronu se liší přítomností další hydroxylové skupiny na pozici C-11, což zvyšuje jeho hydrofilní stabilitu a afinitu k membránovým receptorům. Je silným stimulátorem translace mRNA a retence dusíku ve svalových vláknech, působí adaptogenně, urychluje obnovu po svalovém vyčerpání a nezpůsobuje zadržování vody ani gynekomastii.",
      effects: [
        "akcelerace syntézy svalových bílkovin a dusíkové bilance",
        "podpora svalové síly a pracovní kapacity na tréninku",
        "adaptogenní ochrana svalových vláken před katabolismem při dietě",
        "žádná hormonální suprese – po skončení není nutné žádné PCT",
        "podpora integrity kloubů a šlach"
      ],
      dosage: {
        "short": "500–1 000 mg standardizovaného extraktu denně s bílkovinami",
        "long": "Dávkování 500 mg 1–2x denně (ideálně ráno a před tréninkem) vždy společně s proteinovým jídlem. Užívejte v cyklech 8–12 týdnů."
      },
      warning: "Ujistěte se, že produkt využívá komplex s hydroxypropyl-beta-cyklodextrinem (komplexace dramaticky zvyšuje střevní absorpci turkesteronu).",
      mechanism: "Stimulace dráhy Akt/mTOR přes non-androgenní membránové receptory; zvýšení inkorporace leucinu a dalších aminokyselin do nově tvořených myofibril.",
      halfLife: "Cca 3–5 hodin",
      interactions: [
        "Ecdysteron (duální fytosteroidní stack)",
        "Kreatin Monohydrát (synergické zvýšení svalové síly)"
      ],
      naturalSources: ["zběhovec turkestánský (Ajuga turkestanica)"],
      bannedStatus: "legal"
    },
    {
      id: 225,
      name: "Epicatechin (Extrakt z kakaa)",
      categoryKey: "performance",
      tags: ["myostatin", "follistatin", "kakao", "eNOS", "vaskularita", "vytrvalost"],
      rating: 4,
      colorType: "green",
      shortDesc: "Přírodní bioaktivní flavanol tlumící myostatin a zvyšující follistatin a oxid dusnatý.",
      description: "Epicatechin (konkrétně bioaktivní izomer (-)-epicatechin) je přírodní polyfenolický flavanol obsažený v hořké čokoládě a kakau. V průkopnických klinických studiích bylo prokázáno, že podávání epicatechinu sportovcům vede ke statisticky významnému snížení cirkulujícího myostatinu (o téměř 16 %) a současnému zvýšení jeho přirozeného inhibitoru follistatinu (o téměř 50 %). Zároveň silně stimuluje endoteliální syntázu oxidu dusnatého (eNOS), což vede k mohutné cévní vazodilataci, prokrvení svalů a mitochondriální biogenezi.",
      effects: [
        "přirozená úprava poměru myostatin/follistatin ve prospěch svalového růstu",
        "významná stimulace tvorby oxidu dusnatého (vaskularita a pumpa)",
        "podpora mitochondriální biogeneze a kapilární hustoty ve svalech",
        "zvýšení aerobní a anaerobní svalové vytrvalosti",
        "silný antioxidační a kardioprotektivní účinek"
      ],
      dosage: {
        "short": "150–300 mg denně (ideálně 30–45 minut před tréninkem)",
        "long": "Standardní dávka je 150 až 300 mg čistého (-)-epicatechinu denně. V tréninkové dny užít 45 minut před cvičením pro maximální napumpování a stimulaci eNOS. Kúra trvá 8–12 týdnů."
      },
      warning: "Běžný kakaový prášek obsahuje minimum volného epicatechinu a spoustu kalorií – je nutné používat purifikovaný a standardizovaný extrakt.",
      mechanism: "Inhibice exprese myostatinu a aktivace syntézy follistatinu; fosforylace endoteliální syntázy oxidu dusnatého (eNOS) přes dráhu PI3K/Akt; stimulace sirtuinu 1 (SIRT1).",
      halfLife: "Cca 2–3 hodiny (vrchol plazmatické koncentrace za 1–2 hodiny)",
      interactions: [
        "Citrulin a Glycerol (monstrózní vaskulární pumpa)",
        "Kreatin (společná podpora svalové síly)"
      ],
      naturalSources: ["tmavá hořká čokoláda (kakaové boby Theobroma cacao)", "zelený čaj"],
      bannedStatus: "legal"
    },
    {
      id: 226,
      name: "Agmatin Sulfát",
      categoryKey: "performance",
      tags: ["pumpa", "eNOS", "iNOS", "neurotransmiter", "vazodilatace", "fokus"],
      rating: 5,
      colorType: "green",
      shortDesc: "Dekarboxylovaný arginin pro dlouhotrvající svalovou pumpu, modulaci bolesti a náladu.",
      description: "Agmatin sulfát je endogenní neuromodulátor vznikající v těle dekarboxylací aminokyseliny L-argininu enzymem arginin dekarboxylázou. V pre-workout suplementech je považován za krále svalové pumpy. Na rozdíl od běžného argininu (který neselektivně zvyšuje všechny enzymy NOS) působí agmatin selektivně: dramaticky stimuluje eNOS (rozšiřuje cévy a maximalizuje svalové prokrvení), zatímco tlumí iNOS (zánětlivý oxid dusnatý). Navíc působí na imidazolinové a NMDA receptory, čímž snižuje vnímání bolesti při sériích do selhání.",
      effects: [
        "masivní, hluboké a dlouhotrvající napumpování svalů",
        "selektivní stimulace eNOS a inhibice zánětlivého iNOS",
        "zvýšení tolerance bolesti a oddálení svalového pálení při sériích",
        "neuroprotekce a anxiolytické zklidnění tréninkového stresu",
        "podpora inzulínové senzitivity v kosterním svalu"
      ],
      dosage: {
        "short": "500–1 500 mg 30 minut před tréninkem",
        "long": "Užívejte 750 až 1 500 mg agmatin sulfátu přibližně 30 minut před tréninkem. Vynikající v kombinaci s citrulinem a glycerolem."
      },
      warning: "Nekombinujte ve stejnou chvíli s čistým L-argininem nebo L-citrulinem ve stejné porci, pokud soutěží o stejný transportér (užijte agmatin cca 15 minut předem).",
      mechanism: "Selektivní allosterická aktivace endoteliální syntázy oxidu dusnatého (eNOS), inhibice iNOS a nNOS; agonismus na imidazolinových I1 a I2 receptorech a blokáda NMDA receptorových kanálů.",
      halfLife: "Cca 2 hodiny v plazmě (tkáňový efekt přetrvává podstatně déle)",
      interactions: [
        "Kofein (agmatin zjemňuje periferní vazokonstrikci způsobenou stimulanty)",
        "Glycerol (dokonalá kombinace osmotické a vazodilatační pumpy)"
      ],
      naturalSources: ["fermentované potraviny", "stopová množství v pivovarských kvasnicích"],
      bannedStatus: "legal (v USA a EU populární složka pre-workoutů)"
    },
    {
      id: 227,
      name: "AstraGin",
      categoryKey: "performance",
      tags: ["absorpce", "streva", "peptidy", "aminokyseliny", "biologicka-dostupnost"],
      rating: 5,
      colorType: "green",
      shortDesc: "Patentovaný rostlinný extrakt zvyšující střevní absorpci aminokyselin, peptidů a živin až o 50 %.",
      description: "AstraGin je patentovaný přírodní extrakt ze dvou vysoce purifikovaných tradičních bylin: kozince blanitého (Astragalus membranaceus) a ženšenu nepravého (Panax notoginseng). Působí na úrovni tenkého střeva, kde dramaticky upreguluje expresi klíčových transportních proteinů (jako jsou SGLT1 pro glukózu, CAT1 pro aminokyseliny či PEPT1 pro oligopeptidy). Zvyšuje absorpci argininu o 67 %, citrulinu o 45 %, kreatinu o 33 %, peptidů a vitamínů, a současně regeneruje střevní sliznici tím, že tlumí zánětlivé cytokiny.",
      effects: [
        "zvýšení absorpce aminokyselin, kreatinu a peptidů ve střevě až o 40–60 %",
        "upregulace střevních transportérů živin (SGLT1, CAT1, PEPT1)",
        "obnova integrity střevních klků a slizniční bariéry",
        "maximalizace účinnosti pre-workoutů, proteinů a biohackingových látek",
        "podpora syntézy ATP v enterocytech"
      ],
      dosage: {
        "short": "25–50 mg současně s jídlem nebo doplňky stravy",
        "long": "Dávkujte 50 mg AstraGinu společně s pre-workoutem, kreatinem, aminokyselinami nebo hlavními jídly. Běžně bývá součástí prémiových formulí."
      },
      warning: "Zcela přírodní a bezpečný extrakt bez vedlejších účinků.",
      mechanism: "Upregulace mRNA a proteinové exprese transportérů živin v apikální membráně enterocytů; potlačení exprese TNF-alfa a IL-6 ve střevní stěně.",
      halfLife: "Cca 2–4 hodiny",
      interactions: [
        "Kreatin a Citrulin (radikální nárůst jejich biologické dostupnosti)",
        "BPC-157 orální (synergická regenerace střevní sliznice)"
      ],
      naturalSources: ["Astragalus membranaceus", "Panax notoginseng"],
      bannedStatus: "legal"
    }
  ],

  // === FAT LOSS & METABOLISM (6 compounds: 415-420) ===
  fatloss: [
    {
      id: 415,
      name: "Rauwolscin (Alfa-Yohimbin)",
      categoryKey: "fatloss",
      tags: ["spalovac", "alfa-2", "stubborn-fat", "termogeneze", "energie"],
      rating: 5,
      colorType: "yellow",
      shortDesc: "Vysoce selektivní antagonista alfa-2 receptorů pro uvolnění tuku z rezistentních partií.",
      description: "Rauwolscin (isoyohimbin / alfa-yohimbin) je diastereomer yohimbinu extrahovaný z rostliny Rauvolfia vomitoria. Vyznačuje se až 3x vyšší selektivitou vůči alfa-2 adrenergním receptorům oproti klasickému yohimbinu. V lidském těle fungují alfa-2 receptory jako 'brzda' lipolýzy – nacházejí se v obrovské koncentraci v tzv. rezistentním tuku (spodní břicho u mužů, boky a stehna u žen). Rauwolscin tuto brzdu spolehlivě odemyká, což umožňuje katecholaminům masivně spalovat tuk i při nízkých procentech tělesného tuku, s výrazně menším výskytem úzkosti než yohimbin.",
      effects: [
        "selektivní blokáda alfa-2 adrenergních receptorů v rezistentním tuku",
        "odemknutí lipolýzy ve spodním břiše, bocích a hýždích",
        "zvýšení termogeneze a hladiny energie při tréninku",
        "potlačení chuti k jídlu při půstu",
        "čistší stimulační profil s menší kardiovaskulární zátěží než yohimbin HCl"
      ],
      dosage: {
        "short": "1–3 mg ráno nalačno před kardiem",
        "long": "Užívejte 1 mg až maximálně 3 mg přibližně 30 minut před ranním tréninkem nalačno. KRITICKÉ: Užívat výhradně nalačno (i malé množství inzulínu po jídle kompletně eliminuje lipolytický účinek!). Začněte na 1 mg pro otestování tolerance."
      },
      warning: "Zvyšuje krevní tlak a tepovou frekvenci. Nepoužívejte při kardiovaskulárních chorobách, panických atakách nebo v kombinaci s antidepresivy.",
      mechanism: "Vysoce selektivní kompetitivní antagonismus na presynaptických a postsynaptických alfa-2A a alfa-2B adrenergních receptorech, což zabraňuje inhibici adenylátcyklázy a udržuje vysoké hladiny cAMP v adipocytech.",
      halfLife: "Cca 1–2 hodiny",
      interactions: [
        "Kofein (synergické zvýšení katecholaminů a blokáda fosfodiesterázy)",
        "L-Karnitin (karnitin transportuje uvolněné mastné kyseliny do mitochondrií)"
      ],
      naturalSources: ["Rauvolfia vomitoria", "Corynanthe yohimbe"],
      bannedStatus: "controlled / banned-sport (WADA S6)"
    },
    {
      id: 416,
      name: "Paradoxin (Aframomum melegueta - 6-paradol)",
      categoryKey: "fatloss",
      tags: ["hnedy-tuk", "BAT", "termogeneze", "visceralni-tuk", "bez-kofeinu"],
      rating: 5,
      colorType: "green",
      shortDesc: "Patentovaný extrakt ze zrnek ráje aktivující hnědý tuk (BAT) a spalování viscerálního tuku.",
      description: "Paradoxin je patentovaný standardizovaný extrakt ze semen rostliny Aframomum melegueta (zrnka ráje) z čeledi zázvorníkovitých, standardizovaný na bioaktivní fenolickou sloučeninu 6-paradol. Působí zcela unikátním nestimulačním mechanismem: aktivuje a zmnožuje hnědou tukovou tkáň (BAT – Brown Adipose Tissue). Hnědý tuk má obrovskou hustotu mitochondrií obsahujících protein termogenin (UCP-1). Aktivací BAT tělo přeměňuje uložené kalorie a viscerální tuk přímo na teplo bez zatížení srdce a nervového systému.",
      effects: [
        "přímá aktivace a stimulace hnědého tuku (BAT)",
        "významné zrychlení klidového energetického výdeje bez stimulantů",
        "cílená redukce nebezpečného viscerálního tuku v dutině břišní",
        "zvýšení termogeneze a oxidace lipidů po jídle",
        "vhodný pro večerní užívání (nenarušuje spánek)"
      ],
      dosage: {
        "short": "40–50 mg 1–2x denně s jídlem",
        "long": "Doporučená klinická dávka je 40 až 50 mg 1–2x denně (ideálně před tréninkem a před spaním). Pro maximální efekt užívejte nepřetržitě minimálně 4 týdny."
      },
      warning: "Velmi bezpečný přírodní extrakt. Po požití může vyvolat příjemný pocit vnitřního tepla.",
      mechanism: "Aktivace TRPV1 (přechodný receptorový potenciál vaniloid 1) receptorů a stimulace sympatických nervových zakončení v hnědé tukové tkáni; upregulace exprese UCP-1 v mitochondriích.",
      halfLife: "Cca 2–3 hodiny (metabolický nárůst BAT přetrvává dlouhodobě)",
      interactions: [
        "Capsimax / Kapsaicin (synergická aktivace TRPV1 receptorů)",
        "Fucoxanthin (dvojitá stimulace UCP-1)"
      ],
      naturalSources: ["zrnka ráje (Aframomum melegueta)"],
      bannedStatus: "legal"
    },
    {
      id: 417,
      name: "Higenamin (Norcoclaurin)",
      categoryKey: "fatloss",
      tags: ["beta-2", "bronchodilatace", "termogeneze", "lipolyza", "energie"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Přírodní selektivní beta-2 agonista rozšiřující průdušky a stimulující rozklad tuků.",
      description: "Higenamin (norcoclaurin) je přírodní benzylisochinolinový alkaloid nacházející se v rostlinách jako Nelumbo nucifera (lotos ořechonosný) a Aconitum. Funguje jako přirozený a selektivní agonista beta-2 adrenergních receptorů (podobně jako farmaceutický klenbuterol, ale s kratším poločasem a nižším rizikem desenzitizace). Vyvolává silnou bronchodilataci (rozšíření dýchacích cest), zvyšuje přísun kyslíku, aktivuje enzym adenylátcyklázu v tukových buňkách a spouští mohutnou lipolýzu.",
      effects: [
        "silná stimulace lipolýzy přes beta-2 adrenergní receptory",
        "bronchodilatace (rozšíření dýchacích cest a lepší oxygenace)",
        "zvýšení energetického výdeje a tělesné teploty",
        "podpora svalové síly a kardiovaskulární kapacity",
        "rychlý nástup účinku vhodný do pre-workoutů"
      ],
      dosage: {
        "short": "20–50 mg 30 minut před tréninkem",
        "long": "Dávka 20 až 50 mg přibližně 30 minut před tréninkem. Začněte na 20 mg pro ověření tolerance. Neužívejte večer."
      },
      warning: "WADA zakazuje higenamin ve sportu v kategorii S3 (Beta-2 agonisté). Zvyšuje tepovou frekvenci, nevhodné pro osoby se srdečními vadami.",
      mechanism: "Selektivní vazba a stimulace beta-2 adrenergních receptorů; aktivace Gs proteinu, zvýšení intracelulárního cAMP a aktivace hormon-senzitivní lipázy (HSL) štěpící triglyceridy.",
      halfLife: "Cca 30–60 minut",
      interactions: [
        "Kofein (synergické zesílení signálu cAMP)",
        "Synefrin (komplementární stimulace beta-3 receptorů)"
      ],
      naturalSources: ["lotos ořechonosný (Nelumbo nucifera)", "Nandina domestica"],
      bannedStatus: "banned-sport (WADA S3)"
    },
    {
      id: 418,
      name: "Fucoxanthin",
      categoryKey: "fatloss",
      tags: ["karotenoid", "UCP-1", "bily-tuk", "lipolyza", "morske-rasy"],
      rating: 4,
      colorType: "green",
      shortDesc: "Mořský karotenoid z hnědých řas indukující expresi termogeninu v bílé tukové tkáni.",
      description: "Fucoxanthin je unikátní xantofylový karotenoid izolovaný z hnědých mořských řas (Undaria pinnatifida – Wakame). Je jedním z mála látek, které dokáží indukovat expresi mitochondriálního odpřahovacího proteinu 1 (UCP-1) přímo v buňkách bílého viscerálního tuku (WAT), kde se za normálních okolností UCP-1 nevyskytuje. Tím mění vlastnosti bílého tuku na metabolicky aktivní tuk spalující kalorie na teplo. Klinické studie potvrdily významný úbytek viscerálního břišního tuku a zlepšení jaterních enzymů.",
      effects: [
        "upregulace termogeninu UCP-1 v bílé tukové tkáni (WAT)",
        "cílená redukce břišního viscerálního tuku",
        "potlačení diferenciace nových tukových buněk (antiadipogeneze)",
        "snížení hladiny glukózy a jaterních triglyceridů",
        "antioxidační a protizánětlivá ochrana cév"
      ],
      dosage: {
        "short": "2.4–5 mg čistého fucoxanthinu denně s jídlem",
        "long": "Dávkujte 2.4 mg až 5 mg čistého fucoxanthinu denně s jídlem bohatým na tuky (tuky jsou nezbytné pro absorpci karotenoidu). Vyžaduje kumulativní užívání po dobu minimálně 8–16 týdnů pro plné nasycení tukové tkáně."
      },
      warning: "Neúčinkuje okamžitě – vyžaduje dlouhodobé každodenní užívání. Pozor na levné extrakty z řas s vysokým obsahem jódu (nadbytek jódu může přetížit štítnou žlázu; hledejte purifikovaný fucoxanthin bez jódu).",
      mechanism: "Metabolit fucoxanthinol indukuje transkripci genu pro UCP-1 v abdominálním bílém tuku přes receptory PPAR-gama; downregulace lipogenních enzymů v játrech.",
      halfLife: "Dlouhá tkáňová akumulace v adipocytech (dny až týdny)",
      interactions: [
        "Omega-3 rybí olej (dramaticky zvyšuje střevní absorpci fucoxanthinu)",
        "Paradoxin (komplementární aktivace UCP-1)"
      ],
      naturalSources: ["hnědé mořské řasy Wakame (Undaria pinnatifida)", "Kombu"],
      bannedStatus: "legal"
    },
    {
      id: 419,
      name: "Dicaffeine Malate (Infinergy)",
      categoryKey: "fatloss",
      tags: ["kofein", "energie", "malat", "zadny-crash", "termogeneze", "fokus"],
      rating: 5,
      colorType: "green",
      shortDesc: "Iontová vazba kofeinu a kyseliny jablečné poskytující plynulou 6hodinovou energii bez pádu.",
      description: "Dicaffeine Malate (patentovaný jako Infinergy) je inovativní sloučenina složená ze 75 % bezvodého kofeinu a 25 % kyseliny jablečné vázaných iontovou vazbou. Kyselina jablečná pufruje žaludeční kyselost, čímž eliminuje žaludeční nevolnost a pálení žáhy běžné u vysokých dávek standardního kofeinu. Navíc zpomaluje disociaci a vstřebávání kofeinu, což vede k postupnému nástupu stimulace, dlouhotrvající termogenezi (5–6 hodin) a kompletní absenci náhlého kofeinového vyčerpání (tzv. crash efektu).",
      effects: [
        "dlouhotrvající stimulace a termogeneze po dobu 5–6 hodin",
        "kompletní eliminace náhlého propadu energie (post-caffeine crash)",
        "šetrný k žaludeční sliznici (pufruje překyselení)",
        "stabilní mentální fokus a oddálení vnímání únavy",
        "kyselina jablečná současně podporuje syntézu ATP v Krebsově cyklu"
      ],
      dosage: {
        "short": "100–300 mg (odpovídá 75–225 mg čistého kofeinu)",
        "long": "Dávkujte 100 až 300 mg ráno nebo 45 minut před tréninkem. Vynikající jako druhá fáze stimulace v kombinaci s klasickým rychlým kofeinem (dual-release energetický profil)."
      },
      warning: "Vzhledem k dlouhému poločasu působení neužívejte méně než 7 hodin před plánovaným spánkem.",
      mechanism: "Prodloužená kompetitivní blokáda adenosinových receptorů A1 a A2A v CNS; inhibice fosfodiesterázy; stimulace Krebsova cyklu kyselinou jablečnou.",
      halfLife: "Cca 5–7 hodin (pozvolnější eliminace)",
      interactions: [
        "L-Theanin (vytváří dokonalé klidné a laserové soustředění)",
        "Kofein Anhydrous (vytvoření dvou-fázového okamžitého i vytrvalého uvolňování)"
      ],
      naturalSources: ["syntetická iontová vazba kofeinu a kyseliny jablečné"],
      bannedStatus: "legal"
    },
    {
      id: 420,
      name: "Capsimax (Kapsaicinoidy s řízeným uvolňováním)",
      categoryKey: "fatloss",
      tags: ["kapsaicin", "TRPV1", "termogeneze", "paleni-tuku", "chilli"],
      rating: 4,
      colorType: "green",
      shortDesc: "Mikrozapouzdřený extrakt pálivých papriček stimulující termogenezi bez podráždění žaludku.",
      description: "Capsimax je patentovaná formulace kapsaicinoidů z pálivých papriček (Capsicum annuum) využívající technologii OmniBead – mikroskopické zapouzdření s enterosolventním pláštěm. Běžný kapsaicin způsobuje při účinných dávkách nesnesitelné pálení v ústech, jícnu a žaludku. Capsimax projde žaludkem neporušený a kapsaicinoidy uvolní až v zásaditém prostředí tenkého střeva. Zde aktivují receptory TRPV1, což spouští uvolnění katecholaminů, masivně zvyšuje oxidaci mastných kyselin a pálí kalorie bez jakéhokoliv pálení žáhy.",
      effects: [
        "zvýšení klidového energetického výdeje o dalších cca 100–150 kcal denně",
        "významná podpora oxidace mastných kyselin před a po tréninku",
        "potlačení chuti k jídlu a pocitu hladu",
        "nulové pálení v ústech, jícnu a žaludku díky technologii zapouzdření",
        "podpora oběhového systému a krevního toku"
      ],
      dosage: {
        "short": "100 mg denně ráno nebo před tréninkem s vodou",
        "long": "Užívejte 100 mg Capsimaxu (standardizováno na 2 % kapsaicinoidů) ráno se snídaní nebo 30–45 minut před cvičením. Polykat celé, nekousat!"
      },
      warning: "Kapsle se nesmí kousat ani otevírat (obsah by popálil sliznici úst).",
      mechanism: "Aktivace vaniloidních receptorů TRPV1 v senzorických neuronech střeva; reflexní stimulace sympatického nervového systému a uvolnění noradrenalinu aktivujícího beta-adrenergní termogenezi.",
      halfLife: "Cca 1–2 hodiny (termogenní stimulace trvá 3–4 hodiny)",
      interactions: [
        "Zelený čaj / EGCG (výrazná synergie v oxidaci tuků)",
        "Kofein (aditivní termogenní kaskáda)"
      ],
      naturalSources: ["paprička křovitá (Capsicum annuum / chilli)"],
      bannedStatus: "legal"
    }
  ],

  // === PCT & HORMONAL RECOVERY (6 compounds: 914-919) ===
  pct: [
    {
      id: 914,
      name: "hMG (Human Menopausal Gonadotropin)",
      categoryKey: "pct",
      tags: ["hMG", "FSH", "LH", "plodnost", "spermiogeneze", "PCT", "varlata"],
      rating: 5,
      colorType: "yellow",
      shortDesc: "Gonadotropin obsahující fyziologický poměr LH i FSH pro záchranu spermatogeneze a plodnosti.",
      description: "hMG (Human Menopausal Gonadotropin / Menotropin) je biologický gonadotropní přípravek purifikovaný z moči postmenopauzálních žen. Na rozdíl od hCG (který je pouze mimikem LH a stimuluje výhradně Leydigovy buňky k tvorbě testosteronu), obsahuje hMG jak luteinizační hormon (LH, cca 75 IU), tak klíčový folikuly stimulující hormon (FSH, cca 75 IU). Je nenahraditelným klinickým terapeutikem při hluboké atrofii varlat a neplodnosti po anabolických cyklech – stimuluje Sertoliho buňky, iniciuje zrání spermií a obnovuje plodnost tam, kde samotné hCG selhává.",
      effects: [
        "přímá stimulace Sertoliho buněk a obnovení spermatogeneze",
        "záchrana a obnova plodnosti (tvorba zralých funkčních spermií)",
        "obnova objemu a plnosti testikulární tkáně",
        "duální stimulace receptorů pro LH i FSH",
        "zlatý standard v andrologii při těžkém hypogonadismu"
      ],
      dosage: {
        "short": "75 IU subkutánně obden po dobu 4–8 týdnů (lékařský dohled)",
        "long": "V protokolul obnovy fertility a těžkého PCT: 75 IU subkutánně inzulínovou stříkačkou každý druhý den (často v kombinaci s 500–1 000 IU hCG). Ředění bakteriostatickou vodou, skladovat výhradně v chladničce při 2–8 °C."
      },
      warning: "Lék na lékařský předpis. Vyžaduje pravidelné andrologické vyšetření a spermiogram. Zbytečně vysoké dávky mohou vést k desenzitizaci receptorů.",
      mechanism: "Přímá vazba na receptory pro FSH v Sertoliho buňkách varlat (indukce syntézy androgen-vázajícího proteinu ABP a spermatogeneze) a receptory pro LH v Leydigových buňkách (tvorba testosteronu).",
      halfLife: "FSH frakce cca 30–40 hodin, LH frakce cca 20 hodin",
      interactions: [
        "hCG (klasický klinický fertilní protokol pro kompletní stimulaci Leydigových i Sertoliho buněk)",
        "Enclomifen (následný krok pro udržení endogenní produkce LH/FSH hypofýzou)"
      ],
      naturalSources: ["biologický extrakt z moči postmenopauzálních žen"],
      bannedStatus: "banned-sport (WADA S2.1), na lékařský předpis"
    },
    {
      id: 915,
      name: "Pramipexol (Mirapex)",
      categoryKey: "pct",
      tags: ["prolaktin", "dopamin", "D2", "D3", "trenbolon", "nandrolon"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Silný dopaminový agonista pro rychlé potlačení patologicky zvýšeného prolaktinu.",
      description: "Pramipexol je syntetický nesteroidní dopaminový agonista s vysokou selektivitou k D2 a D3 receptorům. V kulturistice a endokrinologii se používá jako alternativa kabergolinu pro řešení hyperprolaktinémie. Anabolické steroidy ze skupiny 19-nor (jako Trenbolon a Nandrolon) mají progestagenní aktivitu a mohou dramaticky zvyšovat hladinu hormonu prolaktinu, což vede k prolaktinové gynekomastii, ztrátě libida a erektilní dysfunkci ('deca-dick'). Pramipexol stimuluje dopaminové receptory v adenohypofýze a okamžitě sráží prolaktin na fyziologickou úroveň.",
      effects: [
        "okamžité a mohutné snížení sérového prolaktinu",
        "prevence a léčba prolaktinové gynekomastie (výtok z bradavek, citlivost)",
        "obnova libida a erektilní funkce utlumené 19-nor látkami",
        "zkrácení refrakterní fáze po ejakulaci (rychlejší schopnost další erekce)",
        "zvýšení noční sekrece růstového hormonu (HGH)"
      ],
      dosage: {
        "short": "0.125–0.25 mg večer před spaním (pomalá titrace)",
        "long": "Zahajujte na minimální dávce 0.125 mg (čtvrtina 0.5mg tablety) večer těsně před spaním s lehkým jídlem. Po týdnu lze zvýšit na 0.25 mg denně. Neužívat přes den."
      },
      warning: "Při náhlém nasazení vyšší dávky způsobuje silnou nauzeu a závratě. Způsobuje velmi živé sny. Může vyvolat poruchy kontroly impulzů (hazard, nutkavé chování).",
      mechanism: "Vysokoafinitní agonismus na dopaminových D2 a D3 receptorech v laktotropních buňkách předního laloku hypofýzy, což spouští tonickou inhibici sekrece prolaktinu.",
      halfLife: "Cca 8–12 hodin",
      interactions: [
        "Kabergolin (neužívat současně – jedná se o alternativní dopaminové agonisty)",
        "Alkohol (zvyšuje sedativní účinky a nevolnost)"
      ],
      naturalSources: ["syntetická chemická sloučenina"],
      bannedStatus: "prescription-only"
    },
    {
      id: 916,
      name: "Glutathion (S-Acetyl-L-Glutathion)",
      categoryKey: "pct",
      tags: ["antioxidant", "glutathion", "jatra", "detoxikace", "SAG", "orální"],
      rating: 5,
      colorType: "green",
      shortDesc: "Acetylovaná perorální forma glutathionu se schopností přímo pronikat do buněk.",
      description: "S-Acetyl-L-Glutathion (SAG) je průlomová forma glutathionu – hlavního intracelulárního antioxidantu v lidském těle. Zatímco běžný orální glutathion je v trávicím traktu téměř kompletně zničen enzymem gama-glutamyltransferázou (GGT), acetylovaná skupina chrání molekulu před degradací. Umožňuje jí neporušené vstřebání do krevního oběhu a přímý průchod lipidovou membránou do buněk a mitochondrií. Během PCT a po anabolických cyklech bleskově obnovuje enzymatickou antioxidační bariéru jater a čistí reaktivní metabolity.",
      effects: [
        "přímý transport intaktního glutathionu do jaterních buněk a mitochondrií",
        "hluboká detoxikace hepatotoxických reziduí po orálních anabolikách",
        "neutralizace lipidové peroxidace a oxidačního stresu",
        "podpora fázové II detoxikace jater (konjugace s glutathionem)",
        "posílení imunity a regenerace cévního endotelu"
      ],
      dosage: {
        "short": "100–300 mg denně nalačno",
        "long": "Dávkujte 100 mg až 300 mg S-Acetyl-L-Glutathionu ráno nalačno se sklenicí vody. Během intenzivní jaterní očisty v PCT užívejte 200 mg 2x denně po dobu 4 týdnů."
      },
      warning: "Velmi bezpečný profil bez toxicity. Má charakteristický mírně sirný zápach.",
      mechanism: "Přenáší se neporušený do cytosolu a mitochondrií, kde buněčné thioesterázy odštěpí acetylovou skupinu a uvolní redukovaný GSH přímo v místě potřeby.",
      halfLife: "Cca několik hodin v plazmě (intracelulární působení přetrvává)",
      interactions: [
        "TUDCA (společná ochrana jater: TUDCA na žlučovody a SAG na buněčný redoxní stav)",
        "Vitamín C a Selen (kofaktory recyklace glutathionu)"
      ],
      naturalSources: ["acetylovaná forma přirozeného tripeptidu GSH"],
      bannedStatus: "legal"
    },
    {
      id: 917,
      name: "DIM (Diindolylmethan)",
      categoryKey: "pct",
      tags: ["estrogen", "DIM", "prostata", "metabolismus-estrogenu", "prirodni"],
      rating: 4,
      colorType: "green",
      shortDesc: "Přírodní metabolit z brukvovité zeleniny optimalizující poměr prospěšných a rizikových estrogenů.",
      description: "Diindolylmethan (DIM) je přírodní bioaktivní sloučenina vznikající v žaludku trávením indol-3-karbinolu (I3C), obsaženého v brukvovité zelenině (brokolice, květák, růžičková kapusta). V endokrinologii a PCT je klíčovým regulátorem metabolismu estrogenů: posouvá metabolismus z problematické a mitogenní dráhy 16-alfa-hydroxyestronu a 4-hydroxyestronu směrem k bezpečnému a kardioprotektivnímu 2-hydroxyestronu. U mužů pomáhá udržet optimální hladinu volného testosteronu, chrání prostatu a tlumí estrogenní dominanci.",
      effects: [
        "posun metabolismu estrogenů k bezpečnému metabolitu 2-hydroxyestronu",
        "tlumení rizikového 16-alfa-hydroxyestronu (odpovědného za gynekomastii)",
        "podpora zdraví a prevence hypertrofie prostaty",
        "mírná kompetitivní inhibice aromatázy",
        "optimalizace poměru volného a vázaného testosteronu"
      ],
      dosage: {
        "short": "100–200 mg denně s jídlem",
        "long": "Užívejte 100 mg až 200 mg krystalického nebo biologicky vstřebatelného (BioResponse) DIM denně s jídlem. Vhodné užívat během PCT i v udržovacích fázích."
      },
      warning: "Může způsobit neškodné ztmavnutí moči (jantarová barva). Užívejte vždy s jídlem.",
      mechanism: "Upregulace enzymu cytochromu P450 CYP1A1 (indukce 2-hydroxylace estrogenů) a downregulace CYP1B1 a CYP3A4; mírná vazba na arylhydrokarbonový receptor (AhR).",
      halfLife: "Cca 4–7 hodin",
      interactions: [
        "Zinek a Bor (synergická hormonální optimalizace)",
        "Tamoxifen / SERMy (komplementární kontrola estrogenních projevů)"
      ],
      naturalSources: ["brokolice", "kapusta", "květák", "zelí"],
      bannedStatus: "legal"
    },
    {
      id: 918,
      name: "Spironolakton",
      categoryKey: "pct",
      tags: ["diuretikum", "aldosteron", "krevni-tlak", "voda", "androgeny"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Draslík šetřící antagonista aldosteronu pro eliminaci zadržené vody a snížení tlaku.",
      description: "Spironolakton je syntetický steroidní lék fungující jako kompetitivní antagonista mineralokortikoidních (aldosteronových) receptorů v ledvinách. V endokrinologii a medicíně se používá k léčbě hypertenze, městnavého srdečního selhání a hyperaldosteronismu. Po anabolických cyklech (zejména u látek silně zadržujících sodík a vodu) účinně vylučuje přebytečnou extracelulární tekutinu a sráží vysoký krevní tlak bez ztrát draslíku, který je kritický pro srdeční rytmus.",
      effects: [
        "eliminace nadměrné retence vody v podkoží a cévách",
        "rychlé snížení vysokého krevního tlaku vyvolaného zadržováním sodíku",
        "šetření draslíku v krevní plazmě (prevence arytmií z hypokalémie)",
        "blokáda androgenních receptorů v kůži (využíváno proti akné)",
        "ochrana myokardu před aldosteronovou fibrózou"
      ],
      dosage: {
        "short": "25–50 mg denně ráno s jídlem (lékařský dohled)",
        "long": "Běžná dávka je 25 mg až maximálně 50 mg jednou denně ráno po snídani. Neužívat dlouhodobě bez monitorování sérových elektrolytů (draslíku a sodíku)."
      },
      warning: "Lék na lékařský předpis! Riziko nebezpečné hyperkalémie (nadbytku draslíku) – NIKDY při užívání spironolaktonu neužívejte doplňky stravy s draslíkem. Má antiandrogenní účinek (neužívat dlouhodobě u mužů).",
      mechanism: "Kompetitivní blokáda aldosteronových receptorů v distálním tubulu a sběrném kanálku nefronu; zvýšené vylučování vody a sodíku (Na+) při současném zadržování draslíku (K+) a vodíkových iontů.",
      halfLife: "Cca 1.4 hodiny (aktivní metabolit kanrenon má poločas 16–18 hodin)",
      interactions: [
        "Draslík (striktně kontraindikován – riziko zástavy srdce z hyperkalémie!)",
        "ACE inhibitory a sartany (Telmisartan) – vyžaduje přísné sledování draslíku"
      ],
      naturalSources: ["syntetický steroidní lakton"],
      bannedStatus: "banned-sport (WADA S5 - diuretika), na lékařský předpis"
    },
    {
      id: 919,
      name: "TUDCA pro PCT (Jaterní regenerační protokol)",
      categoryKey: "pct",
      tags: ["jatra", "TUDCA", "cholestaza", "detoxikace", "enzymy", "ALT", "AST"],
      rating: 5,
      colorType: "green",
      shortDesc: "Cílený post-cyklový protokol hydrofilní žlučové kyseliny pro okamžitou léčbu cholestázy.",
      description: "Speciální terapeutický protokol TUDCA zaměřený na fázi post-cycle therapy (PCT). Užívání perorálních anabolických androgenních steroidů (17-alfa-alkylovaných, jako Dianabol, Anavar, Winstrol, Superdrol) způsobuje intrahepatální cholestázu – zástavu odtoku žluči a hromadění toxických hydrofobních žlučových kyselin, které rozleptávají buněčné membrány hepatocytů a vedou k masivnímu nárůstu ALT, AST a bilirubinu. TUDCA nahrazuje toxické žlučové kyseliny, ředí žluč, čistí jaterní enzymy a chrání buňky před nekrózou.",
      effects: [
        "okamžité zředění žluči a obnovení fyziologického toku žlučovými cestami",
        "radikální pokles patologicky zvýšených jaterních enzymů (ALT, AST, GGT)",
        "vytesnění toxických hydrofobních žlučových solí z jaterní tkáně",
        "stabilizace mitochondriálních membrán hepatocytů",
        "zlepšení trávení tuků a vylučování metabolitů steroidů"
      ],
      dosage: {
        "short": "500–1 000 mg denně rozděleně s jídly po dobu 4–6 týdnů",
        "long": "V intenzivním PCT protokolu: 500 mg 2x denně (ráno a večer) vždy společně s plnohodnotným jídlem po dobu 30 dnů. Následně pokračovat dávkou 250 mg denně do normalizace krevních testů."
      },
      warning: "Neužívejte společně s alkoholem. Užívejte výhradně s jídlem.",
      mechanism: "Kompetitivní nahrazení toxických žlučových kyselin (kyseliny deoxycholové a litocholové) netoxickým hydrofilním konjugátem; stimulace exocytózy a exprese transportéru BSEP.",
      halfLife: "Cca 2–3 hodiny (opakovaná enterohepatální cirkulace)",
      interactions: [
        "NAC a S-Acetyl-L-Glutathion (dokonalý trojitý zlatý standard jaterní regenerace)",
        "Silymarin (komplementární stabilizace jaterních buněk)"
      ],
      naturalSources: ["endogenní metabolit žluči"],
      bannedStatus: "legal"
    }
  ],

  // === SLEEP & NOCTURNAL RECOVERY (5 compounds: 311-315) ===
  sleep: [
    {
      id: 311,
      name: "Fosfatidylserin (Noční protokol)",
      categoryKey: "sleep",
      tags: ["kortizol", "spanek", "fosfolipid", "stres", "regenerace", "HPA"],
      rating: 5,
      colorType: "green",
      shortDesc: "Buněčný fosfolipid s klinicky ověřenou schopností srazit noční kortizol a zklidnit osu HPA.",
      description: "Fosfatidylserin (Phosphatidylserine / PS) je klíčový fosfolipid tvořící vnitřní vrstvu buněčných membrán, vysoce koncentrovaný v mozkové tkáni. Mnoho sportovců a přepracovaných lidí trpí večer stavem 'tired but wired' (tělo je unavené, ale mozek běží na plné obrátky kvůli vysokému kortizolu po těžkém tréninku). Klinické studie prokázaly, že večerní dávka 400–600 mg fosfatidylserinu prokazatelně tlumí nadměrnou aktivitu osy hypotalamus-hypofýza-nadledviny (HPA) a sráží noční sekreci kortizolu, což umožňuje okamžitý nástup hlubokého spánku.",
      effects: [
        "významné snížení večerního a nočního stresového hormonu kortizolu",
        "odstranění pocitu vnitřního neklidu před spaním (tired but wired)",
        "urychlení usnutí a prohloubení regeneračního non-REM spánku",
        "ochrana svalové hmoty před nočním katabolismem vyvolaným kortizolem",
        "zlepšení integrity a fluidity neuronálních membrán"
      ],
      dosage: {
        "short": "400–600 mg 30–60 minut před spaním",
        "long": "Užívejte 400 až 600 mg čistého fosfatidylserinu (nejčastěji ze slunečnicového lecitinu) přibližně 45 minut před ulehnutím ke spánku, ideálně s malým množstvím tuku."
      },
      warning: "Neužívejte ráno, pokud chcete udržet přirozený ranní kortizolový vrchol (CAR), který je nezbytný pro probuzení a energii.",
      mechanism: "Tlumivý vliv na sekreci adrenokortikotropního hormonu (ACTH) z hypofýzy po stresu; modulace fluidity membrán a funkce acetylcholinových a dopaminových receptorů.",
      halfLife: "Cca několik hodin (membránová inkorporace)",
      interactions: [
        "Magnesium Bisglycinát (synergické vypnutí stresové osy)",
        "Apigenin (dokonalý večerní stack pro sražení kortizolu a aktivaci GABA)"
      ],
      naturalSources: ["slunečnicový lecitin", "sója", "hovězí mozek (historicky)"],
      bannedStatus: "legal"
    },
    {
      id: 312,
      name: "Meduňka lékařská (Kyselina rozmarýnová)",
      categoryKey: "sleep",
      tags: ["bylina", "GABA-T", "klid", "spanek", "melissa", "relaxace"],
      rating: 4,
      colorType: "green",
      shortDesc: "Standardizovaný bylinný extrakt inhibující enzym GABA-transaminázu pro udržení GABA.",
      description: "Meduňka lékařská (Melissa officinalis) je tradiční evropská léčivá bylina z čeledi hluchavkovitých. Její vědecky zdokumentovaný anxiolytický a sedativní účinek je způsoben vysokým obsahem kyseliny rozmarýnové. Kyselina rozmarýnová působí jako specifický inhibitor enzymu GABA-transaminázy (GABA-T) – enzymu, který přirozeně rozkládá kyselinu gama-aminomáselnou v synapsích. Zpomalením rozkladu udržuje meduňka vysokou hladinu přirozené endogenní GABA v mozku, zklidňuje těkavé myšlenky a usnadňuje přechod do hlubokého spánku.",
      effects: [
        "inhibice odbourávání GABA enzymem GABA-transaminázou",
        "zklidnění nervozity, úzkosti a emočního napětí",
        "zkrácení doby potřebné k usnutí a zlepšení kontinuity spánku",
        "spazmolytický účinek na trávicí trakt (uvolnění žaludeční křeče ze stresu)",
        "mírné zlepšení paměti přes stimulaci acetylcholinových receptorů"
      ],
      dosage: {
        "short": "300–600 mg standardizovaného extraktu před spaním",
        "long": "Užívejte 300 až 600 mg extraktu standardizovaného na min. 5–7 % kyseliny rozmarýnové (např. Cyracos) 30–60 minut před spaním. Lze připravit i jako silný nálev z kvalitních listů."
      },
      warning: "Při velmi vysokých dávkách může mírně tlumit funkci štítné žlázy (inhibice TSH). Nekombinovat s farmaceutickými sedativy bez porady s lékařem.",
      mechanism: "Inhibice enzymu 4-aminobutyrát aminotransferázy (GABA-T), což zvyšuje synaptickou koncentraci GABA; vazba na nikotinové a muskarinové cholinergní receptory.",
      halfLife: "Cca 2–3 hodiny",
      interactions: [
        "L-Theanin (synergické navození alfa mozkových vln)",
        "Kozlík lékařský (klasická klinicky ověřená bylinná spánková kombinace)"
      ],
      naturalSources: ["meduňka lékařská (Melissa officinalis)"],
      bannedStatus: "legal"
    },
    {
      id: 313,
      name: "Kozlík lékařský (Kyselina valerová)",
      categoryKey: "sleep",
      tags: ["bylina", "spanek", "GABA-A", "latence-usnuti", "sedativum"],
      rating: 4,
      colorType: "green",
      shortDesc: "Klinicky ověřené bylinné sedativum interagující s GABA-A receptory pro rychlé usnutí.",
      description: "Kozlík lékařský (Valeriana officinalis) je historicky nejznámější a nejvíce studovaná bylinná sedativní substance v evropském lékopise. Účinnými látkami jsou seskviterpeny (kyselina valerenová a valerenal) obsažené v kořeni. Kyselina valerenová působí jako allosterický modulátor receptorů GABA-A na specifických podjednotkách (beta-3), stimuluje uvolňování GABA a inhibuje její zpětné vychytávání. Četné klinické studie potvrdily schopnost kozlíku významně zkrátit dobu latence usnutí a zlepšit subjektivní vnímání kvality spánku.",
      effects: [
        "výrazné zkrácení doby potřebné k usnutí (sleep onset latency)",
        "allosterická modulace GABA-A receptorů a snížení excitability mozku",
        "zmírnění somatických projevů úzkosti (bušení srdce, svalový třes)",
        "zlepšení architektury a hloubky spánku bez rizika závislosti",
        "antispasmodický účinek na hladké svalstvo"
      ],
      dosage: {
        "short": "300–600 mg extraktu z kořene 30–60 minut před spaním",
        "long": "Užívejte 300 až 600 mg standardizovaného extraktu z kořene (min. 0.8 % kyseliny valerenové) 45 minut před ulehnutím. Pro plný rozvoj účinku je vhodné užívat souvisle 2–4 týdny."
      },
      warning: "Má velmi silný a zemitý specifický zápach. U cca 5 % populace může paradoxně vyvolat lehkou stimulaci (tzv. paradoxní excitaci – v takovém případě vysadit).",
      mechanism: "Pozitivní allosterická modulace GABA-A receptorů na beta-2 a beta-3 podjednotkách; inhibice transportéru GAT-1 zodpovědného za re-uptake GABA ze synaptické štěrbiny.",
      halfLife: "Cca 1–2 hodiny",
      interactions: [
        "Meduňka a Chmel (synergický trojitý fytoterapeutický spánkový komplex)",
        "Magnesium Glycinate (aditivní svalová a nervová relaxace)"
      ],
      naturalSources: ["kořen kozlíku lékařského (Valeriana officinalis)"],
      bannedStatus: "legal"
    },
    {
      id: 314,
      name: "Honokiol & Magnolol (Magnolia)",
      categoryKey: "sleep",
      tags: ["magnolie", "GABA-A", "kanabinoidy", "CB1", "spanek", "anxiolytikum"],
      rating: 5,
      colorType: "green",
      shortDesc: "Lipofilní polyfenoly z kůry šácholanu pro hluboké uklidnění a REM spánek bez kocoviny.",
      description: "Honokiol a Magnolol jsou bioaktivní neolignany extrahované z kůry šácholanu (Magnolia officinalis). Patří k nejzajímavějším přírodním anxiolytikům v neurovědě. Působí jako pozitivní allosterické modulátory GABA-A receptorů (na jiném vazebném místě než benzodiazepiny, takže nezpůsobují závislost ani toleranci) a současně interagují s kanabinoidními receptory CB1 a CB2. Dokáží efektivně vypnout mentální přetížení, potlačit strach, prodloužit non-REM i REM fáze spánku a ráno zanechávají pocit čisté hlavy bez sedativní kocoviny.",
      effects: [
        "silný anxiolytický účinek srovnatelný s farmaky, ale bez závislosti",
        "alosterická aktivace GABA-A receptorů a zklidnění amygdaly",
        "prodloužení hlubokých fází non-REM spánku i snové fáze REM",
        "antioxidační a neuroprotektivní účinek (1000x silnější antioxidant než vitamín E)",
        "protizánětlivý vliv potlačením NF-kB a mikrogliálního zánětu"
      ],
      dosage: {
        "short": "100–300 mg standardizovaného extraktu před spaním",
        "long": "Dávkujte 100 až 300 mg extraktu z kůry magnólie (standardizovaného na 90–95 % honokiolu a magnololu) přibližně 30–45 minut před spaním s malým množstvím tuku pro optimální vstřebání."
      },
      warning: "Může mírně zvyšovat účinek léků na spaní a alkoholu (nekombinovat). Při dodržení dávkování je výborně snášen.",
      mechanism: "Allosterická modulace podjednotek alfa-1, beta-2 a gamma-2 GABA-A receptoru; částečný agonismus na kanabinoidních CB1 a CB2 receptorech; inhibice glutamátem indukovaného vstupu vápníku.",
      halfLife: "Cca 4–6 hodin",
      interactions: [
        "Apigenin a L-Theanin (ultimátní přírodní noční stack pro ztišení mozku)",
        "CBD (synergie na endokanabinoidním a GABA systému)"
      ],
      naturalSources: ["kůra šácholanu lékařského (Magnolia officinalis)"],
      bannedStatus: "legal"
    },
    {
      id: 315,
      name: "Inositol (Večerní nootropní protokol)",
      categoryKey: "sleep",
      tags: ["inositol", "spanek", "serotonin", "GABA", "racing-thoughts", "OCD"],
      rating: 4,
      colorType: "green",
      shortDesc: "Vysokodávkový myo-inositol pro zklidnění nočního přemýšlení a stabilitu serotoninu.",
      description: "Zatímco nízké dávky inositolu (do 2 g) slouží přes den pro metabolismus inzulínu, vysokodávkový večerní protokol (3 až 6 gramů) je prověřenou intervencí pro jedince trpící syndromem neustálého toku myšlenek (racing thoughts), obsedantním přemítáním v posteli a nočním buzením s úzkostí. Myo-inositol slouží jako klíčová součást druhého posla v membránách neuronů, senzibilizuje receptory 5-HT2A pro serotonin a stimuluje GABAergní inhibici v mozkové kůře, což přináší pocit uvolnění a klidné usnutí.",
      effects: [
        "zastavení nočního toku neodbytných myšlenek (racing thoughts)",
        "stabilizace a resenzibilizace serotoninových 5-HT receptorů v mozku",
        "zkrácení nočních probuzení a snížení ranní úzkosti",
        "hluboké mentální zklidnění bez chemického otupení",
        "vhodné i při syndromu neklidných nohou"
      ],
      dosage: {
        "short": "3 000–6 000 mg (3–6 g) prášku rozpuštěného ve vodě 30 min před spaním",
        "long": "Rozpusťte 1 odměrku (3 až 6 gramů) čistého prášku myo-inositolu ve sklenici vlažné vody a vypijte 30 minut před ulehnutím. Má příjemnou, lehce nasládlou chuť."
      },
      warning: "Při překročení 10 g může u citlivých osob způsobit řídkou stolici. Dávku 3–6 g snáší většina populace bez potíží.",
      mechanism: "Prekurzor fosfatidylinositolového cyklu (PI turnover) v postsynaptických neuronech; resenzibilizace desenzitizovaných serotoninových receptorů 5-HT2A a 5-HT2C.",
      halfLife: "Cca několik hodin",
      interactions: [
        "Magnesium Bisglycinát (synergický relaxační večerní nápoj)",
        "Glycin (dokonalá kombinace pro snížení tělesné teploty a zklidnění mysli)"
      ],
      naturalSources: ["citrusy", "luštěniny", "přirozená syntéza v lidských ledvinách"],
      bannedStatus: "legal"
    }
  ],

  // === STEROIDS & ANDROGENS (5 compounds: 815-819) ===
  steroids: [
    {
      id: 815,
      name: "Mesterolon (Proviron)",
      categoryKey: "steroids",
      tags: ["steroid", "DHT", "SHBG", "libido", "tvrdost", "oralni"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Orální 1-methylovaný DHT derivát s extrémní afinitou k SHBG pro uvolnění volného testosteronu.",
      description: "Mesterolon (obchodní název Proviron) je perorální androgenní steroid odvozený od dihydrotestosteronu (1-methyl-5alfa-androstan-17beta-ol-3-on). Na rozdíl od většiny orálních steroidů není 17-alfa-alkylovaný (jeho biologická dostupnost je zajištěna 1-methylovou skupinou), a proto nezatěžuje játra. Nemá prakticky žádnou anabolickou aktivitu na svalový růst (je ve svalech rychle inaktivován enzymem 3alfa-HSD), avšak má mimořádně silnou afinitu k SHBG (Sex Hormone-Binding Globulin). Tím, že vytěsňuje testosteron z vazby na SHBG, radikálně zvyšuje hladinu biologicky aktivního volného testosteronu, zvyšuje tvrdost svalů a působí jako silný stimulátor libida.",
      effects: [
        "extrémní afinita k SHBG a vytěsnění volného testosteronu do oběhu",
        "výrazné zvýšení tvrdosti a hustoty svalů (antagonistický vliv na estrogeny)",
        "silná stimulace libida, potence a mentální sebedůvěry",
        "minimální jaterní toxicita (není 17-alfa-alkylovaný)",
        "působí jako slabý inhibitor aromatázy (brání přeměně na estrogen)"
      ],
      dosage: {
        "short": "25–50 mg denně perorálně (lékařský dohled)",
        "long": "Standardní dávkování v andrologii a sportu: 25 mg ráno a 25 mg večer s jídlem. Užívá se po dobu 4–8 týdnů během cyklu nebo v závěru přípravy."
      },
      warning: "Anabolický androgenní steroid na lékařský předpis. Je zakázán WADA ve sportu. Může urychlit androgenní alopecii (vypadávání vlasů) u geneticky disponovaných jedinců a mírně zvětšovat prostatu.",
      mechanism: "Vysokoafinitní kompetitivní vazba na SHBG; vazba na androgenní receptory bez možnosti konverze na estrogeny přes aromatázu; inhibice aromatázy kompetitivní vazbou.",
      halfLife: "Cca 12–13 hodin",
      interactions: [
        "Testosteron (masivní uvolnění volné frakce testosteronu)",
        "Nandrolon (pomáhá udržet libido a erektilní funkci bez konverze na estrogeny)"
      ],
      naturalSources: ["syntetický derivát dihydrotestosteronu (DHT)"],
      bannedStatus: "banned-sport (WADA S1), na lékařský předpis"
    },
    {
      id: 816,
      name: "Oxymetholon (Anadrol / Anapolon)",
      categoryKey: "steroids",
      tags: ["steroid", "anadrol", "sila", "objem", "erytropoeza", "17aa"],
      rating: 4,
      colorType: "red",
      shortDesc: "Jeden z nejmocnějších orálních anabolických steroidů pro brutální sílu, objem a erytropoézu.",
      description: "Oxymetholon (Anadrol 50 / Anapolon) je 17-alfa-alkylovaný perorální steroid syntetizovaný v roce 1960 společností Syntex pro léčbu těžké anémie a svalové atrofie. Jedná se o modifikovaný derivát DHT s 2-hydroxymethylenovou skupinou. Je považován za jeden z vůbec nejsilnějších svalových a silových budovačů: stimuluje syntézu erytropoetinu (EPO) v ledvinách, čímž enormně zvyšuje počet červených krvinek a krevní objem. Vyvolává masivní retenci vody a glykogenu ve svalech, poskytuje obrovskou sílu a ochranu kloubů při extrémních vahách.",
      effects: [
        "extrémní nárůst tělesné hmotnosti a brutální svalové síly během několika dnů",
        "masivní stimulace syntézy červených krvinek (erytropoézy)",
        "obrovská svalová pumpa a plnost v důsledku retence glykogenu",
        "ochrana kloubních pouzder při těžkém silovém tréninku",
        "silná podpora retence dusíku a proteosyntézy"
      ],
      dosage: {
        "short": "25–50 mg denně perorálně (maximálně 4–6 týdnů)",
        "long": "Vzhledem k vysoké síle a zátěži jater se užívá 25 až 50 mg denně s jídlem po dobu maximálně 4 až 6 týdnů. Vyžaduje přísnou jaterní ochranu (TUDCA + NAC) a kontrolu krevního tlaku."
      },
      warning: "Vysoká jaterní zátěž (17-alfa-alkylovaný)! Způsobuje zadržování vody a výrazný vzestup krevního tlaku. Ačkoliv nearomatizuje, může stimulovat estrogenní receptory sám o sobě (riziko gynekomastie). Vyžaduje lékařský dohled.",
      mechanism: "Plná aktivace androgenního receptoru v kosterním svalu; stimulace renální syntézy EPO a hematokritu; přímá interakce s estrogenními receptory bez účasti aromatázy.",
      halfLife: "Cca 8–9 hodin",
      interactions: [
        "TUDCA a NAC (absolutní nutnost pro ochranu jaterních hepatocytů)",
        "Telmisartan (ochrana kardiovaskulárního systému před vysokým tlakem)"
      ],
      naturalSources: ["syntetický anabolický steroid"],
      bannedStatus: "banned-sport (WADA S1), na lékařský předpis"
    },
    {
      id: 817,
      name: "Fluoxymesteron (Halotestin)",
      categoryKey: "steroids",
      tags: ["steroid", "halotestin", "sila", "agrese", "vaha", "silovy-trojboj"],
      rating: 3,
      colorType: "red",
      shortDesc: "Extrémně silný orální androgen maximalizující nervosvalovou sílu a agresi bez nárůstu hmotnosti.",
      description: "Fluoxymesteron (obchodní název Halotestin) je perorální derivát testosteronu s 9-alfa-fluoro, 11-beta-hydroxy a 17-alfa-methylovou substitucí. Vyznačuje se gigantickým androgenním indexem (až 850) a minimální anabolickou aktivitou. Nearomatizuje na estrogeny a nezadržuje ani kapku vody. Používá se silovými trojbojaři, vzpěrači a bojovníky v závěrečných týdnech před vážením a soutěží pro maximalizaci centrální nervové aktivace, explozivní síly, tvrdosti svalů a psychické tréninkové agresivity bez přibrání jediného gramu tělesné hmotnosti.",
      effects: [
        "dramatický nárůst absolutní a explozivní síly bez nárůstu tělesné hmotnosti",
        "extrémní tvrdost, hustota a vaskularita svalů (nulová retence vody)",
        "masivní stimulace centrální nervové soustavy a bojové agresivity",
        "nulová konverze na estrogeny a nulová gynekomastie",
        "stimulace syntézy hemoglobinu"
      ],
      dosage: {
        "short": "10–20 mg denně perorálně (maximálně 2–4 týdny)",
        "long": "Užívá se 10 až 20 mg denně rozděleně do dvou dávek (ráno a před tréninkem) po dobu maximálně 2 až 4 týdnů těsně před soutěží. Nikdy neužívat dlouhodobě."
      },
      warning: "Jeden z nejvíce hepatotoxických orálních steroidů vůbec! Extrémní zátěž na játra, krevní lipidy (sráží HDL na minimum) a krevní tlak. Může vyvolat psychickou agresivitu a podrážděnost. Striktně zakázaná dopingová látka.",
      mechanism: "Vysokoafinitní vazba na androgenní receptory v CNS a kosterním svalu; stimulace nervosvalového přenosu motorických jednotek bez intracelulární retence vody.",
      halfLife: "Cca 9 hodin",
      interactions: [
        "TUDCA (kritická jaterní ochrana)",
        "Rybí olej / Omega-3 ve vysokých dávkách (ochrana cév a lipidového profilu)"
      ],
      naturalSources: ["syntetický halogenovaný steroid"],
      bannedStatus: "banned-sport (WADA S1), na lékařský předpis"
    },
    {
      id: 818,
      name: "Nandrolon Fenylpropionát (NPP)",
      categoryKey: "steroids",
      tags: ["steroid", "NPP", "nandrolon", "klouby", "anabolikum", "19-nor"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Rychle působící ester nandrolonu pro svalovou hypertrofii a ochranu kloubů s nízkou retencí vody.",
      description: "Nandrolon Fenylpropionát (NPP / Durabolin) je injekční anabolický steroid ze skupiny 19-nortestosteronu (19-nor). Oproti klasickému dlouhému esteru Deca-Durabolin (nandrolon dekanoát) má NPP podstatně kratší poločas eliminace (cca 2.5–3 dny). To umožňuje bleskovou titraci hladin v krvi, rychlejší odeznění nežádoucích účinků a podstatně menší zadržování vody a nadýmání. Je proslulý svou schopností stimulovat syntézu kolagenu typu III a synoviální tekutiny v kloubních pouzdrech, čímž eliminuje chronickou bolest kloubů u těžce trénujících sportovců.",
      effects: [
        "vynikající svalová anabolická hypertrofie s nízkým androgenním zatížením",
        "hluboká regenerace a lubrikace kloubních pouzder a šlach",
        "stimulace syntézy kolagenu a kostního minerálního obsahu",
        "nižší retence vody a rychlejší vyloučení z těla oproti Deca-Durabolinu",
        "podpora dusíkové bilance a syntézy glykogenu"
      ],
      dosage: {
        "short": "100–150 mg intramuskulárně každý druhý den (lékařský dohled)",
        "long": "Aplikuje se intramuskulárně v dávce 100 mg obden (případně 300–400 mg týdně rozděleno do 3 aplikací). Vždy kombinovat se základní dávkou testosteronu (pro udržení fyziologické hladiny DHT a libida)."
      },
      warning: "19-nor steroid s progestagenní aktivitou – může zvyšovat prolaktin (nutno mít po ruce kabergolin nebo pramipexol). Způsobuje silnou a dlouhodobou supresi přirozené osy HPTA.",
      mechanism: "Silná vazba na androgenní receptor; redukce enzymem 5alfa-reduktázou na slabší metabolit DHN (dihydronandrolon); agonismus na progesteronových receptorech (PR).",
      halfLife: "Cca 2.5–3 dny (vyžaduje aplikaci obden)",
      interactions: [
        "Testosteron (povinný základ cyklu k prevenci ztráty libida a erekce)",
        "Kabergolin (ochrana před prolaktinovou gynekomastií)"
      ],
      naturalSources: ["syntetický 19-nortestosteron ester"],
      bannedStatus: "banned-sport (WADA S1), na lékařský předpis"
    },
    {
      id: 819,
      name: "Drostanolon Enanthát (Masteron Enanthate)",
      categoryKey: "steroids",
      tags: ["steroid", "masteron", "enanthate", "tvrdost", "anti-estrogen", "DHT"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Dlouhý ester Masteronu pro maximální hustotu a tvrdost svalů s anti-estrogenním profilem.",
      description: "Drostanolon Enanthát (Masteron Enanthate) je dlouhodobě působící injekční ester 2-alfa-methyldihydrotestosteronu. Na rozdíl od krátkého propionátu (který vyžaduje injekce obden) umožňuje enanthátový ester stabilní hladiny při aplikaci 1–2x týdně. Drostanolon je čistý DHT derivát: nemůže být enzymem aromatáza přeměněn na estrogen a naopak sám působí jako mírný antagonista estrogenních receptorů a blokátor aromatázy. Dodává svalům granitovou tvrdost, ostrost, žilnatost a eliminuje podkožní vodu u jedinců s nízkým procentem tělesného tuku.",
      effects: [
        "extrémní vaskularita, tvrdost a separace svalových partií",
        "přirozený anti-estrogenní efekt (potlačuje zadržování vody)",
        "zvýšení hustoty svalů bez nárůstu zbytečné tělesné hmotnosti",
        "podpora síly a centrální motivace přes androgenní receptory",
        "pohodlné dávkování 1–2x týdně"
      ],
      dosage: {
        "short": "200–400 mg týdně intramuskulárně rozděleno do 2 dávek",
        "long": "Aplikuje se hluboko intramuskulárně v dávce 200 až 400 mg týdně (např. 150–200 mg v pondělí a ve čtvrtek) po dobu 8–12 týdnů. Plný estetický efekt se projeví při tělesném tuku pod 10–12 %."
      },
      warning: "Silný androgenní derivát DHT – u disponovaných jedinců způsobuje padání vlasů a akné. Zhoršuje lipidový profil (pokles HDL). Zakázaná dopingová substance pod WADA.",
      mechanism: "Přímá vazba na androgenní receptory; allosterická inhibice komplexu aromatázy a kompetitivní antagonismus na estrogenním receptoru alfa ve svalové a prsní tkáni.",
      halfLife: "Cca 7–8 dní",
      interactions: [
        "Testosteron Enanthate (vytváří klasický synergický objemový i rýsovací stack)",
        "TUDCA a Rybí olej (ochrana kardiovaskulárního systému a jater)"
      ],
      naturalSources: ["syntetický derivát dihydrotestosteronu"],
      bannedStatus: "banned-sport (WADA S1), na lékařský předpis"
    }
  ],

  // === HORMONES & ENDOCRINE REGULATORS (6 compounds: 562-567) ===
  hormones: [
    {
      id: 562,
      name: "GLP-2 (Glucagon-Like Peptide-2 / Teduglutid)",
      categoryKey: "hormones",
      tags: ["hormon", "peptid", "GLP-2", "streva", "sliznice", "regenerace"],
      rating: 5,
      colorType: "green",
      shortDesc: "Endogenní střevní hormon stimulující epitelizaci sliznice a proliferaci střevních klků.",
      description: "GLP-2 (Glucagon-Like Peptide-2) je 33-aminokyselinový peptidový hormon tvořený posttranslačním štěpením proglukagonu v enteroendokrinních L-buňkách tenkého a tlustého střeva. Zatímco příbuzný GLP-1 řídí inzulín a chuť k jídlu, GLP-2 je specifickým růstovým a regeneračním hormonem střevního traktu. Způsobuje mohutnou proliferaci a hypertrofii střevních klků (villi), zvyšuje plochu pro absorpci živin, stimuluje průtok krve mezenteriálními cévami a hojí těžká poškození střevní sliznice (schválený lék Teduglutid pro syndrom krátkého střeva).",
      effects: [
        "masivní stimulace proliferace a regenerace střevních klků (villi)",
        "zvýšení absorpční plochy a vstřebávání živin v tenkém střevě",
        "obnova epiteliální bariéry u těžkých forem střevního zánětu",
        "zvýšení mezenteriálního prokrvení a hojení sliznice",
        "inhibice apoptózy enterocytů a redukce střevní permeability"
      ],
      dosage: {
        "short": "0.05 mg/kg subkutánně jednou denně (lékařský dohled)",
        "long": "V klinické praxi (Teduglutid): 0.05 mg na kg tělesné hmotnosti subkutánně 1x denně inzulínovou stříkačkou do břišní stěny. V experimentálních biohackingových protokolech 1–2 mg denně po dobu 3–6 týdnů."
      },
      warning: "Léčivý přípravek. Vzhledem k silné stimulaci růstu střevního epitelu je přísně kontraindikován při anamnéze kolorektálního karcinomu nebo polypů tlustého střeva (před zahájením nutná kolonoskopie).",
      mechanism: "Vazba na G-protein spřažený receptor pro GLP-2 (GLP2R) v subepiteliálních myofibroblastech a enterických neuronech; uvolnění růstových faktorů IGF-1, KGF a VEGF stimulujících kryptální kmenové buňky.",
      halfLife: "Nativní GLP-2 cca 7 minut (degradován DPP-4), stabilní analog Teduglutid cca 2–3 hodiny",
      interactions: [
        "BPC-157 (extrémní synergie v hojení gastrointestinálního traktu)",
        "Glutamin (stavební substrát pro nově tvořené enterocyty)"
      ],
      naturalSources: ["přirozený lidský hormon L-buněk střeva"],
      bannedStatus: "banned-sport (WADA S2), na lékařský předpis"
    },
    {
      id: 563,
      name: "Amylin (Islet Amyloid Polypeptide / IAPP)",
      categoryKey: "hormones",
      tags: ["hormon", "peptid", "amylin", "glykemie", "sytost", "pankreas"],
      rating: 4,
      colorType: "green",
      shortDesc: "Pankreatický hormon ko-sekretovaný s inzulínem řídící pocit sytosti a postprandiální glukagon.",
      description: "Amylin (Islet Amyloid Polypeptide / IAPP) je 37-aminokyselinový peptidový hormon tvořený a vylučovaný beta-buňkami pankreatu společně s inzulínem v poměru přibližně 1:100. Působí jako klíčový komplementární partner inzulínu při zpracování potravy. Zatímco inzulín zajišťuje ukládání glukózy do buněk, amylin zpomaluje vyprazdňování žaludku, potlačuje nevhodnou sekreci glukagonu po jídle a přes specifické receptory v mozkovém kmeni vyvolává fyziologický pocit nasycení.",
      effects: [
        "fyziologická regulace a navození pocitu sytosti po jídle",
        "potlačení postprandiální sekrece glukagonu z alfa-buněk",
        "zpomalení žaludeční evakuace pro plynulý nástup živin do krve",
        "prevence prudkých glykemických výkyvů po sacharidovém jídle",
        "centrální kontrola energetické rovnováhy v mozku"
      ],
      dosage: {
        "short": "Farmaceutický analog Pramlintid: 15–120 mcg SubQ před jídlem",
        "long": "Přírodní amylin se pro svou tendenci tvořit amyloidní fibrily nepoužívá, aplikuje se stabilní syntetický analog Pramlintid (Symlin) v dávce 15 až 60 mcg subkutánně bezprostředně před hlavními jídly."
      },
      warning: "Při aplikaci s inzulínem je nutné snížit dávku prandiálního inzulínu až o 50 %, jinak hrozí těžká hypoglykémie. Může vyvolat přechodnou nauzeu.",
      mechanism: "Vazba na kalcitoninové receptory spřažené s RAMP proteiny (AMY1, AMY2, AMY3) v area postrema centrálního nervového systému; tonická inhibice žaludečního větvení bloudivého nervu (n. vagus).",
      halfLife: "Nativní amylin cca 15 minut",
      interactions: [
        "Inzulín (fyziologický partner – nutno upravit poměr kvůli hypoglykémii)",
        "GLP-1 agonisté (aditivní potlačení chuti k jídlu)"
      ],
      naturalSources: ["endogenní hormon beta-buněk Langerhansových ostrůvků pankreatu"],
      bannedStatus: "banned-sport (WADA S2), na lékařský předpis"
    },
    {
      id: 564,
      name: "Adiponektin",
      categoryKey: "hormones",
      tags: ["hormon", "adipokin", "AMPK", "tuk", "inzulin", "srdce"],
      rating: 5,
      colorType: "green",
      shortDesc: "Ochranný adipokin tukové tkáně aktivující AMPK a chránící před inzulínovou rezistencí.",
      description: "Adiponektin je nejhojnější proteinový hormon vylučovaný zralými tukovými buňkami (adipocyty). Na rozdíl od většiny ostatních adipokinů (jako leptin či TNF-alfa), jejichž hladina při obezitě roste a působí zánětlivě, hladina adiponektinu při nárůstu viscerálního tuku paradoxně klesá. Vysoké hladiny adiponektinu jsou celosvětově spojovány s dlouhověkostí, vynikající inzulínovou senzitivitou, čistými cévami bez aterosklerotických plátů a ochranou myokardu před ischemií.",
      effects: [
        "mohutná stimulace oxidace mastných kyselin ve svalech a játrech",
        "přímá aktivace AMPK a inzulínové senzitivity",
        "silná protizánětlivá ochrana cévního endotelu před aterosklerózou",
        "potlačení jaterní glukoneogeneze a akumulace triglyceridů",
        "kardioprotektivní účinek a prevence hypertrofie myokardu"
      ],
      dosage: {
        "short": "Stimulace endogenní produkce: chladová terapie, půst, Omega-3, Berberin",
        "long": "Přímý rekombinantní adiponektin je ve výzkumné fázi. Pro zvýšení endogenní hladiny adiponektinu se v biohackingu využívá: expozice chladu (ledové koupele zvyšují hladinu až o 60 %), intermitentní půst, aerobní cvičení a suplementace vysokodávkovými Omega-3 (3–4 g EPA/DHA)."
      },
      warning: "Extrémně nízké hladiny korelují s vysokým rizikem infarktu myokardu a diabetu 2. typu.",
      mechanism: "Vazba na adiponektinové receptory AdipoR1 (kosterní sval) a AdipoR2 (játra); aktivace proteinu APPL1, fosforylace AMPK a aktivace PPAR-alfa; stimulace ceramidázové aktivity.",
      halfLife: "Cca 2.5–3 hodiny (vysokomolekulární komplexy HMW)",
      interactions: [
        "Omega-3 EPA/DHA (klinicky prokázané zvýšení exprese adiponektinu)",
        "Berberin a Metformin (aditivní aktivace společné AMPK kaskády)"
      ],
      naturalSources: ["endogenní hormon vylučovaný adipocyty lidského těla"],
      bannedStatus: "legal (endogenní biomarker)"
    },
    {
      id: 565,
      name: "Relaxin",
      categoryKey: "hormones",
      tags: ["hormon", "peptid", "relaxin", "fibroza", "srdce", "vazivo", "eNOS"],
      rating: 4,
      colorType: "green",
      shortDesc: "Peptidový hormon rozvolňující pojivové tkáně a působící silně antifibroticky na srdce.",
      description: "Relaxin je heterodimerní peptidový hormon z inzulínové rodiny, tvořený dvěma řetězci (A a B) spojenými disulfidickými můstky. Tradičně byl znám pro svou roli v těhotenství (rozvolnění stydké spony a děložního hrdla před porodem). Moderní kardiologie a regenerativní medicína však odhalila jeho revoluční antifibrotické účinky: rekombinantní lidský relaxin-2 (Serelaxin) stimuluje syntézu oxidu dusnatého, rozšiřuje cévy bez poklesu perfuze ledvin a aktivuje metaloproteinázy (MMP), které odbourávají tuhý patologický kolagen a zvracejí fibrózu myokardu a ledvin.",
      effects: [
        "mohutné odbourávání patologické vazivové tkáně a jizev (antifibrotický účinek)",
        "stimulace syntézy vaskulárního endoteliálního oxidu dusnatého (NO)",
        "rozšíření cév v ledvinách a zvýšení glomerulární filtrace",
        "zvýšení elasticity a poddajnosti cévních stěn a pojivových tkání",
        "ochrana srdečního svalu před ischemicko-reperfuzním poškozením"
      ],
      dosage: {
        "short": "Serelaxin: 30 mcg/kg/den formou kontinuální infuze (nemocniční péče)",
        "long": "V experimentálních a klinických protokolech: rekombinantní lidský relaxin-2 v infuzní nebo subkutánní formě. V biohackingu je předmětem zájmu pro léčbu těžkých jizev a orgánové fibrózy."
      },
      warning: "Léčivo ve výzkumných fázích. Vzhledem k rozvolňování kolagenních vazů může při vysokých dávkách dočasně zvýšit mobilitu kloubních pouzder.",
      mechanism: "Vazba na receptor RXFP1 (Relaxin Family Peptide Receptor 1); aktivace adenylátcyklázy a dráhy PI3K/Akt/eNOS; indukce exprese matrixových metaloproteináz (MMP-2 a MMP-9) degradujících kolagen I a III.",
      halfLife: "Cca 1–2 hodiny",
      interactions: [
        "BPC-157 (komplementární tkáňová remodelace bez nadměrné fibrózy)",
        "Telmisartan (synergická antifibrotická ochrana srdce a ledvin)"
      ],
      naturalSources: ["endogenní lidský hormon corpus luteum a prostaty"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 566,
      name: "Inhibin B",
      categoryKey: "hormones",
      tags: ["hormon", "Sertoli", "plodnost", "spermie", "FSH", "biomarker"],
      rating: 5,
      colorType: "green",
      shortDesc: "Dimerní glykoproteinový hormon Sertoliho buněk varlat – hlavní biomarker fertility a spermatogeneze.",
      description: "Inhibin B je heterodimerní glykoproteinový hormon patřící do rodiny transformujících růstových faktorů beta (TGF-beta), složený z alfa podjednotky a specifické beta-B podjednotky. U mužů je syntetizován výhradně Sertoliho buňkami varlat v těsné závislosti na stimulaci folikuly stimulujícím hormonem (FSH) a přítomnosti zrajících spermií. Působí jako přímá negativní zpětná vazba na hypofýzu (potlačuje sekreci FSH). V klinické andrologii a po anabolických cyklech představuje nejcitlivější přímý krevní marker funkční kapacity varlat a tvorby spermií.",
      effects: [
        "nejpřesnější krevní laboratorní marker funkční kapacity varlat a tvorby spermií",
        "přímá fyziologická kontrola a negativní zpětná vazba na sekreci hypofyzárního FSH",
        "monitorování úspěšnosti zotavení po anabolických steroidech a PCT",
        "posouzení poškození spermatogeneze po chemoterapii či ozáření",
        "důležitý diagnostický ukazatel v andrologii a reprodukčních klinikách"
      ],
      dosage: {
        "short": "Laboratorní diagnostický biomarker (odběr nalačno z žilní krve)",
        "long": "Fyziologická referenční hodnota u zdravých dospělých mužů je 100–350 pg/ml. Hodnoty pod 40 pg/ml indikují těžkou poruchu spermatogeneze (azoospermii) a vyžadují terapii pomocí hMG či klomifenu."
      },
      warning: "Nejedná se o suplement, ale o klíčový endogenní hormon a laboratorní biomarker. Při hluboké atrofii po steroidech klesá k neměřitelným hodnotám.",
      mechanism: "Vazba na betaglykan a receptory activinu (ActRII), kde kompetitivně blokuje vazbu activinu, čímž zastavuje transkripci beta-podjednotky FSH v hypofyzárních gonadotropech.",
      halfLife: "Cca 12–18 hodin",
      interactions: [
        "hMG / Menotropin (přímá stimulace Sertoliho buněk vedoucí ke zvýšení Inhibinu B)",
        "FSH (Inhibin B je jeho přímým zrcadlem a fyziologickým regulátorem)"
      ],
      naturalSources: ["endogenní hormon Sertoliho buněk varlat a granulózových buněk ovarií"],
      bannedStatus: "legal (endogenní biomarker)"
    },
    {
      id: 567,
      name: "17-Hydroxyprogesteron (17-OHP)",
      categoryKey: "hormones",
      tags: ["hormon", "steroid", "prekurzor", "kortizol", "nadledviny", "CAH"],
      rating: 4,
      colorType: "green",
      shortDesc: "Endogenní steroidní prekurzor pro tvorbu kortizolu a diagnostický marker funkce nadledvin.",
      description: "17-Hydroxyprogesteron (17-OHP) je klíčový endogenní C21-steroidní hormon vznikající hydroxylací progesteronu enzymem 17alfa-hydroxylázou (CYP17A1) v kůře nadledvin a gonádách. Slouží jako bezprostřední biosyntetický předstupeň pro tvorbu glukokortikoidu kortizolu a v gonádách se štěpí na androstendion a testosteron. V klinické endokrinologii je nejdůležitějším markerem pro odhalení vrozené adrenální hyperplazie (CAH způsobené deficitem 21-hydroxylázy), která vede k masivnímu hromadění 17-OHP a nadměrné tvorbě androgenů.",
      effects: [
        "nezbytný intermediární prekurzor pro přirozenou syntézu kortizolu",
        "výchozí substrát pro syntézu androgenů v nadledvinách i varlatech",
        "klíčový diagnostický marker vrozené adrenální hyperplazie (CAH)",
        "sledování steroidogeneze při syndromu chronické únavy nadledvin",
        "udržení homeostázy mezi mineralokortikoidní a glukokortikoidní větví"
      ],
      dosage: {
        "short": "Krevní diagnostický marker (ranní odběr nalačno v klidovém stavu)",
        "long": "Fyziologické rozmezí u mužů: cca 1.5–7.5 nmol/l (0.5–2.5 ng/ml). Masivní vzestup nad 30 nmol/l značí enzymatický blok (deficit 21-hydroxylázy). V těhotenství se syntetizuje v placentě."
      },
      warning: "Endogenní hormon a metabolit. Při nadbytku v důsledku enzymatického bloku způsobuje virilizaci, akné a poruchy plodnosti.",
      mechanism: "Působením enzymu 21-hydroxylázy (CYP21A2) je 17-OHP přeměňován na 11-deoxykortizol a následně na kortizol; působením 17,20-lyázy konvertován na DHEA a androstendion.",
      halfLife: "Cca 1.5–2 hodiny v krevním oběhu",
      interactions: [
        "Pregnenolon (výchozí mateřský neurosteroid pro tvorbu 17-OHP)",
        "DHEA (navazující androgenní větev)"
      ],
      naturalSources: ["přirozený endogenní steroidní hormon kůry nadledvin a gonád"],
      bannedStatus: "legal (endogenní biomarker)"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = wave2Data;
}
