const breakpoints = [700, 1200, 1350, 1050];
const mq = breakpoints.map((bp) => `@media screen and (max-width: ${bp}px)`);

export default mq;
