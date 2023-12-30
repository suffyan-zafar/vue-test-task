import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state:{
         id:null,
         title:"",
         complete:false
    },
    mutations:{
        setId(state,payload){
            console.log(payload,"payload bhai")
            state.id=payload
        },
        setComplete(state,payload){
            state.complete=payload
        },
          setTitle(state,payload){
            state.title=payload
        }
    },

    actions:{
         getTodos({commit}){
            console.log("Hello From Actions")
            axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then((response)=>{
                console.log(response.data.id,"api response");
                commit('setId', response.data.id);
                commit('setComplete', response.data.completed);
                commit('setTitle', response.data.title);
            }).catch((error)=>{
                console.log(error)
            })
        }
    },
    getters:{
        getId(state){
            return state.id
        },
        getTitle(state){
            return state.title
        },
        
        getCompleted(state){
            return state.complete
        },
        

    }
})