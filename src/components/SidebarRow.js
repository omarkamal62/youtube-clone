import classes from "./SidebarRow.module.css";

const SidebarRow = ({ title, Icon, selected }) => {
  return (
    <div className={`${classes.sidebarRow} ${selected && classes.selected}`}>
      <Icon className={classes.sidebarRow__icon} />
      <h2 className={classes.sidebarRow__title}>{title}</h2>
    </div>
  );
};

export default SidebarRow;
