import { useState } from "react";
import { shotSrc } from "../data";

export default function Shots({ shots, name, onOpen }) {
  const [i, setI] = useState(0);
  if (!shots) return <div className="mock" aria-hidden="true"><i/><i/><i/><i/><i/></div>;
  const [label, file] = shots[i];
  const src = shotSrc(file);
  const alt = name + " " + label.toLowerCase() + " screen";
  return (
    <div className="shots">
      <button className="shot" onClick={() => onOpen({ src, alt })} aria-label={"Enlarge: " + alt}>
        <img src={src} alt={alt} loading="lazy" />
      </button>
      {shots.length > 1 && <div className="stabs" role="group" aria-label="Screenshots">
        {shots.map(([l], k) => <button key={l} className="stab" aria-pressed={k === i} onClick={() => setI(k)}>{l}</button>)}
      </div>}
    </div>
  );
}
