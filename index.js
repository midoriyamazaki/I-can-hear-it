// Based off of Shawn Van Every's Live Web
// http://itp.nyu.edu/~sve204/liveweb_fall2013/week3.html

// Using express: http://expressjs.com/
var express = require('express');

// CSV取得のため、node-fetchのバージョン2を使用することを想定してrequireを使う
const fetch = require('node-fetch'); // require形式で修正

// Create the app
var app = express();

const Papa = require('papaparse');   // CSVをパース chatGPT経由 ためし

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));



//chatGPT経由 ためし　ここから
// // 外部CSVデータのURL
 const csvUrl = 'https://dennou-q.gfd-dennou.org/arch/ken-suke/ebetsu/latest.csv';



// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io')(server);


// 1秒ごとにCSVデータを取得してクライアントに送信　ここから　＊動きました
setInterval(async () => {
  try {
    const response = await fetch(csvUrl);
    const data = await response.text();

    // CSVデータをパース。ヘッダーなしバージョンここから
        Papa.parse(data, {
      complete: (result) => {
        const parsedData = result.data; // パース結果のデータを取得
        console.log("パースされたデータ:", parsedData); // サーバー側のターミナルにデータを出力
        io.emit('csvData', parsedData); // クライアントにデータを送信
        //console.log(result.data); //　＊ターミナルからデータがでます
      },
      error: (error) => {
        console.error('CSVパースエラー:', error);
      },
      skipEmptyLines: true // 空行を無視
    });
  } catch (error) {
    console.error('データ取得エラー:', error);
  }
}, 1000);






// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
// io.sockets.on('connection',
//   // We are given a websocket object in our function
//   function (socket) {
//   console.log("We have a new client: " + socket.id);
  
    //マウスドラッグの描写。いらない
    // // When this user emits, client side: socket.emit('otherevent',some data);
    // socket.on('mouse',
    //   function(data) {
    //     // Data comes in as whatever was sent, including objects
    //     console.log("Received: 'mouse' " + data.x + " " + data.y);
      
    //     // Send it to all other clients
    //     socket.broadcast.emit('mouse', data);
        
    //     // This is a way to send to everyone including sender
    //     // io.sockets.emit('message', "this goes to everyone");

    //   }
    // );
    
//     socket.on('disconnect', function() {
//       console.log("Client has disconnected");
//        clearInterval(intervalId); // クライアントが切断されたらCSVデータ取得を停止
//     });
//   }
// );



