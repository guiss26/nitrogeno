  function triggerReaction() {
    const items = document.querySelectorAll(".reaction-list li");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 300);
    });
  }