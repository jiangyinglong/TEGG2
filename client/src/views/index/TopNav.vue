<template>
	<div class="topnav">
		<div class="tophomenav">
			<router-link to="/Home" class="tophome">首页</router-link>
			<router-link to="/fenlei" class="Featured">精选</router-link>
			<router-link to="/PersonalCenter" class="PersonalCenter">个人中心</router-link>
			<router-link to="/Square"  class="Square">广场</router-link>
			<router-link to="/About" class="About">更多</router-link>
			<Searchbar></Searchbar>
		</div>
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
	import Searchbar from '@/views/topnav/Searchbar.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			Searchbar,
		},
		methods:{
			// fn(){
			// 	this.$router.push("/Home")
			// },
		}
	}
</script>

<style>
	.topnav{
		width: 100%;
		/* height: 50px; */
		border: 1px solid #CCCCCC;
		/* background-color: #42B983; */
			
		
	}
	.tophomenav{
		display: flex;
		height: 60px;
		line-height: 78px;
		padding-left: 330px;
	
	}
	.tophome{
		font-size: 18px;
		padding-right:35px;
		text-decoration: none;
	}
	.Featured{
		font-size: 18px;
		padding-right:35px;
		text-decoration: none;
	}
	.PersonalCenter{
		font-size: 18px;
		padding-right:35px;
		text-decoration: none;
	}
	.Square{
		font-size: 18px;
		padding-right:35px;
		text-decoration: none;
	}
	.About{
		font-size: 18px;
		padding-right:35px;
		text-decoration: none;
	}
</style>
