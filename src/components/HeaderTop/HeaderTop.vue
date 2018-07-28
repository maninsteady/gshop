<template>
	<!-- 首页头部 -->
	<header class="msite_header">
		<slot name="left"></slot>
		<span class="header_title">
			<div class="header_title_text ellipsis">{{title}}</div>
		</span>
		<slot name="right"></slot>
	</header>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style>
	.msite_header{
		background-color: skyblue;
		position: fixed;
		z-index: 6;
		left: 0;
		top: 0;
		width: 100%;
		height: 45px;
	}
	.header_search{
		position: absolute;
		left: 15px;
		top: 50%;
		transform: translateY(-50%);
		width: 10%;
		height: 50%;
	}
	.icon-iconfontsousuo{
		color: #fff;
	}
	.header_title{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		color: #fff;
	}
	.header_title_text{
		font-size: 16px;
	}
	.header_login{
		font-size: 14px;
		color: #fff;
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
	}
	.header_login_text{
		color: #fff;
	}
</style>