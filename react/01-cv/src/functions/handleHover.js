function handleHover (e) {
    if (e.target.hasAttribute("href")) {
      const link = e.target;
      const siblings = link.closest("ul").querySelectorAll("a[href]");
  
      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = this;
      });
    }
  };

  export default handleHover;