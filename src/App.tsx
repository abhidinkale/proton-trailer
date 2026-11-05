import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ShieldAlert, 
  Smartphone, 
  Database, 
  Terminal, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Stethoscope, 
  Mic, 
  FileText, 
  ChevronRight, 
  ExternalLink,
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'scribe' | 'safety' | 'patient' | 'fhir'>('scribe');
  const [isPlayingScribe, setIsPlayingScribe] = useState(false);
  const [scribeStep, setScribeStep] = useState(0);
  const [bookingSlot, setBookingSlot] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  // Scripted dialogue sequence
  const transcriptLines = [
    { speaker: 'Dr. Sarah Chen', text: 'Good morning Alex. How is your chest feeling after that cold last week?' },
    { speaker: 'Alex Morgan', text: 'The wheezing is lingering doctor, especially at night when I lie flat.' },
    { speaker: 'Dr. Sarah Chen', text: 'Let\'s auscultate your lungs... expiratory wheeze in bilateral lower lobes. We will start Amoxicillin 500mg TID and an Albuterol inhaler.' }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlayingScribe && scribeStep < transcriptLines.length) {
      timer = setTimeout(() => {
        setScribeStep(prev => prev + 1);
      }, 1600);
    } else if (scribeStep >= transcriptLines.length) {
      setIsPlayingScribe(false);
    }
    return () => clearTimeout(timer);
  }, [isPlayingScribe, scribeStep]);

  const resetScribe = () => {
    setIsPlayingScribe(false);
    setScribeStep(0);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20">
      {/* Top Banner */}
      <header className="border-b border-slate-800/80 bg-[#0d0f17]/90 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-teal-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-bold text-xl">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">PROTON</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Trailer Edition
                </span>
              </div>
              <p className="text-xs text-slate-400">Next-Gen Ambient Clinical Operating System</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/abhijeetdinkale-arch/proton" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-xs font-semibold text-slate-200 border border-slate-700/60 transition shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Full Monorepo</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-600/15 via-teal-500/10 to-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 60-Second Experience</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Ambient Intelligence <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Engineered for Clinical Trust.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Experience the platform that turns live clinical dialogue into structured FHIR records, catches prescription contraindications in real-time, and synchronizes patients and physicians seamlessly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Dual-Channel Ambient Transcription</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero-Hallucination Safety Guardrails</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>HL7 FHIR R4 Transaction Bundles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Header */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-[#10131d] rounded-2xl border border-slate-800/80 mb-6">
          <button
            onClick={() => setActiveTab('scribe')}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'scribe'
                ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>Ambient Scribe</span>
          </button>

          <button
            onClick={() => setActiveTab('safety')}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'safety'
                ? 'bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Safety Guardrail</span>
          </button>

          <button
            onClick={() => setActiveTab('patient')}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'patient'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-teal-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Patient App (Dork)</span>
          </button>

          <button
            onClick={() => setActiveTab('fhir')}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === 'fhir'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>FHIR R4 Engine</span>
          </button>
        </div>

        {/* Tab 1: Ambient Scribe */}
        {activeTab === 'scribe' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0e111a] p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl">
            {/* Live Audio Stream Pane */}
            <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80 pb-6 lg:pb-0 lg:pr-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Dual-Channel Audio Feed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!isPlayingScribe && scribeStep < transcriptLines.length && (
                      <button 
                        onClick={() => setIsPlayingScribe(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Play Stream</span>
                      </button>
                    )}
                    <button 
                      onClick={resetScribe}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition"
                      title="Reset"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Simulated Waveform */}
                <div className="h-14 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-center gap-1 px-4 mb-6">
                  {[40, 65, 30, 85, 95, 50, 75, 90, 60, 45, 80, 100, 70, 55, 85, 40, 60, 75, 90, 65, 45, 80, 60, 30].map((h, i) => (
                    <span 
                      key={i} 
                      className={`w-1 rounded-full transition-all duration-300 ${isPlayingScribe ? 'bg-cyan-400' : 'bg-slate-700'}`}
                      style={{ height: isPlayingScribe ? `${Math.max(15, (h * Math.sin(i + scribeStep * 2) + 100) % 100)}%` : '20%' }}
                    />
                  ))}
                </div>

                {/* Real-time Dialogue */}
                <div className="space-y-3">
                  {transcriptLines.map((line, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-xl border transition duration-500 ${
                        idx < scribeStep
                          ? 'bg-slate-900/90 border-slate-700/80 opacity-100 translate-y-0'
                          : 'bg-slate-950/40 border-slate-900 opacity-20 translate-y-2'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          line.speaker.startsWith('Dr') ? 'bg-cyan-500/20 text-cyan-300' : 'bg-emerald-500/20 text-emerald-300'
                        }`}>
                          {line.speaker}
                        </span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed">{line.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Latency: <strong>140ms</strong></span>
                <span>Accuracy: <strong>99.4% Med-Lex</strong></span>
              </div>
            </div>

            {/* Generated Clinical SOAP Note */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Synchronous SOAP Extraction</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Confidence: 98%
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {/* S */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-cyan-400 font-bold mb-1">[S] SUBJECTIVE</div>
                    <p className="text-slate-300 text-[11px] font-sans">
                      Patient reports 7-day post-viral cough with nocturnal bronchospasms. Orthopnea reported when supine.
                    </p>
                  </div>

                  {/* O */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-teal-400 font-bold mb-1">[O] OBJECTIVE</div>
                    <p className="text-slate-300 text-[11px] font-sans">
                      Vitals: HR 78 bpm, BP 122/80, SpO2 97% RA. Auscultation reveals expiratory wheezing in bilateral lung bases.
                    </p>
                  </div>

                  {/* A */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-amber-400 font-bold mb-1">[A] ASSESSMENT</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px]">
                        Acute Bronchitis (J20.9)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px]">
                        Reactive Airway Disease (J45.909)
                      </span>
                    </div>
                  </div>

                  {/* P */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-emerald-400 font-bold mb-1">[P] PLAN</div>
                    <ul className="list-disc list-inside text-slate-300 text-[11px] font-sans space-y-0.5">
                      <li>Amoxicillin 500mg PO TID x 7 days</li>
                      <li>Albuterol 90mcg Inhaler 2 puffs Q4H PRN</li>
                      <li>Follow-up clinic visit in 5 days</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button 
                  onClick={() => setActiveTab('safety')}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span>Verify Contraindications in Safety Engine</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Safety Guardrails */}
        {activeTab === 'safety' && (
          <div className="bg-[#0e111a] p-6 sm:p-8 rounded-3xl border border-rose-500/30 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Active Clinical Safety Interventions</h3>
                  <p className="text-xs text-slate-400">Automated longitudinal cross-validation against patient allergies & medications</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold">
                CRITICAL HARD STOP
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Detected Severe Allergy Conflict</span>
                </div>
                <h4 className="text-base font-bold text-white">Amoxicillin 500 mg ↔ Severe Penicillin Anaphylaxis</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Patient record reflects documented severe allergic reaction to Beta-Lactam antibiotics (2019 rash & facial edema). Prescribing Amoxicillin carries high risk of adverse immune event.
                </p>
                <div className="p-3 rounded-lg bg-black/40 border border-rose-500/20 text-[11px] font-mono text-rose-300">
                  Status: <strong>PROMPTLY INTERCEPTED</strong> (Signature blocked)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>AI Recommended Evidence-Based Alternative</span>
                </div>
                <h4 className="text-base font-bold text-white">Switch to Azithromycin (Macrolide)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Azithromycin provides equivalent coverage for secondary post-viral acute bronchitis without cross-reactivity with beta-lactam structures.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button 
                    onClick={() => setActiveTab('fhir')}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition"
                  >
                    Accept Alternative & Commit to FHIR
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Patient SuperApp (Dork) */}
        {activeTab === 'patient' && (
          <div className="bg-[#0e111a] p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Phone Mockup Frame */}
            <div className="w-[320px] h-[580px] bg-slate-950 rounded-[40px] border-4 border-slate-800 p-4 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              {/* Phone Notch */}
              <div className="w-32 h-4 bg-slate-800 rounded-b-xl mx-auto mb-3" />

              {/* Dork Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-black text-xs">
                    D
                  </div>
                  <span className="font-bold text-xs tracking-tight text-white">Dork Health</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300 font-semibold">
                  Arc · O+
                </span>
              </div>

              {/* Chat Thread */}
              <div className="flex-1 overflow-y-auto py-3 space-y-3 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                  <span className="font-bold text-[10px] text-teal-400 block mb-0.5">Dork AI</span>
                  I noticed Dr. Chen recommended a 5-day follow-up. Would you like me to book an appointment?
                </div>

                {/* AI Booking Action Card */}
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-cyan-500/40 space-y-2.5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white text-xs">Dr. Sarah Chen</div>
                      <div className="text-[10px] text-slate-400">Beacon Hill Family Health</div>
                    </div>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 uppercase">
                      {isBooked ? 'CONFIRMED' : 'OPEN SLOTS'}
                    </span>
                  </div>

                  {!isBooked ? (
                    <>
                      <div className="grid grid-cols-2 gap-1.5">
                        {['Fri 10:00 AM', 'Fri 2:15 PM'].map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setBookingSlot(slot)}
                            className={`p-1.5 rounded-lg text-[10px] font-bold border transition ${
                              bookingSlot === slot
                                ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                                : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => bookingSlot && setIsBooked(true)}
                        disabled={!bookingSlot}
                        className={`w-full py-1.5 rounded-lg text-xs font-bold transition ${
                          bookingSlot
                            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md'
                            : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        Confirm Booking
                      </button>
                    </>
                  ) : (
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] text-center font-bold">
                      ✓ Booked for {bookingSlot}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Nav Mockup */}
              <div className="pt-2 border-t border-slate-800 flex justify-around text-slate-500 text-[10px]">
                <span className="text-teal-400 font-bold">Timeline</span>
                <span>Labs</span>
                <span>Meds</span>
                <span>Profile</span>
              </div>
            </div>

            {/* Explanatory Specs */}
            <div className="max-w-md space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-teal-400">Android Patient Architecture</span>
              <h3 className="text-2xl font-bold text-white">Dork: Offline-First Healthcare Companion</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Built 100% in Kotlin & Jetpack Compose. All biometric telemetry, lab curves, and medication schedules sync locally with SQLCipher encryption, keeping patient data authoritative even during offline clinic visits.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Conversational AI appointment booking card</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Longitudinal lab trends with reference range bounds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Zero-knowledge biometrics & emergency medical ID</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 4: FHIR R4 Engine */}
        {activeTab === 'fhir' && (
          <div className="bg-[#0e111a] p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Medplum-Compatible FHIR R4 Bundle</span>
              </div>
              <span className="text-xs font-mono text-cyan-400">POST /fhir/R4</span>
            </div>

            <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 overflow-x-auto leading-relaxed">
{`{
  "resourceType": "Bundle",
  "id": "bundle-consultation-arc-001",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "Encounter",
        "id": "enc-2026-11-05",
        "status": "finished",
        "class": { "code": "AMB", "display": "Ambulatory" },
        "subject": { "reference": "Patient/pat-arc", "display": "Arc" }
      }
    },
    {
      "resource": {
        "resourceType": "Condition",
        "clinicalStatus": { "coding": [{ "code": "active" }] },
        "code": { "coding": [{ "system": "http://hl7.org/fhir/sid/icd-10", "code": "J20.9", "display": "Acute Bronchitis" }] }
      }
    },
    {
      "resource": {
        "resourceType": "MedicationRequest",
        "status": "active",
        "intent": "order",
        "medicationCodeableConcept": { "text": "Azithromycin 250mg PO QD x 4d" }
      }
    }
  ]
}`}
            </pre>
          </div>
        )}
      </section>

      {/* Terminal Quick Taste Guide */}
      <section className="max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Terminal Trailer</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Experience the CLI Demo in 10 Seconds</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Zero dependencies needed. Test ambient speech transcription, SOAP generation, and safety alerts directly in your shell.
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/80 border border-slate-800 font-mono text-xs sm:text-sm text-cyan-300 shadow-inner">
            <span>$ node demo.mjs</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-[#07080c] py-8 px-6 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">PROTON CLINIC</span>
            <span>· Ambient Clinical Operating System</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/abhijeetdinkale-arch/proton" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Main Proton Repository
            </a>
            <a 
              href="https://github.com/abhijeetdinkale-arch/proton-trailer" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Trailer Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
