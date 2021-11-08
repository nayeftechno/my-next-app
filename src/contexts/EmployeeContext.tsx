import { FC, createContext } from "react";
import EmployeeStore from "../stores/EmployeeStore";

export const EmployeeContext = createContext<EmployeeStore>(
  new EmployeeStore()
);

const EmployeeContextProvider: FC<{ store: EmployeeStore }> = ({
  store,
  children,
}) => {
  return (
    <EmployeeContext.Provider value={store}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
