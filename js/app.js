var ViewModel = function (){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.age = ko.observableArray([
    {age: "infant"},
    {age: "teen"},
    {age: "adult"}
  ]);
  // Computed observable
  this.level = ko.computed(function(){
    if(this.clickCount() <= 10){
      return this.age()[0].age;
    }
    return this.age()[1].age;
  }, this);
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
  //
  this.incrementCounter = function(){
    this.clickCount(this.clickCount() + 1);

  };
}

ko.applyBindings(new ViewModel());
