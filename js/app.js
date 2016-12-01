var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/big',
    nicknames: [{alias: "Fluffy"},
    {alias: "Tony"},
    {alias: "Killer"},
    {alias: "Antoine"}]
  },
  {
    clickCount: 0,
    name: 'Smitty',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/big',
    nicknames: [{alias: "Fluffy"},
    {alias: "Tex"},
    {alias: "Jill"},
    {alias: "Antoine"}]
  },
  {
    clickCount: 0,
    name: 'Iron Hide',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/big',
    nicknames: [{alias: "Fluffy"},
    {alias: "Randolph"},
    {alias: "Stomper"},
    {alias: "Bitchy"}]
  },
  {
    clickCount: 0,
    name: 'Toothless',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/big',
    nicknames: [{alias: "Fluffy"},
    {alias: "Blacky"}]
  }
]
//
var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.age = ko.observableArray([
    {age: "Newborn"},
    {age: "Infant"},
    {age: "Child"},
    {age: "Teen"},
    {age: "Adult"},
    {age: "Ninja"}
  ]);
//
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  // Computed observable
  this.level = ko.computed(function(){
    var title = this.age()[0].age;
    var clicks = this.clickCount();
    if(clicks < 10){
      // nothing, already initialized
    }else if(clicks < 50 ){
      title = this.age()[1].age;
    }else if(clicks < 100){
      title = this.age()[2].age;
    }else if(clicks < 200){
      title = this.age()[3].age;
    }else if(clicks < 500 ){
      title = this.age()[4].age;
    }else {
    title =this.age()[5].age;
    }
    return title;
  }, this);
  // Control flow example
  this.nickname = ko.observableArray(data.nicknames);
  //
}

var ViewModel = function (){
  var self = this;
  //
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(cat){
    self.catList.push(new Cat(cat));
  });
  // initialized to the current cat to first in the array
  //  changed when the user clicks a cat name
  this.currentCat = ko.observable(this.catList()[0]);
  // called when a cat picture is clicked
  this.incrementCounter = function(){
    this.clickCount(this.clickCount() + 1);
  };
  // Called when a cat name is clicked
  this.changeCat = function(obj){
    // the clicked item is passed with a click event
    // that means it is the selected cat
    self.currentCat(obj);
  };
}

ko.applyBindings(new ViewModel());
