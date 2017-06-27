(function(){
    app = angular.module('saladsApp', []);
    app.controller('SaladsController', function(){
        this.salads = salads_recipes;
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
       var salads_recipes = [
           {
               title:'Avocado and Shrimp Chopped Salad',
               ingredients:[
                   {
                       name: 'Dressing',
                       Ing:[
                           {text: '5 tablespoons reduced-fat sour cream', done:false}, 
                           {text: '3 tablespoons grapeseed oil or extra-virgin olive oil', done:false}, 
                           {text: '3 tablespoons cider vinegar', done:false}, 
                           {text: '2 tablespoons chopped fresh cilantro', done:false}, 
                           {text: '1 tablespoon chopped fresh dill', done:false}, 
                           {text: '1 tablespoon minced shallot', done:false}, 
                           {text: '2 cloves garlic, minced', done:false},
                           {text: '3/4 teaspoon dry mustard', done:false},
                       {text: '1/4 teaspoon kosher salt', done:false}]},
                   
                   {
                       name: 'Shrimp and Salad',
                       Ing:[
                           {text: '1 pound raw shrimp (21-25 per pound)', done:false}, 
                           {text: '2 teaspoons extra-virgin olive oil', done:false}, 
                           {text: '2 teaspoons finely grated lime zest', done:false}, 
                           {text: '1/4 teaspoon kosher salt', done:false}, 
                           {text: '1/4 teaspoon freshly ground pepper, plus more to taste', done:false},
                           {text: '2 ear corn, husked', done:false},
                       {text: '4 cups chopped romaine lettuce', done:false},
                       {text: '3/4 cup finely chopped red cabbage', done:false},
                       {text: '1/2 cup diced red onion', done:false},
                       {text: '1/2 cup assorted cherry tomatoes, chopped', done:false},
                       {text: '1/2 fennel bulb, halved again, thinly sliced', done:false},
                       {text: '1 avocado, diced', done:false},
                       {text: 'slices crispy cooked bacon, diced', done:false}]
                   }],
               image: '../Images/salads/apple_cabbage_salad.PNG',
               description: "The smoky flavor of grilled shrimp and corn is a tasty match for the creamy cilantro dressing.",
               procedure: ["Dressing: Puree the derssing ingredients in a food processor or blender until smooth",
                           "Shrimp and salad: Preheaet grill to medium or heat a grill pan over medium heat",
                           "Toss shrimp with 2 teaspoons oil, lime zest, salt and 1/4 teaspoon pepper",
                           "Grill corn, turning occasionally, until slightly charred, 6 to 10 minutes. Grill the shrimp, turning once, until cooked through, 3 to 5 minutes total. Transfer corn and shrimp to a cutting board. Cut the kernels off the cob. Chop the shrip into bite-size pieces",
                           "Combine lettuce, cabbage, bell pepper, onion, tomatoes, fennel, avocado and bacon in a large bowl. Add the shrimp, corn and dressing; toss to coat. Season with pepper."]
        }];    
})();