

// Define the type for service items
interface Service {
    imageSrc: string;
    title: string;
    description: string;
    buttonText?: string;
  }
  
  
  // Array of services data
  export const servicesData: Service[] = [
    {
      imageSrc: "/images/consultants-768x512.jpg",
      title: "Consultancy Services",
      description: "We offer consultancy services to both individuals and corporate bodies...",
    },
    {
      imageSrc: "/images/drill-equip-768x512.jpg",
      title: "Drilling Instrumentation",
      description: "Instrumentation is concerned with the techniques in Environmental Sciences...",
    },
    {
      imageSrc: "/images/ny4-768x512.jpg",
      title: "Automation Designs and Systems",
      description: "Automation is the technology by which a process or  a procedure...",
    },
   
  ];

   // Array of services data
   export const servicesData2: Service[] = [
    {
      imageSrc: "/images/cctv-768x512.jpg",
      title: "CCTV / Surveillance Systems",
      description: "CCTV (Closed-circuit television) monitoring is essential in ensuring the...",
    },
    {
      imageSrc: "/images/control-Designs-768x512.jpg",
      title: "Instrumentation and Control",
      description: "Instrumentation Engineering deals with the design, configuration and automation of...",
    },
    {
      imageSrc: "/images/firegas2-768x512.jpg",
      title: "Fire and Gas Detection System",
      description: "A fire and gas alarm system has number of devices working together to detect...",
    },
   
  ];


  //Array of News Update data
  export const newsUpdateData: Service[] = [
    {
      imageSrc: "/images/Gas-Detection-System-672x448.jpg",
      title: "Canaez (HD Model) Conventional Fire & Gas Detection System",
      description: "The fire and gas detection system is the controlling component of the fire and gas ...",
    },
    {
      imageSrc: "/images/alarm-System-672x448.jpg",
      title: "Canaez Bilge/Pollution Tank Alarm and Control System",
      description: "A bilge high water alarm is a simple device that sounds when the bilge water level rises above...",
    },
    {
      imageSrc: "/images/alarm-System-672x448.jpg",
      title: "Canaez Anti-Collision System",
      description: "The CANAEZ Anti-Collision System tackles head-on two key objectives in the drilling industry....",
    },
   
  ];



  export const newsData = [
    {
      title: "Canaez (HID Model) Conventional Fire & Gas Detection System",
      date: "AUGUST 22, 2020",
      description:
        "The fire and gas detection system is the controlling component of the fire and gas...",
      imageSrc: "/images/Gas-Detection-System-672x448.jpg",
      readMoreLink: "#",
    },
    {
      title: "Canaez Bilge/Pollution Tank Alarm and Control System",
      date: "AUGUST 8, 2020",
      description:
        "A bilge high water alarm is a simple device that sounds when the bilge water level rises above...",
      imageSrc: "/images/alarm-System-672x448.jpg",
      readMoreLink: "#",
    },
    {
      title: "Canaez Anti-Collision System",
      date: "AUGUST 8, 2020",
      description:
        "The CANAEZ Anti-Collision System tackles head-on two key objectives in the drilling industry...",
      imageSrc: "/images/alarm-System-672x448.jpg",
      readMoreLink: "#",
    },
  ];


  
  
  export default {servicesData, newsUpdateData, newsData};
  