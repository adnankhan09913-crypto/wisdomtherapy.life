export type Page =
  | 'home'
  | 'about'
  | 'programs'
  | 'training'
  | 'wellness'
  | 'health-camps'
  | 'community'
  | 'experts'
  | 'events'
  | 'resources'
  | 'contact'
  | 'admin';

export type ProgramCategory =
  | 'Mental Wellness'
  | 'Physical Health'
  | 'AI & Technology'
  | 'Leadership'
  | 'HR & Workplace'
  | 'Financial Awareness'
  | 'Safety'
  | 'Community'
  | 'Other';

export interface Program {
  id: string;
  title: string;
  category: ProgramCategory;
  description: string;
  learningOutcomes: string[];
  audience: string;
  duration: string;
  mode: 'Virtual Live' | 'In-Person' | 'Hybrid' | 'Self-Paced + Live Mentoring';
  trainer: string;
  trainerRole: string;
  upcomingDates: string[];
  image: string;
  featured?: boolean;
}

export type EventMode = 'Virtual Webinar' | 'In-Person Workshop' | 'Hybrid Event' | 'On-Site Health Camp';

export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  mode: EventMode;
  speaker: string;
  speakerRole: string;
  description: string;
  seatsTotal: number;
  seatsAvailable: number;
  image: string;
  isPast?: boolean;
}

export type ExpertCategory =
  | 'Health'
  | 'Mental Wellness'
  | 'AI'
  | 'HR'
  | 'Leadership'
  | 'Finance'
  | 'Education'
  | 'Workplace Safety';

export interface Expert {
  id: string;
  name: string;
  designation: string;
  organization: string;
  category: ExpertCategory;
  expertise: string[];
  bio: string;
  qualifications: string[];
  languages: string[];
  sessionsCount: number;
  rating: number;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface HealthCampItem {
  id: string;
  title: string;
  location: string;
  date: string;
  type: string;
  partnerOrgs: string[];
  qualifiedMedicalLead: string;
  description: string;
  beneficiariesCount: number;
  servicesOffered: string[];
  status: 'Upcoming' | 'Completed' | 'Open for Volunteers';
  image: string;
}

export type ResourceCategory =
  | 'Articles'
  | 'Videos'
  | 'Podcasts'
  | 'Guides'
  | 'Training Materials'
  | 'Wellness Resources'
  | 'AI Resources'
  | 'Workplace Resources'
  | 'Health Awareness'
  | 'Financial Awareness';

export interface ResourceItem {
  id: string;
  title: string;
  category: ResourceCategory;
  type: 'Article' | 'Video' | 'Podcast' | 'Guide' | 'Toolkit';
  author: string;
  date: string;
  readTime: string;
  thumbnail: string;
  description: string;
  content: string;
  tags: string[];
}

export interface ImpactMetric {
  id: string;
  key: string;
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  description: string;
  icon: string;
}

export interface ImpactStory {
  id: string;
  title: string;
  category: string;
  quote: string;
  person: string;
  role: string;
  location: string;
  statsHighlight: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  organization: string;
  category: 'Participant' | 'HR Leader' | 'Corporate Client' | 'Community Partner' | 'Expert' | 'Medical Partner';
  rating: number;
  avatar: string;
}

export type Resource = ResourceItem;

export interface Registration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  designation?: string;
  itemType: 'program' | 'event' | 'camp';
  itemId: string;
  itemName: string;
  preferredMode: string;
  message?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending Review' | 'Waitlisted';
}

export type ContactInquiryType =
  | 'General Inquiry'
  | 'Training Inquiry'
  | 'Corporate Partnership'
  | 'Health Camp'
  | 'Health Camp Inquiry'
  | 'Community Partnership'
  | 'Join as an Expert'
  | 'Expert Registration'
  | 'Volunteer'
  | 'Volunteer Registration'
  | 'Sponsorship'
  | 'Sponsorship & Support';

export interface ContactInquiry {
  id: string;
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  inquiryType: ContactInquiryType;
  message: string;
  createdAt: string;
  status: 'New' | 'In Review' | 'Resolved';
}

export interface HealthCampRequest {
  id: string;
  organization: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  expectedParticipants: string;
  preferredDate: string;
  campType: string;
  supportRequired: string;
  notes?: string;
  createdAt: string;
  status: 'Pending Assessment' | 'Approved' | 'Scheduled';
}

export interface CorporateTrainingInquiry {
  id: string;
  organization: string;
  contactPerson: string;
  email: string;
  phone: string;
  trainingRequirement: string;
  participantsCount: string;
  preferredDate: string;
  deliveryMode: string;
  message: string;
  createdAt: string;
  status: 'Pending Quotation' | 'Discovery Scheduled' | 'In Progress';
}

export interface ExpertApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  category: ExpertCategory;
  expertiseAreas: string;
  qualifications: string;
  languages: string;
  linkedInUrl?: string;
  bioSummary: string;
  createdAt: string;
  status: 'Under Review' | 'Interview Scheduled' | 'Onboarded';
}
