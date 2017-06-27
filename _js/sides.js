(function(){
    app = angular.module('sidesApp', []);
    app.controller('SidesController', function(){
        this.sides = sides_recipes;
    });
        
    app.controller('TabController', function(){
        this.tab = 1;
        
        this.setTab = function(selectTab){
            this.tab = selectTab;
        };
        this.isSet = function(checkTab){
            return this.tab === checkTab;
        };
    });
       var sides_recipes = [
           {
               title:'Goat-Cheesy Spuds',
               ingredients:[
                   {
                       name: '',
                       Ing:[
                           {text: '18 small red potatoes, halved or quartered', done:false}, 
                           {text: '8 shallots, quartered', done:false}, 
                           {text: '1/3 cup fresh rosemary', done:false}, 
                           {text: '2 tablespoons crubled goat cheese', done:false}, 
                           {text: '2 tablespoons milk', done:false}]
                   }],
               image: '../Images/sides/goat_cheese_potato.PNG',
               description: "Creamy goat cheese sauces drizzled on top of oven baked potatoes and onions is a great side dish with any meal.",
               procedure: ["Preheat oven to 400\xB0F",
                           "On a baking sheet, toss first 4 ingredients; season.",
                           "Place ingredients in the oven, and roast them for 30 minutes until potatoes are golden, stir potatoes occasionally.",
                           "In a bowl, whisk cheese and milk until smooth",
                           "Drizzle sauce over potatoes and onions; season."]
        }];    
})();