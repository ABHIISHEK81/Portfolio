const certificateBase = "Certification/";

const certificates = [
  {
    title: "Google Cloud Gen AI Academy",
    issuer: "Google Cloud",
    category: "AI",
    level: "Completion",
    file: "Google Certificate.jpg",
    description: "Completed Gen AI Academy work covering Vertex AI, Gemini APIs, Imagen, Streamlit and multimodal RAG patterns.",
    need: "Shows hands-on preparation for building practical GenAI apps, chat tools and document intelligence projects."
  },
  {
    title: "Build Real World AI Applications with Gemini and Imagen",
    issuer: "Google Cloud",
    category: "AI",
    level: "Introductory",
    file: "Build Real World AI Applications with Gemini and Imagen.png",
    description: "Built awareness of AI application workflows using Gemini for reasoning and Imagen for image generation.",
    need: "Useful for creating AI-powered apps, multimodal demos and prompt-driven portfolio projects."
  },
  {
    title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    issuer: "Google Cloud",
    category: "AI",
    level: "Intermediate",
    file: "Google Certificate (2).jpg",
    description: "Skill badge for rich document inspection with Gemini multimodality and retrieval augmented generation.",
    need: "Supports document question answering, enterprise search, knowledge assistants and resume-worthy AI workflows."
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    category: "AI",
    level: "Completion",
    file: "Google Certificate (3).png",
    description: "Introduced core GenAI concepts, model behavior, responsible use and common application areas.",
    need: "Gives the vocabulary needed to understand modern AI systems and explain project choices clearly."
  },
  {
    title: "Train a Small Language Model",
    issuer: "Google DeepMind",
    category: "AI",
    level: "Advanced",
    file: "Google DeepMind Train A Small Language Model.png",
    description: "Advanced learning around the process and concepts behind training a small language model.",
    need: "Directly supports ML engineering understanding, model training logic and language AI fundamentals."
  },
  {
    title: "Analyze Sentiment with Natural Language API",
    issuer: "Google Cloud",
    category: "AI",
    level: "Introductory",
    file: "Analyze Sentiment with Natural Language API.png",
    description: "Applied Natural Language API concepts to identify and score sentiment from text data.",
    need: "Relevant for NLP, feedback analysis, social data mining and product analytics."
  },
  {
    title: "Automate Data Capture at Scale with Document AI",
    issuer: "Google Cloud",
    category: "AI",
    level: "Introductory",
    file: "Automate Data Capture at Scale with Document AI.png",
    description: "Learned document extraction and data capture workflows using Google Cloud Document AI.",
    need: "Important for OCR, form processing, document automation and data extraction pipelines."
  },
  {
    title: "Using the Google Cloud Speech API",
    issuer: "Google Cloud",
    category: "AI",
    level: "Introductory",
    file: "Using the Google Cloud Speech API.png",
    description: "Practiced Speech API concepts for converting audio into usable text data.",
    need: "Supports speech analytics, accessibility features, voice interfaces and multimodal AI projects."
  },
  {
    title: "Build Real World AI Applications with Gemini and Imagen Award",
    issuer: "Google Cloud",
    category: "AI",
    level: "Introductory",
    file: "Google Certificate.png",
    description: "Public award view for completing the Gemini and Imagen AI application skill badge.",
    need: "Adds visible proof of hands-on GenAI app building for AI portfolio demonstrations."
  },
  {
    title: "IBM Introducing AI",
    issuer: "IBM Skills Network",
    category: "AI",
    level: "Completion",
    file: "IBM  Certificate.jpg",
    description: "Completed IBM's introductory artificial intelligence course through the Skills Network.",
    need: "Strengthens AI fundamentals before advanced machine learning, NLP and GenAI work."
  },
  {
    title: "ChatGPT for Everyone",
    issuer: "GUVI / HCL",
    category: "AI",
    level: "Completion",
    file: "student_certificate_20250522130706.png",
    description: "Completed a practical ChatGPT certificate focused on everyday AI productivity and prompt use.",
    need: "Improves prompt literacy, responsible AI usage and productivity for engineering tasks."
  },
  {
    title: "Analyze BigQuery Data in Connected Sheets",
    issuer: "Google Cloud",
    category: "Data Analytics",
    level: "Introductory",
    file: "Analyze BigQuery Data in Connected Sheets.png",
    description: "Analyzed BigQuery data through connected spreadsheet workflows.",
    need: "Good for cloud analytics, quick exploration and business-friendly reporting."
  },
  {
    title: "App Building with AppSheet",
    issuer: "Google Cloud",
    category: "Data Analytics",
    level: "Introductory",
    file: "App Building with AppSheet.png",
    description: "Built low-code application workflows with AppSheet.",
    need: "Useful for quickly creating data collection tools, dashboards and prototypes for college projects."
  },
  {
    title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG Award",
    issuer: "Google Cloud",
    category: "AI",
    level: "Intermediate",
    file: "Google Certificate (2).png",
    description: "Public award view for the Gemini multimodality and multimodal RAG skill badge.",
    need: "Reinforces document AI, retrieval workflows and applied GenAI solution design."
  },
  {
    title: "Manage Data Models in Looker",
    issuer: "Google Cloud",
    category: "Data Analytics",
    level: "Intermediate",
    file: "Manage Data Models in Looker.png",
    description: "Worked with semantic data models and Looker analytics concepts.",
    need: "Useful for analytics engineering, governed dashboards and BI model design."
  },
  {
    title: "IBM Enterprise Data Science in Practice",
    issuer: "IBM SkillsBuild",
    category: "Data Analytics",
    level: "Completion",
    file: "Screenshot 2025-12-01 001846.png",
    description: "Credential focused on enterprise data science practice.",
    need: "Connects academic data science concepts with business workflows."
  },
  {
    title: "IBM Data Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "Data Analytics",
    level: "Completion",
    file: "Screenshot 2025-12-01 002735.png",
    description: "Completed a foundational IBM data credential.",
    need: "Builds core knowledge in data quality, data types, analysis and interpretation."
  },
  {
    title: "HP LIFE Data Science & Analytics",
    issuer: "HP Foundation",
    category: "Data Analytics",
    level: "Completion",
    file: "Screenshot 2025-12-18 212629.png",
    description: "Completed HP LIFE's Data Science & Analytics course.",
    need: "Explains analytics practices, methods and business value of data-driven approaches."
  },
  {
    title: "Cisco Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    category: "Data Analytics",
    level: "Completion",
    file: "Screenshot 2025-12-25 181911.png",
    description: "Completed Cisco Networking Academy's Data Analytics Essentials credential.",
    need: "Covers the analytics process, data preparation, Excel, SQL, Tableau and project portfolio sharing."
  },
  {
    title: "Cisco Data Analytics Essentials Course Completion",
    issuer: "Cisco Networking Academy",
    category: "Data Analytics",
    level: "Completion",
    file: "Screenshot 2026-05-09 154323.png",
    description: "Full course completion certificate for Cisco Data Analytics Essentials, issued December 24, 2025.",
    need: "Confirms student-level analytics skills in data value, data characteristics, statistical preparation and visualization tools."
  },
  {
    title: "Get Started with Cloud Storage",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "Get Started with Cloud Storage.png",
    description: "Learned object storage operations on Google Cloud.",
    need: "Essential for datasets, model artifacts, logs and data lake architecture."
  },
  {
    title: "Create a Streaming Data Lake on Cloud Storage",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "Create a Streaming Data Lake on Cloud Storage.png",
    description: "Built patterns for streaming data lakes on Cloud Storage.",
    need: "Supports data engineering, event ingestion and scalable storage design."
  },
  {
    title: "Get Started with Dataplex",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "Get Started with Dataplex.png",
    description: "Explored Dataplex for managing distributed cloud data.",
    need: "Useful for governance, cataloging and lifecycle management in analytics systems."
  },
  {
    title: "Get Started with Pub/Sub",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "Get Started with Pub & Sub.png",
    description: "Learned publish-subscribe messaging patterns on Google Cloud.",
    need: "Important for streaming pipelines, event ingestion and real-time analytics."
  },
  {
    title: "Get Started with Eventarc",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "Get Started with Eventarc.png",
    description: "Practiced event-driven architecture concepts using Eventarc.",
    need: "Useful for serverless data workflows and automated cloud triggers."
  },
  {
    title: "App Engine: 3 Ways",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "App Engine 3 Ways.png",
    description: "Explored deployment approaches for applications on App Engine.",
    need: "Helps deploy data apps, APIs and ML demos on cloud infrastructure."
  },
  {
    title: "Google Cloud Infrastructure for Azure Professionals",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Intermediate",
    file: "Google Cloud Infrastructure for Azure Professionals.png",
    description: "Intermediate infrastructure badge comparing Google Cloud and Azure concepts.",
    need: "Improves cloud architecture understanding across platforms."
  },
  {
    title: "Monitor and Log with Google Cloud Observability",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "Monitor and Log with Google Cloud Observability.png",
    description: "Learned monitoring and logging concepts on Google Cloud.",
    need: "Operational awareness matters when deploying dashboards, APIs and ML services."
  },
  {
    title: "Store, Process and Manage Data on Google Cloud",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "Store, Process, and Manage Data on Google Cloud - Console.png",
    description: "Practiced console workflows for storing, processing and managing data.",
    need: "Maps directly to cloud data handling in a Data Science curriculum."
  },
  {
    title: "Get Started with Pub/Sub Award",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "Screenshot 2026-01-18 195820.png",
    description: "Public award view for the Google Cloud Pub/Sub skill badge.",
    need: "Reinforces real-time data streaming concepts needed for event-driven data systems."
  },
  {
    title: "Monitoring in Google Cloud",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "Monitoring in Google Cloud.png",
    description: "Completed badge for monitoring Google Cloud resources and service health.",
    need: "Helps maintain reliable analytics dashboards, APIs and deployed data applications."
  },
  {
    title: "The Basics of Google Cloud Compute",
    issuer: "Google Cloud",
    category: "Google Cloud",
    level: "Introductory",
    file: "The Basics of Google Cloud Compute.png",
    description: "Completed foundational Google Cloud Compute learning.",
    need: "Compute knowledge is needed to run data processing jobs, APIs and model workloads."
  },
  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / Forage",
    category: "Simulation",
    level: "Completion",
    file: "Screenshot 2025-11-29 214113.png",
    description: "Completed Tata's Forage simulation covering exploratory analysis, risk profiling, delinquency prediction and AI-led collections strategy.",
    need: "Excellent fit because it combines GenAI, analytics, business reporting and strategy storytelling."
  },
  {
    title: "Tata GenAI Powered Data Analytics Job Simulation Certificate",
    issuer: "Tata / Forage",
    category: "Simulation",
    level: "Completion",
    file: "Internship Certificate.jpg",
    description: "Forage certificate for Tata's GenAI data analytics simulation, completed June 18, 2025.",
    need: "Adds practical proof of exploratory analysis, AI strategy, business storytelling and risk-focused analytics."
  },
  {
    title: "Electronic Arts Software Engineering Job Simulation",
    issuer: "Electronic Arts / Forage",
    category: "Simulation",
    level: "Completion",
    file: "Internship Certificate (2).jpg",
    description: "Completed EA's software engineering simulation covering feature proposal, game object design, inventory improvement and live bug fixing.",
    need: "Strengthens software design, debugging, documentation and engineering workflow discipline."
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    category: "Simulation",
    level: "Completion",
    file: "Internship Certificate (3).jpg",
    description: "Completed Deloitte's Forage simulation with practical tasks in data analysis and forensic technology.",
    need: "Connects classroom analytics to professional investigation, reporting and business decision support use cases."
  },
  {
    title: "Gen AI Exchange Hackathon",
    issuer: "Google Cloud / Hack2skill",
    category: "Leadership",
    level: "Participation",
    file: "Hack2skill-Certificate.jpg",
    description: "Submitted a prototype under the Personalized Career and Skills Advisor problem statement.",
    need: "Connects GenAI with career analytics, recommender thinking and product ideation."
  },
  {
    title: "GUVI HCL Hackathon Event",
    issuer: "GUVI / HCL",
    category: "Leadership",
    level: "Participation",
    file: "GuviCertification - PL9411E10J71DjX75f.png",
    description: "Participated in a hackathon during AKTU AI Tech Confluence 2025.",
    need: "Demonstrates rapid prototyping, competition experience and technical teamwork."
  },
  {
    title: "ECWoC 2026 Mentor ID",
    issuer: "Elite Coders",
    category: "Leadership",
    level: "Mentor",
    file: "ECWoC-2026-ID-ABHISHEK-SHARMA.png",
    description: "Official mentor identity for Elite Coders Winter of Code 2026.",
    need: "Shows open-source leadership, mentoring, peer support and collaboration skills."
  },
  {
    title: "Elite Coders Winter of Code Mentor Verification",
    issuer: "Elite Coders",
    category: "Leadership",
    level: "Mentor",
    file: "ECWoC-Mentor-ID-Template.jpg",
    description: "Verified ECWoC mentor badge template showing the official mentor role and QR verification.",
    need: "Adds visual proof of community contribution, open-source mentoring and responsibility in a technical program."
  },
  {
    title: "Internshala Volunteering Internship Selection",
    issuer: "Internshala",
    category: "Leadership",
    level: "Selection",
    file: "7a0pt1hxc3z.png",
    description: "Selected for a volunteering internship at She Can Foundation through Internshala.",
    need: "Shows initiative, communication and responsibility for team-oriented work."
  },
  {
    title: "Technical Workshop Participation",
    issuer: "Barrownz Learning Academy",
    category: "Leadership",
    level: "Participation",
    file: "original_cbfd66ec-077c-4681-99cc-d5862beda96f_Screenshot_20250521-203441.png",
    description: "Participated in a technical workshop focused on professional upskilling.",
    need: "Shows continuous learning and willingness to attend technical development programs."
  },
  {
    title: "RESTful APIs with Node.js",
    issuer: "SkillEcted",
    category: "Simulation",
    level: "Participation",
    file: "1756042031278-certificate.png",
    description: "Webinar on RESTful APIs with Node.js and frontend-backend connection.",
    need: "Backend API knowledge helps serve ML models, dashboards and prediction services."
  }
];

const certGrid = document.getElementById("certGrid");
const certSearch = document.getElementById("certSearch");
const filters = document.querySelectorAll(".filter");
const modal = document.getElementById("certModal");
let activeFilter = "all";

document.documentElement.classList.add("animate-ready");
const certCountEl = document.getElementById("certificateCount");
if (certCountEl) certCountEl.textContent = certificates.length;

const fileUrl = (file) => certificateBase + file;
const isPdf = (file) => file.toLowerCase().endsWith(".pdf");

function openCertificate(cert) {
  const url = fileUrl(cert.file);
  document.getElementById("modalMeta").textContent = `${cert.issuer} | ${cert.category} | ${cert.level}`;
  document.getElementById("modalTitle").textContent = cert.title;
  document.getElementById("modalDesc").textContent = cert.description;
  document.getElementById("modalNeed").textContent = cert.need;
  document.getElementById("modalOpen").href = url;
  document.getElementById("modalMedia").innerHTML = isPdf(cert.file)
    ? `<embed src="${url}" type="application/pdf"><div class="pdf-preview">Open the PDF if local preview is blocked.</div>`
    : `<img src="${url}" alt="${cert.title}">`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeCertificate() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.getElementById("modalMedia").innerHTML = "";
  document.body.classList.remove("modal-open");
}

function filterCertificates() {
  const query = certSearch ? certSearch.value.trim().toLowerCase() : "";
  const cards = document.querySelectorAll(".cert-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const category = card.dataset.category || "";
    const issuer = card.dataset.issuer || "";
    const text = card.textContent.toLowerCase();

    const categoryMatch = activeFilter === "all" || category === activeFilter || issuer.includes(activeFilter);
    const textMatch = !query || text.includes(query);

    if (categoryMatch && textMatch) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (certCountEl) certCountEl.textContent = visibleCount;
}

// Bind click events on all pre-rendered certificate cards
document.querySelectorAll(".cert-card").forEach((card) => {
  const index = parseInt(card.dataset.index, 10);
  const cert = certificates[index];
  if (!cert) return;

  const media = card.querySelector(".cert-media");
  if (media) {
    media.addEventListener("click", () => openCertificate(cert));
    media.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCertificate(cert);
      }
    });
  }

  const previewBtn = card.querySelector(".cert-btn-preview");
  if (previewBtn) {
    previewBtn.addEventListener("click", () => openCertificate(cert));
  }
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    filterCertificates();
  });
});

if (certSearch) {
  certSearch.addEventListener("input", filterCertificates);
}
document.getElementById("closeModal").addEventListener("click", closeCertificate);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeCertificate();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCertificate();
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", (event) => {
  const open = navLinks.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("questionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("senderName").value.trim() || "Portfolio visitor";
  const topic = document.getElementById("messageTopic").value;
  const body = document.getElementById("messageBody").value.trim();
  const message = `Hello Abhishek,%0D%0A%0D%0AMy name is ${encodeURIComponent(name)}.%0D%0ATopic: ${encodeURIComponent(topic)}%0D%0A%0D%0A${encodeURIComponent(body || "I would like to connect with you regarding your portfolio.")}%0D%0A%0D%0ARegards,%0D%0A${encodeURIComponent(name)}`;
  window.location.href = `mailto:abhishekpratapsharma81@gmail.com?subject=${encodeURIComponent(topic)}&body=${message}`;
});

const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach((element) => element.classList.add("visible"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px 50px 0px" });

  revealElements.forEach((element) => observer.observe(element));
}

const canvas = document.getElementById("spaceCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let particles = [];
const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
  if (!scrollProgress) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

document.addEventListener("pointermove", (event) => {
  document.body.style.setProperty("--mx", `${event.clientX}px`);
  document.body.style.setProperty("--my", `${event.clientY}px`);
}, { passive: true });

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

function sizeCanvas() {
  if (!canvas || !ctx) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = Array.from({ length: Math.min(92, Math.floor(window.innerWidth / 16)) }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * 1 + 0.25,
    vx: (Math.random() - 0.5) * 0.32,
    vy: (Math.random() - 0.5) * 0.32
  }));
}

function drawSpace() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, index) => {
    p.x += p.vx * p.z;
    p.y += p.vy * p.z;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.4 * p.z, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(39,216,255,${0.22 + p.z * 0.18})`;
    ctx.fill();

    for (let j = index + 1; j < particles.length; j++) {
      const other = particles[j];
      const dx = p.x - other.x;
      const dy = p.y - other.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 118) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = `rgba(74,222,128,${(1 - dist / 118) * 0.12})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(drawSpace);
}

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.classList.add("is-tilting");
    card.style.transform = `rotateX(${8 - y * 12}deg) rotateY(${-10 + x * 16}deg)`;
  });
  card.addEventListener("pointerleave", () => {
    card.classList.remove("is-tilting");
    card.style.transform = "";
  });
});

window.addEventListener("resize", sizeCanvas);
sizeCanvas();
drawSpace();
filterCertificates();
