<template>
	<div>
		<Top></Top>
		<div class="Featuredtext">
			  <h1>9999</h1>
		  <!-- <h1>This is an about page</h1> -->
			<img :src="img">
		</div>
	</div>
  
</template>

<script>
	import Top from "@/views/index/Top.vue"
	export default {
		data() {
			return{
				img:"https://b.bdstatic.com/boxlib/20200917/2020091723511018392028426.jpg"
			}
		},
		components:{
			Top
		}
	}
</script>
<style>
	.Featuredtext {
		width: 100%;
		height: 400px;
		background-color: yellowgreen;
		
	}
	.Featuredtext img {
		height: 200px;
	}
</style>