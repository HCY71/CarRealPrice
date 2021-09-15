import {
  createStore
} from 'vuex';



const store = createStore({
  state: {
    carModel: [],
    posts: [],
    currentUser: "MiguelJordan",
    currentTime: {},
    currentPage: "NSX",
    dark: false,
    isEditing: false,
    newPost: {
      brand: null,
      model: null,
      location: null
    }
  },
  getters: {
    brandOptions: state => {
      return state.carModel.map((model) => {
        return {
          label: model.brand,
          value: model.brand
        };
      })
    },
    modelOptions: (state) => {
      let brandData = state.carModel.filter((model) => {
        return model.brand == state.newPost.brand
      })
      let modelData = [];
      if (brandData[0]) {
        modelData = brandData[0].models.map((model) => {
          return {
            label: model,
            value: model
          }
        })
      }
      return modelData;
    },
    locationOptions: ()=>{
      let cityDatas = require("../assets/city.json");
      return cityDatas.map((city)=>{return {label: city.name, value: city.name}});
    }
  },
  mutations: {
    setCarModels(state, data) {
      data.forEach((brand) => {
        state.carModel.push(brand);
      })
    },
    setPostsDatas(state, data) {
      state.posts = data;
    },
    updateTime(state) {
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
    },
    setDefaultModelData(state){
      state.newPost.model = state.carModel.filter((car)=>car.brand == state.newPost.brand)[0].models[0];
    }
  },
  actions: {
    loadCarModelDatas(context) {
      let modelDatas = require("../assets/carBrand.json");
      context.commit('setCarModels', modelDatas);
    },
    loadPostDatas(context) {
      let postDatas = require("../assets/posts.json");
      context.commit('setPostsDatas', postDatas);
    },
    updateTime(context) {
      context.commit('updateTime');
      setInterval(() => {
        context.commit('updateTime');
      }, 30000)
    },
    setDefaultModelData(context){
      context.commit('setDefaultModelData');
    }
  }
})

export default store;