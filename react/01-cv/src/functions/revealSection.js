
function  revealSection (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
  
    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  };

  export default revealSection;