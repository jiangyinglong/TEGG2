<template>
	<div>
		<Top></Top>
		<div class="Abouttext">
			<p class="title">业界动态</p>
			<div v-for="el in arr">
				<p class="titles">{{el.titles}}</p>
				<div class="itemimg">
					<p v-for="item in el.src">
						<img :src="item.imgurl">
					</p>
				</div>
		
			</div>
		
			<h1>专题报道</h1>
		  <h1>评测试用</h1>
			
		</div>
	</div>
</template>

<script>
	import Top from "@/views/index/Top.vue"
	export default {
		data() {
			return {
				arr: [{
						titles: "三星Galaxy Tab S7｜S7+国内发布 新一代旗舰平板耀世来袭",
						src: [{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/14/Sys/200814105330875.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/14/Sys/200814110221437.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/6/Sys/200806072916250.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/9/2/Sys/200902084010765.jpg"
							}
						]
					},
					{
						titles: "尽情工作 尽享生活 三星Galaxy Note20系列生态新品中国发布",
						src: [{
							imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2020/8/14/Sys/200814105231375.jpg"
						}]
					},
					{
						titles: "3030万像素 佳能推出全画幅专微EOS R",
						src: [{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/9/6/Canon-EOSR-1.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/9/6/Canon-EOSR-2.jpg"
							},
							{
								imgurl: "http://www.dpnet.com.cn/FileServer/SYS/2018/9/6/Canon-EOSR-3.jpg"
							}
						]
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
	.Abouttext {
		width: 100%;
		background-color: lightgrey;
		
	}
	.title{
		font-size: 20px;
		padding-left: 10px;
	}
	.titles {
		font-size: 16px;
		padding-left: 10px;
		margin-top: -10px;
	}
	
	.itemimg {
		display: flex;
		margin-top: -10px;
	}

	.Abouttext img {
		width: 200px;
		height: 150px;
		padding: 2px;
		margin-top: -10px;
	}
</style>
