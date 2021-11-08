import { makeAutoObservable, runInAction } from "mobx";
import { IEmployee } from "../interfaces/IEmployee";
import { employeeService } from "../services/employeeService";
class EmployeeStore {
  /////////////////////////////
  private employees: Array<IEmployee>;
  private error: any;
  /////////////////////////////
  constructor() {
    this.employees = [];
    this.error = null;
    makeAutoObservable(this);
  }
  /////////////////////////////
  get getEmployees(): Array<IEmployee> {
    return this.employees;
  }
  get getError(): any {
    return this.error;
  }
  /////////////////////////////
  public getAllEmployees = (): void => {
    employeeService
      .getAllEmloyees()
      ?.then((response: any) => {
        this.employees = [...response] as Array<IEmployee>;
      })
      .catch((error) => {
        runInAction(() => {
          this.error = error;
        });
      });
  };
  /////////////////////////////
}
export default EmployeeStore;
