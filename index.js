const qrcode = require('qrcode');

let data = {
    name: "tejasvini tyagi",
    email: "tejas@23gmail.com",
    phonNo: 854854855,
    location: "delhi"
}
let stringData = JSON.stringify(data)
qrcode.toString(stringData,{type:'terminal'}, function(err, url){
    console.log(url);
})

qrcode.toString(stringData, { errorCorrectionLevel: 'H' }, function (err, url) {
    console.log(url)
  })