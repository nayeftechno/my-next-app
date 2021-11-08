import { FC, useEffect, useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { observer } from "mobx-react-lite";

const EmployesList: FC = () => {
  const { getAllEmployees, getEmployees } = useContext(EmployeeContext);
  useEffect(() => {
    getAllEmployees();
  }, []);
  const renderList = () => {
    return (
      <ul className="list-group">
        {[...getEmployees].map(({ Id, Name }, index) => {
          return (
            <li key={Id} className="list-group-item">
              {index + 1} - {Name}
            </li>
          );
        })}
      </ul>
    );
  };
  return <>{getEmployees.length ? renderList() : <h4>Loading....</h4>}</>;
};
export default observer(EmployesList);
