import { api } from "./api";
const employeeService = {
  getAllEmloyees() {
    try {
      const url = "/Employee/GetAllEmployees";
      return new Promise((resolve, reject) => {
        api
          .get(url)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (error) {
      console.error(error);
    }
  },
};
export { employeeService };
