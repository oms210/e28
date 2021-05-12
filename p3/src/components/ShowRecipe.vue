<template>
  <div class="show-recipe">
    <div class="name">{{ recipe.name }}</div>
    <div class="row">
      <div class="col-md-12">
        <h3><strong>Categories</strong></h3>
        {{ recipe.categories }}
      </div>
    </div>
    <img class="thumb" v-bind:src="imgSrc" />

    <div v-if="detailed">
      <div class="row">
        <div class="col-md-12">
          <h3><strong>Serves: </strong> {{ recipe.serves }}</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 description">
          <h3><strong>Ingredients</strong></h3>

          <ul>
            <li v-for="(ingredient, index) in ingredients" v-bind:key="index">
              {{ ingredient.quantity }}&nbsp;{{
                ingredient.unit
              }}&nbsp;of&nbsp;{{ ingredient.name }}
              <img
                style="cursor:grab ;" data-test="add-to-cart-button"
                v-on:click="addToShoppingList(ingredient.id)"
                src="@/assets/images/add.png"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 description">
          <h3><strong>Directions</strong></h3>
          <ol>
            <li v-for="(direction, index) in directions" v-bind:key="index">
              {{ direction }}
            </li>
          </ol>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        class="alert"
        v-if="addConfirmation"
        data-test="add-to-cart-confirmation"
      >
        {{ this.groceryItemName }} was added to your cart!
      </div>
    </transition>
  </div>
</template>

<script>
import { cart } from "@/common/app.js";
export default {
  props: {
    recipe: {
      type: Object,
    },
    detailed: {
      type: Boolean,
      default: true,
    },
    ingredients: {
      type: Array,
    },
  },
  data() {
    return {
      addConfirmation: false,
      groceryItemName: "",
    };
  },
  computed: {
    imgSrc() {
      try {
        return require("@/assets/images/recipes/" + this.recipe.id + ".jpg");
      } catch (e) {
        return require("@/assets/images/recipes/image-not-available.jpg");
      }
    },
    directions() {
      return this.recipe.directions.split("|");
    },
  },
  methods: {
    addToShoppingList(id) {
      let groceryItem = this.$store.getters.getGroceryItemById(id);
      cart.add(groceryItem.id);
      this.$store.commit("setCartCount", cart.count());
       this.groceryItemName = groceryItem.name;
      this.addConfirmation = true;     
      setTimeout(() => {
        this.addConfirmation = false;
      }, 3000);
    },
  },
};
</script>
<style scoped>
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
