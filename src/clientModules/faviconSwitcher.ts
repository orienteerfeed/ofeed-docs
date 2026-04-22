if (typeof window !== "undefined") {
  const updateFavicon = () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = isDark ? "/img/favicon-dark.svg" : "/img/favicon-light.svg";
  };

  new MutationObserver(updateFavicon).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  updateFavicon();
}
