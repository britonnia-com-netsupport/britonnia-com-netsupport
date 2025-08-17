import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.solutions': 'Solutions',
    'nav.downloads': 'Downloads',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title': 'Transform Your Digital Workspace with NetSupport Solutions',
    'hero.subtitle': 'Leading IT consultancy in Ghana providing comprehensive NetSupport software solutions for education and corporate environments across West Africa.',
    'hero.getStarted': 'Get Started',
    'hero.learnMore': 'Learn More',
    
    // About
    'about.title': 'About Britonnia Ltd',
    'about.subtitle': 'Your trusted NetSupport Software partner in Ghana, delivering world-class educational and corporate technology solutions across West Africa.',
    'about.description1': 'Britonnia Ltd is a premier technology consultancy firm based in Ghana, specializing as an authorized reseller of NetSupport Software Ltd solutions. We bridge the gap between cutting-edge educational and corporate technology and the unique needs of West African organizations.',
    'about.description2': 'With deep understanding of both local requirements and global technology standards, we provide comprehensive consulting, implementation, and support services that ensure our clients maximize their technology investments.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.description': 'Let us help you find the perfect NetSupport solution.',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company/Organization',
    'contact.country': 'Country',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending Message...',
    'contact.success': 'Message Sent Successfully!',
    'contact.successDescription': "We'll get back to you within 24 hours.",
    
    // Footer
    'footer.description': 'Britonnia Ltd is your trusted NetSupport partner in Ghana, providing comprehensive IT consulting and software solutions across West Africa.',
    'footer.quickLinks': 'Quick Links',
    'footer.solutions': 'Solutions',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    
    // Newsletter
    'newsletter.title': 'Stay Updated',
    'newsletter.subtitle': 'Subscribe to our newsletter for the latest updates and insights',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.subscribe': 'Subscribe',
    'newsletter.success': 'Subscribed!',
    'newsletter.description': 'You\'ll receive our latest updates and insights.',
    
    // Products
    'products.netSupportSchool': 'NetSupport School',
    'products.classroomCloud': 'Classroom.cloud',
    'products.netSupportManager': 'NetSupport Manager',
    'products.netSupportDNA': 'NetSupport DNA',
    
    // Solutions
    'solutions.education': 'Education Solutions',
    'solutions.corporate': 'Corporate Solutions',
    'solutions.consultancy': 'IT Consultancy',
    'solutions.support': 'Technical Support',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.solutions': 'Solutions',
    'nav.downloads': 'Téléchargements',
    'nav.resources': 'Ressources',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Commencer',
    
    // Hero Section
    'hero.title': 'Transformez votre espace de travail numérique avec les solutions NetSupport',
    'hero.subtitle': 'Cabinet de conseil IT leader au Ghana fournissant des solutions logicielles NetSupport complètes pour les environnements éducatifs et corporatifs en Afrique de l\'Ouest.',
    'hero.getStarted': 'Commencer',
    'hero.learnMore': 'En savoir plus',
    
    // About
    'about.title': 'À propos de Britonnia Ltd',
    'about.subtitle': 'Votre partenaire de confiance NetSupport Software au Ghana, livrant des solutions technologiques éducatives et corporatives de classe mondiale en Afrique de l\'Ouest.',
    'about.description1': 'Britonnia Ltd est une entreprise de conseil technologique de premier plan basée au Ghana, spécialisée en tant que revendeur agréé des solutions NetSupport Software Ltd. Nous comblons le fossé entre la technologie éducative et corporative de pointe et les besoins uniques des organisations ouest-africaines.',
    'about.description2': 'Avec une compréhension approfondie des exigences locales et des standards technologiques mondiaux, nous fournissons des services complets de conseil, d\'implémentation et de support qui garantissent que nos clients maximisent leurs investissements technologiques.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.description': 'Laissez-nous vous aider à trouver la solution NetSupport parfaite.',
    'contact.fullName': 'Nom complet',
    'contact.email': 'Adresse e-mail',
    'contact.phone': 'Numéro de téléphone',
    'contact.company': 'Entreprise/Organisation',
    'contact.country': 'Pays',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi du message...',
    'contact.success': 'Message envoyé avec succès!',
    'contact.successDescription': 'Nous vous recontacterons dans les 24 heures.',
    
    // Footer
    'footer.description': 'Britonnia Ltd est votre partenaire NetSupport de confiance au Ghana, fournissant des solutions complètes de conseil IT et logiciels en Afrique de l\'Ouest.',
    'footer.quickLinks': 'Liens rapides',
    'footer.solutions': 'Solutions',
    'footer.contact': 'Informations de contact',
    'footer.rights': 'Tous droits réservés.',
    
    // Newsletter
    'newsletter.title': 'Restez Informé',
    'newsletter.subtitle': 'Abonnez-vous à notre newsletter pour les dernières mises à jour et informations',
    'newsletter.placeholder': 'Entrez votre email',
    'newsletter.subscribe': 'S\'abonner',
    'newsletter.success': 'Abonné!',
    'newsletter.description': 'Vous recevrez nos dernières mises à jour et informations.',
    
    // Products
    'products.netSupportSchool': 'NetSupport School',
    'products.classroomCloud': 'Classroom.cloud',
    'products.netSupportManager': 'NetSupport Manager',
    'products.netSupportDNA': 'NetSupport DNA',
    
    // Solutions
    'solutions.education': 'Solutions Éducatives',
    'solutions.corporate': 'Solutions Corporatives',
    'solutions.consultancy': 'Conseil IT',
    'solutions.support': 'Support Technique',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};