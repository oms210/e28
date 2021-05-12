import Cart from '@/common/Cart.js';
import { reactive } from 'vue'
export const axios = require('axios').create({
    baseURL:process.env.VUE_APP_API_URL ?? 'http://e28api.oms210.loc',
    responseType: 'json'
})
export const cart = new Cart();
export const store = reactive({
    cartCount: 0
});