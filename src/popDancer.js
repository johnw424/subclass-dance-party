// create new instantiator function
var PopDancer = function(top, left, timeBetweenSteps){

  Dancer.apply(this, arguments);

  function makeNewPosition(){

    // Get wind dimensions (remove the dimension of the node)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
  }
  var node = this.$node;
  function animateDiv(){
      var newq = makeNewPosition();
      var oldq = node.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);

      node.animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateDiv();
      });

  }

  function calcSpeed(prev, next) {

      var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);

      var greatest = x > y ? x : y;

      var speedModifier = .5;

      var speed = Math.ceil(greatest/speedModifier);

      return speed;

  }

  animateDiv();

};

// set Dancers as the super-class of PopDancer
PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

//should we use Dancer.proto here instead?
PopDancer.prototype.oldStep = Dancer.prototype.step;

// create prototype step method
PopDancer.prototype.step = function(){

  this.oldStep();


};

PopDancer.prototype.setPosition = function(top, left){
  // package style for node container
  var styleSettings = {
    top: top,
    left: left,
    border: "0px"
  };
  // apply style to node container
  this.$node.css(styleSettings);

  //create image node
  var $imageNode = $('<img src="http://www.buncee.com/files/uploads/image/DANCE2_1.gif" />');

  // package style for image node
  var imgStyleSettings = {

  };

  //apply style to image node
  $imageNode.css(imgStyleSettings);

  // prepend image node as child of node container
  this.$node.prepend($imageNode);
};
