(function(){
    app = angular.module('breakfastApp', []);
    app.controller('BreakfastController', function(){
        this.breakfast = breakfast_recipes;
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
       var breakfast_recipes = [
           {
               title:'French Toast with Pear-Cranberry Compote',
               ingredients:[
                   {
                       name: 'Compote',
                       Ing:[
                           {text: '2 large ripe but firm pears, peeled and chopped', done:false}, 
                           {text: '1 cup cranberries, fresh or frozen', done:false}, 
                           {text: '1/2 cup water', done:false}, 
                           {text: '2 tablespoons sugar', done:false}, 
                           {text: '2 tablespoons honey', done:false}, 
                           {text: '1 1/2 teaspoons dried lemon peel (optional)', done:false}, 
                           {text: '1/4 teaspoon kosher or sea salt', done:false},
                           {text: '2 teaspoons fresh lemon juice', done:false}]},
                   
                   {
                       name: 'French Toast',
                       Ing:[{text: '4 large eggs', done:false}, 
                           {text: '1 cup low-fat milk', done:false}, 
                           {text: '2 teaspoons vallina extract', done:false}, 
                           {text: '1/2 teaspoon ground cardamom, divided', done:false}, 
                           {text: '8 slices stale bread', done:false}, 
                           {text: '6 teaspoons', done:false}]
                   }
               ],
               
               image: '../Images/breakfast/french_toast.PNG',
               description: "This French toast is frangrant with vanilla and cardamom. Paired with a sweet-tart part-cranberry compote, it's a delicious end for any bread that's been forgotten a little too long. Look for dried lemon peel (for the compote) in the spices secton of well-stocked supermarkets.",
               procedure: ["To prepare compote: Combine pears,cranberries, water, sugar, honey, lemon, peel(if using) and salt in a medium saucepan. Bring to a boil over medium high heat. Reduce heat to medium-low, cover and gently simmer, stirring occasionally, until the cranberries have broken down and the pears are very tender, 30 minutes. Remove from heat and stir in lemon juice.",
                           "To prepare French toast: While the compote is simmering, whisk eggs, milk, vanilla and 1/4 teaspoon cardamom in a medium bowl. Place bread in a 9-by-13-inch baking dish, in 2 layers if necessary. Pour the egg mixture over the bread. Let sit until the compote is done, occasionally turning and pressing gently to help the bread soak up all the egg mixture.",
                           "Preheat oven to 200 \xB0F",
                           "Heat 1.5 teaspoons butter in a large nonstick skillet over medium heat until melted and hot. Sprinkle bread with the remaining 1/4 teaspoon cardamom. Add 2 slices bread, cardamom-side down to the pan. Cook until golden, 2 to 3 minutes per side. Transfer to the oven to keep warm. Repeat in three more batches with the remaining butter and bread.",
                           "Serve the French toast with the warm compote."
               ]
           }];    
})();