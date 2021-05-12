<template>
  <div>
    <h2>Add Your Recipe</h2>

    <small class="form-help">All fields are required</small>

    <div id="inputs">
      <label for="name">Name</label>
      <input
        type="text"
        v-model="recipe.name"
        id="name"
        data-test="recipe-name-input"
        v-on:blur="validate"
      />
      <small class="form-help">Min: 3, Max: 100</small>
      <error-field
        v-if="errors && 'name' in errors"
        v-bind:errors="errors.name"
      ></error-field>
      <label for="categories">Categories</label>
      <input type="text" v-model="recipe.categories" id="categories" data-test="recipe-categories-input" />

      <label for="serves">Serving Size:</label>
      <input
        type="text"
        v-model="recipe.serves"
        id="serves"
        data-test="recipe-serves-input"
        v-on:blur="validate"
      />
      <small class="form-help">Enter a whole number</small>
      <error-field
        v-if="errors && 'serves' in errors"
        v-bind:errors="errors.serves"
      ></error-field>

      <h2 style="text-align: center;">Ingredients</h2>
      <label for="ingredientName">Grocery Product:</label>
      <input
        type="text"
        v-model="ingredient.name"
        id="ingredientName"
        data-test="ingredient-name-input"
        v-on:blur="validateIngredient"
      />
      <small class="form-help">Min: 3, Max: 100</small>
      <error-field
        v-if="errors && 'ingredientName' in errors"
        v-bind:errors="errors.ingredientName"
      ></error-field>

      <label for="ingredientQuantity">Quantity:</label>
      <input
        type="text"
        v-model="ingredient.quantity"
        id="ingredientQuantity"
        data-test="ingredient-quantity-input"
        v-on:blur="validateIngredient"
      />
      <small class="form-help">Enter a whole number</small>
      <error-field
        v-if="errors && 'ingredientQuantity' in errors"
        v-bind:errors="errors.ingredientQuantity"
      ></error-field>

      <label for="ingredientUnit">Unit:</label>
      <input
        type="text"
        v-model="ingredient.unit"
        id="ingredientUnit"
        data-test="ingredient-unit-input"
        v-on:blur="validateIngredient"
      />
      <error-field
        v-if="errors && 'ingredientUnit' in errors"
        v-bind:errors="errors.ingredientUnit"
      ></error-field>
      <button v-on:click="addIngredient" data-test="add-ingredient-button">
        Add Ingredient
      </button>

      <h2 style="text-align: center;">Directions</h2>
      <label for="step1">Step 1</label>

      <textarea
        v-model="directions.step1"
        id="step1"
        data-test="directions-step1-textarea"
        v-on:blur="validateDirections"
      ></textarea>
      <small class="form-help">Min:10</small>
      <error-field
        v-if="errors && 'step1' in errors"
        v-bind:errors="errors.step1"
      ></error-field>

      <label for="step2">Step 2</label>

      <textarea
        v-model="directions.step2"
        id="step2"
        data-test="directions-step2-textarea"
        v-on:blur="validateDirections"
      ></textarea>
      <small class="form-help">Min:5</small>
      <error-field
        v-if="errors && 'step2' in errors"
        v-bind:errors="errors.step2"
      ></error-field>

      <label for="step3">Step 3</label>

      <textarea
        v-model="directions.step3"
        id="step3"
        data-test="directions-step3-textarea"
        v-on:blur="validateDirections"
      ></textarea>
      <small class="form-help">Min:5</small>
      <error-field
        v-if="errors && 'step3' in errors"
        v-bind:errors="errors.step3"
      ></error-field>
    </div>

    <button
      v-if="recipeIngredients.length > 1"
      v-on:click="addRecipe"
      data-test="add-recipe-button"
    >
      Add Recipe
    </button>

    <div class="form-feedback-error" v-if="errors">
      Please correct the above errors
    </div>

    <transition name="fade">
      <div
        class="alert"
        v-if="showConfirmation"
        data-test="recipe-added-confirmation"
      >
        Your recipe was added
      </div>
    </transition>
    <transition name="fade">
      <div
        class="alert"
        v-if="showIngredientConfirmation"
        data-test="ingredient-added-confirmation"
      >
        ingredient was added
      </div>
    </transition>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import ErrorField from "@/components/ErrorField.vue";
import Validator from "validatorjs";

export default {
  components: {
    "error-field": ErrorField,
  },
  data() {
    return {
      showConfirmation: false,
      showIngredientConfirmation: false,
      errors: null,
      recipe: {
        name: "Oven Fried Chicken",
        serves: 4,
        categories: "chicken,dinner",
        directions:
          "Preheat the oven to 350 degrees F (175 degrees C). Place a cooling rack on top of a large cookie sheet. Spray the rack with vegetable cooking spray.|In a medium bowl, mix together sour cream and minced garlic. In another bowl, stir together the cornflake crumbs, rosemary, sage, garlic powder, salt and pepper. Coat the chicken with the sour cream mixture, then roll in the cornflake mixture. Arrange chicken pieces on top of the cooling rack.|Bake for 1 hour in the preheated oven, until meat is no longer pink, and juices run clear.",
      },
      ingredient: {
        name: "Chicken",
        quantity: 1,
        unit: "lbs",
      },
      directions: {
        step1: "Step 1",
        step2: "Step 2",
        step3: "Step 3",
      },
      recipeIngredients: [
        {
          recipe_id: 1,
          item_id: 1,
          quantity: 1,
        },
      ],
      recipeDirections: "",
    };
  },
  methods: {
    validate() {
      let validator = new Validator(this.recipe, {
        name: "required|between:3,100",
        serves: "required|numeric",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
    validateIngredient() {
      let validator = new Validator(this.ingredient, {
        name: "required|between:3,100",
        quantity: "required|numeric",
        unit: "required|between:1,50",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
    validateDirections() {
      let validator = new Validator(this.directions, {
        step1: "required|min:10",
        step2: "required|min:5",
        step3: "required|min:5",
      });

      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
    getDirections() {
      if (this.validateDirections()) {
        this.recipeDirections =
          this.directions.step1 +
          "|" +
          this.directions.step2 +
          "|" +
          this.directions.step3;
      }
    },
    addIngredient() {
      if (this.validateIngredient()) {
        let ingredientGroceryItem = [];
        let recipeIngredient = { recipe_id: 0, item_id: 0, quantity: 0 };
        axios
          .get("/groceryitem/query?name='" + this.ingredient.name + "'")
          .then((response) => {
            ingredientGroceryItem = response.data.groceryitem.map(
              (groceryItem) => {
                return this.$store.getters.getGroceryItemById(groceryItem.id);
              }
            );
          });
        //if already exists then no need to insert a duplicate item
        if (!ingredientGroceryItem.length > 0) {          
          let groceryItem = { name: "", unit: "" };
          groceryItem.name = this.ingredient.name;
          groceryItem.unit = this.ingredient.unit;
          axios.post("/groceryitem", groceryItem).then((response) => {
            if (response.data.errors) {
              this.errors = response.data.errors;
              this.showIngredientConfirmation = false;
            } else {
              axios
                .get("/groceryitem/query?name='" + groceryItem.name + "'")
                .then((response) => {
                  ingredientGroceryItem = response.data.groceryitem.map(
                    (item) => {
                      return this.$store.getters.getGroceryItemById(item.id);
                    }
                  );
                });
            }
          });
        }
        recipeIngredient.item_id = ingredientGroceryItem.id;
        recipeIngredient.quantity = this.ingredient.quantity;
        this.recipeIngredients.push(recipeIngredient);
        this.showIngredientConfirmation = true;
        // Fade out confirmation after 3 seconds
        setTimeout(function() {
          this.showIngredientConfirmation = false;
          this.ingredient = {
            name: "",
            quantity: 0,
            unit: "",
          };
        }, 3000);
      }
    },
    addRecipe() {
      if (this.validate()) {
        this.recipe.directions = this.getDirections();
        axios.post("/recipe", this.recipe).then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
            this.showConfirmation = false;
          } else {
            let newRecipe = [];
            axios
              .get("/recipe/query?name='" + this.recipe.name + "'")
              .then((response) => {
                newRecipe = response.data.recipe.map((recipe) => {
                  return this.$store.getters.getRecipeById(recipe.id);
                });
              });
            this.recipeIngredients.forEach((element) => {
              element.recipe_id = newRecipe.id;
            });
            axios
              .post("/ingredient", this.recipeIngredients)
              .then((response) => {
                if (response.data.errors) {
                  this.errors = response.data.errors;
                } else {
                  this.recipe = {
                    name: "",
                    serves: 0,
                    categories: "",
                    directions: "",
                  };
                  this.directions.step1 = "Step 1";
                  this.directions.step2 = "Step 2";
                  this.directions.step3 = "Step 3";
                  this.$emit("update-recipes");
                  this.showConfirmation = true;
                  // Fade out confirmation after 3 seconds
                  setTimeout(function() {
                    this.showConfirmation = false;
                  }, 3000);
                }
              });
          }
        });
      }
    },
  },
};
</script>

<style scoped>
#inputs {
  text-align: left;
}

textarea {
  height: 100px;
}

button {
  margin-bottom: 10px;
}
</style>
