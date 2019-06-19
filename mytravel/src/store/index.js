import Vue from "vue"
import Vuex from "vuex"
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	//dispatch 可以直接省略该方法 此方法对应vuex的actions方法
	// this.$store.dispatch("changeCity",city)
	actions:{
		changeCity (ctx,city){
			ctx.commit("changeCity",city)
		}
	},
	
	//上的dispatch省略后可以直接调用commit方法
	//此方法直接可以调用mutations方法
	//this.$store.commit("changeCity",city)
	mutations,
	getters:{
		doubleCity (state){
			return state.city +" "+state.city
		}
	}
})