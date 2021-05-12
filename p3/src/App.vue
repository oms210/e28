<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
  

    <nav>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            :class="nav-link"
          >
          <span v-if="link == 'cart'" data-test="cart-count"
                            >({{ cartCount }})</span
                        >
            {{ link }}</router-link
          >
        </li>
      </ul>
    </nav>
      <router-view
      v-on:update-recipes="loadRecipes"
      v-on:update-ingredients="loadIngredients"
      v-on:update-groceryItems="loadGroceryItems"
    ></router-view>
  </div>
</template>

<script>
import { cart } from "@/common/app.js";
export default {
  name: "App",
  data() {
    return {
     
      links: ["home", "recipes","add a recipe", "cart", "account"],
      paths: {
        home: "/",
        recipes: "/recipes",
        "add a recipe": "/recipe/new",
        cart: "/cart",
        account: "/account",

      },
    };
  },
  computed :{
     cartCount() {
            return this.$store.state.cartCount;
        },
        recipes(){
           return this.$store.state.recipes;
        },
        ingredients() {
          return this.$store.state.ingredients;
        },
        groceryItems() {
           return this.$store.state.groceryItems;
        },

  },
  mounted() {
    this.loadRecipes();
    this.loadIngredients();
    this.loadGroceryItems();
    //this.loadCart();
    this.$store.commit("setCartCount", cart.count());
  },
  methods: {
    loadRecipes() {
       this.$store.dispatch("getRecipes");
      // axios.get("recipe").then((response) => {
      //   this.recipes = response.data.recipe;
      // });
    },
    loadIngredients() {
       this.$store.dispatch("getIngredients");
      // axios.get("ingredient").then((response) => {
      //   this.ingredients = response.data.ingredient;
      // });
    },
    loadGroceryItems() {
       this.$store.dispatch("getGroceryItems");
      // axios.get("item").then((response) => {
      //   this.items = response.data.item;
      // });
    },
    // loadCart() {
    //    this.$store.dispatch("getCartItems");
    //   // axios.get("ingredientslist").then((response) => {
    //   //   this.ingredientslist = response.data.ingredientslist;
    //   // });
    // },
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
