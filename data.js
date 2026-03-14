const data=[

// =======================
// ACRONIMI
// =======================

{term:"ABC",def:"Airway Breathing Circulation",type:"acro"},
{term:"ACR",def:"Arresto Cardiaco Respiratorio",type:"acro"},
{term:"ALS",def:"Advanced Life Support",type:"acro"},
{term:"BLS",def:"Basic Life Support",type:"acro"},
{term:"BLS-D",def:"Basic Life Support Defibrillation",type:"acro"},
{term:"BPCO",def:"Broncopneumopatia Cronica Ostruttiva",type:"acro"},
{term:"CIPAP",def:"Continuous Positive Airway Pressure",type:"acro"},
{term:"DAE",def:"Defibrillatore Automatico Esterno",type:"acro"},
{term:"EPA",def:"Edema Polmonare Acuto",type:"acro"},
{term:"GAS",def:"Guardo Ascolto Sento",type:"acro"},
{term:"IMA",def:"Infarto Miocardico Acuto",type:"acro"},
{term:"NUE",def:"Numero Unico Emergenza",type:"acro"},
{term:"OPACS",def:"Osservare Palpare Ascoltare Contare Saturimetria",type:"acro"},
{term:"OPQRST",def:"Onset Provocation Quality Region Severity Time",type:"acro"},
{term:"PAS",def:"Proteggere Avvisare Soccorrere",type:"acro"},
{term:"PLS",def:"Posizione Laterale di Sicurezza",type:"acro"},
{term:"PMX",def:"Pneumotorace Spontaneo",type:"acro"},
{term:"RCP",def:"Rianimazione Cardiopolmonare",type:"acro"},

// =======================
// TERMINI MEDICI
// =======================

{term:"Afasia",def:"difficoltà o perdita della parola"},
{term:"Analgesico",def:"farmaco contro il dolore"},
{term:"Anossia",def:"assenza di ossigeno nei tessuti"},
{term:"Aritmia",def:"battito cardiaco irregolare"},
{term:"Asistolia",def:"specifica forma di arresto in cui scompare ogni attività elettrica"},
{term:"Asma Allergico",def:"spasmo della muscolatura brochiale dovuto a una reazione allergica a una sostanza inalata"},
{term:"Asma Bronchiale",def:"malattia infiammatoria cronica delle vie aeree caratterizzata da brocoplasmo reversibile"},
{term:"Asma Non Allergico",def:"spasmo della muscolatura brochiale non dovuto a sostanze allergizzanti"},
{term:"Bradicardia",def:"frequenza cardiaca troppo bassa"},
{term:"Bradipnea",def:"frequenza respiratoria anormalmente bassa"},
{term:"Broncospasmo",def:"contrazione dei bronchi con difficoltà respiratoria"},
{term:"Cianosi",def:"colorazione blu della pelle per carenza di ossigeno"},
{term:"Contusione",def:"trauma senza ferita aperta"},
{term:"Dispnea",def:"difficoltà respiratoria"},
{term:"Edema",def:"gonfiore da accumulo di liquidi/plasma"},
{term:"Emorragia",def:"perdita di sangue da un vaso"},
{term:"Frattura",def:"rottura di un osso"},
{term:"Iperventilazione",def:"respirazione rapida e profonda che riduce l'anidride carbonica nel sangue"},
{term:"Ipossia",def:"carenza di ossigeno a livello dei tessuti e degli organi"},
{term:"Ipotermia",def:"temperatura corporea troppo bassa"},
{term:"Ipoglicemia",def:"basso livello di zucchero nel sangue"},
{term:"Ortopnea",def:"difficoltà respiratoria da sdraiato"},
{term:"Polso",def:"pulsazione percepibile delle arterie"},
{term:"Saturimetro",def:"strumento per rilevare la dispnea"},
{term:"Shock",def:"grave insufficienza della circolazione"},
{term:"Sincope",def:"svenimento temporaneo"},
{term:"Tachicardia",def:"frequenza cardiaca troppo alta"},
{term:"Tachipnea",def:"frequenza respiratoria anormalmente alta"},
{term:"Trauma",def:"danno causato da forza esterna"},

// =======================
// FREQUENZA RESPIRATORIA
// =======================

{term:"Frequenza respiratoria normale adulto (atti/min)",type:"num",rule:"range",min:15,max:20},
{term:"Frequenza respiratoria normale bambino 1-5 anni (atti/min)",type:"num",rule:"range",min:25,max:30},
{term:"Frequenza respiratoria normale bambino 6-18 anni (atti/min)",type:"num",rule:"range",min:20,max:25},
{term:"Frequenza respiratoria normale neonato (atti/min)",type:"num",rule:"range",min:30,max:40},
{term:"Soglia tachipnea adulto (atti/min)",type:"num",rule:"value",value:20},
{term:"Soglia bradipnea adulto (atti/min)",type:"num",rule:"value",value:15},
{term:"Soglia tachipnea neonato (atti/min)",type:"num",rule:"value",value:40},
{term:"Soglia bradipnea neonato (atti/min)",type:"num",rule:"value",value:30},
{term:"Soglia tachipnea bambino 1-5 anni (atti/min)",type:"num",rule:"value",value:30},
{term:"Soglia bradipnea bambino 1-5 anni (atti/min)",type:"num",rule:"value",value:25},
{term:"Soglia tachipnea bambino 6-18 anni (atti/min)",type:"num",rule:"value",value:25},
{term:"Soglia bradipnea bambino 6-18 anni (atti/min)",type:"num",rule:"value",value:20},


// =======================
// FREQUENZA CARDIACA
// =======================

{term:"Frequenza cardiaca normale adulto (bpm)",type:"num",rule:"range",min:60,max:100},
{term:"Frequenza cardiaca normale bambino (bpm)",type:"num",rule:"range",min:70,max:120},
{term:"Frequenza cardiaca normale neonato (bpm)",type:"num",rule:"range",min:100,max:160},
{term:"Soglia tachicardia adulto (bpm)",type:"num",rule:"value",value:100},
{term:"Soglia bradicardia adulto (bpm)",type:"num",rule:"value",value:60},

// =======================
// SATURAZIONE
// =======================

{term:"Saturazione SpO2 normale/fisiologica (%)",type:"num",rule:"range",min:95,max:100},
{term:"Insufficienza respiratoria moderata (%)",type:"num",rule:"range",min:92,max:95},
{term:"Insufficienza respiratoria grave (ipossia) (%)",type:"num",rule:"value",value:90},

// =======================
// PRESSIONE ARTERIOSA
// =======================

{term:"Pressione sistolica normale adulto (mmHg)",type:"num",rule:"range",min:100,max:140},
{term:"Pressione diastolica normale adulto (mmHg)",type:"num",rule:"range",min:60,max:90},
{term:"Soglia ipotensione sistolica adulto (mmHg)",type:"num",rule:"value",value:90},
{term:"Soglia ipertensione sistolica adulto (mmHg)",type:"num",rule:"value",value:140},

// =======================
// GLICEMIA
// =======================

{term:"Glicemia normale a digiuno (mg/dL)",type:"num",rule:"range",min:70,max:100},
{term:"Soglia ipoglicemia (mg/dL)",type:"num",rule:"value",value:70},
{term:"Soglia iperglicemia (mg/dL)",type:"num",rule:"value",value:180},

// =======================
// TEMPERATURA CORPOREA
// =======================

{term:"Temperatura corporea normale (°C)",type:"num",rule:"range",min:36,max:37.5},
{term:"Soglia febbre (°C)",type:"num",rule:"value",value:38},
{term:"Soglia ipotermia (°C)",type:"num",rule:"value",value:35},

// =======================
// NUMERI DI EMERGENZA
// =======================

{term:"Numero dei Carabinieri",type:"num",rule:"value",value:112},
{term:"Numero della Polizia",type:"num",rule:"value",value:113},
{term:"Numero dell'Emergenza Infanzia",type:"num",rule:"value",value:114},
{term:"Numero dei Vigili del Fuoco",type:"num",rule:"value",value:115},
{term:"Numero della Guardia di Finanza",type:"num",rule:"value",value:117},
{term:"Numero Emergenza Sanitaria",type:"num",rule:"value",value:118},


]
