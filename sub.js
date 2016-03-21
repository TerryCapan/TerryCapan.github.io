var opts = {
  containerId: "sub",
  namespace: "sub",
  interval: 3000,
  speed: 200,
  verbose: false,
  random: false,
  best: false
};

var sub = new Sub([
  "Software Engineer",
  "Not yet, really",
  "var blog = 'empty'",
], opts).run();

function sendMail() {
    var link = "mailto:remote.beta.communications@hackreactor.com"
             + "?cc=tcapanjr@gmail.com"
             + "&subject= nummy eggy"
             + "&body= Hit that egg, boiii. eggs."

    window.location.href = link;
}

var egg = new Egg();
egg
  .addCode("up,up,left,right,left,right", function() {
    jQuery('#egg').fadeIn(500, function() {
      window.setTimeout(function() { jQuery('#egg').hide(); }, 1800);
    });
  })
  .addHook(function(){
    setTimeout(sendMail, 3000);
    console.log("Hook called for: " + this.activeEgg.keys);
    console.log(this.activeEgg.metadata);
  }).listen();