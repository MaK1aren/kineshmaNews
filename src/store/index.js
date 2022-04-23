import { createStore } from 'vuex'

export default createStore({
  state: {
    article: [{
      heading: 'Статья первая',
      content: 'контент 1',
      autor: 'Бублико',
      category: 'Общество',
      description: 'Пожирание бублико',
      dateArticle: ' '
    },
    {
      heading: 'Статья вторая',
      content: 'контент 2',
      autor: 'Колбаскин',
      category: 'Общество',
      description: 'Пожирание колбасы',
      dateArticle: ' '
    }

    ]
  },
  mutations: {
    addArt(state, playload){
      state.article.push(playload)
    }
  },
  actions: {
  },
  getters:{
      getArticle: state => (id) =>{
        console.log(id)
      /* for(let i = 0; i < state.article.length; i++){
          console.log(state.article[i].id)
          if(state.article[i].id == id){
        return state.article[i]
      }
    }*/
    return state.article.find(art => art.id == id)
  }
},
  modules: {
  }
})