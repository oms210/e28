<template>
  <div class="show-list">
    <div class="name">
      {{ ingredient.quantity }}&nbsp;{{ currentIngredient.unit }}&nbsp;of&nbsp;{{currentIngredient.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ingredient: {
      type: Object,
    },
    items: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed:{
       currentIngredient() {
      return this.items.filter((item) => {
        return item.id == this.ingredient.item_id;
      }, this.ingredient.item_id)[0];
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
</style>
