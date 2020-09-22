<template>
	<div class="Searchbarbox">
		<div class="Searchbar">
			<!-- <img :src="src"> -->
			<input type="text" placeholder="搜索">
			<!-- <router-link to="/sear"  class="sear">
				<button @click="fn()">搜索</button>
			</router-link> -->
			<button @click="fn()" class="searchbtn">搜索</button>
			
		</div>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		components: {
		
		},
		methods:{
			fn(){
				this.$router.push("/sear")
			}
			
		}
	}
</script>

<style>
	.Searchbar{
		width: 400px;
		height: 70px;
		/* border: 1px solid red; */
		position: relative;
	}
	.Searchbar input{
		width: 400px;
		height: 35px;
		border-radius: 50px;
		outline: none;
		border: 1px solid #CCCCCC;
		padding-left: 15px;
		border-right: none;
		
	}
	.Searchbar button{
		width: 120px;
		height: 38px;
		position: absolute;
		top: 22px;
		left: 300px;
		background-color:#2caeff;
		border: none;
		border-radius: 50px;
		font-size: 18px;
		color: white;
		outline: none;
	}
	
</style>
