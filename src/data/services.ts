export interface Service {
  id: number
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  features: string[]
  details: {
    title: string
    description: string
  }[]
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'ambulance-services',
    title: 'Ambulance Services',
    shortDescription: '24/7 emergency medical response with fully equipped ambulances and trained paramedics.',
    description: 'Professional emergency ambulance services available around the clock. Our fleet of modern, fully equipped ambulances and highly trained paramedics ensure rapid response and quality care during medical emergencies.',
    icon: '🚑',
    features: [
      '24/7 Emergency Response',
      'Advanced Life Support',
      'Trained Paramedics',
      'Modern Equipment',
      'GPS Tracking',
      'Insurance Coverage'
    ],
    details: [
      {
        title: 'Rapid Emergency Response',
        description: 'Our ambulances are strategically positioned across Cyprus to ensure the fastest possible response times to any emergency situation.'
      },
      {
        title: 'Advanced Medical Equipment',
        description: 'Each ambulance is equipped with state-of-the-art medical equipment including defibrillators, ventilators, and monitoring systems.'
      },
      {
        title: 'Professional Paramedic Team',
        description: 'Our paramedics undergo continuous training and are certified in advanced life support, trauma care, and emergency medical procedures.'
      }
    ]
  },
  {
    id: 2,
    slug: 'events-safety',
    title: 'Events Safety',
    shortDescription: 'Professional medical coverage for events of all sizes with on-site medical personnel.',
    description: 'Comprehensive medical safety services for events, festivals, concerts, and gatherings. We provide on-site medical personnel, equipment, and emergency response capabilities.',
    icon: '🎪',
    features: [
      'On-Site Medical Personnel',
      'First Aid Stations',
      'Emergency Response Team',
      'Risk Assessment',
      'Medical Equipment',
      'Event Planning Support'
    ],
    details: [
      {
        title: 'Customized Medical Coverage',
        description: 'We assess each event individually and provide tailored medical coverage based on size, type, and risk factors.'
      },
      {
        title: 'Experienced Medical Staff',
        description: 'Our team includes doctors, nurses, and paramedics experienced in event medicine and crowd management.'
      },
      {
        title: 'Complete Equipment Setup',
        description: 'We establish fully equipped medical stations with all necessary supplies and emergency response capabilities.'
      }
    ]
  },
  {
    id: 3,
    slug: 'home-care-services',
    title: 'Home-Care Services',
    shortDescription: 'Professional medical care in the comfort of your home with qualified healthcare professionals.',
    description: 'Quality medical care delivered at home by experienced healthcare professionals. From post-operative care to chronic condition management, we bring hospital-level care to your doorstep.',
    icon: '🏥',
    features: [
      'Nursing Care',
      'Post-Operative Care',
      'Chronic Disease Management',
      'Medication Administration',
      'Wound Care',
      'Patient Monitoring'
    ],
    details: [
      {
        title: 'Personalized Care Plans',
        description: 'Each patient receives a customized care plan developed by our medical team based on individual needs and conditions.'
      },
      {
        title: 'Qualified Healthcare Professionals',
        description: 'Our nurses and caregivers are licensed, experienced, and undergo regular training to maintain the highest standards.'
      },
      {
        title: 'Comprehensive Home Services',
        description: 'From basic care to complex medical procedures, we provide a full range of services in the comfort of your home.'
      }
    ]
  },
  {
    id: 4,
    slug: 'maritime-health-services',
    title: 'Maritime Health Services',
    shortDescription: 'Specialized medical services for vessels and maritime operations with certified maritime doctors.',
    description: 'Expert maritime medical services including medical examinations, consultations, emergency response, and health management for crew members and maritime operations.',
    icon: '⚓',
    features: [
      'Medical Examinations',
      'Emergency Response',
      'Telemedicine Support',
      'Medical Supplies',
      'Health Certificates',
      'Crew Medical Management'
    ],
    details: [
      {
        title: 'Maritime Medical Expertise',
        description: 'Our doctors are certified in maritime medicine and understand the unique health challenges of working at sea.'
      },
      {
        title: 'Vessel Medical Supplies',
        description: 'We provide and manage medical supply kits for vessels, ensuring compliance with maritime regulations.'
      },
      {
        title: '24/7 Telemedicine Support',
        description: 'Round-the-clock remote medical consultation service for vessels at sea, providing expert guidance when needed.'
      }
    ]
  },
  {
    id: 5,
    slug: 'trainings',
    title: 'Medical Trainings',
    shortDescription: 'Professional medical training courses including First Aid, CPR, and advanced life support.',
    description: 'Comprehensive training programs for individuals and organizations. Our certified instructors provide practical, hands-on training in emergency medical procedures.',
    icon: '📚',
    features: [
      'First Aid Training',
      'CPR Certification',
      'AED Training',
      'Basic Life Support',
      'Advanced Life Support',
      'Corporate Programs'
    ],
    details: [
      {
        title: 'Certified Training Programs',
        description: 'All courses are internationally recognized and lead to certification upon successful completion.'
      },
      {
        title: 'Hands-On Practice',
        description: 'Training includes practical scenarios and simulations to ensure participants gain real-world skills.'
      },
      {
        title: 'Customized Corporate Training',
        description: 'We offer tailored training programs for businesses and organizations with flexible scheduling.'
      }
    ]
  },
  {
    id: 6,
    slug: 'wellness-drip',
    title: 'Health Infusion Home Care / Wellness Drip',
    shortDescription: 'IV vitamin therapy and wellness infusions administered at home by qualified medical professionals.',
    description: 'Professional IV therapy services delivered in the comfort of your home. From hydration to vitamin infusions, our medical team provides safe and effective wellness treatments.',
    icon: '💧',
    features: [
      'Vitamin Infusions',
      'Hydration Therapy',
      'Immune Boosters',
      'Energy Enhancement',
      'Recovery Treatments',
      'Home Administration'
    ],
    details: [
      {
        title: 'Medical-Grade IV Therapy',
        description: 'All treatments are administered by licensed healthcare professionals using high-quality, medical-grade products.'
      },
      {
        title: 'Customized Wellness Plans',
        description: 'We offer various formulations tailored to your specific health goals and needs.'
      },
      {
        title: 'Convenient Home Service',
        description: 'Enjoy the benefits of IV therapy without leaving home. We bring all equipment and expertise to you.'
      }
    ]
  }
]
