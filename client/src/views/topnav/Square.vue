<template>
	<div>
		<Top></Top>
		<div class="Squaretext">
			<!-- <h1>This is an about page</h1> -->
			<p>{{title}}</p>
			<div>
				<router-link to="/domestic/sichuan">四川新闻</router-link>
				<router-link to="/domestic/beijing">北京新闻</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Top from "@/views/index/Top.vue"
	export default {
		data() {
			return {
				title: "相信每个人都有念旧的理念，看遍了大城市的高楼大厦，人们更想欣赏古楼古建，感受到浓厚的历史感。也正因此，我国很多古代建筑都开发成了旅游景点，每年都吸引着各地游客前来观赏。而今天colour就大家介绍的是藏在贵州大山的“豪宅”，共有24层楼高99.9米，跟着colour一起去看看吧！"
			}
		},
		components:{
			Top
		}
	}
</script>
<style>
	.Squaretext {
		width: 100%;
		height: 200px;
		background-color: yellowgreen;
		
	}
	.Squaretext p{
		
	}
</style>
