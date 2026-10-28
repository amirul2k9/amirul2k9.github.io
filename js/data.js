/* ============================================================================
   data.js  —  SINGLE SOURCE OF TRUTH for amirul2k9.github.io
   ----------------------------------------------------------------------------
   Everything on the website is generated from this file. To update the site
   you only ever edit THIS file — no HTML changes needed.

     • New paper        -> add an object to the top of PUBLICATIONS
     • New job / role   -> add to PROFILE.experience
     • New course       -> add to TEACHING
     • New research area-> add to RESEARCH
     • New project      -> add to PROJECTS   (projects.html)
     • IEEE 802 doc     -> add to STANDARDS  (Experience page)
     • Update numbers   -> edit PROFILE.stats (citations etc.)
   ========================================================================== */

const PROFILE = {
  name:      "Amirul Islam",
  honorific: "Ph.D.",
  role:      "Assistant Professor",
  dept:      "Department of Electrical and Electronic Engineering",
  school:    "BSRM School of Engineering, BRAC University",
  photo:     "assets/img/amirul.jpg",
  room:      "4E23",
  ext:       "1841",
  email:     "amirul.islam@bracu.ac.bd",
  emailAlt:  "amirul.0903118@gmail.com",
  phone:     "+880 9638 464646",
  address:   "Kha-224, Bir Uttam Rafiqul Islam Ave, Merul Badda, Dhaka 1212, Bangladesh",
  mapEmbed:  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.296056615635!2d90.42047627822032!3d23.772469623619408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78e49160331%3A0x2fd8ec432cec9fc4!2sBRAC%20University!5e0!3m2!1sen!2sbd!4v1707842777541!5m2!1sen!2sbd",

  // The research cluster you belong to (shown on Home + footer)
  lab: {
    name:  "Research Cluster of Communication Networks and Systems",
    short: "C2NS",
    url:   "https://communicationlab.github.io/research/"
  },

  // Author string used to bold your name in publication lists
  authorName: "A. Islam",

  // Home-page hero
  heroKicker: "Assistant Professor · BRAC University",
  heroLine:   "Machine learning for <span class=\"grad\">reliable, low-latency</span> communication.",
  heroLead:   "I design learning-driven communication systems — deep reinforcement learning for ultra-reliable vehicular optical links, intelligent wireless networks for B5G/6G, and AI that runs at the edge for healthcare and energy.",

  // Profile links — leave a value empty ("") to hide that icon
  links: {
    scholar:      "https://scholar.google.com/citations?user=uX5PG0AAAAAJ&hl=en",
    orcid:        "https://orcid.org/0000-0003-0014-7267",
    linkedin:     "https://www.linkedin.com/in/islam-amirul/",
    github:       "https://github.com/amirul2k9",
    x:            "https://x.com/Amirul0191",
    bracu:        "https://engineering.bracu.ac.bd/profile/amirul-islam-phd",
    researchgate: ""
  },

  // Headline numbers. "auto:*" values are counted from PUBLICATIONS below,
  // so they stay correct as you add papers. Update citations by hand.
  stats: [
    { value: 1600,               suffix: "+", label: "Citations (Google Scholar)" },
    { value: "auto:journal",     suffix: "",  label: "Journal articles" },
    { value: "auto:q1",          suffix: "",  label: "Q1 journal papers" },
    { value: "auto:standard",    suffix: "",  label: "IEEE 802 contributions" }
  ],

  bio: [
    "Dr. Amirul Islam is an Assistant Professor in the Department of Electrical and Electronic Engineering at BRAC University, Dhaka, which he joined in June 2025, and a member of the university's Research Cluster of Communication Networks and Systems (C2NS). Before this he was an Assistant Professor at American International University-Bangladesh (2023–2025).",
    "He was a Postdoctoral Researcher at the Visual Artificial Intelligence Laboratory, Oxford Brookes University, UK, where he led the MAESTRO Jr. project on multimodal cognitive-workload assessment in surgical environments.",
    "He received his Ph.D. in Computing and Electronic Systems from the University of Essex, UK (2022), with a thesis on machine-learning-assisted ultra-reliable and low-latency vehicular optical camera communications; an M.Sc. in Electronics Engineering from Kookmin University, South Korea (2017); and a B.Sc. in Electrical and Electronic Engineering from KUET, Bangladesh (2014). During his master's he contributed to IEEE 802.15 standardization on image-sensor and long-range automotive optical wireless communication."
  ],

  interests: [
    "Machine learning for communication",
    "Deep & multi-agent reinforcement learning",
    "Ultra-reliable low-latency communication (uRLLC)",
    "Optical wireless & optical camera communication",
    "Vehicular and UAV networks",
    "Embedded edge AI for medical imaging",
    "AI for energy and power systems",
    "B5G / 6G wireless networks"
  ],

  experience: [
    { year: "2025 – Present", position: "Assistant Professor", org: "Department of EEE, BRAC University, Bangladesh" },
    { year: "2023 – 2025",    position: "Assistant Professor", org: "Department of EEE, American International University-Bangladesh (AIUB)" },
    { year: "2022 – 2023",    position: "Postdoctoral Researcher", org: "Visual Artificial Intelligence Laboratory, Oxford Brookes University, UK", note: "Project leader, MAESTRO Jr." },
    { year: "2020 – 2022",    position: "Assistant Lecturer & Graduate Laboratory Assistant", org: "School of Computer Science and Electronic Engineering, University of Essex, UK" },
    { year: "2018 – 2022",    position: "Postgraduate Researcher", org: "University of Essex, UK", note: "Supervisors: Prof. Leila Musavian and Prof. Nikolaos Thomos" },
    { year: "2018",           position: "Lecturer in EEE", org: "Varendra University, Rajshahi, Bangladesh" },
    { year: "2015 – 2017",    position: "Graduate Research Student", org: "Wireless Communications & Artificial Intelligence Lab, Kookmin University, South Korea", note: "Supervisor: Prof. Yeong Min Jang" }
  ],

  education: [
    { year: "2022", deg: "Ph.D. in Computing and Electronic Systems", org: "University of Essex, United Kingdom",
      thesis: "Machine Learning Assisted Ultra Reliable and Low Latency Vehicular Optical Camera Communications" },
    { year: "2017", deg: "M.Sc. in Electronics Engineering", org: "Kookmin University, South Korea",
      thesis: "Convolutional Neural Network-based Optical Camera Communication System for Internet of Vehicles" },
    { year: "2014", deg: "B.Sc. in Electrical and Electronic Engineering", org: "Khulna University of Engineering & Technology (KUET), Bangladesh",
      thesis: "Predictive Torque and Flux Control of Induction Motor using MATLAB Simulation" }
  ]
};

/* ===========================================================================
   RESEARCH AREAS
   icon: share | wave | signal | camera | brain | bolt | car | grid | orbit | heart | leaf
   ========================================================================= */
const RESEARCH = [
  { id: "ml-comms", title: "Machine Learning for Communication", band: "AI · ML", icon: "brain",
    lead: "Deep and multi-agent reinforcement learning that learns codes, modulation and power allocation directly from the channel.",
    points: ["Deep & multi-agent RL", "Learned modulation and coding", "Spectral-efficiency optimisation"] },
  { id: "owc", title: "Optical Wireless & Camera Communication", band: "Optical", icon: "camera",
    lead: "Using LEDs and image sensors as a communication link — for vehicles, positioning and IoT — including IEEE 802.15.7 work.",
    points: ["Optical camera communication (OCC)", "Image-sensor communication", "Indoor optical localisation"] },
  { id: "urllc", title: "Ultra-Reliable Low-Latency Communication", band: "uRLLC", icon: "bolt",
    lead: "Meeting strict reliability and latency budgets with 5G NR codes, dynamic power allocation and learning-based control.",
    points: ["5G NR codes & modulation", "Latency–reliability trade-offs", "Rate optimisation under QoS"] },
  { id: "vehicular", title: "Vehicular & UAV Networks", band: "V2X · UAV", icon: "car",
    lead: "Connecting the internet of vehicles and autonomous drone swarms through optical and radio links and learned navigation.",
    points: ["Vehicular OCC", "Multi-agent coordination", "UAV swarm navigation"] },
  { id: "health", title: "Edge AI for Healthcare", band: "Medical AI", icon: "heart",
    lead: "Embedded, resource-aware AI for medical imaging and diagnosis, and multimodal sensing of surgeons' cognitive workload.",
    points: ["Edge AI for medical imaging", "Multimodal data fusion", "Surgical workload assessment"] },
  { id: "energy", title: "AI for Energy & Power Systems", band: "Smart grid", icon: "leaf",
    lead: "Explainable machine learning for load forecasting, fault diagnosis and protection in renewable-rich power systems.",
    points: ["Short-term load forecasting", "Wind-turbine fault classification", "DC-microgrid protection"] }
];

/* ===========================================================================
   PROJECTS   (shown on projects.html — newest / ongoing first)
   ---------------------------------------------------------------------------
   status : "Ongoing" | "Completed" | "Planned"
   icon   : share | wave | signal | camera | brain | bolt | car | grid | orbit | heart | leaf
   image  : optional, e.g. "assets/img/projects/my-project.jpg" (wide image ~1200x600)
   funding, team, links : optional — delete any line you don't need
   links  : any of { paper, code, website, slides, video }

   ⚠ The first three projects marked  // DEMO  are placeholders written from
     your research areas. Edit their text (or delete them) when you have the
     real details.

   Template:
   { title: "", status: "Ongoing", role: "Principal Investigator", org: "BRAC University",
     period: "2026 – Present", icon: "brain", funding: "", team: "",
     tags: ["", ""], desc: "", links: { paper: "", code: "" } },
   ========================================================================= */
const PROJECTS = [
  // DEMO — replace with real details
  { title: "Embedded Edge AI for Medical Image Analysis", status: "Ongoing", role: "Principal Investigator",
    org: "Dept. of EEE, BRAC University", period: "2025 – Present", icon: "heart",
    team: "Undergraduate thesis group, BRAC University",
    tags: ["Edge AI", "Medical Imaging", "Model Compression"],
    desc: "Lightweight deep-learning models that run on low-power embedded hardware for on-device medical image analysis, studying the accuracy–latency–energy trade-off for point-of-care diagnosis.",
    links: { paper: "", code: "" } },

  // DEMO — replace with real details
  { title: "Learning-Driven Resource Allocation for 6G Links", status: "Ongoing", role: "Principal Investigator",
    org: "C2NS, BRAC University", period: "2025 – Present", icon: "signal",
    team: "Graduate student researchers, C2NS",
    tags: ["6G", "Deep RL", "Resource Allocation"],
    desc: "Deep and multi-agent reinforcement learning for power, rate and link allocation in next-generation wireless and optical networks under strict reliability and latency constraints.",
    links: { paper: "", code: "" } },

  // DEMO — replace with real details
  { title: "Explainable AI for Renewable Energy Systems", status: "Ongoing", role: "Co-Investigator",
    org: "BRAC University", period: "2025 – Present", icon: "leaf",
    tags: ["Explainable ML", "Fault Diagnosis", "Load Forecasting"],
    desc: "Interpretable machine-learning pipelines for wind-turbine fault severity classification, short-term load forecasting and DC-microgrid protection.",
    links: { paper: "https://doi.org/10.1016/j.ecmx.2026.101621" } },

  { title: "MAESTRO Jr. — Multimodal Cognitive Workload Assessment", status: "Completed", role: "Project Lead",
    org: "Visual AI Lab, Oxford Brookes University, UK", period: "2022 – 2023", icon: "heart",
    tags: ["Medical Robotics", "Multimodal ML", "Surgery"],
    desc: "Led a project assessing surgeons' cognitive workload from multimodal signals in surgical environments, bridging medical robotics and machine learning." },

  { title: "Deep-RL Ultra-Reliable Low-Latency Vehicular OCC", status: "Completed", role: "Doctoral Research",
    org: "University of Essex, UK", period: "2018 – 2022", icon: "brain",
    tags: ["Deep RL", "uRLLC", "Vehicular OCC"],
    desc: "Deep and multi-agent reinforcement learning to jointly optimise codes, modulation and spectral efficiency for ultra-reliable, low-latency vehicular optical camera communication.",
    links: { paper: "https://doi.org/10.1109/TCOMM.2024.3478108" } },

  { title: "Optical Camera Communication for the Internet of Vehicles", status: "Completed", role: "Graduate Researcher",
    org: "Kookmin University, South Korea", period: "2015 – 2017", icon: "camera",
    tags: ["OCC", "IoV", "IEEE 802.15"],
    desc: "Convolutional-neural-network and adaptive image-sensor schemes for intelligent vehicular optical camera communication and indoor localisation, with contributions to IEEE 802.15 interest groups.",
    links: { paper: "https://doi.org/10.1177/1550147718770153" } }
];

/* ===========================================================================
   TEACHING   (newest first)
   ========================================================================= */
const TEACHING = [
  { org: "BRAC University, Bangladesh", period: "2025 – Present", role: "Assistant Professor",
    courses: ["Satellite Communications", "Fundamentals of Image Processing, Computer Vision & Machine Learning"] },
  { org: "American International University-Bangladesh", period: "2023 – 2025", role: "Assistant Professor",
    courses: [] },
  { org: "University of Essex, UK", period: "2020 – 2022", role: "Assistant Lecturer · Graduate Laboratory Assistant",
    courses: ["Languages and Compilers (Assistant Lecturer)", "Neural Networks and Deep Learning (MSc)", "Mathematics for Computing", "Digital Electronic Systems", "Network Fundamentals (CISCO)", "Telecommunication Principles", "Large Scale Software Systems and Extreme Programming", "Introduction to Programming (Python)", "Advanced Programming (Java)", "Introduction to Databases", "Fundamentals of Digital Systems"] },
  { org: "Varendra University, Bangladesh", period: "2018", role: "Lecturer in EEE", courses: [] },
  { org: "Kookmin University, South Korea", period: "2017", role: "Graduate Laboratory Assistant",
    courses: ["Fundamental Electronics Engineering Lab I"] }
];

/* ===========================================================================
   PUBLICATIONS
   type:     "journal" | "conference"
   status:   optional — "accepted", "early access", "preprint"
   quartile: optional — "Q1".."Q4"
   domestic: optional — true for Korean domestic venues (KICS / JCCI)
   doi:      if given, the title links to https://doi.org/<doi> (unless url is set)
   Template:
   { year: 2026, month: "Jul", type: "journal", quartile: "Q1", authors: "A. Islam, ...", title: "...", venue: "...", volume: "", issue: "", pages: "", doi: "" },
   ========================================================================= */
const PUBLICATIONS = [
  /* ---- Journals ---- */
  { year: 2026, month: "Dec", type: "journal", quartile: "Q1", authors: "Md. S. Hossain, Md T. Hassan, and A. Islam", title: "G-Buffer-Guided Feature Modulation for Lightweight Rendered Image Super-Resolution", venue: "Array", volume: "32", issue: "101324", pages: "1-12", doi: "10.1016/j.array.2026.101324", url: "https://www.sciencedirect.com/science/article/pii/S2590005626006478" },
  { year: 2026, month: "Sep", type: "journal", quartile: "Q1", authors: "M. M. Alam, M. Mumtahinah, M. J. Ul Ahsan, R. N. Cruze, M. N. Morshed, A. Islam, M. A. Khan, M. Y. Arafat", title: "Synergizing Multimodal Large Language Models and GRPO-based Physics-Guided DRL for UAV Swarm Navigation in Dynamic Environments", venue: "IEEE Access", volume: "14", pages: "151755 - 151769", doi: "10.1109/ACCESS.2026.3738149", url: "https://ieeexplore.ieee.org/document/11715755" },
  { year: 2026, month: "Aug", type: "journal", status: "accepted", quartile: "Q2", authors: "S. Mahmood, S. A. Trina, M. E. Khandokar, A. S. Sukanna, M. S. Ahmed, A. Islam", title: "Intelligent Multi-Modal Learning Framework for Cybersecurity Threat Detection in IoT", venue: "IAES International Journal of Artificial Intelligence" },
  { year: 2026, month: "Jan", type: "journal", quartile: "Q1", authors: "N. N. Karima, S. Ahmad, A. Islam, et al.", title: "Enhancing Short-Term Load Forecasting Using Hyperparameter-Optimized Deep Learning Approaches", venue: "Energies", volume: "19", issue: "3", pages: "1-30", doi: "10.3390/en19030705" },
  { year: 2026, month: "May", type: "journal", quartile: "Q1", authors: "A. M. Arika, A. S. N. Huda, S. Ahmad, A. Islam", title: "Vibration-Based Multi-Class Fault Severity Classification of Wind Turbine Gearboxes Using Explainable Machine Learning", venue: "Energy Conversion and Management: X", volume: "30", pages: "1-31", doi: "10.1016/j.ecmx.2026.101621" },
  { year: 2026, month: "Jun", type: "journal", quartile: "Q1", authors: "U. Dev, M. R. Uddin, S. Ahmad, A. Islam, A. S. N. Huda, et al.", title: "Edge Cutting and AI-Driven Protection Strategies for DC Microgrids: A Comprehensive Survey of Challenges, Technologies, and Future Trends", venue: "Results in Engineering", volume: "30", pages: "1-23", doi: "10.1016/j.rineng.2026.110013" },
  { year: 2026, month: "Apr", type: "journal", quartile: "Q4", authors: "S. Mahmood, S. A. Trina, A. S. Sukanna, M. S. Ahmed, A. Islam", title: "Multi-Model Deep Ensemble Framework for Early Diagnosis of Rare Genetic Disorders Using Genomic, Phenotypic, and EHR Data Fusion", venue: "Indonesian Journal of Electrical Engineering and Computer Science", volume: "42", issue: "1", pages: "215-224", doi: "10.11591/ijeecs.v42.i1.pp215-224", url: "https://ijeecs.iaescore.com/index.php/IJEECS/article/view/45153/19971" },
  { year: 2026, month: "Apr", type: "journal", quartile: "Q2", authors: "A. Islam, T. Hossain, R. Basak, Md. S. R. Zishan", title: "Dynamic Power Allocation for Rate Optimization in Vehicular Reliable and Low-latency Camera Communications", venue: "ETRI Journal", volume: "48", issue: "2", pages: "219 – 323", doi: "10.4218/etrij.2025-0010", url: "https://onlinelibrary.wiley.com/doi/10.4218/etrij.2025-0010" },
  { year: 2025, month: "May", type: "journal", quartile: "Q1", authors: "A. Islam, N. Thomos, L. Musavian", title: "Deep Reinforcement Learning Based Ultra Reliable and Low Latency Vehicular OCC", venue: "IEEE Transactions on Communications", volume: "73", issue: "5", pages: "3254-3267", doi: "10.1109/TCOMM.2024.3478108" },
  { year: 2024, month: "Dec", type: "journal", quartile: "Q1", authors: "A. Islam, N. Thomos, L. Musavian", title: "5G NR Codes and Modulation Deep-RL Optimization for uRLLC in Vehicular OCC", venue: "IEEE Transactions on Intelligent Transportation Systems", volume: "25", issue: "12", pages: "19592-19604", doi: "10.1109/TITS.2024.3462742" },
  { year: 2024, month: "Aug", type: "journal", quartile: "Q2", authors: "F. Ahmmed, A. Rahman, A. Islam, A. Alaly, S. Mehnaj, P. Saha, T. Hossain", title: "Arduino-Controlled Multi-Function Robot with Bluetooth and nRF24L01+ Communication", venue: "International Journal of Robotics and Control Systems", volume: "4", issue: "3", pages: "1353-1381", doi: "10.31763/ijrcs.v4i3.1517" },
  { year: 2024, month: "May", type: "journal", quartile: "Q1", authors: "A. Islam, N. Thomos, L. Musavian", title: "Multi-agent Deep Reinforcement Learning for Spectral Efficiency Optimization in Vehicular Optical Camera Communications", venue: "IEEE Transactions on Mobile Computing", volume: "23", issue: "5", pages: "3666-3679", doi: "10.1109/TMC.2023.3278277" },
  { year: 2018, month: "Apr", type: "journal", quartile: "Q1", authors: "A. Islam, M. T. Hossan, Y. M. Jang", title: "Convolutional Neural Network Scheme-Based Optical Camera Communication System for Intelligent Internet of Vehicles", venue: "International Journal of Distributed Sensor Networks", volume: "14", issue: "4", pages: "1-19", doi: "10.1177/1550147718770153" },
  { year: 2018, month: "Jan", type: "journal", quartile: "Q1", authors: "M. Z. Chowdhury, M. T. Hossan, A. Islam, Y. M. Jang", title: "A Comparative Survey of Optical Wireless Technologies: Architectures and Applications", venue: "IEEE Access", volume: "6", issue: "1", pages: "9819-9840", doi: "10.1109/ACCESS.2018.2792419" },
  { year: 2018, month: "Feb", type: "journal", authors: "M. T. Hossan, M. Z. Chowdhury, A. Islam, Y. M. Jang", title: "A Novel Indoor Mobile Localization System Based on Optical Camera Communication", venue: "Wireless Communications and Mobile Computing", volume: "2018", pages: "1-17", doi: "10.1155/2018/9353428" },
  { year: 2018, month: "Feb", type: "journal", quartile: "Q1", authors: "T. Nguyen, A. Islam, T. Yamazato, Y. M. Jang", title: "Technical Issues on IEEE 802.15.7m Task Group and Image Sensor Communication Technologies", venue: "IEEE Communications Magazine", volume: "56", issue: "2", pages: "213-218", doi: "10.1109/MCOM.2018.1700134" },
  { year: 2017, month: "Nov", type: "journal", quartile: "Q2", authors: "A. Islam, M. T. Hossan, T. Nguyen, Y. M. Jang", title: "Adaptive Spatial-Temporal Resolution Optical Vehicular Communication System Using Image Sensor", venue: "International Journal of Distributed Sensor Networks", volume: "13", issue: "11", pages: "1-15", doi: "10.1177/1550147717743698" },
  { year: 2017, month: "Mar", type: "journal", quartile: "Q1", authors: "T. Nguyen, A. Islam, M. T. Hossan, Y. M. Jang", title: "Current Status and Performance Analysis of Optical Camera Communication Technologies for 5G Networks", venue: "IEEE Access", volume: "5", issue: "1", pages: "4574-4594", doi: "10.1109/ACCESS.2017.2681110" },
  { year: 2017, month: "Feb", type: "journal", quartile: "Q2", authors: "T. Nguyen, A. Islam, Y. M. Jang", title: "Region-of-Interest Signaling Vehicular System Using Optical Camera Communications", venue: "IEEE Photonics Journal", volume: "9", issue: "1", pages: "1-20", doi: "10.1109/JPHOT.2016.2644960" },
  { year: 2017, month: "Aug", type: "journal", quartile: "Q4", domestic: true, authors: "M. T. Hossain, A. Islam, Y. M. Jang", title: "Design of an Intelligent Universal Driver Circuits for LED Lights", venue: "Journal of Korean Institute of Communications and Information Sciences", volume: "42", issue: "8", pages: "1621-1628", doi: "10.7840/kics.2017.42.8.1621" },
  { year: 2016, month: "Jul", type: "journal", quartile: "Q2", authors: "M. A. Hossain, A. Islam, N. T. Le, H. W. Lee, Y. T. Lee, Y. M. Jang", title: "Performance Analysis of Smart Digital Signage System Based on Software-Defined IoT and Invisible Image Sensor Communication", venue: "International Journal of Distributed Sensor Networks", volume: "12", issue: "7", pages: "1-14", doi: "10.1177/1550147716657926" },
  { year: 2016, type: "journal", authors: "N. T. Le, M. A. Hossain, A. Islam, D. Y. Kim, Y. J. Choi, Y. M. Jang", title: "Survey of Promising Technologies for 5G Networks", venue: "Mobile Information Systems", volume: "2016", pages: "25 pages", doi: "10.1155/2016/2676589" },
  { year: 2016, month: "Aug", type: "journal", quartile: "Q4", domestic: true, authors: "T. Nguyen, C. H. Hong, A. Islam, N. T. Le, Y. M. Jang", title: "Flicker-Free Spatial-PSK Modulation for Vehicular ISC System Based on Neural Network", venue: "Journal of Korean Institute of Communications and Information Sciences", volume: "41", issue: "8", pages: "843-850", doi: "10.7840/kics.2016.41.8.843" },
  { year: 2016, month: "Feb", type: "journal", quartile: "Q4", domestic: true, authors: "A. Islam, M. A. Hossain, N. T. Le, C. H. Hong, Y. M. Jang", title: "Robust Software-Defined Scheme for Image Sensor Network", venue: "Journal of Korean Institute of Communications and Information Sciences", volume: "41", issue: "2", pages: "215-221", doi: "10.7840/kics.2016.41.2.215" },
  { year: 2016, month: "Feb", type: "journal", quartile: "Q4", domestic: true, authors: "M. A. Hossain, N. T. Le, A. Islam, C. H. Hong, Y. M. Jang", title: "Invisible Watermarking Based Optical Wireless Communications", venue: "Journal of Korean Institute of Communications and Information Sciences", volume: "41", issue: "2", pages: "198-205", doi: "10.7840/kics.2016.41.2.198" },

  /* ---- Conferences ---- */
  { year: 2026, month: "Jan", type: "conference", authors: "A. S. Sukanna, S. Mahmood, S. A. Trina, A. Islam", title: "A Dual-Recurrent Attention Architecture for High-Recall Sentiment Analysis in Noisy Twitter Texts", venue: "5th International Conference on Electrical, Computer & Telecommunication Engineering", pages: "1-6", location: "Rajshahi, Bangladesh", doi: "10.1109/ICECTE69292.2026.11429206" },
  { year: 2026, month: "Jan", type: "conference", authors: "S. Mahmood, S. A. Trina, M. S. Ahmed, A. Islam", title: "Energy-Regularized Bidirectional Recurrent Attention Networks with Contrastive Confidence Modeling for Lightweight and Explainable Sentiment Classification", venue: "5th International Conference on Electrical, Computer & Telecommunication Engineering", pages: "1-6", location: "Rajshahi, Bangladesh", doi: "10.1109/ICECTE69292.2026.11429196", url: "10.1109/ICECTE69292.2026.11429196" },
  { year: 2025, month: "Dec", type: "conference", authors: "Sauda, M. N. Khan, B. C. Biddut, H. B. Nishan, A. Islam", title: "Dual-Mode Automated Cleaning System for Enhanced Solar Panel System Efficiency", venue: "28th International Conference on Computer and Information Technology (ICCIT)", pages: "1004-1009", location: "Cox's Bazar, Bangladesh", doi: "10.1109/ICCIT68739.2025.11491220" },
  { year: 2022, month: "Dec", type: "conference", authors: "A. Islam, N. Thomos, L. Musavian", title: "Achieving uRLLC with Machine Learning Based Vehicular OCC", venue: "IEEE Global Communications Conference (GLOBECOM)", pages: "4558-4563", location: "Rio de Janeiro, Brazil", doi: "10.1109/GLOBECOM48099.2022.10001692" },
  { year: 2022, month: "Jun", type: "conference", authors: "A. Islam, L. Musavian, N. Thomos", title: "Multi-agent Deep Reinforcement Learning in Vehicular OCC", venue: "IEEE Vehicular Technology Conference (VTC Spring)", pages: "1-6", location: "Helsinki, Finland", doi: "10.1109/VTC2022-Spring54318.2022.9860869" },
  { year: 2019, month: "Dec", type: "conference", authors: "A. Islam, L. Musavian, N. Thomos", title: "Performance Analysis of Vehicular Optical Camera Communications: Roadmap to uRLLC", venue: "IEEE Global Communications Conference (GLOBECOM)", pages: "1-6", location: "Waikoloa, HI, USA", doi: "10.1109/GLOBECOM38437.2019.9013795" },
  { year: 2018, month: "Jan", type: "conference", authors: "A. Islam, M. T. Hossain, M. Z. Chowdhury, Y. M. Jang", title: "Design of an Indoor Positioning Scheme Using Artificial Intelligence Algorithms", venue: "International Conference on Information Networking (ICOIN)", pages: "953-956", location: "Chiang Mai, Thailand", doi: "10.1109/ICOIN.2018.8343265" },
  { year: 2017, month: "Aug", type: "conference", authors: "A. Islam, M. T. Hossain, M. Z. Chowdhury, Y. M. Jang", title: "An Indoor Localization Scheme Based on Integrated Artificial Neural Fuzzy Logic", venue: "IEEE Vehicular Technology Society Asia Pacific Wireless Communications Symposium (APWCS)", location: "Incheon, South Korea" },
  { year: 2017, month: "Jul", type: "conference", authors: "A. Islam, M. T. Hossain, Y. M. Jang", title: "Introduction of Optical Camera Communication for Internet of Vehicles (IoV)", venue: "IEEE International Conference on Ubiquitous and Future Networks (ICUFN)", pages: "122-125", location: "Milan, Italy", doi: "10.1109/ICUFN.2017.7993760" },
  { year: 2017, month: "Jul", type: "conference", authors: "M. T. Hossain, M. Z. Chowdhury, A. Islam, Y. M. Jang", title: "Simplified Photogrammetry Using Optical Camera Communication for Indoor Positioning", venue: "IEEE International Conference on Ubiquitous and Future Networks (ICUFN)", pages: "126-130", location: "Milan, Italy", doi: "10.1109/ICUFN.2017.7993761" },
  { year: 2016, month: "Oct", type: "conference", authors: "A. Islam, M. A. Hossain, T. Nguyen, Y. M. Jang", title: "High Temporal-Spatial Resolution Optical Wireless Communication Technique Using Image Sensor", venue: "International Conference on Information and Communication Technology Convergence (ICTC)", pages: "1165-1169", location: "Jeju Island, South Korea", doi: "10.1109/ICTC.2016.7763416" },
  { year: 2016, month: "Oct", type: "conference", authors: "M. A. Hossain, A. Islam, Y. M. Jang", title: "Effects of Viewing Angle Between Camera and Display in Invisible Image Sensor Communication", venue: "International Conference on Information and Communication Technology Convergence (ICTC)", pages: "1221-1223", location: "Jeju Island, South Korea", doi: "10.1109/ICTC.2016.7763412" },
  { year: 2016, month: "Jul", type: "conference", authors: "A. Islam, M. A. Hossain, Y. M. Jang", title: "Interference Mitigation Technique for Time-of-Flight (ToF) Camera", venue: "IEEE International Conference on Ubiquitous and Future Networks (ICUFN)", pages: "134-139", location: "Vienna, Austria", doi: "10.1109/ICUFN.2016.7537001" },
  { year: 2016, month: "Jul", type: "conference", authors: "M. A. Hossain, A. Islam, Y. M. Jang", title: "Pixel-to-Signal Conversion Based Invisible Image Sensor Communication", venue: "IEEE International Conference on Ubiquitous and Future Networks (ICUFN)", pages: "448-452", location: "Vienna, Austria", doi: "10.1109/ICUFN.2016.7537068" },
  { year: 2016, month: "Jul", type: "conference", authors: "T. Nguyen, N. T. Le, M. A. Hossain, C. H. Hong, A. Islam, Y. M. Jang", title: "Flicker-Free Spatial-PSK Modulation Scheme for Vehicular Image Sensor Communications", venue: "IEEE International Conference on Ubiquitous and Future Networks (ICUFN)", pages: "128-133", location: "Vienna, Austria", doi: "10.1109/ICUFN.2016.7537000" },
  { year: 2016, month: "Apr", type: "conference", domestic: true, authors: "A. Islam, M. A. Hossain, N. T. Le, C. H. Hong, T. Nguyen, Y. M. Jang", title: "Precise Localization in Tunnel Environment using Visible Light Communication", venue: "26th Joint Conference on Communications and Information (JCCI)", location: "South Korea" },
  { year: 2016, month: "Apr", type: "conference", domestic: true, authors: "A. Islam, M. A. Hossain, C. H. Hong, Y. M. Jang", title: "Image Sensor based Indoor Localization Scheme using Fuzzy Logic in Ambient Intelligent Environments", venue: "26th Joint Conference on Communications and Information (JCCI)", location: "South Korea" },
  { year: 2016, month: "Apr", type: "conference", domestic: true, authors: "M. A. Hossain, A. Islam, N. T. Le, T. Nguyen, C. H. Hong, Y. M. Jang", title: "Opportunities from Invisible Watermarking for Device-to-Device Communication", venue: "26th Joint Conference on Communications and Information (JCCI)", location: "South Korea" },
  { year: 2016, month: "Apr", type: "conference", domestic: true, authors: "M. A. Hossain, A. Islam, C. H. Hong, N. T. Le, T. Nguyen, Y. M. Jang", title: "Similarity Analysis for Invisibility in Image Sensor Communication", venue: "26th Joint Conference on Communications and Information (JCCI)", location: "South Korea" },
  { year: 2016, month: "Jan", type: "conference", domestic: true, authors: "A. Islam, M. A. Hossain, Y. M. Jang", title: "SVM-based Positioning Approach in Image Sensor Network", venue: "KICS Winter Conference", location: "South Korea" },
  { year: 2015, month: "Dec", type: "conference", authors: "A. Islam, M. A. Hossain, Y. M. Jang", title: "Software Defined Networking Enabled Digital Signage for Disaster Management", venue: "KICS Korea and Southeast Asia ICT International Workshop", pages: "1-2", location: "Siem Reap, Cambodia" }
];

/* ===========================================================================
   STANDARDIZATION CONTRIBUTIONS   (shown on the Experience page, cv.html)
   Template:
   { year: 2017, month: "Jul", authors: "A. Islam, ...", title: "...", venue: "IEEE 802.15 IG VAT", number: "15-17-0000-00", url: "https://mentor.ieee.org/..." },
   ========================================================================= */
const STANDARDS = [
  { year: 2017, month: "Jul", authors: "A. Islam, M. T. Hossan, Y. M. Jang", title: "Future Applications of OWC and OCC", venue: "IEEE 802.15 IG VAT", number: "15-17-0385-00", url: "https://mentor.ieee.org/802.15/dcn/17/15-17-0385-00-0vat-future-applications-of-owc-and-occ.pptx" },
  { year: 2017, month: "Jul", authors: "A. Islam, M. T. Hossan, Y. M. Jang", title: "Long Range OCC", venue: "IEEE 802.15 IG VAT", number: "15-17-0386-00", url: "https://mentor.ieee.org/802.15/dcn/17/15-17-0386-00-0vat-long-range-occ.pptx" },
  { year: 2017, month: "Jul", authors: "M. T. Hossan, T. Nguyen, A. Islam, Y. M. Jang", title: "S2-PSK for V2V Communication", venue: "IEEE 802.15 IG VAT", number: "15-17-0387-00", url: "https://mentor.ieee.org/802.15/dcn/17/15-17-0387-00-0vat-s2-psk-for-v2v-communication.pptx" },
  { year: 2017, month: "Jul", authors: "M. T. Hossan, A. Islam, Y. M. Jang", title: "Using Rear Light for Long Range OCC to Ensure Safety Issues (Rev. 1)", venue: "IEEE 802.15 IG VAT", number: "15-17-0384-01", url: "https://mentor.ieee.org/802.15/dcn/17/15-17-0384-01-0vat-using-rear-light-for-long-range-occ-to-ensure-safety-issues.pptx" },
  { year: 2017, month: "Jul", authors: "M. T. Hossan, A. Islam, Y. M. Jang", title: "Using Rear Light for Long Range OCC to Ensure Safety Issues", venue: "IEEE 802.15 IG VAT", number: "15-17-0384-00", url: "https://mentor.ieee.org/802.15/dcn/17/15-17-0384-00-0vat-using-rear-light-for-long-range-occ-to-ensure-safety-issues.pptx" },
  { year: 2017, month: "May", authors: "A. Islam, M. T. Hossan, Y. M. Jang", title: "Interference Characterization of Artificial Light Sources for Long Range OCC", venue: "IEEE 802.15 IG VAT", number: "15-17-0276-00", url: "https://mentor.ieee.org/802.15/dcn/17/15-17-0276-00-0vat-interference-characterization-of-artificial-light-sources-for-long-range-occ.pptx" },
  { year: 2017, month: "May", authors: "M. T. Hossan, A. Islam, Y. M. Jang", title: "Using Rear Light for Long Range OCC to Ensure Safety Issues", venue: "IEEE 802.15 IG VAT", number: "15-17-0275-00", url: "https://mentor.ieee.org/802.15/dcn/17/15-17-0275-00-0vat-ieee-802-15-ig-vat-using-rear-light-for-long-range-occ-to-ensure-safety-issues.pptx" },
  { year: 2017, month: "Jan", authors: "A. Islam, Y. M. Jang", title: "Use Cases and Functional Requirements for IEEE 802.15 Vehicular Assistant Technology (VAT) IG", venue: "IEEE 802.15 IG VAT", number: "15-17-0061-00", url: "https://mentor.ieee.org/802.15/dcn/17/15-17-0061-00-0vat-use-cases-and-functional-requirements-for-ieee-802-15-vehicular-assistant-technology-vat-ig.pptx" },
  { year: 2016, month: "Nov", authors: "A. Islam, M. A. Hossain, Y. M. Jang", title: "Kookmin University Response to Call for Interests (CFI) of IEEE 802 IG-DEP", venue: "IEEE 802 IG-DEP", number: "15-15-0895-00", url: "https://mentor.ieee.org/802.15/dcn/15/15-15-0895-00-0dep-kookmin-university-response-to-call-for-interests-cfi-of-ieee-802-ig-dep.pptx" },
  { year: 2016, month: "Nov", authors: "Y. M. Jang, A. Islam", title: "Opening Long Range Automotive OWC Interest Group (Rev. 1)", venue: "IEEE 802.15 WNG", number: "15-16-0793-01", url: "https://mentor.ieee.org/802.15/dcn/16/15-16-0793-01-wng0-opening-long-range-automotive-owc-interest-group.pdf" },
  { year: 2016, month: "Nov", authors: "Y. M. Jang, A. Islam", title: "Opening Long Range Automotive OWC Interest Group", venue: "IEEE 802.15 WNG", number: "15-16-0793-00", url: "https://mentor.ieee.org/802.15/dcn/16/15-16-0793-00-wng0-opening-long-range-automotive-owc-interest-group.pdf" },
  { year: 2016, month: "Jan", authors: "Y. M. Jang, T. Nguyen, N. T. Le, M. S. Ifthekhar, M. A. Hossain, C. H. Hong, A. Islam", title: "General Architecture of Kookmin University PHY and MAC Multiple-Proposal for Image Sensor Communication (Rev. 1)", venue: "IEEE 802.15.7a", number: "15-16-0011-01", url: "https://mentor.ieee.org/802.15/dcn/16/15-16-0011-01-007a-general-architecture-of-kookmin-university-phy-and-mac-multiple-proposal-for-image-sensor-communication.pptx" },
  { year: 2016, month: "Jan", authors: "Y. M. Jang, T. Nguyen, N. T. Le, M. S. Ifthekhar, M. A. Hossain, C. H. Hong, A. Islam", title: "General Architecture of Kookmin University PHY and MAC Multiple-Proposal for Image Sensor Communication", venue: "IEEE 802.15.7a", number: "15-16-0011-00", url: "https://mentor.ieee.org/802.15/dcn/16/15-16-0011-00-007a-general-architecture-of-kookmin-university-phy-and-mac-multiple-proposal-for-image-sensor-communication.pptx" }
];
