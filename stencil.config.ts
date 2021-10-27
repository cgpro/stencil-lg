import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

let currDate = new Date();
// console.log(process.env.NODE_ENV);

export const config: Config = {
  namespace: "Bundle",
  srcDir: "src",
  outputTargets: [
    {
      type: "dist",
      empty: true,
      dir: "public",
    },
  ],
  preamble: `Build-Time: ${currDate}`,
  // https://www.npmjs.com/package/@stencil/sass
};
