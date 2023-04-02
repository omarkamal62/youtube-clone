import classes from "./SidebarRow.module.css";
import { useSelector } from "react-redux";

const SidebarRow = ({ title, Icon, selected }) => {
  const menuExpansion = useSelector((state) => state.ui.menuExpansion);

  return (
    <div
      className={`${classes.sidebarRow} ${selected && classes.selected} ${
        !menuExpansion ? classes.shrinked : ""
      }`}
    >
      <Icon className={classes.sidebarRow__icon} />
      <h2 className={classes.sidebarRow__title}>{title}</h2>
    </div>
  );
};

export default SidebarRow;
