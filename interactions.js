/**
 * SuppleZ Interactions & Circadian Rules Engine (interactions.js)
 * Algoritmus pro analýzu synergií, časových kompetic a rizikových interakcí
 * a automatické sestavení cirkadiánního rozvrhu suplementace.
 */

const SYNERGIES = [
    {
        id: 'caffeine_theanine',
        items: ['kofein', 'theanin'],
        title: 'Kofein + L-Theanin',
        mechanism: 'Klasický nootropní stack. L-Theanin antagonizuje periferní vazokonstrikci a tachykardii způsobenou kofeinem, eliminuje třes a úzkost, přičemž zanechává čisté a klidné soustředění se zvýšenou alfa aktivitou v mozku.',
        tags: ['kognice', 'focus', 'alertness']
    },
    {
        id: 'd3_k2_mg',
        items: ['vitamín d3', 'vitamín k2'],
        title: 'Vitamín D3 + Vitamín K2 (MK-7)',
        mechanism: 'D3 dramaticky zvyšuje střevní absorpci vápníku. Vitamín K2 (menachinon-7) aktivuje osteokalcin a matrix Gla protein (MGP), které směrují vápník přímo do kostí a zubů a zabraňují nebezpečné kalcifikaci cév a měkkých tkání.',
        tags: ['kosti', 'kardiovaskulární zdraví', 'synergie']
    },
    {
        id: 'd3_magnesium',
        items: ['vitamín d3', 'magnesium'],
        title: 'Vitamín D3 + Hořčík (Magnesium)',
        mechanism: 'Všechny enzymy metabolizující vitamín D na jeho aktivní formu 1,25-dihydroxyvitamín D vyžadují hořčík jako kofaktor. Bez dostatku hořčíku zůstává D3 neaktivní a může docházet k vyčerpání zásob hořčíku.',
        tags: ['imunita', 'hormony', 'kofaktor']
    },
    {
        id: 'creatine_carbs',
        items: ['kreatin', 'citrullin'],
        title: 'Kreatin + Citrulin Malát',
        mechanism: 'Citrulin zvyšuje syntézu oxidu dusnatého (NO), rozšiřuje cévy a maximalizuje prokrvení svalové tkáně. Tím se urychluje transport a nasycení svalových buněk fosfokreatinem před zátěží.',
        tags: ['výkon', 'pumpa', 'atp']
    },
    {
        id: 'omega3_curcumin',
        items: ['omega-3', 'kurkumin'],
        title: 'Omega-3 + Kurkumin',
        mechanism: 'Kurkumin je vysoce lipofilní a bez přítomnosti tuků má minimální absorpci. Mastné kyseliny EPA/DHA vytvářejí micelární prostředí a synergicky potlačují transkripční faktor NF-kB a zánětlivé cytokiny TNF-alfa a IL-6.',
        tags: ['zánět', 'klouby', 'kardioprotekce']
    },
    {
        id: 'zinc_copper',
        items: ['zinek', 'měď'],
        title: 'Zinek + Měď (vyvážený poměr)',
        mechanism: 'Užívání zinku dlouhodobě indukuje střevní protein metallothionein, který má vyšší afinitu k mědi a může vést k jejímu deficitu a anémii. Společné vyvážené užívání v poměru 10:1 až 15:1 zachovává enzymatickou rovnováhu.',
        tags: ['imunita', 'minerály', 'enzymy']
    },
    {
        id: 'happy_stack',
        items: ['cholin', 'uridin'],
        title: 'Cholin (Alfa-GPC / Citicolin) + Uridin',
        mechanism: 'Základ známého Mr. Happy Stacku. Uridin a cholin stimulují syntézu fosfatidylcholinu v neurálních membránách (Kennedyho cyklus), podporují synaptogenezi a zvyšují hustotu dopaminových D2 receptorů.',
        tags: ['neuroplasticita', 'dopamin', 'paměť']
    },
    {
        id: 'ashwa_magnesium',
        items: ['ashwagandha', 'magnesium'],
        title: 'Ashwagandha + Magnesium (Bisglycinát)',
        mechanism: 'Dvojitá regulace stresové osy HPA. Ashwagandha snižuje hladinu sérového kortizolu a senzibilizuje GABA receptory, zatímco chelátovaný hořčík blokuje excitotoxicitu NMDA receptorů a navozuje hlubokou svalovou relaxaci.',
        tags: ['spánek', 'stres', 'kortizol']
    },
    {
        id: 'bpc_tb500',
        items: ['bpc-157', 'tb-500'],
        title: 'BPC-157 + TB-500 (Regenerační protokol)',
        mechanism: 'Nejvýkonnější peptidový regenerační stack. BPC-157 upreguluje růstové faktory VEGF a stimuluje angiogenezi (tvorbu nových cév), zatímco TB-500 (Thymosin Beta-4) reguluje aktin a buněčnou migraci do poškozených šlach a svalů.',
        tags: ['peptidy', 'hojení', 'šlachy']
    },
    {
        id: 'glycine_nac',
        items: ['glycin', 'nac'],
        title: 'Glycin + NAC (GlyNAC)',
        mechanism: 'Kombinace tvoří přímé prekurzory pro syntézu glutathionu – hlavního buněčného antioxidantu v lidském těle. Klinické studie prokazují obnovu mitochondriální funkce a snížení oxidačního stresu.',
        tags: ['longevity', 'mitochondrie', 'detoxikace']
    },
    {
        id: 'tongkat_boron',
        items: ['tongkat ali', 'bor'],
        title: 'Tongkat Ali + Bór',
        mechanism: 'Duální optimalizace volného testosteronu. Eurycomanon stimuluje Leydigovy buňky a bór prokazatelně sráží hladinu SHBG v krevní plazmě, čímž maximalizuje biologicky aktivní frakci volného testosteronu.',
        tags: ['hormony', 'testosteron', 'SHBG', 'vitalita']
    },
    {
        id: 'cjc_ipamorelin',
        items: ['cjc-1295', 'ipamorelin'],
        title: 'CJC-1295 (Mod GRF 1-29) + Ipamorelin',
        mechanism: 'Dokonalý synergický peptidový stack pro růstový hormon. GHRH analog (CJC) otevírá receptorová stavidla v adenohypofýze a GHRP agonista ghrelinu (Ipamorelin) spouští mohutný fyziologický pulz HGH bez stimulace kortizolu či prolaktinu.',
        tags: ['peptidy', 'HGH', 'regenerace', 'spánek']
    },
    {
        id: 'semax_selank',
        items: ['semax', 'selank'],
        title: 'Semax + Selank (Neurokognitivní stack)',
        mechanism: 'Ruský nootropní zlatý standard. Semax dramaticky stimuluje BDNF, pozornost a mentální energii, zatímco Selank přes modulaci GABA odstraňuje úzkost, stres a roztěkanost bez sedace.',
        tags: ['nootropika', 'BDNF', 'klid', 'paměť']
    },
    {
        id: 'spermidine_nmn',
        items: ['spermidin', 'nmn'],
        title: 'Spermidin + NMN / Resveratrol',
        mechanism: 'Komplexní buněčné omlazení. NMN zvyšuje hladinu NAD+ pro aktivaci sirtuinů a opravy DNA enzymy PARP, zatímco spermidin spouští masivní buněčnou autofagii a recyklaci poškozených mitochondrií.',
        tags: ['longevity', 'autofagie', 'sirtuiny', 'buňky']
    }
];

const TIMING_CONFLICTS = [
    {
        id: 'calcium_magnesium',
        items: ['vápník', 'magnesium'],
        title: 'Vápník a Hořčík ve stejnou chvíli',
        conflict: 'Soutěž o absorpční transportní systémy v tenkém střevě při vysokých dávkách (>250 mg).',
        advice: 'Rozdělte podání: Vápník užívejte dopoledne s jídlem, Hořčík večer před spaním.'
    },
    {
        id: 'zinc_iron',
        items: ['zinek', 'železo'],
        title: 'Zinek a Železo současně',
        conflict: 'Zinek a železo sdílejí divalentní kovový transportér DMT-1. Současné podání snižuje vstřebávání obou minerálů až o 40 %.',
        advice: 'Užívejte s časovým odstupem alespoň 2–3 hodin.'
    },
    {
        id: 'caffeine_sleep',
        items: ['kofein', 'melatonin'],
        title: 'Kofein a Melatonin / Látky na spánek',
        conflict: 'Kofein je silný antagonista adenosinových receptorů A1 a A2A s poločasem 5–7 hodin. Přímý protichůdný efekt vůči spánkovým modulátorům.',
        advice: 'Ukončete příjem kofeinu minimálně 8–10 hodin před plánovaným usnutím.'
    },
    {
        id: 'tyrosine_protein',
        items: ['l-tyrosin', 'protein'],
        title: 'L-Tyrosin s velkým bílkovinným jídlem',
        conflict: 'Velké neutrální aminokyseliny (LNAA) z jídla soutěží s tyrosinem o stejný transportér přes hematoencefalickou bariéru (BBB).',
        advice: 'Užívejte L-Tyrosin vždy 30 minut před jídlem nalačno pro maximální průnik do mozku.'
    },
    {
        id: 'caffeine_creatine',
        items: ['kofein', 'kreatin'],
        title: 'Vysoké dávky Kofeinu s Kreatinem bezprostředně před zátěží',
        conflict: 'Akutní vysoké dávky kofeinu (>5 mg/kg) mohou u citlivých jedinců interferovat se svalovou relaxační fází podporovanou fosfokreatinem.',
        advice: 'Kreatin užívejte stabilně ráno nebo po tréninku, kofein pouze jako akutní stimulant před výkonem.'
    }
];

const CRITICAL_WARNINGS = [
    {
        id: 'serotonin_syndrome',
        items: ['5-htp', 'l-tryptofan', 'antidepresiva', 'ssri'],
        title: 'Riziko serotoninového syndromu (5-HTP)',
        warning: 'Kombinace 5-HTP s inhibitory zpětného vychytávání serotoninu (SSRI, SNRI) nebo inhibitory MAO může vyvolat život ohrožující serotoninový syndrom (třes, hypertermie, arytmie).',
        severity: 'high'
    },
    {
        id: 'yohimbine_stimulants',
        items: ['yohimbin', 'kofein', 'synefrin', 'klenbuterol'],
        title: 'Nadměrná kardiovaskulární zátěž (Yohimbin)',
        warning: 'Yohimbin blokuje presynaptické alfa-2 adrenergní receptory, což násobně zvyšuje uvolňování noradrenalinu. V kombinaci s vysokými dávkami stimulantů hrozí těžká tachykardie, palpitace a hypertenzní krize.',
        severity: 'high'
    },
    {
        id: 'berberine_hypoglycemia',
        items: ['berberin', 'metformin', 'inzulin'],
        title: 'Riziko akutní hypoglykémie (Berberin)',
        warning: 'Berberin je silný aktivátor AMPK s účinností srovnatelnou s farmakologickými antidiabetiky. Při kombinaci s léky snižujícími glukózu hrozí nebezpečný propad krevního cukru.',
        severity: 'medium'
    },
    {
        id: 'modafinil_contraception',
        items: ['modafinil', 'antikoncepce'],
        title: 'Snížení účinnosti hormonální antikoncepce (Modafinil)',
        warning: 'Modafinil je silný induktor jaterního enzymu CYP3A4/5, který urychluje odbourávání ethinylestradiolu a progestinů. Riziko selhání perorální antikoncepce.',
        severity: 'high'
    },
    {
        id: 'wada_banned',
        items: ['sarms', 'peptid', 'secretagogue', 'steroid', 'modafinil', 'phenylpiracetam'],
        title: 'Pozor: Látka na seznamu zakázaných látek WADA',
        warning: 'Tato kombinace obsahuje látky zařazené na antidopingový seznam WADA (kategorie S1, S2 nebo S6). Zakázáno pro registrované soutěžní sportovce.',
        severity: 'medium'
    }
];

// Cirkadiánní pravidla časování suplementů
const CIRCADIAN_RULES = {
    morning_fasted: {
        label: 'Ráno nalačno',
        icon: 'wb_twilight',
        timeHint: 'Ihned po probuzení, 30 min před jídlem',
        color: 'var(--ui-accent)',
        keywords: ['tyrosin', 'b-komplex', 'alcar', 'karnitin', 'bpc-157', 'glutamin', 'jód'],
        reason: 'Vyžaduje kyselé prostředí žaludku a absenci soutěžících aminokyselin z potravy.'
    },
    morning_with_food: {
        label: 'Dopoledne / Se snídaní s tuky',
        icon: 'restaurant',
        timeHint: 'Společně s prvním jídlem obsahujícím lipidy',
        color: 'var(--neon-green)',
        keywords: ['vitamín d3', 'vitamín k2', 'omega-3', 'coenzyme q10', 'kurkumin', 'cholin', 'křemík', 'selen'],
        reason: 'Lipofilní látky vyžadují přítomnost žlučových kyselin a dietního tuku pro vstřebání.'
    },
    pre_workout: {
        label: 'Před tréninkem / Odpolední fokus',
        icon: 'bolt',
        timeHint: '30–45 minut před fyzickým nebo duševním výkonem',
        color: 'var(--neon-yellow)',
        keywords: ['kofein', 'citrullin', 'beta-alanin', 'alfa-gpc', 'rhodiola', 'phenylpiracetam', 'noopept'],
        reason: 'Vrchol plazmatické koncentrace (Tmax) a vazodilatační stimulace v době maximální zátěže.'
    },
    evening_sleep: {
        label: 'Večer / Před spaním',
        icon: 'bedtime',
        timeHint: '30–60 minut před ulehnutím do postele',
        color: '#bf5af2',
        keywords: ['magnesium', 'glycin', 'apigenin', 'melatonin', 'ashwagandha', 'gaba', 'tryptofan', 'cbd'],
        reason: 'Aktivace parasympatiku, modulace GABA receptorů a podpora architektury hlubokého spánku.'
    }
};

const PRESET_STACKS = [
    {
        id: 'cognitive_focus',
        name: 'Soustředění & Kognice',
        desc: 'Čistý fokus bez nervozity, podpora acetylcholinu a neuroplasticity.',
        items: [
            { id: 203, name: 'Kofein (Anhydrous)' },
            { id: 300, name: 'L-Theanin' },
            { id: 600, name: 'Alfa-GPC' },
            { id: 610, name: 'Uridin Monofosfát' }
        ]
    },
    {
        id: 'deep_sleep',
        name: 'Hluboký spánek & Regenerace',
        desc: 'Optimalizace GABA, zklidnění CNS a podpora spánkové architektury.',
        items: [
            { id: 102, name: 'Magnesium (Bisglycinát)' },
            { id: 302, name: 'Glycin' },
            { id: 310, name: 'Apigenin' },
            { id: 305, name: 'Ashwagandha (KSM-66)' }
        ]
    },
    {
        id: 'vitality_base',
        name: 'Denní základ & Dlouhověkost',
        desc: 'Esenciální mikronutrienty pro buněčnou integritu, imunitu a kosti.',
        items: [
            { id: 100, name: 'Vitamín D3 (Cholecalciferol)' },
            { id: 103, name: 'Vitamín K2 (MK-7)' },
            { id: 101, name: 'Omega-3 (EPA/DHA)' },
            { id: 104, name: 'Zinek (Bisglycinát)' }
        ]
    },
    {
        id: 'athletic_power',
        name: 'Sportovní výkon & Prokrvení',
        desc: 'Recyklace ATP, vazodilatace a oddálení svalového zakyselení.',
        items: [
            { id: 200, name: 'Kreatin Monohydrát' },
            { id: 202, name: 'Citrullin Malát (2:1)' },
            { id: 201, name: 'Beta-Alanin' },
            { id: 111, name: 'Coenzyme Q10 (Ubiquinol)' }
        ]
    },
    {
        id: 'peptide_recovery',
        name: 'Peptidová regenerace (Wolverine)',
        desc: 'Špičkový protokol pro hojení šlach, svalů, cév a obnovu kolagenu.',
        items: [
            { id: 700, name: 'BPC-157' },
            { id: 701, name: 'TB-500 (Thymosin Beta-4 fragment)' },
            { id: 702, name: 'GHK-Cu (Měďnatý tripeptid)' }
        ]
    },
    {
        id: 'cellular_longevity',
        name: 'Buněčná dlouhověkost & Autofagie',
        desc: 'Podpora sirtuinů, mitochondrií, epigenetických enzymů a buněčné očisty.',
        items: [
            { id: 120, name: 'NMN (Nikotinamid Mononukleotid)' },
            { id: 124, name: 'Spermidin' },
            { id: 121, name: 'Resveratrol (Trans-Resveratrol)' },
            { id: 126, name: 'Ca-AKG (Alfa-ketoglutarát vápenatý)' }
        ]
    }
];

function normalizeStr(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Prozkoumá seznam vybraných položek ve stacku a vrátí nalezené synergie, kompetice a varování.
 */
function analyzeStackInteractions(selectedItems) {
    if (!Array.isArray(selectedItems) || selectedItems.length < 2) {
        return {
            synergies: [],
            conflicts: [],
            warnings: [],
            totalIssues: 0
        };
    }

    const normalizedNames = selectedItems.map(item => normalizeStr(item.name || item));

    // Kontrola synergií
    const foundSynergies = SYNERGIES.filter(syn => {
        return syn.items.every(requiredItem => {
            const reqNorm = normalizeStr(requiredItem);
            return normalizedNames.some(name => name.includes(reqNorm));
        });
    });

    // Kontrola časových kompetic
    const foundConflicts = TIMING_CONFLICTS.filter(conf => {
        return conf.items.every(requiredItem => {
            const reqNorm = normalizeStr(requiredItem);
            return normalizedNames.some(name => name.includes(reqNorm));
        });
    });

    // Kontrola kritických varování
    const foundWarnings = CRITICAL_WARNINGS.filter(warn => {
        let matchCount = 0;
        warn.items.forEach(requiredItem => {
            const reqNorm = normalizeStr(requiredItem);
            if (normalizedNames.some(name => name.includes(reqNorm))) {
                matchCount++;
            }
        });
        return matchCount >= 2;
    });

    return {
        synergies: foundSynergies,
        conflicts: foundConflicts,
        warnings: foundWarnings,
        totalIssues: foundConflicts.length + foundWarnings.length
    };
}

/**
 * Rozřadí vybrané látky do 4 časových bloků dne.
 */
function buildCircadianSchedule(selectedItems) {
    const schedule = {
        morning_fasted: { rule: CIRCADIAN_RULES.morning_fasted, items: [] },
        morning_with_food: { rule: CIRCADIAN_RULES.morning_with_food, items: [] },
        pre_workout: { rule: CIRCADIAN_RULES.pre_workout, items: [] },
        evening_sleep: { rule: CIRCADIAN_RULES.evening_sleep, items: [] }
    };

    if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
        return schedule;
    }

    selectedItems.forEach(item => {
        const normName = normalizeStr(item.name);
        let assigned = false;

        // Kontrola večerního spánku
        if (!assigned && CIRCADIAN_RULES.evening_sleep.keywords.some(k => normName.includes(k))) {
            schedule.evening_sleep.items.push(item);
            assigned = true;
        }

        // Kontrola předtréninkových stimulantů
        if (!assigned && CIRCADIAN_RULES.pre_workout.keywords.some(k => normName.includes(k))) {
            schedule.pre_workout.items.push(item);
            assigned = true;
        }

        // Kontrola ranního nalačno
        if (!assigned && CIRCADIAN_RULES.morning_fasted.keywords.some(k => normName.includes(k))) {
            schedule.morning_fasted.items.push(item);
            assigned = true;
        }

        // Kontrola se snídaní s tuky
        if (!assigned && CIRCADIAN_RULES.morning_with_food.keywords.some(k => normName.includes(k))) {
            schedule.morning_with_food.items.push(item);
            assigned = true;
        }

        // Výchozí zařazení, pokud nespadá do žádného vyhraněného pravidla
        if (!assigned) {
            schedule.morning_with_food.items.push(item);
        }
    });

    return schedule;
}

// Export do globálního prostoru pro klientský prohlížeč
window.SuppleZ_Interactions = {
    SYNERGIES,
    TIMING_CONFLICTS,
    CRITICAL_WARNINGS,
    CIRCADIAN_RULES,
    PRESET_STACKS,
    analyzeStackInteractions,
    buildCircadianSchedule
};
