var opts = {
  containerId: "sub",
  namespace: "sub",
  interval: 2000,
  speed: 200,
  verbose: false,
  random: false,
  best: true
};

var sub = new Sub([
  "Software Engineer",
  "Not yet, really",
  "var blog = 'empty'",
], opts).run();
