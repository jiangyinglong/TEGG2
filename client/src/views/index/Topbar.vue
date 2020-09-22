<template>
	<div >
		<div class="nav-top">
			<img src="@/assets/TEGG.png">
			<span>{{title}}</span>
			<!-- <p @click="fn()" class="p" >登录</p> -->
			<router-link to="/login" class="p">登录</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				title:"鸵鸟摄影网",
			}
		},
		components:{
			
		},
		methods:{
			
		}
	}
</script>

<style>
	.nav-top{
		width: 100%;
		height: 40px;
		background-color: #CCCCCC;
		border: 1px solid #cccccc;
		display: flex;
	}
	.nav-top img{
		height: 40px;
		width: 40px;
		padding-left: 80px;
	}
	.nav-top span{
		font-size: 14px;
		position: relative;
		top: 12px;
		padding-left: 15px;
	}
	.p{
		position: relative;
		top: 10px;
		left: 950px;
		padding-left: 20px;
		font-size: 14px;
		text-decoration: none;
	}
</style>
