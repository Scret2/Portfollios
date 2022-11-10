console.log("main.js!!");

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	// Axiosを使ってみる!!
	const option = {responseType: "blob"};
	axios.get("https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json", option).then(res=>{
		// 通信が成功した場合
		console.log("通信成功!!");
		console.log(res);// データそのもの
		res.data.text().then(str=>{
			let arr = JSON.parse(str);// JSONオブジェクトに変換
			console.log(arr);// データ確認
			console.log(arr[0]);//0番目のデータ
			console.log(arr[0]["publishingOffice"]);//0番目のデータ
			console.log(arr[0]["reportDatetime"]);//0番目のデータ
			//東京地方のデータを抜き取る
			console.log(arr[0]["timeSeries"][0]["areas"][0]["area"]["name"]);//0番目のデータ　TODO：東京地方
			console.log(arr[0]["timeSeries"][0]["areas"][0]["waves"][0]);//0番目のデータ　TODO: 0.5メートル
			console.log(arr[0]["timeSeries"][0]["areas"][0]["weathers"][0]);//0番目のデータ　TODO: 晴時々　くもり
			console.log(arr[0]["timeSeries"][0]["areas"][0]["winds"][0]);//0番目のデータ　TODO: 南西の風
        //東京の天気データをHTMLに表示
			//$(".tokyo_weather").append("<p>"(arr[0]["timeSeries"][0]["areas"][0]["area"]["name"])"/p>");
			$(".tokyo_weather").text((arr[0]["timeSeries"][0]["areas"][0]["area"]["name"]));
			$(".tokyo_weather").append(arr[0]["timeSeries"][0]["areas"][0]["waves"][0]);
			//伊豆諸島北部のデータを抜き取る
			console.log(arr[0]["timeSeries"][0]["areas"][1]["area"]["name"]);//1番目のデータ　TODO：伊豆諸島北部
			console.log(arr[0]["timeSeries"][0]["areas"][1]["waves"][0]);//1番目のデータ　TODO: １．５メートル
			console.log(arr[0]["timeSeries"][0]["areas"][1]["weathers"][0]);//1番目のデータ　TODO: 晴れ　時々　くもり
			console.log(arr[0]["timeSeries"][0]["areas"][1]["winds"][0]);//1番目のデータ　TODO: 南西の風　後　やや強く
		//伊豆諸島南部のデータを抜き取る
			console.log(arr[0]["timeSeries"][0]["areas"][2]["area"]["name"]);//2番目のデータ　TODO：伊豆諸島南部
			console.log(arr[0]["timeSeries"][0]["areas"][2]["waves"][0]);//2番目のデータ　TODO: １．５メートル
			console.log(arr[0]["timeSeries"][0]["areas"][2]["weathers"][0]);//2番目のデータ　TODO: くもり　時々　晴れ　八丈島　では　昼過ぎ　から　夕方　雨
			console.log(arr[0]["timeSeries"][0]["areas"][2]["winds"][0]);//2番目のデータ　TODO: 南西の風　後　西の風
		//小笠原諸島のデータを抜き取る
		console.log(arr[0]["timeSeries"][0]["areas"][3]["area"]["name"]);//3番目のデータ　TODO：小笠原諸島
			console.log(arr[0]["timeSeries"][0]["areas"][3]["waves"][0]);//3番目のデータ　TODO: ２．５メートル　後　３メートル　うねり　を伴う
			console.log(arr[0]["timeSeries"][0]["areas"][3]["weathers"][0]);//3番目のデータ　TODO: くもり
			console.log(arr[0]["timeSeries"][0]["areas"][3]["winds"][0]);//3番目のデータ　TODO: 東の風　やや強く　後　北東の風　やや強く
		});
	}).catch(err=>{
		// 通信が失敗した場合
		console.log("通信失敗...");
		console.log(err);// エラー内容
	});
});