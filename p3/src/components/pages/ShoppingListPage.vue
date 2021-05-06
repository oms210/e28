<template>
<div id="shopping-list-delete-page">
    <div v-if="ingredientNotFound">
      <p>Recipe {{ id }} not found.</p>
      <router-link v-bind:to="'/list'">Go to shopping list</router-link>
    </div>

  
  </div>
</template>
import { axios } from "@/common/app.js";
import ShowList from "@/components/ShowList.vue";
<script>
export default {
  components: {
     "show-list": ShowList,
  },
  props: {
    id: {
      type: String,
    },
    ingredientslist: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    shoppingListItem() {
      return this.ingredientslist.filter((ingredient) => {
        return ingredient.id == this.id;
      }, this.id)[0];
    },
    
    ingredientNotFound() {
      return this.shoppingListItem == null;
    },
  },
  mounted() {
      axios.delete('/shoppinglist/' + this.id).then(response=> {
            this.$emit("update-ingredientslist");
alert(this.id);
      });
  }

};
</script>

<style>

</style>