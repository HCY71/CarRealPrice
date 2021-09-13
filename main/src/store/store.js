import {
  createStore
} from 'vuex'



const store = createStore({
  state: {
    carModel: {},
    posts: {},
    currentUser: "MiguelJordan",
    currentTime: {
    },
    dark: false,
    isEditing: false
  },
  mutations: {
    setCarModels(state, data) {
      state.carModel = data;
    },
    setPostsDatas(state, data) {
      state.posts = data;
    },
    updateTime(state){
      let d = new Date();
      state.currentTime.date = d.getFullYear() + "/" + (parseInt(d.getMonth()) + 1).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }) + "/" + d.getDate().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      state.currentTime.time = d.getHours().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }) + ":" + d.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    }
  },
  actions: {
    loadCarModelDatas(context) {
      let modelDatas = require("../assets/toyota.json");
      context.commit('setCarModels', modelDatas);
    },
    loadPostDatas(context) {
      let postDatas = require("../assets/posts.json");
      context.commit('setPostsDatas', postDatas);
    },
    updateTime(context){
      context.commit('updateTime');
      setInterval(()=>{
        context.commit('updateTime');
      },30000)
    }
  }
})

export default store