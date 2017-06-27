(function(){
    app = angular.module('dessertsApp', []);
    app.controller('DessertsController', function(){
        this.desserts = desserts_recipes;
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
       var desserts_recipes = [
           {
               title:'Chocolate Cherry Thumbprints and Cherry Pie Cookies',
               ingredients:[
                   {
                       name: 'Chocolate Cherry Thumbprints',
                       Ing:[
                           {text: '1 cup butter, softerned', done:false}, 
                           {text: '2 cups white sugar', done:false}, 
                           {text: '2 eggs', done:false}, 
                           {text: '2 teaspoons vanilla', done:false}, 
                           {text: '1/2 teaspoon salt', done:false}, 
                           {text: '1/2 teaspoon baking soda', done:false}, 
                           {text: '1/2 teaspoon backing powder', done:false},
                           {text: '1 (21 oz.) Lucky Leaf Cherry Pie Filling', done:false},
                       {text: '1/2 cup chocolate chips', done:false}]},
                   
                   {
                       name: 'Cherry Pie Cookies',
                       Ing:[
                           {text: '1/2 cup butter, softerned', done:false}, 
                           {text: '3/4 cup powdered sugar', done:false}, 
                           {text: '1/2 cup margarine, softened', done:false}, 
                           {text: '1 teaspoons vanilla', done:false}, 
                           {text: '2 cups flour', done:false},
                           {text: '1 (21 oz.) Lucky Leaf Cherry Pie Filling', done:false},
                       {text: '1/2 cup white or milk chocolate chips', done:false}]
                   }],
               image: '../Images/desserts/cherry_pie_cookies.PNG',
               description: "Cookies great for the Holidays",
               procedure: ["For Chocolate Cherry Thumbprints: Preheat oven to 350\xB0F",
                           "For Cherry Pie Cookies: Preheat oven to 325\xB0F",
                           "For Chocolate Cherry Thumbprints: Cream butter and sugar until light and fluffy. Mix in eggs, one at a time. Add vanilla and mix until combined. Add flour, coca, salt, baking soda and baking powder. Mix unil combined",
                           "For Cherry Pie Cookies: Mix butter and margarine until fluffy. Add flour, powdered sugar and vanilla just until combined and a soft dough is formed",
                           "Roll the dough into two-inch balls. PLace on greased baking sheet or baking sheet lined with parchment paper. Press thumb into center of cookie to make a well. PLace cherries into each cookie.",
                           "Melt chocolate according to package directions. Drizzle over cookies. Let chocolate set and serve immediately or store in an airtight container"]
        }];    
})();