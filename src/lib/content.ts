import { Headphones, Clock3, HeartHandshake, TrendingUp, type LucideIcon } from "lucide-react";

export type Service = { icon: LucideIcon; title: string; short: string; copy: string; bg: string; fg: string };

export const services: Service[] = [
  { icon: Headphones, title: "Customer support", short: "Helpful, professional interactions on every touchpoint.", copy: "Thoughtful, helpful and professional customer interactions across every touchpoint.", bg: "bg-[#EAF0FF]", fg: "text-[#2F5BFF]" },
  { icon: Clock3, title: "Always-on service", short: "A 24/7 mindset built on reliability.", copy: "A 24/7 operating mindset designed around continuity, responsiveness and reliability.", bg: "bg-[#FFF1D6]", fg: "text-[#B9770E]" },
  { icon: HeartHandshake, title: "Customer experience", short: "Clarity and care at the centre.", copy: "A people-first approach that puts understanding, clarity and care at the centre.", bg: "bg-[#DDF5EA]", fg: "text-[#17895F]" },
  { icon: TrendingUp, title: "Continuous improvement", short: "Learning from feedback, every day.", copy: "Learning from feedback, strengthening processes and raising service standards over time.", bg: "bg-[#F3E4F6]", fg: "text-[#8E3FA3]" }
];
