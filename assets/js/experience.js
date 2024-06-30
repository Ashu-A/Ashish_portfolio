AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Construction Manager",
    cardImage: "assets/images/experience-page/pbl.jpeg",
    place: "PBL Lab - Stanford University",
    time: "",
    desp: "<li>Stanford's PBL Lab is renowned for its innovative research and curriculum in construction and \n" +
        "engineering. </li>" +
        "<li>Led technology and BIM implementation.</li>" +
        "<li>Managed 3D scheduling, logistic planning, prefab construction, and clash detection. </li>" +
        "<li>Utilised VR technologies for enhanced construction visualization.  </li>"+
        "<li>Developed a website for data extraction, real-time model viewing, collaboration on Revit models, and \n" +
        "chat functionality integrated with model data. </li>",
  },
    {
    title: "Associate Consultant in Smart Integration (EDI)",
    cardImage: "assets/images/experience-page/Bcone.png",
    place: "Bristlecone",
    time: "",
    desp: "<li>Bristlecone, a leader in AI-powered application transformation services for the digital supply chain, \n" +
        "empowers customers with speed, visibility, automation, and resiliency. </li><li>Optimised EDI processes with cross-functional teams.</li><li>Implemented AI-driven solutions for supply chain visibility and automation.</li>",
  },
  {
    title: "Structural Engineer",
    cardImage: "assets/images/experience-page/dar.png",
    place: "Dar Al-Handasah",
    time: "",
    desp: "<li>Dar Al-Handasah is a global leader in design, planning, engineering, sustainability consulting, digital \n" +
        "solutions, and project management. </li><li>Contributed to the extension of the Dubai Mall parking area, applying advanced structural engineering \n" +
        "techniques to enhance project efficiency and support its successful completion. </li><li>Collaborated with multidisciplinary teams to ensure project quality and adherence to timelines. </li>",
  },
  {
    title: "Jr. Site Engineer",
    cardImage: "assets/images/experience-page/sara.png",
    place: "Sarswati Techinfra.pvt.ltd",
    time: "",
    desp: "<li>Saraswati Techinfra Pvt. Ltd., specializing in Mechanical, Instrumentation, and Civil engineering. Known \n" +
        "for quality erection, testing, and commissioning of columns, vessels, furnaces, and piping systems.</li>" +
        "<li>Successfully coordinated construction activities, contributing to the timely completion of projects. </li>"+
        "<li>Maintained rigorous quality control measures to uphold project standards and client expectations. </li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Django Developer at Createbytes",
    cardImage: "assets/images/experience-page/cb.png",
    description:
      "Worked as a skilled Django Developer at CreateBytes, With a strong grasp of the framework, creative problem-solving abilities, and effective collaboration skills.",
  },
  {
    title: "Civil Engineering Consultant at Softusvista",
    cardImage: "assets/images/experience-page/sv.png",
    description:
      "My innovative civil engineering formulas improved accuracy and efficiency in complex calculations, contributing to successful project outcomes.",
  },
  {
    title: "Campus Ambassador at eArth Samvarta",
    cardImage: "assets/images/experience-page/esf.png",
    description:
      "I promoted environmental awareness, built relationships with stakeholders, and developed valuable leadership skills.",
  },
  {
    title: "Student Intern at Symbiosis Institute of Technology",
    cardImage: "assets/images/experience-page/symbi.png",
    description:
      "I improved my research, collaboration, presentation, and scientific writing skills by working on projects and presenting my findings.",
  },
  {
    title: "Student Intern at sarswati techinfra.pvt.ltd",
    cardImage: "assets/images/experience-page/sars.png",
    description:
      "I had hands-on experience with site inspections, quality control, and assisting senior engineers in construction plan design and review.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Capomaestro 2020",
    subtitle: "Technical Head",
    image: "assets/images/experience-page/capo.png",
    desp: "",
    href: "",
  },
  {
    title: "Capomaestro 2021",
    subtitle: "Capomaestro Head",
    image: "assets/images/experience-page/capo.png",
    desp: "",
    href: "",
  },
  {
    title: "Capomaestro 2022",
    subtitle: "Student Mentor",
    image: "assets/images/experience-page/capo.png",
    desp: "",
    href: "",
  },
  {
    title: "TTC-Anchorage",
    subtitle: "Founder and Admin head",
    image: "assets/images/experience-page/ttc.png",
    desp: "",
    href: "",
  },
  {
    title: "ASCE-Students Chapter",
    subtitle: "Founder and Chairperson",
    image: "assets/images/experience-page/asce.png",
    desp: "",
    href: "",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
