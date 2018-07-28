<template>
	<div class="msite">
		<!-- 首页头部 -->
		<HeaderTop title="大兴区北神树西口荣善家园">
			<span class="header_search" slot="left">
				<i class="iconfont icon-iconfontsousuo"></i>
			</span>
			<span class="header_login" slot="right">
				<span class="header_login_text">登录|注册</span>
			</span>
		</HeaderTop>
		<!-- 首页导航 -->
		<div class="msite_nav">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄人</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄人</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄人</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄人</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄人</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄人</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄人</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄人</span>
						</a>
					</div>
					<div class="swiper-slide">
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄</span>
						</a>
						<a href="#" class="link_to_food">
							<div class="food_container">
								<img src="./images/1.jpg">
							</div>
							<span>小黄</span>
						</a>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<!-- 首页附近商家 -->
		<div class="msite_shop_list">
			<div class="shop_header">
				<div class="shop_header_top">
					<i class="iconfont icon-ai221"></i>
					<span class="shop_header_title">附近商家</span>
					<div class="clearfloat"></div>
				</div>
				<ShopList/>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'

	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import ShopList from '../../components/ShopList/ShopList.vue'


	export default {
		mounted () {
			//创建一个Swiper实例对象，来实现轮播
			new Swiper('.swiper-container', {
				loop: true, //循环播
				//分页器
				pagination: {
					el: '.swiper-pagination'
				}
			})
		},
		components: {
			HeaderTop,
			ShopList
		}
	}
</script>

<style>
	.msite{width: 100%;}
	.msite_nav{
		padding-top: 45px;
		width: 100%;
	}
	.swiper-container{
		position: relative;
		width: 100%;
		height: 200px;
		background-color: #fff;
		border-bottom: 1px solid #eee;
	}
	.swiper-slide{
		padding: 20px 10px 0 10px;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		position: relative;
	}
	.link_to_food{
		float: left;
		width: 25%;
		height: 43%;
		text-align: center;
	}
	.food_container{
		width: 80%;
		height: 70%;
		margin: 0 auto;
	}
	.food_container img{
		width: 100%;
		height: 100%;
	}
	.link_to_food span{
		color: #999;
	}
	.msite_shop_list{
		background-color: #fff;
		padding: 10px 0 60px 0;
	}
	.shop_header{
		width: 100%;
		border-top: 1px solid #eee;
	}
	.shop_header_top{
		width: 100%;
		padding: 10px 10px 0 10px;
		box-sizing: border-box;
	}
	.icon-ai221{
		float: left;
		color: #999;
		margin-top: -2px;
	}
	.shop_header_title{
		float: left;
		color: #999;
		display: block;
	}
	.clearfloat{
		clear: both;

	}
</style>