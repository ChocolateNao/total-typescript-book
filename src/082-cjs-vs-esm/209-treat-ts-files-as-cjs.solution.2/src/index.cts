// @ts-expect-error
import otherModule from "./other-module.cjs";

const main = async () => {
  otherModule();
};

main();