<template>
  <div id="list-page">
    <h2>Recipes</h2>
    <div id="list">
      <router-link
        class="list-link"
        v-for="listItem in list"
        v-bind:to="'/delete/' + listItem.id"
        v-bind:key="listItem.id"
      >
        <show-list
          v-bind:ingredient="listItem"
         
        ></show-list>
      </router-link>
    </div>
  </div>
</template>

<script>
import ShowList from "@/components/ShowList.vue";
export default {
     components: {
    "show-list": ShowList,
  },
  props: {
    list: {
      type: Array,
      default: null,
    }
  },
  data() {
    return {};
  },  
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
