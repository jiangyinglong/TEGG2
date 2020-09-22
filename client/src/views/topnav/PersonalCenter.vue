<template>
	<div>
		<Top></Top>
		<div class="PersonalCentertext">
			<!-- <h1>This is an about page</h1> -->
			<p>{{title}}</p>
		</div>
	</div>
</template>

<script>
	import Top from "@/views/index/Top.vue"
	export default {
		data() {
			return {
				// title: "现在随着很多楼市政策的不稳定，比如出现质量问题、延期交房或者是价格突然有很大的起伏的情况，导致了很多的人把目光都盯准了二手房，虽然也可能房龄和房东的意外情况，但是对于大多数的人来说，二手房也具有比新房好的特性，就是它能够直接入住、一般不会存在质量问题，节省装修等等。"
			}
		},
		components:{
			Top
		}
	}
</script>
<style>
	.PersonalCentertext {
		width: 100%;
		height: 200px;
		background-color: yellowgreen;
		
	}
	.PersonalCentertext p{
		
	}
</style>
