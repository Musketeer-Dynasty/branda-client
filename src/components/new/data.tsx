export interface INiche {
  name: string;
  isSelected: boolean;
  industry?: string;
}

export const Industries: INiche[] = [
  { name: "Technology", isSelected: false },
  { name: "Fashion", isSelected: false },
  { name: "Agriculture", isSelected: false },
  { name: "Marketing", isSelected: false },
];
export const Niches: INiche[] = [
  { name: "Robotics", isSelected: false, industry: "technology" },
  { name: "SaaS", isSelected: false, industry: "technology" },
  { name: "PaaS", isSelected: false, industry: "technology" },
  { name: "FinTech", isSelected: false, industry: "technology" },
  { name: "AI and ML", isSelected: false, industry: "technology" },
  { name: "OpenSource", isSelected: false, industry: "technology" },
  { name: "Poultry", isSelected: false, industry: "agriculture" },
  { name: "Fishery", isSelected: false, industry: "agriculture" },
  { name: "Snail Farming", isSelected: false, industry: "agriculture" },
  { name: "Bee keeping", isSelected: false, industry: "agriculture" },
  { name: "Beauty & Cosmetics", isSelected: false, industry: "fashion" },
  { name: "Apparel", isSelected: false, industry: "fashion" },
  { name: "Accessories", isSelected: false, industry: "fashion" },
  { name: "Textile & Fabric", isSelected: false, industry: "fashion" },
  { name: "Affiliate marketing  ", isSelected: false, industry: "marketing" },
  {
    name: "Social media marketing  ",
    isSelected: false,
    industry: "marketing",
  },
  { name: "Email marketing  ", isSelected: false, industry: "marketing" },
];
