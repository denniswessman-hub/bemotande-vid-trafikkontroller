const studies = document.querySelector("#studies");
const openStudies = document.querySelector("#open-studies");
openStudies.hidden = false;
openStudies.addEventListener("click", () => studies.showModal());

const listen = document.querySelector("#listen");
const podcast = document.querySelector("#podcast");
const recording = podcast.querySelector("audio");
if (typeof podcast.showModal === "function") {
  listen.setAttribute("aria-haspopup", "dialog");
  listen.setAttribute("aria-controls", "podcast");
  listen.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    podcast.showModal();
    recording.play().catch(() => {
      // The native play button remains available if the browser requires another tap.
    });
  });
  podcast.addEventListener("close", () => recording.pause());
}

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
