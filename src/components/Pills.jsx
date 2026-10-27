import { CORE } from "../data";

const Pills = ({ list, mod }) => <div className="pills">{list.map(x => <span key={x} className={"pill" + (mod ? " mod" : "") + (CORE.includes(x) && !mod ? " core" : "")}>{x}</span>)}</div>;

export default Pills;
