<template>
  <div id="recipe-page">
    <div v-if="recipeNotFound">
      <p>Recipe {{ id }} not found.</p>
      <router-link v-bind:to="'/recipes'">Go to all recipes</router-link>
    </div>

    <div v-else-if="recipe">
      <show-recipe
        v-bind:recipe="recipe"
        v-bind:detailed="true"
        v-bind:ingredients="recipeIngredients"
        v-bind:ingredientslist="ingredientsList"
      ></show-recipe>
    </div>
  </div>
</template>
<script>
import ShowRecipe from "@/components/ShowRecipe.vue";
export default {
  components: {
    "show-recipe": ShowRecipe,
  },
  props: {
    id: {
      type: String,
    },
    recipes: {
      type: Array,
      default: null,
    },
    ingredients: {
      type: Array,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    }
  },
  data() {
    return {};
  },
  computed: {
    recipe() {
      return this.recipes.filter((recipe) => {
        return recipe.id == this.id;
      }, this.id)[0];
    },
    recipeIngredients() {
      let recIngredients = [];
      if (!this.recipeNotFound) {
        let recipeItemList = this.ingredients.filter((recipe) => {
          return recipe.recipe_id == this.id;
        });
        recipeItemList.forEach((recipeItem) => {
          let matchingItem = this.items.filter((item) => {
            return recipeItem.item_id == item.id;
          })[0];
          let ingredient = { name: "", quantity: "", unit: "", id:"" };
          ingredient.name = matchingItem.name;
          ingredient.unit = matchingItem.unit;
          ingredient.id = matchingItem.id;
          ingredient.quantity = recipeItem.quantity;

          recIngredients.push(ingredient);
        });
      }
      return recIngredients;
    },
    ingredientsList ()
    {
      return this.ingredientslist;
    },
    recipeNotFound() {
      return this.recipe == null;
    },
  },
};
</script>

<style scoped>
.show-recipe {
  border: 1px solid var(--silver);
  text-align: center;
  padding: 15px;
  margin: 15px;
  width: 100%;
  min-width: 300px;
}

.name {
  height: 50px;
  font-size: 2rem;
  margin: 5px 0 10px 0;
  vertical-align: baseline;
}

.thumb {
  width: 75%;
  max-width: 300px;
  border-radius: var(--radius);
}

.description {
  margin: auto;
  text-align: left;
  font-style: italic;
  line-height: 1.5;
}
</style>
