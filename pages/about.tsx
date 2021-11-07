import type { NextPage } from "next";
import Image from "next/image";
import RenderHead from "../src/components/RenderHead";
const AboutPage: NextPage = () => {
  return (
    <>
      <RenderHead title="About" />
      <div className="row">
        <div className="col-md-12">
          <h4>About Page</h4>
          <Image src="/me.jpg" width={200} height={200} alt="me.jpg" />
        </div>
      </div>
    </>
  );
};
export default AboutPage;
