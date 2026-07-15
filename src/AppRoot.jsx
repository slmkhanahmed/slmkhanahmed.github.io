import { useEffect } from "react";
import App from "./App";

const AppRoot = () => {
  useEffect(() => {
    const toggle = document.querySelector(".menu-toggle");
    const surfaces = [
      document.getElementById("main-content"),
      document.querySelector(".site-footer"),
    ].filter(Boolean);

    if (!toggle) return undefined;

    const syncBackgroundState = () => {
      const menuIsOpen = toggle.getAttribute("aria-expanded") === "true";
      surfaces.forEach((surface) => {
        surface.toggleAttribute("inert", menuIsOpen);
        if (menuIsOpen) surface.setAttribute("aria-hidden", "true");
        else surface.removeAttribute("aria-hidden");
      });
    };

    const observer = new MutationObserver(syncBackgroundState);
    observer.observe(toggle, { attributes: true, attributeFilter: ["aria-expanded"] });
    syncBackgroundState();

    return () => {
      observer.disconnect();
      surfaces.forEach((surface) => {
        surface.removeAttribute("inert");
        surface.removeAttribute("aria-hidden");
      });
    };
  }, []);

  return <App />;
};

export default AppRoot;
