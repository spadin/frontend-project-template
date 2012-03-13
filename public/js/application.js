(function() {
  this.JST || (this.JST = {});
  this.JST["templates/greeting"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class=\'greeting-container\'>\n  <h1>Hello ', name ,'!</h1>\n</div>\n');}return __p.join('');};
}).call(this);
(function() {
  var Greeter,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Greeter = (function() {

    function Greeter(name) {
      this.name = name != null ? name : "World";
      this.print = __bind(this.print, this);
      this.greetingTemplate = JST["templates/greeting"];
    }

    Greeter.prototype.print = function() {
      return $("body").html(this.greetingTemplate({
        name: this.name
      }));
    };

    return Greeter;

  })();

  $(function() {
    var greeter;
    greeter = new Greeter("Bingo");
    return greeter.print();
  });

}).call(this);


