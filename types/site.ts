export type Locale = "ar" | "en";

export type NavLink = {
  id: string;
  href: string;
  label: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type EquipmentItem = {
  id: number;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  spec?: string;
  badge?: string;
  image: string;
  slug?: string;
};

export type EquipmentCategory = {
  id: string;
  nameAr: string;
  nameEn: string;
  items: EquipmentItem[];
};

export type ServiceItem = {
  id: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
};

export type ContactInfo = {
  phone: string;
  email: string;
  locationAr: string;
  locationEn: string;
  hoursAr: string;
  hoursEn: string;
};
