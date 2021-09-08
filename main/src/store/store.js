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
  // getters: {
  //   getToyotaChild(state) {
  //     var output = [];
  //     for (var i = 0; i < state.toyotaModel.length; i++) {
  //       output.push({
  //         label: state.toyotaModel[i],
  //         key: state.toyotaModel[i]
  //       })
  //     }
  //     return output;
  //   }
  // }
})

export default store