// Data: Menyalternativ
const menyRatter = [
  {
    id: 1,
    namn: "Kabuli Pulao",
    beskrivning: "Afghansk nationalrätt med kryddat ris, lamm och morötter.",
    kategori: "Varmrätt",
    popular: true,
    ny: false,
    bild: "https://images.unsplash.com/photo-1677599083247-9be34fdca346?q=80&w=764&auto=format&fit=crop",
  },
 {
  id: 2,
  namn: "Mantu",
  beskrivning: "Ångade dumplings fyllda med kryddat kött och lök.",
  kategori: "Förrätt",
  popular: true,
  ny: true,
  bild: "media/mantu.jpg", 
},
 {
    id: 3,
    namn: "Brnj och Morgh Kabab",
    beskrivning: "Doftande ris serverat med saftiga kycklingspett, grillade till perfektion.",
    kategori: "Varmrätt",
    popular: false,
    ny: false,
      bild: "media/brnj_kabab_morgh.jpg",
},
{
    id: 4,
    namn: "Brnj Sheesh Kabab",
    beskrivning: "Kryddigt grillade lammspett serverade med aromatiskt ris.",
    kategori: "Varmrätt",
    popular: false,
    ny: true,
      bild: "media/brnj_shesh_kabab.jpg",
},

  {
    id: 5,
    namn: "Sheer Yakh",
    beskrivning: "Afghansk glass med rosenvatten och pistagenötter.",
    kategori: "Efterrätt",
    popular: true,
    ny: false,
     bild: "media/Sheer_yakh.jpeg",
  },
  {
    id: 6,
    namn: "Firnee",
    beskrivning: "Krämig kardemummapudding toppad med mandel och pistagenötter.",
    kategori: "Efterrätt",
    popular: false,
    ny: true,
     bild: "media/firne.webp",
  },
];

// Kategorier
const kategorier = ["Alla", "Förrätt", "Varmrätt", "Efterrätt"];

// DOM-element
const kategoriContainer = document.querySelector(".categories");
const menyContainer = document.querySelector(".menu-items");
const header = document.getElementById("header");
const navLankar = document.querySelectorAll(".nav-link");
const utforskaMenyKnapp = document.getElementById("explore-menu");
const bokaBordKnapp = document.getElementById("book-table-btn");

// Skapa kategori-knappar
function renderKategorier() {
  kategoriContainer.innerHTML = "";
  kategorier.forEach((kategori) => {
    const knapp = document.createElement("button");
    knapp.className = "category-btn";
    knapp.textContent = kategori;
    if (kategori === "Alla") knapp.classList.add("active");
    knapp.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      knapp.classList.add("active");
      renderMeny(kategori);
    });
    kategoriContainer.appendChild(knapp);
  });
}

// Visa menyalternativ beroende på kategori
function renderMeny(filterKategori) {
  let filtrerade = (filterKategori === "Alla")
    ? menyRatter
    : menyRatter.filter(ratt => ratt.kategori === filterKategori);

  menyContainer.innerHTML = "";
  filtrerade.forEach(({ namn, beskrivning, popular, ny, bild }) => {
    const item = document.createElement("div");
    item.className = "menu-item";

    item.innerHTML = `
      <img src="${bild || ''}" alt="${namn}" class="menu-item-image" />
      <div>
        <h3>${namn}</h3>
        <p>${beskrivning}</p>
        <div class="badges">
          ${popular ? '<span class="badge popular">Populär</span>' : ''}
          ${ny ? '<span class="badge new">Ny</span>' : ''}
        </div>
      </div>
    `;

    menyContainer.appendChild(item);
  });
}

// Mjuk scroll-funktion
function smoothScroll(targetId) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  window.scrollTo({
    top: targetElement.offsetTop - header.offsetHeight,
    behavior: "smooth",
  });
}

// Ändra header vid scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Navigationslänkar scroll
navLankar.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-scroll");
    smoothScroll(target);
  });
});

// Klick på logotyp – scrolla till toppen
document.getElementById("logo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Utforska meny-knapp scroll
utforskaMenyKnapp.addEventListener("click", () => {
  smoothScroll("menu");
});

// Boka bord-knapp (ej aktiv ännu)
bokaBordKnapp.addEventListener("click", () => {
  alert("Bokningsfunktionen kommer snart!");
});

// Initiera menyer och kategorier
renderKategorier();
renderMeny("Alla");

// Galleri-bilder
const galleriBilder = [
  "https://images.unsplash.com/photo-1677599083247-9be34fdca346?q=80&w=764&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=687&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const galleriContainer = document.querySelector(".gallery");
galleriBilder.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Bild från Mezban Restaurang";
  galleriContainer.appendChild(img);
});
