<template>
  <div class="show-list">
    <div class="name">
   {{ ingredient.quantity }}&nbsp;{{ ingredient.unit }}&nbsp;of&nbsp;{{ingredient.name}}</div>
   
   
  </div>
</template>

<script>

export default {
  props: {
    ingredient: {
      type: Object,
    },
  },
   data() {
    return {};
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
.description {
  margin: auto;
  text-align: left;
  font-style: italic;
  line-height: 1.5;
}
.price {
  font-family: var(--serif-font);
  font-weight: bold;
  font-size: 2rem;
  padding: 10px;
}
</style>
