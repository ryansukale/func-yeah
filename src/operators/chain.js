import curry from "@ramda/curry";

const chain = curry((fn, F) => F.map(fn).join());
export default chain;