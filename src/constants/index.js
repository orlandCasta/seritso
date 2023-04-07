import {
  send,
  shield,
  star,
  ibm,
  alcatel,
  fortinet,
  chechpoint,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Inicio",
  },
  {
    id: "benefits",
    title: "Beneficios",
  },
  {
    id: "services",
    title: "Servicios",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Soporte 24/7",
    content:
      "Contáctanos en cualquier momento del día, nuestros ingenieros atenderán tus inquietudes o problemas.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Seguridad",
    content:
      "Evita interrupciones y daños dentro de tu infraestructura, aseguramos un alto grado de accesibilidad y seguridad.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Contacto",
    content:
      "Mantén fácil contacto con cualquiera de nuestro equipo y con respuesta garantizada.",
  },
];

export const footerLinks = [
  {
    title: "Partners",
    links: [
      {
        name: "Fortinet",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Oracle",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Alcatel",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "IBM",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
  {
    title: "Otros",
    links: [
      {
        name: "v1.0.2",
        link: "https://www.hoobank.com/our-partner/",
      },
    ],
  },
];

export const clients = [
  {
    id: "client-1",
    logo: ibm,
  },
  {
    id: "client-2",
    logo: fortinet,
  },
  {
    id: "client-3",
    logo: chechpoint,
  },
  {
    id: "client-4",
    logo: alcatel,
  },
];
