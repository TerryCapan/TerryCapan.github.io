var opts = {
  containerId: "sub",
  namespace: "sub",
  interval: 3000,
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



var egg = new Egg();
egg
  .addCode("up,up,left,right,left,right", function() {
    jQuery('#egg').fadeIn(500, function() {
      window.setTimeout(function() { jQuery('#egg').hide(); }, 1800);
    });
  })
  .addHook(function(){
    console.log("Hook called for: " + this.activeEgg.keys);
    console.log(this.activeEgg.metadata);
  }).listen();