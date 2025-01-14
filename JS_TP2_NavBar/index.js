// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let lastScrollPosition = window.scrollY;

window.addEventListener("scroll", () => {
  navbar.style.top = window.scrollY > lastScrollPosition ? "-60px" : "0px";
  lastScrollPosition = window.scrollY;
});
