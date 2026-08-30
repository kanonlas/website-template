// ====================
// Portfolio JavaScript
// ====================

// Check that JavaScript is working
console.log("Portfolio website loaded successfully!");

// ====================
// Dynamic Copyright Year
// ====================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// ====================
// Smooth Scrolling
// ====================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    // Only apply to internal links
    if (targetId.startsWith("#")) {
      event.preventDefault();

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});

// ==================== experiences DATA ====================

const experiences = [
  {
    image: "images/cyber.jpg",
    category: "Competition",
    title: "First Prize — DEEPGUARD",
    description:
      "Awarded First Prize for pitching DEEPGUARD, a real-time deepfake detection system combining neural networks and symbolic reasoning.",
    link: "#",
  },

  {
    image: "images/USTC.jpg",
    category: "Scholarship",
    title:
      "master's degree in physics specialized in Quantum Physics at the University of Science and Technology of China (USTC)",
    description:
      "Awarded the ANSO Scholarship for outstanding academic performance and contributions to the university community.",
    link: "#",
  },

  {
    image: "images/GJKoreanCert.jpg",
    category: "Competition",
    title: "Second Prize — Smart City Hackathon",
    description:
      "Developed a smart building system to improve air-conditioning efficiency through sensor-based smart windows and intelligent control.",
    link: "#",
  },

  {
    image: "images/IIT.jpg",
    category: "international exchange",
    title: "IIT innovation and AI summer school",
    description:
      "Participated in the IIT Innovation and AI Summer School, gaining hands-on experience in cutting-edge AI technologies and innovation strategies.",
    link: "#",
  },

  {
    image: "images/Japan.jpg",
    category: "Volunteers",
    title: "JCFL-CMU International Buddy Program",
    description:
      "Participated in the JCFL-CMU International Buddy Program, fostering cross-cultural understanding and global connections.",
    link: "#",
  },

  {
    image: "images/JoinNobel.jpg",
    category: "Attendance",
    title: "Nobel Prize Speech",
    description:
      "Attended 60th Anniversary with Nobel Laureate Speech: Exploring Biomedical Progress and Its Global Impact ",
    link: "#",
  },

  {
    image: "images/linkedinAI.jpg",
    category: "Skills",
    title: "LinkedIn AI Skills",
    description:
      "Enhanced AI skills through LinkedIn learning courses and certifications.",
    link: "#",
  },

  {
    image: "#",
    category: "Scholarship",
    title:
      "Master Degree in Computer Science at Dalian University of Technology (DUT)",
    description:
      "Get CSC Scholarship 2026 for outstanding academic performance and contributions to the university community.",
    link: "#",
  },
];

// ==================== experiences TEMPLATE ====================

const template = document.querySelector("#experiences-template");

const container = document.querySelector("#experiences-list");

// ==================== CREATE experiences CARDS ====================

experiences.forEach((experiences) => {
  // Copy the template
  const card = template.content.cloneNode(true);

  // Find elements inside the copied template
  const link = card.querySelector("a");
  const image = card.querySelector(".experiences-image");
  const category = card.querySelector(".experiences-category");
  const title = card.querySelector(".experiences-title");
  const description = card.querySelector(".experiences-description");

  // Insert data
  link.href = experiences.link;

  image.src = experiences.image;
  image.alt = experiences.title;

  category.textContent = experiences.category;

  title.textContent = experiences.title;

  description.textContent = experiences.description;

  // Add card to the page
  container.appendChild(card);
});
