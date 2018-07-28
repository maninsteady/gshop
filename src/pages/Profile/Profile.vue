<template>
	<div class="profile">
		<HeaderTop title="我的"/>
		<div class="profile-number">
			<router-link to="/login">
				<div class="profile-link">
					<div class="profile_image">
						<i class="iconfont icon-touxiang"></i>
					</div>
					<div class="user-info">
						<p class="user-info-top">登录/注册</p>
						<p><span class="user-icon">
							<i >暂无绑定手机号</i>
						</span></p>
					</div>
					<div class="arrow">
						<i class="iconfont icon-xiangyou"></i>
					</div>
				</div>
			</router-link>
				
		</div>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

	export default {
		components: {
			HeaderTop
		}
	}
</script>

<style>
	.profile-number{
		overflow: hidden;
		width: 100%;
		padding-top: 47px;
	}
	.profile-link{
		height: 100px;
		background-color: skyblue;
		width: 100%;
		padding: 20px 10px;
		box-sizing: border-box;
		display: flex;
		flex-direction: normal;
	}
	.profile_image{
		/*position: absolute;
		top: 67px;
		left: 10px;*/
		width: 60px;
		height: 60px;
		border-radius: 100%;
		background-color: #fff;
	}
	.profile_image i{
		font-size: 60px;
	}
	.user-info{
		height: 100%;
		padding-top: 4px;
		padding-left: 15px;
		color: #fff;
		box-sizing: border-box;
		line-height: 26px;
	}
	.arrow i{
		font-size: 16px;
		line-height: 60px;
		position: absolute;
		right: 20px;
		color: #fff;
	}
</style>