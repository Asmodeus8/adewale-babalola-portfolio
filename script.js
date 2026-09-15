const projects = [
  { name: "7TH BREED", description: "Production solar and energy-services platform with customer and admin workflows for quotations, invoices, payments and installations.", tags: ["TypeScript", "Node.js", "PostgreSQL", "Cloud"], url: "https://github.com/Asmodeus8/7thbreed" },
  { name: "SolarPro Lagos", description: "Solar-focused web project with a responsive customer-facing digital experience.", tags: ["Web Development", "Solar Energy", "Responsive UI"], url: "https://github.com/Asmodeus8/solarpro-lagos" },
  { name: "Smart Home Security System", description: "Raspberry Pi security platform combining intrusion sensing, face recognition, lighting, siren and lock control, alerts, video evidence and a Flask dashboard.", tags: ["Python", "Raspberry Pi", "OpenCV", "Flask", "IoT"] },
  { name: "Offline-based Login Form", description: "Authentication-focused project exploring an offline-capable login experience and local application state.", tags: ["Authentication", "Frontend", "Offline"], url: "https://github.com/Asmodeus8/Offline-based-login-form" },
  { name: "Calculator", description: "Compact calculator application demonstrating interface logic, input handling and frontend fundamentals.", tags: ["JavaScript", "Frontend", "UI"], url: "https://github.com/Asmodeus8/Calculator" }
];
const grid = document.querySelector("#project-grid");
grid.innerHTML = projects.map((p, i) => `<article class="project"><span class="num">${String(i + 1).padStart(2, "0")}</span><h3>${p.name}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div><div class="project-links">${p.url ? `<a href="${p.url}" target="_blank" rel="noreferrer">GitHub ↗</a>` : `<a href="#contact">Details →</a>`}</div></article>`).join("");
