import React, { useState, useMemo, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code, 
  Briefcase, 
  User, 
  Send, 
  Terminal, 
  Layers, 
  Sparkles, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  X, 
  Menu, 
  Palette,
  Star,
  Award,
  BookOpen,
  MessageSquare,
  Settings,
  Plus,
  Trash2,
  Copy,
  Check,
  Edit3,
  FileText,
  Phone,
  MapPin,
  Bot,
  Flame,
  ArrowUp,
  Printer,
  GraduationCap,
  Loader2
} from 'lucide-react';

const DEFAULT_PROFILE = {
  personal: {
    name: "Sivasubramanian M",
    title: "AI & Data Science Specialist | Project Coordinator Trainee",
    location: "Chennai, India",
    bio: "B.Tech graduate in AI & Data Science with hands-on experience in Data Analytics, Python, Generative AI tools, and Power BI. Passionate about product building, project coordination, and utilizing technology and data to streamline business processes.",
    status: "Building in AI, Data & Project Management",
    avatar: "/profile_v2.jpg",
    email: "sivasufriend@gmail.com",
    phone: "+91 8124387960",
    resumeUrl: "https://drive.google.com/file/d/1ShSUQ0S5LI2Q8iANIl8-tOSuUjERpIQ0/view?usp=drive_link",
    github: "https://github.com/sivsubramanian",
    linkedin: "https://www.linkedin.com/in/sivasubramanian8",
    twitter: "https://twitter.com"
  },
  stats: [
    { label: "Degree CGPA", value: "7.8" },
    { label: "Projects Built", value: "5+" },
    { label: "Internships", value: "3" },
    { label: "Core Skills", value: "15+" }
  ],
  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "DMI College of Engineering, Chennai",
      grade: "CGPA: 7.8",
      year: "2022 - 2026"
    },
    {
      degree: "Higher Secondary Certificate (HSC - 12th)",
      institution: "AVM Rajeswari Matriculation Hr. Sec. School",
      grade: "Score: 66.8%",
      year: "2022"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC - 10th)",
      institution: "St. Anns Matriculation Higher Secondary School",
      grade: "Score: 65.8%",
      year: "2020"
    }
  ],
  skills: [
    { name: "Python / Pandas / NumPy", level: 92, category: "Data Science" },
    { name: "Power BI & Visualization", level: 90, category: "Analytics" },
    { name: "SQL & Databases", level: 85, category: "Analytics" },
    { name: "Generative AI & LLM Tools", level: 88, category: "AI & GenAI" },
    { name: "Prompt Engineering", level: 90, category: "AI & GenAI" },
    { name: "Project Coordination", level: 92, category: "Management" },
    { name: "QA Tracking & Workflows", level: 88, category: "Management" }
  ],
  projects: [
    {
      id: "1",
      title: "Re-Book - Campus Book Exchange Platform",
      category: "Full Stack",
      featured: true,
      description: "Developed a full-stack platform for secure book trading using modern web frameworks. Applied UI/UX principles to ensure high adoption rates among university students.",
      image: "/rebook.png",
      tags: ["Full-Stack", "React", "Vercel", "Product Development"],
      demoUrl: "https://re-book-1-seven.vercel.app/",
      githubUrl: "https://github.com/sivsubramanian/RE-BOOK-1.git",
      highlights: [
        "Architected responsive user interfaces prioritizing student engagement and trust.",
        "Engineered search filters for textbooks by course, department, and semester.",
        "Deployed seamless live production build on Vercel with real-time peer transaction flows."
      ]
    },
    {
      id: "2",
      title: "Netflix Movies & TV Shows Dashboard",
      category: "Analytics",
      featured: true,
      description: "Cleaned and transformed global streaming data (1925-2021) using Power Query to visualize content distribution by genre and rating with interactive KPI cards in Power BI.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800",
      tags: ["Power BI", "Power Query", "Data Visualization", "Analytics"],
      demoUrl: null,
      githubUrl: "https://github.com/sivsubramanian/Netflix-PowerBI-Dashboard.git",
      highlights: [
        "Processed and cleansed 8,000+ streaming entries spanning 1925 to 2021.",
        "Constructed drill-down dashboards analyzing rating distributions, release velocity, and top countries.",
        "Designed executive KPI cards delivering instant high-level catalog summaries in Power BI."
      ]
    },
    {
      id: "3",
      title: "Talkify - Messaging Mobile App UI",
      category: "UI / UX",
      featured: true,
      description: "Prototyped a high-fidelity modern messaging mobile application in Figma, focusing on fluid user onboarding, intuitive chat flows, aesthetics, and accessibility.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      tags: ["Figma", "UI/UX Design", "Prototyping", "Mobile App"],
      demoUrl: "https://www.figma.com/proto/uIEdXuzBKvHdyM6lBPdsrZ/Talkify?node-id=1-3&t=sDMbaIFF94dxvsI8-1",
      githubUrl: null,
      highlights: [
        "Crafted comprehensive design systems with cohesive color tokens and typography in Figma.",
        "Designed modern chat flows, voice note interactions, and contact discovery.",
        "Conducted usability reviews to refine tap targets and mobile readability."
      ]
    },
    {
      id: "4",
      title: "Cricket Scoreboard Redesign",
      category: "UI / UX",
      featured: false,
      description: "Redesigned a broadcast-style live cricket scoreboard interface focusing on real-time legibility, ball-by-ball tracking, viewer engagement, and responsive layout across devices.",
      image: "https://images.unsplash.com/photo-1531415074868-036b107e7752?auto=format&fit=crop&q=80&w=800",
      tags: ["UI/UX Redesign", "Sports UI", "Figma", "Web Design"],
      demoUrl: null,
      githubUrl: "https://github.com/sivsubramanian/Cricket-scoreboard-redesign.git",
      highlights: [
        "Designed live ball-by-ball animations and score tickers inspired by international sports broadcasts.",
        "Optimized information hierarchy for rapid readability during dynamic live match action.",
        "Created responsive desktop, tablet, and mobile broadcast scoreboard layouts."
      ]
    }
  ],
  experiences: [
    {
      id: "1",
      role: "Project Coordinator Trainee",
      company: "Mediant Labs",
      type: "full-time",
      period: "June 2026 - Present",
      description: "Supporting project coordination, process tracking, QA workflows, and reporting. Leveraging data and AI tools to increase operational efficiency.",
      skills: ["Project Coordination", "QA Tracking", "AI Tools"],
      bullets: [
        "Coordinating cross-functional sprint deliveries, tracking bug resolution workflows, and managing QA schedules.",
        "Leveraging AI tooling to automate daily standup reports and synthesize project milestones.",
        "Collaborating with tech leads to bridge client requirements and engineering sprints."
      ]
    },
    {
      id: "2",
      role: "Technology Intern (Data & Business Systems)",
      company: "Synergy Marine Group",
      type: "internships",
      period: "Jan 2026 - April 2026",
      description: "Collaborated within Technology Dept. in procurement reporting, bridging business requirements and technical AI solutions. Managed vendor data workflows.",
      skills: ["Data Systems", "Supply Chain", "Reporting"],
      bullets: [
        "Streamlined maritime vendor procurement datasets across global logistics routes.",
        "Assisted in bridging ERP records with analytical dashboards for leadership reporting."
      ]
    },
    {
      id: "3",
      role: "Data Analytics Intern",
      company: "Industrial Design & Animations",
      type: "internships",
      period: "August 2025",
      description: "Synthesized complex datasets to provide visual reports, optimizing design and animation project timelines and data accuracy.",
      skills: ["Power BI", "Data Analytics", "KPI Dashboards"],
      bullets: [
        "Constructed project burn-down charts and visual animation delivery trackers.",
        "Analyzed team time-tracking metrics to identify workflow bottlenecks."
      ]
    },
    {
      id: "4",
      role: "Cricket Coach",
      company: "Mahi King Cricket Academy",
      type: "part-time",
      period: "Present",
      description: "Played professional cricket for more than 10 years, now being a cricket coach training 15+ budding cricketers.",
      skills: ["Sports Coaching", "Mentorship", "Team Leadership", "Athletic Training"],
      bullets: [
        "Played professional cricket for more than 10 years across competitive circuits.",
        "Coaching and mentoring 15+ budding cricketers in technique, discipline, and match tactics.",
        "Developing tailored batting, bowling, and physical conditioning drill programs."
      ]
    }
  ]
};

const ACCENT_THEMES = [
  { name: "Indigo", id: "indigo", bg: "bg-indigo-600", text: "text-indigo-400", border: "border-indigo-500", badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30", button: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/40", glow: "rgba(99, 102, 241, 0.3)" },
  { name: "Emerald", id: "emerald", bg: "bg-emerald-600", text: "text-emerald-400", border: "border-emerald-500", badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30", button: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/40", glow: "rgba(16, 185, 129, 0.3)" },
  { name: "Cyan", id: "cyan", bg: "bg-cyan-600", text: "text-cyan-400", border: "border-cyan-500", badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30", button: "bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-900/40", glow: "rgba(6, 182, 212, 0.3)" },
  { name: "Rose", id: "rose", bg: "bg-rose-600", text: "text-rose-400", border: "border-rose-500", badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/30", button: "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-900/40", glow: "rgba(244, 63, 94, 0.3)" },
  { name: "Amber", id: "amber", bg: "bg-amber-600", text: "text-amber-400", border: "border-amber-500", badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30", button: "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/40", glow: "rgba(245, 158, 11, 0.3)" }
];

const ROTATING_TITLES = [
  "AI & Data Science Specialist",
  "Project Coordinator Trainee",
  "Power BI & Analytics Developer",
  "Generative AI & LLM Innovator"
];

// High-Tech Cyber Dot Grid Motion Tracker Canvas (Illuminates & tracks cursor)
function MotionGridTracker({ mousePos }: { mousePos: { x: number; y: number } }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const spacing = 44;
    const radius = 180;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      const activePoints: Array<{ x: number; y: number; dist: number; alpha: number }> = [];

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const px = c * spacing;
          const py = r * spacing;

          const dx = mousePos.x - px;
          const dy = mousePos.y - py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < radius) {
            const intensity = 1 - dist / radius;
            const alpha = 0.15 + intensity * 0.7;
            const size = 1.2 + intensity * 1.6;

            ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();

            activePoints.push({ x: px, y: py, dist, alpha: intensity });
          } else {
            // Ambient faint grid dots
            ctx.fillStyle = 'rgba(148, 163, 184, 0.07)';
            ctx.beginPath();
            ctx.arc(px, py, 0.9, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw faint motion tracker connection lines to nearest grid intersections
      activePoints.sort((a, b) => a.dist - b.dist);
      const nearest = activePoints.slice(0, 4);
      nearest.forEach((pt) => {
        ctx.strokeStyle = `rgba(99, 102, 241, ${pt.alpha * 0.28})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
        ctx.lineTo(pt.x, pt.y);
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 w-full h-full"
    />
  );
}

// Dual-ring Magnetic Mouse Motion Tracker Cursor
function MotionCursorFollower({ mousePos }: { mousePos: { x: number; y: number } }) {
  const [lagPos, setLagPos] = React.useState({ x: mousePos.x, y: mousePos.y });
  const [isHovered, setIsHovered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    let animId: number;
    let currX = mousePos.x;
    let currY = mousePos.y;

    const loop = () => {
      currX += (mousePos.x - currX) * 0.18;
      currY += (mousePos.y - currY) * 0.18;
      setLagPos({ x: currX, y: currY });
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animId);
  }, [mousePos.x, mousePos.y]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.motion-card') ||
        target.closest('.glitter-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible && mousePos.x === 0 && mousePos.y === 0) return null;

  return (
    <>
      {/* Central Sharp Tracking Dot */}
      <div
        className="custom-cursor-dot pointer-events-none hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: isHovered ? '6px' : '7px',
          height: isHovered ? '6px' : '7px',
          backgroundColor: '#38bdf8',
          boxShadow: '0 0 10px #38bdf8'
        }}
      />

      {/* Smooth Lagging Magnetic Follower Ring */}
      <div
        className="custom-cursor-ring pointer-events-none hidden md:block"
        style={{
          left: `${lagPos.x}px`,
          top: `${lagPos.y}px`,
          width: isHovered ? '54px' : '34px',
          height: isHovered ? '54px' : '34px',
          border: isHovered ? '1.5px solid rgba(99, 102, 241, 0.8)' : '1px solid rgba(56, 189, 248, 0.45)',
          backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.12)' : 'rgba(56, 189, 248, 0.04)',
          boxShadow: isHovered ? '0 0 25px rgba(99, 102, 241, 0.35)' : '0 0 14px rgba(56, 189, 248, 0.15)',
          backdropFilter: 'blur(1px)'
        }}
      />
    </>
  );
}

export default function App() {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [activeTheme, setActiveTheme] = useState(ACCENT_THEMES[0]);
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('all');
  const [skillCategoryFilter, setSkillCategoryFilter] = useState('all');
  const [experienceTypeFilter, setExperienceTypeFilter] = useState('full-time');

  const CAREER_SECTIONS = [
    { id: 'full-time', label: 'Full Time' },
    { id: 'internships', label: 'Internships' },
    { id: 'part-time', label: 'Part-Time' }
  ];
  const [toastMessage, setToastMessage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 3D Motion Perspective Tilt for Hero Facecard (Tracks Cursor)
  const heroTilt = useMemo(() => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const tiltY = ((mousePos.x - centerX) / centerX) * 8;
    const tiltX = -((mousePos.y - centerY) / centerY) * 8;
    return {
      x: Math.max(-10, Math.min(10, tiltX)),
      y: Math.max(-10, Math.min(10, tiltY))
    };
  }, [mousePos.x, mousePos.y]);

  // Typewriter Hero Effect
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Interactive AI Assistant State
  const [botOpen, setBotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: `Hi there! I'm ${profile.personal.name}'s virtual portfolio assistant. Feel free to ask me about skills, experience, or projects!` }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Typewriter Loop
  useEffect(() => {
    const fullText = ROTATING_TITLES[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  // Scroll Progress and Back-to-Top
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
      setShowBackToTop(totalScroll > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse Glow Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    triggerToast(`Copied ${label} to clipboard!`);
  };

  const copyProfileJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(profile, null, 2));
    setCopiedJson(true);
    triggerToast("Copied full JSON profile configuration!");
    setTimeout(() => setCopiedJson(false), 2000);
  };

  // Bot Q&A Handler
  const handleBotQuery = (queryText) => {
    const text = queryText || chatInput;
    if (!text.trim()) return;

    const userMsg = { sender: 'user', text };
    const lower = text.toLowerCase();

    let botReply = `Thanks for asking! Sivasubramanian is specializing in AI & Data Science and currently working as a Project Coordinator Trainee at Mediant Labs. Reach him at ${profile.personal.email}!`;

    if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech')) {
      botReply = `Sivasubramanian's core skills include Python (Pandas, NumPy), Power BI, SQL, Generative AI & Prompt Engineering, and Project / Process Coordination.`;
    } else if (lower.includes('rebook') || lower.includes('project') || lower.includes('talkify') || lower.includes('cricket') || lower.includes('netflix')) {
      botReply = `His standout projects are: 1) Re-Book (Campus Book Exchange Platform with live Vercel demo & GitHub), 2) Netflix Power BI Dashboard (GitHub repo), 3) Talkify (Messaging Mobile App UI Prototype on Figma), and 4) Cricket Scoreboard Redesign (GitHub repo).`;
    } else if (lower.includes('experience') || lower.includes('work') || lower.includes('mediant')) {
      botReply = `He has worked at: Mediant Labs (Project Coordinator Trainee), Synergy Marine Group (Technology Intern), and Industrial Design & Animations (Data Analytics Intern).`;
    } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('hire')) {
      botReply = `You can email him directly at ${profile.personal.email} or call ${profile.personal.phone || '+91 8124387960'}.`;
    } else if (lower.includes('resume') || lower.includes('cv') || lower.includes('pdf')) {
      botReply = `You can view and download Sivasubramanian's full resume on Google Drive here: ${profile.personal.resumeUrl || 'https://drive.google.com/file/d/1ShSUQ0S5LI2Q8iANIl8-tOSuUjERpIQ0/view?usp=drive_link'}`;
    } else if (lower.includes('education') || lower.includes('degree') || lower.includes('college')) {
      botReply = `He completed his B.Tech in AI & Data Science at DMI College of Engineering, Chennai with a CGPA of 7.8!`;
    }

    setChatMessages(prev => [...prev, userMsg, { sender: 'bot', text: botReply }]);
    setChatInput('');
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("access_key", "023d4268-a410-409e-891e-bc8c230d1e97");
      formData.append("apikey", "023d4268-a410-409e-891e-bc8c230d1e97");
      formData.append("name", contactForm.name);
      formData.append("email", contactForm.email);
      formData.append("message", contactForm.message);
      formData.append("from_name", `${contactForm.name} (Portfolio)`);
      formData.append("subject", `New Portfolio Message from ${contactForm.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      let data;
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.warn("Web3Forms response was not JSON:", text);
        data = { success: response.ok, message: text };
      }

      console.log("Web3Forms response data:", data);

      if (data && data.success) {
        setMessageSent(true);
        triggerToast("Message delivered to Sivasubramanian! Check your inbox.");
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => {
          setMessageSent(false);
        }, 6000);
      } else {
        const errorMsg = data?.message || "Web3Forms submission failed";
        triggerToast(`Status: ${errorMsg}`);
        console.error("Web3Forms error details:", data);
      }
    } catch (err) {
      console.error("Submission error:", err);
      triggerToast("Network issue connecting to form service. Opening email client fallback...");
      window.open(
        `mailto:${profile.personal.email}?subject=${encodeURIComponent("Portfolio Message from " + contactForm.name)}&body=${encodeURIComponent(contactForm.message + "\n\nFrom: " + contactForm.name + " (" + contactForm.email + ")")}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter Categories
  const projectCategories = useMemo(() => {
    const set = new Set(['all']);
    profile.projects.forEach(p => set.add(p.category));
    return Array.from(set);
  }, [profile.projects]);

  const skillCategories = useMemo(() => {
    const set = new Set(['all']);
    profile.skills.forEach(s => set.add(s.category));
    return Array.from(set);
  }, [profile.skills]);

  const filteredProjects = useMemo(() => {
    if (projectCategoryFilter === 'all') return profile.projects;
    return profile.projects.filter(p => p.category === projectCategoryFilter);
  }, [profile.projects, projectCategoryFilter]);

  const filteredSkills = useMemo(() => {
    if (skillCategoryFilter === 'all') return profile.skills;
    return profile.skills.filter(s => s.category === skillCategoryFilter);
  }, [profile.skills, skillCategoryFilter]);

  const filteredExperiences = useMemo(() => {
    return profile.experiences.filter(exp => exp.type === experienceTypeFilter);
  }, [profile.experiences, experienceTypeFilter]);

  return (
    <div className="min-h-screen bg-[#010410] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col relative overflow-x-hidden">

      {/* Top Scroll Progress Bar with Holographic Gradient */}
      <div 
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-150"
        style={{ 
          width: `${scrollProgress}%`,
          background: `linear-gradient(90deg, #6366f1, #38bdf8, #ec4899, #a855f7)`
        }}
      />

      {/* Ambient Gradient Background Orbs with Aurora Drift */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full blur-[110px] opacity-25 animate-aurora"
          style={{ background: activeTheme.glow }}
        />
        <div 
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-20 animate-aurora [animation-delay:4s]"
          style={{ background: 'rgba(56, 189, 248, 0.3)' }}
        />
        <div 
          className="absolute -bottom-32 left-1/3 w-[30rem] h-[30rem] rounded-full blur-[120px] opacity-20 animate-aurora [animation-delay:8s]"
          style={{ background: 'rgba(168, 85, 247, 0.25)' }}
        />
      </div>

      {/* High-Tech Cyber Dot Grid Motion Tracker Canvas */}
      <MotionGridTracker mousePos={mousePos} />

      {/* Dual-ring Magnetic Mouse Motion Tracker Cursor */}
      <MotionCursorFollower mousePos={mousePos} />

      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-30"
        style={{
          background: `radial-gradient(650px at ${mousePos.x}px ${mousePos.y}px, ${activeTheme.glow}, transparent 80%)`
        }}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700 text-white shadow-2xl text-xs font-semibold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#010410]/85 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          <a href="#hero" className="flex items-center gap-3 text-base sm:text-lg font-bold tracking-tight text-white group">
            <img 
              src={profile.personal.avatar} 
              alt={profile.personal.name} 
              className={`w-9 h-9 rounded-full object-cover object-top border-2 ${activeTheme.border} transition-transform group-hover:scale-110 shadow-sm`}
            />
            <span className="group-hover:text-slate-200 transition-colors">{profile.personal.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Color Accent Switcher */}
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1.5 rounded-full">
              {ACCENT_THEMES.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setActiveTheme(theme);
                    triggerToast(`Switched theme to ${theme.name}!`);
                  }}
                  className={`w-4 h-4 rounded-full ${theme.bg} transition-transform ${activeTheme.id === theme.id ? 'scale-125 ring-2 ring-white/60' : 'opacity-60 hover:opacity-100'}`}
                  title={`${theme.name} Theme`}
                />
              ))}
            </div>

            {/* Direct Google Drive Resume Link */}
            <a
              href={profile.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all hover:scale-105"
              title="Open Resume in Google Drive"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex relative">
        <div className="flex-1 overflow-y-auto">
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-6 pb-16 relative z-10">
            
            {/* HERO / ABOUT SECTION WITH TYPEWRITER EFFECT */}
            <section id="hero" className="pt-2 sm:pt-4 flex flex-col md:flex-row items-center justify-between gap-10 relative scroll-mt-24">
              <div id="about" className="absolute -top-24 pointer-events-none" />
              <div className="flex-1 space-y-6 text-center md:text-left">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 border border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>{profile.personal.status}</span>
                </div>

                {/* Animated Holographic Headline */}
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-indigo-300 via-sky-200 to-pink-300 bg-clip-text text-transparent animate-gradient-shift">
                    {profile.personal.name}
                  </span>
                </h1>

                {/* Animated Typewriter Subtitle */}
                <div className="h-8 flex items-center justify-center md:justify-start">
                  <p className="text-xl sm:text-2xl font-bold text-slate-200">
                    <span>{currentText}</span>
                    <span className={`inline-block w-0.5 h-6 ml-1 align-middle bg-sky-400 animate-blink`} />
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
                  {profile.personal.bio}
                </p>

                {/* Quick Action CTA Bar */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                  <a
                    href="#contact"
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-indigo-500/25 ${activeTheme.button}`}
                  >
                    <Send className="w-4 h-4" />
                    Get in Touch
                  </a>

                  <a
                    href={profile.personal.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:bg-slate-800 flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    Download Resume
                  </a>

                  <button
                    onClick={() => setBotOpen(true)}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:bg-slate-800 flex items-center gap-2 transition-all"
                  >
                    <Bot className="w-4 h-4 text-sky-400" />
                    Chat with Bot
                  </button>
                </div>

                {/* Direct Contacts with 1-Click Copy & Social Links */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-4 text-xs">
                  <button 
                    onClick={() => copyToClipboard(profile.personal.email, "email")}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{profile.personal.email}</span>
                    <Copy className="w-3 h-3 text-slate-500 hover:text-white ml-1" />
                  </button>

                  <button 
                    onClick={() => copyToClipboard(profile.personal.phone || '+91 8124387960', "phone number")}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{profile.personal.phone || '+91 8124387960'}</span>
                    <Copy className="w-3 h-3 text-slate-500 hover:text-white ml-1" />
                  </button>

                  <a 
                    href={profile.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-sky-400 transition-colors"
                    title="Open LinkedIn Profile"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                    <span>sivasubramanian8</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 hover:text-white ml-1" />
                  </a>

                  <a 
                    href={profile.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Open GitHub Profile"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-300" />
                    <span>sivsubramanian</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 hover:text-white ml-1" />
                  </a>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{profile.personal.location}</span>
                  </div>
                </div>

              </div>

              {/* Avatar Photo with Interactive 3D Mouse Motion Perspective Tilt */}
              <div 
                className="relative flex-shrink-0 w-60 h-60 sm:w-72 sm:h-72 group transition-transform duration-200 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${heroTilt.x.toFixed(2)}deg) rotateY(${heroTilt.y.toFixed(2)}deg)`
                }}
              >
                {/* Dynamic Neon Ambient Glow */}
                <div className={`absolute -inset-3 rounded-3xl blur-2xl opacity-40 transition-opacity group-hover:opacity-85 ${activeTheme.bg}`} />
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/50 via-indigo-500/50 to-purple-500/50 opacity-60 group-hover:opacity-100 transition-opacity blur-[1px]" />

                <img
                  src={profile.personal.avatar}
                  alt={profile.personal.name}
                  className="relative w-full h-full object-cover object-top rounded-2xl border-2 border-slate-700/80 bg-slate-900 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </section>

            {/* STATS STRIP */}
            {profile.stats && profile.stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glitter-card shadow-lg animate-shimmer">
                {profile.stats.map((st, i) => (
                  <div key={i} className="text-center group cursor-default">
                    <div className={`text-2xl sm:text-3xl font-extrabold transition-transform group-hover:scale-110 ${activeTheme.text}`}>{st.value}</div>
                    <div className="text-xs text-slate-400 font-medium mt-1">{st.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* SKILLS SECTION WITH LIVE CATEGORY FILTER */}
            <section id="skills" className="space-y-6 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Capabilities</h2>
                  <h3 className="text-2xl font-bold text-white">Skills & Technologies</h3>
                </div>

                {/* Skill Category Tabs */}
                <div className="flex flex-wrap gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
                  {skillCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSkillCategoryFilter(cat)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all ${
                        skillCategoryFilter === cat
                          ? `${activeTheme.bg} text-white shadow-sm`
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSkills.map((skill, index) => (
                  <div key={index} className="p-4 rounded-xl glitter-card hover:-translate-y-1 space-y-2 group shadow-sm">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-200 font-semibold group-hover:text-white">{skill.name}</span>
                      <span className={`${activeTheme.text} font-mono font-bold`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ${activeTheme.bg}`} 
                        style={{ width: `${skill.level}%` }} 
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">{skill.category}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FEATURED PROJECTS WITH MODAL PREVIEW */}
            <section id="projects" className="space-y-6 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Portfolio</h2>
                  <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
                </div>

                {/* Project Category Filter */}
                <div className="flex flex-wrap gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
                  {projectCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setProjectCategoryFilter(cat)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all ${
                        projectCategoryFilter === cat
                          ? `${activeTheme.bg} text-white shadow-sm`
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="p-6 rounded-2xl glitter-card flex flex-col justify-between group space-y-4 relative overflow-hidden"
                  >
                    {/* Subtle top neon border accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${activeTheme.text}`}>{project.category}</span>
                        {project.featured && (
                          <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-amber-300 font-medium border border-amber-500/20">Featured</span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{project.description}</p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tI) => (
                          <span key={tI} className="px-2.5 py-1 rounded bg-slate-800/80 text-[11px] text-slate-300 font-medium">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex-1 py-2 rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-1.5 ${activeTheme.button}`}
                          >
                            <span>{project.demoUrl.includes('figma.com') ? 'Figma Prototype' : 'Live Demo'}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`${
                              project.demoUrl 
                                ? 'px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center justify-center gap-1.5 text-xs font-semibold' 
                                : `flex-1 py-2 rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-1.5 ${activeTheme.button}`
                            }`}
                            title="View Code on GitHub"
                          >
                            <Github className="w-4 h-4" />
                            <span>{project.demoUrl ? 'Code' : 'View on GitHub'}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* WORK EXPERIENCE WITH 3 CLICKABLE SECTIONS */}
            <section id="experience" className="space-y-6 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Career</h2>
                  <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                </div>

                {/* 3 Clickable Career Sections */}
                <div className="flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 shadow-sm">
                  {CAREER_SECTIONS.map((sec) => {
                    const count = profile.experiences.filter(e => e.type === sec.id).length;
                    const isActive = experienceTypeFilter === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setExperienceTypeFilter(sec.id)}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          isActive
                            ? `${activeTheme.bg} text-white shadow-md shadow-indigo-950/50 scale-[1.02]`
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                        }`}
                      >
                        <span>{sec.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                          isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filtered Experiences */}
              <div className="space-y-4">
                {filteredExperiences.map((exp) => (
                  <div key={exp.id} className="p-6 rounded-2xl glitter-card space-y-3 hover:translate-x-1 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                        <div className={`text-sm font-semibold ${activeTheme.text}`}>{exp.company}</div>
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/50 w-fit">{exp.period}</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{exp.description}</p>

                    {exp.bullets && exp.bullets.length > 0 && (
                      <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside pt-1">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="leading-relaxed">{b}</li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((s, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded text-[10px] bg-slate-950 text-slate-300 border border-slate-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EDUCATION SECTION */}
            <section id="education" className="space-y-6 scroll-mt-20">
              <div className="space-y-1">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Academics</h2>
                <h3 className="text-2xl font-bold text-white">Education History</h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {profile.education.map((edu, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className={`w-5 h-5 ${activeTheme.text}`} />
                      <span className="text-xs font-mono text-slate-400">{edu.year}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                    <p className="text-xs text-slate-400">{edu.institution}</p>
                    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${activeTheme.badgeBg}`}>
                      {edu.grade}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* INTERACTIVE CONTACT SECTION */}
            <section id="contact" className="scroll-mt-20">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none ${activeTheme.bg}`} />
                
                <div className="max-w-xl mx-auto text-center space-y-3 mb-8">
                  <h3 className="text-3xl font-extrabold text-white">Let's Work Together</h3>
                  <p className="text-sm text-slate-400">
                    Have a project in mind or interested in hiring? Drop a note below or reach out directly.
                  </p>
                </div>

                <form 
                  action="https://api.web3forms.com/submit" 
                  method="POST" 
                  onSubmit={handleSendMessage} 
                  className="max-w-xl mx-auto space-y-4"
                >
                  <input type="hidden" name="access_key" value="023d4268-a410-409e-891e-bc8c230d1e97" />
                  <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <input 
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="Your Message..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting || messageSent}
                    className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                      messageSent 
                        ? 'bg-emerald-600 text-white' 
                        : isSubmitting
                        ? 'opacity-70 cursor-not-allowed bg-slate-800 text-slate-300'
                        : `${activeTheme.button}`
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
                      </>
                    ) : messageSent ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Message Delivered!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                  <button 
                    onClick={() => copyToClipboard(profile.personal.email, "email")}
                    className="hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-indigo-400" />
                    <span>{profile.personal.email}</span>
                  </button>
                  <button 
                    onClick={() => copyToClipboard(profile.personal.phone || '+91 8124387960', "phone")}
                    className="hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-indigo-400" />
                    <span>{profile.personal.phone || '+91 8124387960'}</span>
                  </button>
                  <a 
                    href={profile.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-400 flex items-center gap-1.5 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>linkedin.com/in/sivasubramanian8</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                  <a 
                    href={profile.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>github.com/sivsubramanian</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>

              </div>
            </section>

          </main>

          <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {profile.personal.name}. Designed with passion and precision.
          </footer>
        </div>



        {/* BACK TO TOP BUTTON */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-24 right-6 z-30 p-3 rounded-full shadow-xl bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:scale-110 transition-all`}
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* FLOATING INTERACTIVE AI BOT WIDGET */}
        <div className="fixed bottom-6 right-6 z-40">
          {!botOpen ? (
            <button
              onClick={() => setBotOpen(true)}
              className={`p-4 rounded-full shadow-2xl flex items-center gap-2 font-semibold text-xs transition-all hover:scale-110 ${activeTheme.button}`}
              title="Ask AI Assistant"
            >
              <Bot className="w-5 h-5 animate-pulse" />
              <span className="hidden sm:inline">Ask AI Assistant</span>
            </button>
          ) : (
            <div className="w-80 sm:w-96 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col overflow-hidden animate-fade-in">
              {/* Bot Header */}
              <div className="p-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Bot className="w-4 h-4 text-indigo-400" />
                  <span>{profile.personal.name} Assistant</span>
                </div>
                <button 
                  onClick={() => setBotOpen(false)}
                  className="p-1 text-slate-400 hover:text-white rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Bot Messages */}
              <div className="p-3.5 space-y-3 h-64 overflow-y-auto text-xs">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed ${
                      msg.sender === 'user' 
                        ? `${activeTheme.bg} text-white` 
                        : 'bg-slate-800/90 text-slate-200 border border-slate-700/50'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Prompt Suggestions */}
              <div className="p-2 bg-slate-950/60 border-t border-slate-800 flex flex-wrap gap-1.5 text-[10px]">
                {[
                  "Skills summary",
                  "Tell me about Rebook",
                  "Education",
                  "Contact info"
                ].map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleBotQuery(prompt)}
                    className="px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Bot Input Bar */}
              <form 
                onSubmit={(e) => { e.preventDefault(); handleBotQuery(); }}
                className="p-2.5 bg-slate-950 border-t border-slate-800 flex gap-2"
              >
                <input 
                  type="text"
                  placeholder="Ask a question..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className={`p-2 rounded-lg text-white ${activeTheme.button}`}
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}