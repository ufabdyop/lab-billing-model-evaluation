tier1 = new tier({name: "Tier 1", rate: 1});
tier2 = new tier({name: "Tier 2", rate: 1});
tier3 = new tier({name: "Tier 3", rate: 1});
tier4 = new tier({name: "Tier 4", rate: 1});

all_tiers = new tier_catalog();
all_tiers.add(tier1);
all_tiers.add(tier2);
all_tiers.add(tier3);
all_tiers.add(tier4);

all_items = new item_catalog();

all_items.add([
	{name: "4-point Probe Microtech RF-1", rate: 1, tier: new tier()},
	{name: "Acid Neutralization", rate: 1, tier: new tier()},
	{name: "AFM, Bruker Dimension Icon", rate: 1, tier: new tier()},
	{name: "Allied M-Prep3 1", rate: 1, tier: new tier()},
	{name: "Allied M-Prep3 2", rate: 1, tier: new tier()},
	{name: "Allied M-Prep3 3", rate: 1, tier: new tier()},
	{name: "Allied Techcut4", rate: 1, tier: new tier()},
	{name: "Allied TECHPREP 10-1000", rate: 1, tier: new tier()},
	{name: "APT Polos", rate: 1, tier: new tier()},
	{name: "Binder FD53-UL", rate: 1, tier: new tier()},
	{name: "Blue-M", rate: 1, tier: new tier()},
	{name: "Blue-M 1", rate: 1, tier: new tier()},
	{name: "Blue-M 2", rate: 1, tier: new tier()},
	{name: "Blue-M 3", rate: 1, tier: new tier()},
	{name: "Blue-M 4", rate: 1, tier: new tier()},
	{name: "Bold sn1974 Etch", rate: 1, tier: new tier()},
	{name: "Bold sn1975 Etch", rate: 1, tier: new tier()},
	{name: "Bold sn1976 Litho", rate: 1, tier: new tier()},
	{name: "Bold Vent Deck SS", rate: 1, tier: new tier()},
	{name: "CAD Work Station", rate: 1, tier: new tier()},
	{name: "Cambridge Fiji F200", rate: 1, tier: new tier()},
	{name: "Canary 1 Oxidation", rate: 1, tier: new tier()},
	{name: "Canary 2 Diff - Annl", rate: 1, tier: new tier()},
	{name: "Canary 3 SiN", rate: 1, tier: new tier()},
	{name: "Canary 4 Poly-Si", rate: 1, tier: new tier()},
	{name: "CDA", rate: 1, tier: new tier()},
	{name: "CEE 100", rate: 1, tier: new tier()},
	{name: "CHA SEL600", rate: 1, tier: new tier()},
	{name: "Computer Work Stations", rate: 1, tier: new tier()},
	{name: "Confocal Microscope, Olympus Fluoview FV10i", rate: 1, tier: new tier()},
	{name: "Confocal Microscope, Olympus IX81", rate: 1, tier: new tier()},
	{name: "Coral", rate: 1, tier: new tier()},
	{name: "dbFIB, FEI Helios NanoLab 650", rate: 1, tier: new tier()},
	{name: "dbFIB, FEI Quanta 3D-FEG", rate: 1, tier: new tier()},
	{name: "Denton Discovery 18", rate: 1, tier: new tier()},
	{name: "Denton SJ20C", rate: 1, tier: new tier()},
	{name: "Diffusitron Mark IV 6 Stack", rate: 1, tier: new tier()},
	{name: "Disco DAD3220", rate: 1, tier: new tier()},
	{name: "Disco DAD641", rate: 1, tier: new tier()},
	{name: "DI Water", rate: 1, tier: new tier()},
	{name: "Door Access", rate: 1, tier: new tier()},
	{name: "Edwards GRC 1", rate: 1, tier: new tier()},
	{name: "Edwards GRC 2", rate: 1, tier: new tier()},
	{name: "Electromask CC250", rate: 1, tier: new tier()},
	{name: "Ellipsometer, Woollam Spectroscopic", rate: 1, tier: new tier()},
	{name: "Ellipsometer Woollam VASE", rate: 1, tier: new tier()},
	{name: "EMS 1000 1", rate: 1, tier: new tier()},
	{name: "EMS 1000 2", rate: 1, tier: new tier()},
	{name: "EMS 1000 3", rate: 1, tier: new tier()},
	{name: "EV 420", rate: 1, tier: new tier()},
	{name: "EVG 520 IS", rate: 1, tier: new tier()},
	{name: "Exhaust", rate: 1, tier: new tier()},
	{name: "Expertech CTR-125 Doped Poly", rate: 1, tier: new tier()},
	{name: "Expertech CTR-125 LTO", rate: 1, tier: new tier()},
	{name: "Expertech CTR-125 SiN", rate: 1, tier: new tier()},
	{name: "Expertech CTR-125 TEOS", rate: 1, tier: new tier()},
	{name: "Eye Wash stations", rate: 1, tier: new tier()},
	{name: "FIB, FEI Quanta 3D", rate: 1, tier: new tier()},
	{name: "Film Stress Tencor FLX-2320", rate: 1, tier: new tier()},
	{name: "Fume Hood 1", rate: 1, tier: new tier()},
	{name: "Fume Hood 2", rate: 1, tier: new tier()},
	{name: "Gaertner Ellipsometer", rate: 1, tier: new tier()},
	{name: "Guardian Burn Box", rate: 1, tier: new tier()},
	{name: "Headway EC101", rate: 1, tier: new tier()},
	{name: "Heidelberg MicroPG 101", rate: 1, tier: new tier()},
	{name: "House N2", rate: 1, tier: new tier()},
	{name: "House Vacuum", rate: 1, tier: new tier()},
	{name: "HP 4145A", rate: 1, tier: new tier()},
	{name: "HVAC", rate: 1, tier: new tier()},
	{name: "Keithley 4200 SCS", rate: 1, tier: new tier()},
	{name: "Keithley CV System", rate: 1, tier: new tier()},
	{name: "KOH", rate: 1, tier: new tier()},
	{name: "Lam 590 Poly", rate: 1, tier: new tier()},
	{name: "Lam 590 SiO2/SiN", rate: 1, tier: new tier()},
	{name: "Laser Mark 4000 Nd-YAG", rate: 1, tier: new tier()},
	{name: "Leak Detector Alcatel ASM 180", rate: 1, tier: new tier()},
	{name: "Lighting", rate: 1, tier: new tier()},
	{name: "Lindberg Metal", rate: 1, tier: new tier()},
	{name: "Lindberg Metal Oxide", rate: 1, tier: new tier()},
	{name: "Lindberg Miscellaneous", rate: 1, tier: new tier()},
	{name: "MEI Wedge", rate: 1, tier: new tier()},
	{name: "Microscope, Polyvar MET", rate: 1, tier: new tier()},
	{name: "Mitutoyo Dial Indicator Probe", rate: 1, tier: new tier()},
	{name: "MST Hazardous Gas Monitoring", rate: 1, tier: new tier()},
	{name: "N and K 1500 Analyzer", rate: 1, tier: new tier()},
	{name: "Nanospec 3000", rate: 1, tier: new tier()},
	{name: "Nikon Optiphot 1", rate: 1, tier: new tier()},
	{name: "Nikon Optiphot 2", rate: 1, tier: new tier()},
	{name: "Nikon V12A", rate: 1, tier: new tier()},
	{name: "OAI 200 1", rate: 1, tier: new tier()},
	{name: "OAI 200 2", rate: 1, tier: new tier()},
	{name: "Olympus MX51", rate: 1, tier: new tier()},
	{name: "Optec Micromaster KrF", rate: 1, tier: new tier()},
	{name: "Optical Profiler, Zygo NewView", rate: 1, tier: new tier()},
	{name: "Oscilloscope Tektronix TDS 2002 B", rate: 1, tier: new tier()},
	{name: "Oxford 100 ICP", rate: 1, tier: new tier()},
	{name: "Oxford Plasmalab 80", rate: 1, tier: new tier()},
	{name: "Oxford Plasmalab 80 PECVD", rate: 1, tier: new tier()},
	{name: "Perkin-Elmer 4400", rate: 1, tier: new tier()},
	{name: "Pirani Gauge", rate: 1, tier: new tier()},
	{name: "PR8 1", rate: 1, tier: new tier()},
	{name: "PR8 2", rate: 1, tier: new tier()},
	{name: "PR8 3", rate: 1, tier: new tier()},
	{name: "PR8 4", rate: 1, tier: new tier()},
	{name: "Process Cooling", rate: 1, tier: new tier()},
	{name: "Profilometer Tencor P-10", rate: 1, tier: new tier()},
	{name: "Profilometer, Tencor P20", rate: 1, tier: new tier()},
	{name: "Profilometer Tencor P-20H", rate: 1, tier: new tier()},
	{name: "RGA Spectra Vac-Check", rate: 1, tier: new tier()},
	{name: "SCS PDS 2010", rate: 1, tier: new tier()},
	{name: "SEM, FEI Quanta 600 FEG", rate: 1, tier: new tier()},
	{name: "SEM, Hitachi S-4800", rate: 1, tier: new tier()},
	{name: "Semitool ST-260", rate: 1, tier: new tier()},
	{name: "Semitool ST-870", rate: 1, tier: new tier()},
	{name: "Showers", rate: 1, tier: new tier()},
	{name: "SiC Chamber", rate: 1, tier: new tier()},
	{name: "Solitec 5100 LVT", rate: 1, tier: new tier()},
	{name: "Solitec 5110 CND", rate: 1, tier: new tier()},
	{name: "Solvent Hood 1", rate: 1, tier: new tier()},
	{name: "Solvent Hood 2", rate: 1, tier: new tier()},
	{name: "Strasbaugh", rate: 1, tier: new tier()},
	{name: "Strasbaugh 6EC", rate: 1, tier: new tier()},
	{name: "Suss MA1006", rate: 1, tier: new tier()},
	{name: "Technics PE II-A", rate: 1, tier: new tier()},
	{name: "TMV Super", rate: 1, tier: new tier()},
	{name: "UTI Wirebond Pull Tester", rate: 1, tier: new tier()},
	{name: "UV Intensity Meter OAI 306", rate: 1, tier: new tier()},
	{name: "UV Intensity Meter OAI 357", rate: 1, tier: new tier()},
	{name: "UV Tape Release UVM-102W", rate: 1, tier: new tier()},
	{name: "Wifi", rate: 1, tier: new tier()},
	{name: "XACTIX X2 XeF2", rate: 1, tier: new tier()},
	{name: "XPS, Kratos Axis Ultra DLD", rate: 1, tier: new tier()},
	{name: "XRF, Eagle III Microspot", rate: 1, tier: new tier()},
	{name: "YES HMDS1", rate: 1, tier: new tier()},
	{name: "YES LP-III", rate: 1, tier: new tier()}
]);

shared_cap = new cap({threshold: 1, rate: 1});

all_projects = new project_catalog();

all_projects.add([
	{name: "Raeymaekers Start-Up", type: "local", cap: shared_cap},
	{name: "BYU Chemistry: ALD SiO2 Depos", type: "off campus", cap: shared_cap},
	{name: "Terahertz Device Corp.", type: "local", cap: shared_cap},
	{name: "CSA", type: "local", cap: shared_cap},
	{name: "Porter Group - Cancer Marker", type: "local", cap: shared_cap},
	{name: "TestProjectA", type: "", cap: shared_cap},
	{name: "Inventory", type: "", cap: shared_cap},
	{name: "BioEng Chair Res. Support", type: "local", cap: shared_cap},
	{name: "Boehme Start Up Funds", type: "local", cap: shared_cap},
	{name: "Coats Start-Up", type: "", cap: shared_cap},
	{name: "Darrin Young USTAR", type: "local", cap: shared_cap},
	{name: "Group IV Nanomembranes", type: "local", cap: shared_cap},
	{name: "Pease Start Up Funds", type: "local", cap: shared_cap},
	{name: "Rogachev Start-Up Funds", type: "local", cap: shared_cap},
	{name: "Scarpulla Start-Up Funds", type: "local", cap: shared_cap},
	{name: "Tabib-Azar USTAR", type: "local", cap: shared_cap},
	{name: "Service Requests", type: "", cap: shared_cap},
	{name: "Capillary Manufacturing", type: "", cap: shared_cap},
	{name: "Terry Ring PI", type: "", cap: shared_cap},
	{name: "Infection Prevention Barriers", type: "", cap: shared_cap},
	{name: "NIR for Blood Interferences", type: "", cap: shared_cap},
	{name: "Engineering Neural Interfaces", type: "local", cap: shared_cap},
	{name: "CUSTODIAL", type: "", cap: shared_cap},
	{name: "TestProjectB", type: "", cap: shared_cap},
	{name: "Balaji Start-Up Funds", type: "local", cap: shared_cap},
	{name: "Bamberg Start-Up Funds", type: "local", cap: shared_cap},
	{name: "Sintering/Cobalt Surfaces", type: "", cap: shared_cap},
	{name: "Scientia Vascular", type: "", cap: shared_cap},
	{name: "Suspension Ironmaking Technology", type: "local", cap: shared_cap},
	{name: "Microarray Surface Analysis", type: "", cap: shared_cap},
	{name: "Optoelectronic Sensing", type: "local", cap: shared_cap},
	{name: "needs user agreement", type: "", cap: shared_cap},
	{name: "TCP Filters", type: "local", cap: shared_cap},
	{name: "BONE AND JOINT STUDIES", type: "University of Utah", cap: shared_cap},
	{name: "Gene Therapy for Head Cancer", type: "local", cap: shared_cap},
	{name: "Shumaker-Parry Start-Up Funds", type: "local", cap: shared_cap},
	{name: "Hess Pumice", type: "local", cap: shared_cap},
	{name: "Sandal Development Fund", type: "local", cap: shared_cap},
	{name: "Davis Interim Chair Funds", type: "local", cap: shared_cap},
	{name: "BONE ADHESIVE", type: "", cap: shared_cap},
	{name: "Charge-Pumped MEMS Actuation", type: "local", cap: shared_cap},
	{name: "Multiplexed Biomarker", type: "local", cap: shared_cap},
	{name: "MRSEC IRG2: Spin Physics", type: "local", cap: shared_cap},
	{name: "Ultrafast STM", type: "local", cap: shared_cap},
	{name: "South American Shale", type: "local", cap: shared_cap},
	{name: "Ameel Research Support", type: "", cap: shared_cap},
	{name: "Temp Project for Jason", type: "local", cap: shared_cap},
	{name: "Chronic Neural Recording", type: "local", cap: shared_cap},
	{name: "Himmer- MSU", type: "", cap: shared_cap},
	{name: "MSRI", type: "off campus", cap: shared_cap},
	{name: "AMEDICA", type: "off campus", cap: shared_cap},
	{name: "Terrahertz Device Corp", type: "off campus", cap: shared_cap},
	{name: "Free Education Research Fund", type: "local", cap: shared_cap},
	{name: "Misra USTAR", type: "local", cap: shared_cap},
	{name: "Bootstrap Project", type: "", cap: shared_cap},
	{name: "CEMRI IRG1: Plasmonics", type: "local", cap: shared_cap},
	{name: "Fall 2011 SEM Short Course", type: "class", cap: shared_cap},
	{name: "Hanseup Kim USTAR", type: "local", cap: shared_cap},
	{name: "Marc Porter USTAR", type: "local", cap: shared_cap},
	{name: "Michael Moats Development", type: "local", cap: shared_cap},
	{name: "Rajesh Menon USTAR", type: "local", cap: shared_cap},
	{name: "Titanium Dioxide Match", type: "local", cap: shared_cap},
	{name: "aBeam Tech", type: "off campus", cap: shared_cap},
	{name: "Nuclear Research", type: "local", cap: shared_cap},
	{name: "2012 Spring ME EN 2960", type: "class", cap: shared_cap},
	{name: "Nanotip Fabrication", type: "local", cap: shared_cap},
	{name: "DARPA PCCM", type: "local", cap: shared_cap},
	{name: "DSCRA Jorgensen", type: "local", cap: shared_cap},
	{name: "Brown Start-Up Funds", type: "local", cap: shared_cap},
	{name: "Coherex Medical", type: "off campus", cap: shared_cap},
	{name: "Composite Material Development", type: "", cap: shared_cap},
	{name: "EmiSense", type: "off campus", cap: shared_cap},
	{name: "Hydrogen Storage", type: "local", cap: shared_cap},
	{name: "Laser Institute", type: "local", cap: shared_cap},
	{name: "Maintenance", type: "local", cap: shared_cap},
	{name: "Particle Imaging Manometry", type: "local", cap: shared_cap},
	{name: "Technical Support", type: "local", cap: shared_cap},
	{name: "DARPA: Revolut Prosthetics III", type: "local", cap: shared_cap},
	{name: "SEM Course Development", type: "class", cap: shared_cap},
	{name: "2012 Microactuators", type: "class", cap: shared_cap},
	{name: "Ortho Development", type: "off campus", cap: shared_cap},
	{name: "Nanocatalysts in Propulsion", type: "local", cap: shared_cap},
	{name: "DARPA TBN AFM-CVD", type: "local", cap: shared_cap},
	{name: "Fresenius", type: "off campus", cap: shared_cap},
	{name: "DARPA GC", type: "local", cap: shared_cap},
	{name: "Surface Science", type: "staff", cap: shared_cap},
	{name: "NSF Career", type: "local", cap: shared_cap},
	{name: "Moxtek Collaboration", type: "off campus", cap: shared_cap},
	{name: "HzO, Inc.", type: "off campus", cap: shared_cap},
	{name: "Vacuum Micropump", type: "local", cap: shared_cap},
	{name: "Quantum Nanowires", type: "local", cap: shared_cap},
	{name: "I2S/Blackrock sub", type: "off campus", cap: shared_cap},
	{name: "CAREER PEDMR", type: "local", cap: shared_cap},
	{name: "Polysilicon Deposition (BYU)", type: "off campus", cap: shared_cap},
	{name: "Ceramatec", type: "off campus", cap: shared_cap},
	{name: "Spectroscopy Platforms", type: "local", cap: shared_cap},
	{name: "Fraunhofer Collaboration", type: "local", cap: shared_cap},
	{name: "Nanographite Solar Cells", type: "local", cap: shared_cap},
	{name: "Long-Term Sensitization Model", type: "local", cap: shared_cap},
	{name: "Nanomaterials and Devices", type: "local", cap: shared_cap},
	{name: "Ghandehari USTAR", type: "local", cap: shared_cap},
	{name: "Intelligent Prosthesis", type: "local", cap: shared_cap},
	{name: "Nanographite Based Solar Cell", type: "local", cap: shared_cap},
	{name: "Collaborative Research Bionano", type: "local", cap: shared_cap},
	{name: "Ostafin Start Up", type: "local", cap: shared_cap},
	{name: "On The Fly Engineering", type: "off campus", cap: shared_cap},
	{name: "Foam Cement of Sandcastle Worm", type: "local", cap: shared_cap},
	{name: "Neuronal Pathfinding", type: "local", cap: shared_cap},
	{name: "Development of Spin Microscope", type: "local", cap: shared_cap},
	{name: "Mascaro MRSEC", type: "local", cap: shared_cap},
	{name: "User Training", type: "staff", cap: shared_cap},
	{name: "MATERIALS WORLD NETWORK", type: "local", cap: shared_cap},
	{name: "USU-Yang", type: "off campus", cap: shared_cap},
	{name: "Low-Expansion Ceramics", type: "local", cap: shared_cap},
	{name: "Materials Characterization", type: "local", cap: shared_cap},
	{name: "USU- Anhong Zhou", type: "off campus", cap: shared_cap},
	{name: "Fluorescent Sensing", type: "local", cap: shared_cap},
	{name: "Bootstrap project", type: "", cap: shared_cap},
	{name: "MRSEC IRG2: NMR IN SPIN", type: "local", cap: shared_cap},
	{name: "CEMRI IRG2: Spintronics", type: "local", cap: shared_cap},
	{name: "TCIP: DBS Electrode Array", type: "local", cap: shared_cap},
	{name: "Ingan for Leds", type: "local", cap: shared_cap},
	{name: "DARPA: Prosthetics 3", type: "local", cap: shared_cap},
	{name: "SISGR: FUNDAMENTAL STUDIES", type: "local", cap: shared_cap},
	{name: "Plasmonic Antenna", type: "local", cap: shared_cap},
	{name: "Multiple Exposure Absorbances", type: "local", cap: shared_cap},
	{name: "Nonlinear GRSC Analysis", type: "local", cap: shared_cap},
	{name: "TCP Photovoltaics", type: "local", cap: shared_cap},
	{name: "PEMFC Cathodes Catalysts", type: "local", cap: shared_cap},
	{name: "NSF Collaborative Research", type: "local", cap: shared_cap},
	{name: "NMC", type: "foreign", cap: shared_cap},
	{name: "2011 Fall MEEN 2960 Foundation", type: "class", cap: shared_cap},
	{name: "2012 Fall-MSE 5074 Solar Cell Class", type: "", cap: shared_cap},
	{name: "Bioinspired Fabrication", type: "local", cap: shared_cap},
	{name: "Conductive Properties C", type: "local", cap: shared_cap},
	{name: "ARRA:  Wireless Neural Interfa", type: "local", cap: shared_cap},
	{name: "PI", type: "local", cap: shared_cap},
	{name: "Mems and Nanotech Development", type: "local", cap: shared_cap},
	{name: "Cheryl Forster Class", type: "", cap: shared_cap},
	{name: "MEMS IRIS", type: "", cap: shared_cap},
	{name: "Moire Gratings", type: "", cap: shared_cap},
	{name: "PLC Diagnostics", type: "", cap: shared_cap},
	{name: "Synergy", type: "", cap: shared_cap},
	{name: "DARPA Bridge Funding", type: "", cap: shared_cap},
	{name: "Darrin Young USTAR Start-up", type: "", cap: shared_cap},
	{name: "Micro Fuel Cells", type: "", cap: shared_cap},
	{name: "PDL Development", type: "local", cap: shared_cap},
	{name: "Mask Array", type: "", cap: shared_cap},
	{name: "5212", type: "", cap: shared_cap},
	{name: "Lockheed Martin SiGe", type: "", cap: shared_cap},
	{name: "Polymer CVD", type: "", cap: shared_cap},
	{name: "Bauxite Research Fund", type: "local", cap: shared_cap},
	{name: "COE: NANOSIZE INORGANIC MATERI", type: "", cap: shared_cap},
	{name: "Wire EDM of High Resistivity", type: "", cap: shared_cap},
	{name: "Needles", type: "", cap: shared_cap},
	{name: "Coats start-up", type: "", cap: shared_cap},
	{name: "Nanopores", type: "", cap: shared_cap},
	{name: "SiN Nanopores", type: "local", cap: shared_cap},
	{name: "*no name*", type: "", cap: shared_cap},
	{name: "test_edates", type: "local", cap: shared_cap},
	{name: "POROUS MEMBRANE CATHETERS", type: "local", cap: shared_cap},
	{name: "2012 Spring Micromachining", type: "class", cap: shared_cap},
	{name: "USTAR- Marc Porter", type: "local", cap: shared_cap},
	{name: "Coherix Medical", type: "off campus", cap: shared_cap},
	{name: "Carbon Solar Cells", type: "local", cap: shared_cap},
	{name: "2011 Fall-Microsensors and Act", type: "class", cap: shared_cap},
	{name: "SEED FUNDING- Luciano Aguirre", type: "local", cap: shared_cap},
	{name: "RFID IED Sensor", type: "local", cap: shared_cap},
	{name: "Interferometric Lithography", type: "local", cap: shared_cap},
	{name: "2011 Spring - Microactuators", type: "class", cap: shared_cap},
	{name: "Microvalves", type: "local", cap: shared_cap},
	{name: "Campbell Process Characterization", type: "staff", cap: shared_cap},
	{name: "2011 Spring - Micromachining E", type: "class", cap: shared_cap},
	{name: "DARPA NEMS", type: "local", cap: shared_cap},
	{name: "Research on Particle Breakage", type: "local", cap: shared_cap},
	{name: "2007 Fall Microsensors", type: "", cap: shared_cap},
	{name: "Solar Cells Antennas", type: "local", cap: shared_cap},
	{name: "Scarpulla Start-up", type: "", cap: shared_cap},
	{name: "Silicone RIE", type: "local", cap: shared_cap},
	{name: "Massood Tabib-Azar Start Up", type: "", cap: shared_cap},
	{name: "Microchannel Mixing", type: "", cap: shared_cap},
	{name: "2010 ECE6232 Microsensors", type: "local", cap: shared_cap},
	{name: "Red Blood Cell", type: "", cap: shared_cap},
	{name: "Soot Optical Properties", type: "", cap: shared_cap},
	{name: "University TA", type: "", cap: shared_cap},
	{name: "molecular wires", type: "", cap: shared_cap},
	{name: "Structured Filament", type: "", cap: shared_cap},
	{name: "RESPONSIVE NANOPORES", type: "", cap: shared_cap},
	{name: "Microspotter MFG", type: "", cap: shared_cap},
	{name: "Soldier Navigation", type: "", cap: shared_cap},
	{name: "Laser Diode", type: "", cap: shared_cap},
	{name: "Nano-Oxides VIP Proposal", type: "", cap: shared_cap},
	{name: "Microfabrication of Nanostruct", type: "", cap: shared_cap},
	{name: "WAVE GUIDE LASER", type: "", cap: shared_cap},
	{name: "SiC Contacts", type: "", cap: shared_cap},
	{name: "Microtube Cutting", type: "", cap: shared_cap},
	{name: "Hip Implant Wear Testing", type: "local", cap: shared_cap},
	{name: "Monolayer EI", type: "", cap: shared_cap},
	{name: "Nonlinearity Analysis", type: "local", cap: shared_cap},
	{name: "Biochip Development", type: "", cap: shared_cap},
	{name: "Electrodes for Neurodynamics", type: "local", cap: shared_cap},
	{name: "Transport in Supercond. (Rogac", type: "local", cap: shared_cap},
	{name: "EXPLORATORY RESEARCH ON FLUORE", type: "local", cap: shared_cap},
	{name: "Grayscale Lithography", type: "local", cap: shared_cap},
	{name: "SPECTROSCOPY PLATFORMS", type: "local", cap: shared_cap},
	{name: "BYU-Linford Nanotubes", type: "off campus", cap: shared_cap},
	{name: "H. Kim USTAR Start-up", type: "local", cap: shared_cap},
	{name: "2011 Fall- MSE 5074 Solar Cell", type: "class", cap: shared_cap},
	{name: "MRI Phantom", type: "local", cap: shared_cap},
	{name: "SCALE-UP AND TEST OF BORON NPS", type: "local", cap: shared_cap},
	{name: "Richard Morrill Thesis", type: "off campus", cap: shared_cap},
	{name: "Carbon Solar Cell", type: "local", cap: shared_cap},
	{name: "MicroDAF", type: "", cap: shared_cap},
	{name: "Nanocatalysts", type: "local", cap: shared_cap},
	{name: "2011 Fall- ME 5960 Microfluidi", type: "class", cap: shared_cap},
	{name: " CHRONIC NEURAL RECORDING", type: "", cap: shared_cap},
	{name: "Aging Wire Network Sensor", type: "", cap: shared_cap},
	{name: "Gold on Mica", type: "", cap: shared_cap},
	{name: "Microfluidic Sensor Chip", type: "local", cap: shared_cap},
	{name: "Hemostatic Peptides", type: "local", cap: shared_cap},
	{name: "Sensors", type: "local", cap: shared_cap},
	{name: "Jun Yang Process Characterizat", type: "staff", cap: shared_cap},
	{name: "Alumina Thin Films", type: "", cap: shared_cap},
	{name: "Aluminum 7075: Friction in Mac", type: "", cap: shared_cap},
	{name: "2011 Fall- ECE 5202 Integrated", type: "class", cap: shared_cap},
	{name: "DNA Morphology: Polymer Carrie", type: "", cap: shared_cap},
	{name: "Hydrogen Separation Membrane", type: "", cap: shared_cap},
	{name: "In Vivo Synaptic Function", type: "local", cap: shared_cap},
	{name: "Nano Battery", type: "local", cap: shared_cap},
	{name: "Head and Neck Cancer", type: "", cap: shared_cap},
	{name: "KOH Etched Holes", type: "", cap: shared_cap},
	{name: "Tungsten Etch", type: "", cap: shared_cap},
	{name: "Microfluidic Sensor", type: "", cap: shared_cap},
	{name: "Microchannel Cooling System", type: "", cap: shared_cap},
	{name: "three electrode system", type: "", cap: shared_cap},
	{name: "Solar Cell Class 2009", type: "", cap: shared_cap},
	{name: "Utah Clean Coal Center - Gasif", type: "", cap: shared_cap},
	{name: "TDA Catalysts", type: "", cap: shared_cap},
	{name: "Fluorescence Enhancement Struc", type: "", cap: shared_cap},
	{name: "Molecular Fluorescence", type: "", cap: shared_cap},
	{name: "Chronic Neural Recording Array", type: "", cap: shared_cap},
	{name: "Bartl Start-up Funds", type: "", cap: shared_cap},
	{name: "Moxtek Clinic", type: "", cap: shared_cap},
	{name: "IC art", type: "", cap: shared_cap},
	{name: "IGERT", type: "", cap: shared_cap},
	{name: "IIIV Semiconductors", type: "", cap: shared_cap},
	{name: "HAIR CELLS", type: "", cap: shared_cap},
	{name: "P. Californica Hexagons", type: "", cap: shared_cap},
	{name: "PECVD SiO2 Deposition", type: "", cap: shared_cap},
	{name: "Kepri Corrosion", type: "", cap: shared_cap},
	{name: "Mascaro Seed:  ACS Petroleum R", type: "", cap: shared_cap},
	{name: "Merit: On-campus research proj", type: "", cap: shared_cap},
	{name: "Micro/Nano Injection Molding", type: "", cap: shared_cap},
	{name: "Micromoire Interferometry", type: "", cap: shared_cap},
	{name: "NANOPARTICLE-COATED NANOPORES", type: "", cap: shared_cap},
	{name: "NER: NANOPHOTONIC SUPERPOLARIT", type: "", cap: shared_cap},
	{name: "Spin Resonance on OLEDs", type: "", cap: shared_cap},
	{name: "TA2C-TAC Composites", type: "", cap: shared_cap},
	{name: "Development of Fracture Toughn", type: "", cap: shared_cap},
	{name: "Micro-WEDM", type: "", cap: shared_cap},
	{name: "Germanium Fabrication", type: "", cap: shared_cap},
	{name: "Mark Miller Clinic Administrat", type: "", cap: shared_cap},
	{name: "Willie Dissertation", type: "", cap: shared_cap},
	{name: "Connecting Molecules", type: "", cap: shared_cap},
	{name: "Ohmic Contact", type: "", cap: shared_cap},
	{name: "Early Cancer Detection II", type: "local", cap: shared_cap},
	{name: "Microsystems Fall 2008", type: "", cap: shared_cap},
	{name: "ME 2960- Fall 2009", type: "", cap: shared_cap},
	{name: "Siva Guruswamy Research Educat", type: "", cap: shared_cap},
	{name: "3D Microarray", type: "", cap: shared_cap},
	{name: "CASE: EDDINGS TASK", type: "", cap: shared_cap},
	{name: "Pease Start up Funds", type: "local", cap: shared_cap},
	{name: "Microfabrication of Gold Nanop", type: "", cap: shared_cap},
	{name: "Quantum Transport", type: "", cap: shared_cap},
	{name: "RECONFIG INTERCONNECT TECH", type: "", cap: shared_cap},
	{name: "Thin Film Fabrication", type: "", cap: shared_cap},
	{name: "USU Microelectrode Array", type: "", cap: shared_cap},
	{name: "Nahata: New Faculty Start-up", type: "", cap: shared_cap},
	{name: "Terahertz waveguides: Photonic", type: "", cap: shared_cap},
	{name: "Metallic DNA Biosensor", type: "", cap: shared_cap},
	{name: "Nanowires", type: "", cap: shared_cap},
	{name: "Molecular Electronic Contacts", type: "", cap: shared_cap},
	{name: "SOFC GENERATOR", type: "", cap: shared_cap},
	{name: "Creation of Integrated Platfor", type: "", cap: shared_cap},
	{name: "Micro EFFF", type: "", cap: shared_cap},
	{name: "Large Scale Nanopore Arrays", type: "", cap: shared_cap},
	{name: "Porcupine Mimetic Adhesive", type: "", cap: shared_cap},
	{name: "An Efficient Solar Cell", type: "", cap: shared_cap},
	{name: "GROUP IV NANOMEMBRANES", type: "", cap: shared_cap},
	{name: "Match for DOE Gas Sensors: In-", type: "", cap: shared_cap},
	{name: "Electro-Biology, Metal Sputter", type: "", cap: shared_cap},
	{name: "Characterization", type: "", cap: shared_cap},
	{name: "ECE 5960- Fall 2009", type: "", cap: shared_cap},
	{name: "Cell Immobilization 6423", type: "", cap: shared_cap},
	{name: "Histology/Biocompatibility, An", type: "", cap: shared_cap},
	{name: "IMPLANTED MATERIALS", type: "", cap: shared_cap},
	{name: "Neuronal Pathfinding on Modifi", type: "", cap: shared_cap},
	{name: "Hardware Support", type: "", cap: shared_cap},
	{name: "Actuators: Refreshable Braille", type: "", cap: shared_cap},
	{name: "ECE 6960- Spring 2010", type: "", cap: shared_cap},
	{name: "Oxford DRIE Process Developmen", type: "", cap: shared_cap},
	{name: "Titanium Disk Profiling", type: "", cap: shared_cap},
	{name: "SGER: Exploiting Anomalous Dif", type: "", cap: shared_cap},
	{name: "TIB SURFACE HARDENING", type: "", cap: shared_cap},
	{name: "Shape Memory Alloys", type: "", cap: shared_cap},
	{name: "OPTICAL ELECTRICAL & MAGNETIC", type: "", cap: shared_cap},
	{name: "Neuron-ligand Pathfinding", type: "", cap: shared_cap},
	{name: "Thin Film Thickness Measuremen", type: "", cap: shared_cap},
	{name: "Test", type: "", cap: shared_cap},
	{name: "TEST Project", type: "", cap: shared_cap},
	{name: "Germanium", type: "", cap: shared_cap},
	{name: "Low-Stress Nitride", type: "", cap: shared_cap},
	{name: "MEMS Device Upgrade", type: "", cap: shared_cap},
	{name: "Ohmic Contacts", type: "", cap: shared_cap},
	{name: "Skliar", type: "", cap: shared_cap},
	{name: "DNA Filter Device ME4005", type: "", cap: shared_cap},
	{name: "Pt Thin Film", type: "", cap: shared_cap},
	{name: "ESR Samples: Start-up", type: "", cap: shared_cap},
	{name: "Parylene Biocompatibility", type: "", cap: shared_cap},
	{name: "TerraTek", type: "", cap: shared_cap},
	{name: "QUANTUM SPIN LATTICES", type: "", cap: shared_cap},
	{name: "Power Scavengers 6423", type: "", cap: shared_cap},
	{name: "Black Silicon Characterization", type: "", cap: shared_cap},
	{name: "Organic Solar Cell", type: "", cap: shared_cap},
	{name: "Microfluidic Electrical Contac", type: "", cap: shared_cap},
	{name: "Solid Oxide Fuel Cell", type: "", cap: shared_cap},
	{name: "Organic Solar Cells and FETs", type: "", cap: shared_cap},
	{name: "Spin Lattice Devices", type: "", cap: shared_cap},
	{name: "Micro Gas Sensors", type: "", cap: shared_cap},
	{name: "Terahertz Field Emitters", type: "", cap: shared_cap},
	{name: "KrF Laser Micromachining", type: "", cap: shared_cap},
	{name: "Ordered Pi Conjugated Polymers", type: "", cap: shared_cap},
	{name: "Cyberkinetics Inc", type: "", cap: shared_cap},
	{name: "Physics Tech", type: "", cap: shared_cap},
	{name: "Physics Dept Tech Operating", type: "", cap: shared_cap},
	{name: "BONE & JOINT STUDIES", type: "", cap: shared_cap},
	{name: "Ceramic Machining", type: "", cap: shared_cap},
	{name: "Sarcos", type: "", cap: shared_cap},
	{name: "Surface Analysis", type: "", cap: shared_cap},
	{name: "TIO2 Nano-Wells", type: "", cap: shared_cap},
	{name: "Grainger: Chair IDC", type: "", cap: shared_cap},
	{name: "Alumina Coating", type: "", cap: shared_cap},
	{name: "Fairchild Electroplating", type: "", cap: shared_cap},
	{name: "Microfluid Flow (Ameel Start-u", type: "", cap: shared_cap},
	{name: "Coating Microspheres With Gold", type: "", cap: shared_cap},
	{name: "Tencor Measurements", type: "", cap: shared_cap},
	{name: "UDAT Project", type: "", cap: shared_cap},
	{name: "ECE 6231- Fall 2009", type: "", cap: shared_cap},
	{name: "Surfactant", type: "", cap: shared_cap},
	{name: "Chondriotin Sulfate", type: "", cap: shared_cap},
	{name: "Residual Stress Measurement", type: "", cap: shared_cap},
	{name: "Electroabsorption2", type: "", cap: shared_cap},
	{name: "Boehme Start-Up Funds", type: "local", cap: shared_cap},
	{name: "Foreign Body Response", type: "", cap: shared_cap},
	{name: "ECE 5221- Spring 2010", type: "", cap: shared_cap},
	{name: "NONLINEARITY ANALYSIS OF SOLDI", type: "local", cap: shared_cap},
	{name: "ME 5960- Fall 2009", type: "", cap: shared_cap},
	{name: "2010 Fall- ECE 6231 Microsenso", type: "", cap: shared_cap},
	{name: "Silicon Skin Pore", type: "", cap: shared_cap},
	{name: "Charge Transfer: Organic Semic", type: "", cap: shared_cap},
	{name: "Electroabsorption", type: "", cap: shared_cap},
	{name: "2D Photonic Crystals", type: "", cap: shared_cap},
	{name: "MicroPCR BIO 6423", type: "", cap: shared_cap},
	{name: "Implantable Microsensor Array", type: "local", cap: shared_cap},
	{name: "Electronic Nose for Polymer Fi", type: "", cap: shared_cap},
	{name: "6423 Biological Spotter", type: "", cap: shared_cap},
	{name: "Biomimetic Microadaptive Lens", type: "", cap: shared_cap},
	{name: "MOLECULE/POLYMER MATERIALS", type: "", cap: shared_cap},
	{name: "DARPA Projects Solzbacher exte", type: "", cap: shared_cap},
	{name: "Returned Overhead", type: "", cap: shared_cap},
	{name: "DARPA Neural Array Fabrication", type: "", cap: shared_cap},
	{name: "ACH Antibodies BioSensor", type: "", cap: shared_cap},
	{name: "Soluble Catalysts", type: "", cap: shared_cap},
	{name: "Enhanced Microarray Substrates", type: "", cap: shared_cap},
	{name: "Photonic Crystal Structures", type: "", cap: shared_cap},
	{name: "ORGANIC SEMICONDUCTORS", type: "", cap: shared_cap},
	{name: "CLEAN AND SECURE ENERGY FROM C", type: "", cap: shared_cap},
	{name: "AK Balaji Start Up", type: "local", cap: shared_cap},
	{name: "FRG: Photovoltaic Apps", type: "", cap: shared_cap},
	{name: "Doors", type: "", cap: shared_cap},
	{name: "Trainer", type: "", cap: shared_cap},
	{name: "USTAR: Ghandehari", type: "", cap: shared_cap},
	{name: "Implantable Eye Biosensors", type: "local", cap: shared_cap},
	{name: "Glass Pillar Etching", type: "", cap: shared_cap},
	{name: "PCR Chip", type: "", cap: shared_cap},
	{name: "Flexible Solar Cells", type: "", cap: shared_cap},
	{name: "Conductive Composites", type: "", cap: shared_cap},
	{name: "Brannon Research and Developme", type: "", cap: shared_cap},
	{name: "LOW-COST IR WINDOWS AND LENSES", type: "", cap: shared_cap},
	{name: "Carbon/Ceramic Sputter Deposit", type: "", cap: shared_cap},
	{name: "Friction in Machining", type: "", cap: shared_cap},
	{name: "ECE 5212 Spring", type: "", cap: shared_cap},
	{name: "Proppant Behavior", type: "local", cap: shared_cap},
	{name: "Study of Ordering Systems", type: "", cap: shared_cap},
	{name: "BD Medical", type: "", cap: shared_cap},
	{name: "Micro EIT", type: "", cap: shared_cap},
	{name: "ME 5221- Spring 2010", type: "", cap: shared_cap},
	{name: "Photonic Crystal Structure", type: "", cap: shared_cap},
	{name: "Organic Spin Valve", type: "", cap: shared_cap},
	{name: "Jeong projects Fall 2008", type: "", cap: shared_cap},
	{name: "IMPROVING LIGHT EXTRACTION", type: "", cap: shared_cap},
	{name: "ARO: Enhanced Nonlinear Optica", type: "", cap: shared_cap},
	{name: "Denton Sputter Characterizatio", type: "", cap: shared_cap},
	{name: "Real Time Microarray", type: "", cap: shared_cap},
	{name: "Nanoscale Photonic Crystals", type: "", cap: shared_cap},
	{name: "Biosensor Arrays (Career)", type: "", cap: shared_cap},
	{name: "Bauxite project", type: "", cap: shared_cap},
	{name: "BioMicro", type: "", cap: shared_cap},
	{name: "U of U Sensors Project", type: "", cap: shared_cap},
	{name: "6225 Microsystems- Fall 2004", type: "", cap: shared_cap},
	{name: "SiN Etch", type: "", cap: shared_cap},
	{name: "Nanomagnetism", type: "", cap: shared_cap},
	{name: "Spiricon", type: "", cap: shared_cap},
	{name: "Microchannel Study", type: "", cap: shared_cap},
	{name: "Microchannel Fabrication", type: "", cap: shared_cap},
	{name: "Wayne Wingert/Physics", type: "", cap: shared_cap},
	{name: "Real-Time Heteroplasma Analysi", type: "", cap: shared_cap},
	{name: "Photonic Crystal Engineering", type: "", cap: shared_cap},
	{name: "Cardiac Remodeling", type: "", cap: shared_cap},
	{name: "Polymerase Chain Reaction", type: "", cap: shared_cap},
	{name: "Irregular Particles", type: "", cap: shared_cap},
	{name: "Slow Light", type: "", cap: shared_cap},
	{name: "Merit Medical", type: "", cap: shared_cap},
	{name: "Blair SEED Funds", type: "", cap: shared_cap},
	{name: "BIOMEDICAL MICROFLUIDICS", type: "", cap: shared_cap},
	{name: "PREPARATION OF TITANIUM BORIDE", type: "", cap: shared_cap},
	{name: "Dean Jorgensen", type: "", cap: shared_cap},
	{name: "Light Manipulation of PC", type: "", cap: shared_cap},
	{name: "Polycrystalline Diamond", type: "", cap: shared_cap},
	{name: "Hydrogel-Based Metabolic Senso", type: "", cap: shared_cap},
	{name: "Stretchy Electronics", type: "", cap: shared_cap},
	{name: "Vocal Fold Matrix", type: "", cap: shared_cap},
	{name: "Solid Oxide Fuel Cells", type: "", cap: shared_cap},
	{name: "Transparent Antennas for Small", type: "", cap: shared_cap},
	{name: "Real-time Nucleic Acid Array", type: "", cap: shared_cap},
	{name: "2010 Fall- ECE 5202 Integrated", type: "", cap: shared_cap},
	{name: "Smart Pill", type: "", cap: shared_cap},
	{name: "Smart Pill Sensor", type: "", cap: shared_cap},
	{name: "Terahertz Optoelectronics", type: "", cap: shared_cap},
	{name: "TITANIUM DIOXIDE", type: "", cap: shared_cap},
	{name: "Micro PCR Training (Wittwer)", type: "", cap: shared_cap},
	{name: "NIH Chronic Neural Recording", type: "", cap: shared_cap},
	{name: "Normann/Solzbacher joint proje", type: "", cap: shared_cap},
	{name: "2010 Fall- ME 5960 Microfluidi", type: "", cap: shared_cap},
	{name: "METALLIC NANOCAVITIES", type: "", cap: shared_cap},
	{name: "End Effects", type: "", cap: shared_cap},
	{name: "EROSION RESISTANT COATINGS", type: "", cap: shared_cap},
	{name: "MSE 5050- Fall 2009", type: "", cap: shared_cap},
	{name: "ECE 6962- Spring 2010", type: "", cap: shared_cap},
	{name: "Hydrogels 6423", type: "", cap: shared_cap},
	{name: "PDMS Spotter", type: "", cap: shared_cap},
	{name: "Field Portable Biomonitor", type: "", cap: shared_cap},
	{name: "Spin Optics", type: "", cap: shared_cap},
	{name: "Perovskite HTPC", type: "", cap: shared_cap},
	{name: "ECE6960 Spring2006", type: "", cap: shared_cap},
	{name: "MOLECULAR CHARACTERIZIATION", type: "", cap: shared_cap},
	{name: "Petroleum Research Fund", type: "", cap: shared_cap},
	{name: "Plasmonic Lattices", type: "", cap: shared_cap},
	{name: "PRECISION DESIGN LABORATORY DE", type: "", cap: shared_cap},
	{name: "REI subcontract", type: "", cap: shared_cap},
	{name: "SLC Bioscience", type: "", cap: shared_cap},
	{name: "MicroArray", type: "", cap: shared_cap},
	{name: "Kenneth Stevens Start-up ECE", type: "", cap: shared_cap},
	{name: "GALE, BRUCE START-UP", type: "", cap: shared_cap},
	{name: "MEMS Impedance: Hair Cells", type: "", cap: shared_cap},
	{name: "Waveguide Laser", type: "", cap: shared_cap},
	{name: "OLED - COE: COLAP", type: "", cap: shared_cap},
	{name: "Neural Array", type: "", cap: shared_cap},
	{name: "EDMR and ODMR on OLEDs", type: "local", cap: shared_cap},
	{name: "Plastic Prototype Development", type: "local", cap: shared_cap},
	{name: "Batch-Fabricated Nanochannel", type: "local", cap: shared_cap},
	{name: "Nano-Engines for Electronics", type: "local", cap: shared_cap},
	{name: "Rogachev Seed Funding", type: "local", cap: shared_cap},
	{name: "Photonics Patterning", type: "local", cap: shared_cap},
	{name: "Coherent Spin State Control", type: "local", cap: shared_cap},
	{name: "Wollastonite", type: "local", cap: shared_cap},
	{name: "superconducting and ferromagne", type: "local", cap: shared_cap},
	{name: "2010 Fall- MSE 5074 Solar Cell", type: "class", cap: shared_cap},
	{name: "Retrofit Impacts of OXY-COA", type: "local", cap: shared_cap},
	{name: "Hip Implant Wear", type: "local", cap: shared_cap},
	{name: "Ordered PI- Conjugated Systems", type: "local", cap: shared_cap},
	{name: "Mastrangelo USTAR", type: "local", cap: shared_cap},
	{name: "Jun Yang Dissertation Research", type: "off campus", cap: shared_cap},
	{name: "Embedded Power Converter", type: "local", cap: shared_cap},
	{name: "Conductive Properties", type: "local", cap: shared_cap},
	{name: "Guruswamy Seed Fund", type: "local", cap: shared_cap},
	{name: "Career:  Rare Earth Oxides", type: "local", cap: shared_cap},
	{name: "DEVELOPMENT OF EFFICIENT SOLAR", type: "local", cap: shared_cap},
	{name: "Early Cancer Detection Platfor", type: "local", cap: shared_cap},
	{name: "Enhanced Tactical Fuel Design", type: "local", cap: shared_cap},
	{name: "NANOTIP CWRU SUB", type: "local", cap: shared_cap},
	{name: "Lipid Asymmetry", type: "local", cap: shared_cap}
]);

all_lab_activities = new lab_activity_catalog(
[{member: "ryant", project: "Maintenance", type: "local", item: "Canary 3 SiN", bdate: new Date("2010-08-05 01:00:51"), edate: new Date("2010-08-05 04:01:02")},]);
    
my_bill = new bill();

all_projects.each(function(proj) { 
    proj.set_bill_collector(my_bill); 
    proj.set_toolset(all_items);
} );

$(document).ready(function() {
    my_add_activity_view = new add_activity_view({model: all_lab_activities, selector: '#add_activities'});
    my_activities_view = new activities_view({model: all_lab_activities, selector: '#activities'});
    my_bill_calendar_view = new bill_calendar_view({model: my_bill, selector: '#totals_table'});
    
    my_tier1_view = new tier_view({model: tier1, selector: '#tier1_rate'});
    my_tier2_view = new tier_view({model: tier2, selector: '#tier2_rate'});
    my_tier3_view = new tier_view({model: tier3, selector: '#tier3_rate'});
    my_tier4_view = new tier_view({model: tier4, selector: '#tier4_rate'});
    
    run_calculations();
   
    all_lab_activities.on('add', function(item) {
        var proj = all_projects.find_by_name(item.get('project'));
        proj.add_lab_activity(item);
    });
    
    setup_sorter();

    $('#run_calculation').click(run_calculations);
    $('#save').click(save);
    $('#load').click(load);
    $('#load_coral_enables').click(load_coral_enables);

    my_cap_view = new cap_view({model: shared_cap, selector: '#cap_settings'});
    
    all_backbone_objects = {
        //"all_lab_activities": all_lab_activities,
        "all_items": all_items,
        //"all_projects": all_projects,
        "all_tiers": all_tiers,
        "shared_cap": shared_cap
    };
    
    restore_if_asked();
});

function restore_if_asked() {
    if (global_restore_object != null) {
        var items = global_restore_object.all_items;
	var i = 0;
        $(items).each(function() {
		if ( (this != undefined ) &&  (this.tier != undefined ) && (this.tier.name != undefined) ) {
			sorter.manual_assign(this.name, this.tier.name);
		}
        });
        tier1.set('rate', global_restore_object.all_tiers[0].rate);
        tier2.set('rate', global_restore_object.all_tiers[1].rate);
        tier3.set('rate', global_restore_object.all_tiers[2].rate);
        tier4.set('rate', global_restore_object.all_tiers[3].rate);
        shared_cap.set('threshold', global_restore_object.shared_cap.threshold);
        shared_cap.set('rate', global_restore_object.shared_cap.rate);
    }
}

function serialize() {
    var json = JSON.stringify(all_backbone_objects);
    return json;
}

function save() {
    var postData = {
        input: serialize()
    };
    $.post('save_for_download.php', postData, function(retData) {
        downloadURL('download.php');
    }); 
}

var downloadURL = function downloadURL(url)
{
    var iframe;
    iframe = document.getElementById("hiddenDownloader");
    if (iframe === null)
    {
        iframe = document.createElement('iframe');  
        iframe.id = "hiddenDownloader";
        iframe.style.visibility = 'hidden';
        document.body.appendChild(iframe);
    }
    iframe.src = url;   
}

function load() {
    $('<form action="upload.php" method="post" enctype="multipart/form-data"> \
		<input type="file" name="file">  \
		<input type="submit" name="submit" value="Submit"> \
	</form>').dialog({width: 500});
}

function setup_sorter() {
    //set up categorizer
    var tool_names = all_items.pluck('name');
    var tier_names = all_tiers.pluck('name');
    sorter = new Taxonomizer();
    sorter.initialize($('#tools_tab'));
    sorter.set_categories(tier_names);
    sorter.set_subjects(tool_names);
    sorter.set_observer(function(src, tgt) {
        var tier = all_tiers.where({name: tgt})[0];
        var tool = all_items.where({name: src})[0];
        tool.set('tier', tier);
    });
}

function run_calculations() {
    my_bill.reset();
    all_lab_activities.each(function(act) { 
        try {
            var proj = all_projects.find_by_name(act.get('project'));
            proj.add_lab_activity(act);
        } catch ( except) {
            console.log('caught: ' + except);
        }
    });
}

function crunch_the_numbers(some_enables) {
    var number_of_errors = 0;
    
    for (i = 0; i < some_enables.length; i++) {
         var proj = all_projects.find_by_name( some_enables[i]['project'] );
         if (proj) {
            proj.add_lab_activity(new lab_activity(some_enables[i]));
            console.log('Loading activity #' + i + ': ' + some_enables[i]['member'] + ' on ' +  coral_enables[i]['project']);
         } else {
             number_of_errors++;
            console.log('Error #' + number_of_errors + ': no such project "' + some_enables[i]['project'] + '"');
         }
    }
}

function load_coral_enables() {
    //turn off the month_view's observe binding on the bill because this will take a while
    $(my_bill_calendar_view.month_views).each(function(key, val){val.model.off('add');});

    var batch = new batch_processor({
        data: coral_enables,
        process_function: crunch_the_numbers,
	complete: function() {
	    //turn bindings back on for views
	    $(my_bill_calendar_view.month_views).each(function(key, val){val.model.on('add', val.render, val);});
	    $(my_bill_calendar_view.month_views).each(function(key, val){val.render();});
	}
    });
    
    batch.go();
}
