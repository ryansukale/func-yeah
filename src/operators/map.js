import curry from "@ramda/curry";

const map = curry((fn, F) => F.map(fn));
export default map;