import classes from "./Dropdown.module.css";

export const Dropdown = ({ showState }: any) => {
  return (
    <nav className={`${classes.dropdown} ${showState ? classes.open : null}`}>
      <ul>
        <li className="py-1">Pens</li>
        <li>Godot</li>
      </ul>
    </nav>
  );
};
