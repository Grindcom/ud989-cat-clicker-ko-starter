# Cat Clicker app
## Objective
Demonstrate the Model--ViewModel--View interaction of KnockoutJS.  

## Basic Functionality
1. The page shows a list of cat names followed by a detailed description of one of them.  
2. When a user clicks one of the names the cat detail changes to the selected cat.  
3. When a user clicks the cat picture in the detail a counter is incremented.  
4. When a cats counter reaches different values the 'age' variable changes; newborn, infant, teen, adult, ninja.  

## How it works
### View
The file 'index.html' is where the Cat information is displayed using KnockoutJS data-binding elements.  The values are related within the different elements.  This app leverages the Knockout capability to iterate through an observableArray and replicate html elements within; this is shown for the cat name list and the nickname list.

### Model
The file 'app.js' holds the
1. 'initialCats' array, which is hard-coded information for several cats.
2. 'Cat' object, which performs all things for a single Cat; clickCount, name, age logic, nicknames array.  
3. 'ViewModel' object, which is where all the main operations are initiated and the click event handlers are initiated.
4. 'ko.applyBindings(new ViewModel())' is the initiating function that gets the ball rolling.

### ViewModel
This is handled by the KnockoutJS organizational library.

ud989-cat-clicker-ko-starter
============================

ud989-cat-clicker-ko-starter
