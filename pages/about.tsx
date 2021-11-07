import type { NextPage } from "next";
import RenderHead from "../src/components/RenderHead";
const AboutPage: NextPage = () => {
  return (
    <>
      <RenderHead title="About" />
      <div className="row">
        <div className="col-md-12">
          <h4>About Page</h4>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
