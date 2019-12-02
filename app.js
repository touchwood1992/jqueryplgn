const appData = (function() {
  const Obj = function(element, options) {
    this.element = element;
    this.options = options;
  };
  Obj.prototype.rep = function() {
    this.el.html(this.ht);
  };
  return { createObj: Obj };
})();

const appController = (function(data) {
  const createObj = function(element, options) {
    const a = new data.createObj(element, options);
    a.ht = options.htm;
    a.el = element;
    a.rep();
  };
  return { createObj };
})(appData);

(function($) {
  $.fn.greenify = function(ops) {
    appController.createObj(this, ops);
    return this;
  };
})(jQuery, appController);

$("#id1").greenify({ color: "red", htm: "This is #1" });
$("#id2").greenify({ color: "blue", htm: "This is #2" });
$("#id3").greenify({ color: "green", htm: "This is #3" });
$("#id4").greenify({ color: "orange", htm: "This is #4" });
