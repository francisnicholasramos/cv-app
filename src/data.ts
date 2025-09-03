export interface PersonalDetails {
  fullName: string;
  email: string;
  phone: string;
  github: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  isOpen: boolean;
  isHidden: boolean,
  isCollapsed: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  isOpen: boolean;
  isHidden: boolean,
  isCollapsed: boolean;
}

export interface Sections {
  educations: Education[];
  experiences: Experience[];
}

export interface Data {
  personalDetails: PersonalDetails;
  sections: Sections;
}

const data: Data = {
  personalDetails: {
    fullName: '',
    email: 'francis03@gmail.com',
    phone: "09195552208",
    github: 'https://github.com/user/'
  },

  sections: {
    educations: [
      {
        id: crypto.randomUUID(),
        degree: 'Bachelor of Science in Information Technology',
        school: 'Pateros Technological College',
        location: 'Pateros',
        startDate: 'Sept 2021',
        endDate: 'Aug 2025',
        isOpen: true,
        isHidden: true,
        isCollapsed: true
      }
    ],

    experiences: [
      {
        id: crypto.randomUUID(),
        company: 'AIQUE Innovation Technology Corporation',
        position: 'Intern Front-End Developer',
        startDate: 'Feb 2025',
        endDate: 'June 2025',
        location: 'One World Place, BGC Taguig City',
        description: "Assist in developing web applications using React/NextJs and other popular frontend technologies and collaborating with the design team to translate UI/UX wireframes into functional components",
        isOpen: true,
        isHidden: false,
        isCollapsed: true
      },
      {
        id: crypto.randomUUID(),
        company: 'JPMorgan Chase & Co.',
        position: 'Full-Stack Developer',
        startDate: 'Aug 2025',
        endDate: 'Dec 2025',
        location: '9th Avenue, corner 38th St, Taguig, Metro Manila',
        description: "test",
        isOpen: true,
        isHidden: false,
        isCollapsed: true
      },
      {
        id: crypto.randomUUID(),
        company: 'American Express',
        position: 'Senior Software Engineer',
        startDate: 'Jan 2026',
        endDate: 'June 2026',
        location: '28th St., Bonifacio High Street Central, Taguig City',
        isOpen: true,
        description: "manifest na muna",
        isHidden: false,
        isCollapsed: true
      }
    ]
  }
}

export default data;
