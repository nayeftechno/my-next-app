import { FC, memo } from "react";
import Head from "next/head";
import { IHead } from "../interfaces/IHead";
const RenderHead: FC<IHead> = ({ title }) => {
  return (
    <Head>
      <title>{`${title} Page`}</title>
    </Head>
  );
};
export default memo(RenderHead);
