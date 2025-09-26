const config = {
	//网页元数据
	metaData: {
		title: '小杨小羊的个人主页🎉',
		description: '欢迎来到小杨小羊的奇妙世界！',
		keywords: '小杨小羊,小杨小羊,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/touxiang.jpg", // 头像
	welcometitle: "Hi, I'm xiaoyang", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['乐观开朗', '温柔体贴', '随和亲切', '冷静沉着', '才思敏捷', '风趣幽默', '刚正不阿', '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "video",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"

			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://www.github.com/" },
		{ icon: "mdi-email", link: "mailto:1719787591@qq.com" },
		{ icon: "mdi-qqchat", link: "https://im.qq.com/" },
		{ icon: "mdi-wechat", link: "https://wx.qq.com/" },
		{ icon: "mdi-youtube", link: "https://www.youtube.com" },
		{ icon: "mdi-facebook", link: "https://www.facebook.com" }
	],

	//打字机
	typeWriterStrings: [
		"如果你看到了这行字，说明我已经成功吸引到了你的注意力。",
		"顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
		"心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
		"生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887

	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 点我前往", img: "/img/1.png", title: "3D照片墙", subtitle: "会一直记录我们的照片", text: "在我荒瘠的土地上，你是最后的玫瑰", url: "http://xytx321.xozv.top/html%E9%A1%B5%E9%9D%A2/3D%E7%85%A7%E7%89%87%E5%A2%99/photo_wall.html?_ijt=etml6m38eqa7qssad3fsobvctm&_ij_reload=RELOAD_ON_SAVE", show: false },
		{ go: "🗂️ 点我前往", img: "/img/2.png", title: "弹幕爱心", subtitle: "为严思茹宝宝打call！", text: "自从我们相遇的那一刻， 你是我白天黑夜不落的星", url: "http://xytx321.xozv.top/html%E9%A1%B5%E9%9D%A2/%E7%88%B1%E5%BF%83%E4%BB%A3%E7%A0%81/%E5%BC%B9%E5%B9%95%E7%88%B1%E5%BF%83%E8%B7%B3%E5%8A%A8/%E5%BC%B9%E5%B9%95%E7%88%B1%E5%BF%83%E8%B7%B3%E5%8A%A8.html?_ijt=etml6m38eqa7qssad3fsobvctm&_ij_reload=RELOAD_ON_SAVE", show: false },
		{ go: "📝 点我前往", img: "/img/3.png", title: "一封书信", subtitle: "送给雨婷的一封书信", text: "太空浩瀚，岁月悠长，我始终乐于和你分享同一颗行星和同一个时代", url: "http://xytx321.xozv.top/html%E9%A1%B5%E9%9D%A2/%E4%B8%80%E5%B0%81%E4%B9%A6%E4%BF%A1/letter.html?_ijt=8isdtfisaotdrm15vg5uhn1lok&_ij_reload=RELOAD_ON_SAVE", show: false },
		{ go: "👍 点我前往", img: "/img/4.png", title: "爱心树", subtitle: "记录我们的爱情之树", text: "只是一想到你，世界在明亮的光晕里倒退，一些我们以为永恒的，包括时间都不堪一击", url: "http://xytx321.xozv.top/html%E9%A1%B5%E9%9D%A2/%E7%88%B1%E5%BF%83%E4%BB%A3%E7%A0%81/%E7%88%B1%E5%BF%83%E6%A0%91/index.html?_ijt=etml6m38eqa7qssad3fsobvctm&_ij_reload=RELOAD_ON_SAVE", show: false },
		{ go: "🗃 点我前往", img: "/img/5.png", title: "黑客爱心", subtitle: "黑客爱心入侵", text: "我看过归鸟蝉鸣，烈日骄阳，我看见白日梦的尽头是你，从此天光大亮，你是我全部的幻想和渴望", url: "http://xytx321.xozv.top/html%E9%A1%B5%E9%9D%A2/%E7%88%B1%E5%BF%83%E4%BB%A3%E7%A0%81/%E9%BB%91%E5%AE%A2%E7%88%B1%E5%BF%83%E8%B7%B3%E5%8A%A8/2025%E9%BB%91%E5%AE%A2%E7%88%B1%E5%BF%83.html?_ijt=etml6m38eqa7qssad3fsobvctm&_ij_reload=RELOAD_ON_SAVE", show: false },
		{ go: "🎨 点我前往", img: "/img/6.png", title: "Project 6", subtitle: "6,000 miles of wonder", text: "我所问出的问题都关于你，我所踏出的每步都指向你。处处皆是你，声音所至，目光所及", url: "https://leleo.top", show: false },
		{ go: "💍 点我前往", img: "/img/9.png", title: "Project 7", subtitle: "7,000 miles of wonder", text: "我画了你身边每一个人，但却没有画你。我觉得你亮得耀眼，使我的目光无法停留", url: "https://leleo.top", show: false },
		{ go: "🔍 点我前往", img: "/img/8.png", title: "Project 8", subtitle: "8,000 miles of wonder", text: "生活中没什么令人惊喜的事，我也觉得无所谓，不过能认识你，真是太幸运了", url: "https://leleo.top", show: false },
	],

	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 小杨小羊"],
}

export default config
