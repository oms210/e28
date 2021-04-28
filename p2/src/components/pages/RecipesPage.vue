<template>
  <div id="recipes-page">
    
    <div id="recipes">
      <router-link
        class="recipe-link"
        v-for="recipe in recipes"
        v-bind:to="'/recipe/' + recipe.id"
        v-bind:key="recipe.id"
      >
        <show-recipe
          v-bind:recipe="recipe"
          v-bind:detailed="false"
          v-bind:ingredients="recipeIngredients"
        ></show-recipe>
      </router-link>
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
    recipes: {
      type: Array,
      default: null,
    },
    ingredients : {
      type: Array,
      default: null,
    },
    item: {
      type: Array,
      default: null,
    },

  },
  data() {
    return {};
  },
  computed: {
    recipeIngredients() {
      return [];
    },
  },
};
</script>

<style scoped>
#recipes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}
a.recipe-link:link,
a.recipe-link:visited,
a.recipe-link:active,
a.recipe-link:hover {
    text-decoration: none;
    color: var(--black);
    cursor: pointer;
    border: 1px solid var(--silver);
    text-align: center;
    padding: 15px;
    margin: 15px;
    width: 30%;
    min-width: 300px;
}
a.recipe-link:hover {
    border: 1px solid var(--black);
}
</style>