export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: "live" | "beta" | "coming soon";
  url?: string;
  playStoreUrl?: string;
  icon: string;
  iconUrl?: string;
  screenshots: string[];
  features: string[];
  category?: string;
  lastUpdated?: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "driving-test-app",
    name: "Krkortet",
    tagline: "#1 choice for driving licence success.",
    description:
      "Prepare for your driving exam with theory lessons, practice tests, and everything you need to pass on your first try.",
    longDescription:
      "Are you getting ready to take your driving test? Krkortet is a comprehensive driving licence preparation app designed to help you study, practice, and succeed on test day. The app covers the rules of the road, traffic signs and signals, and the practical skills you need to drive safely and confidently — all in one focused tool. With realistic practice tests modelled on the real exam, you'll know exactly what to expect before you sit in the test centre.",
    technologies: ["Android", "Java", "SQLite", "REST API"],
    status: "live",
    url: "https://play.google.com/store/apps/details?id=com.kms.dlquiz",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.kms.dlquiz",
    icon: "car",
    iconUrl:
      "https://play-lh.googleusercontent.com/6JwBru67SqcpmYvxE7H8OJyRM26gYeryxZ6QIYxm25Iz0MHCtb7RjpVdpgdPYnaoteso=s200",
    screenshots: [
      "https://play-lh.googleusercontent.com/riC6PvXuW1ujp3IiU6Ts-G36MzG0e0EpjXQpYlILLmCHxyNb9ZGHN2RUwJeahLDlZ97fKrZcxmwNuqoFX34=w300-h614-rw",
      "https://play-lh.googleusercontent.com/SuKPMKin_W0B_Qh43dfhrS55B0w2BAWtoy5mh1baWHVLa32D_b7avYqVyTFaH0EX-Tw=w300-h614-rw",
      "https://play-lh.googleusercontent.com/y0sTA9xXqAajWn2kwWxxFwBJ2b7kHXFtIwXsglVH3H32BjrcJYjPqEfmo3K5Hg-M6Q=w300-h614-rw",
      "https://play-lh.googleusercontent.com/gmjenPU3OUHZm65-l32jMrApxTZwShVPPbWHA9ifucUTIbwPotvT8Ic98-hN1bqVRQ=w300-h614-rw",
      "https://play-lh.googleusercontent.com/MmpHwis8rPwWhXQCQLf6u_D9m0fD5RMO6QSUDp5cFCtzgCQ3v_NWg4ma9Mn_zr5n2b7r=w300-h614-rw",
      "https://play-lh.googleusercontent.com/CBr2ecHX06UdJbEJoCTSrCPVwMsqF6VL-rjdEdsm6FyIvcRrftH91wXgo2JK8JpEqg=w300-h614-rw",
    ],
    features: [
      "Official theory lessons covering all road rules and traffic signs",
      "Realistic practice tests modelled on the real driving exam",
      "Find nearby certified driving schools",
      "Local driving regulations and licence requirements",
      "Track your progress and identify weak areas",
      "Tips to manage test-day nerves and boost confidence",
    ],
    category: "Education",
    lastUpdated: "May 2023",
  },

];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
