import { useEffect } from "react";

export default function Lightbox({ box, onClose }) {
  useEffect(() => {
    if (!box) return;
    const k = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [box]);
  if (!box) return null;
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={box.alt} onClick={onClose}>
      <button className="lbx" onClick={onClose} aria-label="Close">✕</button>
      <img src={box.src} alt={box.alt} onClick={e => e.stopPropagation()} />
    </div>
  );
}
