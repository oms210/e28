<template>
  <div id="list-page">
  
    <div id="list">
      <router-link
        class="list-link"
        v-for="ingredient in ingredientslist"
        v-bind:to="'/shoppinglist/' + ingredient.id"
        v-bind:key="ingredient.id"
      >
        <show-list
          v-bind:ingredient="ingredient"
         v-bind:items="items"
        ></show-list>
      </router-link>
    </div>
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import ShowList from "@/components/ShowList.vue";
export default {
     components: {
    "show-list": ShowList,
  },
  props: {
    ingredientslist: {
      type: Array,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods : {
      deleteIngredient(ingredient){
          axios.delete('/shoppinglist/' + ingredient.id).then(response=> {
             if (!response.data.errors) {alert(this.id);}
             else alert(response.data.errors);

           
      });
      }

  }
};
</script>
<style scoped>
#list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}
a.list-link:link,
a.list-link:visited,
a.list-link:active,
a.list-link:hover {
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
a.list-link:hover {
    border: 1px solid var(--black);
}
</style>
