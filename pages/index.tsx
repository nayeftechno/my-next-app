import type { NextPage } from "next";
import RenderHead from "../src/components/RenderHead";
const HomePage: NextPage = () => {
  return (
    <>
      <RenderHead title="Home" />
      <div className="row">
        <div className="col-md-12">
          <h4>Home Page</h4>
        </div>
      </div>
    </>
  );
};
export default HomePage;
