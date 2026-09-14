# One-Stop â€“ Personalized Career & Education Advisor
### *"Your Future. One Step Ahead."*

**Smart India Hackathon 2025**
- **Problem Statement ID:** SIH SIH1781
- **Problem Statement Title:** One-Stop Personalized Career & Education Advisor
- **Theme:** Smart Education
- **Deliverable:** Fully functional, modern web application prototype with offline intelligence and local fallbacks.

---

## ðŸŒŸ Executive Summary

**One-Stop** is an AI-powered personalized educational and career guidance platform tailored specifically to the Indian education ecosystem. It bridges the critical information gap faced by Indian secondary (Class 10/12) and undergraduate students by evaluating their streams (PCM, PCB, Commerce, Arts, Computer Science), academic scores, budget constraints, and aptitude to recommend optimal degree pathways, premier government institutions (IITs, AIIMS, NITs, DU, NLUs), and step-by-step career roadmaps.

---

## ðŸš€ Key Features & Modules

### 1. ðŸŽ“ Complete 3-Phase Onboarding Experience (`/onboarding`)
- **Phase 1: Splash Screen:** Graduation cap insignia, smooth progress bar, and SIH theme badges.
- **Phase 2: Welcome Back & Auth:** Mock authentication with Google, Apple, and "Continue as Guest Student" with one-click profile initialization.
- **Phase 3: Interactive Onboarding Slides:** 4 animated walkthrough slides (*Discover Careers*, *AI Guidance*, *Education Roadmaps*, *Ready to Begin?*) with progress dots and celebratory confetti.

### 2. ðŸ“‹ Comprehensive Student Profile Setup (`/profile-setup` & `/profile`)
- Collects Indian student attributes:
  - **Academic Level:** Class 10, Class 12, Undergraduate, Graduate
  - **Stream:** Science (PCM), Science (PCB), Science (PCMB), Commerce, Arts & Humanities, Computer Science / IT
  - **Recent Academic Marks / Percentage Slider:** (40% to 100%)
  - **Interactive Chip Selectors:** Academic Interests, Favorite Subjects, Skills, and Career Goals
  - **College & Financial Preferences:** Government vs. Private college preference, Annual budget tiers (< 1L, 1-3L, > 3L), Preferred study cities/states, and Target Indian Entrance Exams (JEE, NEET, CUET, CLAT, CAT).
- Full client-side persistence in `localStorage` and synchronized across all advisor modules.

### 3. ðŸ  Modern Personalized Home Dashboard (`/`)
- Personalized morning greeting: *"Good Morning, [Name] ðŸ‘‹"* with real-time stream and score display.
- Global instant search bar across careers, colleges, courses, and skills.
- 4 Quick Actions: **Career Advisor**, **Education Planner**, **Resume Analyzer**, **AI Chat Assistant**.
- Dynamic **Recommended Careers** cards with automated % Match Scores based on student stream and skills.
- **Trending Skills in India** section showcasing high-growth technical competencies (Python, AI, Cloud Computing, UI/UX, Cybersecurity, Data Analytics).

### 4. ðŸ¤– Context-Aware AI Career Advisor Chat (`/advisor`)
- Interactive conversational assistant that reads the user's active profile in real time.
- Handles complex natural language student queries:
  - *"Which career is best for me?"*
  - *"What should I study after Class 12?"*
  - *"How can I become a Data Scientist?"*
  - *"Which skills should I learn first?"*
  - *"What are the best government college options?"*
  - *"What career options are available for my stream?"*
- Embeds rich, clickable Career Recommendation Cards directly inside chat bubbles.
- 100% reliable local rule-based intelligence engine ensuring zero-downtime demonstration at hackathon booths without external API keys.

### 5. ðŸ§­ High-Growth Career Explorer (`/explore`)
- Matrix of 16+ verified Indian career paths.
- Multi-facet filtering by Stream, Category, and Growth Velocity.
- Sort by Best Profile Match, Salary Potential (LPA), or Industry Growth.
- Detailed Career Modal showing:
  - Comprehensive overview & *"A Day in the Life"*
  - Salary progression (Entry, Mid, Senior) in Indian Rupees (LPA)
  - Popular Indian entrance exams (JEE Advanced, NEET-UG, CUET, CLAT, CAT, GATE)
  - Top recruiters (Google India, TCS, Apollo, Big 4, ISRO, NITI Aayog)
  - Direct link to Learning Roadmap & Save button.

### 6. ðŸ“š Higher Education Planner & Comparison Dock (`/planner`)
- Covers 12+ Indian degree programs across Engineering, Medicine, Commerce, Arts, Computer Applications, Science, Management, Design, Law, and Agriculture.
- **Side-by-side Course Comparison Dock:** Select up to 3 courses to compare duration, government vs. private fee brackets, entrance exams, and starting salary.

### 7. ðŸ›ï¸ Indian College Directory & Scholarships Portal (`/colleges`)
- 16+ premier Indian institutions (IIT Bombay, IIT Madras, AIIMS New Delhi, IIM Ahmedabad, NIT Trichy, DU SRCC, IISc Bangalore, NLSIU, etc.).
- Filters by State, Institution Type (Central Govt, State Govt, Premier, Private), and Courses.
- **Scholarships & Schemes Hub:** Central Sector Scheme (NSP), AICTE Pragati (â‚¹50,000/yr for girls), PMSSS (J&K/Ladakh), Post-Matric SC/ST/OBC aid, and INSPIRE-SHE (DST).
- **Admission Alerts:** Registration dates and links for CUET-UG, JEE Main, NEET-UG, and CLAT.

### 8. ðŸ—ºï¸ Personalized Career Roadmap (`/roadmap`)
- Step-by-step roadmap milestones for multiple career tracks.
- Check-off tasks with live path completion percentage bar.
- Curated free learning resources (Harvard CS50, freeCodeCamp, Striver A2Z, NPTEL, PortSwigger, Sansad TV).
- Confetti milestone celebration upon checking off tasks.

### 9. ðŸ“„ ATS Resume Analyzer & Skill Gap Detector (`/resume`)
- Upload file (PDF, DOCX, TXT) or paste plain text.
- 1-Click demo templates (*Software Engineer Fresher*, *Data Science Intern*).
- Calculates an ATS Score out of 100 with category rating.
- Highlights Detected Skills, Missing Competencies to add, and an Actionable Improvement Checklist.

### 10. âš™ï¸ Settings, Dark Mode & Persona Switcher (`/settings`)
- True dark mode toggle persisted across sessions.
- Notification toggles for national exams and scholarships.
- **Quick Persona Switcher:** Instantly switch between Class 12 PCM, PCB, Commerce, and Undergraduate profiles to demonstrate adaptability to hackathon judges.

---

## ðŸ› ï¸ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS 3.4 (Dark Mode, Custom Gradients) |
| **Icons** | Lucide React |
| **Animations & FX** | Tailwind Transitions, Canvas Confetti |
| **State Management** | React Context (`AppContext.tsx`) + LocalStorage Fallback |
| **Database ORM** | Prisma ORM (`prisma/schema.prisma`) |
| **Database Engines** | SQLite (default out-of-the-box) or MySQL |

---

## âš¡ Quick Start & Run Commands

### Prerequisites
- Node.js LTS (v18 or higher)
- npm (v9 or higher)

### 1. Installation
Navigate into the project root:
```bash
cd onestep
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## ðŸ—„ï¸ Database Setup (SQLite & MySQL)

The application comes pre-configured with SQLite for zero-configuration, instant evaluation.

### Toggling to MySQL
1. Edit `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "mysql"
     url      = env("DATABASE_URL")
   }
   ```
2. Update `.env`:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/onestop_db"
   ```
3. Run Prisma Migration:
   ```bash
   npx prisma migrate dev --name init
   ```

---

## ðŸ“¡ REST API Endpoints

- `GET /api/careers?stream=Science (PCM)&q=Data`: Search and filter career matrix.
- `GET /api/colleges?state=Maharashtra&type=Premier`: Search premier Indian colleges.
- `GET /api/courses?category=Engineering`: Retrieve degree specifications.
- `POST /api/advisor`: AI chat query processing with contextual stream matching.

---

## ðŸ† Smart India Hackathon Presentation Guide

When presenting to judges:
1. **Begin at `/onboarding`:** Showcase the branded splash screen and guest login options.
2. **Demonstrate `/profile-setup`:** Walk through how Indian students customize their stream, percentage, and budget.
3. **Switch Personas:** Use the top-right profile dropdown to switch between *Aarav (PCM Engineer)*, *Ananya (PCB Doctor)*, and *Rohan (Commerce CA)* to prove that recommendations dynamically adapt.
4. **Test the AI Advisor (`/advisor`):** Click sample prompt chips like *"Which career is best for me?"* to reveal inline recommendation cards and roadmap links.
5. **Run the Resume Analyzer (`/resume`):** Click the *"Software Engineer Fresher"* template and tap *"Analyze Resume Now"* to demonstrate live ATS scoring and skill gap detection.
6. **Toggle Dark Mode:** Click the sun/moon icon in the top navigation bar to highlight full dark theme compliance.
