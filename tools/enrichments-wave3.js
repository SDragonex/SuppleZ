/**
 * SuppleZ Database Expansion Wave 3 (51 expert-level compounds)
 * Bringing database total from 319 to 370 comprehensive substances.
 * 100% complete scientific profiles, 0 emojis, strict schema.
 */

const wave3Data = {
  // === HEALTH & CELLULAR LONGEVITY (6 compounds: 142-147) ===
  health: [
    {
      id: 142,
      name: "Lithium Orotát (Microdose Lithium)",
      categoryKey: "health",
      tags: ["longevity", "GSK-3", "BDNF", "mozek", "neuroprotekce", "nalada"],
      rating: 5,
      colorType: "green",
      shortDesc: "Mikrodávkovaný stopový prvek s mimořádným neuroprotektivním a geroprotektivním účinkem.",
      description: "Lithium orotát je chelatovaná forma lithia s kyselinou orotovou, která umožňuje efektivní průchod iontů lithia (Li+) přes hematoencefalickou bariéru při mikrogramových až nízkých miligramových dávkách (1–5 mg elementárního lithia). To je 50–100x méně než toxické psychiatrické dávky uhličitanu lithného (900–1200 mg). Mikrodávky lithia působí jako silný inhibitor enzymu glykogensyntázakinázy-3 beta (GSK-3beta), stimulují syntézu BDNF, indukují autofagii a v epidemiologických studiích korelují s delší délkou života a nižším výskytem Alzheimerovy choroby.",
      effects: [
        "inhibice enzymu GSK-3beta a ochrana neuronů před apoptózou",
        "významná stimulace syntézy BDNF (Brain-Derived Neurotrophic Factor)",
        "indukce buněčné autofagie nezávisle na mTOR dráze",
        "ochrana telomer a stabilizace nálady bez otupění emocí",
        "neuroprotekce před excitotoxicitou glutamátu"
      ],
      dosage: {
        "short": "1–5 mg elementárního lithia denně večer",
        "long": "Dávkujte 1 až 5 mg čistého elementárního lithia (odpovídá cca 25–130 mg lithium orotátu) 1x denně večer s vodou. Pro geroprotekci stačí 1 mg denně, pro stabilizaci nálady a neuroprotekci 5 mg denně."
      },
      warning: "Při mikrodávkách (1–5 mg) je extrémně bezpečné a nevyžaduje monitorování hladiny v krvi. Nezvyšujte dávky nad 15 mg bez lékařského dozoru.",
      mechanism: "Přímá kompetitivní a nepřímá inhibice kinázy GSK-3beta přes fosforylaci Ser9; stimulace exprese neurotrofinů BDNF a NGF v hipokampu; snížení enzymu inositolfosfatázy (IMPázy).",
      halfLife: "Cca 18–24 hodin (renální vylučování)",
      interactions: [
        "Trehalóza (synergická aktivace autofagie nezávislé na mTOR)",
        "Magnesium L-Threonát (dokonalá neuroprotektivní kombinace)"
      ],
      naturalSources: ["minerální prameny", "pitná voda v některých regionech", "obiloviny"],
      bannedStatus: "legal"
    },
    {
      id: 143,
      name: "Trehalóza (Trehalose)",
      categoryKey: "health",
      tags: ["autofagie", "TFEB", "chaperon", "misfolding", "mozek", "cukr"],
      rating: 4,
      colorType: "green",
      shortDesc: "Přírodní disacharid indukující TFEB-dependentní autofagii a čištění toxických proteinů.",
      description: "Trehalóza je přírodní disacharid složený ze dvou molekul glukózy spojených alfa,alfa-1,1-glykosidickou vazbou. V přírodě umožňuje mikroorganismům a pouštním rostlinám přežít kompletní dehydrataci (anhydrobióza). V biomedicíně je přelomovou látkou: působí jako chemický chaperon zabraňující agregaci špatně poskládaných proteinů (misfolded proteins) a spouští mohutnou buněčnou autofagii aktivací transkripčního faktoru TFEB, a to zcela nezávisle na mTORC1 (autofagie běží i v přítomnosti živin).",
      effects: [
        "indukce buněčné autofagie přes translokaci faktoru TFEB do jádra",
        "odbourávání toxických proteinových agregátů (alfa-synuklein, beta-amyloid, tau)",
        "chemický chaperon stabilizující nativní strukturu proteinů",
        "ochrana endotelu a snížení tuhosti cév u stárnoucích jedinců",
        "mírná sladká chuť (cca 45 % sacharózy) s nižším glykemickým indexem"
      ],
      dosage: {
        "short": "5–10 g denně rozpuštěno v nápoji",
        "long": "Užívejte 5 až 10 gramů čistého prášku trehalózy denně rozpuštěného ve vodě, čaji nebo kávě. Pro kardiovaskulární a senolytické účinky užívejte 10 g denně po dobu 8–12 týdnů."
      },
      warning: "V trávicím traktu je štěpena enzymem trehalázou. U osob s deficitem trehalázy může vyšší dávka vyvolat plynatost nebo průjem.",
      mechanism: "Inhibice transportérů glukózy SLC2A (GLUT1–4), což vyvolává intracelulární signál pseudostarvace a způsobuje translokaci TFEB (Transcription Factor EB) z cytosolu do jádra s následnou transkripcí lysozomálních a autofagických genů (CLEAR síť).",
      halfLife: "Cca 1–2 hodiny v krvi (autofagická transkripce přetrvává déle)",
      interactions: [
        "Spermidin (aditivní autofagický impuls)",
        "Lithium Orotát (dvojitá mTOR-nezávislá indukce buněčné očisty)"
      ],
      naturalSources: ["houby (shiitake)", "kvasinky", "med"],
      bannedStatus: "legal"
    },
    {
      id: 144,
      name: "Akkermansia Muciniphila (Pasterizovaná)",
      categoryKey: "health",
      tags: ["mikrobiom", "postbiotikum", "streva", "GLP-1", "mucin", "metabolismus"],
      rating: 5,
      colorType: "green",
      shortDesc: "Přelomové metabolické postbiotikum posilující střevní bariéru a přirozenou sekreci GLP-1.",
      description: "Akkermansia muciniphila je striktně anaerobní bakterie kolonizující mucinovou vrstvu lidského tenkého a tlustého střeva. Klinické studie prof. Patrice Caniho (Université Catholique de Louvain) prokázaly, že pasterizovaná forma (postbiotikum) je ještě bezpečnější a účinnější než živá kultura. Specifický membránový protein Amuc_1100 přetrvává pasterizaci, váže se na Toll-like receptor 2 (TLR2) v enterocytech, obnovuje těsné spoje střeva, snižuje hladinu lipopolysacharidů (LPS endotoxémii) a stimuluje přirozenou endogenní sekreci GLP-1.",
      effects: [
        "obnova tloušťky a integrity hlenové (mucinové) bariéry střeva",
        "významné snížení střevní permeability a průniku endotoxinů (LPS)",
        "stimulace endogenní produkce střevního hormonu GLP-1",
        "zlepšení inzulínové senzitivity a redukce viscerálního tuku",
        "snížení chronického nízkostupňového zánětu u metabolického syndromu"
      ],
      dosage: {
        "short": "1 kapsle denně (cca 30 miliard pasterizovaných buněk) s jídlem",
        "long": "Užívejte 1 kapsli denně (obsahující standardizovaných 30 miliard pasterizovaných bakterií) ráno se snídaní. Doba užívání minimálně 3 měsíce."
      },
      warning: "Schválená nová potravina (Novel Food) v EU od roku 2022. Žádné závažné vedlejší účinky.",
      mechanism: "Interakce vnějšího membránového proteinu Amuc_1100 s receptorem TLR2 na střevních epiteliálních buňkách; indukce exprese claudinu-1, occludinu a ZO-1; stimulace L-buněk k uvolňování GLP-1.",
      halfLife: "Stabilní biologické postbiotikum s lokálním působením ve střevě",
      interactions: [
        "Berberin (zvyšuje endogenní růst přirozené Akkermansie v mikrobiomu)",
        "BPC-157 Arginate (synergická regenerace slizniční bariéry)"
      ],
      naturalSources: ["fyziologická součást zdravého lidského střevního mikrobiomu"],
      bannedStatus: "legal (EU Novel Food schváleno)"
    },
    {
      id: 145,
      name: "Fosfatidylcholin (Polyenylfosfatidylcholin / PPC)",
      categoryKey: "health",
      tags: ["jatra", "fosfolipid", "membrany", "cholin", "cholesterol", "Essentiale"],
      rating: 5,
      colorType: "green",
      shortDesc: "Esenciální fosfolipid bohatý na kyselinu linolovou pro opravu membrán hepatocytů.",
      description: "Polyenylfosfatidylcholin (PPC / čištěný fosfatidylcholin, známý z léčiva Essentiale) je vysoce purifikovaný extrakt ze sójových bobů obsahující vysokou koncentraci 1,2-dilinoleoylfosfatidylcholinu (DLPC). Fosfatidylcholin je hlavní strukturní jednotkou všech buněčných a mitochondriálních membrán. Při jaterním poškození toxiny, alkoholem či léky dochází k degradaci membránových fosfolipidů. PPC se přímo včleňuje do poškozených membrán hepatocytů, obnovuje jejich fluiditu, regeneruje jaterní tkáň a ředí žluč.",
      effects: [
        "přímé včlenění do narušených membrán jaterních buněk (membránová reparace)",
        "zlepšení membránové fluidity a transportních jaterních systémů",
        "ochrana jater před steatózou (ztučněním) a toxickou fibrózou",
        "podpora emulgace a toku žluči (prevence žlučových kamenů)",
        "vysoce biodostupný zdroj cholinu pro syntézu acetylcholinu v mozku"
      ],
      dosage: {
        "short": "600–1 800 mg denně s jídlem",
        "long": "Při jaterní zátěži: 600 mg 3x denně (celkem 1 800 mg) s jídlem po dobu 2–3 měsíců. Pro udržení zdraví jater a mozku: 600–900 mg denně."
      },
      warning: "Velmi bezpečný lékopisný fosfolipid. Velmi vzácně může při vysokých dávkách způsobit měkčí stolici.",
      mechanism: "Přímá inkorporace molekul DLPC do lipidové dvouvrstvy plazmatické a mitochondriální membrány hepatocytů; potlačení aktivace jaterních hvězdicových buněk (HSC) a syntézy kolagenu I (antifibrotický účinek).",
      halfLife: "Cca 24–48 hodin (tkáňová membránová retence)",
      interactions: [
        "TUDCA (dokonalá synergie: PPC opravuje membránu a TUDCA žlučové cesty a ER-stres)",
        "Silymarin (komplementární antioxidační ochrana)"
      ],
      naturalSources: ["sójový lecitin", "vaječné žloutky", "játra"],
      bannedStatus: "legal"
    },
    {
      id: 146,
      name: "Glukosamin & Chondroitin Sulfát",
      categoryKey: "health",
      tags: ["klouby", "chrupavka", "glykosaminoglykany", "artroza", "synovie"],
      rating: 4,
      colorType: "green",
      shortDesc: "Strukturální stavební kameny kloubní chrupavky stimulující syntézu proteoglykanů.",
      description: "Glukosamin sulfát a Chondroitin sulfát jsou základní glykosaminoglykany (GAG) tvořící extracelulární matrix kloubní chrupavky a synoviální tekutiny. Glukosamin slouží jako biochemický prekurzor pro syntézu chondroitinu, kyseliny hyaluronové a keratan sulfátu, zatímco chondroitin svými negativními náboji elektrostaticky váže vodu, čímž dodává chrupavce pružnost, houževnatost a schopnost tlumit nárazy. Klinické zkoušky potvrzují zpomalení zužování kloubní štěrbiny u osteoartrózy při dlouhodobém užívání.",
      effects: [
        "stavební substrát pro novotvorbu proteoglykanů a kolagenu v chrupavce",
        "zadržování vody a lubrikace kloubního pouzdra synoviální tekutinou",
        "inhibice katabolických enzymů degradujících chrupavku (metaloproteináz MMP)",
        "snížení chronické bolesti kloubů u těžce trénujících sportovců",
        "zpomalení strukturální progrese osteoartrózy"
      ],
      dosage: {
        "short": "1 500 mg glukosaminu + 800–1 200 mg chondroitinu denně s jídlem",
        "long": "Dávkujte 1 500 mg krystalického glukosamin sulfátu (nejlépe 2KCl forma) spolu s 1 000 mg nízkomolekulárního chondroitin sulfátu denně najednou nebo rozděleně do 2 dávek s jídlem. Kúra musí trvat minimálně 2–3 měsíce."
      },
      warning: "Glukosamin se běžně vyrábí z krunýřů korýšů (pozor při těžké alergii na mořské plody; k dispozici jsou i fermentované veganské formy). Mírný vliv na glukózový metabolismus při extrémních dávkách.",
      mechanism: "Inkorporace do syntézy aggrekanu chondrocyty; inhibice exprese prozánětlivých cytokinů IL-1beta a TNF-alfa a enzymů kolagenázy a aggrekanázy v synoviální membráně.",
      halfLife: "Cca 15 hodin (glukosamin), cca 6–10 hodin (chondroitin)",
      interactions: [
        "Kolagenní peptidy (společné dodání aminokyselin i polysacharidové matrix)",
        "Kyselina hyaluronová (kompletní viskoelastická kloubní ochrana)"
      ],
      naturalSources: ["chrupavky žraloků a skotu", "krunýře korýšů (krabi, krevety)"],
      bannedStatus: "legal"
    },
    {
      id: 147,
      name: "Kyselina nikotinová (Niacin Flush Protokol)",
      categoryKey: "health",
      tags: ["niacin", "flush", "cholesterol", "cevy", "longevity", "HGH"],
      rating: 4,
      colorType: "green",
      shortDesc: "Vysokodávková kyselina nikotinová pro cévní vazodilataci, vyplavení prostaglandinů a lipidy.",
      description: "Kyselina nikotinová (pravý Niacin / vitamín B3) se zásadně liší od 'non-flush' niacinamidu. Po požití dávek nad 50–100 mg aktivuje receptor GPR109A (HCA2) na kožních buňkách, což vyvolává mohutné uvolnění prostaglandinů D2 a E2 provázené intenzivním zčervenáním a horkostí kůže (tzv. Niacin Flush). Tento fenomén masivně rozšiřuje periferní kapilární řečiště, čistí toxiny, zlepšuje lipidový profil (zvyšuje HDL a snižuje aterogenní lipoprotein (a)), a při podání večer nalačno vyvolává rebound efekt volných mastných kyselin s mohutným pulzem růstového hormonu (HGH).",
      effects: [
        "masivní vazodilatace periferních kapilár a prokrvení pokožky (Flush)",
        "významné zvýšení HDL 'dobrého' cholesterolu (až o 20–30 %)",
        "snížení hladiny vysoce rizikového lipoproteinu(a) a triglyceridů",
        "indukce nočního pulzu růstového hormonu (HGH) při večerním protokolu nalačno",
        "prekurzor pro syntézu koenzymu NAD+ v buňkách"
      ],
      dosage: {
        "short": "100–500 mg nalačno (postupná adaptace na flush)",
        "long": "Zahajujte na 50–100 mg nalačno. Niacin flush (zčervenání a svědění) nastupuje za 15–20 minut a trvá 30–60 minut (je zcela neškodný). Po adaptaci lze dávku zvýšit na 250–500 mg večer před spaním (minimálně 3 hodiny po jídle pro stimulaci HGH)."
      },
      warning: "Nezaměňovat s niacinamidem (niacinamid nezpůsobuje flush, ale ve vysokých dávkách tlumí sirtuiny!). Nepoužívat formy s 'pomalým uvolňováním' (timed-release) – ty mohou být hepatotoxické. Okamžitě se uvolňující kyselina nikotinová je při dodržení dávek bezpečná.",
      mechanism: "Aktivace receptoru spřaženého s Gi-proteinem HCA2 (GPR109A) v adipocytech a Langerhansových buňkách kůže; inhibice lipolýzy v tukové tkáni následovaná prudkým uvolněním PGD2 a PGE2 vyvolávajícím vazodilataci.",
      halfLife: "Cca 1 hodina (krátký plazmatický poločas)",
      interactions: [
        "Aspirin (blokuje syntézu prostaglandinů a potlačuje flush – užívat bez aspirinu, pokud je flush žádoucí)",
        "Statinová léčba (vyžaduje monitorování jaterních testů)"
      ],
      naturalSources: ["krůtí a kuřecí maso", "tuňák", "hovězí játra", "arašídy"],
      bannedStatus: "legal"
    }
  ],

  // === NOOTROPICS & COGNITIVE ENHANCERS (7 compounds: 632-638) ===
  nootropics: [
    {
      id: 632,
      name: "Galantamin (Reminyl)",
      categoryKey: "nootropics",
      tags: ["acetylcholin", "AChEI", "alfa-7", "lucidni-sneni", "pamet", "nootropikum"],
      rating: 5,
      colorType: "green",
      shortDesc: "Reverzibilní inhibitor acetylcholinesterázy a allosterický modulátor nikotinových receptorů.",
      description: "Galantamin je terciární alkaloid izolovaný ze sněženky podsněžníku (Galanthus nivalis). V medicíně je schváleným léčivem Alzheimerovy choroby, v biohackingu a nootropní komunitě je legendou pro stimulaci kognice a vyvolávání vědomého lucidního snění (lucid dreaming). Působí duálním mechanismem: reverzibilně inhibuje enzym acetylcholinesterázu (čímž zabraňuje rozkladu acetylcholinu) a současně allostericky senzibilizuje nikotinové acetylcholinové receptory alfa-7, čímž dramaticky zostřuje paměť, vybavování a živost snů v REM fázi.",
      effects: [
        "mohutné zvýšení synaptické koncentrace acetylcholinu v mozku",
        "allosterická potenciace presynaptických nAChR alfa-7 receptorů",
        "zlatý standard pro navození lucidního snění (při podání ve 4–5 ráno)",
        "významné zlepšení prostorové a epizodické paměti",
        "neuroprotektivní účinek proti toxicitě beta-amyloidu"
      ],
      dosage: {
        "short": "4–8 mg ráno (nebo po 4.5 hodinách spánku pro lucidní snění)",
        "long": "Pro kognitivní účely: 4 mg ráno po snídani, po týdnu lze zvýšit na 8 mg. Pro lucidní snění (protokol WBTB – Wake Back To Bed): nastavit budík na 4.5 hodiny po usnutí, vstát, požít 4–8 mg s cholinem a jít spát do REM periody."
      },
      warning: "Při užití těsně před spaním může narušit usnutí (silně stimuluje REM fázi a bdělost). Neužívejte častěji než 1–2x týdně pro lucidní snění (jinak vzniká tolerance). Může vyvolat lehkou nevolnost nalačno.",
      mechanism: "Reverzibilní kompetitivní inhibice acetylcholinesterázy (AChE) a allosterická modulace nikotinových receptorů typu alfa-4/beta-2 a alfa-7; zvýšení intracelulárního vstupu vápníku a uvolňování neurotransmiterů.",
      halfLife: "Cca 7–8 hodin",
      interactions: [
        "Alfa-GPC / Citicolin (povinný donor cholinu pro maximální syntézu ACh)",
        "Huperzin A (nekombinovat ve stejný den – obojí jsou inhibitory AChE)"
      ],
      naturalSources: ["sněženka podsněžník (Galanthus nivalis)", "bledule jarní"],
      bannedStatus: "controlled / na lékařský předpis (Reminyl)"
    },
    {
      id: 633,
      name: "Memantin (Namenda)",
      categoryKey: "nootropics",
      tags: ["NMDA", "antagonista", "glutamat", "tolerance", "neuroprotekce", "fokus"],
      rating: 4,
      colorType: "green",
      shortDesc: "Nekompetitivní nízkoafinitní NMDA antagonista chránící mozek před excitotoxicitou a tolerancí.",
      description: "Memantin je derivát adamantanu vyvinutý pro léčbu demence a neurodegenerace. Je unikátním 'chytrým' antagonistou glutamátových NMDA receptorů: má nízkou až střední afinitu a velmi rychlou kinetiku blokády kanálu. Za normálních okolností blokuje patologický chronický tonický únik vápníku (chrání neurony před pomalou excitotoxickou smrtí a zvrací toleranci na stimulanty), avšak při fyziologickém signálu (učení a myšlení) se z kanálu okamžitě uvolní a umožní normální synaptický přenos bez disociativních a psychotických stavů typických pro ketamin či PCP.",
      effects: [
        "specifická ochrana neuronů před chronickou glutamátovou excitotoxicitou",
        "reset a prevence vzniku tolerance na dopaminergní stimulanty a opioidy",
        "zlepšení nálady a zmírnění obsedantně-kompulzivního přemítání (OCD)",
        "stabilizace kognitivního výkonu u osob s chronickým stresem",
        "velmi dlouhý poločas umožňující stabilní plazmatickou hladinu"
      ],
      dosage: {
        "short": "5–10 mg denně ráno (pomalá titrace od 2.5 mg)",
        "long": "V nootropních protokolech: zahájit na 2.5–5 mg ráno po dobu 1–2 týdnů (pro zamezení počáteční mozkové mlhy). Následně udržovací dávka 5 až 10 mg denně ráno."
      },
      warning: "Léčivo na lékařský předpis. V prvních dnech užívání může vyvolat přechodnou desorientaci nebo 'mozkovou mlhu' v důsledku adaptace NMDA receptorů. Má extrémně dlouhý poločas rozpadu.",
      mechanism: "Nekompetitivní, napěťově závislý antagonismus s rychlou kinetikou na kanálu NMDA receptoru (blokuje patologický influx Ca2+ při klidovém membránovém potenciálu); antagonismus na 5-HT3 receptorech.",
      halfLife: "Cca 60–100 hodin (extrémně dlouhý poločas rozpadu)",
      interactions: [
        "Stimulanty (Memantin zabraňuje downregulaci dopaminových receptorů)",
        "Dextrometorfan / Ketamin (aditivní blokáda NMDA – nekombinovat)"
      ],
      naturalSources: ["syntetický derivát adamantanu"],
      bannedStatus: "prescription-only"
    },
    {
      id: 634,
      name: "Armodafinil (Nuvigil)",
      categoryKey: "nootropics",
      tags: ["eugeroikum", "bdelost", "fokus", "dopamin", "R-enantiomer", "laser"],
      rating: 5,
      colorType: "green",
      shortDesc: "Čistý R-enantiomer modafinilu pro stabilní 12–15hodinovou bdělost bez odpoledního propadu.",
      description: "Armodafinil (obchodní název Nuvigil) je izolovaný čistý R-enantiomer racemického modafinilu (který obsahuje 50 % S-modafinilu a 50 % R-modafinilu). Zatímco S-enantiomer má krátký poločas (cca 4 hodiny) a rychle se metabolizuje, R-enantiomer má poločas eliminace kolem 15 hodin a podstatně vyšší afinitu k dopaminovému transportéru. Armodafinil poskytuje konzistentnější, plynulejší a čistší stav neochvějné mentální bdělosti po celý den bez odpoledního 'nárazu do zdi' a s nižší potřebnou dávkou oproti modafinilu.",
      effects: [
        "extrémně čistá a dlouhotrvající mentální bdělost (12–15 hodin)",
        "odstranění subjektivního pocitu spánkové deprivace a únavy",
        "zvýšení dopaminu v prefrontálním kortexu (motivace a exekutivní funkce)",
        "plynulý profil bez kolísání energie a bez třesu",
        "zlepšení pracovní paměti a rychlosti reakcí"
      ],
      dosage: {
        "short": "75–150 mg jednou denně brzy ráno",
        "long": "Užívejte 75 mg až 150 mg jednou denně ráno po probuzení (150 mg odpovídá cca 200–250 mg klasického modafinilu). Neužívejte po 10. hodině dopoledne, jinak znemožní noční spánek."
      },
      warning: "Léčivý přípravek na předpis. Způsobuje silnou nespavost při pozdním požití. Snižuje účinnost perorální hormonální antikoncepce (indukuje enzym CYP3A4). WADA jej striktně zakazuje v kategorii S6 (Stimulancia).",
      mechanism: "Selektivní reverzibilní inhibice dopaminového transportéru (DAT) vedoucí ke zvýšení extracelulárního dopaminu; nepřímá stimulace orexinergního a histaminergního systému v hypotalamu.",
      halfLife: "Cca 15 hodin",
      interactions: [
        "Orální antikoncepce (výrazné snížení účinnosti – nutná bariérová ochrana)",
        "Kofein (aditivní stimulace – doporučeno snížit příjem kávy)"
      ],
      naturalSources: ["syntetická chemická sloučenina"],
      bannedStatus: "banned-sport (WADA S6), na lékařský předpis"
    },
    {
      id: 635,
      name: "Atomoxetin (Strattera)",
      categoryKey: "nootropics",
      tags: ["ADHD", "noradrenalin", "NET", "prefrontalni-kortex", "pozornost", "exekutiva"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Selektivní inhibitor zpětného vychytávání noradrenalinu pro soustředění bez zneužitelnosti.",
      description: "Atomoxetin (Strattera) je nesteroidní ne-stimulační léčivo schválené pro terapii poruchy pozornosti s hyperaktivitou (ADHD). Působí jako vysoce selektivní inhibitor presynaptického noradrenalinového transportéru (NET). V prefrontálním kortexu je koncentrace dopaminového transportéru (DAT) zanedbatelná, a dopamin je zde vychytáván právě transportérem pro noradrenalin. Inhibicí NET tak atomoxetin dramaticky zvyšuje koncentraci jak noradrenalinu, tak dopaminu specificky v prefrontální kůře, aniž by zvyšoval dopamin v mozkových centrech odměny (nucleus accumbens), což eliminuje riziko vzniku závislosti.",
      effects: [
        "významné zlepšení schopnosti udržet dlouhodobou pozornost",
        "potlačení motorické i mentální impulzivity a těkavosti myšlenek",
        "zvýšení noradrenalinu a dopaminu selektivně v prefrontálním kortexu",
        "nulový euforický potenciál a nulové riziko zneužívání a závislosti",
        "stabilní 24hodinový terapeutický efekt bez výkyvů nálady"
      ],
      dosage: {
        "short": "25–80 mg denně ráno s jídlem (lékařský dohled)",
        "long": "Zahajovací dávka je 25–40 mg ráno po dobu 7–14 dnů, s následnou titrací na cílových 60–80 mg denně. Vyžaduje kontinuální každodenní užívání po dobu 3–6 týdnů pro dosažení plného terapeutického účinku."
      },
      warning: "Léčivý přípravek na lékařský předpis. Zvyšuje srdeční frekvenci a krevní tlak. Může způsobit sucho v ústech, nechutenství a přechodnou nauzeu. Neužívat s inhibitory MAO.",
      mechanism: "Vysokoafinitní selektivní blokáda noradrenalinového transportéru (NET); sekundární zvýšení extracelulárních koncentrací noradrenalinu a dopaminu v prefrontální mozkové kůře bez ovlivnění striata.",
      halfLife: "Cca 5 hodin (u rychlých metabolizátorů CYP2D6) až 20 hodin (u pomalých metabolizátorů)",
      interactions: [
        "Inhibitory CYP2D6 (Bupropion, Fluoxetin – dramaticky zvyšují koncentraci atomoxetinu)",
        "Sympatomimetika (aditivní vliv na krevní tlak a tep)"
      ],
      naturalSources: ["syntetická molekula odvozená od fenoxypropylaminů"],
      bannedStatus: "prescription-only"
    },
    {
      id: 636,
      name: "IDRA-21",
      categoryKey: "nootropics",
      tags: ["AMPA", "ampakin", "pamet", "LTP", "uceni", "vyzkum", "potence"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Mimořádně silný benzothiadiazinový ampakin stimulující dlouhodobou potenciaci v hipokampu.",
      description: "IDRA-21 je syntetická nootropní sloučenina ze třídy benzothiadiazinů, odvozená od diuretika hydrochlorothiazidu (avšak s kompletní absencí diuretického účinku). Je přibližně 10–30x účinnější než aniracetam při allosterické stimulaci AMPA receptorů. Působí tak, že dramaticky blokuje desenzitizaci AMPA receptoru po navázání glutamátu. U laboratorních zvířat i v biohackingu vyvolává dlouhotrvající stav extrémního zrychlení učení, usnadňuje tvorbu dlouhodobé paměti a zvrací kognitivní deficity způsobené únavou.",
      effects: [
        "silná potenciace dlouhodobé paměti a kapacity pro učení",
        "blokáda desenzitizace AMPA receptorů pro glutamát",
        "rychlé zvrácení kognitivních deficitů vyvolaných scopolaminem",
        "dlouhotrvající účinek přetrvávající až 48 hodin po jediné dávce",
        "významné zostření kognitivního vnímání"
      ],
      dosage: {
        "short": "5–10 mg sublinguálně nebo orálně (přísně vážit!)",
        "long": "Dávkujte 5 až maximálně 10 mg jednou za 24 až 48 hodin. Vzhledem k extrémnímu poločasu a síle sloučeniny neaplikujte častěji než 2–3x týdně. Vyžaduje miligramovou analytickou váhu."
      },
      warning: "Experimentální výzkumná substance. Vzhledem k silné blokádě desenzitizace AMPA receptorů existuje při předávkování nebo kombinaci s vysokými dávkami stimulantů riziko excitotoxicity.",
      mechanism: "Pozitivní allosterická vazba na dimerní rozhraní podjednotek AMPA receptoru, která brání konformační změně vedoucí k desenzitizaci kanálu v přítomnosti glutamátu.",
      halfLife: "Cca 48 hodin (extrémně dlouhý biologický poločas)",
      interactions: [
        "Memantin (ochranná kontrola před nadměrnou NMDA aktivací)",
        "Cholinové donory (Alfa-GPC)"
      ],
      naturalSources: ["syntetická výzkumná chemikálie"],
      bannedStatus: "controlled, výzkumná substance"
    },
    {
      id: 637,
      name: "Triacetyluridin (TAU)",
      categoryKey: "nootropics",
      tags: ["uridin", "TAU", "lipofilni", "dopamin", "synaptogeneze", "biodostupnost"],
      rating: 5,
      colorType: "green",
      shortDesc: "Vysoce lipofilní proléčivo uridinu s až 7x vyšší orální biologickou dostupností.",
      description: "Triacetyluridin (TAU) je acetylovaný derivát nukleosidu uridinu. Běžný uridin monofosfát (UMP) je hydrofilní a v trávicím traktu a játrech podléhá rychlému rozkladu, což omezuje jeho prostup do centrálního nervového systému. TAU je naproti tomu vysoce lipofilní molekula: snadno prochází střevní stěnou a hematoencefalickou bariérou do neuronů. V těle se deacetyluje na volný uridin, který stimuluje Kennedyho cyklus syntézy membránových fosfolipidů, podporuje tvorbu dendritických trnů a zvyšuje hustotu dopaminových D2 receptorů.",
      effects: [
        "až 7x vyšší biologická dostupnost v mozku oproti běžnému uridinu UMP",
        "masivní stimulace syntézy fosfatidylcholinu a synaptogeneze",
        "upregulace hustoty a senzitivity dopaminových D2 receptorů",
        "zlepšení nálady, motivace a exekutivní mentální kapacity",
        "podpora neuroplasticity a myelinizace nervových vláken"
      ],
      dosage: {
        "short": "25–50 mg 1–2x denně s jídlem",
        "long": "Vzhledem k vysoké účinnosti stačí dávkování 25 mg až 50 mg 1–2x denně společně s jídlem obsahujícím tuky (odpovídá 250–500 mg běžného uridinu)."
      },
      warning: "Velmi dobře snášen. Při vysokých dávkách (>100 mg) může způsobit lehkou ospalost nebo únavu.",
      mechanism: "Deacetylace tkáňovými esterázami na volný uridin; fosforylace na UTP a CTP, které jsou limitujícím substrátem v biosyntéze fosfatidylcholinu v neurálních membránách (Kennedyho cyklus).",
      halfLife: "Cca 4–6 hodin",
      interactions: [
        "Alfa-GPC a DHA (slavný 'Mr. Happy Stack' pro neurální růst)",
        "B-Komplex (vitamíny B6, B9 a B12 jako kofaktory metylace)"
      ],
      naturalSources: ["acetylovaný derivát nukleosidu přítomného v mateřském mléce a pivu"],
      bannedStatus: "legal"
    },
    {
      id: 638,
      name: "Amyloban 3399 (Lion's Mane specializovaný)",
      categoryKey: "nootropics",
      tags: ["hericium", "NGF", "myelin", "amyloban", "hericenon", "neurogeneze"],
      rating: 5,
      colorType: "green",
      shortDesc: "Patentovaný japonský extrakt korálovce standardizovaný na amycenon pro syntézu myelinu a NGF.",
      description: "Amyloban 3399 je celosvětově nejuznávanější vědecký patentovaný extrakt z plodnic korálovce ježatého (Hericium erinaceus), vyvinutý japonskou společností Mushroom Wisdom. Na rozdíl od běžných houbových prášků obsahuje standardizovanou kombinaci amycenonu (unikátní sloučenina chránící neurony před toxicitou beta-amyloidu) a hericenonů. Stimuluje syntézu nervového růstového faktoru (NGF) v hipokampu, urychluje myelinizaci nervových drah a vykazuje klinicky prokázaný efekt na zlepšení kognitivních funkcí a nálady u seniorů.",
      effects: [
        "standardizovaná stimulace produkce nervového růstového faktoru (NGF)",
        "obnova a regenerace myelinových pochev poškozených nervů",
        "ochrana mozkových buněk před toxickým působením beta-amyloidu",
        "zlepšení paměťové plasticity a verbální plynulosti",
        "snížení depresivních symptomů a úzkosti regulací mikroglií"
      ],
      dosage: {
        "short": "650–1 300 mg denně s jídlem",
        "long": "Dávkujte 2 tablety (celkem cca 650 mg) 1–2x denně po jídle. Kúra by měla trvat minimálně 8–12 týdnů pro prokazatelnou strukturální přestavbu nervových drah."
      },
      warning: "Bezpečný přírodní extrakt. Pozor při vzácné alergii na houby. Může mírně ředit krev.",
      mechanism: "Hericenony a amycenon stimulují expresi mRNA pro NGF v astrocytech mozkové kůry; aktivace signální dráhy TrkA a podpora přežití cholinergních neuronů bazálního předního mozku.",
      halfLife: "Cca 4–6 hodin (neurotrofické remodelace trvají týdny)",
      interactions: [
        "Magnesium L-Threonát (aditivní synaptická hustota v hipokampu)",
        "PQQ (synergická stimulace NGF a biogeneze mitochondrií)"
      ],
      naturalSources: ["korálovec ježatý (Hericium erinaceus / Lion's Mane)"],
      bannedStatus: "legal"
    }
  ],

  // === PEPTIDES & EXPERIMENTAL BLOCKBUSTERS (12 compounds: 772-783) ===
  experimental: [
    {
      id: 772,
      name: "Amycretin (Novo Nordisk)",
      categoryKey: "experimental",
      tags: ["peptid", "GLP-1", "amylin", "Novo-Nordisk", "redukce", "blokbuster"],
      rating: 5,
      colorType: "green",
      shortDesc: "Revoluční unimolekulární ko-agonista GLP-1 a amylinu s 13% úbytkem váhy za pouhých 12 týdnů.",
      description: "Amycretin je přelomová molekula nové generace vyvinutá dánskou společností Novo Nordisk. Jedná se o první syntetický unimolekulární peptid, který v jediném řetězci integruje plný agonismus jak na GLP-1 receptorech, tak na amylinových receptorech. V březnu 2024 prezentovala společnost Novo Nordisk data z klinické studie fáze I, kde orální forma Amycretinu dosáhla senzačního úbytku tělesné hmotnosti 13.1 % za pouhých 12 týdnů (oproti cca 6 % u Wegovy za stejnou dobu). Působí na dva odlišné neurochemické okruhy sytosti v hypotalamu a mozkovém kmeni.",
      effects: [
        "bezprecedentní rychlost redukce tuku (13.1 % úbytek za 12 týdnů)",
        "synergický unimolekulární agonismus na receptorech GLP-1 a amylinu",
        "kompletní ztišení chuti k jídlu a obsedantních myšlenek na jídlo",
        "vynikající zachování svalové hmoty ve srovnání s monoterapiemi",
        "vyvíjen jak v orální tabletové formě, tak v týdenní subkutánní injekci"
      ],
      dosage: {
        "short": "Týdenní injekční schéma (nebo denní orální tableta ve výzkumných fázích)",
        "long": "V klinickém vývoji: subkutánní aplikace 1x týdně s postupnou titrací dávky od nízkých miligramových frakcí pro prevenci nauzey. Přísně experimentální substance."
      },
      warning: "Výzkumný peptid ve fázi II klinických zkoušek. Může způsobit přechodnou gastrointestinální nevolnost při rychlé titraci.",
      mechanism: "Simultánní vazba a aktivace GLP-1 receptorů v beta-buňkách a hypotalamu a komplexních amylinových receptorů (CTR/RAMP) v area postrema mozkového kmene.",
      halfLife: "Prodloužený poločas cca 7–9 dní (injekční forma)",
      interactions: [
        "Inzulín (přísně monitorovat glykémii)",
        "BPC-157 (ochrana žaludeční sliznice)"
      ],
      naturalSources: ["syntetický ko-agonistický peptid Novo Nordisk"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 773,
      name: "Pemvidutide (ALT-801)",
      categoryKey: "experimental",
      tags: ["peptid", "GLP-1", "glukagon", "MASH", "svaly", "lean-mass"],
      rating: 5,
      colorType: "green",
      shortDesc: "Duální GLP-1 a glukagonový agonista s bezkonkurenčním zachováním svalové hmoty.",
      description: "Pemvidutide (ALT-801) je vysoce specifický duální peptidový agonista receptorů pro GLP-1 a glukagon od společnosti Altimmune, vyvinutý pro léčbu metabolické jaterní steatohepatitidy (MASH) a obezity. Zásadním průlomem Pemvidutidu je poměr úbytku tkání: v klinické studii MOMENTUM tvořil úbytek čistého tuku neuvěřitelných 78 % z celkového váhového úbytku a pouze 22 % tvořila beztuková tkáň (u semaglutidu a tirzepatidu bývá ztráta svalů až 35–40 %). Glukagonová komponenta navíc čistí jaterní tuk a nezpůsobuje tachykardii.",
      effects: [
        "extrémní zachování svalové hmoty při masivním úbytku tělesného tuku",
        "rychlé snížení obsahu jaterního tuku o více než 75 % u MASH",
        "významný pokles celkového a LDL cholesterolu i triglyceridů",
        "zvýšení klidového energetického výdeje bez zvýšení tepové frekvence",
        "potlačení chuti k jídlu a inzulínová senzibilizace"
      ],
      dosage: {
        "short": "1.2–2.4 mg jednou týdně subkutánně",
        "long": "Aplikuje se subkutánně 1x týdně inzulínovou stříkačkou. Běžné klinické dávky jsou 1.2 mg, 1.8 mg nebo 2.4 mg týdně po dobu 24–48 týdnů."
      },
      warning: "Výzkumný peptid ve fázi II/III klinických studií. Dodržovat sterilitu a chladové podmínky 2–8 °C.",
      mechanism: "Vyvážený agonismus v poměru 1:1 na GLP-1R a GCGR; stimulace jaterní beta-oxidace mastných kyselin a ketogeneze spojená s centrální hypotalamickou sytostí.",
      halfLife: "Cca 6–8 dní",
      interactions: [
        "Inzulín (riziko hypoglykémie)",
        "Silový trénink + Protein (synergická maximalizace udržení svalové hmoty)"
      ],
      naturalSources: ["syntetický peptidový analog oxyntomodulinu"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 774,
      name: "Petrelintide (ZP8396)",
      categoryKey: "experimental",
      tags: ["peptid", "amylin", "Zealand", "redukce", "bez-nevolnosti", "inovace"],
      rating: 5,
      colorType: "green",
      shortDesc: "Dlouhodobě působící analog amylinu od Zealand Pharma s minimálním výskytem nevolnosti.",
      description: "Petrelintide (ZP8396) je inovativní syntetický peptidový analog amylinu vyvinutý dánskou biotechnologickou společností Zealand Pharma. Hlavní vizí Petrelintidu je poskytnout alternativu k inkretinům (GLP-1), která přináší srovnatelný úbytek hmotnosti, ale s nesrovnatelně lepším profilem snášenlivosti (téměř nulová nevolnost a zvracení typické pro GLP-1). V klinických studiích fáze Ib dosáhl po 16 týdnech úbytku hmotnosti přes 8.6 % s excelentní snášenlivostí a zachováním kvality života.",
      effects: [
        "fyziologické navození sytosti přes amylinové dráhy bez nauzey",
        "významný úbytek tělesné hmotnosti srovnatelný s první generací GLP-1",
        "přirozené zpomalení vyprazdňování žaludku bez gastrointestinálního stresu",
        "možnost kombinace s GLP-1/GIP látkami pro maximální synergii",
        "týdenní stabilní dávkovací profil"
      ],
      dosage: {
        "short": "0.6–4.8 mg jednou týdně subkutánně (klinická titrace)",
        "long": "Aplikuje se 1x týdně subkutánně. Titruje se postupně od nízkých dávek 0.6 mg až po terapeutické dávky 2.4–4.8 mg týdně."
      },
      warning: "Výzkumná substance ve fázi II klinického vývoje. Přísně experimentální charakter.",
      mechanism: "Selektivní vysokoafinitní plný agonismus na kalcitoninových/RAMP komplexech amylinového receptoru v area postrema centrálního nervového systému.",
      halfLife: "Cca 7–10 dní",
      interactions: [
        "Tirzepatid / Semaglutid (potenciální super-stack)",
        "Inzulín (sledovat postprandiální glykémii)"
      ],
      naturalSources: ["syntetický peptidový analog lidského amylinu"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    },
    {
      id: 775,
      name: "Icotrokinra (JNJ-2113)",
      categoryKey: "experimental",
      tags: ["peptid", "oralni", "IL-23", "psoriaza", "IBD", "protizanetlivy"],
      rating: 5,
      colorType: "green",
      shortDesc: "První perorální cílený peptidový antagonista IL-23 receptoru pro léčbu psoriázy a IBD.",
      description: "Icotrokinra (kódové označení JNJ-2113 / JNJ-77242113) vyvinutá společnostmi Johnson & Johnson a Protagonist Therapeutics je historicky prvním perorálním cíleným peptidovým inhibitorem receptoru pro interleukin-23 (IL-23R). Doposud byla biologická léčba blokující IL-23 (jako guselkumab, risankizumab) dostupná výhradně ve formě injekcí monoklonálních protilátek. Icotrokinra je vysoce stabilní cyklický peptid v denní tabletě, který se selektivně váže na IL-23R s pikomolární afinitou a zcela blokuje produkci zánětlivého IL-17.",
      effects: [
        "orální biologická léčba v jedné tabletě bez nutnosti injekcí",
        "selektivní blokáda signální dráhy IL-23 / IL-17",
        "dramatické vyčištění kůže u psoriázy (studie fáze III FRONTIER)",
        "hluboký protizánětlivý účinek u Crohnovy choroby a ulcerózní kolitidy",
        "vysoká bezpečnost bez široké imunosuprese"
      ],
      dosage: {
        "short": "25–100 mg 1–2x denně perorálně (v tabletě)",
        "long": "V klinických studiích se užívá 100 mg jednou denně ráno nebo 50 mg 2x denně nalačno se sklenicí vody. Přísně experimentální lék ve fázi III."
      },
      warning: "Výzkumná látka ve fázi III registrace. Nemá systémové vedlejší účinky monoklonálních protilátek, přesto vyžaduje sledování zánětlivých parametrů.",
      mechanism: "Vysoce selektivní kompetitivní vazba na extracelulární doménu receptoru pro IL-23 (IL-23R), čímž brání vazbě cytokinu IL-23 a následné aktivaci kináz Jak2/Tyk2 a fosforylaci STAT3.",
      halfLife: "Cca 12–15 hodin",
      interactions: [
        "Biologická léčiva (nekombinovat s injekčními anti-IL23 protilátkami)",
        "Imunosupresiva (sledovat reakci imunitního systému)"
      ],
      naturalSources: ["syntetický cyklický peptidový antagonista"],
      bannedStatus: "výzkumná substance (clinical trial phase III)"
    },
    {
      id: 776,
      name: "Palopegteriparatide (TransCon PTH / Yorvipath)",
      categoryKey: "experimental",
      tags: ["peptid", "PTH", "vapnik", "kosti", "parathormon", "FDA-2024"],
      rating: 5,
      colorType: "green",
      shortDesc: "Dlouhodobě působící proléčivo parathormonu (PTH 1-34) schválené FDA v roce 2024.",
      description: "Palopegteriparatide (obchodní název Yorvipath / TransCon PTH vyvinutý společností Ascendis Pharma, schválený FDA a EMA v roce 2024) je revoluční peptidové proléčivo lidského parathormonu (fragment PTH 1-34). Nativní parathormon má v krvi poločas pouhé 2–4 minuty, což dosud znemožňovalo efektivní substituční léčbu hypoparatyreózy bez rizika kalcifikace ledvin a osteoporózy. Technologie TransCon kontinuálně a pomalu uvolňuje aktivní PTH(1-34) po dobu 24 hodin, čímž udržuje stabilní hladinu vápníku a fosforu v normálním fyziologickém rozmezí.",
      effects: [
        "stabilní 24hodinová fyziologická hladina parathormonu bez výkyvů",
        "normalizace sérového vápníku a fosfátů v krevní plazmě",
        "eliminace nutnosti konzumace obřích dávek vápníku a aktivního vitamínu D",
        "ochrana ledvin před nefrokalcinózou a ledvinovými kameny",
        "obnova normální kostní remodelace a hustoty kostní hmoty"
      ],
      dosage: {
        "short": "6–30 mcg subkutánně jednou denně (přesné titrační pero)",
        "long": "Aplikuje se subkutánně 1x denně předplněným perem Yorvipath. Zahajuje se na 18 mcg denně a dávka se titruje podle hladiny sérového vápníku. Vyžaduje přísný lékařský dohled endokrinologa."
      },
      warning: "Schválený lék na lékařský předpis. Vyžaduje pravidelné laboratorní měření vápníku, fosforu a kreatininu. Riziko hyperkalcémie při předávkování.",
      mechanism: "Pomalé autokatalytické uvolňování bioaktivního peptidu PTH(1-34) z inertního polyethylenglykolového (PEG) nosiče; vazba na receptor PTH1R v kostech a renálních tubulech.",
      halfLife: "Poločas uvolňování z proléčiva cca 60 hodin (umožňuje hladké stabilní krytí 24h)",
      interactions: [
        "Vápník a Vitamín D (při zahájení léčby je nutné snížit jejich suplementaci)",
        "Digoxin (riziko toxicity při změnách vápníku)"
      ],
      naturalSources: ["rekombinantní peptidové proléčivo"],
      bannedStatus: "banned-sport (WADA S2), lék na předpis (FDA/EMA 2024)"
    },
    {
      id: 777,
      name: "Enlicitide Decanoate (MK-0616)",
      categoryKey: "experimental",
      tags: ["peptid", "oralni", "PCSK9", "cholesterol", "LDL", "Merck"],
      rating: 5,
      colorType: "green",
      shortDesc: "První perorální makrocyklický peptidový inhibitor PCSK9 snižující LDL o 60 % v tabletě.",
      description: "Enlicitide Decanoate (MK-0616) je průlomový perorální makrocyklický peptid vyvinutý společností Merck & Co. (MSD). Dosavadní inhibitory PCSK9 (evolokumab, alirokumab) byly dostupné pouze jako velmi drahé injekční monoklonální protilátky. Enlicitide je malý cyklický peptid syntetizovaný s promotores vstřebávání, který lze užívat orálně v jedné denní tabletě. Váže se přímo na protein PCSK9 a zabraňuje mu v degradaci LDL receptorů na povrchu hepatocytů, což vede k senzačnímu poklesu 'špatného' LDL cholesterolu o 60–65 %.",
      effects: [
        "pokles aterogenního LDL cholesterolu o 60–65 % v denní tabletě",
        "snížení apolipoproteinu B (ApoB) a non-HDL cholesterolu",
        "orální alternativa k injekčním monoklonálním protilátkám proti PCSK9",
        "obrovská redukce kardiovaskulárního rizika a aterosklerózy",
        "vynikající bezpečnostní profil bez svalových bolestí známých ze statinů"
      ],
      dosage: {
        "short": "10–30 mg jednou denně perorálně nalačno",
        "long": "V klinických studiích fáze III se užívá 1x denně ráno nalačno se sklenicí vody, minimálně 30 minut před jídlem a ostatními léky."
      },
      warning: "Výzkumná substance ve fázi III klinických zkoušek. Užívat přesně nalačno pro zajištění konzistentní absorpce.",
      mechanism: "Vysokoafinitní vazba makrocyklického peptidu na vazebné místo PCSK9 pro LDLR; zablokování degradace LDL receptorů v lysozomech a jejich recyklace zpět na membránu hepatocytu.",
      halfLife: "Cca 20–24 hodin",
      interactions: [
        "Statiny a Ezetimib (mohutný synergický pokles LDL až o 80–85 %)",
        "Jídlo (příjem potravy těsně po požití snižuje absorpci – dodržet odstup)"
      ],
      naturalSources: ["syntetický makrocyklický peptid"],
      bannedStatus: "výzkumná substance (fáze III)"
    },
    {
      id: 778,
      name: "Motixafortide (Aphexda / BL-8040)",
      categoryKey: "experimental",
      tags: ["peptid", "kmenove-bunky", "CXCR4", "mobilizace", "regenerace", "FDA-2023"],
      rating: 5,
      colorType: "green",
      shortDesc: "Vysokoafinitní peptidový antagonista CXCR4 pro masivní mobilizaci kmenových buněk.",
      description: "Motixafortide (Aphexda / BL-8040, schválený FDA v září 2023) je syntetický 14-aminokyselinový cyklický peptid vyvinutý společností BioLineRx. Je nejsilnějším známým antagonistou chemokinového receptoru CXCR4. Za normálních okolností drží chemokin CXCL12 kmenové buňky uzamčené v kostní dření. Jediná subkutánní injekce Motixafortidu vyvolá okamžité uvolnění obrovského množství hematopoetických a mezenchymálních kmenových buněk (HSC a MSC) do periferního krevního oběhu, což umožňuje jejich odběr nebo cílené hojení těžce poškozených orgánů.",
      effects: [
        "masivní mobilizace hematopoetických a mezenchymálních kmenových buněk do krve",
        "nejvyšší afinita k receptoru CXCR4 ze všech známých sloučenin",
        "přímé navození apoptózy leukemických buněk a senzibilizace k chemoterapii",
        "podpora hluboké systémové tkáňové regenerace pomocí kmenových buněk",
        "FDA schválení v kombinaci s filgrastimem (G-CSF)"
      ],
      dosage: {
        "short": "1.25 mg/kg subkutánně (nemocniční protokol)",
        "long": "Aplikuje se subkutánně v dávce 1.25 mg na kg tělesné hmotnosti. V biohackingu a regenerativní medicíně je zkoumán pro 'autologní kmenovou mobilizaci' před regeneračními terapiemi."
      },
      warning: "Vysoce potentní léčivo. Způsobuje masivní leukocytózu (prudký nárůst bílých krvinek v krvi). V místě vpichu může vyvolat přechodné zarudnutí a svědění.",
      mechanism: "Vysokoafinitní antagonistická vazba na chemokinový receptor CXCR4 (Kd ~ 1 nM) a jeho prodloužená okupace po dobu >48 hodin, což přetrhává osu CXCL12/CXCR4 kotvící kmenové buňky ve stromatu kostní dřeně.",
      halfLife: "Cca 20–24 hodin (receptorová okupace přetrvává až 72 hodin)",
      interactions: [
        "G-CSF (Filgrastim – synergická kombinace pro maximální mobilizaci buněk)",
        "Imunosupresiva"
      ],
      naturalSources: ["syntetický cyklický peptid"],
      bannedStatus: "schválený lék na předpis (FDA 2023), výzkumná substance"
    },
    {
      id: 779,
      name: "GK-2 (Hexapeptidový NGF mimetik)",
      categoryKey: "experimental",
      tags: ["peptid", "NGF", "TrkA", "mozek", "nervy", "neurogeneze", "Rusko"],
      rating: 4,
      colorType: "green",
      shortDesc: "Dimeric hexapeptidový mimetik nervového růstového faktoru (NGF) pro opravu nervů.",
      description: "GK-2 (bis-(N-sukcynyl-L-glutamyl-L-lysin) hexamethylendiamid) je syntetický dipeptidový dimer vytvořený v Ústavu farmakologie V. V. Zachusova v Moskvě pod vedením akademika S. B. Seredenina. Jedná se o designovaný mimetik čtvrté smyčky přirozeného nervového růstového faktoru (NGF). Běžný protein NGF nedokáže překonat hematoencefalickou bariéru a vyvolává bolestivé reakce. GK-2 naproti tomu snadno prochází do mozku, aktivuje tyrosinkinázové receptory TrkA, stimuluje růst axonů, přežití neuronů a chrání mozek před následky mrtvice, traumatu a diabetické neuropatie.",
      effects: [
        "aktivace receptorů TrkA a napodobení účinků nervového růstového faktoru",
        "ochrana neuronů před ischemií, hypoxií a excitotoxicitou",
        "stimulace růstu nervových výběžků (axonů a dendritů)",
        "obnova kognitivních funkcí po cévních mozkových příhodách",
        "absence algogenních (bolestivých) vedlejších účinků nativního NGF"
      ],
      dosage: {
        "short": "0.5–2 mg subkutánně nebo intramuskulárně denně",
        "long": "Aplikuje se 1 mg denně subkutánně nebo do svalu po dobu 14–30 dnů. Vhodné pro rehabilitaci po poranění periferních nervů nebo kraniotraumatu."
      },
      warning: "Výzkumná substance. Přísně dodržovat sterilitu roztoku.",
      mechanism: "Selektivní vazba na homodimerní tyrosinkinázový receptor TrkA; autofosforylace receptoru a stimulace dráhy PI3K/Akt bez aktivace 'smrtícího' receptoru p75NTR.",
      halfLife: "Cca 1–2 hodiny (intracelulární neurotrofický signál přetrvává dny)",
      interactions: [
        "Semax / Cerebrolysin (komplementární neurotrofický stack)",
        "Alfa-GPC (substrát pro nově rostoucí cholinergní neurony)"
      ],
      naturalSources: ["syntetický mimetik NGF vyvinutý v Rusku"],
      bannedStatus: "výzkumná substance"
    },
    {
      id: 780,
      name: "GSB-106 (Dipeptidový BDNF mimetik)",
      categoryKey: "experimental",
      tags: ["peptid", "BDNF", "TrkB", "antidepresivum", "pamet", "neuroplasticita"],
      rating: 4,
      colorType: "green",
      shortDesc: "Nízkomolekulární dipeptidový mimetik BDNF aktivující receptor TrkB s rychlým antidepresivním efektem.",
      description: "GSB-106 (bis-(N-monosukcynyl-L-seryl-L-lysin) hexamethylendiamid) je syntetický mimetik mozkového neurotrofického faktoru (BDNF), vyvinutý stejným ruským vědeckým týmem jako GK-2. Cílí na čtvrtou smyčku molekuly BDNF. Aktivuje receptor TrkB, který řídí synaptickou plasticitu, tvorbu dlouhodobé paměti a náladu. V preklinických modelech vykazuje GSB-106 rychlý a mohutný antidepresivní a anxiolytický účinek, stimuluje hipokampální neurogenezi a zvrací poškození mozku způsobené chronickým stresem.",
      effects: [
        "selektivní aktivace receptoru TrkB (přímé mimetikum BDNF)",
        "silný a rychlý antidepresivní účinek zprostředkovaný neuroplasticitou",
        "stimulace tvorby nových synapsí v hipokampu a prefrontálním kortexu",
        "obnova kognitivních schopností poškozených chronickým stresem",
        "vysoká biologická dostupnost a schopnost přestupu do mozku"
      ],
      dosage: {
        "short": "0.5–1 mg subkutánně nebo orálně denně",
        "long": "Dávkujte 0.5 mg až 1 mg subkutánně inzulínovou stříkačkou 1x denně ráno po dobu 14–21 dnů. Kúru lze po měsíční pauze opakovat."
      },
      warning: "Výzkumná sloučenina. Neužívejte při aktivních nádorech centrální nervové soustavy.",
      mechanism: "Specifický agonismus na tyrosinkinázovém receptoru TrkB, indukce fosforylace MAPK/ERK a Akt drah odpovědných za přežití neuronů a synaptickou plasticitu.",
      halfLife: "Cca 2 hodiny",
      interactions: [
        "Magnesium L-Threonát (stabilizace nově tvořených synapsí)",
        "Selank (anxiolytická a neurochemická synergie)"
      ],
      naturalSources: ["syntetický dipeptidový mimetik"],
      bannedStatus: "výzkumná substance"
    },
    {
      id: 781,
      name: "Cortagen (Ala-Glu-Asp-Pro)",
      categoryKey: "experimental",
      tags: ["peptid", "bioregulator", "mozek", "nervy", "Khavinson", "kortex"],
      rating: 4,
      colorType: "green",
      shortDesc: "Khavinsonův tetrapeptid mozkové kůry pro regeneraci periferních nervů a mozkové tkáně.",
      description: "Cortagen je syntetický bioregulační tetrapeptid složený ze čtyř aminokyselin: L-alaninu, L-glutamové kyseliny, L-asparagové kyseliny a L-prolinu (Ala-Glu-Asp-Pro). Byl vyvinut v Petrohradském institutu bioregulace jako strukturální analog přírodního mozkového extraktu Cortexinu. Působí tkáňově specificky na neurony mozkové kůry a periferní nervová vlákna. Výzkumy prokázaly, že Cortagen dramaticky stimuluje expresi endogenních neurotrofinů (NGF, BDNF), urychluje regeneraci přerušených periferních nervů a normalizuje bioelektrickou aktivitu mozku po úrazech.",
      effects: [
        "významná stimulace regenerace periferních nervových vláken a míchy",
        "upregulace exprese neurotrofických faktorů v neuronech kortexu",
        "antioxidační a neuroprotektivní ochrana mozkové tkáně",
        "zlepšení kognitivních procesů a bioelektrické aktivity EEG",
        "obnova funkčnosti po kraniocerebrálních traumatech a ischemii"
      ],
      dosage: {
        "short": "10–20 mcg subkutánně denně (nebo 1–2 mg orálně) po dobu 10–20 dnů",
        "long": "Aplikuje se subkutánně 10 až 20 mcg 1x denně ráno po dobu 10–14 po sobě jdoucích dnů. V orální formě 1–2 mg nalačno po dobu 20 dnů."
      },
      warning: "Netoxický fyziologický peptid bez vedlejších účinků v klinických zkouškách.",
      mechanism: "Penetrace přes jadernou membránu neuronů, vazba na histony a epigenetická stimulace exprese genů kódujících neurotrofiny a proteiny neuronálního cytoskeletu.",
      halfLife: "Rychlý rozpad na aminokyseliny, epigenetický stimulační efekt přetrvává měsíce",
      interactions: [
        "Pinealon (dokonalý synergický stack pro mozek: Cortagen + Pinealon)",
        "Cerebrolysin (komplexní neurorehabilitace)"
      ],
      naturalSources: ["syntetický tetrapeptid odvozený z Cortexinu"],
      bannedStatus: "legal, výzkumná substance"
    },
    {
      id: 782,
      name: "Pancragen (Lys-Glu-Asp-Trp)",
      categoryKey: "experimental",
      tags: ["peptid", "bioregulator", "slinivka", "pankreas", "inzulin", "enzymy"],
      rating: 4,
      colorType: "green",
      shortDesc: "Tetrapeptidový bioregulátor slinivky břišní pro regeneraci beta-buněk a enzymatickou funkci.",
      description: "Pancragen je syntetický krátký bioregulační peptid složený ze 4 aminokyselin: L-lysinu, L-glutamové kyseliny, L-asparagové kyseliny a L-tryptofanu (Lys-Glu-Asp-Trp). Je navržen pro cílenou normalizaci a regeneraci buněk pankreatu. Působí jak na exokrinní část (stimuluje syntézu a sekreci trávicích enzymů – amylázy, lipázy a proteáz), tak na endokrinní část v Langerhansových ostrůvcích (chrání beta-buňky před toxickým poškozením a apoptózou, zlepšuje citlivost k inzulínu a normalizuje glykémii u diabetu 2. typu).",
      effects: [
        "tkáňově specifická regenerace buněk slinivky břišní",
        "ochrana a podpora integrity beta-buněk produkujících inzulín",
        "normalizace syntézy a vylučování trávicích enzymů pankreatu",
        "zlepšení glukózové tolerance a inzulínové senzitivity",
        "terapeutická podpora při chronické pankreatitidě a metabolickém syndromu"
      ],
      dosage: {
        "short": "10–20 mcg subkutánně denně (nebo 1–2 mg orálně) po dobu 10–20 dnů",
        "long": "Subkutánně 10–20 mcg denně inzulínovou stříkačkou po dobu 10–14 dnů. Orálně 1–2 mg denně ráno nalačno po dobu 20–30 dnů. Kúru opakovat 2x ročně."
      },
      warning: "Fyziologický netoxický bioregulátor. Nenahrazuje okamžité podání inzulínu u diabetu 1. typu.",
      mechanism: "Epigenetická vazba tetrapeptidu na DNA pankreatických buněk; aktivace exprese transkripčního faktoru PDX-1 řídícího diferenciaci a přežití beta-buněk.",
      halfLife: "Rychlý rozklad na volné aminokyseliny, epigenetické nastavení trvá měsíce",
      interactions: [
        "Berberin / Metformin (synergická stabilizace glukózové homeostázy)",
        "Livagen (komplexní obnova jaterně-pankreatické osy)"
      ],
      naturalSources: ["syntetický tetrapeptid Khavinsonova institutu"],
      bannedStatus: "legal, výzkumná substance"
    },
    {
      id: 783,
      name: "TB4-Frag (Ac-LKKTETQ)",
      categoryKey: "experimental",
      tags: ["peptid", "TB-500", "aktin", "fragment", "hojeni", "šlachy"],
      rating: 5,
      colorType: "green",
      shortDesc: "Minimální bioaktivní 7-aminokyselinový fragment thymosinu beta-4 pro vazbu aktinu a hojení.",
      description: "TB4-Frag (Ac-Leu-Lys-Lys-Thr-Glu-Thr-Gln / Ac-LKKTETQ) představuje minimální esenciální bioaktivní doménu celého 43-aminokyselinového proteinu thymosinu beta-4. Zatímco celý protein i velký peptid TB-500 (17-38 fragment) obsahují další sekvence, právě tento heptapeptid je přímo zodpovědný za sekvestraci a polymeraci G-aktinu a stimulaci endoteliální migrace buněk. Vyznačuje se vynikající stabilitou, rychlou tkáňovou difuzí a mohutným účinkem na hojení natržených šlach, vazů a rohovkových či kožních defektů bez zbytečné imunogenicity.",
      effects: [
        "vysoká afinita k monomernímu G-aktinu a řízení cytoskeletu",
        "extrémně rychlá migrace reparačních buněk do ložiska zranění",
        "urychlení hojení šlach, svalových vláken a kloubních chrupavek",
        "prevence tvorby tuhých nefunkčních jizev (antifibrotický účinek)",
        "vynikající stabilita a snížené riziko degradace"
      ],
      dosage: {
        "short": "500–1 000 mcg subkutánně 2–3x týdně",
        "long": "Aplikuje se 500 až 1 000 mcg (0.5–1 mg) subkutánně inzulínovou stříkačkou v blízkosti zranění nebo do břišního tuku 2–3x týdně po dobu 4–6 týdnů."
      },
      warning: "Výzkumná substance. Neužívat při podezření na onkologické procesy (stimulace buněčné motility). WADA zakazuje látky odvozené od thymosinu beta-4.",
      mechanism: "Vazba na rozhraní subdomén 1 a 3 monomerního G-aktinu, inhibice spontánní nukleace a řízená polymerace na F-aktinová filamenta; downregulace TGF-beta a metaloproteináz.",
      halfLife: "Cca 2–4 hodiny (systémový buněčný efekt trvá 24–48 hodin)",
      interactions: [
        "BPC-157 (slavný Wolverine protokol nové generace)",
        "GHK-Cu (aditivní syntéza nového kolagenu)"
      ],
      naturalSources: ["syntetický aktivní fragment thymosinu beta-4"],
      bannedStatus: "banned-sport (WADA S2), výzkumná substance"
    }
  ],

  // === ATHLETIC PERFORMANCE & POWER (6 compounds: 228-233) ===
  performance: [
    {
      id: 228,
      name: "Fosfatidová kyselina (Phosphatidic Acid / Mediator)",
      categoryKey: "performance",
      tags: ["anabolismus", "mTOR", "sila", "hypertrofie", "fosfolipid", "bez-hormonu"],
      rating: 5,
      colorType: "green",
      shortDesc: "Lipidový sekundární posel přímo aktivující kinázu mTORC1 mechanickým tréninkovým stimulem.",
      description: "Fosfatidová kyselina (Phosphatidic Acid / patentovaná jako Mediator PA) je unikátní lipidový posel. Při silovém tréninku svalová vlákna registrují mechanické napětí, což aktivuje enzym fosfolipázu D (PLD), která syntetizuje fosfatidovou kyselinu. Kyselina fosfatidová se přímo váže na doménu FRB kinázy mTORC1, čímž spouští svalovou proteosyntézu zcela nezávisle na hormonech, inzulínu či růstových faktorech. V placebem kontrolovaných studiích na trénovaných atletech vedla suplementace 750 mg PA k dvojnásobnému nárůstu čisté svalové hmoty a síly.",
      effects: [
        "přímá allosterická aktivace kinázy mTORC1 nezávisle na hormonech",
        "významný nárůst svalové hypertrofie a maximální síly na legpressu a benchpressu",
        "zesílení anabolického signálu z mechanického napětí činek",
        "žádný vliv na přirozenou hladinu hormonů (testosteron, estrogen, štítná žláza)",
        "vhodná pro muže i ženy v naturální přípravě"
      ],
      dosage: {
        "short": "750 mg denně (v tréninkové dny 30–60 min před cvičením)",
        "long": "Dávkujte 750 mg standardizované fosfatidové kyseliny (Mediator PA) přibližně 45 minut před silovým tréninkem společně s lehkým proteinovým jídlem. V netréninkové dny užívejte 750 mg ráno se snídaní."
      },
      warning: "Zcela přírodní a bezpečný lipid. Vyžaduje dostatečný stimul z těžkého silového tréninku (bez mechanického napětí je efekt minimální).",
      mechanism: "Přímá allosterická vazba na doménu vázající FKBP12-rapamycin (FRB) kinázy mTORC1; stimulace fosforylace p70S6K a 4E-BP1 vedoucí k translaci svalových bílkovin.",
      halfLife: "Cca 4–6 hodin (vrchol aktivace mTOR během tréninku a po něm)",
      interactions: [
        "Leucin / Syrovátkový protein (synergie: leucin aktivuje Sestrin2 a PA přímo mTOR)",
        "Kreatin Monohydrát (ideální silový a hypertrofický stack)"
      ],
      naturalSources: ["sójový a slunečnicový lecitin"],
      bannedStatus: "legal"
    },
    {
      id: 229,
      name: "Peak ATP (Disodná sůl adenosintrifosfátu)",
      categoryKey: "performance",
      tags: ["ATP", "sila", "objem", "vazodilatace", "unava", "Peak-ATP"],
      rating: 4,
      colorType: "green",
      shortDesc: "Patentovaná orální disodná sůl ATP zvyšující průtok krve svaly a vápníkovou kontraktilitu.",
      description: "Peak ATP je patentovaná stabilní disodná sůl adenosintrifosfátu (ATP). Tradičně se věřilo, že orální ATP nemá smysl, protože se rozloží v žaludku. Výzkumy z University of Tampa však odhalily, že perorálně podaný Peak ATP zvyšuje hladiny extracelulárního ATP v krevním řečišti. Tento extracelulární ATP se váže na purinergní P2Y receptory v cévním endotelu, stimuluje uvolnění oxidu dusnatého (NO) a prostacyklinu, dramaticky rozšiřuje cévy v pracujícím svalu a zvyšuje influx vápníku, což oddaluje svalové selhání.",
      effects: [
        "zvýšení počtu opakování v sérii do selhání a celkového tréninkového objemu",
        "masivní vazodilatace a prokrvení svalů během zátěže (hyperémie)",
        "zlepšení svalové dráždivosti a kinetiky vápníku (kontrakce myocytů)",
        "urychlení odplavování laktátu a metabolického odpadu",
        "významný nárůst svalové tloušťky a síly v klinických studiích"
      ],
      dosage: {
        "short": "400 mg 30 minut před tréninkem nalačno",
        "long": "Užívejte 400 mg Peak ATP přibližně 30 minut před tréninkem na lačno se sklenicí vody. V netréninkové dny užívejte 400 mg ráno nalačno."
      },
      warning: "Užívejte nalačno (jídlo může snížit vazodilatační odezvu). Bezpečný doplněk bez stimulačních vedlejších účinků na srdce.",
      mechanism: "Vazba extracelulárního ATP na endoteliální purinergní receptory P2Y2, aktivace eNOS a syntéza NO; zvýšení vychytávání glukózy a influxu Ca2+ do myoplazmy.",
      halfLife: "Rychlý metabolický obrat (endoteliální stimulace trvá 1–2 hodiny)",
      interactions: [
        "Kreatin Monohydrát (kreatin zásobuje intracelulární ATP a Peak ATP extracelulární)",
        "Beta-Alanin (synergické oddálení svalového vyčerpání)"
      ],
      naturalSources: ["univerzální energetické platidlo všech živých buněk"],
      bannedStatus: "legal"
    },
    {
      id: 230,
      name: "Nitrosigine (Inositol-stabilizovaný arginin silikát)",
      categoryKey: "performance",
      tags: ["pumpa", "NO", "vazodilatace", "kremik", "fokus", "Nitrosigine"],
      rating: 5,
      colorType: "green",
      shortDesc: "Patentovaný komplex argininu a křemíku zvyšující oxid dusnatý po dobu až 6 hodin.",
      description: "Nitrosigine (Inositol-stabilized Arginine Silicate / ASI) je patentovaný komplex aminokyseliny L-argininu, křemíku a inositolu. Běžný L-arginin je v játrech masivně ničen enzymem arginázou (má orální dostupnost pod 20 %). Vazba na křemík a inositol chrání arginin před degradací arginázou. Nitrosigine zvyšuje hladiny argininu v krvi již za 15 minut a udržuje zvýšenou produkci oxidu dusnatého (NO) až 6 hodin (mnohem déle než citrulin). Navíc křemík posiluje elasticitu cévních stěn a zlepšuje kognitivní soustředění na tréninku.",
      effects: [
        "rychlý nástup vazodilatace již za 15 minut a trvání až 6 hodin",
        "významné zvýšení průměru cév a prokrvení kosterního svalstva",
        "ochrana cévní výstelky křemíkem a podpora elasticity arterií",
        "prokázané zlepšení mentálního fokusu a rychlosti zpracování informací",
        "snížení markerů svalového poškození po těžkém tréninku"
      ],
      dosage: {
        "short": "750–1 500 mg 15–30 minut před tréninkem",
        "long": "Dávkujte 1 500 mg Nitrosiginu rozmíchaného ve vodě 20–30 minut před tréninkem. Vynikající v kombinaci s citrulinem a glycerolem."
      },
      warning: "Velmi bezpečný doplněk stravy s klinickou certifikací FDA GRAS.",
      mechanism: "Stabilizovaný komplex obchází degradaci jaterní arginázou; dramaticky zvyšuje biologickou dostupnost L-argininu v plazmě pro endoteliální syntázu NO (eNOS); křemík stimuluje syntézu elastinu.",
      halfLife: "Cca 6 hodin kontinuální stimulace NO",
      interactions: [
        "Citrulin Malát (extrémní duální NO stack – okamžitý i dlouhotrvající vrchol)",
        "Glycerol (kombinace obří vazodilatace s osmotickou pumpou)"
      ],
      naturalSources: ["patentovaný komplex minerálního křemíku, inositolu a argininu"],
      bannedStatus: "legal"
    },
    {
      id: 231,
      name: "Palatinóza (Isomaltulóza)",
      categoryKey: "performance",
      tags: ["sacharidy", "vytrvalost", "glykemie", "stabilni-energie", "izomaltuloza"],
      rating: 4,
      colorType: "green",
      shortDesc: "Pomalý disacharid s nízkým glykemickým indexem (GI 32) pro stabilní vytrvalostní energii.",
      description: "Palatinóza (funkční sacharid isomaltulóza) je přírodní disacharid složený z glukózy a fruktózy spojených alfa-1,6-glykosidickou vazbou (na rozdíl od sacharózy, která má vazbu alfa-1,2). Tato silnější vazba se v tenkém střevě enzymaticky štěpí 4–5x pomaleji. Výsledkem je velmi nízký glykemický index (GI pouhých 32), minimální vyplavení inzulínu a plynulé, rovnoměrné uvolňování glukózy do krve po dobu několika hodin. Umožňuje sportovcům současně pálit tuky a mít stabilní dodávku sacharidů bez hypoglykemických pádů.",
      effects: [
        "dlouhodobý a stabilní přísun energie po dobu 2–3 hodin bez propadu",
        "velmi nízký glykemický a inzulínový index (GI 32)",
        "zachování vysoké míry oxidace tuků při vytrvalostním výkonu",
        "šetrnost k zubní sklovině (nekazí zuby)",
        "vynikající žaludeční tolerance bez nadýmání a křečí"
      ],
      dosage: {
        "short": "30–50 g v iontovém nápoji před a během vytrvalostního výkonu",
        "long": "Rozmíchejte 30 až 50 gramů Palatinózy v 500–750 ml vody a popíjejte před vytrvalostním tréninkem nebo v průběhu dlouhé zátěže (běh, cyklistika, triatlon)."
      },
      warning: "Nehodí se jako rychlý potréninkový cukr pro okamžitou anabolizaci (k tomu slouží maltodextrin/glukóza). Je určena primárně na vytrvalost a stabilní energii.",
      mechanism: "Pomalá enzymatická hydrolýza isomaltulázovým komplexem v kartáčovém lemu tenkého střeva; pomalá absorpce glukózy přes SGLT1 a fruktózy přes GLUT5 bránící prudkému vzestupu inzulínu.",
      halfLife: "Doba trávení a absorpce cca 2–3 hodiny",
      interactions: [
        "Elektrolyty (optimální vytrvalostní hydratační nápoj)",
        "BCAA / EAA (ochrana svalů při dlouhotrvající zátěži)"
      ],
      naturalSources: ["cukrová řepa", "cukrová třtina", "med"],
      bannedStatus: "legal"
    },
    {
      id: 232,
      name: "Čistý fermentovaný L-Citrulin (Free form)",
      categoryKey: "performance",
      tags: ["citrulin", "pumpa", "NO", "sila", "cista-forma", "fermentovany"],
      rating: 5,
      colorType: "green",
      shortDesc: "100% čistá volná aminokyselina bez kyseliny jablečné pro maximální koncentraci citrulinu.",
      description: "Zatímco Citrulin Malát obsahuje přibližně 33 až 50 % kyseliny jablečné (malátu), čistý fermentovaný L-Citrulin (Free form) představuje 100% čistou volnou neesenciální aminokyselinu vyrobenou přírodní bakteriální fermentací. L-Citrulin se v ledvinách enzymaticky konvertuje na L-arginin a následně na oxid dusnatý (NO). Užívání čisté volné formy umožňuje přijmout vyšší reálné množství aktivního citrulinu v menším objemu prášku bez kyselé chuti malátu, což ocení sportovci s citlivým žaludkem.",
      effects: [
        "100% čistá účinná látka bez příměsi kyseliny jablečné",
        "masivní zvýšení plazmatického argininu a syntézy oxidu dusnatého",
        "brutální svalová pumpa, vaskularita a transport živin do svalů",
        "šetrný k žaludku (nemá kyselé pH malátových solí)",
        "podpora recyklace amoniaku v močovinovém cyklu"
      ],
      dosage: {
        "short": "4–6 g 30–45 minut před tréninkem",
        "long": "Dávkujte 4 až 6 gramů čistého volného L-citrulinu (odpovídá cca 8–10 g citrulin malátu 2:1) 30–45 minut před cvičením. Lze kombinovat s elektrolyty a glycerolem."
      },
      warning: "Při dávkách nad 10 g čisté volné formy může u citlivých jedinců vyvolat mírné nutkání na stolici.",
      mechanism: "Konverze na argininosukcinát enzymem argininosukcinát syntázou v ledvinách a následné štěpení na L-arginin, který zásobuje eNOS; přímá účast v močovinovém cyklu.",
      halfLife: "Cca 1 hodina (zvýšení argininu trvá 4–5 hodin)",
      interactions: [
        "Glycerol (vrcholná kombinace vazodilatační a tekutinové pumpy)",
        "Kofein a Tyrosin (pre-workout synergický komplex)"
      ],
      naturalSources: ["vodní meloun (Citrullus lanatus)", "fermentace kukuřice"],
      bannedStatus: "legal"
    },
    {
      id: 233,
      name: "Vytrvalostní elektrolytový komplex (Sodík, Draslík, Hořčík)",
      categoryKey: "performance",
      tags: ["elektrolyty", "sodik", "draslik", "krece", "hydratace", "kardio"],
      rating: 5,
      colorType: "green",
      shortDesc: "Vědecky vyvážený poměr iontů (1000 mg Na+, 200 mg K+, 60 mg Mg2+) pro prevenci hyponatrémie.",
      description: "Vytrvalostní elektrolytový protokol vychází z moderních poznatků sportovní medicíny o složení potu. Sportovci při intenzivní zátěži ztrácejí především sodík (cca 800–1 500 mg sodíku na litr potu) a pouze malé množství draslíku a hořčíku. Pití čisté vody bez elektrolytů vede k nebezpečnému naředění krve (diluční hyponatrémii), poklesu výkonu a svalovým křečím. Tento vědecký poměr (1 000 mg sodíku z mořské soli, 200 mg draslíku a 60 mg vysoce vstřebatelného chelátovaného hořčíku) udržuje buněčný osmotický tlak a nervosvalovou dráždivost.",
      effects: [
        "prevence diluční hyponatrémie a svalových křečí při těžkém pocení",
        "udržení objemu cirkulující krve a krevního tlaku při kardiu",
        "optimalizace funkce sodíko-draselné pumpy (Na+/K+-ATPázy) ve svalech",
        "oddálení centrální i periferní únavy v horkém prostředí",
        "zlepšení absorpce vody a glukózy v tenkém střevě přes SGLT1"
      ],
      dosage: {
        "short": "1 dávka (1000 mg Na, 200 mg K, 60 mg Mg) na 750–1000 ml vody",
        "long": "Rozpusťte 1 dávku v 750 až 1 000 ml vody a popíjejte během tréninku nebo před těžkou fyzickou aktivitou v teple. V ranním vstávání slouží jako okamžitý restart buněčné hydratace."
      },
      warning: "Při sedavém způsobu života bez pocení není nutné dodávat vysoké dávky sodíku. U hypertoniků konzultovat s lékařem.",
      mechanism: "Udržení extracelulární osmolarity ionty Na+ a Cl-; udržení intracelulární polarity ionty K+; podpora kotransportu živin transportérem SGLT1; kofaktorová stabilizace ATP ionty Mg2+.",
      halfLife: "Rychlá regulace ledvinami a aldosteronem",
      interactions: [
        "Glycerol (extrémní nárůst retence tekutin ve svalu)",
        "Palatinóza / Sacharidy (urychlení rehydratace přes střevní kotransport)"
      ],
      naturalSources: ["keltská a himalájská mořská sůl", "kokosová voda"],
      bannedStatus: "legal"
    }
  ],

  // === FAT LOSS & ADVANCED METABOLICS (5 compounds: 421-425) ===
  fatloss: [
    {
      id: 421,
      name: "Tesofensin (NS-2330)",
      categoryKey: "fatloss",
      tags: ["SNDRI", "anorektikum", "redukce", "dopamin", "noradrenalin", "vyzkum"],
      rating: 5,
      colorType: "yellow",
      shortDesc: "Trojitý inhibitor zpětného vychytávání monoaminů s úbytkem přes 10–12 kg v klinických testech.",
      description: "Tesofensin (NS-2330) je syntetická sloučenina ze třídy fenyltropanů, původně zkoumaná pro léčbu Parkinsonovy a Alzheimerovy choroby. V klinických zkouškách však prokázala bezprecedentní schopnost redukovat tělesnou hmotnost. Jedná se o trojitý inhibitor zpětného vychytávání monoaminů (SNDRI) – současně blokuje re-uptake noradrenalinu, dopaminu a serotoninu v poměru cca 1:4:12. Výsledkem je masivní potlačení chuti k jídlu, vymizení hladu a současné zvýšení 24hodinového energetického výdeje stimulací sympatiku.",
      effects: [
        "masivní úbytek hmotnosti (10–12 kg za 24 týdnů v klinických studiích)",
        "dramatické centrální potlačení hladu a chuti na sladké",
        "zvýšení bazálního metabolismu a oxidace tuků o cca 15 %",
        "zvýšení dopaminové motivace a mentální bdělosti",
        "zlepšení hladin krevního cukru a inzulínové rezistence"
      ],
      dosage: {
        "short": "0.25–0.5 mg jednou denně ráno",
        "long": "V klinických testech se užívá 0.25 mg (nízká dávka s minimem vedlejších účinků) až 0.5 mg 1x denně ráno se snídaní. Dávky 1 mg se nepoužívají z důvodu nespavosti a zvýšení tepové frekvence."
      },
      warning: "Výzkumná látka ve fázi III klinických studií. Může způsobit nespavost, sucho v ústech a mírné zvýšení krevního tlaku a tepu. Nekombinovat s antidepresivy (SSRI, SNRI, IMAO – riziko serotoninového syndromu!).",
      mechanism: "Inhibice presynaptických transportérů pro noradrenalin (NET), dopamin (DAT) a serotonin (SERT); stimulace centrálních alfa-1 a dopaminových D1/D2 drah v hypotalamických centrech hladu.",
      halfLife: "Cca 220 hodin (extrémně dlouhý poločas rozpadu cca 8–9 dní!)",
      interactions: [
        "Antidepresiva (striktně kontraindikováno – riziko fatálního serotoninového syndromu)",
        "Kofein (může zesílit tachykardii – omezit příjem stimulantů)"
      ],
      naturalSources: ["syntetický derivát azabicyklooktanu"],
      bannedStatus: "výzkumná substance (clinical trial), doping WADA S6"
    },
    {
      id: 422,
      name: "Sibutramin (Meridia)",
      categoryKey: "fatloss",
      tags: ["anorektikum", "SNRI", "Meridia", "sytost", "termogeneze", "historie"],
      rating: 3,
      colorType: "red",
      shortDesc: "Historické centrální anorektikum tlumící hlad přes zpětné vychytávání serotoninu a noradrenalinu.",
      description: "Sibutramin (obchodní název Meridia / Reductil) je orální lék na obezitu syntetizovaný v 80. letech. Působí v centrálním nervovém systému jako inhibitor zpětného vychytávání noradrenalinu a serotoninu (SNRI). Zvyšuje pocit nasycení po jídle a současně stimuluje termogenezi aktivací beta-3 adrenergních receptorů v tukové tkáni. V roce 2010 byl v EU a USA stažen z trhu na základě studie SCOUT, která prokázala zvýšené kardiovaskulární riziko (infarkty a cévní mozkové příhody) u pacientů s preexistujícím srdečním onemocněním.",
      effects: [
        "silné potlačení chuti k jídlu a rychlý nástup pocitu sytosti",
        "zvýšení energetického výdeje aktivací hnědé a bílé tukové tkáně",
        "redukce tělesné hmotnosti o 5–10 % během léčebné kúry",
        "zvýšení periferní stimulace sympatického nervového systému",
        "historický milník farmakoterapie obezity před érou GLP-1"
      ],
      dosage: {
        "short": "10–15 mg jednou denně ráno nalačno (historický protokol)",
        "long": "Původní terapeutické dávkování bylo 10 mg denně ráno. Pokud po 4 týdnech nedošlo k úbytku hmotnosti alespoň 2 kg, dávka se zvyšovala na 15 mg denně. Doba užívání byla omezena na maximálně 1 rok."
      },
      warning: "Léčivý přípravek stažený z trhu kvůli kardiovaskulární toxicitě! Zvyšuje krevní tlak a tepovou frekvenci. Časté bolesti hlavy, nespavost a zácpa. Nelegálně se vyskytuje v nebezpečných padělcích 'čajů na hubnutí'.",
      mechanism: "Aktivní metabolity M1 a M2 inhibují re-uptake noradrenalinu (54 %) a serotoninu (73 %) v synapsích hypotalamu; stimulace centrální sytosti a periferní sympatické termogeneze.",
      halfLife: "Mateřská látka cca 1 hodina, aktivní metabolity M1 a M2 cca 14–16 hodin",
      interactions: [
        "Antidepresiva (riziko serotoninového syndromu)",
        "Stimulanty (riziko hypertenzní krize)"
      ],
      naturalSources: ["syntetická sloučenina odvozená od cyklobutanfenetylaminu"],
      bannedStatus: "zakázané léčivo (staženo z trhu), WADA S6 (zakázáno ve sportu)"
    },
    {
      id: 423,
      name: "T3 (Liothyronin sodný / Cytomel)",
      categoryKey: "fatloss",
      tags: ["stitna-zlaza", "T3", "metabolismus", "termoregulace", "lipolyza", "Cytomel"],
      rating: 4,
      colorType: "red",
      shortDesc: "Aktivní syntetický hormon štítné žlázy pro brutální zrychlení bazálního metabolismu.",
      description: "Liothyronin sodný (T3 / obchodní název Cytomel) je syntetická forma trijodtyroninu – primárního, plně biologicky aktivního hormonu štítné žlázy. V těle vzniká přirozeně z prohormonu T4 enzymem dejodázou. T3 vstupuje přímo do jader všech buněk v těle a váže se na thyroidní receptory, což dramaticky zrychluje bazální metabolismus (BMR), zvyšuje spotřebu kyslíku, oxidaci tuků, sacharidů i bílkovin a tělesnou teplotu. V kulturistice je Cytomel zneužíván pro bleskové vysekání podkožního tuku před soutěží.",
      effects: [
        "masivní zrychlení bazálního metabolismu (BMR) a klidového výdeje kalorií",
        "radikální spalování tukové tkáně i při nulové aerobní aktivitě",
        "zvýšení tělesné teploty a rychlosti obratu živin",
        "upregulace beta-adrenergních receptorů v srdci a cévách",
        "okamžitý nástup účinku (nevyžaduje enzymatickou konverzi z T4)"
      ],
      dosage: {
        "short": "12.5–50 mcg denně rozděleně (přísná lékařská kontrola)",
        "long": "Substituční dávka při hypotyreóze je 12.5–25 mcg denně. V extrémních sportovních protokolech se dávka pomalu titruje po 12.5 mcg každé 4–5 dní až na maximálně 50 mcg denně (rozděleno na 2 dávky). Kúra nesmí přesáhnout 4–6 týdnů."
      },
      warning: "Extrémně nebezpečná látka při nesprávném užití! Spaluje nejen tuk, ale i svalovou hmotu (silně katabolická bez současné anabolické ochrany). Způsobuje tachykardii, palpitace, pocení a třes. Po vysazení hrozí dočasné utlumení vlastní štítné žlázy.",
      mechanism: "Přímá vazba na jaderné thyroidní receptory TR-alfa a TR-beta; stimulace transkripce genů kódujících Na+/K+-ATPázu, dýchací enzymy mitochondrií a odpřahovací proteiny (UCP).",
      halfLife: "Cca 1–2.5 dne (24–36 hodin)",
      interactions: [
        "Klenbuterol / Efedrin (extrémní kardiovaskulární riziko arytmií a tachykardie)",
        "Anabolické steroidy (využívány sportovci k ochraně svalů před silným katabolismem T3)"
      ],
      naturalSources: ["endogenní hormon štítné žlázy"],
      bannedStatus: "na lékařský předpis, WADA S4 (hormonální modulátory)"
    },
    {
      id: 424,
      name: "T4 (Levothyroxin sodný / Euthyrox)",
      categoryKey: "fatloss",
      tags: ["stitna-zlaza", "T4", "prohormon", "metabolismus", "Euthyrox", "dejodace"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Stabilní prohormon štítné žlázy s fyziologickou konverzí na aktivní T3 v tkáních.",
      description: "Levothyroxin sodný (T4 / Euthyrox, Letrox) je syntetická forma tyroxinu – hlavního prohormonu vylučovaného štítnou žlázou. T4 sám o sobě vykazuje jen minimální biologickou aktivitu; v játrech, ledvinách a periferních tkáních je enzymem 5'-dejodázou postupně zbaven jednoho atomu jódu a přeměněn na plně aktivní T3. Díky dlouhému poločasu eliminace (kolem 7 dní) zajišťuje T4 velmi stabilní, vyrovnanou a bezpečnou hladinu hormonů štítné žlázy bez dramatických teplotních a kardiovaskulárních skoků typických pro čistý T3.",
      effects: [
        "stabilní a fyziologická normalizace bazálního metabolismu",
        "postupná periferní konverze na aktivní metabolit T3 podle potřeb tkání",
        "eliminace únavy, zimomřivosti a otoků způsobených hypotyreózou",
        "podpora spalování tuků a lipidového profilu",
        "dlouhodobý poločas eliminace (vyrovnaná hladina při dávkování 1x denně)"
      ],
      dosage: {
        "short": "25–100 mcg denně ráno nalačno (lékařský dohled)",
        "long": "Užívá se 1x denně ráno na lačno, minimálně 30 minut před snídaní a kávou se sklenicí vody. Dávka se přesně řídí laboratorní hladinou TSH a volného T4 (fT4)."
      },
      warning: "Léčivý přípravek na lékařský předpis. Káva, vápník a železo vážou T4 v trávicím traktu a blokují jeho absorpci (nutný odstup minimálně 2–4 hodiny!). Předávkování vede k tyreotoxikóze.",
      mechanism: "Dejodace enzymy selenodejodázami typu 1 (D1) a typu 2 (D2) na aktivní trijodtyronin (T3); následná vazba T3 na jaderné receptory.",
      halfLife: "Cca 6–7 dní (umožňuje pohodlné dávkování 1x denně ráno)",
      interactions: [
        "Vápník, Železo, Káva (blokují vstřebávání T4 v žaludku – dodržet odstup)",
        "Selen (nezbytný stopový kofaktor dejodáz pro konverzi T4 na T3)"
      ],
      naturalSources: ["endogenní hormon syntetizovaný ve folikulárních buňkách štítné žlázy"],
      bannedStatus: "na lékařský předpis, WADA monitoring"
    },
    {
      id: 425,
      name: "Meldonium (Mildronát)",
      categoryKey: "fatloss",
      tags: ["mildronat", "metabolismus", "karnitin", "srdce", "ischemie", "WADA"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Lotyšské kardioprotektivum omezující oxidaci tuků ve prospěch bezpečné glykolýzy.",
      description: "Meldonium (obchodní název Mildronát vyvinutý v Lotyšském ústavu organické syntézy profesorem Ivarsem Kalvinsem) je metabolický modulátor. Působí jako kompetitivní inhibitor enzymu gama-butyrobetain hydroxylázy (BBOX), čímž tlumí endogenní syntézu L-karnitinu v těle a blokuje transport mastných kyselin do mitochondrií. Při ischemii (nedostatku kyslíku v srdci či svalu při extrémní zátěži) je oxidace mastných kyselin toxická a neefektivní. Meldonium přepíná energetický metabolismus na oxidaci glukózy, která vyžaduje o 12 % méně kyslíku na jednotku ATP, čímž chrání srdce před infarktem a zvyšuje odolnost organismu.",
      effects: [
        "metabolické přepnutí myokardu na energeticky úspornější oxidaci glukózy",
        "ochrana srdečního svalu a mozku před ischemickým poškozením při hypoxii",
        "zrychlení regenerace a obnovy glykogenových zásob po extrémní zátěži",
        "snížení akumulace toxických intermediátů mastných kyselin v mitochondriích",
        "zvýšení vytrvalostní pracovní kapacity při nedostatku kyslíku"
      ],
      dosage: {
        "short": "500–1 000 mg denně rozděleně ráno a v poledne",
        "long": "V klinické praxi: 250 až 500 mg 2x denně (ráno a v poledne) s jídlem po dobu 4–6 týdnů. Neužívat večer (má mírný stimulační vliv)."
      },
      warning: "Od 1. ledna 2016 je Meldonium zařazeno na seznam zakázaných dopingových látek WADA (kategorie S4.5.3 - Modulátory metabolismu; proslavila jej aféra tenistky Marie Šarapovové). Má velmi dlouhou terminální renální eliminaci (metabolity lze detekovat v moči měsíce po vysazení).",
      mechanism: "Inhibice enzymu gama-butyrobetain hydroxylázy a inhibice renálního transportéru OCTN2; snížení hladiny karnitinu v buňkách a potlačení transportéru CPT-1; aktivace aerobní glykolýzy.",
      halfLife: "Cca 4–6 hodin (terminální metabolity se vylučují z hlubokých tkání až 100 dní)",
      interactions: [
        "L-Karnitin (přímý protichůdný mechanismus – karnitin eliminuje účinek meldonia)",
        "Nitráty a Sartany (může mírně zvyšovat hypotenzní účinek)"
      ],
      naturalSources: ["syntetický strukturní analog gama-butyrobetainu"],
      bannedStatus: "banned-sport (WADA S4.5.3), na lékařský předpis v zemích východní Evropy"
    }
  ],

  // === PCT & ORGAN PROTECTION (4 compounds: 920-923) ===
  pct: [
    {
      id: 920,
      name: "Toremifen (Fareston)",
      categoryKey: "pct",
      tags: ["SERM", "estrogen", "PCT", "Fareston", "bezpecnost", "HPTA"],
      rating: 4,
      colorType: "green",
      shortDesc: "SERM druhé generace pro obnovu osy HPTA s nižším rizikem retinální a jaterní toxicity.",
      description: "Toremifen citrát (obchodní název Fareston) je selektivní modulátor estrogenových receptorů (SERM) druhé generace, strukturně odvozený od tamoxifenu s přidaným atomem chloru. V post-cyklové terapii (PCT) se používá jako modernější a bezpečnější alternativa tamoxifenu. Blokuje estrogenové receptory v hypotalamu a hypofýze, čímž ruší negativní zpětnou vazbu a vyvolává masivní vyplavení LH a FSH. Oproti tamoxifenu má výrazně příznivější profil: nepředstavuje riziko poškození oční sítnice (okulární toxicity) a má příznivější vliv na lipidový profil.",
      effects: [
        "rychlá stimulace sekrece hypofyzárního LH a FSH pro obnovu testosteronu",
        "spolehlivá prevence a léčba estrogenní gynekomastie",
        "významně nižší riziko retinální toxicity a šedého zákalu oproti tamoxifenu",
        "zlepšení lipidového profilu (zvyšuje HDL a snižuje LDL cholesterol)",
        "žádné estrogenní metabolity poškozující játra"
      ],
      dosage: {
        "short": "30–60 mg denně perorálně po dobu 4 týdnů",
        "long": "V PCT protokolu: zahájit na 60 mg denně po dobu prvních 14 dnů, následně snížit na 30 mg denně po dobu dalších 14 dnů. Užívat ráno s jídlem."
      },
      warning: "Léčivý přípravek na lékařský předpis. Ve vysokých dávkách může mírně prodlužovat QT interval na EKG. WADA zakazuje toremifen ve sportu.",
      mechanism: "Kompetitivní vazba na estrogenní receptory ER-alfa a ER-beta; antagonistické působení v prsní tkáni a hypofýze; agonistické působení v kostech a cévách.",
      halfLife: "Cca 5 dní",
      interactions: [
        "Enclomifen / Clomid (alternativní SERMy – nekombinovat současně)",
        "Inhibitory CYP3A4 (zvyšují koncentraci toremifenu)"
      ],
      naturalSources: ["syntetický chlorovaný derivát trifenylethylenu"],
      bannedStatus: "banned-sport (WADA S4), na lékařský předpis"
    },
    {
      id: 921,
      name: "Nebivolol (Bystolic)",
      categoryKey: "pct",
      tags: ["tlak", "beta-blokator", "eNOS", "srdce", "erekce", "kardioprotekce"],
      rating: 5,
      colorType: "green",
      shortDesc: "Vysoce kardioselektivní beta-blokátor 3. generace stimulující syntézu NO bez erektilní dysfunkce.",
      description: "Nebivolol (Bystolic / Nebilet) je nejpokročilejší kardioselektivní beta-blokátor třetí generace. V medicíně i sportovní farmakologii je naprostým králem pro kontrolu krevního tlaku. Na rozdíl od starých neselektivních beta-blokátorů (jako Metoprolol či Propranolol), které způsobují únavu, bronchokonstrikci a těžkou erektilní dysfunkci, má Nebivolol unikátní duální mechanismus: je vysoce selektivní k beta-1 receptorům v srdci a zároveň přes beta-3 receptory přímo stimuluje endoteliální syntézu oxidu dusnatého (eNOS). Výsledkem je snížení tlaku a pulzu se současným zlepšením erekce a elasticity cév.",
      effects: [
        "vysoce selektivní snížení tepové frekvence a krevního tlaku bez útlumu",
        "přímá stimulace syntézy vaskulárního oxidu dusnatého (eNOS vazodilatace)",
        "kompletní absence erektilní dysfunkce (naopak zlepšuje erekci stimulací NO)",
        "antioxidační a antiaterosklerotická ochrana cévního endotelu",
        "žádný negativní vliv na metabolismus glukózy a lipidů"
      ],
      dosage: {
        "short": "2.5–5 mg jednou denně ráno (lékařský dohled)",
        "long": "Zahajovací dávka je 2.5 mg jednou denně ráno. V případě potřeby lze po 2 týdnech zvýšit na standardních 5 mg denně. Užívat pravidelně ve stejný čas."
      },
      warning: "Léčivý přípravek na lékařský předpis. WADA zakazuje beta-blokátory v přesnostních sportech (střelba, lukostřelba). Neužívat při těžké bradykardii (tep pod 50 bpm) a kardiogenním šoku.",
      mechanism: "Vysoce selektivní kompetitivní blokáda kardiálních beta-1 adrenergních receptorů (d-enantiomer); stimulace syntézy NO v cévním endotelu přes dráhu beta-3 adrenergních receptorů a L-argininu (l-enantiomer).",
      halfLife: "Cca 10 hodin (u rychlých metabolizátorů) až 30 hodin (u pomalých)",
      interactions: [
        "Telmisartan (zlatý standard kardiovaskulární protekce: Nebivolol + Telmisartan)",
        "Inhibitory CYP2D6 (Fluoxetin, Paroxetin – zvyšují hladinu nebivololu)"
      ],
      naturalSources: ["syntetický racemát d- a l-nebivololu"],
      bannedStatus: "na lékařský předpis, WADA P1 (zakázáno v konkrétních sportech)"
    },
    {
      id: 922,
      name: "Ketokonazol (Vysokodávkový blokátor steroidogeneze)",
      categoryKey: "pct",
      tags: ["kortizol", "CYP17A1", "steroidogeneze", "blokator", "Cushing"],
      rating: 3,
      colorType: "red",
      shortDesc: "Nespecifický inhibitor enzymů cytochromu P450 pro akutní blokádu syntézy kortizolu a androgenů.",
      description: "Ketokonazol je syntetický imidazolový derivát primárně vyvinutý jako antimykotikum. V endokrinologii je však v perorálních vysokých dávkách (400–1 200 mg) využíván jako silný neselektivní inhibitor enzymů steroidogeneze (CYP11A1, CYP17A1 a CYP11B1). Dokáže bleskově zablokovat syntézu všech steroidních hormonů v nadledvinách i varlatech. Využívá se při léčbě těžkého Cushingova syndromu (extrémní nadbytek kortizolu) nebo k akutnímu sražení hormonální hladiny při refrakterních stavech.",
      effects: [
        "okamžitá a mohutná blokáda biosyntézy kortizolu v kůře nadledvin",
        "současná blokáda tvorby testosteronu a androgenů v Leydigových buňkách",
        "léčba patologického hyperkortizolismu (Cushingův syndrom)",
        "inhibice aromatázy a enzymu štěpícího cholesterol (CYP11A1)",
        "vysoká systémová potence vyžadující striktní dohled"
      ],
      dosage: {
        "short": "200–400 mg 2–3x denně (výhradně přísný nemocniční dohled)",
        "long": "V endokrinologii se dávkuje 400 mg až 800 mg denně rozděleně do 2–3 dávek pod přísnou kontrolou sérového kortizolu a jaterních testů. V biohackingu se neužívá vnitřně z důvodu vysoké toxicity!"
      },
      warning: "Extrémní hepatotoxické riziko (vyžaduje pravidelné jaterní testy)! Silný inhibitor enzymu CYP3A4 – dramaticky zvyšuje toxicitu většiny ostatních léků. Může vyvolat adrenální nedostatečnost (Addisonovskou krizi).",
      mechanism: "Koordinovaná vazba atomu dusíku v imidazolovém kruhu na hemové železo enzymů cytochromu P450 (konkrétně 17alfa-hydroxylázy/17,20-lyázy CYP17A1 a 11beta-hydroxylázy CYP11B1), což zastavuje syntézu steroidů.",
      halfLife: "Cca 2–4 hodiny (při vyšších dávkách až 8 hodin)",
      interactions: [
        "Statiny a většina léků (silná inhibice CYP3A4 – hrozí fatální lékové interakce!)",
        "Alkohol (silná zátěž na játra)"
      ],
      naturalSources: ["syntetický imidazolový derivát"],
      bannedStatus: "na lékařský předpis (per os vyžaduje zvláštní dohled)"
    },
    {
      id: 923,
      name: "Kyselina ursodeoxycholová (UDCA / Ursosan)",
      categoryKey: "pct",
      tags: ["jatra", "UDCA", "žluč", "Ursosan", "cholestáza", "ochrana"],
      rating: 5,
      colorType: "green",
      shortDesc: "Přírodní hydrofilní žlučová kyselina pro léčbu cholestázy a ochranu hepatocytů.",
      description: "Kyselina ursodeoxycholová (UDCA / lékopisný Ursosan) je přirozeně se vyskytující terciární žlučová kyselina, která tvoří cca 3 % lidské žluči. Na rozdíl od toxických hydrofobních žlučových kyselin (kyselina deoxycholová a lithocholová) je UDCA zcela netoxická a hydrofilní. Vytěsňuje agresivní žlučové soli z jaterních buněk, stimuluje sekreci žluči (choleretický účinek), rozpouští cholesterolové žlučové kameny a chrání buněčné membrány hepatocytů před apoptózou. Je zlatým standardem medicínské léčby jaterní cholestázy po steroidních kúrách.",
      effects: [
        "rozpuštění a zředění stagnující žluči při intrahepatální cholestáze",
        "ochrana membrán jaterních buněk a cholangiocytů před toxickými solemi",
        "rychlá normalizace patologicky zvýšených hodnot jaterních enzymů (GGT, ALP, ALT)",
        "rozpouštění cholesterolových konkrementů (žlučových kamenů)",
        "imunomodulační a protizánětlivý vliv na jaterní tkáň"
      ],
      dosage: {
        "short": "250–500 mg 2x denně s jídlem (nebo 10–15 mg/kg)",
        "long": "Doporučená terapeutická dávka je 10 až 15 mg na kg tělesné hmotnosti denně, rozděleno do 2 dávek (ráno a večer) s jídlem. Kúra trvá 1–3 měsíce do úplné normalizace jaterních markerů."
      },
      warning: "Léčivý přípravek na předpis. Kontraindikován při akutním zánětu žlučníku a kompletní neprůchodnosti žlučových cest. Neužívat současně s antacidy obsahujícími hliník (snižují vstřebávání UDCA).",
      mechanism: "Nahrazení toxických hydrofobních žlučových kyselin v enterohepatálním oběhu; stimulace exprese hepatobiliárních transportérů BSEP a MDR3; inhibice mitochondriální cesty apoptózy.",
      halfLife: "Cca 3.5–5.8 dne (díky intenzivní enterohepatální recirkulaci)",
      interactions: [
        "TUDCA (příbuzný taurinový konjugát – výborná kompatibilita)",
        "Antacida s hliníkem (vážou UDCA v žaludku – neužívat současně)"
      ],
      naturalSources: ["endogenní žlučová kyselina lidského těla", "původně extrahována z medvědí žluči"],
      bannedStatus: "legal, na lékařský předpis (Ursosan)"
    }
  ],

  // === SLEEP & NOCTURNAL SYNCHRONIZATION (4 compounds: 316-319) ===
  sleep: [
    {
      id: 316,
      name: "Melatonin (Mikrodávkovaný 0.3 mg vs 3–5 mg)",
      categoryKey: "sleep",
      tags: ["melatonin", "cirkadian", "pineal", "mikrodavkovani", "spanek", "antioxidant"],
      rating: 5,
      colorType: "green",
      shortDesc: "Epifýzový hormon s revolučním rozdílem mezi fyziologickým mikrodávkováním a vysokými dávkami.",
      description: "Melatonin (N-acetyl-5-methoxytryptamin) je neurohormon syntetizovaný epifýzou z aminokyseliny L-tryptofanu za tmy. Moderní chronobiologie (studie z MIT pod vedením Dr. Richarda Wurtmana) odhalila zásadní paradox: běžně prodávané komerční dávky (3 až 10 mg) jsou suprafyziologické (až 50x vyšší než tělo potřebuje) a vedou k desenzitizaci melatoninových receptorů MT1 a MT2, nočním můrám a ranní otupělosti. Naproti tomu fyziologické mikrodávkování (0.3 mg / 300 mcg) napodobuje přirozenou produkci těla, obnovuje cirkadiánní rytmus bez ranní kocoviny a desenzitizace.",
      effects: [
        "fyziologická synchronizace vnitřních cirkadiánních hodin (SCN v hypotalamu)",
        "zkrácení latence usnutí a přirozený signál tělu k nočnímu režimu",
        "mikrodávka (0.3 mg) zachovává citlivost receptorů MT1 a MT2 bez tolerance",
        "silná mitochondriální antioxidační kapacita (vychytává volné radikály přímo v matrix)",
        "ideální nástroj pro překonání pásmové nemoci (jet lag) a práci na směny"
      ],
      dosage: {
        "short": "0.3 mg (300 mcg) 60–90 min před spaním (nebo 3–5 mg pro silnou antioxidační terapii)",
        "long": "Pro zdravý cirkadiánní rytmus: 300 mcg (0.3 mg) sublinguálně nebo v kapkách 60 minut před ulehnutím v zatemněné místnosti. Suprafyziologické dávky (3–5 mg) užívejte pouze krátkodobě při těžkém jet lagu nebo v onkologických antioxidačních protokolech."
      },
      warning: "Vyhněte se modrému světlu z displejů (modré světlo o vlnové délce 460–480 nm okamžitě blokuje přirozenou sekreci melatoninu). Neužívejte před řízením motorových vozidel.",
      mechanism: "Agonismus na receptoru MT1 (indukuje spavost a zpomaluje neuronální aktivitu v SCN) a MT2 (řídí fázový posun cirkadiánního rytmu); přímá neutralizace hydroxylových a peroxylových radikálů v mitochondriích.",
      halfLife: "Cca 30–45 minut (rychlý rozpad v játrech přes CYP1A2)",
      interactions: [
        "Kofein (antagonizuje účinek melatoninu – kofein vysadit 8–10h předem)",
        "Magnesium Bisglycinát (synergický noční rituál)"
      ],
      naturalSources: ["višně (Montmorency tart cherries)", "vlašské ořechy", "pistácie"],
      bannedStatus: "legal"
    },
    {
      id: 317,
      name: "L-Ornithin (Ornithin proti nočnímu amoniaku)",
      categoryKey: "sleep",
      tags: ["ornithin", "amoniak", "spanek", "kortizol", "mocovinovy-cyklus", "regenerace"],
      rating: 4,
      colorType: "green",
      shortDesc: "Aminokyselina močovinového cyklu odbourávající noční amoniak a srážející stres.",
      description: "L-Ornithin je neproteinogenní aminokyselina hrající ústřední roli v močovinovém cyklu (urea cycle) v játrech, kde slouží k detoxikaci toxického amoniaku (vznikajícího odbouráváním bílkovin a těžkým tréninkem). Zvýšená hladina amoniaku v krvi prochází do mozku, narušuje syntézu neurotransmiterů a vyvolává noční probouzení a neklid. Klinické dvojitě zaslepené studie prokázaly, že večerní dávka L-ornithinu urychluje clearance amoniaku, významně snižuje noční kortizol, zkracuje dobu usnutí a eliminuje ranní pocit únavy po probuzení.",
      effects: [
        "urychlení jaterní detoxikace amoniaku na močovinu",
        "významné snížení hladiny kortizolu při nočním probuzení",
        "hluboký a nepřerušovaný spánek u sportovců na vysokoproteinové dietě",
        "snížení ranní únavy a pocitu nevyspání",
        "podpora syntézy růstového hormonu v kombinaci s argininem"
      ],
      dosage: {
        "short": "2 000–4 000 mg (2–4 g) před spaním s vodou",
        "long": "Užívejte 2 až 4 gramy čistého L-ornithinu HCl přibližně 30–45 minut před spaním nalačno. Zvláště vhodné pro těžce trénující sportovce s vysokým příjmem bílkovin."
      },
      warning: "Velmi bezpečná aminokyselina. Při dávkách nad 8 g může u citlivých osob způsobit gastrointestinální diskomfort.",
      mechanism: "Aktivace enzymu ornitintranskarbamylázy (OTC) v mitochondriích hepatocytů, což urychluje konverzi toxického amoniaku na močovinu; snížení poměru kortizol/DHEA po stresu.",
      halfLife: "Cca 1.5–2 hodiny",
      interactions: [
        "Fosfatidylserin (dvojité potlačení nočního stresu a kortizolu)",
        "L-Arginin (synergie v močovinovém cyklu a podpoře HGH)"
      ],
      naturalSources: ["maso", "ryby", "mléčné výrobky"],
      bannedStatus: "legal"
    },
    {
      id: 318,
      name: "Agomelatin (Valdoxan)",
      categoryKey: "sleep",
      tags: ["antidepresivum", "melatonin", "5-HT2C", "cirkadian", "Valdoxan", "spanek"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Melatoninergní antidepresivum synchronizující cirkadiánní rytmus bez sexuálních dysfunkcí.",
      description: "Agomelatin (obchodní název Valdoxan) je inovativní antidepresivum se zcela odlišným mechanismem od klasických SSRI. Působí jako vysoce afinitní agonista melatoninových receptorů MT1 a MT2 a současně jako specifický antagonista serotoninových 5-HT2C receptorů. Blokádou 5-HT2C receptorů odbrzďuje uvolňování dopaminu a noradrenalinu specificky v prefrontálním kortexu. Výsledkem je obnova přirozené architektury spánku, rychlé usnutí, synchronizace cirkadiánního rytmu a antidepresivní účinek bez sexuálních dysfunkcí a přibírání na váze.",
      effects: [
        "obnova fyziologické architektury spánku a fází pomalých vln (SWS)",
        "silný a stabilní antidepresivní účinek srovnatelný s klasickými léky",
        "selektivní zvýšení dopaminu a noradrenalinu v prefrontální kůře",
        "kompletní absence sexuálních nežádoucích účinků typických pro SSRI",
        "žádný vliv na tělesnou hmotnost a žádný abstinenční syndrom"
      ],
      dosage: {
        "short": "25–50 mg večer před spaním (lékařský dohled)",
        "long": "Doporučená dávka je 25 mg jednou denně večer těsně před ulehnutím ke spánku. V případě nedostatečné odpovědi lze po 2 týdnech zvýšit na 50 mg večer. Vyžaduje lékařský předpis."
      },
      warning: "Léčivý přípravek na předpis. Může zatěžovat játra – je povinné provést jaterní testy před zahájením a pravidelně po 3, 6, 12 a 24 týdnech léčby. Kontraindikován při jaterním poškození.",
      mechanism: "Duální profil: plný agonismus na melatoninových receptorech MT1 a MT2 v suprachiasmatickém jádře (SCN) a selektivní antagonismus na serotoninových receptorech 5-HT2C.",
      halfLife: "Cca 1–2 hodiny (krátký poločas zajišťuje cirkadiánní synchronizaci bez denní sedace)",
      interactions: [
        "Inhibitory CYP1A2 (Ciprofloxacin, Fluvoxamin – striktně kontraindikovány, mnohonásobně zvyšují hladinu agomelatinu!)",
        "Alkohol (zvyšuje riziko jaterního poškození)"
      ],
      naturalSources: ["syntetický analog melatoninu"],
      bannedStatus: "na lékařský předpis (Valdoxan)"
    },
    {
      id: 319,
      name: "Lemborexant / Suvorexant (DORA Orexin Antagonisté)",
      categoryKey: "sleep",
      tags: ["DORA", "orexin", "hypocretin", "nespavost", "insomnie", "revoluce"],
      rating: 5,
      colorType: "green",
      shortDesc: "Revoluční duální antagonisté orexinu vypínající signál bdělosti bez vlivu na GABA.",
      description: "Lemborexant (Dayvigo) a Suvorexant (Belsomra) představují největší revoluci v léčbě nespavosti za posledních 40 let. Patří do třídy DORA (Dual Orexin Receptor Antagonists). Všechna tradiční hypnotika (benzodiazepiny, Zolpidem) působí tak, že uměle tlumí celý mozek zesílením neurotransmitéru GABA, což vede k závislosti, toleranci, zmatenosti a ranní kocovině. DORA látky fungují obráceně: neuspávají mozek násilím, ale selektivně blokují orexinergní receptory (OX1R a OX2R), které v mozku udržují stav bdělosti. Vypnutím 'vypínače bdělosti' navozují přirozený, fyziologický spánek bez narušení REM fází a bez rizika závislosti.",
      effects: [
        "přirozený fyziologický spánek bez potlačení REM a hlubokých fází",
        "nulová interakce s GABA systémem – žádné riziko závislosti a tolerance",
        "snadné ranní probuzení bez motorické nekoordinace a kognitivního útlumu",
        "významné zkrácení doby usnutí i nočních probuzení (WASO)",
        "bezpečné pro dlouhodobé užívání u chronické insomnie"
      ],
      dosage: {
        "short": "5–10 mg večer těsně před spaním (lékařský dohled)",
        "long": "Užívá se 5 mg až maximálně 10 mg jednou denně večer bezprostředně před ulehnutím do postele. Vyžaduje vyhrazený čas na spánek minimálně 7 hodin."
      },
      warning: "Moderní léčivý přípravek na lékařský předpis. Neužívejte po těžkém tučném jídle (zpomaluje nástup účinku). Velmi vzácně může vyvolat přechodnou spánkovou paralýzu.",
      mechanism: "Reverzibilní kompetitivní duální antagonismus na orexinových receptorech typu 1 (OX1R) a typu 2 (OX2R) v laterálním hypotalamu, což tlumí transmisi neuropeptidů orexinu A a orexinu B.",
      halfLife: "Lemborexant cca 17–19 hodin, Suvorexant cca 12 hodin",
      interactions: [
        "Inhibitory CYP3A4 (Ketokonazol, Klarithromycin – zvyšují expozici DORA)",
        "Alkohol (nekombinovat – prohlubuje útlum dýchání)"
      ],
      naturalSources: ["syntetické nízkomolekulární molekuly"],
      bannedStatus: "na lékařský předpis (Dayvigo / Belsomra)"
    }
  ],

  // === STEROIDS & ANDROGENS (4 compounds: 820-823) ===
  steroids: [
    {
      id: 820,
      name: "Oral Turinabol (4-Chlorodehydromethyltestosteron)",
      categoryKey: "steroids",
      tags: ["steroid", "turinabol", "OT", "sila", "cisty-objem", "DDR"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Legendární východoněmecký perorální steroid budující čistou svalovou sílu bez retence vody.",
      description: "Oral Turinabol (chemicky 4-chloro-17alfa-methyl-17beta-hydroxyandrosta-1,4-dien-3-on) je perorální anabolický steroid syntetizovaný v 60. letech ve Východním Německu (Jenapharm) pro státní dopingový program olympioniků (státní plán 14.25). Jedná se o unikátní hybrid Dianabolu a Clostebolu: zavedení atomu chloru na pozici C-4 zcela eliminuje schopnost enzymu aromatáza přeměnit látku na estrogen. Poskytuje kvalitní, tvrdé svalové přírůstky, obrovský nárůst rychlostní síly, nulovou retenci vody a nulovou gynekomastii.",
      effects: [
        "nárůst čisté svalové hmoty bez zadržování podkožní vody",
        "výrazné zvýšení absolutní i explozivní svalové síly",
        "nulová konverze na estrogeny (aromatizace je chemicky znemožněna)",
        "vysoká afinita k SHBG (uvolňuje více volného testosteronu do krve)",
        "velmi nízká androgenní aktivita (minimální akné a padání vlasů)"
      ],
      dosage: {
        "short": "20–50 mg denně perorálně po dobu 6–8 týdnů",
        "long": "Dávkování 30 až 50 mg denně rozděleno do dvou dávek s jídlem po dobu 6 až maximálně 8 týdnů. U žen v atletice se historicky využívalo mikrodávkování 5–10 mg denně."
      },
      warning: "17-alfa-alkylovaný perorální steroid – zatěžuje játra a vyžaduje současné podávání TUDCA a NAC. Zhoršuje lipidový profil (pokles HDL). Zakázaný doping pod WADA s dlouhodobě detekovatelnými metabolity M3/M4.",
      mechanism: "Vazba na androgenní receptor v kosterním svalu; 4-chlorová substituce zabraňuje interakci s aromatázu i 5alfa-reduktázou.",
      halfLife: "Cca 16 hodin (umožňuje dávkování 1–2x denně)",
      interactions: [
        "TUDCA a NAC (nutná ochrana jater před cholestázou)",
        "Testosteron (ideální synergická kombinace pro objem i sílu)"
      ],
      naturalSources: ["syntetický 17aa chlorovaný anabolický steroid"],
      bannedStatus: "banned-sport (WADA S1), kontrolovaná substance"
    },
    {
      id: 821,
      name: "Parabolan (Trenbolon Hexahydrobenzylkarbonát)",
      categoryKey: "steroids",
      tags: ["steroid", "trenbolon", "parabolan", "sila", "tvrdost", "francouzsky"],
      rating: 5,
      colorType: "red",
      shortDesc: "Legendární francouzský dlouhodobě působící ester trenbolonu s poločasem 14 dní.",
      description: "Parabolan (Trenbolon Hexahydrobenzylkarbonát / trenbolon cyclohexylmethylkarbonát) byl jediný oficiální lékárenský trenbolon určený pro humánní medicínu, vyráběný legendární francouzskou farmaceutickou společností Negma v 80. a 90. letech. Trenbolon je 5x silnější než testosteron jak v anabolickém, tak v androgenním indexu (500:500). Tento unikátní pomalu se uvolňující ester zajišťuje stabilní plazmatické hladiny po dobu téměř 2 týdnů. Poskytuje brutální nárůst svalové hustoty, cévnatosti, síly a spalování tuků.",
      effects: [
        "extrémní anabolická potence (5x silnější než testosteron)",
        "nulová aromatizace na estrogeny s masivním efektem tvrdosti svalů",
        "přímé spalování tuků vazbou na androgenní receptory v adipocytech",
        "obrovský nárůst svalové síly a agresivity při tréninku",
        "pohodlná injekční frekvence (1x za 5–7 dní)"
      ],
      dosage: {
        "short": "150–300 mg týdně intramuskulárně (extrémní substance)",
        "long": "Aplikuje se hluboko do svalu v dávce 150 až 300 mg týdně (např. 76 mg 2x týdně nebo 150 mg jednou za 5 dní) po dobu maximálně 8–10 týdnů. Vždy vyžaduje testosteronový základ."
      },
      warning: "Mimořádně silná substance s vysokou neurotoxicitou a kardiovaskulární zátěží! Způsobuje nespavost, noční pocení ('tren-sweats'), zvýšení prolaktinu a psychickou podrážděnost. Striktně zakázaný doping.",
      mechanism: "Vysokoafinitní vazba na androgenní receptor; vazba na progesteronové receptory; stimulace lokální syntézy IGF-1 ve svalech a inhibice vazby glukokortikoidů (kortizolu) na jejich receptory.",
      halfLife: "Cca 10–14 dní",
      interactions: [
        "Kabergolin / Pramipexol (ochrana před prolaktinovou gynekomastií)",
        "Testosteron (nutný fyziologický základ)"
      ],
      naturalSources: ["syntetický 19-nor steroid"],
      bannedStatus: "banned-sport (WADA S1), kontrolovaná substance"
    },
    {
      id: 822,
      name: "Methenolon Acetát (Primobolan orální)",
      categoryKey: "steroids",
      tags: ["steroid", "primobolan", "acetat", "oralni", "bez-17aa", "bezpecnost"],
      rating: 4,
      colorType: "yellow",
      shortDesc: "Bezpečný ne-alkylovaný perorální steroid chránící svaly před katabolismem při dietě.",
      description: "Methenolon Acetát (orální Primobolan) je perorální dihydrotestosteronový (DHT) derivát vyvinutý společností Schering. Je jedním z mála orálních steroidů, který NENÍ 17-alfa-alkylovaný (jeho biologická dostupnost je zajištěna 1-methylovou skupinou a 17-beta acetátovým esterem), což znamená, že prakticky nezatěžuje játra. Byl oblíbeným steroidem zlaté éry kulturistiky (včetně Arnolda Schwarzeneggera) pro rýsovací fáze. Vyniká schopností chránit svalovou hmotu před katabolismem i při extrémním kalorickém deficitu bez retence vody.",
      effects: [
        "vynikající ochrana čisté svalové hmoty v přísné redukční dietě",
        "minimální jaterní toxicita (není 17-alfa-alkylovaný)",
        "nulová konverze na estrogeny a nulové riziko gynekomastie",
        "zlepšení imunitního systému a retence dusíku",
        "velmi mírný vliv na krevní tlak a vlastní hormonální osu"
      ],
      dosage: {
        "short": "50–100 mg denně perorálně s jídlem",
        "long": "Běžná dávka je 50 až 100 mg denně rozděleně do 2 dávek s jídlem po dobu 6–8 týdnů. U žen se využívá opatrné dávkování 10–25 mg denně."
      },
      warning: "Vyšší finanční nákladnost a vysoký výskyt padělků na černém trhu. Vyžaduje vyšší miligramové dávkování oproti injekčnímu enanthátu.",
      mechanism: "Vazba na androgenní receptor s vysokou retencí dusíku v buňkách; nemožnost aromatizace na estrogeny.",
      halfLife: "Cca 5–6 hodin",
      interactions: [
        "Testosteron (synergický základ cyklu)",
        "Oxandrolon (oblíbená rýsovací kombinace bez retence vody)"
      ],
      naturalSources: ["syntetický 1-methylovaný derivát DHT"],
      bannedStatus: "banned-sport (WADA S1), na lékařský předpis"
    },
    {
      id: 823,
      name: "Methyltestosteron",
      categoryKey: "steroids",
      tags: ["steroid", "methyltestosteron", "historie", "agrese", "sila", "17aa"],
      rating: 3,
      colorType: "red",
      shortDesc: "Historicky první syntetický perorální 17-alfa-alkylovaný androgen s vysokou agresivitou.",
      description: "Methyltestosteron (chemicky 17alfa-methyltestosteron) byl syntetizován v roce 1935 a stal se historicky vůbec prvním perorálně aktivním syntetickým anabolickým androgenním steroidem na světě. Přidáním 17-alfa-methylové skupiny byl testosteron ochráněn před rychlou degradací v játrech. Má velmi silné androgenní a centrální stimulační účinky. Rychle aromatizuje na vysoce potentní 17-alfa-methylestradiol (který je odolný vůči rozkladu a způsobuje masivní retenci vody a gynekomastii). Dnes se používá zřídka, převážně pro okamžité zvýšení agresivity před zápasem.",
      effects: [
        "historicky první perorálně biologicky dostupný androgen",
        "rychlý nástup agresivity a centrální nervové motivace před zátěží",
        "okamžité zvýšení síly a libida",
        "masivní nárůst retence dusíku",
        "historický a výzkumný význam v endokrinologii"
      ],
      dosage: {
        "short": "10–25 mg sublinguálně nebo perorálně před výkonem",
        "long": "Užívá se 10 až 25 mg přibližně 30–45 minut před sportovním či bojovým výkonem. Z důvodu vysoké toxicity a estrogenní konverze se neužívá souvisle déle než 2–3 týdny."
      },
      warning: "Vysoká jaterní toxicita (17aa)! Konvertuje na 17alfa-methylestradiol, který způsobuje těžkou gynekomastii a zadržování vody. Způsobuje psychickou podrážděnost a akné. WADA zakazuje ve sportu.",
      mechanism: "Přímá aktivace androgenního receptoru v mozku a svalech; aromatizace enzymem CYP19A1 na biologicky vysoce rezistentní 17alfa-methylestradiol.",
      halfLife: "Cca 2.5–3 hodiny",
      interactions: [
        "Inhibitory aromatázy (Arimidex / Letrozol – nutnost při jakémkoliv užití)",
        "TUDCA (ochrana jater před 17aa zátěží)"
      ],
      naturalSources: ["syntetický 17aa testosteronový derivát"],
      bannedStatus: "banned-sport (WADA S1), na lékařský předpis"
    }
  ],

  // === HORMONES & ENDOCRINE REGULATORS (3 compounds: 568-570) ===
  hormones: [
    {
      id: 568,
      name: "Kisspeptin-54 (Metastin)",
      categoryKey: "hormones",
      tags: ["hormon", "peptid", "kisspeptin", "GnRH", "LH", "plodnost", "HPTA"],
      rating: 5,
      colorType: "green",
      shortDesc: "Přirozený 54-aminokyselinový prekurzor řídící pulzní sekreci GnRH a celou osu fertility.",
      description: "Kisspeptin-54 (původně známý jako Metastin) je přirozený 54-aminokyselinový peptidový hormon kódovaný genem KISS1. Představuje 'hlavní vypínač' celého lidského reprodukčního systému. Působí na kisspeptinové receptory (KISS1R / GPR54) v hypotalamu, kde přímo řídí a koordinuje pulzní uvolňování gonadoliberinu (GnRH). Na rozdíl od kratšího fragmentu Kisspeptin-10 má Kisspeptin-54 podstatně delší biologický poločas v krevním řečišti, vyvolává mohutnější a fyziologičtější pulzy LH a FSH a v klinických reprodukčních studiích se využívá k bezpečnému spuštění ovulace bez rizika ovariálního hyperstimulačního syndromu (OHSS).",
      effects: [
        "nejvyšší fyziologický regulátor osy hypotalamus-hypofýza-gonády (HPTA)",
        "stimulace pulzního uvolňování GnRH s následným vyplavením LH a FSH",
        "obnova fertility a přirozené tvorby testosteronu u hypogonadismu",
        "bezpečné spuštění ovulace a zrání folikulů v asistované reprodukci",
        "delší poločas rozpadu a stabilnější odezva oproti Kisspeptinu-10"
      ],
      dosage: {
        "short": "6.4–9.6 nmol/kg subkutánně (klinické protokoly)",
        "long": "V klinických studiích asistované reprodukce a endokrinologie: subkutánní injekce předplněným roztokem v dávce 6.4 až 9.6 nmol/kg tělesné hmotnosti. V biohackingu je zkoumán pro bezpečný restart hormonální osy."
      },
      warning: "Výzkumná a klinická substance. Dlouhodobé kontinuální podávání vysokých dávek může vést k desenzitizaci receptoru KISS1R (musí být podáván pulzně nebo krátkodobě).",
      mechanism: "Vazba na G-protein spřažený receptor KISS1R (GPR54) na GnRH neuronech v nucleus arcuatus a preoptické oblasti hypotalamu; aktivace Gq/11 proteinu, stimulace fosfolipázy C (PLC) a influx Ca2+ vedoucí k exocytóze GnRH.",
      halfLife: "Cca 28–32 minut (výrazně delší než Kisspeptin-10 s poločasem cca 4 minuty)",
      interactions: [
        "GnRH a Gonadotropiny (přímá fyziologická kaskáda)",
        "Enclomifen (synergická stimulace hypotalamo-hypofyzární osy)"
      ],
      naturalSources: ["endogenní lidský peptid kódovaný genem KISS1 v hypotalamu"],
      bannedStatus: "banned-sport (WADA S2.2.3), výzkumná substance"
    },
    {
      id: 569,
      name: "IGF-BP3 (Insulin-Like Growth Factor Binding Protein 3)",
      categoryKey: "hormones",
      tags: ["hormon", "protein", "IGF-1", "nosic", "stabilita", "HGH", "biomarker"],
      rating: 5,
      colorType: "green",
      shortDesc: "Hlavní cirkulující nosičový protein vázající přes 80 % IGF-1 a řídící jeho biologickou dostupnost.",
      description: "IGF-BP3 (Insulin-like Growth Factor Binding Protein 3) je hlavní vazebný glykoprotein ze skupiny šesti známých IGF-vazebných proteinů. V krevním oběhu vytváří vysokomolekulární ternární komplex (společně s molekulou IGF-1 a acid-labilní podjednotkou ALS). Tento komplex váže více než 80 až 90 % veškerého cirkulujícího IGF-1 v lidském těle. Chrání IGF-1 před předčasným enzymatickým rozkladem (prodlužuje jeho poločas z pouhých 10 minut na více než 16 hodin) a slouží jako nejdůležitější stabilní krevní biomarker sekrece růstového hormonu (HGH), protože na rozdíl od samotného HGH nepodléhá pulzním výkyvům.",
      effects: [
        "prodloužení biologického poločasu IGF-1 v krevním oběhu z minut na 16–20 hodin",
        "hlavní stabilní laboratorní biomarker celkové sekrece růstového hormonu",
        "řízená tkáňově specifická distribuce a pomalé uvolňování IGF-1 do svalů a kostí",
        "nezávislý antiproliferativní a proapoptotický účinek na poškozené nádorové buňky",
        "regulace inzulínové senzitivity a metabolické homeostázy"
      ],
      dosage: {
        "short": "Laboratorní diagnostický biomarker (odběr žilní krve z krevního séra)",
        "long": "Fyziologické referenční rozmezí u dospělých: přibližně 3.5–7.0 mg/l (mikrogramů/ml). Hladina klesá při deficitu růstového hormonu, podvýživě a stárnutí. Zkoumán jako rekombinantní lék SomatoKine (komplex rhIGF-1/rhIGFBP-3)."
      },
      warning: "Endogenní regulační protein a klíčový biomarker. Samotná suplementace volného IGF-1 bez dostatku IGF-BP3 vede k hypoglykémii a rychlé degradaci.",
      mechanism: "Tvorba 150-kDa ternárního komplexu IGF-1/IGFBP-3/ALS; vazba na specifické jaderné a membránové receptory nezávislé na IGF-1R, indukce apoptózy mutovaných buněk přes dráhu p53.",
      halfLife: "Ternární komplex má poločas eliminace cca 16–20 hodin",
      interactions: [
        "HGH (Růstový hormon přímo stimuluje syntézu IGF-BP3 v hepatocytech)",
        "IGF-1 (přirozený vazebný partner)"
      ],
      naturalSources: ["endogenní glykoprotein syntetizovaný v játrech"],
      bannedStatus: "legal (endogenní biomarker), rekombinantní formy zakázány WADA S2"
    },
    {
      id: 570,
      name: "BNP (B-typ natriuretický peptid)",
      categoryKey: "hormones",
      tags: ["hormon", "peptid", "srdce", "komory", "tlak", "biomarker", "hypertrofie"],
      rating: 5,
      colorType: "green",
      shortDesc: "Srdeční komorový hormon vylučovaný při přetížení myokardu – nejdůležitější biomarker selhání srdce.",
      description: "BNP (Brain Natriuretic Peptide / B-typ natriuretický peptid) je 32-aminokyselinový peptidový hormon syntetizovaný a vylučovaný převážně kardiomyocyty srdečních komor v přímé reakci na zvýšené napětí komorové stěny (wall stress) a objemové či tlakové přetížení srdce. Působí jako přirozený obranný mechanismus: stimuluje vylučování sodíku a vody ledvinami (natriuréza a diuréza), rozšiřuje periferní cévy a tlumí sympatický systém a systém RAAS. V kardiologii a u těžce trénujících atletů užívajících anabolika je měření NT-proBNP / BNP klíčovým zlatým standardem pro včasné odhalení hypertrofie a přetížení levé komory srdeční.",
      effects: [
        "nejcitlivější klinický krevní biomarker přetížení myokardu a srdečního selhání",
        "fyziologické snížení krevního tlaku systémovou vazodilatací cév",
        "stimulace vylučování přebytečného sodíku a vody ledvinami (natriuréza)",
        "potlačení škodlivého vlivu renin-angiotenzin-aldosteronového systému (RAAS)",
        "antifibrotický a antihypertrofický ochranný účinek na srdeční svalovinu"
      ],
      dosage: {
        "short": "Laboratorní diagnostický biomarker z krve (hodnota pod 100 pg/ml = fyziologická)",
        "long": "Klinické referenční hodnoty: BNP pod 100 pg/ml (nebo NT-proBNP pod 125 pg/ml) vylučuje srdeční selhání. Hodnoty nad 300–400 pg/ml indikují závažné komorové přetížení a vyžadují okamžité kardiologické echo vyšetření."
      },
      warning: "Klíčový kardiální biomarker! U sportovců užívajících anabolické steroidy signalizuje vzestup BNP nebezpečné zbytnění myokardu (koncentrickou hypertrofii levé komory) a vyžaduje redukci dávek a normalizaci krevního tlaku.",
      mechanism: "Vazba na natriuretický peptidový receptor A (NPR-A) v cévním endotelu a renálních tubulech; aktivace vázané guanylylcyklázy a prudké zvýšení intracelulárního cGMP; relaxace hladké svaloviny a blokáda reabsorpce Na+.",
      halfLife: "Cca 20 minut (stabilnější neaktivní fragment NT-proBNP má poločas cca 60–120 minut)",
      interactions: [
        "Telmisartan a Nebivolol (snižují srdeční afterload a normalizují hladinu BNP)",
        "Spironolakton (aditivní natriuréza a ochrana myokardu)"
      ],
      naturalSources: ["endogenní hormon syntetizovaný v kardiomyocytech srdečních komor"],
      bannedStatus: "legal (endogenní diagnostický biomarker)"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = wave3Data;
}
