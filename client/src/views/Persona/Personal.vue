<template>
	<div class="Personal">
		
		<div class="Personal-left">
			<p class="Personal-ties">PERSONAL</p>
			<div class="Personal-info">
				<img :src="info.pic" >
				<p>{{info.username}}</p>
			</div>
			<div class="hooby">
				<div class="button-content" style="">风景控</div>
				<div class="button-content">资深发烧友</div>
				<div class="button-content">猫奴</div>
				<div class="button-content">星空爱好者</div>
				<div class="button-content">旅行</div>
			</div>
		</div>
		
		<div class="Personal-right">
			<div class="btn">
				<p id="xuanzhong">我的收藏库</p>
				<p>我的上传作品</p>
			</div>
			<div class="line"></div>
			<div class="content">
				<div v-for="(el,index) in data1" class="img-box" :key="index">
					<img :src="el.imgsrc" >
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		props:[],
		data(){
			return{
				info:{
					username:"hahaha",
					pic:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=378197393,4138783667&fm=11&gp=0.jpg",
				},
				data1:[
					{
						imgsrc:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3321001490,2413995741&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=364397611,3916868751&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1534288623,1292557607&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2711638588,2028725496&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1122853288,667455707&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2926199504,3558053336&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543086168,3884830529&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2477466780,1533506913&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1534288623,1292557607&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2461269854,144434584&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1534288623,1292557607&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3420531094,1110434589&fm=26&gp=0.jpg"
					},
					
				],
				data2:[
					{
						imgsrc:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3321001490,2413995741&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=364397611,3916868751&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1534288623,1292557607&fm=26&gp=0.jpg"
					},
					{
						imgsrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2711638588,2028725496&fm=26&gp=0.jpg"
					}
				]
			}
		},
		methods:{
			
		},
		components:{
			
		}
	}
</script>

<style scoped>
	
	.Personal{
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-left: 30px;
		box-sizing: border-box;
		padding-top: 20px;
	}
	.Personal-left{
		width: 200px;
		height: 600px;
		background-color: #F4F8F7;
		border-radius: 5px;
	}
	.Personal-left:hover{
		box-shadow : 0 3px 9px rgba(0, 0, 0, 0.48), 0 6px 14px rgba(0, 0, 0, 0.32) ;
	}
	.Personal-ties{
		width: 200px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		padding-top: 30px;
		font-family: "arial black";
		margin-bottom: 10px;
	}
	.Personal-info{
		width: 200px;
		height: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.Personal-info img{
		width: 120px;
		height: 120px;
		border-radius: 60px;
	}
	
	.hooby{
		width: 200px;
		height: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.button-content{
	    width: 100px;  
	    height: 30px;  
	    background-color: #5CD36C;
	    font-size: small;  
	    line-height: 30px;  
	    text-align: center;  
		position: relative;
		margin-bottom: 10px;
	}  
	.button-content:before{ 
	  	content:'';
	    width:20px;  
	    height: 0%;  
	    border: 15px solid;  
	    border-color: transparent #D19B70 transparent transparent ;   
	    position: absolute;  
	    right:100px;  
	    top: 0px; 
	}  
	
	.Personal-right{
		width: 80%;
		/* border: 1px solid #F4A460; */
		box-sizing: border-box;
	}
	.btn{
		width: 400px;
		height: 55px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.btn p{
		display: inline-block;
		width: 160px;
		height: 50px;
		border-radius: 25px;
		line-height: 50px;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
		background-color: #EFF2F2;
		color: #B8BBBA;
		cursor:pointer 
	}
	.btn p:hover{
		box-shadow : 0 1px 3px rgba(0, 0, 0, 0.49), 0 2px 5px rgba(0, 0, 0, 0.44) ;
	}
	
	.line{
		width: 90%;
		height: 1px;
		box-sizing: border-box;
		border: 0.5px solid #B8BBBA;
		background-color: #B8BBBA;
		margin-top: 10px;
	}
	
	#xuanzhong{
		background-color: #66A6E0;
		color:#DEE1B5;
	}
	.content{
		margin-top: 20px;
		width: 90%;
		height: 400px;
		/* background-color: #B8BBBA; */
		box-sizing: border-box;
		padding:5px 10px ;
		/* float: left; */
		display: flex;
		flex-wrap: wrap;
	}
	.img-box{
		width: 24%;
		height: 200px;
		box-sizing: border-box;
		margin: 2px 3px;
	}
	.img-box img{
		width: 100%;
		height: 200px;
	}  
	.img-box:hover{
		box-shadow : 0 3px 8px rgba(0, 0, 0, 0.48), 0 5px 12px rgba(0, 0, 0, 0.34) ;
	}
	
</style>
