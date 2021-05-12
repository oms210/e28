import { createStore, createLogger } from 'vuex'
import { axios } from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug && 1 == 2 ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            cartCount: 0,
            recipes: [],
            ingredients: [],
            groceryItems: [],
            user: null,
        }
    },
    // Methods used to alter the state of our store
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        setRecipes(state, payload) {
            state.recipes = payload;
        },        
        setIngredients(state, payload) {
            state.ingredients = payload;
        },
        setGroceryItems(state, payload) {
            state.groceryItems = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        }
    },
    // Methods that can contain async. code
    // Can not directly alter the state - has to change state
    // by committing mutations
    actions: {
        getRecipes(context) {
            axios.get("recipe").then((response) => {
                context.commit('setRecipes', response.data.recipe);
            });
        },
        getIngredients(context) {
            axios.get("ingredient").then((response) => {
                context.commit('setIngredients', response.data.ingredient);
            });
        },
        getGroceryItems(context) {
            axios.get("groceryitem").then((response) => {
                context.commit('setGroceryItems', response.data.groceryitem);
            });
        },
        // getIngredients(context) {
        //     axios.get("ingredient").then((response) => {
        //         context.commit('setIngredients', response.data.ingredient);
        //     });
        // },
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        },
    },
    getters: {
        getRecipeById(state) {
            return function (id) {
                return state.recipes.filter((recipe) => {
                    return recipe.id == id;
                }, id)[0];
            }
        },
        getGroceryItemById(state) {
            return function (id) {
                return state.groceryItems.filter((groceryItem) => {
                    return groceryItem.id == id;
                }, id)[0];
            }
        },
        getRecipeByName(state) {
            return function (name) {
                return state.recipes.filter((recipe) => {
                    return recipe.name == name;
                }, name)[0];
            }
        },
        getGroceryItemByName(state) {
            return function (name) {
                return state.groceryItems.filter((groceryItem) => {
                    return groceryItem.name == name;
                }, name)[0];
            }
        },
    }
})