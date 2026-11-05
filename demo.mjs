#!/usr/bin/env node

/**
 * ⚡ Proton Clinical Intelligence — Interactive Terminal Trailer
 * 
 * A 30-second taste of the next-generation ambient clinical operating system.
 * Zero external dependencies. Run directly with: node demo.mjs
 */

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  bgBlue: '\x1b[44m',
  bgCyan: '\x1b[46m',
  bgRed: '\x1b[41m',
};

async function typePrint(text, speed = 12) {
  for (const char of text) {
    process.stdout.write(char);
    await delay(speed);
  }
  process.stdout.write('\n');
}

async function renderBanner() {
  console.clear();
  console.log(`
${colors.cyan}${colors.bold}  ██████╗ ██████╗  ██████╗ ████████╗ ██████╗ ███╗   ██╗
  ██╔══██╗██╔══██╗██╔═══██╗╚══██╔══╝██╔═══██╗████╗  ██║
  ██████╔╝██████╔╝██║   ██║   ██║   ██║   ██║██╔██╗ ██║
  ██╔═══╝ ██╔══██╗██║   ██║   ██║   ██║   ██║██║╚██╗██║
  ██║     ██║  ██║╚██████╔╝   ██║   ╚██████╔╝██║ ╚████║
  ╚═╝     ╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═══╝${colors.reset}
  ${colors.bold}${colors.dim}The Ambient Clinical Operating System & Doctor Workstation${colors.reset}
  ${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}
`);
}

async function runAmbientScribeDemo() {
  console.log(`${colors.bold}${colors.cyan}[1/4] AMBIENT AUDIO INTAKE & STREAMING TRANSCRIPTION${colors.reset}`);
  console.log(`${colors.dim}Simulating dual-channel clinical microphone capture...${colors.reset}\n`);

  const dialogue = [
    { speaker: "Dr. Sarah Chen", text: "Good morning Alex. How is your chest feeling after that cold last week?" },
    { speaker: "Alex Morgan", text: "The wheezing is lingering doctor, especially at night when I lie flat." },
    { speaker: "Dr. Sarah Chen", text: "Let's auscultate your lungs... expiratory wheeze in bilateral lower lobes. We'll start Amoxicillin 500mg TID and an Albuterol inhaler." }
  ];

  for (const line of dialogue) {
    const prefix = line.speaker.startsWith("Dr") ? `${colors.blue}🩺 ${line.speaker}: ${colors.reset}` : `${colors.green}👤 ${line.speaker}: ${colors.reset}`;
    process.stdout.write(prefix);
    await typePrint(line.text, 15);
    await delay(300);
  }

  console.log(`\n${colors.dim}Processing clinical audio via Proton Clinical Brain...${colors.reset}`);
  await delay(600);
}

async function runSoapExtractionDemo() {
  console.log(`\n${colors.bold}${colors.cyan}[2/4] SYNCHRONOUS SOAP NOTE GENERATION & ICD-10 MAPPING${colors.reset}\n`);
  
  const soap = `
${colors.yellow}┌─ SUBJECTIVE (S) ────────────────────────────────────────────────────────┐${colors.reset}
  Chief Complaint: 7-day post-viral persistent cough with nocturnal wheeze.
  Patient reports dyspnea exacerbation in supine posture.
${colors.yellow}├─ OBJECTIVE (O) ─────────────────────────────────────────────────────────┤${colors.reset}
  Vitals: HR 78 bpm | BP 122/80 mmHg | SpO2 97% on room air | Temp 98.4°F
  Lungs: Expiratory polyphonic wheezes bilaterally at lung bases.
${colors.yellow}├─ ASSESSMENT (A) ────────────────────────────────────────────────────────┤${colors.reset}
  1. Acute bronchitis with bronchospasm ${colors.dim}[ICD-10: J20.9 / J45.909]${colors.reset}
  2. Mild exacerbation of reactive airway disease
${colors.yellow}├─ PLAN (P) ──────────────────────────────────────────────────────────────┤${colors.reset}
  • Amoxicillin 500 mg PO TID x 7 days
  • Albuterol HFA Inhaler 90 mcg 2 puffs Q4-6H PRN wheeze
  • Patient handoff instructions and follow-up in 5 days
${colors.yellow}└─────────────────────────────────────────────────────────────────────────┘${colors.reset}`;

  console.log(soap);
  await delay(800);
}

async function runSafetyGuardrailDemo() {
  console.log(`\n${colors.bold}${colors.cyan}[3/4] CLINICAL SAFETY INTERVENTION GUARDRAILS${colors.reset}`);
  console.log(`${colors.dim}Checking medication against patient allergy graph & active interactions...${colors.reset}\n`);
  await delay(500);

  console.log(`${colors.bgRed}${colors.bold} ⚠️  CRITICAL SAFETY ALERT DETECTED ${colors.reset}`);
  console.log(`${colors.red}${colors.bold}• CONTRAINDICATION:${colors.reset} Patient has documented severe Beta-Lactam / Penicillin allergy.`);
  console.log(`${colors.red}${colors.bold}• INTERVENTION:${colors.reset} Blocked immediate signing of Amoxicillin 500mg.`);
  console.log(`${colors.green}${colors.bold}• RECOMMENDED ALTERNATIVE:${colors.reset} Azithromycin 500mg Day 1, followed by 250mg QD x 4 days.`);
  await delay(800);
}

async function runFhirBundleDemo() {
  console.log(`\n${colors.bold}${colors.cyan}[4/4] HL7 FHIR R4 TRANSACTION BUNDLE DISPATCH${colors.reset}`);
  console.log(`${colors.dim}Serializing structured encounter to FHIR store (Medplum compatible)...${colors.reset}\n`);
  await delay(400);

  const fhirSummary = {
    resourceType: "Bundle",
    type: "transaction",
    totalEntries: 4,
    resources: [
      { resourceType: "Encounter", id: "enc-2026-11", status: "finished", class: "AMB" },
      { resourceType: "Condition", code: "J20.9", display: "Acute Bronchitis" },
      { resourceType: "MedicationRequest", medication: "Azithromycin 250mg", status: "active" },
      { resourceType: "Observation", code: "8867-4", display: "Heart Rate: 78 bpm" }
    ]
  };

  console.log(`${colors.cyan}${JSON.stringify(fhirSummary, null, 2)}${colors.reset}`);
  await delay(600);

  console.log(`
${colors.green}${colors.bold}✔ ALL SUBSYSTEMS VERIFIED${colors.reset}
${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}
${colors.bold}Explore the full Proton platform:${colors.reset}
  • Web Doctor Workstation:    ${colors.cyan}npm run dev${colors.reset} (in this trailer or main repo)
  • GitHub Full Monorepo:      ${colors.cyan}https://github.com/abhijeetdinkale-arch/proton${colors.reset}
  • Dork Patient App (Android): 100% Kotlin + Compose offline-first
${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}
`);
}

async function main() {
  await renderBanner();
  await runAmbientScribeDemo();
  await runSoapExtractionDemo();
  await runSafetyGuardrailDemo();
  await runFhirBundleDemo();
}

main().catch(console.error);
