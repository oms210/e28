<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view
      v-bind:recipes="recipes"
      v-bind:ingredients="ingredients"
      v-bind:items="items"
      v-bind:list="list"
      v-on:update-recipes="loadRecipes"
      v-on:update-list="loadShoppingList"
    ></router-view>

    <nav class="nav flex-column">
      <router-link
        v-for="link in links"
        v-bind:key="link"
        v-bind:to="paths[link]"
      >
        {{ link }}</router-link
      >
    </nav>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: "App",
  data() {
    return {
      recipes: [],
      ingredients: [],
      items: [],
      list:[],
      links: ["home", "recipes","list"],
      paths: {
        home: "/",
        recipes: "/recipes",
        list: "/list",
      },
    };
  },
  mounted() {
    this.loadRecipes();
    this.loadIngredients();
    this.loadItems();
    this.loadShoppingList();
  },
  methods: {
    loadRecipes() {
      axios.get("recipe").then((response) => {
        this.recipes = response.data.recipe;
      });
    
    },
    loadIngredients() {
        axios.get("ingredient").then((response) => {
        this.ingredients = response.data.ingredient;
      });
      
    },
    loadItems() {
      axios.get("item").then((response) => {
        this.items = response.data.item;
      });
    },
    loadShoppingList()
    {
      axios.get("shoppingList").then((response) => {
        this.list = response.data.item;
      });
    }

  },
};
</script>

<style src="@/assets/css/recipe.css"></style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
