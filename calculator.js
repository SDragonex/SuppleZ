/**
 * SuppleZ Peptide Reconstitution Calculator (calculator.js)
 * Interaktivní výpočet ředění peptidů a vizuální vykreslení inzulínové stříkačky.
 */

class PeptideCalculator {
    constructor() {
        this.vialMg = 5;
        this.waterMl = 2;
        this.doseMcg = 250;
        this.syringeType = 'u100_1ml'; // 'u100_1ml', 'u100_05ml', 'u100_03ml', 'u40_1ml'
    }

    calculate() {
        const totalMcg = (this.vialMg || 0) * 1000;
        const waterMl = this.waterMl || 1;
        const doseMcg = this.doseMcg || 0;

        const concentrationMcgPerMl = waterMl > 0 ? (totalMcg / waterMl) : 0;
        const doseVolumeMl = concentrationMcgPerMl > 0 ? (doseMcg / concentrationMcgPerMl) : 0;

        let maxUnits = 100;
        let unitsPerMl = 100;

        if (this.syringeType === 'u100_1ml') {
            maxUnits = 100;
            unitsPerMl = 100;
        } else if (this.syringeType === 'u100_05ml') {
            maxUnits = 50;
            unitsPerMl = 100;
        } else if (this.syringeType === 'u100_03ml') {
            maxUnits = 30;
            unitsPerMl = 100;
        } else if (this.syringeType === 'u40_1ml') {
            maxUnits = 40;
            unitsPerMl = 40;
        }

        const units = doseVolumeMl * unitsPerMl;
        const totalDoses = doseMcg > 0 ? Math.floor(totalMcg / doseMcg) : 0;

        return {
            totalMcg,
            concentrationMcgPerMl: Math.round(concentrationMcgPerMl),
            doseVolumeMl: parseFloat(doseVolumeMl.toFixed(3)),
            units: parseFloat(units.toFixed(1)),
            maxUnits,
            unitsPerMl,
            totalDoses,
            isOverflow: units > maxUnits
        };
    }

    renderSvgSyringe(calcResults) {
        const maxUnits = calcResults.maxUnits;
        const targetUnits = Math.min(Math.max(calcResults.units, 0), maxUnits);
        const fillPercentage = maxUnits > 0 ? (targetUnits / maxUnits) : 0;

        // Geometrie horizontální stříkačky
        const svgWidth = 650;
        const svgHeight = 120;
        const barrelStartX = 80;
        const barrelEndX = 540;
        const barrelWidth = barrelEndX - barrelStartX;
        const barrelTopY = 25;
        const barrelHeight = 70;

        // Pozice naplnění tekutiny (zleva doprava)
        const fillWidth = barrelWidth * fillPercentage;
        const plungerX = barrelStartX + fillWidth;

        // Generování rysek
        let ticksHtml = '';
        const step = maxUnits <= 50 ? 5 : 10;
        for (let u = 0; u <= maxUnits; u += (step / 5)) {
            const x = barrelStartX + (u / maxUnits) * barrelWidth;
            const isMajor = (u % step === 0);
            const isMedium = (u % (step / 2) === 0);
            const tickH = isMajor ? 18 : (isMedium ? 12 : 7);

            ticksHtml += `<line x1="${x}" y1="${barrelTopY}" x2="${x}" y2="${barrelTopY + tickH}" stroke="#888" stroke-width="${isMajor ? 2 : 1}" />`;
            ticksHtml += `<line x1="${x}" y1="${barrelTopY + barrelHeight}" x2="${x}" y2="${barrelTopY + barrelHeight - tickH}" stroke="#888" stroke-width="${isMajor ? 2 : 1}" />`;

            if (isMajor && u > 0 && u < maxUnits) {
                ticksHtml += `<text x="${x}" y="${barrelTopY + (barrelHeight / 2) + 4}" fill="#aaa" font-size="11" font-family="'Rajdhani', sans-serif" font-weight="600" text-anchor="middle">${u}</text>`;
            }
        }

        return `
        <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="syringe-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fluidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#00f3ff" stop-opacity="0.8" />
                    <stop offset="100%" stop-color="#00ff41" stop-opacity="0.9" />
                </linearGradient>
                <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            <!-- Jehla a koncovka -->
            <line x1="15" y1="60" x2="65" y2="60" stroke="#ccc" stroke-width="2" stroke-linecap="round" />
            <polygon points="65,52 80,48 80,72 65,68" fill="#555" stroke="#777" />

            <!-- Tělo stříkačky (Barrel) -->
            <rect x="${barrelStartX}" y="${barrelTopY}" width="${barrelWidth}" height="${barrelHeight}" rx="4" fill="#0d0d0d" stroke="#444" stroke-width="2" />

            <!-- Sloupec tekutiny -->
            <rect x="${barrelStartX}" y="${barrelTopY + 2}" width="${fillWidth}" height="${barrelHeight - 4}" fill="url(#fluidGradient)" filter="url(#neonGlow)" opacity="0.85" />

            <!-- Rysky a měřítko -->
            ${ticksHtml}

            <!-- Píst (Plunger Seal & Shaft) -->
            <rect x="${plungerX}" y="${barrelTopY}" width="14" height="${barrelHeight}" rx="2" fill="#222" stroke="#555" stroke-width="2" />
            <line x1="${plungerX + 2}" y1="${barrelTopY}" x2="${plungerX + 2}" y2="${barrelTopY + barrelHeight}" stroke="var(--neon-green)" stroke-width="2" />
            <rect x="${plungerX + 14}" y="52" width="${Math.max(svgWidth - plungerX - 35, 10)}" height="16" fill="#1c1c1c" stroke="#333" />
            <rect x="${svgWidth - 20}" y="42" width="10" height="36" rx="2" fill="#333" stroke="#666" />

            <!-- Ryska a ukazatel cílové hodnoty -->
            <polygon points="${plungerX},${barrelTopY - 8} ${plungerX - 6},${barrelTopY - 18} ${plungerX + 6},${barrelTopY - 18}" fill="var(--neon-green)" />
            <text x="${plungerX}" y="${barrelTopY - 22}" fill="var(--neon-green)" font-size="13" font-family="'Rajdhani', sans-serif" font-weight="700" text-anchor="middle">
                ${calcResults.units} IU
            </text>
        </svg>
        `;
    }
}

window.SuppleZ_Calculator = new PeptideCalculator();
