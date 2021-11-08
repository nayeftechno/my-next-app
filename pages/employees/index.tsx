import type { NextPage } from "next";
import RenderHead from "../../src/components/RenderHead";
import EmployeesList from "../../src/components/EmployeesList";
const EmployeesPage: NextPage = () => {
  return (
    <>
      <RenderHead title="Employees" />
      <div className="row">
        <div className="col-md-4">Form</div>
        <div className="col-md-4">Statics</div>
        <div className="col-md-4">
          <EmployeesList />
        </div>
      </div>
    </>
  );
};
export default EmployeesPage;
