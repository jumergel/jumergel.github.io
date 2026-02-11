
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    //  normal window scroll
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    //  reset document scroll 
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    //  container scroll is reset too
    const app = document.querySelector(".App");
    if (app) app.scrollTop = 0;

    const basic = document.querySelector(".basic");
    if (basic) basic.scrollTop = 0;
  }, [pathname]);

  return null;
}
