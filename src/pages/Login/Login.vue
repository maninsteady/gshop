<template>
	<section class="loginContainer">
		<div class="loginInner">
			<div class="login_header">
				<h2 class="login_logo">迅疾送</h2>
				<div class="login_header_title">
					<a href="#" class="on onto">短信登录</a>
					<a href="#">密码登录</a>
				</div>
			</div>
			<div class="login_content">
				<form>
					<div class="on">
						<section class="login_message">
							<input type="tel" maxlength="11" placeholder="手机号">
							<button disabled="disabled" class="get_verification">获取验证码</button>
						</section>
						<section class="login_verification">
							<input type="tel" maxlength="8" placeholder="验证码">
						</section>
						<section class="login_hint">
							温馨提示：如没有账号请用手机号进行注册
							<a href="#">《用户服务协议》</a>
						</section>
					</div>
					<button class="login_submit">登录</button>
				</form>
				<a href="#" class="guanyu">关于我们</a>
			</div>
			<a href="#" class="go_back">
				<i class="iconfont icon-xiangzuo" @click="$router.back()">返回</i>
			</a>
		</div>
	</section>
</template>

<script>
	export default {}
</script>

<style>
	.loginContainer{
		background-color: #fff;
	}
	.login_header{
		padding-top: 40px;
		width: 100%;
		text-align: center;
	}
	.login_logo{
		color: skyblue;
		font-size: 40px;
		font-weight: bold;
	}
	.login_header_title{
		padding-top: 30px;
		padding-bottom: 10px;
		font-size: 14px;
	}
	.login_header_title a:last-child{
		margin-left: 20px;
	}
	.onto{
		color: skyblue;
		font-weight: bold;
		border-bottom: 3px solid skyblue;
	}
	.login_content{
		padding: 0 30px;
		text-align: center;
	}
	.login_message{
		position: relative;
	}
	.login_message input,.login_verification input{
		width: 100%;
		height: 40px;
		border: 2px solid #ccc;
		border-radius: 5px;
		text-indent: 10px;
		margin-bottom: 15px;
		outline:none;
	}
	.login_message input::placeholder,.login_verification input::placeholder{
		color: #999;
	}
	.get_verification{
		background-color: #fff;
		border: 0;
		position: absolute;
		right: 0;
		top: 2px;
		line-height: 40px;
		color: #ccc;
	}
	.login_hint{
		font-size: 14px;
		color: #ccc;
		margin-bottom: 20px;
	}
	.login_hint a{
		font-size: 14px;
		color: skyblue;
	}
	.login_submit{
		width: 100%;
		height: 35px;
		background-color: skyblue;
		border: 0;
		border-radius: 5px;
		color: #fff;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.guanyu{
		width: 14px;
		color: #ccc;
	}
	.go_back{
		position: fixed;
		top: 10px;
		left: 15px;
		color: skyblue;		
	}
	.go_back i{
		font-size: 16px;
	}
</style>