const events = [
  {
    id: "afterglow",
    title: "Afterglow Music Festival",
    category: "Music",
    day: "21",
    month: "NOV",
    date: "November 21, 2026",
    time: "5:00 PM onwards",
    venue: "KIIT Convention Centre, Bhubaneswar",
    location: "Bhubaneswar",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=85",
    description:
      "One night. Three stages. A whole lot of unforgettable energy. Experience live performances, emerging artists, immersive visuals and a crowd that knows how to have a good time.",
    tag: "LIVE MUSIC",
  },
  {
    id: "design-dialogues",
    title: "Design Dialogues",
    category: "Arts",
    day: "14",
    month: "NOV",
    date: "November 14, 2026",
    time: "11:00 AM – 4:00 PM",
    venue: "Mayfair Convention, Bhubaneswar",
    location: "Bhubaneswar",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85",
    description:
      "A creative meetup for curious minds. Hear from designers, join hands-on sessions and exchange ideas on the future of visual storytelling.",
    tag: "CREATIVE MEETUP",
  },
  {
    id: "future-forward",
    title: "Future Forward: AI Summit",
    category: "Technology",
    day: "18",
    month: "NOV",
    date: "November 18, 2026",
    time: "9:30 AM – 5:00 PM",
    venue: "KIIT Campus 25, Bhubaneswar",
    location: "Bhubaneswar",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=900&q=85",
    description:
      "Explore the ideas shaping tomorrow. A day of practical talks, live demos and conversations around artificial intelligence, emerging tech and responsible innovation.",
    tag: "TECH & INNOVATION",
  },
  {
    id: "founders-table",
    title: "The Founder's Table",
    category: "Business",
    day: "26",
    month: "NOV",
    date: "November 26, 2026",
    time: "6:00 PM – 9:00 PM",
    venue: "Trident, Bhubaneswar",
    location: "Bhubaneswar",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
    description:
      "An intimate evening for builders, founders and ambitious thinkers. Share lessons, meet potential collaborators and get inspired by real startup stories.",
    tag: "NETWORKING",
  },
  {
    id: "sunday-soul",
    title: "Sunday Soul Sessions",
    category: "Lifestyle",
    day: "29",
    month: "NOV",
    date: "November 29, 2026",
    time: "7:00 AM – 10:00 AM",
    venue: "Ekamra Kanan, Bhubaneswar",
    location: "Bhubaneswar",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
    description:
      "Slow down and reset with a morning of mindful movement, guided meditation, good conversations and a little time outdoors.",
    tag: "WELLNESS",
  },
  {
    id: "code-canvas",
    title: "Code & Canvas",
    category: "Technology",
    day: "05",
    month: "DEC",
    date: "December 5, 2026",
    time: "10:00 AM – 4:00 PM",
    venue: "KIIT Campus 15, Bhubaneswar",
    location: "Bhubaneswar",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    description:
      "Where technology meets creativity. Team up for a friendly creative coding challenge, explore interactive art and build something unexpected.",
    tag: "HACK & CREATE",
  },
  {
    id: "indie-sundays",
    title: "Indie Sundays",
    category: "Music",
    day: "12",
    month: "DEC",
    date: "December 12, 2026",
    time: "4:00 PM – 8:00 PM",
    venue: "The Rooftop, Bhubaneswar",
    location: "Bhubaneswar",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85",
    description:
      "An easygoing evening celebrating independent sounds, local talent and the joy of discovering your new favourite artist.",
    tag: "LIVE MUSIC",
  },
  {
    id: "makers-market",
    title: "The Makers Market",
    category: "Arts",
    day: "19",
    month: "DEC",
    date: "December 19, 2026",
    time: "12:00 PM – 7:00 PM",
    venue: "IDCO Exhibition Ground, Bhubaneswar",
    location: "Bhubaneswar",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
    description:
      "Meet local makers, discover handmade pieces, enjoy good food and support the independent creative community.",
    tag: "ART & CULTURE",
  },
];

const eventGrid = document.getElementById("eventGrid"),
  searchInput = document.getElementById("eventSearch"),
  filters = document.getElementById("categoryFilters"),
  emptyState = document.getElementById("emptyState");
let activeCategory = "All";
const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
function renderEvents() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = events.filter(
    (e) =>
      (activeCategory === "All" || e.category === activeCategory) &&
      [e.title, e.category, e.location, e.description]
        .join(" ")
        .toLowerCase()
        .includes(term),
  );
  eventGrid.innerHTML = visible
    .map(
      (
        e,
      ) => `<article class="event-card" tabindex="0" role="button" aria-label="View ${escapeHTML(e.title)}" data-open-event="${e.id}">
    <div class="card-image"><img src="${e.image}" alt="${escapeHTML(e.title)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80'"><div class="card-date"><strong>${e.day}</strong><small>${e.month}</small></div><span class="card-category">${escapeHTML(e.tag)}</span></div>
    <div class="card-body"><h4>${escapeHTML(e.title)}</h4><p>${escapeHTML(e.description.slice(0, 100))}${e.description.length > 100 ? "…" : ""}</p><div class="card-footer"><span class="card-location">⌖ ${escapeHTML(e.location)} · ${escapeHTML(e.time.split(" ")[0])}</span><span class="card-arrow">↗</span></div></div></article>`,
    )
    .join("");
  document.getElementById("resultsCount").textContent =
    `Showing ${visible.length} event${visible.length === 1 ? "" : "s"}`;
  emptyState.classList.toggle("hidden", visible.length !== 0);
}
filters.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-category]");
  if (!btn) return;
  activeCategory = btn.dataset.category;
  filters
    .querySelectorAll(".category-chip")
    .forEach((b) => b.classList.toggle("selected", b === btn));
  renderEvents();
});
searchInput.addEventListener("input", renderEvents);
document.getElementById("clearFilters").addEventListener("click", () => {
  activeCategory = "All";
  searchInput.value = "";
  filters
    .querySelectorAll(".category-chip")
    .forEach((b) =>
      b.classList.toggle("selected", b.dataset.category === "All"),
    );
  renderEvents();
});
document.querySelectorAll("[data-footer-category]").forEach((a) =>
  a.addEventListener("click", () => {
    activeCategory = a.dataset.footerCategory;
    filters
      .querySelectorAll(".category-chip")
      .forEach((b) =>
        b.classList.toggle("selected", b.dataset.category === activeCategory),
      );
    renderEvents();
  }),
);

const eventDialog = document.getElementById("eventDialog"),
  registerDialog = document.getElementById("registerDialog");
function openEvent(id) {
  const e = events.find((x) => x.id === id);
  if (!e) return;
  document.getElementById("dialogContent").innerHTML =
    `<img class="dialog-image" src="${e.image}" alt="${escapeHTML(e.title)}"><div class="dialog-inner"><div class="eyebrow"><span class="eyebrow-line"></span>${escapeHTML(e.tag)}</div><h2 id="dialogTitle">${escapeHTML(e.title)}</h2><p>${escapeHTML(e.description)}</p><div class="dialog-facts"><span>▦ ${escapeHTML(e.date)}</span><span>◷ ${escapeHTML(e.time)}</span><span>⌖ ${escapeHTML(e.venue)}</span></div><button class="button button-primary" id="registerFromDetails">Register for this event <span>↗</span></button></div>`;
  eventDialog.showModal();
  document
    .getElementById("registerFromDetails")
    .addEventListener("click", () => {
      eventDialog.close();
      openRegistration(id);
    });
}
function openRegistration(id) {
  document.getElementById("selectedEvent").value = id;
  document.getElementById("eventSelect").value = id;
  document.getElementById("registrationForm").classList.remove("hidden");
  document.getElementById("successPanel").classList.add("hidden");
  registerDialog.showModal();
}
document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-open-event]");
  if (trigger) openEvent(trigger.dataset.openEvent);
});
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.target.matches(".event-card") && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    openEvent(e.target.dataset.openEvent);
  }
});
document
  .getElementById("closeDialog")
  .addEventListener("click", () => eventDialog.close());
document
  .getElementById("closeRegister")
  .addEventListener("click", () => registerDialog.close());
document
  .getElementById("doneButton")
  .addEventListener("click", () => registerDialog.close());
const eventSelect = document.getElementById("eventSelect");
eventSelect.innerHTML =
  '<option value="">Choose an event</option>' +
  events
    .map((e) => `<option value="${e.id}">${escapeHTML(e.title)}</option>`)
    .join("");

function setError(input, message) {
  const row = input.closest(".form-row");
  input.classList.toggle("invalid", !!message);
  row.querySelector(".field-error").textContent = message;
}
document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("fullName"),
    email = document.getElementById("email"),
    phone = document.getElementById("phone"),
    chosen = eventSelect,
    consent = document.getElementById("consent");
  let valid = true;
  const checks = [
    [name, name.value.trim().length < 2 ? "Please enter your full name." : ""],
    [
      email,
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
        ? "Enter a valid email address."
        : "",
    ],
    [
      phone,
      !/^\+?[0-9\s-]{10,15}$/.test(phone.value.trim())
        ? "Enter a valid phone number (10–15 digits)."
        : "",
    ],
    [chosen, !chosen.value ? "Please select an event." : ""],
  ];
  checks.forEach(([input, msg]) => {
    setError(input, msg);
    if (msg) valid = false;
  });
  document.querySelector(".consent-error").textContent = consent.checked
    ? ""
    : "Please accept the event updates consent.";
  if (!consent.checked) valid = false;
  if (!valid) return;
  const selected = events.find((x) => x.id === chosen.value);
  const registrations = JSON.parse(
    localStorage.getItem("eventoraRegistrations") || "[]",
  );
  registrations.push({
    name: name.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    eventId: selected.id,
    eventTitle: selected.title,
    registeredAt: new Date().toISOString(),
  });
  localStorage.setItem("eventoraRegistrations", JSON.stringify(registrations));
  document.getElementById("registrationForm").classList.add("hidden");
  document.getElementById("successMessage").textContent =
    `Thanks, ${name.value.trim()}! Your registration for ${selected.title} has been saved on this device.`;
  document.getElementById("successPanel").classList.remove("hidden");
});
document
  .querySelectorAll("#registrationForm input,#registrationForm select")
  .forEach((el) =>
    el.addEventListener("input", () => {
      if (el.closest(".form-row")) setError(el, "");
    }),
  );
document
  .getElementById("consent")
  .addEventListener(
    "change",
    () => (document.querySelector(".consent-error").textContent = ""),
  );

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail"),
    msg = document.getElementById("newsletterMessage");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "#f17c7c";
    return;
  }
  const list = JSON.parse(localStorage.getItem("eventoraSubscribers") || "[]");
  if (!list.includes(input.value.trim())) list.push(input.value.trim());
  localStorage.setItem("eventoraSubscribers", JSON.stringify(list));
  msg.textContent = "You're subscribed! Look out for the good stuff.";
  msg.style.color = "var(--accent)";
  input.value = "";
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const light = document.body.classList.contains("light-theme");
  document.getElementById("themeToggle").textContent = light ? "☾" : "☼";
  localStorage.setItem("eventoraTheme", light ? "light" : "dark");
});
if (localStorage.getItem("eventoraTheme") === "light") {
  document.body.classList.add("light-theme");
  document.getElementById("themeToggle").textContent = "☾";
}
const menuToggle = document.getElementById("menuToggle"),
  navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }),
);
document.getElementById("year").textContent = new Date().getFullYear();
function updateCountdown() {
  const target = new Date("2026-11-21T17:00:00+05:30").getTime(),
    diff = Math.max(0, target - Date.now());
  const values = {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
  Object.entries(values).forEach(
    ([id, val]) =>
      (document.getElementById(id).textContent = String(val).padStart(2, "0")),
  );
}
updateCountdown();
setInterval(updateCountdown, 1000);
renderEvents();
