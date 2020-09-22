<template>
	<div>
		<Top></Top>
			<div class="Hometext">
				<h1>111</h1>
				<p class="hometext">{{title}}}</p>
			</div>
	</div>
	
</template>

<script>
	import Top from "@/views/index/Top.vue"
	export default {
		data() {
			return {
				title: "9月16日，习近平赴湖南郴州市汝城县文明瑶族乡沙洲瑶族村考察调研，当地发展扶贫产业、巩固脱贫成果等情况是习近平考察的重要内容。这是今年以来习近平第11次到地方考察。民族地区发展得怎么样， 少数民族贫困群众过得如何， 始终是习近平的牵挂。 他曾语重心长地说：让各族群众都过上好日子， 是我一直以来的心愿， 也是我们共同奋斗的目标。"
			}
		},
		components:{
			Top
		}
	}
</script>
<style>
	.Hometext {
		width: 100%;
		height: 400px;
		background-color: gainsboro;
		font-size: 10px;
	}
</style>