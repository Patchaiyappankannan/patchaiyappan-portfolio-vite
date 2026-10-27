import { useEffect, useRef } from "react";

export default function Reveal({ children, d = 0, as: T = "div", className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); o.disconnect(); } }, { threshold: 0.12 });
    o.observe(el); return () => o.disconnect();
  }, []);
  return <T ref={ref} className={"rv " + className} style={{ "--d": d + "s" }}>{children}</T>;
}
