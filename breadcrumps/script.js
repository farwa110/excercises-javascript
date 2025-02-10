// Array der repræsenterer trinene i brødkrummestien
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Funktion der genererer brødkrummestien
function generateBreadcrumbs() {
  const breadcrumbContainer = document.getElementById("breadcrumbs");
  breadcrumbContainer.innerHTML = ""; // Tøm brødkrummestien før vi tilføjer nye elementer

  const ul = document.createElement("ul"); // Opret en ul-liste
  breadcrumbContainer.appendChild(ul); // Tilføj listen til brødkrummestien

  bc.forEach((item, index) => {
    const li = document.createElement("li"); // Opret et listeelement for hvert punkt

    if (index < bc.length - 1) {
      // Hvis det ikke er det sidste element, lav et link
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.name;
      li.appendChild(a);
      li.innerHTML += " / "; // Tilføj skråstreg efter linket
    } else {
      // Hvis det er det sidste element, kun tekst uden link
      li.textContent = item.name;
    }

    ul.appendChild(li); // Tilføj listeelementet til ul-listen
  });
}

// Tilføj event listener til knappen, der kalder funktionen
document.getElementById("generateBreadcrumbs").addEventListener("click", generateBreadcrumbs);
