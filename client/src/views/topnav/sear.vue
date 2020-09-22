<template>
	<div>
		<Top></Top>
		<div class="searchimg">
			<div v-for="el in arr">
				<img :src="el.src">
			</div>
		</div>
	</div>
</template>

<script>
	import Top from "@/views/index/Top.vue"
	export default{
		data(){
			return{
				arr:[
					{
						src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg"
					},
					{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600695289628&di=9dd73ec7e0ff9b6aa45d11ef502d0726&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2Fday_110320%2F11032021067b907d3ed754dd93.jpg"
					},
					{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600695289639&di=f9dd858cd8d3b69eec55e933ccbdbb4f&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg"
					},
					{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600695289643&di=70e4136288f73e2aaa73e9291de054a9&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg"
					},
					{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600695289639&di=f9dd858cd8d3b69eec55e933ccbdbb4f&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg"
					},
					{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600695289643&di=70e4136288f73e2aaa73e9291de054a9&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg"
					},
					{
						src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg"
					},
					{
						src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600695289628&di=9dd73ec7e0ff9b6aa45d11ef502d0726&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2Fday_110320%2F11032021067b907d3ed754dd93.jpg"
					},
					
				]
			}
		},
		components:{
			Top
		}
	}
</script>

<style>
	.searchimg{
		width: 100%;
		background-color: #DCDCDC;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 20px;
	}
	.searchimg img{
		width: 300px;
		height: 200px;
	}
</style>
