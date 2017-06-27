(function(){
    app = angular.module('casserolesApp', []);
    app.controller('CasserolesController', function(){
        this.casseroles = casseroles_recipes;
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
       var casseroles_recipes = [
           {
               title:'Sweet Potato Macaroni and Cheese',
               ingredients:[
                   {
                       name: '',
                       Ing:[
                           {text: '8 ounces whole-wheat elbow noodles (2 cups)', done:false}, 
                           {text: '1 medium sweet potato (about 12 ounces', done:false}, 
                           {text: '2 tablespoons all-purpose flour', done:false}, 
                           {text: '1 small clove garlic, minced', done:false}, 
                           {text: '1 1/4 cups shredded sharp Cheddar cheese', done:false}, 
                           {text: '1 tablespoon Dijon mustard', done:false}, 
                           {text: '1/4 teaspoon salt', done:false},
                           {text: '1/4 teaspoon freshly ground pepper', done:false},
                           {text: '1/2 cup frozen peas, thawed', done:false}, 
                           {text: '3 tablespoons coarse dry whole-wheat breadcrumbs', done:false}, 
                           {text: '1 teaspoon extra-virgin olive oil', done:false}]
                   }
               ],
               image: '../Images/casseroles/sweet_potato_mac_.PNG',
               description: "Fiber-rich sweet potato is used as the base for the cheese sauce in this homemade macaroni and cheese. The bright orange color tricks the eye into thinking the dish is loated with cheese, but there's actually about half as much cheese as compared to a traditional recipe.",
               procedure: ["Position a rack in upper third of oven; preheat broiler. Coat a 2-quart broiler-safe baking dish with cooking spray.",
                           "Cook noodles in a large pot of boiling water until just tender, 7 to 9 minutes. Drain; set aside",
                           "Meanwhile, prick sweet potato with a fork in several places. Microwave on High until tender all the way to the center, 7 to 10 minutes",
                           "Whisk milk, flour and garlic in a large saucepan. Heat over medium heat, whisking frequently, until steaming and hot, but not boiling. Remove from heat.",
                           "As soon as the sweet potato is cool enough to handle, cut open and scoop the flesh into the steaming milk. Puree with an immersion blender until smooth. (Alternatively, transfer to a blender and puree just until smooth, then return to the pot; use caution when pureeing hot liquids)",
                           "Add cheese, mustard, salt and pepper and stir unil the cheese melts. Add the pasta and peas to the sauce and stir to coat. Transfer to the prepared baking dish. Combine breadcrumbs and oil and sprinkle on the pasta. Broil on the upper rack until the top is lightly browned and crispy, 1 to 2 minutes"]
        }];    
})();