import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../src/components/AppLayout";
import EmployeeContextProvider from "../src/contexts/EmployeeContext";
import EmployeeStore from "../src/stores/EmployeeStore";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmployeeContextProvider store={new EmployeeStore()}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </EmployeeContextProvider>
  );
}
export default MyApp;
