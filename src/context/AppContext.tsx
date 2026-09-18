import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Page,
  Program,
  EventItem,
  Expert,
  ResourceItem,
  HealthCampItem,
  ImpactMetric,
  Registration,
  ContactInquiry,
  HealthCampRequest,
  CorporateTrainingInquiry,
  ExpertApplication,
} from '../types';
import {
  INITIAL_IMPACT_METRICS,
  INITIAL_PROGRAMS,
  INITIAL_EVENTS,
  INITIAL_EXPERTS,
  INITIAL_HEALTH_CAMPS,
  INITIAL_RESOURCES,
  INITIAL_REGISTRATIONS,
  INITIAL_CONTACT_INQUIRIES,
  INITIAL_HEALTH_CAMP_REQUESTS,
  INITIAL_CORPORATE_INQUIRIES,
  INITIAL_EXPERT_APPLICATIONS,
  getStoredData,
  setStoredData,
  STORAGE_KEYS,
} from '../data/mockData';

interface RegistrationPrefill {
  type: 'program' | 'event' | 'camp';
  id: string;
  name: string;
}

interface AppContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  // Detail views
  selectedProgram: Program | null;
  setSelectedProgram: (program: Program | null) => void;
  selectedEvent: EventItem | null;
  setSelectedEvent: (event: EventItem | null) => void;
  selectedExpert: Expert | null;
  setSelectedExpert: (expert: Expert | null) => void;
  selectedResource: ResourceItem | null;
  setSelectedResource: (resource: ResourceItem | null) => void;
  // Modals
  isRegistrationModalOpen: boolean;
  registrationPrefill: RegistrationPrefill | null;
  openRegistrationModal: (prefill?: RegistrationPrefill) => void;
  closeRegistrationModal: () => void;
  isPartnerModalOpen: boolean;
  partnerPrefillType: string;
  openPartnerModal: (partnerType?: string) => void;
  closePartnerModal: () => void;
  isSearchModalOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;
  // Data Collections
  programs: Program[];
  events: EventItem[];
  experts: Expert[];
  healthCamps: HealthCampItem[];
  resources: ResourceItem[];
  impactMetrics: ImpactMetric[];
  updateImpactMetric: (id: string, newDisplayValue: string, newNumeric: number) => void;
  // Submissions
  registrations: Registration[];
  addRegistration: (reg: Omit<Registration, 'id' | 'createdAt' | 'status'>) => boolean;
  contactInquiries: ContactInquiry[];
  addContactInquiry: (inq: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>) => boolean;
  healthCampRequests: HealthCampRequest[];
  addHealthCampRequest: (req: Omit<HealthCampRequest, 'id' | 'createdAt' | 'status'>) => boolean;
  corporateInquiries: CorporateTrainingInquiry[];
  addCorporateInquiry: (corp: Omit<CorporateTrainingInquiry, 'id' | 'createdAt' | 'status'>) => boolean;
  expertApplications: ExpertApplication[];
  addExpertApplication: (app: Omit<ExpertApplication, 'id' | 'createdAt' | 'status'>) => boolean;
  // Notification Toast
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState<Page>('home');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [registrationPrefill, setRegistrationPrefill] = useState<RegistrationPrefill | null>(null);

  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerPrefillType, setPartnerPrefillType] = useState('Corporate Partners');

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persistent collections
  const [programs] = useState<Program[]>(() =>
    getStoredData(STORAGE_KEYS.PROGRAMS, INITIAL_PROGRAMS)
  );
  const [events] = useState<EventItem[]>(() =>
    getStoredData(STORAGE_KEYS.EVENTS, INITIAL_EVENTS)
  );
  const [experts] = useState<Expert[]>(() =>
    getStoredData(STORAGE_KEYS.EXPERTS, INITIAL_EXPERTS)
  );
  const [healthCamps] = useState<HealthCampItem[]>(() =>
    getStoredData(STORAGE_KEYS.HEALTH_CAMPS, INITIAL_HEALTH_CAMPS)
  );
  const [resources] = useState<ResourceItem[]>(() =>
    getStoredData(STORAGE_KEYS.RESOURCES, INITIAL_RESOURCES)
  );
  const [impactMetrics, setImpactMetrics] = useState<ImpactMetric[]>(() =>
    getStoredData(STORAGE_KEYS.IMPACT_METRICS, INITIAL_IMPACT_METRICS)
  );

  const [registrations, setRegistrations] = useState<Registration[]>(() =>
    getStoredData(STORAGE_KEYS.REGISTRATIONS, INITIAL_REGISTRATIONS)
  );
  const [contactInquiries, setContactInquiries] = useState<ContactInquiry[]>(() =>
    getStoredData(STORAGE_KEYS.CONTACT_INQUIRIES, INITIAL_CONTACT_INQUIRIES)
  );
  const [healthCampRequests, setHealthCampRequests] = useState<HealthCampRequest[]>(() =>
    getStoredData(STORAGE_KEYS.CAMP_REQUESTS, INITIAL_HEALTH_CAMP_REQUESTS)
  );
  const [corporateInquiries, setCorporateInquiries] = useState<CorporateTrainingInquiry[]>(() =>
    getStoredData(STORAGE_KEYS.CORP_INQUIRIES, INITIAL_CORPORATE_INQUIRIES)
  );
  const [expertApplications, setExpertApplications] = useState<ExpertApplication[]>(() =>
    getStoredData(STORAGE_KEYS.EXPERT_APPS, INITIAL_EXPERT_APPLICATIONS)
  );

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const setCurrentPage = (page: Page) => {
    setCurrentPageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openRegistrationModal = (prefill?: RegistrationPrefill) => {
    if (prefill) {
      setRegistrationPrefill(prefill);
    } else {
      setRegistrationPrefill({
        type: 'program',
        id: programs[0]?.id || 'prog-ai-pro',
        name: programs[0]?.title || 'AI for Professionals & Future of Work',
      });
    }
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  const openPartnerModal = (partnerType?: string) => {
    if (partnerType) {
      setPartnerPrefillType(partnerType);
    }
    setIsPartnerModalOpen(true);
  };

  const closePartnerModal = () => {
    setIsPartnerModalOpen(false);
  };

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  // Add Registration
  const addRegistration = (reg: Omit<Registration, 'id' | 'createdAt' | 'status'>) => {
    const newReg: Registration = {
      ...reg,
      id: `reg-${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: 'Confirmed',
    };
    const updated = [newReg, ...registrations];
    setRegistrations(updated);
    setStoredData(STORAGE_KEYS.REGISTRATIONS, updated);
    showToast(`Registration confirmed for ${reg.fullName}! A confirmation record was saved.`);
    return true;
  };

  // Add Contact Inquiry
  const addContactInquiry = (inq: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>) => {
    const newInq: ContactInquiry = {
      ...inq,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: 'New',
    };
    const updated = [newInq, ...contactInquiries];
    setContactInquiries(updated);
    setStoredData(STORAGE_KEYS.CONTACT_INQUIRIES, updated);
    showToast(`Thank you, ${inq.name}. Your inquiry has been logged successfully.`);
    return true;
  };

  // Add Health Camp Request
  const addHealthCampRequest = (req: Omit<HealthCampRequest, 'id' | 'createdAt' | 'status'>) => {
    const newReq: HealthCampRequest = {
      ...req,
      id: `camp-req-${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: 'Pending Assessment',
    };
    const updated = [newReq, ...healthCampRequests];
    setHealthCampRequests(updated);
    setStoredData(STORAGE_KEYS.CAMP_REQUESTS, updated);
    showToast(`Health Camp request for ${req.organization} submitted to clinical coordinators!`);
    return true;
  };

  // Add Corporate Training Inquiry
  const addCorporateInquiry = (corp: Omit<CorporateTrainingInquiry, 'id' | 'createdAt' | 'status'>) => {
    const newCorp: CorporateTrainingInquiry = {
      ...corp,
      id: `corp-${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: 'Pending Quotation',
    };
    const updated = [newCorp, ...corporateInquiries];
    setCorporateInquiries(updated);
    setStoredData(STORAGE_KEYS.CORP_INQUIRIES, updated);
    showToast(`Corporate training blueprint requested for ${corp.organization}!`);
    return true;
  };

  // Add Expert Application
  const addExpertApplication = (app: Omit<ExpertApplication, 'id' | 'createdAt' | 'status'>) => {
    const newApp: ExpertApplication = {
      ...app,
      id: `exp-app-${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: 'Under Review',
    };
    const updated = [newApp, ...expertApplications];
    setExpertApplications(updated);
    setStoredData(STORAGE_KEYS.EXPERT_APPS, updated);
    showToast(`Expert application submitted for ${app.fullName}! Welcome to the review queue.`);
    return true;
  };

  // Update Impact Metric (Admin capability)
  const updateImpactMetric = (id: string, newDisplayValue: string, newNumeric: number) => {
    const updated = impactMetrics.map((m) =>
      m.id === id ? { ...m, value: newDisplayValue, numericValue: newNumeric } : m
    );
    setImpactMetrics(updated);
    setStoredData(STORAGE_KEYS.IMPACT_METRICS, updated);
    showToast('Impact metrics successfully updated.');
  };

  // Handle keyboard shortcut for global search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedProgram,
        setSelectedProgram,
        selectedEvent,
        setSelectedEvent,
        selectedExpert,
        setSelectedExpert,
        selectedResource,
        setSelectedResource,
        isRegistrationModalOpen,
        registrationPrefill,
        openRegistrationModal,
        closeRegistrationModal,
        isPartnerModalOpen,
        partnerPrefillType,
        openPartnerModal,
        closePartnerModal,
        isSearchModalOpen,
        openSearchModal,
        closeSearchModal,
        programs,
        events,
        experts,
        healthCamps,
        resources,
        impactMetrics,
        updateImpactMetric,
        registrations,
        addRegistration,
        contactInquiries,
        addContactInquiry,
        healthCampRequests,
        addHealthCampRequest,
        corporateInquiries,
        addCorporateInquiry,
        expertApplications,
        addExpertApplication,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
