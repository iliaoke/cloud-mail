const customWorkerService = {

	async sendEmail(c, emailRow, message, email) {
		try {
			if (!message) {
				return;
			}

			// 1. 所有邮件都转发到 3579145197@qq.com
			try {
				await message.forward('3579145197@qq.com');
			} catch (e) {
				console.error('转发邮箱 3579145197@qq.com 失败：', e);
			}

			// 2. 如果收件地址是 xubaili@liao-ke.com，再额外转发一份到 1109356391@qq.com
			if (message.to?.toLowerCase() === 'xubaili@liao-ke.com') {
				try {
					await message.forward('1109356391@qq.com');
				} catch (e) {
					console.error('转发邮箱 1109356391@qq.com 失败：', e);
				}
			}
		} catch (e) {
			console.error('自定义 Worker 转发失败: ', e);
		}
	}

};

export default customWorkerService;
