export interface AppConfig {
  id: string;
  name: string;
  letter: "A" | "C" | "G";
  icon: string;
  description: string;
  features: string[];
  webUrl: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  isCenterpiece?: boolean;
}

export const APPS: AppConfig[] = [
  {
    id: "careers",
    name: "Athro Careers",
    letter: "C",
    icon: "/icons/careers.png",
    description:
      "Your path to your dream job. Tell us where you are and where you want to be — we'll build you a step-by-step career roadmap with qualifications, grades, costs, and deadlines.",
    features: ["Personalised to your year group & grades", "Real UK & Wales requirements", "AI-powered research"],
    webUrl: "https://athrocareers.co.uk",
    isCenterpiece: false,
  },
  {
    id: "athro",
    name: "Athro AI",
    letter: "A",
    icon: "/icons/athro.png",
    description:
      "Your intelligent learning companion. AI-powered tutoring, adaptive quizzes, and personalised study pathways to help you achieve your academic goals.",
    features: ["AI tutoring & explanations", "Adaptive quizzes", "Virtual classroom"],
    webUrl: "https://athro.ai",
    isCenterpiece: true,
  },
  {
    id: "goals",
    name: "Athro Goals",
    letter: "G",
    icon: "/icons/goals.png",
    description:
      "Your path to any goal. Mortgage, quit smoking, run a marathon — tell us your goal and when you want it. We'll build you a step-by-step pathway with real dates and costs.",
    features: ["Definite dates, not vague timelines", "Real data from gov.uk & trusted sources", "No hallucination — verified information only"],
    webUrl: "https://athrogoals.co.uk",
    isCenterpiece: false,
  },
];
