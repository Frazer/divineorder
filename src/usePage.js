import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePage(title, description) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag && description) {
      descriptionTag.setAttribute("content", description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute("content", description);
    }
    window.scrollTo(0, 0);
  }, [pathname, title, description]);
}
