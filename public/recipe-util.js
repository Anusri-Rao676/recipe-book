const recipeListEl = document.getElementById("recipe-list");
const mockRecipeJson = [
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 12,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 2,
    "healthScore": 6,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 385.59,
    "extendedIngredients": [
      {
        "id": 10123,
        "aisle": "Meat",
        "image": "raw-bacon.png",
        "consistency": "SOLID",
        "name": "bacon",
        "nameClean": "applewood smoked bacon",
        "original": "3 slices bacon, broken into bits",
        "originalName": "bacon, broken into bits",
        "amount": 3,
        "unit": "slices",
        "meta": [],
        "measures": {
          "us": { "amount": 3, "unitShort": "slice", "unitLong": "slices" },
          "metric": { "amount": 3, "unitShort": "slice", "unitLong": "slices" }
        }
      },
      {
        "id": 1001,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consistency": "SOLID",
        "name": "butter",
        "nameClean": "butter",
        "original": "3 tablespoons butter",
        "originalName": "butter",
        "amount": 3,
        "unit": "tablespoons",
        "meta": [],
        "measures": {
          "us": { "amount": 3, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 3, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 2031,
        "aisle": "Spices and Seasonings",
        "image": "chili-powder.jpg",
        "consistency": "SOLID",
        "name": "cayenne pepper",
        "nameClean": "ground cayenne pepper",
        "original": "1/2 teaspoon cayenne pepper",
        "originalName": "cayenne pepper",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "tsps", "unitLong": "teaspoons" },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 2009,
        "aisle": "Spices and Seasonings",
        "image": "chili-powder.jpg",
        "consistency": "SOLID",
        "name": "chili powder",
        "nameClean": "chili powder",
        "original": "1 tablespoon chili powder",
        "originalName": "chili powder",
        "amount": 1,
        "unit": "tablespoon",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" },
          "metric": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" }
        }
      },
      {
        "id": 10114106,
        "aisle": "Alcoholic Beverages",
        "image": "dry-sherry.png",
        "consistency": "LIQUID",
        "name": "sherry",
        "nameClean": "dry sherry",
        "original": "1 cup dry sherry",
        "originalName": "dry sherry",
        "amount": 1,
        "unit": "cup",
        "meta": ["dry"],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": {
            "amount": 240,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.png",
        "consistency": "SOLID",
        "name": "garlic",
        "nameClean": "garlic",
        "original": "2 tablespoons garlic, minced",
        "originalName": "garlic, minced",
        "amount": 2,
        "unit": "tablespoons",
        "meta": ["minced"],
        "measures": {
          "us": { "amount": 2, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 2, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 1029150,
        "aisle": "Produce",
        "image": "lemon-wedge.png",
        "consistency": "SOLID",
        "name": "lemon wedges",
        "nameClean": "lemon wedge",
        "original": "lemon wedges",
        "originalName": "lemon wedges",
        "amount": 4,
        "unit": "servings",
        "meta": [],
        "measures": {
          "us": {
            "amount": 4,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 4,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 4053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consistency": "SOLID",
        "name": "olive oil",
        "nameClean": "olive oil",
        "original": "2 tablespoons olive oil",
        "originalName": "olive oil",
        "amount": 2,
        "unit": "tablespoons",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 2, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 2028,
        "aisle": "Spices and Seasonings",
        "image": "paprika.jpg",
        "consistency": "SOLID",
        "name": "paprika",
        "nameClean": "paprika",
        "original": "1 tablespoon paprika",
        "originalName": "paprika",
        "amount": 1,
        "unit": "tablespoon",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" },
          "metric": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" }
        }
      },
      {
        "id": 11297,
        "aisle": "Spices and Seasonings",
        "image": "parsley.jpg",
        "consistency": "SOLID",
        "name": "parsley",
        "nameClean": "parsley",
        "original": "chopped parsley",
        "originalName": "chopped parsley",
        "amount": 4,
        "unit": "servings",
        "meta": ["chopped"],
        "measures": {
          "us": {
            "amount": 4,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 4,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 10028033,
        "aisle": "Bakery/Bread",
        "image": "italian-bread.jpg",
        "consistency": "SOLID",
        "name": "rustic bread",
        "nameClean": "italian bread",
        "original": "toasted slices of rustic bread",
        "originalName": "toasted of rustic bread",
        "amount": 1,
        "unit": "slices",
        "meta": ["toasted"],
        "measures": {
          "us": { "amount": 1, "unitShort": "slice", "unitLong": "slice" },
          "metric": { "amount": 1, "unitShort": "slice", "unitLong": "slice" }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "SOLID",
        "name": "salt",
        "nameClean": "table salt",
        "original": "1 teaspoon salt",
        "originalName": "salt",
        "amount": 1,
        "unit": "teaspoon",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "tsp", "unitLong": "teaspoon" },
          "metric": { "amount": 1, "unitShort": "tsp", "unitLong": "teaspoon" }
        }
      },
      {
        "id": 15270,
        "aisle": "Seafood",
        "image": "shrimp.png",
        "consistency": "SOLID",
        "name": "shrimp",
        "nameClean": "shrimp",
        "original": "1 pound small shrimp (31/40 count), peeled and deveined",
        "originalName": "shrimp (31/40 count), peeled and deveined",
        "amount": 1,
        "unit": "pound",
        "meta": ["deveined", "peeled", "()"],
        "measures": {
          "us": { "amount": 1, "unitShort": "lb", "unitLong": "pound" },
          "metric": { "amount": 453.592, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 11529,
        "aisle": "Produce",
        "image": "tomato.png",
        "consistency": "SOLID",
        "name": "tomato",
        "nameClean": "tomato",
        "original": "1/2 cup tomato, diced",
        "originalName": "tomato, diced",
        "amount": 0.5,
        "unit": "cup",
        "meta": ["diced"],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 74.5, "unitShort": "g", "unitLong": "grams" }
        }
      }
    ],
    "id": 644140,
    "title": "Gambas Al Ajillo",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "http://www.foodista.com/recipe/8FJGTT57/gambas-al-ajillo",
    "image": "https://spoonacular.com/recipeImages/644140-556x370.jpg",
    "imageType": "jpg",
    "summary": "Gambas Al Ajillo takes approximately <b>45 minutes</b> from beginning to end. One serving contains <b>402 calories</b>, <b>27g of protein</b>, and <b>25g of fat</b>. For <b>$3.86 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. It works well as a rather pricey main course. This recipe from Foodista requires bacon, butter, garlic, and olive oil. 2 people have tried and liked this recipe. Taking all factors into account, this recipe <b>earns a spoonacular score of 47%</b>, which is pretty good. Try <a href=\"https://spoonacular.com/recipes/gambas-al-ajillo-1250429\">Gambas Al Ajillo</a>, <a href=\"https://spoonacular.com/recipes/gambas-al-ajillo-1444537\">Gambas Al Ajillo</a>, and <a href=\"https://spoonacular.com/recipes/gambas-al-ajillo-575511\">Gambas al Ajillo</a> for similar recipes.",
    "cuisines": [],
    "dishTypes": ["lunch", "main course", "main dish", "dinner"],
    "diets": [],
    "occasions": [],
    "instructions": "<ol><li>In a saut pan over medium-high heat, add olive oil. When hot, add shrimp and seasonings, and saut until they are cooked halfway.</li><li>Add garlic, tomatoes, bacon and saut a bit longer. Add sherry and cook until reduced by half. Add butter and stir in.</li><li>Sprinkle with parsley and squeeze the lemon wedges over the shrimp. Serve with crusty bread and a crisp white wine like a Verdejo from Rueda or a bubbly Cava from Penedes.</li></ol>",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "In a saut pan over medium-high heat, add olive oil. When hot, add shrimp and seasonings, and saut until they are cooked halfway.",
            "ingredients": [
              {
                "id": 1042027,
                "name": "seasoning",
                "localizedName": "seasoning",
                "image": "seasoning.png"
              },
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              },
              {
                "id": 15270,
                "name": "shrimp",
                "localizedName": "shrimp",
                "image": "shrimp.png"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }
            ]
          },
          {
            "number": 2,
            "step": "Add garlic, tomatoes, bacon and saut a bit longer.",
            "ingredients": [
              {
                "id": 11529,
                "name": "tomato",
                "localizedName": "tomato",
                "image": "tomato.png"
              },
              {
                "id": 11215,
                "name": "garlic",
                "localizedName": "garlic",
                "image": "garlic.png"
              },
              {
                "id": 10123,
                "name": "bacon",
                "localizedName": "bacon",
                "image": "raw-bacon.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 3,
            "step": "Add sherry and cook until reduced by half.",
            "ingredients": [
              {
                "id": 10214106,
                "name": "sherry",
                "localizedName": "sherry",
                "image": "dry-sherry.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Add butter and stir in.",
            "ingredients": [
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 5,
            "step": "Sprinkle with parsley and squeeze the lemon wedges over the shrimp.",
            "ingredients": [
              {
                "id": 1029150,
                "name": "lemon wedge",
                "localizedName": "lemon wedge",
                "image": "lemon-wedge.png"
              },
              {
                "id": 11297,
                "name": "parsley",
                "localizedName": "parsley",
                "image": "parsley.jpg"
              },
              {
                "id": 15270,
                "name": "shrimp",
                "localizedName": "shrimp",
                "image": "shrimp.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 6,
            "step": "Serve with crusty bread and a crisp white wine like a Verdejo from Rueda or a bubbly Cava from Penedes.",
            "ingredients": [
              {
                "id": 10018029,
                "name": "crusty bread",
                "localizedName": "crusty bread",
                "image": "crusty-bread.jpg"
              },
              {
                "id": 14106,
                "name": "white wine",
                "localizedName": "white wine",
                "image": "white-wine.jpg"
              },
              {
                "id": 0,
                "name": "verdejo",
                "localizedName": "verdejo",
                "image": "white-wine.jpg"
              },
              {
                "id": 0,
                "name": "cava",
                "localizedName": "cava",
                "image": "red-wine.jpg"
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 44.713531494140625,
    "spoonacularSourceUrl": "https://spoonacular.com/gambas-al-ajillo-644140"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 2,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 2,
    "healthScore": 38,
    "creditsText": "foodista.com",
    "sourceName": "foodista.com",
    "pricePerServing": 52.25,
    "extendedIngredients": [
      {
        "id": 11090,
        "aisle": "Produce",
        "image": "broccoli.jpg",
        "consistency": "SOLID",
        "name": "broccoli flowerets",
        "nameClean": "broccoli",
        "original": "2 cups broccoli flowerets",
        "originalName": "broccoli flowerets",
        "amount": 2,
        "unit": "cups",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 176, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 5114,
        "aisle": "Meat",
        "image": "rotisserie-chicken.png",
        "consistency": "SOLID",
        "name": "chicken",
        "nameClean": "cooked chicken",
        "original": "1 1/2 cups cooked chicken chopped",
        "originalName": "cooked chicken chopped",
        "amount": 1.5,
        "unit": "cups",
        "meta": ["cooked", "chopped"],
        "measures": {
          "us": { "amount": 1.5, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 210, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 9152,
        "aisle": "Produce",
        "image": "lemon-juice.jpg",
        "consistency": "LIQUID",
        "name": "lemon juice",
        "nameClean": "lemon juice",
        "original": "3 tablespoons fresh lemon juice",
        "originalName": "fresh lemon juice",
        "amount": 3,
        "unit": "tablespoons",
        "meta": ["fresh"],
        "measures": {
          "us": { "amount": 3, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 3, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 9156,
        "aisle": "Produce",
        "image": "zest-lemon.jpg",
        "consistency": "SOLID",
        "name": "lemon peel",
        "nameClean": "lemon peel",
        "original": "1 teaspoon grated lemon peel",
        "originalName": "grated lemon peel",
        "amount": 1,
        "unit": "teaspoon",
        "meta": ["grated"],
        "measures": {
          "us": { "amount": 1, "unitShort": "tsp", "unitLong": "teaspoon" },
          "metric": { "amount": 1, "unitShort": "tsp", "unitLong": "teaspoon" }
        }
      },
      {
        "id": 4053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consistency": "SOLID",
        "name": "olive oil",
        "nameClean": "olive oil",
        "original": "1 tablespoon olive oil",
        "originalName": "olive oil",
        "amount": 1,
        "unit": "tablespoon",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" },
          "metric": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" }
        }
      },
      {
        "id": 20444,
        "aisle": "Pasta and Rice",
        "image": "uncooked-white-rice.png",
        "consistency": "SOLID",
        "name": "pkt near east rice pilaf see note",
        "nameClean": "rice",
        "original": "1 pkt Near East Rice Pilaf see note",
        "originalName": "pkt Near East Rice Pilaf see note",
        "amount": 1,
        "unit": "",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 1, "unitShort": "", "unitLong": "" }
        }
      }
    ],
    "id": 649733,
    "title": "Lemon Pilaf Chicken",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "http://www.foodista.com/recipe/RGX7LQVF/lemon-pilaf-chicken",
    "image": "https://spoonacular.com/recipeImages/649733-556x370.jpg",
    "imageType": "jpg",
    "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Lemon Pilaf Chicken might be a recipe you should try. For <b>52 cents per serving</b>, you get a main course that serves 4. One portion of this dish contains around <b>14g of protein</b>, <b>7g of fat</b>, and a total of <b>138 calories</b>. If you have pkt near east rice pilaf see note, chicken, lemon juice, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. 2 people found this recipe to be yummy and satisfying. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is awesome. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/lemon-pilaf-chicken-1366787\">Lemon Pilaf Chicken</a>, <a href=\"https://spoonacular.com/recipes/chicken-pilaf-with-pistachios-lemon-513563\">Chicken pilaf with pistachios & lemon</a>, and <a href=\"https://spoonacular.com/recipes/pan-seared-chicken-with-tender-leek-lemon-rice-pilaf-and-whatever-your-garden-grows-salad-287910\">Pan Seared Chicken with Tender Leek, Lemon Rice Pilaf, and Whatever Your Garden Grows Salad</a>.",
    "cuisines": [],
    "dishTypes": ["side dish", "lunch", "main course", "main dish", "dinner"],
    "diets": ["gluten free", "dairy free"],
    "occasions": [],
    "instructions": "<ol><li>In large skillet bring 2 cups water, olive oil, lemon juice and spice sack to a boil. Stir in chicken and rice pilaf. Reduce heat and simmer for 10 minutes. Add broccoli and grated lemon peel. Simmer for 8 to 10 minutes, or until all water is absorbed.</li><li>NOTES : For a colorful twist, substitute Near East Chicken Flavor Pilaf.</li></ol>",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "In large skillet bring 2 cups water, olive oil, lemon juice and spice sack to a boil. Stir in chicken and rice pilaf. Reduce heat and simmer for 10 minutes.",
            "ingredients": [
              {
                "id": 9152,
                "name": "lemon juice",
                "localizedName": "lemon juice",
                "image": "lemon-juice.jpg"
              },
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              },
              {
                "id": 0,
                "name": "chicken",
                "localizedName": "chicken",
                "image": "whole-chicken.jpg"
              },
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              },
              {
                "id": 20444,
                "name": "rice",
                "localizedName": "rice",
                "image": "uncooked-white-rice.png"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }
            ],
            "length": { "number": 10, "unit": "minutes" }
          },
          {
            "number": 2,
            "step": "Add broccoli and grated lemon peel. Simmer for 8 to 10 minutes, or until all water is absorbed.NOTES : For a colorful twist, substitute Near East Chicken Flavor Pilaf.",
            "ingredients": [
              {
                "id": 9156,
                "name": "lemon peel",
                "localizedName": "lemon peel",
                "image": "zest-lemon.jpg"
              },
              {
                "id": 11090,
                "name": "broccoli",
                "localizedName": "broccoli",
                "image": "broccoli.jpg"
              },
              {
                "id": 0,
                "name": "chicken",
                "localizedName": "chicken",
                "image": "whole-chicken.jpg"
              },
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              }
            ],
            "equipment": [],
            "length": { "number": 8, "unit": "minutes" }
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 84.4266357421875,
    "spoonacularSourceUrl": "https://spoonacular.com/lemon-pilaf-chicken-649733"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 3,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 22,
    "healthScore": 0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 18.04,
    "extendedIngredients": [
      {
        "id": 1055062,
        "aisle": "Meat",
        "image": "chicken-breasts.png",
        "consistency": "SOLID",
        "name": "chicken breast",
        "nameClean": "boneless skinless chicken breast",
        "original": "4 pieces chicken breast, boneless and skinless",
        "originalName": "chicken breast, boneless and skinless",
        "amount": 4,
        "unit": "pieces",
        "meta": ["boneless", "skinless"],
        "measures": {
          "us": { "amount": 4, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 4, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 10151,
        "aisle": "Meat",
        "image": "ham-whole.jpg",
        "consistency": "SOLID",
        "name": "ham",
        "nameClean": "ham",
        "original": "4 pieces ham",
        "originalName": "ham",
        "amount": 4,
        "unit": "pieces",
        "meta": [],
        "measures": {
          "us": { "amount": 4, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 4, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 1009,
        "aisle": "Cheese",
        "image": "cheddar-cheese.png",
        "consistency": "SOLID",
        "name": "cheddar cheese",
        "nameClean": "cheddar cheese",
        "original": "4 slices cheddar cheese, (and I sliced it into sticks)",
        "originalName": "cheddar cheese, (and I sliced it into sticks)",
        "amount": 4,
        "unit": "slices",
        "meta": ["sliced", "(and I it into sticks)"],
        "measures": {
          "us": { "amount": 4, "unitShort": "slice", "unitLong": "slices" },
          "metric": { "amount": 4, "unitShort": "slice", "unitLong": "slices" }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "SOLID",
        "name": "salt",
        "nameClean": "table salt",
        "original": "1/4 teaspoon salt",
        "originalName": "salt",
        "amount": 0.25,
        "unit": "teaspoon",
        "meta": [],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 1022030,
        "aisle": "Spices and Seasonings",
        "image": "black-pepper.png",
        "consistency": "SOLID",
        "name": "ground peppercorn",
        "nameClean": "black peppercorns",
        "original": "1/8 teaspoon ground peppercorn",
        "originalName": "ground peppercorn",
        "amount": 0.125,
        "unit": "teaspoon",
        "meta": [],
        "measures": {
          "us": {
            "amount": 0.125,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.125,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 18079,
        "aisle": "Pasta and Rice",
        "image": "breadcrumbs.jpg",
        "consistency": "SOLID",
        "name": "bread crumbs- add",
        "nameClean": "breadcrumbs",
        "original": "1/2 cup bread crumbs- add 1/8 tsp paprika and 1/8 tsp salt",
        "originalName": "bread crumbs- add 1/8 tsp paprika and 1/8 tsp salt",
        "amount": 0.5,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "cups", "unitLong": "cups" },
          "metric": {
            "amount": 54,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 20081,
        "aisle": "Baking",
        "image": "flour.png",
        "consistency": "SOLID",
        "name": "flour",
        "nameClean": "wheat flour",
        "original": "1/2 cup flour",
        "originalName": "flour",
        "amount": 0.5,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 62.5, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 1123,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg.png",
        "consistency": "SOLID",
        "name": "egg",
        "nameClean": "egg",
        "original": "1 large egg, beaten",
        "originalName": "egg, beaten",
        "amount": 1,
        "unit": "large",
        "meta": ["beaten"],
        "measures": {
          "us": { "amount": 1, "unitShort": "large", "unitLong": "large" },
          "metric": { "amount": 1, "unitShort": "large", "unitLong": "large" }
        }
      },
      {
        "id": 1001,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consistency": "SOLID",
        "name": "butter",
        "nameClean": "butter",
        "original": "8 smalls butter, cubed into pieces (optional)",
        "originalName": "s butter, cubed into pieces (optional)",
        "amount": 8,
        "unit": "small",
        "meta": ["cubed"],
        "measures": {
          "us": { "amount": 8, "unitShort": "small", "unitLong": "smalls" },
          "metric": { "amount": 8, "unitShort": "small", "unitLong": "smalls" }
        }
      }
    ],
    "id": 641896,
    "title": "Easy Chicken Cordon Bleu",
    "readyInMinutes": 45,
    "servings": 8,
    "sourceUrl": "https://www.foodista.com/recipe/PW5QGG6L/easy-chicken-cordon-bleu",
    "image": "https://spoonacular.com/recipeImages/641896-556x370.jpg",
    "imageType": "jpg",
    "summary": "Easy Chicken Cordon Bleu is a hor d'oeuvre that serves 8. One serving contains <b>108 calories</b>, <b>5g of protein</b>, and <b>5g of fat</b>. For <b>18 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires chicken breast, egg, cheddar cheese, and salt. 22 people have tried and liked this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 24%</b>. This score is not so amazing. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/easy-chicken-cordon-bleu-1294357\">Easy Chicken Cordon Bleu</a>, <a href=\"https://spoonacular.com/recipes/easy-chicken-cordon-bleu-401928\">Easy Chicken Cordon Bleu</a>, and <a href=\"https://spoonacular.com/recipes/easy-chicken-cordon-bleu-826643\">Easy Chicken Cordon Bleu</a>.",
    "cuisines": [],
    "dishTypes": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ],
    "diets": [],
    "occasions": [],
    "instructions": "Pre-heat oven into 180C.\nGently pound the chicken breast into 1/4 thickness using a meat mallet.\nSeason the chicken meat - sprinkle salt and ground pepper on both sides.\nPlace 1 ham and 2 cheese sticks on top of each breast (but I prefer putting on another 2 cheese sticks! i love cheese!) Roll up each breast an secure with a toothpick.\nDredge in flour. Then brush with beaten eggs. Then finally roll in bread crumbs mixture.\nBrush the baking pan with olive oil, then place the chicken rolls.\nBake for about 20 minutes. Then layer each rolls with butter cubes. Let the butter melts on its top, the roll will absorb its flavor and will give a really nice smell.\nBake for another 15 minutes.\nYou may serve this your favorite sauce.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Pre-heat oven into 180C.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg",
                "temperature": { "number": 180, "unit": "Celsius" }
              }
            ]
          },
          {
            "number": 2,
            "step": "Gently pound the chicken breast into 1/4 thickness using a meat mallet.",
            "ingredients": [
              {
                "id": 5062,
                "name": "chicken breast",
                "localizedName": "chicken breast",
                "image": "chicken-breasts.png"
              },
              {
                "id": 1065062,
                "name": "meat",
                "localizedName": "meat",
                "image": "whole-chicken.jpg"
              }
            ],
            "equipment": [
              {
                "id": 3846,
                "name": "meat tenderizer",
                "localizedName": "meat tenderizer",
                "image": "meat-mallet.jpg"
              }
            ]
          },
          {
            "number": 3,
            "step": "Season the chicken meat - sprinkle salt and ground pepper on both sides.",
            "ingredients": [
              {
                "id": 1002030,
                "name": "ground black pepper",
                "localizedName": "ground black pepper",
                "image": "pepper.jpg"
              },
              {
                "id": 0,
                "name": "chicken meat",
                "localizedName": "chicken meat",
                "image": "chicken-breasts.png"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Place 1 ham and 2 cheese sticks on top of each breast (but I prefer putting on another 2 cheese sticks! i love cheese!)",
            "ingredients": [
              {
                "id": 98970,
                "name": "string cheese",
                "localizedName": "string cheese",
                "image": "string-cheese.png"
              },
              {
                "id": 1041009,
                "name": "cheese",
                "localizedName": "cheese",
                "image": "cheddar-cheese.png"
              },
              {
                "id": 10151,
                "name": "ham",
                "localizedName": "ham",
                "image": "ham-whole.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 5,
            "step": "Roll up each breast an secure with a toothpick.",
            "ingredients": [
              {
                "id": 0,
                "name": "roll",
                "localizedName": "roll",
                "image": "dinner-yeast-rolls.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404644,
                "name": "toothpicks",
                "localizedName": "toothpicks",
                "image": "toothpicks.jpg"
              }
            ]
          },
          {
            "number": 6,
            "step": "Dredge in flour. Then brush with beaten eggs. Then finally roll in bread crumbs mixture.",
            "ingredients": [
              {
                "id": 18079,
                "name": "breadcrumbs",
                "localizedName": "breadcrumbs",
                "image": "breadcrumbs.jpg"
              },
              {
                "id": 20081,
                "name": "all purpose flour",
                "localizedName": "all purpose flour",
                "image": "flour.png"
              },
              {
                "id": 1123,
                "name": "egg",
                "localizedName": "egg",
                "image": "egg.png"
              },
              {
                "id": 0,
                "name": "roll",
                "localizedName": "roll",
                "image": "dinner-yeast-rolls.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 7,
            "step": "Brush the baking pan with olive oil, then place the chicken rolls.",
            "ingredients": [
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              },
              {
                "id": 0,
                "name": "chicken",
                "localizedName": "chicken",
                "image": "whole-chicken.jpg"
              },
              {
                "id": 0,
                "name": "roll",
                "localizedName": "roll",
                "image": "dinner-yeast-rolls.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404646,
                "name": "baking pan",
                "localizedName": "baking pan",
                "image": "roasting-pan.jpg"
              }
            ]
          },
          {
            "number": 8,
            "step": "Bake for about 20 minutes. Then layer each rolls with butter cubes.",
            "ingredients": [
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              },
              {
                "id": 0,
                "name": "roll",
                "localizedName": "roll",
                "image": "dinner-yeast-rolls.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ],
            "length": { "number": 20, "unit": "minutes" }
          },
          {
            "number": 9,
            "step": "Let the butter melts on its top, the roll will absorb its flavor and will give a really nice smell.",
            "ingredients": [
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              },
              {
                "id": 0,
                "name": "roll",
                "localizedName": "roll",
                "image": "dinner-yeast-rolls.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 10,
            "step": "Bake for another 15 minutes.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ],
            "length": { "number": 15, "unit": "minutes" }
          },
          {
            "number": 11,
            "step": "You may serve this your favorite sauce.",
            "ingredients": [
              {
                "id": 0,
                "name": "sauce",
                "localizedName": "sauce",
                "image": ""
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 1.3818203210830688,
    "spoonacularSourceUrl": "https://spoonacular.com/easy-chicken-cordon-bleu-641896"
  },
  {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 34,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 8,
    "healthScore": 6,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 125.01,
    "extendedIngredients": [
      {
        "id": 1053,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "fluid-cream.jpg",
        "consistency": "LIQUID",
        "name": "heavy cream",
        "nameClean": "cream",
        "original": "3 cups heavy cream",
        "originalName": "heavy cream",
        "amount": 3,
        "unit": "cups",
        "meta": [],
        "measures": {
          "us": { "amount": 3, "unitShort": "cups", "unitLong": "cups" },
          "metric": {
            "amount": 714,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 1077,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "milk.png",
        "consistency": "LIQUID",
        "name": "milk",
        "nameClean": "milk",
        "original": "3 cups milk",
        "originalName": "milk",
        "amount": 3,
        "unit": "cups",
        "meta": [],
        "measures": {
          "us": { "amount": 3, "unitShort": "cups", "unitLong": "cups" },
          "metric": {
            "amount": 732,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 10020052,
        "aisle": "Pasta and Rice",
        "image": "uncooked-white-rice.png",
        "consistency": "SOLID",
        "name": "arborio rice",
        "nameClean": "risotto rice",
        "original": "1 cup Arborio rice",
        "originalName": "Arborio rice",
        "amount": 1,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": { "amount": 200, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 10020052,
        "aisle": "Pasta and Rice",
        "image": "arborio-rice.png",
        "consistency": "SOLID",
        "name": "arborio rice",
        "nameClean": "risotto rice",
        "original": "1 cup Arborio rice",
        "originalName": "Arborio rice",
        "amount": 1,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": { "amount": 200, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 1002010,
        "aisle": "Spices and Seasonings",
        "image": "cinnamon.jpg",
        "consistency": "SOLID",
        "name": "cinnamon sticks",
        "nameClean": "cinnamon stick",
        "original": "2 cinnamon sticks",
        "originalName": "cinnamon sticks",
        "amount": 2,
        "unit": "",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 2, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 9156,
        "aisle": "Produce",
        "image": "zest-lemon.jpg",
        "consistency": "SOLID",
        "name": "lemon zest",
        "nameClean": "lemon peel",
        "original": "1 lemon, zested",
        "originalName": "lemon, zested",
        "amount": 1,
        "unit": "",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 1, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "SOLID",
        "name": "salt",
        "nameClean": "table salt",
        "original": "1 pinch salt",
        "originalName": "salt",
        "amount": 1,
        "unit": "pinch",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "pinch", "unitLong": "pinch" },
          "metric": { "amount": 1, "unitShort": "pinch", "unitLong": "pinch" }
        }
      },
      {
        "id": 19335,
        "aisle": "Baking",
        "image": "sugar-in-bowl.png",
        "consistency": "SOLID",
        "name": "sugar",
        "nameClean": "sugar",
        "original": "1 cup sugar",
        "originalName": "sugar",
        "amount": 1,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": { "amount": 200, "unitShort": "g", "unitLong": "grams" }
        }
      }
    ],
    "id": 632737,
    "title": "Arroz Con Leche",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "https://www.foodista.com/recipe/TJMRG2RX/arroz-con-leche",
    "image": "https://spoonacular.com/recipeImages/632737-556x370.jpg",
    "imageType": "jpg",
    "summary": "Arroz Con Leche is a side dish that serves 6. Watching your figure? This gluten free and lacto ovo vegetarian recipe has <b>729 calories</b>, <b>10g of protein</b>, and <b>47g of fat</b> per serving. For <b>$1.25 per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up heavy cream, lemon zest, sugar, and a few other things to make it today. This recipe is liked by 8 foodies and cooks. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 42%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/arroz-con-leche-1383953\">Arroz Con Leche</a>, <a href=\"https://spoonacular.com/recipes/arroz-con-leche-606916\">Arroz con Leche</a>, and <a href=\"https://spoonacular.com/recipes/arroz-con-leche-1584313\">Arroz con Leche</a>.",
    "cuisines": [],
    "dishTypes": ["side dish"],
    "diets": ["gluten free", "lacto ovo vegetarian"],
    "occasions": [],
    "instructions": "In a saucepan, place the 2 cups heavy cream, 2 cups milk, rice, cinnamon sticks, lemon zest and salt then bring to a boil.\nTurn down the heat and simmer until the rice is cooked, about 30 minutes. Add the rest of milk and heavy cream as needed (you don't want the rice to become too thick).\nAdd the sugar off the heat and stir to combine.\nRemove the cinnamon sticks.\nSprinkle with cinnamon.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "In a saucepan, place the 2 cups heavy cream, 2 cups milk, rice, cinnamon sticks, lemon zest and salt then bring to a boil.",
            "ingredients": [
              {
                "id": 1002010,
                "name": "cinnamon stick",
                "localizedName": "cinnamon stick",
                "image": "cinnamon.jpg"
              },
              {
                "id": 1053,
                "name": "heavy cream",
                "localizedName": "heavy cream",
                "image": "fluid-cream.jpg"
              },
              {
                "id": 9156,
                "name": "lemon zest",
                "localizedName": "lemon zest",
                "image": "zest-lemon.jpg"
              },
              {
                "id": 1077,
                "name": "milk",
                "localizedName": "milk",
                "image": "milk.png"
              },
              {
                "id": 20444,
                "name": "rice",
                "localizedName": "rice",
                "image": "uncooked-white-rice.png"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404669,
                "name": "sauce pan",
                "localizedName": "sauce pan",
                "image": "sauce-pan.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Turn down the heat and simmer until the rice is cooked, about 30 minutes.",
            "ingredients": [
              {
                "id": 20444,
                "name": "rice",
                "localizedName": "rice",
                "image": "uncooked-white-rice.png"
              }
            ],
            "equipment": [],
            "length": { "number": 30, "unit": "minutes" }
          },
          {
            "number": 3,
            "step": "Add the rest of milk and heavy cream as needed (you don't want the rice to become too thick).",
            "ingredients": [
              {
                "id": 1053,
                "name": "heavy cream",
                "localizedName": "heavy cream",
                "image": "fluid-cream.jpg"
              },
              {
                "id": 1077,
                "name": "milk",
                "localizedName": "milk",
                "image": "milk.png"
              },
              {
                "id": 20444,
                "name": "rice",
                "localizedName": "rice",
                "image": "uncooked-white-rice.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Add the sugar off the heat and stir to combine.",
            "ingredients": [
              {
                "id": 19335,
                "name": "sugar",
                "localizedName": "sugar",
                "image": "sugar-in-bowl.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 5,
            "step": "Remove the cinnamon sticks.",
            "ingredients": [
              {
                "id": 1002010,
                "name": "cinnamon stick",
                "localizedName": "cinnamon stick",
                "image": "cinnamon.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 6,
            "step": "Sprinkle with cinnamon.",
            "ingredients": [
              {
                "id": 2010,
                "name": "cinnamon",
                "localizedName": "cinnamon",
                "image": "cinnamon.jpg"
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 49.41481399536133,
    "spoonacularSourceUrl": "https://spoonacular.com/arroz-con-leche-632737"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 16,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 8,
    "healthScore": 8,
    "creditsText": "foodista.com",
    "sourceName": "foodista.com",
    "pricePerServing": 205.69,
    "extendedIngredients": [
      {
        "id": 2069,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "balsamic-vinegar.jpg",
        "consistency": "LIQUID",
        "name": "balsamic vinegar",
        "nameClean": "balsamic vinegar",
        "original": "1 Tbs balsamic vinegar",
        "originalName": "balsamic vinegar",
        "amount": 1,
        "unit": "Tbs",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "Tbs", "unitLong": "Tb" },
          "metric": { "amount": 1, "unitShort": "Tbs", "unitLong": "Tb" }
        }
      },
      {
        "id": 1002030,
        "aisle": "Spices and Seasonings",
        "image": "pepper.jpg",
        "consistency": "SOLID",
        "name": "pepper",
        "nameClean": "black pepper",
        "original": "¼ tsp black pepper, cracked",
        "originalName": "black pepper, cracked",
        "amount": 0.25,
        "unit": "tsp",
        "meta": ["black"],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 1001,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consistency": "SOLID",
        "name": "butter",
        "nameClean": "butter",
        "original": "1/2 cup butter, melted",
        "originalName": "butter, melted",
        "amount": 0.5,
        "unit": "cup",
        "meta": ["melted"],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 113.5, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 20027,
        "aisle": "Baking",
        "image": "white-powder.jpg",
        "consistency": "SOLID",
        "name": "cornstarch",
        "nameClean": "corn starch",
        "original": "½ tsp cornstarch",
        "originalName": "cornstarch",
        "amount": 0.5,
        "unit": "tsp",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "tsps", "unitLong": "teaspoons" },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 10211215,
        "aisle": "Produce",
        "image": "garlic.jpg",
        "consistency": "SOLID",
        "name": "garlic cloves",
        "nameClean": "whole garlic cloves",
        "original": "2 garlic cloves, minced",
        "originalName": "garlic cloves, minced",
        "amount": 2,
        "unit": "",
        "meta": ["minced"],
        "measures": {
          "us": { "amount": 2, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 2, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 11156,
        "aisle": "Produce",
        "image": "fresh-chives.jpg",
        "consistency": "SOLID",
        "name": "green onions",
        "nameClean": "chives",
        "original": "Fresh chives or green onions, sliced, for garnish",
        "originalName": "Fresh chives or green onions, sliced, for garnish",
        "amount": 4,
        "unit": "servings",
        "meta": ["fresh", "sliced", "for garnish"],
        "measures": {
          "us": {
            "amount": 4,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 4,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 19296,
        "aisle": "Nut butters, Jams, and Honey",
        "image": "honey.png",
        "consistency": "LIQUID",
        "name": "honey",
        "nameClean": "honey",
        "original": "2 tablespoons honey",
        "originalName": "honey",
        "amount": 2,
        "unit": "tablespoons",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 2, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 10010062,
        "aisle": "Meat",
        "image": "pork-chops.jpg",
        "consistency": "SOLID",
        "name": "pork chops",
        "nameClean": "pork chops",
        "original": "4 boneless pork chops, trimmed",
        "originalName": "boneless pork chops, trimmed",
        "amount": 4,
        "unit": "",
        "meta": ["boneless", "trimmed"],
        "measures": {
          "us": { "amount": 4, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 4, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 16124,
        "aisle": "Condiments",
        "image": "soy-sauce.jpg",
        "consistency": "LIQUID",
        "name": "soy sauce",
        "nameClean": "soy sauce",
        "original": "1/4 cup soy sauce",
        "originalName": "soy sauce",
        "amount": 0.25,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 0.25, "unitShort": "cups", "unitLong": "cups" },
          "metric": {
            "amount": 58,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      }
    ],
    "id": 644761,
    "title": "Glazed pork chops",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "http://www.foodista.com/recipe/HZVLJQMT/glazed-pork-chops",
    "image": "https://spoonacular.com/recipeImages/644761-556x370.jpg",
    "imageType": "jpg",
    "summary": "If you have roughly <b>45 minutes</b> to spend in the kitchen, Glazed pork chops might be an amazing <b>gluten free and ketogenic</b> recipe to try. This recipe serves 4 and costs $2.06 per serving. One portion of this dish contains roughly <b>31g of protein</b>, <b>32g of fat</b>, and a total of <b>459 calories</b>. 8 people have tried and liked this recipe. It is brought to you by Foodista. If you have balsamic vinegar, honey, garlic cloves, and a few other ingredients on hand, you can make it. Not a lot of people really liked this main course. Taking all factors into account, this recipe <b>earns a spoonacular score of 53%</b>, which is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/glazed-pork-chops-1345505\">Glazed Pork Chops</a>, <a href=\"https://spoonacular.com/recipes/glazed-pork-chops-443748\">Glazed Pork Chops</a>, and <a href=\"https://spoonacular.com/recipes/glazed-pork-chops-1222579\">Glazed Pork Chops</a>.",
    "cuisines": [],
    "dishTypes": ["lunch", "main course", "main dish", "dinner"],
    "diets": ["gluten free", "ketogenic"],
    "occasions": [],
    "instructions": "<ol><li>Press one side of each chop into the black pepper.</li><li>Heat nonstick grill skillet until hot.</li><li>Add pork chops, pepper side down, and cook about 4 minutes or until browned.</li><li>Reduce heat to medium, turn pork chops and cook 6-8 minutes longer.</li><li>When done, take the skillet from the heat, cover the pork chops and set aside.</li><li>Meanwhile, mix honey, soy sauce, balsamic vinegar and cornstarch until smooth.</li><li>Add the cracked pepper, stir.</li><li>Melt the butter in a small pan, add garlic and cook for 30 seconds, stirring.</li><li>Stir honey mixture into pan, let it boil, cook for 1 minute, stirring.</li><li>Spoon sauce over pork chops, sprinkle with fresh chives or green onions.</li><li>Serve with polenta and green salad.</li></ol>",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Press one side of each chop into the black pepper.",
            "ingredients": [
              {
                "id": 1002030,
                "name": "black pepper",
                "localizedName": "black pepper",
                "image": "pepper.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 2,
            "step": "Heat nonstick grill skillet until hot.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              },
              {
                "id": 404706,
                "name": "grill",
                "localizedName": "grill",
                "image": "grill.jpg"
              }
            ]
          },
          {
            "number": 3,
            "step": "Add pork chops, pepper side down, and cook about 4 minutes or until browned.Reduce heat to medium, turn pork chops and cook 6-8 minutes longer.When done, take the skillet from the heat, cover the pork chops and set aside.Meanwhile, mix honey, soy sauce, balsamic vinegar and cornstarch until smooth.",
            "ingredients": [
              {
                "id": 2069,
                "name": "balsamic vinegar",
                "localizedName": "balsamic vinegar",
                "image": "balsamic-vinegar.jpg"
              },
              {
                "id": 20027,
                "name": "corn starch",
                "localizedName": "corn starch",
                "image": "white-powder.jpg"
              },
              {
                "id": 10010062,
                "name": "pork chops",
                "localizedName": "pork chops",
                "image": "pork-chops.jpg"
              },
              {
                "id": 16124,
                "name": "soy sauce",
                "localizedName": "soy sauce",
                "image": "soy-sauce.jpg"
              },
              {
                "id": 1002030,
                "name": "pepper",
                "localizedName": "pepper",
                "image": "pepper.jpg"
              },
              {
                "id": 19296,
                "name": "honey",
                "localizedName": "honey",
                "image": "honey.png"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }
            ],
            "length": { "number": 12, "unit": "minutes" }
          },
          {
            "number": 4,
            "step": "Add the cracked pepper, stir.Melt the butter in a small pan, add garlic and cook for 30 seconds, stirring.Stir honey mixture into pan, let it boil, cook for 1 minute, stirring.Spoon sauce over pork chops, sprinkle with fresh chives or green onions.",
            "ingredients": [
              {
                "id": 0,
                "name": "cracked pepper",
                "localizedName": "cracked pepper",
                "image": "pepper.jpg"
              },
              {
                "id": 11156,
                "name": "fresh chives",
                "localizedName": "fresh chives",
                "image": "fresh-chives.jpg"
              },
              {
                "id": 11291,
                "name": "green onions",
                "localizedName": "green onions",
                "image": "spring-onions.jpg"
              },
              {
                "id": 10010062,
                "name": "pork chops",
                "localizedName": "pork chops",
                "image": "pork-chops.jpg"
              },
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              },
              {
                "id": 11215,
                "name": "garlic",
                "localizedName": "garlic",
                "image": "garlic.png"
              },
              {
                "id": 19296,
                "name": "honey",
                "localizedName": "honey",
                "image": "honey.png"
              },
              {
                "id": 0,
                "name": "sauce",
                "localizedName": "sauce",
                "image": ""
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              }
            ],
            "length": { "number": 1, "unit": "minutes" }
          },
          {
            "number": 5,
            "step": "Serve with polenta and green salad.",
            "ingredients": [
              {
                "id": 10035137,
                "name": "polenta",
                "localizedName": "polenta",
                "image": "cornmeal.png"
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 53.889549255371094,
    "spoonacularSourceUrl": "https://spoonacular.com/glazed-pork-chops-644761"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 17,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 14,
    "healthScore": 0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 53.59,
    "extendedIngredients": [
      {
        "id": 20081,
        "aisle": "Baking",
        "image": "flour.png",
        "consistency": "SOLID",
        "name": "all purpose flour",
        "nameClean": "wheat flour",
        "original": "1 cup all purpose flour",
        "originalName": "all purpose flour",
        "amount": 1,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": { "amount": 125, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 18369,
        "aisle": "Baking",
        "image": "white-powder.jpg",
        "consistency": "SOLID",
        "name": "baking powder",
        "nameClean": "baking powder",
        "original": "2 teaspoons baking powder",
        "originalName": "baking powder",
        "amount": 2,
        "unit": "teaspoons",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "tsps", "unitLong": "teaspoons" },
          "metric": {
            "amount": 2,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 1001,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consistency": "SOLID",
        "name": "butter",
        "nameClean": "butter",
        "original": "1/4 cup butter",
        "originalName": "butter",
        "amount": 0.25,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 0.25, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 56.75, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 1001,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consistency": "SOLID",
        "name": "butter",
        "nameClean": "butter",
        "original": "2 tablespoons butter",
        "originalName": "butter",
        "amount": 2,
        "unit": "tablespoons",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 2, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 19081,
        "aisle": "Sweet Snacks",
        "image": "milk-chocolate.jpg",
        "consistency": "SOLID",
        "name": "0% belgium chocolate",
        "nameClean": "milk chocolate",
        "original": "3 1/2 ounces 80% dark Belgium chocolate (cut into small pieces)",
        "originalName": "80% dark Belgium chocolate (cut into small pieces)",
        "amount": 3.5,
        "unit": "ounces",
        "meta": ["dark", "cut into small pieces)"],
        "measures": {
          "us": { "amount": 3.5, "unitShort": "oz", "unitLong": "ounces" },
          "metric": { "amount": 99.223, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 19165,
        "aisle": "Baking",
        "image": "cocoa-powder.png",
        "consistency": "SOLID",
        "name": "cocoa",
        "nameClean": "cacao powder",
        "original": "1/4 cup dark cocoa",
        "originalName": "dark cocoa",
        "amount": 0.25,
        "unit": "cup",
        "meta": ["dark"],
        "measures": {
          "us": { "amount": 0.25, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 21.5, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 1053,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "fluid-cream.jpg",
        "consistency": "LIQUID",
        "name": "5% cream",
        "nameClean": "cream",
        "original": "1/4 cup or more 35% cream",
        "originalName": "or more 35% cream",
        "amount": 0.25,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 0.25, "unitShort": "cups", "unitLong": "cups" },
          "metric": {
            "amount": 59.5,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 1053,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "fluid-cream.jpg",
        "consistency": "LIQUID",
        "name": "5% cream",
        "nameClean": "cream",
        "original": "1/2 cup 35% cream",
        "originalName": "35% cream",
        "amount": 0.5,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "cups", "unitLong": "cups" },
          "metric": {
            "amount": 119,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 18373,
        "aisle": "Spices and Seasonings",
        "image": "white-powder.jpg",
        "consistency": "SOLID",
        "name": "cream of tartar",
        "nameClean": "cream of tartar",
        "original": "1/4 teaspoon cream of tartar",
        "originalName": "cream of tartar",
        "amount": 0.25,
        "unit": "teaspoon",
        "meta": [],
        "measures": {
          "us": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          },
          "metric": {
            "amount": 0.25,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 10019165,
        "aisle": "Baking",
        "image": "dutch-process-cocoa-powder.png",
        "consistency": "SOLID",
        "name": "dutch cocoa",
        "nameClean": "dutch processed cocoa powder",
        "original": "3/4 dark Dutch cocoa",
        "originalName": "dark Dutch cocoa",
        "amount": 0.75,
        "unit": "",
        "meta": ["dark"],
        "measures": {
          "us": { "amount": 0.75, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 0.75, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 1124,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg-white.jpg",
        "consistency": "SOLID",
        "name": "egg whites",
        "nameClean": "egg whites",
        "original": "6 egg whites",
        "originalName": "egg whites",
        "amount": 6,
        "unit": "",
        "meta": [],
        "measures": {
          "us": { "amount": 6, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 6, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 1125,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg-yolk.jpg",
        "consistency": "SOLID",
        "name": "egg yolks",
        "nameClean": "egg yolk",
        "original": "5 egg yolks beaten",
        "originalName": "egg yolks beaten",
        "amount": 5,
        "unit": "",
        "meta": ["beaten"],
        "measures": {
          "us": { "amount": 5, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 5, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 19336,
        "aisle": "Baking",
        "image": "powdered-sugar.jpg",
        "consistency": "SOLID",
        "name": "icing sugar",
        "nameClean": "powdered sugar",
        "original": "2 cups icing sugar",
        "originalName": "icing sugar",
        "amount": 2,
        "unit": "cups",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 240, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "SOLID",
        "name": "salt",
        "nameClean": "table salt",
        "original": "1/2 teaspoon salt",
        "originalName": "salt",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "tsps", "unitLong": "teaspoons" },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 19335,
        "aisle": "Baking",
        "image": "sugar-in-bowl.png",
        "consistency": "SOLID",
        "name": "sugar",
        "nameClean": "sugar",
        "original": "1 cup sugar",
        "originalName": "sugar",
        "amount": 1,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": { "amount": 200, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 19335,
        "aisle": "Baking",
        "image": "sugar-in-bowl.png",
        "consistency": "SOLID",
        "name": "sugar",
        "nameClean": "sugar",
        "original": "cup sugar",
        "originalName": "sugar",
        "amount": 1,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": { "amount": 200, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 1052050,
        "aisle": "Baking",
        "image": "vanilla.jpg",
        "consistency": "SOLID",
        "name": "vanilla",
        "nameClean": "vanilla",
        "original": "1/2 teaspoon vanilla",
        "originalName": "vanilla",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "tsps", "unitLong": "teaspoons" },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 4669,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "vegetable-oil.jpg",
        "consistency": "SOLID",
        "name": "vegetable oil",
        "nameClean": "vegetable oil",
        "original": "cup vegetable oil",
        "originalName": "vegetable oil",
        "amount": 1,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": { "amount": 218, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 14412,
        "aisle": "Beverages",
        "image": "water.png",
        "consistency": "LIQUID",
        "name": "water",
        "nameClean": "water",
        "original": "2/3 cup boiling water",
        "originalName": "boiling water",
        "amount": 0.6666667,
        "unit": "cup",
        "meta": ["boiling"],
        "measures": {
          "us": {
            "amount": 0.6666667,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": {
            "amount": 157.725,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      }
    ],
    "id": 638797,
    "title": "Chocoholic's Deep Dark Dream Chiffon Cake",
    "readyInMinutes": 45,
    "servings": 16,
    "sourceUrl": "http://www.foodista.com/recipe/PVY6548N/chocoholics-deep-dark-dream-chiffon-cake",
    "image": "https://spoonacular.com/recipeImages/638797-556x370.jpg",
    "imageType": "jpg",
    "summary": "The recipe Chocoholic's Deep Dark Dream Chiffon Cake can be made <b>in roughly 45 minutes</b>. This recipe serves 16. One portion of this dish contains approximately <b>4g of protein</b>, <b>15g of fat</b>, and a total of <b>342 calories</b>. For <b>54 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. A few people really liked this dessert. This recipe is liked by 14 foodies and cooks. A mixture of vanilla, water, sugar, and a handful of other ingredients are all it takes to make this recipe so scrumptious. Overall, this recipe earns a <b>not so outstanding spoonacular score of 17%</b>. <a href=\"https://spoonacular.com/recipes/dark-chocolate-chiffon-cake-37486\">Dark Chocolate Chiffon Cake</a>, <a href=\"https://spoonacular.com/recipes/deep-dark-chocolate-cake-463666\">Deep Dark Chocolate Cake</a>, and <a href=\"https://spoonacular.com/recipes/deep-dark-ganache-cake-468584\">Deep & Dark Ganache Cake</a> are very similar to this recipe.",
    "cuisines": [],
    "dishTypes": ["dessert"],
    "diets": [],
    "occasions": [],
    "instructions": "<ol><li>Cake:</li><li>In a bowl add the cocoa and pour in the boiling water. Stir to combine and let cool.</li><li>In a large mixing bowl combine the flour, 1 cup sugar, baking powder and salt.</li><li>In a separate bowl add the 6 egg whites and cream of tartar. With an electric mixer beat the egg whites until soft peaks form, gradually add the 1/3 cup sugar and beat until firm but not dry.</li><li>Make a well in the dry ingredients.</li><li>Add the oil, egg yolks, vanilla and cooled cocoa. Beat until smooth.</li><li>Mix in about a 1/4 of the egg whites to loosen the batter and then fold in the remainder of the egg whites.</li><li>Pour into 2-8 inch prepared cake pans and bake at a preheated 350 F oven for 30-35 minutes. The cake is done when a wooden skewer inserted in the center comes out clean.</li><li>Filling:</li><li>With and electric mixer, blend the sugar, cocoa and butter, add the vanilla and cream. Mix and add more cream to obtain the desired texture.</li><li>Topping:</li><li>In a double boiler or microwave bring the cream to just below the boiling point. Add the chocolate pieces and butter, and with a wooden spoon stir to blend. Allow to cool, this will thicken the ganache gor the topping.</li><li>Assembly:</li><li>With a long knife, slice the cakes in the center to  obtain 4 layers in all.  Sprinkle some Kirsch or other favourite liqueur on the first layer of cake and spread a thin layer of the filling. Place raspberry halves on the filling and place a second layer of cake on top. Continue in the same manner until the remaining 2 layer are filled, leaving the top layer to be iced with the ganache topping.</li></ol>",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Cake:In a bowl add the cocoa and pour in the boiling water. Stir to combine and let cool.In a large mixing bowl combine the flour, 1 cup sugar, baking powder and salt.In a separate bowl add the 6 egg whites and cream of tartar. With an electric mixer beat the egg whites until soft peaks form, gradually add the 1/3 cup sugar and beat until firm but not dry.Make a well in the dry ingredients.",
            "ingredients": [
              {
                "id": 18373,
                "name": "cream of tartar",
                "localizedName": "cream of tartar",
                "image": "white-powder.jpg"
              },
              {
                "id": 18369,
                "name": "baking powder",
                "localizedName": "baking powder",
                "image": "white-powder.jpg"
              },
              {
                "id": 1124,
                "name": "egg whites",
                "localizedName": "egg whites",
                "image": "egg-white.jpg"
              },
              {
                "id": 19165,
                "name": "cocoa powder",
                "localizedName": "cocoa powder",
                "image": "cocoa-powder.png"
              },
              {
                "id": 20081,
                "name": "all purpose flour",
                "localizedName": "all purpose flour",
                "image": "flour.png"
              },
              {
                "id": 19335,
                "name": "sugar",
                "localizedName": "sugar",
                "image": "sugar-in-bowl.png"
              },
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404628,
                "name": "hand mixer",
                "localizedName": "hand mixer",
                "image": "hand-mixer.png"
              },
              {
                "id": 405907,
                "name": "mixing bowl",
                "localizedName": "mixing bowl",
                "image": "mixing-bowl.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Add the oil, egg yolks, vanilla and cooled cocoa. Beat until smooth.",
            "ingredients": [
              {
                "id": 1125,
                "name": "egg yolk",
                "localizedName": "egg yolk",
                "image": "egg-yolk.jpg"
              },
              {
                "id": 1052050,
                "name": "vanilla",
                "localizedName": "vanilla",
                "image": "vanilla.jpg"
              },
              {
                "id": 19165,
                "name": "cocoa powder",
                "localizedName": "cocoa powder",
                "image": "cocoa-powder.png"
              },
              {
                "id": 4582,
                "name": "cooking oil",
                "localizedName": "cooking oil",
                "image": "vegetable-oil.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 3,
            "step": "Mix in about a 1/4 of the egg whites to loosen the batter and then fold in the remainder of the egg whites.",
            "ingredients": [
              {
                "id": 1124,
                "name": "egg whites",
                "localizedName": "egg whites",
                "image": "egg-white.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Pour into 2-8 inch prepared cake pans and bake at a preheated 350 F oven for 30-35 minutes. The cake is done when a wooden skewer inserted in the center comes out clean.Filling:With and electric mixer, blend the sugar, cocoa and butter, add the vanilla and cream.",
            "ingredients": [
              {
                "id": 1052050,
                "name": "vanilla",
                "localizedName": "vanilla",
                "image": "vanilla.jpg"
              },
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              },
              {
                "id": 19165,
                "name": "cocoa powder",
                "localizedName": "cocoa powder",
                "image": "cocoa-powder.png"
              },
              {
                "id": 1053,
                "name": "cream",
                "localizedName": "cream",
                "image": "fluid-cream.jpg"
              },
              {
                "id": 19335,
                "name": "sugar",
                "localizedName": "sugar",
                "image": "sugar-in-bowl.png"
              }
            ],
            "equipment": [
              {
                "id": 404628,
                "name": "hand mixer",
                "localizedName": "hand mixer",
                "image": "hand-mixer.png"
              },
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg",
                "temperature": { "number": 350, "unit": "Fahrenheit" }
              },
              {
                "id": 3065,
                "name": "skewers",
                "localizedName": "skewers",
                "image": "wooden-skewers.jpg"
              }
            ],
            "length": { "number": 35, "unit": "minutes" }
          },
          {
            "number": 5,
            "step": "Mix and add more cream to obtain the desired texture.Topping:In a double boiler or microwave bring the cream to just below the boiling point.",
            "ingredients": [
              {
                "id": 1053,
                "name": "cream",
                "localizedName": "cream",
                "image": "fluid-cream.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404699,
                "name": "double boiler",
                "localizedName": "double boiler",
                "image": "double-boiler.jpg"
              },
              {
                "id": 404762,
                "name": "microwave",
                "localizedName": "microwave",
                "image": "microwave.jpg"
              }
            ]
          },
          {
            "number": 6,
            "step": "Add the chocolate pieces and butter, and with a wooden spoon stir to blend. Allow to cool, this will thicken the ganache gor the topping.Assembly:With a long knife, slice the cakes in the center to  obtain 4 layers in all.",
            "ingredients": [
              {
                "id": 19081,
                "name": "chocolate",
                "localizedName": "chocolate",
                "image": "milk-chocolate.jpg"
              },
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404732,
                "name": "wooden spoon",
                "localizedName": "wooden spoon",
                "image": "wooden-spoon.jpg"
              },
              {
                "id": 404745,
                "name": "knife",
                "localizedName": "knife",
                "image": "chefs-knife.jpg"
              }
            ]
          },
          {
            "number": 7,
            "step": "Sprinkle some Kirsch or other favourite liqueur on the first layer of cake and spread a thin layer of the filling.",
            "ingredients": [
              {
                "id": 0,
                "name": "liqueur",
                "localizedName": "liqueur",
                "image": "rum-dark.jpg"
              },
              {
                "id": 10614037,
                "name": "kirsch",
                "localizedName": "kirsch",
                "image": "white-rum.jpg"
              },
              {
                "id": 0,
                "name": "spread",
                "localizedName": "spread",
                "image": ""
              }
            ],
            "equipment": []
          },
          {
            "number": 8,
            "step": "Place raspberry halves on the filling and place a second layer of cake on top. Continue in the same manner until the remaining 2 layer are filled, leaving the top layer to be iced with the ganache topping.",
            "ingredients": [
              {
                "id": 9302,
                "name": "raspberries",
                "localizedName": "raspberries",
                "image": "raspberries.jpg"
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 5.561451435089111,
    "spoonacularSourceUrl": "https://spoonacular.com/chocoholics-deep-dark-dream-chiffon-cake-638797"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 14,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 3,
    "healthScore": 49,
    "creditsText": "foodista.com",
    "sourceName": "foodista.com",
    "pricePerServing": 273.93,
    "extendedIngredients": [
      {
        "id": 9316,
        "aisle": "Produce",
        "image": "strawberries.png",
        "consistency": "SOLID",
        "name": "strawberries",
        "nameClean": "strawberries",
        "original": "Sliced strawberries",
        "originalName": "Sliced strawberries",
        "amount": 1,
        "unit": "serving",
        "meta": ["sliced"],
        "measures": {
          "us": { "amount": 1, "unitShort": "serving", "unitLong": "serving" },
          "metric": {
            "amount": 1,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      },
      {
        "id": 99278,
        "aisle": "Baking",
        "image": "chocolate-chips.jpg",
        "consistency": "SOLID",
        "name": "chocolate chips- handful",
        "nameClean": "chocolate chips",
        "original": "Chocolate chips- handful",
        "originalName": "Chocolate chips- handful",
        "amount": 1,
        "unit": "serving",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "serving", "unitLong": "serving" },
          "metric": {
            "amount": 1,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      },
      {
        "id": 10118029,
        "aisle": "Bakery/Bread",
        "image": "sourdough-bread.jpg",
        "consistency": "SOLID",
        "name": "sourdough bread",
        "nameClean": "sourdough bread",
        "original": "2 slices of sourdough bread",
        "originalName": "sourdough bread",
        "amount": 2,
        "unit": "slices",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "slice", "unitLong": "slices" },
          "metric": { "amount": 2, "unitShort": "slice", "unitLong": "slices" }
        }
      },
      {
        "id": 4053,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "olive-oil.jpg",
        "consistency": "SOLID",
        "name": "olive oil and brush",
        "nameClean": "olive oil",
        "original": "Olive oil and brush",
        "originalName": "Olive oil and brush",
        "amount": 1,
        "unit": "serving",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "serving", "unitLong": "serving" },
          "metric": {
            "amount": 1,
            "unitShort": "serving",
            "unitLong": "serving"
          }
        }
      }
    ],
    "id": 661741,
    "title": "Strawberry and Chocolate Chip Panini",
    "readyInMinutes": 45,
    "servings": 1,
    "sourceUrl": "https://www.foodista.com/recipe/K56CFWZB/strawberry-and-chocolate-chip-panini",
    "image": "https://spoonacular.com/recipeImages/661741-556x370.jpg",
    "imageType": "jpg",
    "summary": "Strawberry and Chocolate Chip Panini requires about <b>45 minutes</b> from start to finish. Watching your figure? This dairy free recipe has <b>523 calories</b>, <b>15g of protein</b>, and <b>18g of fat</b> per serving. For <b>$2.74 per serving</b>, you get a main course that serves 1. This recipe from Foodista requires strawberries, chocolate chips- handful, sourdough bread, and olive oil and brush. 3 people were impressed by this recipe. It can be enjoyed any time, but it is especially good for <b>Mother's Day</b>. Overall, this recipe earns a <b>solid spoonacular score of 66%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/chocolate-chocolate-chip-cookie-and-strawberry-gelato-sandwiches-189907\">Chocolate-Chocolate Chip Cookie and Strawberry Gelato Sandwiches</a>, <a href=\"https://spoonacular.com/recipes/chocolate-dipped-strawberry-chocolate-chip-cookies-705113\">Chocolate-Dipped Strawberry Chocolate Chip Cookies</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-chocolate-chip-scones-1137428\">Strawberry Chocolate Chip Scones</a>.",
    "cuisines": [],
    "dishTypes": ["lunch", "main course", "main dish", "dinner"],
    "diets": ["dairy free"],
    "occasions": ["mother's day"],
    "instructions": "Open up the slices of sourdough bread\nBrush it wit some olive oil on either side\nAdd a layer of strawberries and chocolate chips\nPut it in the panini press!\nServe it hot with a side of fresh cut berries!",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Open up the slices of sourdough bread",
            "ingredients": [
              {
                "id": 10118029,
                "name": "sourdough bread",
                "localizedName": "sourdough bread",
                "image": "sourdough-bread.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 2,
            "step": "Brush it wit some olive oil on either side",
            "ingredients": [
              {
                "id": 4053,
                "name": "olive oil",
                "localizedName": "olive oil",
                "image": "olive-oil.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 3,
            "step": "Add a layer of strawberries and chocolate chips",
            "ingredients": [
              {
                "id": 99278,
                "name": "chocolate chips",
                "localizedName": "chocolate chips",
                "image": "chocolate-chips.jpg"
              },
              {
                "id": 9316,
                "name": "strawberries",
                "localizedName": "strawberries",
                "image": "strawberries.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Put it in the panini press!",
            "ingredients": [],
            "equipment": [
              {
                "id": 415613,
                "name": "panini press",
                "localizedName": "panini press",
                "image": "panini-maker.jpg"
              }
            ]
          },
          {
            "number": 5,
            "step": "Serve it hot with a side of fresh cut berries!",
            "ingredients": [
              {
                "id": 1009054,
                "name": "berries",
                "localizedName": "berries",
                "image": "berries-mixed.jpg"
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 90.93321228027344,
    "spoonacularSourceUrl": "https://spoonacular.com/strawberry-and-chocolate-chip-panini-661741"
  },
  {
    "vegetarian": true,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 14,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 295,
    "healthScore": 35,
    "creditsText": "Lisa's Vegetarian Kitchen",
    "license": "CC BY 2.5 CA",
    "sourceName": "Food and Spice",
    "pricePerServing": 318.98,
    "extendedIngredients": [
      {
        "id": 20090,
        "aisle": "Gluten Free",
        "image": "brown-flour.jpg",
        "consistency": "SOLID",
        "name": "brown rice flour",
        "nameClean": "brown rice flour",
        "original": "1 1/3 cups brown rice flour",
        "originalName": "brown rice flour",
        "amount": 1.3333334,
        "unit": "cups",
        "meta": [],
        "measures": {
          "us": {
            "amount": 1.3333334,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": { "amount": 210.667, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 19334,
        "aisle": "Baking",
        "image": "light-brown-sugar.jpg",
        "consistency": "SOLID",
        "name": "brown sugar",
        "nameClean": "golden brown sugar",
        "original": "1/2 tablespoon brown sugar",
        "originalName": "brown sugar",
        "amount": 0.5,
        "unit": "tablespoon",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 0.5, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 19334,
        "aisle": "Baking",
        "image": "dark-brown-sugar.png",
        "consistency": "SOLID",
        "name": "brown sugar",
        "nameClean": "golden brown sugar",
        "original": "1/2 tablespoon brown sugar",
        "originalName": "brown sugar",
        "amount": 0.5,
        "unit": "tablespoon",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 0.5, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 11124,
        "aisle": "Produce",
        "image": "sliced-carrot.png",
        "consistency": "SOLID",
        "name": "carrot",
        "nameClean": "carrot",
        "original": "1 large carrot, scrubbed and grated",
        "originalName": "carrot, scrubbed and grated",
        "amount": 1,
        "unit": "large",
        "meta": ["grated", "scrubbed"],
        "measures": {
          "us": { "amount": 1, "unitShort": "large", "unitLong": "large" },
          "metric": { "amount": 1, "unitShort": "large", "unitLong": "large" }
        }
      },
      {
        "id": 2031,
        "aisle": "Spices and Seasonings",
        "image": "chili-powder.jpg",
        "consistency": "SOLID",
        "name": "cayenne",
        "nameClean": "ground cayenne pepper",
        "original": "pinch of cayenne",
        "originalName": "pinch of cayenne",
        "amount": 1,
        "unit": "pinch",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "pinch", "unitLong": "pinch" },
          "metric": { "amount": 1, "unitShort": "pinch", "unitLong": "pinch" }
        }
      },
      {
        "id": 12118,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "coconut-milk.png",
        "consistency": "LIQUID",
        "name": "coconut milk",
        "nameClean": "coconut milk",
        "original": "1 3/4 cups of coconut milk + water if needed",
        "originalName": "coconut milk + water if needed",
        "amount": 1.75,
        "unit": "cups",
        "meta": [],
        "measures": {
          "us": { "amount": 1.75, "unitShort": "cups", "unitLong": "cups" },
          "metric": {
            "amount": 395.5,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 11430,
        "aisle": "Produce",
        "image": "daikon.jpg",
        "consistency": "SOLID",
        "name": "daikon radish",
        "nameClean": "daikon radish",
        "original": "1 medium daikon radish, scrubbed and grated",
        "originalName": "daikon radish, scrubbed and grated",
        "amount": 1,
        "unit": "medium",
        "meta": ["grated", "scrubbed"],
        "measures": {
          "us": { "amount": 1, "unitShort": "medium", "unitLong": "medium" },
          "metric": { "amount": 1, "unitShort": "medium", "unitLong": "medium" }
        }
      },
      {
        "id": 1123,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg.png",
        "consistency": "SOLID",
        "name": "egg",
        "nameClean": "egg",
        "original": "1 egg, beaten",
        "originalName": "egg, beaten",
        "amount": 1,
        "unit": "",
        "meta": ["beaten"],
        "measures": {
          "us": { "amount": 1, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 1, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 11950,
        "aisle": "Produce",
        "image": "enoki-mushrooms.jpg",
        "consistency": "SOLID",
        "name": "enoki mushrooms",
        "nameClean": "enoki mushrooms",
        "original": "1 cup enoki mushrooms, trimmed",
        "originalName": "enoki mushrooms, trimmed",
        "amount": 1,
        "unit": "cup",
        "meta": ["trimmed"],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": {
            "amount": 65,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 2044,
        "aisle": "Produce",
        "image": "fresh-basil.jpg",
        "consistency": "SOLID",
        "name": "basil leaves",
        "nameClean": "fresh basil",
        "original": "2/3 cup fresh basil leaves, roughly chopped",
        "originalName": "fresh basil leaves, roughly chopped",
        "amount": 0.6666667,
        "unit": "cup",
        "meta": ["fresh", "roughly chopped"],
        "measures": {
          "us": {
            "amount": 0.6666667,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": { "amount": 16, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 2044,
        "aisle": "Produce",
        "image": "basil.jpg",
        "consistency": "SOLID",
        "name": "basil leaves",
        "nameClean": "fresh basil",
        "original": "2/3 cup fresh basil leaves, roughly chopped",
        "originalName": "fresh basil leaves, roughly chopped",
        "amount": 0.6666667,
        "unit": "cup",
        "meta": ["fresh", "roughly chopped"],
        "measures": {
          "us": {
            "amount": 0.6666667,
            "unitShort": "cups",
            "unitLong": "cups"
          },
          "metric": { "amount": 16, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 10211216,
        "aisle": "Produce",
        "image": "ginger.png",
        "consistency": "SOLID",
        "name": "ginger",
        "nameClean": "fresh ginger",
        "original": "1-inch piece fresh ginger, grated",
        "originalName": "fresh ginger, grated",
        "amount": 1,
        "unit": "inch",
        "meta": ["fresh", "grated"],
        "measures": {
          "us": { "amount": 1, "unitShort": "inch", "unitLong": "inch" },
          "metric": { "amount": 1, "unitShort": "inch", "unitLong": "inch" }
        }
      },
      {
        "id": 2064,
        "aisle": "Produce",
        "image": "mint.jpg",
        "consistency": "SOLID",
        "name": "mint leaves",
        "nameClean": "mint",
        "original": "1/4 cup fresh mint leaves, trimmed and roughly chopped",
        "originalName": "fresh mint leaves, trimmed and roughly chopped",
        "amount": 0.25,
        "unit": "cup",
        "meta": ["fresh", "trimmed", "roughly chopped"],
        "measures": {
          "us": { "amount": 0.25, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 11.25, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 10511297,
        "aisle": "Produce",
        "image": "parsley.jpg",
        "consistency": "SOLID",
        "name": "parsley",
        "nameClean": "fresh parsley",
        "original": "1 cup fresh parsley or cilantro, roughly chopped",
        "originalName": "fresh parsley or cilantro, roughly chopped",
        "amount": 1,
        "unit": "cup",
        "meta": ["fresh", "roughly chopped"],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": { "amount": 60, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 11215,
        "aisle": "Produce",
        "image": "garlic.png",
        "consistency": "SOLID",
        "name": "garlic",
        "nameClean": "garlic",
        "original": "1 clove garlic, crushed",
        "originalName": "garlic, crushed",
        "amount": 1,
        "unit": "clove",
        "meta": ["crushed"],
        "measures": {
          "us": { "amount": 1, "unitShort": "clove", "unitLong": "clove" },
          "metric": { "amount": 1, "unitShort": "clove", "unitLong": "clove" }
        }
      },
      {
        "id": 31015,
        "aisle": "Produce",
        "image": "chili-peppers-green.jpg",
        "consistency": "SOLID",
        "name": "chili",
        "nameClean": "green chili pepper",
        "original": "1 fresh green chili, seeded and minced",
        "originalName": "fresh green chili, seeded and minced",
        "amount": 1,
        "unit": "",
        "meta": ["fresh", "green", "minced", "seeded"],
        "measures": {
          "us": { "amount": 1, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 1, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 31015,
        "aisle": "Produce",
        "image": "chili-peppers-green.jpg",
        "consistency": "SOLID",
        "name": "chilies",
        "nameClean": "green chili pepper",
        "original": "2 fresh green chilies, seeded and sliced into small strips",
        "originalName": "fresh green chilies, seeded and sliced into small strips",
        "amount": 2,
        "unit": "",
        "meta": ["fresh", "green", "seeded", "sliced into small strips"],
        "measures": {
          "us": { "amount": 2, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 2, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 11291,
        "aisle": "Produce",
        "image": "spring-onions.jpg",
        "consistency": "SOLID",
        "name": "green onions",
        "nameClean": "spring onions",
        "original": "4 green onions, washed and cut on an angle",
        "originalName": "green onions, washed and cut on an angle",
        "amount": 4,
        "unit": "",
        "meta": ["washed and cut on an angle"],
        "measures": {
          "us": { "amount": 4, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 4, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 9160,
        "aisle": "Produce",
        "image": "lime-juice.png",
        "consistency": "LIQUID",
        "name": "juice of lime",
        "nameClean": "lime juice",
        "original": "juice from 2 limes",
        "originalName": "juice from limes",
        "amount": 2,
        "unit": "",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 2, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 10011043,
        "aisle": "Ethnic Foods",
        "image": "bean-sprouts.jpg",
        "consistency": "SOLID",
        "name": "mung bean sprouts",
        "nameClean": "mung bean sprouts",
        "original": "1 cup mung bean sprouts (see note below)",
        "originalName": "mung bean sprouts (see note below)",
        "amount": 1,
        "unit": "cup",
        "meta": ["(see note below)"],
        "measures": {
          "us": { "amount": 1, "unitShort": "cup", "unitLong": "cup" },
          "metric": {
            "amount": 104,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 10511819,
        "aisle": "Produce",
        "image": "red-chili.jpg",
        "consistency": "SOLID",
        "name": "chilies",
        "nameClean": "red chili pepper",
        "original": "2 fresh red chilies, seeded and minced",
        "originalName": "fresh red chilies, seeded and minced",
        "amount": 2,
        "unit": "",
        "meta": ["fresh", "red", "minced", "seeded"],
        "measures": {
          "us": { "amount": 2, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 2, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 1022053,
        "aisle": "Ethnic Foods",
        "image": "rice-vinegar.png",
        "consistency": "LIQUID",
        "name": "rice vinegar",
        "nameClean": "rice vinegar",
        "original": "1 tablespoon rice vinegar",
        "originalName": "rice vinegar",
        "amount": 1,
        "unit": "tablespoon",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" },
          "metric": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" }
        }
      },
      {
        "id": 1012047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "SOLID",
        "name": "sea salt",
        "nameClean": "coarse sea salt",
        "original": "1/2 teaspoon sea salt",
        "originalName": "sea salt",
        "amount": 0.5,
        "unit": "teaspoon",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "tsps", "unitLong": "teaspoons" },
          "metric": {
            "amount": 0.5,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 4058,
        "aisle": "Ethnic Foods",
        "image": "sesame-oil.png",
        "consistency": "SOLID",
        "name": "sesame oil",
        "nameClean": "sesame oil",
        "original": "1 1/2 tablespoons toasted sesame oil",
        "originalName": "toasted sesame oil",
        "amount": 1.5,
        "unit": "tablespoons",
        "meta": ["toasted"],
        "measures": {
          "us": { "amount": 1.5, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 1.5, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 4058,
        "aisle": "Ethnic Foods",
        "image": "sesame-oil.png",
        "consistency": "SOLID",
        "name": "sesame oil",
        "nameClean": "sesame oil",
        "original": "sesame oil for frying",
        "originalName": "sesame oil for frying",
        "amount": 6,
        "unit": "servings",
        "meta": ["for frying"],
        "measures": {
          "us": {
            "amount": 6,
            "unitShort": "servings",
            "unitLong": "servings"
          },
          "metric": {
            "amount": 6,
            "unitShort": "servings",
            "unitLong": "servings"
          }
        }
      },
      {
        "id": 11300,
        "aisle": "Produce",
        "image": "snow-peas.jpg",
        "consistency": "SOLID",
        "name": "snow peas",
        "nameClean": "snow peas",
        "original": "1 1/2 cups snow peas, sliced into small strips",
        "originalName": "snow peas, sliced into small strips",
        "amount": 1.5,
        "unit": "cups",
        "meta": ["sliced into small strips"],
        "measures": {
          "us": { "amount": 1.5, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 147, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 10116124,
        "aisle": "Ethnic Foods",
        "image": "soy-sauce.jpg",
        "consistency": "LIQUID",
        "name": "tamari sauce",
        "nameClean": "tamari",
        "original": "1 tablespoon tamari sauce",
        "originalName": "tamari sauce",
        "amount": 1,
        "unit": "tablespoon",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" },
          "metric": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" }
        }
      },
      {
        "id": 2043,
        "aisle": "Spices and Seasonings",
        "image": "turmeric.jpg",
        "consistency": "SOLID",
        "name": "turmeric",
        "nameClean": "turmeric",
        "original": "1 teaspoon turmeric",
        "originalName": "turmeric",
        "amount": 1,
        "unit": "teaspoon",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "tsp", "unitLong": "teaspoon" },
          "metric": { "amount": 1, "unitShort": "tsp", "unitLong": "teaspoon" }
        }
      }
    ],
    "id": 716217,
    "title": "Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo)",
    "readyInMinutes": 45,
    "servings": 6,
    "sourceUrl": "http://foodandspice.blogspot.com/2012/05/vietnamese-pancakes-with-vegetables.html",
    "image": "https://spoonacular.com/recipeImages/716217-556x370.jpg",
    "imageType": "jpg",
    "summary": "Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo) requires roughly <b>45 minutes</b> from start to finish. One serving contains <b>390 calories</b>, <b>8g of protein</b>, and <b>22g of fat</b>. This gluten free, dairy free, and lacto ovo vegetarian recipe serves 6 and costs <b>$3.19 per serving</b>. Head to the store and pick up chilies, rice vinegar, enoki mushrooms, and a few other things to make it today. 295 people found this recipe to be yummy and satisfying. It works well as a side dish. Plenty of people really liked this Vietnamese dish. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns an <b>awesome spoonacular score of 94%</b>. Similar recipes include <a href=\"https://spoonacular.com/recipes/bnh-xo-vietnamese-happy-pancakes-891106\">Bánh xèo (Vietnamese Happy Pancakes)</a>, <a href=\"https://spoonacular.com/recipes/banh-xeo-bnh-xo-savory-vietnamese-crpe-1000958\">Banh Xeo (Bánh Xèo) – Savory Vietnamese Crêpe</a>, and <a href=\"https://spoonacular.com/recipes/banh-xeo-vietnamese-crepes-1661759\">Banh Xeo (Vietnamese Crepes)</a>.",
    "cuisines": ["Vietnamese", "Asian"],
    "dishTypes": ["side dish"],
    "diets": ["gluten free", "dairy free", "lacto ovo vegetarian"],
    "occasions": [],
    "instructions": "Begin by preparing the pancake batter. Whisk together the rice flour, egg, sea salt, turmeric, cayenne and green chili. Gradually whisk in the coconut milk. The mixture should be a smooth, semi-thick batter that is of pouring consistency. Add a little water if necessary. Cover and set aside while you prepare the rest of the food.Now prepare the sauce. Whisk together all of the ingredients and set aside.For the filling, combine the carrot, radish, green onions, green chilies and snow peas. Put the herbs in another bowl and have your sprouts ready along with the mushrooms.Heat a teaspoon of oil over medium heat in a non-stick skillet. When hot, ladle 1/2 cup of batter into the pan and spread with the bottom of the ladle until you have a roughly 6 to 8 inch pancake.  Fry for 6 to 8 minutes or until you have small holes forming and the bottom is crispy brown, then flip and fry for another few minutes on the other side. Transfer to a plate and keep warm in a 150 oven while you finish the rest of the pancakes  you should finish with 4 to 6 pancakes.To serve, scatter a portion of the vegetables, herbs and mushrooms over one half of the pancake. Sprinkle some sauce over top and fold the pancake. Drizzle with more sauce and there you go.",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Begin by preparing the pancake batter.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 2,
            "step": "Whisk together the rice flour, egg, sea salt, turmeric, cayenne and green chili. Gradually whisk in the coconut milk. The mixture should be a smooth, semi-thick batter that is of pouring consistency.",
            "ingredients": [
              {
                "id": 12118,
                "name": "coconut milk",
                "localizedName": "coconut milk",
                "image": "coconut-milk.png"
              },
              {
                "id": 31015,
                "name": "green chili pepper",
                "localizedName": "green chili pepper",
                "image": "chili-peppers-green.jpg"
              },
              {
                "id": 20061,
                "name": "rice flour",
                "localizedName": "rice flour",
                "image": "white-powder.jpg"
              },
              {
                "id": 1012047,
                "name": "sea salt",
                "localizedName": "sea salt",
                "image": "salt.jpg"
              },
              {
                "id": 2043,
                "name": "turmeric",
                "localizedName": "turmeric",
                "image": "turmeric.jpg"
              },
              {
                "id": 2031,
                "name": "ground cayenne pepper",
                "localizedName": "ground cayenne pepper",
                "image": "chili-powder.jpg"
              },
              {
                "id": 1123,
                "name": "egg",
                "localizedName": "egg",
                "image": "egg.png"
              }
            ],
            "equipment": [
              {
                "id": 404661,
                "name": "whisk",
                "localizedName": "whisk",
                "image": "whisk.png"
              }
            ]
          },
          {
            "number": 3,
            "step": "Add a little water if necessary. Cover and set aside while you prepare the rest of the food.Now prepare the sauce.",
            "ingredients": [
              {
                "id": 0,
                "name": "sauce",
                "localizedName": "sauce",
                "image": ""
              },
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Whisk together all of the ingredients and set aside.For the filling, combine the carrot, radish, green onions, green chilies and snow peas.",
            "ingredients": [
              {
                "id": 31015,
                "name": "green chili pepper",
                "localizedName": "green chili pepper",
                "image": "chili-peppers-green.jpg"
              },
              {
                "id": 11291,
                "name": "green onions",
                "localizedName": "green onions",
                "image": "spring-onions.jpg"
              },
              {
                "id": 11300,
                "name": "snow peas",
                "localizedName": "snow peas",
                "image": "snow-peas.jpg"
              },
              {
                "id": 11124,
                "name": "carrot",
                "localizedName": "carrot",
                "image": "sliced-carrot.png"
              },
              {
                "id": 11429,
                "name": "radish",
                "localizedName": "radish",
                "image": "radishes.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404661,
                "name": "whisk",
                "localizedName": "whisk",
                "image": "whisk.png"
              }
            ]
          },
          {
            "number": 5,
            "step": "Put the herbs in another bowl and have your sprouts ready along with the mushrooms.",
            "ingredients": [
              {
                "id": 11260,
                "name": "mushrooms",
                "localizedName": "mushrooms",
                "image": "mushrooms.png"
              },
              {
                "id": 11001,
                "name": "sprouts",
                "localizedName": "sprouts",
                "image": "alfalfa-sprouts.png"
              },
              {
                "id": 1002044,
                "name": "herbs",
                "localizedName": "herbs",
                "image": "mixed-fresh-herbs.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 6,
            "step": "Heat a teaspoon of oil over medium heat in a non-stick skillet. When hot, ladle 1/2 cup of batter into the pan and spread with the bottom of the ladle until you have a roughly 6 to 8 inch pancake.  Fry for 6 to 8 minutes or until you have small holes forming and the bottom is crispy brown, then flip and fry for another few minutes on the other side.",
            "ingredients": [
              {
                "id": 0,
                "name": "spread",
                "localizedName": "spread",
                "image": ""
              },
              {
                "id": 4582,
                "name": "cooking oil",
                "localizedName": "cooking oil",
                "image": "vegetable-oil.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404645,
                "name": "frying pan",
                "localizedName": "frying pan",
                "image": "pan.png"
              },
              {
                "id": 404630,
                "name": "ladle",
                "localizedName": "ladle",
                "image": "ladle.jpg"
              }
            ],
            "length": { "number": 6, "unit": "minutes" }
          },
          {
            "number": 7,
            "step": "Transfer to a plate and keep warm in a 150 oven while you finish the rest of the pancakes  you should finish with 4 to 6 pancakes.To serve, scatter a portion of the vegetables, herbs and mushrooms over one half of the pancake.",
            "ingredients": [
              {
                "id": 11583,
                "name": "vegetable",
                "localizedName": "vegetable",
                "image": "mixed-vegetables.png"
              },
              {
                "id": 11260,
                "name": "mushrooms",
                "localizedName": "mushrooms",
                "image": "mushrooms.png"
              },
              {
                "id": 1002044,
                "name": "herbs",
                "localizedName": "herbs",
                "image": "mixed-fresh-herbs.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ]
          },
          {
            "number": 8,
            "step": "Sprinkle some sauce over top and fold the pancake.",
            "ingredients": [
              {
                "id": 0,
                "name": "sauce",
                "localizedName": "sauce",
                "image": ""
              }
            ],
            "equipment": []
          },
          {
            "number": 9,
            "step": "Drizzle with more sauce and there you go.",
            "ingredients": [
              {
                "id": 0,
                "name": "sauce",
                "localizedName": "sauce",
                "image": ""
              }
            ],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 94.97291564941406,
    "spoonacularSourceUrl": "https://spoonacular.com/vietnamese-pancakes-with-vegetables-herbs-and-a-fragrant-dipping-sauce-bnh-xo-716217"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": true,
    "weightWatcherSmartPoints": 24,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 2,
    "healthScore": 9,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 117.66,
    "extendedIngredients": [
      {
        "id": 12117,
        "aisle": "Canned and Jarred",
        "image": "coconut-milk.png",
        "consistency": "LIQUID",
        "name": "coconut milk",
        "nameClean": "unsweetened coconut milk",
        "original": "1 can coconut milk",
        "originalName": "coconut milk",
        "amount": 1,
        "unit": "can",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "can", "unitLong": "can" },
          "metric": { "amount": 1, "unitShort": "can", "unitLong": "can" }
        }
      },
      {
        "id": 10014412,
        "aisle": "Frozen",
        "image": "ice-cubes.png",
        "consistency": "SOLID",
        "name": "ice tray",
        "nameClean": "ice",
        "original": "Ice cube tray",
        "originalName": "Ice tray",
        "amount": 1,
        "unit": "cube",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "cube", "unitLong": "cube" },
          "metric": { "amount": 1, "unitShort": "cube", "unitLong": "cube" }
        }
      },
      {
        "id": 9040,
        "aisle": "Produce",
        "image": "bananas.jpg",
        "consistency": "SOLID",
        "name": "bananas",
        "nameClean": "banana",
        "original": "2 frozen bananas",
        "originalName": "frozen bananas",
        "amount": 2,
        "unit": "",
        "meta": ["frozen"],
        "measures": {
          "us": { "amount": 2, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 2, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 10019071,
        "aisle": "Baking",
        "image": "chocolate-chips.jpg",
        "consistency": "SOLID",
        "name": "chocolate chips",
        "nameClean": "dark chocolate chips",
        "original": "3 tbsp. dark chocolate chips",
        "originalName": "dark chocolate chips",
        "amount": 3,
        "unit": "tbsp",
        "meta": ["dark"],
        "measures": {
          "us": { "amount": 3, "unitShort": "Tbsps", "unitLong": "Tbsps" },
          "metric": { "amount": 3, "unitShort": "Tbsps", "unitLong": "Tbsps" }
        }
      },
      {
        "id": 4047,
        "aisle": "Baking",
        "image": "oil-coconut.jpg",
        "consistency": "SOLID",
        "name": "coconut oil",
        "nameClean": "coconut oil",
        "original": "1 tbsp. coconut oil",
        "originalName": "coconut oil",
        "amount": 1,
        "unit": "tbsp",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" },
          "metric": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" }
        }
      },
      {
        "id": 10012108,
        "aisle": "Baking",
        "image": "shredded-coconut.jpg",
        "consistency": "SOLID",
        "name": "coconut",
        "nameClean": "unsweetened shredded coconut",
        "original": "1 tbsp. unsweetened shredded coconut",
        "originalName": "unsweetened shredded coconut",
        "amount": 1,
        "unit": "tbsp",
        "meta": ["shredded", "unsweetened"],
        "measures": {
          "us": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" },
          "metric": { "amount": 1, "unitShort": "Tbsp", "unitLong": "Tbsp" }
        }
      }
    ],
    "id": 663348,
    "title": "The Ultimate Frozen Coconut ‘Ice Cream’ with Hard Shell Chocolate Sauce",
    "readyInMinutes": 45,
    "servings": 3,
    "sourceUrl": "https://www.foodista.com/recipe/6N3PXD6J/the-ultimate-frozen-coconut-ice-cream-with-hard-shell-chocolate-sauce",
    "image": "https://spoonacular.com/recipeImages/663348-556x370.jpg",
    "imageType": "jpg",
    "summary": "The Ultimate Frozen Coconut ‘Ice Cream’ with Hard Shell Chocolate Sauce is a dessert that serves 3. For <b>$1.18 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains approximately <b>5g of protein</b>, <b>43g of fat</b>, and a total of <b>512 calories</b>. Only a few people made this recipe, and 2 would say it hit the spot. It can be enjoyed any time, but it is especially good for <b>Summer</b>. Head to the store and pick up coconut, chocolate chips, bananas, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and fodmap friendly</b> diet. Overall, this recipe earns a <b>good spoonacular score of 46%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/the-ultimate-frozen-coconut-ice-cream-with-hard-shell-chocolate-sauce-1404511\">The Ultimate Frozen Coconut ‘Ice Cream’ with Hard Shell Chocolate Sauce</a>, <a href=\"https://spoonacular.com/recipes/hard-shell-ice-cream-sauce-415052\">Hard-Shell Ice Cream Sauce</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-ice-cream-with-a-hard-chocolate-shell-207506\">Peanut Butter Ice Cream with a Hard Chocolate Shell</a>.",
    "cuisines": [],
    "dishTypes": ["dessert"],
    "diets": ["gluten free", "dairy free", "paleolithic", "fodmap friendly"],
    "occasions": ["summer"],
    "instructions": "Pour coconut milk into an ice cube tray and put into the freezer for a few hours.\nRemove 6 coconut cubes from the freezer and 2 bananas.\nLet thaw for 15 minutes.\nAdd ingredients into the Yonana, alternating between banana and coconut cubes\nOnce ingredients have been processed through, you should have a product similar to mine below.\nPortion 3 servings into ramekins and put into the freezer as you prepare the topping.\nFor the chocolate sauce: in a microwave safe bowl combine coconut oil and chocolate chips.\nMicrowave for 1 minute (stirring halfway).\nRemove the ramekins from freezer and immediately pour chocolate sauce onto them.\nImmediately top with shredded coconut.\nServe and enjoy!",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Pour coconut milk into an ice cube tray and put into the freezer for a few hours.",
            "ingredients": [
              {
                "id": 12118,
                "name": "coconut milk",
                "localizedName": "coconut milk",
                "image": "coconut-milk.png"
              },
              {
                "id": 10014412,
                "name": "ice cubes",
                "localizedName": "ice cubes",
                "image": "ice-cubes.png"
              }
            ],
            "equipment": [
              {
                "id": 406911,
                "name": "ice cube tray",
                "localizedName": "ice cube tray",
                "image": "ice-cube-tray.jpg"
              }
            ]
          },
          {
            "number": 2,
            "step": "Remove 6 coconut cubes from the freezer and 2 bananas.",
            "ingredients": [
              {
                "id": 9040,
                "name": "banana",
                "localizedName": "banana",
                "image": "bananas.jpg"
              },
              {
                "id": 12104,
                "name": "coconut",
                "localizedName": "coconut",
                "image": "coconut.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 3,
            "step": "Let thaw for 15 minutes.",
            "ingredients": [],
            "equipment": [],
            "length": { "number": 15, "unit": "minutes" }
          },
          {
            "number": 4,
            "step": "Add ingredients into the Yonana, alternating between banana and coconut cubes",
            "ingredients": [
              {
                "id": 12104,
                "name": "coconut",
                "localizedName": "coconut",
                "image": "coconut.jpg"
              },
              {
                "id": 9040,
                "name": "banana",
                "localizedName": "banana",
                "image": "bananas.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 5,
            "step": "Once ingredients have been processed through, you should have a product similar to mine below.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 6,
            "step": "Portion 3 servings into ramekins and put into the freezer as you prepare the topping.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404781,
                "name": "ramekin",
                "localizedName": "ramekin",
                "image": "ramekin.jpg"
              }
            ]
          },
          {
            "number": 7,
            "step": "For the chocolate sauce: in a microwave safe bowl combine coconut oil and chocolate chips.",
            "ingredients": [
              {
                "id": 99278,
                "name": "chocolate chips",
                "localizedName": "chocolate chips",
                "image": "chocolate-chips.jpg"
              },
              {
                "id": 10019348,
                "name": "hot fudge sauce",
                "localizedName": "hot fudge sauce",
                "image": "chocolate-glaze.png"
              },
              {
                "id": 4047,
                "name": "coconut oil",
                "localizedName": "coconut oil",
                "image": "oil-coconut.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404762,
                "name": "microwave",
                "localizedName": "microwave",
                "image": "microwave.jpg"
              },
              {
                "id": 404783,
                "name": "bowl",
                "localizedName": "bowl",
                "image": "bowl.jpg"
              }
            ]
          },
          {
            "number": 8,
            "step": "Microwave for 1 minute (stirring halfway).",
            "ingredients": [],
            "equipment": [
              {
                "id": 404762,
                "name": "microwave",
                "localizedName": "microwave",
                "image": "microwave.jpg"
              }
            ],
            "length": { "number": 1, "unit": "minutes" }
          },
          {
            "number": 9,
            "step": "Remove the ramekins from freezer and immediately pour chocolate sauce onto them.",
            "ingredients": [
              {
                "id": 10019348,
                "name": "hot fudge sauce",
                "localizedName": "hot fudge sauce",
                "image": "chocolate-glaze.png"
              }
            ],
            "equipment": [
              {
                "id": 404781,
                "name": "ramekin",
                "localizedName": "ramekin",
                "image": "ramekin.jpg"
              }
            ]
          },
          {
            "number": 10,
            "step": "Immediately top with shredded coconut.",
            "ingredients": [
              {
                "id": 0,
                "name": "shredded coconut",
                "localizedName": "shredded coconut",
                "image": "coconut.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 11,
            "step": "Serve and enjoy!",
            "ingredients": [],
            "equipment": []
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 52.36570358276367,
    "spoonacularSourceUrl": "https://spoonacular.com/the-ultimate-frozen-coconut-ice-cream-with-hard-shell-chocolate-sauce-663348"
  },
  {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": false,
    "dairyFree": false,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 4,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 2,
    "healthScore": 0,
    "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    "license": "CC BY 3.0",
    "sourceName": "Foodista",
    "pricePerServing": 10.24,
    "extendedIngredients": [
      {
        "id": 1001,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "butter-sliced.jpg",
        "consistency": "SOLID",
        "name": "butter",
        "nameClean": "butter",
        "original": "1/2 pound Butter (at room temperature)",
        "originalName": "Butter (at room temperature)",
        "amount": 0.5,
        "unit": "pound",
        "meta": ["at room temperature", "()"],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "lb", "unitLong": "pounds" },
          "metric": { "amount": 226.796, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 1125,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "egg-yolk.jpg",
        "consistency": "SOLID",
        "name": "egg yolks",
        "nameClean": "egg yolk",
        "original": "2 egg yolks, slightly-beaten",
        "originalName": "egg yolks, slightly-beaten",
        "amount": 2,
        "unit": "",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 2, "unitShort": "", "unitLong": "" }
        }
      },
      {
        "id": 20081,
        "aisle": "Baking",
        "image": "flour.png",
        "consistency": "SOLID",
        "name": "flour",
        "nameClean": "wheat flour",
        "original": "3 cups Flour",
        "originalName": "Flour",
        "amount": 3,
        "unit": "cups",
        "meta": [],
        "measures": {
          "us": { "amount": 3, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 375, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 1077,
        "aisle": "Milk, Eggs, Other Dairy",
        "image": "milk.png",
        "consistency": "LIQUID",
        "name": "milk",
        "nameClean": "milk",
        "original": "2 cups milk",
        "originalName": "milk",
        "amount": 2,
        "unit": "cups",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "cups", "unitLong": "cups" },
          "metric": {
            "amount": 488,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 2033,
        "aisle": "Spices and Seasonings",
        "image": "poppyseed.png",
        "consistency": "SOLID",
        "name": "poppy-seed filling",
        "nameClean": "poppy seeds",
        "original": "1 can jam, fruit or poppy-seed filling",
        "originalName": "jam, fruit or poppy-seed filling",
        "amount": 1,
        "unit": "can",
        "meta": [],
        "measures": {
          "us": { "amount": 1, "unitShort": "can", "unitLong": "can" },
          "metric": { "amount": 1, "unitShort": "can", "unitLong": "can" }
        }
      },
      {
        "id": 2047,
        "aisle": "Spices and Seasonings",
        "image": "salt.jpg",
        "consistency": "SOLID",
        "name": "salt",
        "nameClean": "table salt",
        "original": "2 teaspoons salt",
        "originalName": "salt",
        "amount": 2,
        "unit": "teaspoons",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "tsps", "unitLong": "teaspoons" },
          "metric": {
            "amount": 2,
            "unitShort": "tsps",
            "unitLong": "teaspoons"
          }
        }
      },
      {
        "id": 4615,
        "aisle": "Oil, Vinegar, Salad Dressing",
        "image": "shortening.jpg",
        "consistency": "SOLID",
        "name": "shortening",
        "nameClean": "shortening",
        "original": "1/2 cup shortening",
        "originalName": "shortening",
        "amount": 0.5,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "cups", "unitLong": "cups" },
          "metric": { "amount": 102.5, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 19335,
        "aisle": "Baking",
        "image": "sugar-in-bowl.png",
        "consistency": "SOLID",
        "name": "sugar",
        "nameClean": "sugar",
        "original": "10 ounces sugar",
        "originalName": "sugar",
        "amount": 10,
        "unit": "ounces",
        "meta": [],
        "measures": {
          "us": { "amount": 10, "unitShort": "oz", "unitLong": "ounces" },
          "metric": { "amount": 283.495, "unitShort": "g", "unitLong": "grams" }
        }
      },
      {
        "id": 14412,
        "aisle": "Beverages",
        "image": "water.png",
        "consistency": "LIQUID",
        "name": "warm water",
        "nameClean": "water",
        "original": "1/2 cup warm water",
        "originalName": "warm water",
        "amount": 0.5,
        "unit": "cup",
        "meta": [],
        "measures": {
          "us": { "amount": 0.5, "unitShort": "cups", "unitLong": "cups" },
          "metric": {
            "amount": 118.294,
            "unitShort": "ml",
            "unitLong": "milliliters"
          }
        }
      },
      {
        "id": 18375,
        "aisle": "Baking",
        "image": "yeast-granules.jpg",
        "consistency": "SOLID",
        "name": "packas yeast",
        "nameClean": "dry yeast",
        "original": "2 packas yeast",
        "originalName": "packas yeast",
        "amount": 2,
        "unit": "",
        "meta": [],
        "measures": {
          "us": { "amount": 2, "unitShort": "", "unitLong": "" },
          "metric": { "amount": 2, "unitShort": "", "unitLong": "" }
        }
      }
    ],
    "id": 649012,
    "title": "Kolaches",
    "readyInMinutes": 45,
    "servings": 48,
    "sourceUrl": "http://www.foodista.com/recipe/4KCQQTMJ/kolaches",
    "image": "https://spoonacular.com/recipeImages/649012-556x370.jpg",
    "imageType": "jpg",
    "summary": "You can never have too many hor d'oeuvre recipes, so give Kolaches a try. One portion of this dish contains roughly <b>1g of protein</b>, <b>7g of fat</b>, and a total of <b>113 calories</b>. This recipe serves 48. For <b>10 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up milk, warm water, sugar, and a few other things to make it today. This recipe is liked by 2 foodies and cooks. It is brought to you by Foodista. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 10%</b>. This score is improvable. <a href=\"https://spoonacular.com/recipes/moravian-kolaches-double-filling-kolaches-615215\">Moravian Kolaches – Double Filling Kolaches</a>, <a href=\"https://spoonacular.com/recipes/mango-kolaches-346970\">Mango Kolaches</a>, and <a href=\"https://spoonacular.com/recipes/blueberry-kolaches-221877\">Blueberry Kolaches</a> are very similar to this recipe.",
    "cuisines": [],
    "dishTypes": [
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ],
    "diets": [],
    "occasions": [],
    "instructions": "<ol><li>Sprinkle 1 tablespoon sugar over the yeast and dissolve in lukewarm water. Set aside.</li><li>Heat the milk in a small saucepan and dissolve the shortening in it. Cool to lukewarm; then add salt, egg yolks, and sugar.</li><li>Combine milk/egg mixture and yeast mixture. Add flour gradually andwork dough by hand or with a mixer until glossy.  Keep it a little sticky, if possible.</li><li>Cover, place in a warm, draft-free place, and let rise until doublein size, 45 minutes to one hour.</li><li>After the dough has risen, punch it down and knead lightly. Divide into egg-sized portions with a spoon and form balls. Place on well-oiled baking pans about an inch apart and butter well.</li><li>Let rise  about 15 minutes, then make indentations in the dough balls for the filling. Fill each indention with a large teaspoon filling. Make the Popsika with by combining 1/2 cup sugar, 1/4 cup flour, 1 teaspoon cinnamon, and 2 tablespoons of melted butter until the mixture resembles crumbs. Sprinkle the Popsika over the filling. </li><li>Place pans of kolache in a warm, draft free place, and allow todouble in size again, about 45 minutes to one hour.</li><li>Place in an oven preheated to 375 degrees. Bake until golden brown, then remove the kolaches from the oven. Cool slightly, remove from pans, and cool on wire racks.</li></ol>",
    "analyzedInstructions": [
      {
        "name": "",
        "steps": [
          {
            "number": 1,
            "step": "Sprinkle 1 tablespoon sugar over the yeast and dissolve in lukewarm water. Set aside.",
            "ingredients": [
              {
                "id": 19335,
                "name": "sugar",
                "localizedName": "sugar",
                "image": "sugar-in-bowl.png"
              },
              {
                "id": 14412,
                "name": "water",
                "localizedName": "water",
                "image": "water.png"
              },
              {
                "id": 18375,
                "name": "yeast",
                "localizedName": "yeast",
                "image": "yeast-granules.jpg"
              }
            ],
            "equipment": []
          },
          {
            "number": 2,
            "step": "Heat the milk in a small saucepan and dissolve the shortening in it. Cool to lukewarm; then add salt, egg yolks, and sugar.",
            "ingredients": [
              {
                "id": 4615,
                "name": "shortening",
                "localizedName": "shortening",
                "image": "shortening.jpg"
              },
              {
                "id": 1125,
                "name": "egg yolk",
                "localizedName": "egg yolk",
                "image": "egg-yolk.jpg"
              },
              {
                "id": 19335,
                "name": "sugar",
                "localizedName": "sugar",
                "image": "sugar-in-bowl.png"
              },
              {
                "id": 1077,
                "name": "milk",
                "localizedName": "milk",
                "image": "milk.png"
              },
              {
                "id": 2047,
                "name": "salt",
                "localizedName": "salt",
                "image": "salt.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404669,
                "name": "sauce pan",
                "localizedName": "sauce pan",
                "image": "sauce-pan.jpg"
              }
            ]
          },
          {
            "number": 3,
            "step": "Combine milk/egg mixture and yeast mixture.",
            "ingredients": [
              {
                "id": 18375,
                "name": "yeast",
                "localizedName": "yeast",
                "image": "yeast-granules.jpg"
              },
              {
                "id": 1077,
                "name": "milk",
                "localizedName": "milk",
                "image": "milk.png"
              },
              {
                "id": 1123,
                "name": "egg",
                "localizedName": "egg",
                "image": "egg.png"
              }
            ],
            "equipment": []
          },
          {
            "number": 4,
            "step": "Add flour gradually andwork dough by hand or with a mixer until glossy.  Keep it a little sticky, if possible.Cover, place in a warm, draft-free place, and let rise until doublein size, 45 minutes to one hour.After the dough has risen, punch it down and knead lightly. Divide into egg-sized portions with a spoon and form balls.",
            "ingredients": [
              {
                "id": 0,
                "name": "dough",
                "localizedName": "dough",
                "image": "pizza-dough"
              },
              {
                "id": 20081,
                "name": "all purpose flour",
                "localizedName": "all purpose flour",
                "image": "flour.png"
              },
              {
                "id": 0,
                "name": "punch",
                "localizedName": "punch",
                "image": ""
              },
              {
                "id": 1123,
                "name": "egg",
                "localizedName": "egg",
                "image": "egg.png"
              }
            ],
            "equipment": [
              {
                "id": 404726,
                "name": "blender",
                "localizedName": "blender",
                "image": "blender.png"
              }
            ],
            "length": { "number": 105, "unit": "minutes" }
          },
          {
            "number": 5,
            "step": "Place on well-oiled baking pans about an inch apart and butter well.",
            "ingredients": [
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              }
            ],
            "equipment": [
              {
                "id": 404646,
                "name": "baking pan",
                "localizedName": "baking pan",
                "image": "roasting-pan.jpg"
              }
            ]
          },
          {
            "number": 6,
            "step": "Let rise  about 15 minutes, then make indentations in the dough balls for the filling. Fill each indention with a large teaspoon filling. Make the Popsika with by combining 1/2 cup sugar, 1/4 cup flour, 1 teaspoon cinnamon, and 2 tablespoons of melted butter until the mixture resembles crumbs.",
            "ingredients": [
              {
                "id": 2010,
                "name": "cinnamon",
                "localizedName": "cinnamon",
                "image": "cinnamon.jpg"
              },
              {
                "id": 1001,
                "name": "butter",
                "localizedName": "butter",
                "image": "butter-sliced.jpg"
              },
              {
                "id": 0,
                "name": "dough",
                "localizedName": "dough",
                "image": "pizza-dough"
              },
              {
                "id": 20081,
                "name": "all purpose flour",
                "localizedName": "all purpose flour",
                "image": "flour.png"
              },
              {
                "id": 19335,
                "name": "sugar",
                "localizedName": "sugar",
                "image": "sugar-in-bowl.png"
              }
            ],
            "equipment": [],
            "length": { "number": 15, "unit": "minutes" }
          },
          {
            "number": 7,
            "step": "Sprinkle the Popsika over the filling.",
            "ingredients": [],
            "equipment": []
          },
          {
            "number": 8,
            "step": "Place pans of kolache in a warm, draft free place, and allow todouble in size again, about 45 minutes to one hour.",
            "ingredients": [],
            "equipment": [],
            "length": { "number": 105, "unit": "minutes" }
          },
          {
            "number": 9,
            "step": "Place in an oven preheated to 375 degrees.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ]
          },
          {
            "number": 10,
            "step": "Bake until golden brown, then remove the kolaches from the oven. Cool slightly, remove from pans, and cool on wire racks.",
            "ingredients": [],
            "equipment": [
              {
                "id": 404784,
                "name": "oven",
                "localizedName": "oven",
                "image": "oven.jpg"
              }
            ]
          }
        ]
      }
    ],
    "originalId": null,
    "spoonacularScore": 3.7315938472747803,
    "spoonacularSourceUrl": "https://spoonacular.com/kolaches-649012"
  }
]


function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe image";

    recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}
    `;

    recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";

    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListEl.appendChild(recipeItemEl);
  });
}

async function init() {
  const recipes = mockRecipeJson;
  displayRecipes(recipes);
}

init();
