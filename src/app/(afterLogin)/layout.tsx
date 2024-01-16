import { ReactNode } from "react";
import style from "./layout.module.css";
const AfterLayout = ({ children }: { children: ReactNode }) => {
  return <div className={style.container}>{children}</div>;
};

export default AfterLayout;
