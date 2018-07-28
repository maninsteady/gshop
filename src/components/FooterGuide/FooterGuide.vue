<template>
	<div class="footer_guide">
		<span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
			<span class="item_icon">
				<i class="iconfont icon-icon01"></i>
			</span>
			<span>外卖</span>
		</span>
		<span class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
			<span class="item_icon">
				<i class="iconfont icon-fangdajing"></i>
			</span>
			<span>搜索</span>
		</span>
		<span class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
			<span class="item_icon">
				<i class="iconfont icon-benzi"></i>
			</span>
			<span>订单</span>
		</span>
		<span class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
			<span class="item_icon">
				<i class="iconfont icon-my"></i>
			</span>
			<span>我的</span>
		</span>
	</div>
</template>

<script>
	export default {
		methods: {
			goTo(path) {
				this.$router.replace(path)
			}
		}
	}
</script>

<style>
	.footer_guide{
		border-top: 1px solid #e4e4e4;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 6;
		background-color: #fff;
		width: 100%;
		height: 50px;
		display: flex;
	}
	.guide_item{
		display: flex;
		flex: 1;
		text-align: center;
		flex-direction: column;
		align-items: center;
		margin: 5px;
		color: #999999;
	}
	.on{color: skyblue;}
	span{
		font-size: 12px;
		margin-top: 2px;
		margin-bottom: 2px;
	}
	.iconfont{font-size: 22px;}
	.iconfonts{font-size: 60px;}
</style>