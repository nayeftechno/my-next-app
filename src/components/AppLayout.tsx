import { FC } from "react";
import Navbar from "./Navbar";
const AppLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container container-padding">{children}</div>
    </>
  );
};
export default AppLayout;
