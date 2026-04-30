const navButtons = document.querySelectorAll(".nav-btn")
const sections = document.querySelectorAll(".content-section")

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.section

    sections.forEach(section => section.classList.remove("active"))
    navButtons.forEach(item => item.classList.remove("active-btn"))

    const activeSection = document.getElementById(target)

    if (activeSection) {
      activeSection.classList.add("active")
      button.classList.add("active-btn")
    }
  })
})

function toggleInfo(id) {
  const infos = document.querySelectorAll(".contact-info")

  infos.forEach(info => {
    if (info.id !== id) {
      info.classList.remove("show")
    }
  })

  const current = document.getElementById(id)

  if (current) {
    current.classList.toggle("show")
  }
}

const translations = {
  de: {
    hero_subtitle: "Fachinformatiker für Anwendungsentwicklung",

    btn_about: "Über Mich",
    btn_skills: "Technische Skills",
    btn_lua: "Lua Projekt",
    btn_beruf: "Berufserfahrung",
    btn_sprachen: "Sprachen",

    about_title: "Über Mich",
    about_1: "Computer und Technik begleiten mich schon seit meiner Kindheit Ich war schon früh viel am PC und wollte immer verstehen wie Systeme und Programme funktionieren",
    about_2: "Besonders das Programmieren hat mich schnell begeistert Viele Dinge habe ich mir selbst beigebracht weil ich gerne eigene Lösungen entwickle",
    about_3: "Gaming war immer ein großes Hobby von mir Dadurch ist meine Leidenschaft für Computer noch stärker geworden",
    about_4: "Mein Ziel war schon lange beruflich in die IT zu gehen Deshalb habe ich mich bewust für den Weg zum Fachinformatiker entschieden",

    skills_title: "Technische Kenntnisse",
    skills_dev: "Entwicklung",
      skills_tools: "Tools & Systeme",

    skills_left_1: "HTML5 / CSS3  Fortgeschrittene Kenntnisse",
    skills_left_2: "JavaScript  Fortgeschrittene Kenntnisse",
    skills_left_3: "Lua  Fortgeschrittene Kenntnisse",
    skills_left_4: "Python  Grundkenntnisse (aktuelles Eigenprojekt)",
    skills_left_5: "Java  Grundkenntnisse",
    skills_left_6: "UI Entwicklung & Responsive Webdesign",

    skills_right_1: "SQL  Grundkenntnisse",
    skills_right_2: "Git / GitHub  Grundkenntnisse",
    skills_right_3: "APIs / JSON  Grundlagen",
    skills_right_4: "Debugging & Fehleranalyse",
    skills_right_5: "Datenbanken & Datenverwaltung",
    skills_right_6: "KI-Tools für Recherche und Produktivität",

    lua_title: "Lua Projekt",
    lua_desc: "Eigenständiges Lua Projekt mit modularer Client Server Architektur und über 70 Scripts",
    lua_1: "Eigene Systeme für Datenverwaltung Speicherung und Progression",
    lua_2: "Mehrere UI Systeme für Shop Inventar Einstellungen und Benachrichtigungen",
    lua_3: "Handler für Trading Leaderboards Währungen und Spielmechaniken",
    lua_4: "Sauber strukturierter modularer Code",

    img1_title: "World Design und Basesystem",
    img1_desc: "Große individuelle Spielwelt mit 6 personalisierten Basen",

    img2_title: "Economy Inventory Progression",
    img2_desc: "Eigenes Wirtschaftssystem mit Coins Rebirths Inventar und Fortschritt",

    img3_title: "Data Management Save Systems",
    img3_desc: "Eigenes Speichersystem für Daten Fortschritt Währungen und Serverdaten",

    img4_title: "Projektstruktur und Scripts",
    img4_desc: "Modular aufgebaute Scriptstruktur für Systeme UI und Datenverwaltung",

    work_title: "Berufserfahrung",
    work_1: "<strong>12.2025 bis 12.2027 WBS Training(voraussichtlich)</strong><br>Umschulung zum Fachinformatiker für Anwendungsentwicklung",
    work_2: "<strong>04.2020 bis 04.2025 Mercato Italiano Kiel</strong><br>Catering und Veranstaltungsmanager Planung Organisation Teamkoordination",
    work_3: "<strong>2018 bis 2020 Veranstaltungstechnik Kappeln</strong><br>Technischer Support Windows Systeme Hardware Wartung",

    lang_title: "Sprachen",
    lang_1: "<img src='icons/german-flag.png' width='20'> Deutsch Verhandlungssicher",
    lang_2: "<img src='icons/united-kingdom.png' width='20'> Englisch Verhandlungssicher",
    lang_3: "<img src='icons/romania.png' width='20'> Rumänisch Muttersprache",
    lang_4: "<img src='icons/italy.png' width='20'> Italienisch Gute Kenntnisse"
  },

  en: {
    hero_subtitle: "IT Specialist Application Development",

    btn_about: "About Me",
    btn_skills: "Technical Skills",
    btn_lua: "Lua Project",
    btn_beruf: "Work Experience",
    btn_sprachen: "Languages",

    about_title: "About Me",
    about_1: "Computer and technology have been part of my life since childhood I always wanted to understand how systems and programs work",
    about_2: "Programming quickly became something I really enjoyed I learned many things by myself",
    about_3: "Gaming has always been a big hobby of mine and increased my passion for computers",
    about_4: "My goal has always been to work in IT That is why I chose this path",

    skills_title: "Technical Skills",
    skills_dev: "Development",
    skills_tools: "Tools & Systems",

    skills_left_1: "HTML5 / CSS3  Advanced",
    skills_left_2: "JavaScript  Advanced",
    skills_left_3: "Lua  Advanced",
    skills_left_4: "Python  Basic knowledge (current personal project)",
    skills_left_5: "Java  Basic knowledge",
    skills_left_6: "UI Development & Responsive Web Design",

    skills_right_1: "SQL  Basic knowledge",
    skills_right_2: "Git / GitHub  Basic knowledge",
    skills_right_3: "APIs / JSON  Fundamentals",
    skills_right_4: "Debugging & Troubleshooting",
    skills_right_5: "Databases & Data Management",
    skills_right_6: "AI tools for research and productivity",

    lua_title: "Lua Project",
    lua_desc: "Independent Lua project with modular client server architecture and more than 70 scripts",
    lua_1: "Custom systems for data management saving and progression",
    lua_2: "Multiple UI systems for shop inventory settings and notifications",
    lua_3: "Handlers for trading leaderboards currencies and game mechanics",
      lua_4: "Clean structured modular code",

    img1_title: "World Design and Base System",
    img1_desc: "Large custom game world with 6 personalized bases",

    img2_title: "Economy Inventory Progression",
    img2_desc: "Custom economy system with coins rebirths inventory and progression",

    img3_title: "Data Management Save Systems",
    img3_desc: "Custom save system for data progress currencies and server data",

    img4_title: "Project Structure and Scripts",
img4_desc: "Modular script structure for systems UI and data management",

    work_title: "Work Experience",
    work_1: "<strong>12.2025 until 12.2027(expected) WBS Training</strong><br>Retraining as IT Specialist Application Development",
    work_2: "<strong>04.2020 until 04.2025 Mercato Italiano Kiel</strong><br>Catering and event manager planning organization coordination",
    work_3: "<strong>2018 to 2020 Event Technology</strong><br>Technical support Windows systems hardware service",

    lang_title: "Languages",
    lang_1: "<img src='icons/german-flag.png' width='20'> German Fluent",
    lang_2: "<img src='icons/united-kingdom.png' width='20'> English Fluent",
    lang_3: "<img src='icons/romania.png' width='20'> Romanian Native",
    lang_4: "<img src='icons/italy.png' width='20'> Italian Good"
  }
}

const langBtn = document.getElementById("langBtn")
const langDropdown = document.getElementById("langDropdown")
const langFlag = document.getElementById("langFlag")
const langLabel = document.getElementById("langLabel")

function setLanguage(lang) {
  const data = translations[lang]

  document.querySelectorAll("[data-i18n]").forEach(item => {
    const key = item.dataset.i18n

    if (data[key]) {
      item.innerHTML = data[key]
    }
  })

  if (lang === "de") {
    langFlag.src = "icons/german-flag.png"
    langLabel.textContent = "Deutsch"
    document.documentElement.lang = "de"
  } else {
    langFlag.src = "icons/united-kingdom.png"
    langLabel.textContent = "English"
    document.documentElement.lang = "en"
  }

  localStorage.setItem("language", lang)
}

langBtn.addEventListener("click", e => {
  e.stopPropagation()
  langDropdown.classList.toggle("open")
})

document.querySelectorAll(".lang-option").forEach(option => {
  option.addEventListener("click", () => {
    setLanguage(option.dataset.lang)
    langDropdown.classList.remove("open")
  })
})

const themeBtn = document.getElementById("themeBtn")
const themeDropdown = document.getElementById("themeDropdown")
const themeLabel = document.getElementById("themeLabel")

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark")
    themeLabel.textContent = "Dark"
  } else {
    document.body.classList.remove("dark")
    themeLabel.textContent = "Light"
  }

  localStorage.setItem("theme", mode)
}

themeBtn.addEventListener("click", e => {
  e.stopPropagation()
  themeDropdown.classList.toggle("open")
})

document.querySelectorAll(".theme-option").forEach(option => {
  option.addEventListener("click", () => {
    setTheme(option.dataset.theme)
    themeDropdown.classList.remove("open")
  })
})

document.addEventListener("click", e => {
  if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.remove("open")
  }

  if (!themeBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
    themeDropdown.classList.remove("open")
  }
})

setLanguage(localStorage.getItem("language") || "de")
setTheme(localStorage.getItem("theme") || "light")

window.addEventListener("load", () => {
  const images = document.querySelectorAll(".project-gallery img")

  images.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div")
      overlay.className = "img-overlay"

      overlay.innerHTML = `
        <div class="close-modal">✕</div>
        <div class="img-modal">
          <img src="${img.src}">
        </div>
      `

      document.body.appendChild(overlay)
      document.body.style.overflow = "hidden"

      overlay.addEventListener("click", e => {
        if (
          e.target.classList.contains("img-overlay") ||
          e.target.classList.contains("close-modal")
        ) {
          overlay.remove()
          document.body.style.overflow = ""
        }
      })
    })
  })
})