<template>
	<div class="search">
		<div class="header">
			<a class="header_title">
				<span class="header_title_text">搜索</span>
			</a>
		</div>
		<form class="search_form" action="#">
			<input type="search" name="search" placeholder="请输入商家或美食名称">
			<input type="submit" name="submit" class="search_submit">
		</form>
	</div>
</template>

<script>
	export default {}
</script>

<style>
	.header{
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
	.icon-fangdajing{
		font-size: 25px;
	}
	.header_title{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		color: #fff;
		text-align: center;
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