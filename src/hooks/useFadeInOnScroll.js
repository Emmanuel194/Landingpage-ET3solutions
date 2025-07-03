import { useEffect } from "react";

const useFadeInOnScroll = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);
};

export default useFadeInOnScroll;
