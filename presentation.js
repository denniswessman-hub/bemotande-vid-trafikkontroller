const studies = document.querySelector("#studies");
const openStudies = document.querySelector("#open-studies");
openStudies.hidden = false;
openStudies.addEventListener("click", () => studies.showModal());

const full = document.querySelector("#full");
const label = document.querySelector("#full-label");
if (document.fullscreenEnabled) {
  full.hidden = false;
  full.addEventListener("click", async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      label.textContent = "Helskärm ej tillgänglig";
    }
  });
  document.addEventListener("fullscreenchange", () => {
    label.textContent = document.fullscreenElement ? "Avsluta helskärm" : "Helskärm";
  });
}
