<<<<<<< HEAD
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
});

export default store;
=======
import {
  createStore
} from 'vuex'

const store = createStore({
  state: {
    carModel: {},
    posts:{},
    dark: false
  },
  mutations: {
    setCarModels(state, data){
      state.carModel = data;
    },
    setPostsDatas(state,data){
      state.posts = data;
    }
  },
  actions: {
    loadCarModelDatas(context){
      let modelDatas = require("../assets/toyota.json");
      context.commit('setCarModels', modelDatas);
    },
    loadPostDatas(context){
      let postDatas = require("../assets/posts.json");
      context.commit('setPostsDatas', postDatas);
    }
  },
})

export default store
>>>>>>> 75e9926086ec47d3b39df81496108009c74c96d2
