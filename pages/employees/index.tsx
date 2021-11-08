import type { NextPage } from "next";
import RenderHead from "../../src/components/RenderHead";
import EmployeesList from "../../src/components/EmployeesList";
const EmployeesPage: NextPage = () => {
  return (
    <>
      <RenderHead title="Employees" />
      <div className="row">
        <div className="col-md-12">
          <h4>Employees Page</h4>
          <EmployeesList />
        </div>
      </div>
    </>
  );
};
export default EmployeesPage;
