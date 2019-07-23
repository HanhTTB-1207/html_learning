function AvatarClick(element) {
	var mySrc = element.getAttribute('src');
	if (mySrc==='images/cs-logo.png') {
		element.setAttribute ('src', 'images/suplo.png');
	} else {
		element.setAttribute ('src', 'images/cs-logo.png')
	}
}

const data = [
	{
		id: 0,
		imgURL: 'images/suplo.png',
		ambassadorName: '安倍 明慶',
		instagramAccount: 'tomo___1230',
		instagramLink: 'https://www.instagram.com/tomo___1230',
		messageDate: '2019年5月2日 16:40:22',
	},
	{
		id: 1,
		imgURL: 'images/suplo.png',
		ambassadorName: '小西 はるみ',
		instagramAccount: 'nonnon0319',
		instagramLink: 'https://www.instagram.com/nonnon0319',
		messageDate: '2019年4月24日 19:27:30',
	},
	{
		id: 2,
		imgURL: 'images/suplo.png',
		ambassadorName: '堀川 かおり',
		instagramAccount: 'yuika00802',
		instagramLink: 'https://www.instagram.com/yuika00802',
		messageDate: '2019年4月24日 11:22:02',
	},
	{
		id: 3,
		imgURL: 'images/suplo.png',
		ambassadorName: '國吉 徹',
		instagramAccount: 'dev',
		instagramLink: 'https://www.instagram.com/dev',
		messageDate: '2019年4月10日 16:18:04',
	},
	{
		id: 4,
		imgURL: 'images/suplo.png',
		ambassadorName: '川野 麻由子',
		instagramAccount: 'hikonyan0909',
		instagramLink: 'https://www.instagram.com/hikonyan0909',
		messageDate: '2019年5月2日 16:40:22',
	},
	{
		id: 5,
		imgURL: 'images/suplo.png',
		ambassadorName: '首藤 砂羽',
		instagramAccount: 'hello_takumi',
		instagramLink: 'https://www.instagram.com/hello_takumi',
		messageDate: '2019年5月2日 16:40:22',
	},
	{
		id: 6,
		imgURL: 'images/suplo.png',
		ambassadorName: '堀 太朗',
		instagramAccount: 'pastanojouou',
		instagramLink: 'https://www.instagram.com/pastanojouou',
		messageDate: '2019年5月2日 16:40:22',
	},
	{
		id: 7,
		imgURL: 'images/suplo.png',
		ambassadorName: '青木 知世',
		instagramAccount: 'reikonohmi',
		instagramLink: 'https://www.instagram.com/reikonohmi',
		messageDate: '2019年5月2日 16:40:22',
	}
]

var leftBox = document.querySelectorAll('.panel-left')[0]

const listElements = data.map(function(item) {
	return '<div class="left-box"><div class="content-preview"><img class="avatar-large" onclick="AvatarClick(this)" src=' + item.imgURL + ' alt="avatar"><div><div class="ambassador-name">' + item.ambassadorName + '</div><a href="' + item.instagramLink + '">' + item.instagramAccount + '</a></div></div><div class="message-date">' + item.messageDate + '</div></div>'
})

leftBox.innerHTML = listElements.join('')

