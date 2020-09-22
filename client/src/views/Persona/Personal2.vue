<template>
	<div>
		<Top></Top>
		<div class="Personal">
			<div class="Personal-left">
				<p class="Personal-ties">PERSONAL</p>
				<div class="Personal-info">
					<!-- 头像 -->
					<!-- <img :src="info.pic" > -->
					<img @click="show2()" class="tximg" :src="tximg" />

					<!-- 用户名 -->
					<!-- <p>{{info.username}}</p> -->
					<p>{{email}}</p>
				</div>
				<!-- 修改昵称输入框 -->
				<div v-show="nicheng" class="nicheng">
					<!-- 隐藏 -->
					<button @click="hide()">&#10006</button>
					<input v-model="username" type="text" />
					<!-- 确认 -->
					<button @click="send()">&#10004</button>
				</div>
				<!-- 修改头像输入框 -->
				<div v-show="touxing" class="touxingbox">
					<div class="changeimgbox">
						<button @click="hide2()">&#10006</button>
						<div class="txfile">
							<div>更换头像</div>
							<input @change="filechange($event)" type="file" />
						</div>
						<button @click="send2()">&#10004</button>
					</div>
				</div>
				<div class="hooby">
					<div @click="show1()" class="button-content">修改昵称</div>
					<div @click="show2()" class="button-content">修改头像</div>
					<div @click="destroy()" class="button-content">注销账号</div>
					<div @click="signout()" class="button-content">退出登录</div>
					<!-- 上面添加的 -->
					<div class="button-content" style>风景控</div>
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
						<img :src="el.imgsrc" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Top from "@/views/index/Top.vue"
	export default {
		props: [],
		data() {
			return {
				username: "", //昵称
				touxing: false, //更改头像选择框
				nicheng: false, //更改昵称选择框
				myemail: "",
				email: "",
				tximg: "",
				file1: "",
				//   info: {
				//     username: "hahaha",
				//     pic:
				//       "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=378197393,4138783667&fm=11&gp=0.jpg",
				//   },
				data1: [{
						imgsrc: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3321001490,2413995741&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=364397611,3916868751&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1534288623,1292557607&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2711638588,2028725496&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1122853288,667455707&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2926199504,3558053336&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2543086168,3884830529&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2477466780,1533506913&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1534288623,1292557607&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2461269854,144434584&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1534288623,1292557607&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3420531094,1110434589&fm=26&gp=0.jpg",
					},
				],
				data2: [{
						imgsrc: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3321001490,2413995741&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=364397611,3916868751&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1534288623,1292557607&fm=26&gp=0.jpg",
					},
					{
						imgsrc: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2711638588,2028725496&fm=26&gp=0.jpg",
					},
				],
			};
		},
		mounted() {
			console.log(999);
			this.$axios.get("/userinfo").then((res) => {
				console.log("000000000", res.data);
				if (res.data[0]) {
					// this.email = `${res.data[0].email}`;
					this.myemail = `${res.data[0].email}`;
					this.tximg = res.data[0].img;
					if (res.data[0].username) {
						this.email = `${res.data[0].username}`;
					} else {
						this.email = `${res.data[0].email}`;
					}
				} else {
					this.email = "未登录！";
					this.tximg = "http://localhost:7001/public/upload/touxiang.jpg";
				}
			});
		},
		methods: {
			// 上传头像
			filechange(e) {
				//e.target.files[0]获取图片信息
				//把他设置到file1里面，然后我们就可以在send()里面用这个信息
				this.file1 = e.target.files[0];
			},
			//提交上传头像
			send2() {
				var f = new FormData();
				f.append("file1", this.file1);
				f.append("myemail", this.myemail);
				var res = this.$axios
					.post("/register", f, {
						header: {
							"content-Tyoe": "application/x-www-form-urlencoded"
						},
					})
					.then((res) => {
						console.log(res);
						this.$axios.get("/userinfo").then((res) => {
							// console.log(res.data);
							this.tximg = `${res.data[0].img}`;
						});
					});
			},
			//修改昵称
			show1() {
				if (this.email == "未登录！") {
					alert("请先登录！");
				} else {
					this.nicheng = true;
				}
			},
			//修改头像
			show2() {
				console.log(this.email);
				if (this.email == "未登录！") {
					alert("请先登录！");
				} else {
					this.touxing = true;
				}
			},
			//隐藏修改昵称输入框
			hide() {
				this.nicheng = false;
			},
			//隐藏修改头像输入框
			hide2() {
				this.touxing = false;
			},
			//改昵称
			send() {
				if (this.username) {
					console.log(this.username);
					this.$axios
						.get(`/username?username=${this.username}&myemail=${this.myemail}`)
						.then((res) => {
							console.log(res);
							if (res) {
								this.$axios.get("/userinfo").then((res) => {
									// console.log(res.data);
									if (res.data[0]) {
										this.email = `${res.data[0].username}`;
									}
								});
							}
						});
				} else {
					alert("昵称为空！");
				}
			},
			//注销账号
			destroy() {
				this.$axios.get("/destroy").then((res) => {
					console.log(res);
				});
				this.email = "未登录！";
				this.tximg = "http://localhost:7001/public/upload/touxiang.jpg";
				// require("@/assets/logo.png");
				// http://localhost:7001/public/upload/touxiang.jpg
			},

			//退出登录  这个有问题
			signout() {
				this.email = "未登录！";
				this.tximg = "http://localhost:7001/public/upload/touxiang.jpg";
				var storage = window.localStorage;
				storage.clear();
			},
		},
		components:{
			Top
		}
	};
</script>

<style scoped>
	.Personal {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-left: 30px;
		box-sizing: border-box;
		padding-top: 20px;
	}

	.Personal-left {
		width: 200px;
		height: 688px;
		background-color: #f4f8f7;
		border-radius: 5px;
		transition: all 0.5s;
	}

	.Personal-left:hover {
		box-shadow: 0 3px 9px rgba(0, 0, 0, 0.48), 0 6px 14px rgba(0, 0, 0, 0.32);
	}

	.Personal-ties {
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

	.Personal-info {
		width: 200px;
		height: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.Personal-info img {
		width: 120px;
		height: 120px;
		border-radius: 60px;
	}

	.hooby {
		width: 200px;
		height: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.button-content {
		width: 100px;
		height: 30px;
		background-color: #5cd36c;
		font-size: small;
		line-height: 30px;
		text-align: center;
		position: relative;
		margin-bottom: 10px;
	}

	.button-content:before {
		content: "";
		width: 20px;
		height: 0%;
		border: 15px solid;
		border-color: transparent #d19b70 transparent transparent;
		position: absolute;
		right: 100px;
		top: 0px;
	}

	.Personal-right {
		width: 80%;
		/* border: 1px solid #F4A460; */
		box-sizing: border-box;
	}

	.btn {
		width: 400px;
		height: 55px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.btn p {
		display: inline-block;
		width: 160px;
		height: 50px;
		border-radius: 25px;
		line-height: 50px;
		text-align: center;
		font-size: 18px;
		font-weight: 600;
		background-color: #eff2f2;
		color: #b8bbba;
		cursor: pointer;
	}

	.btn p:hover {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.49), 0 2px 5px rgba(0, 0, 0, 0.44);
	}

	.line {
		width: 90%;
		height: 1px;
		box-sizing: border-box;
		border: 0.5px solid #b8bbba;
		background-color: #b8bbba;
		margin-top: 10px;
	}

	#xuanzhong {
		background-color: #66a6e0;
		color: #dee1b5;
	}

	.content {
		margin-top: 20px;
		width: 90%;
		height: 400px;
		/* background-color: #B8BBBA; */
		box-sizing: border-box;
		padding: 5px 10px;
		/* float: left; */
		display: flex;
		flex-wrap: wrap;
	}

	.img-box {
		width: 24%;
		height: 200px;
		box-sizing: border-box;
		margin: 2px 3px;
	}

	.img-box img {
		width: 100%;
		height: 200px;
	}

	.img-box:hover {
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.48), 0 5px 12px rgba(0, 0, 0, 0.34);
	}

	/* 昵称修改 */
	.nicheng {
		/* display: none; */
		/* height: 50px; */
		top: 310px;
		left: 45px;
		position: absolute;
		/* background-color: #66a6e0; */
	}

	.nicheng input {
		width: 120px;
		/* background-color: aqua; */
	}

	/* 更改头像 */
	.touxingbox {
		/* display: none; */
		/* height: 50px; */
		top: 310px;
		left: 62px;
		position: absolute;
		/* background-color: #66a6e0; */
	}

	.changeimgbox {
		display: flex;
		justify-content: space-between;
		width: 150px;
		/* background-color: coral; */
	}

	.txfile {
		position: relative;
		display: inline-block;
		background: #d0eeff;
		border: 1px solid #99d3f5;
		border-radius: 4px;
		padding: 4px 12px;
		overflow: hidden;
		color: #1e88c7;
		text-decoration: none;
		text-indent: 0;
		line-height: 20px;
	}

	.txfile input {
		position: absolute;
		font-size: 100px;
		right: 0;
		top: 0;
		opacity: 0;
	}

	.txfile:hover {
		background: #aadffd;
		border-color: #78c3f3;
		color: #004974;
		text-decoration: none;
	}
</style>
