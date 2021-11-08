import { FC, useEffect, useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { observer } from "mobx-react-lite";

const EmployesList: FC = () => {
  const { getAllEmployees, getEmployees } = useContext(EmployeeContext);
  useEffect(() => {
    getAllEmployees();
  }, []);
  return <h1>TEST {getEmployees.length}</h1>;
};
export default observer(EmployesList);
