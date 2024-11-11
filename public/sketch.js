// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

let mymap;
let canvas;
const mappa = new Mappa("Leaflet");

const options = {
  lat: 33.580, //before 0, Fukuoka 33.58   H 43.115,  K33.621,
  lng: 130.37,  //before 0, Fukuoka 130.37  H 141.539  K133.720
  zoom: 11.5, //before 1.5, Fukuoka 10.50
  style: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};


//色丸
let commonp = 0.0001;


// Keep track of our socket connection
var socket;

//CSVデータ取得
var csvData = [];

function setup() {
  //new
  canvas = createCanvas(windowWidth, 800);
  mymap = mappa.tileMap(options);
  mymap.overlay(canvas);

  //before
  //createCanvas(800, 400);
  //background(0);

  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://localhost:3000');


  // CSVデータを受信した際に更新する
  socket.on('csvData', function(data) {
    console.log("Received CSV data:", data); // コンソールにデータを表示
    csvData = data; // csvData を更新
  });
  
}

function draw() {
  //background(0); // before: 毎フレーム背景をリセットして描画し直す
  clear(); //new


  // csvDataが存在する場合
 // if (csvData.length > 0) {  //これではcsvData[51][0]へのアクセス時に、csvDataのインデックスが存在しないエラーになった
 // if (csvData.length > 51 && csvData[51] && csvData[51][0] !== undefined) {  //これは動くが、エラーがたまにでる
    if (csvData.length > 51) {   //これも動くが、エラーがたまにでる

    // // 最後の行のデータを取得
    let lastIndex = csvData.length - 1; // 最後のインデックス
    let valueF222No = parseFloat(csvData[lastIndex][0]); // 0列目の値を取得
    let valueF222 = parseFloat(csvData[lastIndex][3]); // 4列目の値を取得
    let valueF222G = parseFloat(csvData[lastIndex][5]); // 6列目の値を取得

    // let valueF1No = parseFloat(csvData[9][0]); // 0列目の値を取得
    // let valueF1 = parseFloat(csvData[9][3]); // 4列目の値を取得
    // let valueF1G = parseFloat(csvData[9][5]); // 6列目の値を取得

    let valueF2No = parseFloat(csvData[10][0]); // 0列目の値を取得
    let valueF2 = parseFloat(csvData[10][3]); // 4列目の値を取得
    let valueF2G = parseFloat(csvData[10][5]); // 6列目の値を取得

    let valueF3No = parseFloat(csvData[11][0]); // 0列目の値を取得
    let valueF3 = parseFloat(csvData[11][3]); // 4列目の値を取得
    let valueF3G = parseFloat(csvData[11][5]); // 6列目の値を取得

    let valueF4No = parseFloat(csvData[12][0]); // 0列目の値を取得
    let valueF4 = parseFloat(csvData[12][3]); // 4列目の値を取得
    let valueF4G = parseFloat(csvData[12][5]); // 6列目の値を取得

    let valueF5No = parseFloat(csvData[13][0]); // 0列目の値を取得
    let valueF5 = parseFloat(csvData[13][3]); // 4列目の値を取得
    let valueF5G = parseFloat(csvData[13][5]); // 6列目の値を取得

    let valueF6No = parseFloat(csvData[14][0]); // 0列目の値を取得
    let valueF6 = parseFloat(csvData[14][3]); // 4列目の値を取得
    let valueF6G = parseFloat(csvData[14][5]); // 6列目の値を取得

    let valueF7No = parseFloat(csvData[15][0]); // 0列目の値を取得
    let valueF7 = parseFloat(csvData[15][3]); // 4列目の値を取得
    let valueF7G = parseFloat(csvData[15][5]); // 6列目の値を取得

    let valueF8No = parseFloat(csvData[16][0]); // 0列目の値を取得
    let valueF8 = parseFloat(csvData[16][3]); // 4列目の値を取得
    let valueF8G = parseFloat(csvData[16][5]); // 6列目の値を取得

    let valueF9No = parseFloat(csvData[17][0]); // 0列目の値を取得
    let valueF9 = parseFloat(csvData[17][3]); // 4列目の値を取得
    let valueF9G = parseFloat(csvData[17][5]); // 6列目の値を取得

    let valueF10No = parseFloat(csvData[18][0]); // 0列目の値を取得
    let valueF10 = parseFloat(csvData[18][3]); // 4列目の値を取得
    let valueF10G = parseFloat(csvData[18][5]); // 6列目の値を取得

    // let valueF11No = parseFloat(csvData[19][0]); // 0列目の値を取得
    // let valueF11 = parseFloat(csvData[19][3]); // 4列目の値を取得
    // let valueF11G = parseFloat(csvData[19][5]); // 6列目の値を取得

    let valueF12No = parseFloat(csvData[20][0]); // 0列目の値を取得
    let valueF12 = parseFloat(csvData[20][3]); // 4列目の値を取得
    let valueF12G = parseFloat(csvData[20][5]); // 6列目の値を取得

    let valueF13No = parseFloat(csvData[21][0]); // 0列目の値を取得
    let valueF13 = parseFloat(csvData[21][3]); // 4列目の値を取得
    let valueF13G = parseFloat(csvData[21][5]); // 6列目の値を取得

    let valueF14No = parseFloat(csvData[22][0]); // 0列目の値を取得
    let valueF14 = parseFloat(csvData[22][3]); // 4列目の値を取得
    let valueF14G = parseFloat(csvData[22][5]); // 6列目の値を取得

    let valueF15No = parseFloat(csvData[23][0]); // 0列目の値を取得
    let valueF15 = parseFloat(csvData[23][3]); // 4列目の値を取得
    let valueF15G = parseFloat(csvData[23][5]); // 6列目の値を取得

    let valueF16No = parseFloat(csvData[24][0]); // 0列目の値を取得
    let valueF16 = parseFloat(csvData[24][3]); // 4列目の値を取得
    let valueF16G = parseFloat(csvData[24][5]); // 6列目の値を取得

    let valueF17No = parseFloat(csvData[25][0]); // 0列目の値を取得
    let valueF17 = parseFloat(csvData[25][3]); // 4列目の値を取得
    let valueF17G = parseFloat(csvData[25][5]); // 6列目の値を取得

    let valueF18No = parseFloat(csvData[26][0]); // 0列目の値を取得
    let valueF18 = parseFloat(csvData[26][3]); // 4列目の値を取得
    let valueF18G = parseFloat(csvData[26][5]); // 6列目の値を取得

    let valueF19No = parseFloat(csvData[27][0]); // 0列目の値を取得
    let valueF19 = parseFloat(csvData[27][3]); // 4列目の値を取得
    let valueF19G = parseFloat(csvData[27][5]); // 6列目の値を取得

    let valueF20No = parseFloat(csvData[28][0]); // 0列目の値を取得
    let valueF20 = parseFloat(csvData[28][3]); // 4列目の値を取得
    let valueF20G = parseFloat(csvData[28][5]); // 6列目の値を取得

    let valueF21No = parseFloat(csvData[29][0]); // 0列目の値を取得
    let valueF21 = parseFloat(csvData[29][3]); // 4列目の値を取得
    let valueF21G = parseFloat(csvData[29][5]); // 6列目の値を取得

    let valueF22No = parseFloat(csvData[30][0]); // 0列目の値を取得
    let valueF22 = parseFloat(csvData[30][3]); // 4列目の値を取得
    let valueF22G = parseFloat(csvData[30][5]); // 6列目の値を取得

    let valueF23No = parseFloat(csvData[31][0]); // 0列目の値を取得
    let valueF23 = parseFloat(csvData[31][3]); // 4列目の値を取得
    let valueF23G = parseFloat(csvData[31][5]); // 6列目の値を取得

    let valueF24No = parseFloat(csvData[32][0]); // 0列目の値を取得
    let valueF24 = parseFloat(csvData[32][3]); // 4列目の値を取得
    let valueF24G = parseFloat(csvData[32][5]); // 6列目の値を取得

    let valueF25No = parseFloat(csvData[33][0]); // 0列目の値を取得
    let valueF25 = parseFloat(csvData[33][3]); // 4列目の値を取得
    let valueF25G = parseFloat(csvData[33][5]); // 6列目の値を取得

    let valueF26No = parseFloat(csvData[34][0]); // 0列目の値を取得
    let valueF26 = parseFloat(csvData[34][3]); // 4列目の値を取得
    let valueF26G = parseFloat(csvData[24][5]); // 6列目の値を取得

    let valueF27No = parseFloat(csvData[35][0]); // 0列目の値を取得
    let valueF27 = parseFloat(csvData[35][3]); // 4列目の値を取得
    let valueF27G = parseFloat(csvData[35][5]); // 6列目の値を取得

    let valueF28No = parseFloat(csvData[36][0]); // 0列目の値を取得
    let valueF28 = parseFloat(csvData[36][3]); // 4列目の値を取得
    let valueF28G = parseFloat(csvData[36][5]); // 6列目の値を取得

    let valueF29No = parseFloat(csvData[37][0]); // 0列目の値を取得
    let valueF29 = parseFloat(csvData[37][3]); // 4列目の値を取得
    let valueF29G = parseFloat(csvData[37][5]); // 6列目の値を取得

    let valueF30No = parseFloat(csvData[38][0]); // 0列目の値を取得
    let valueF30 = parseFloat(csvData[38][3]); // 4列目の値を取得
    let valueF30G = parseFloat(csvData[38][5]); // 6列目の値を取得

    let valueF31No = parseFloat(csvData[39][0]); // 0列目の値を取得
    let valueF31 = parseFloat(csvData[39][3]); // 4列目の値を取得
    let valueF31G = parseFloat(csvData[39][5]); // 6列目の値を取得

    let valueF32No = parseFloat(csvData[40][0]); // 0列目の値を取得
    let valueF32 = parseFloat(csvData[40][3]); // 4列目の値を取得
    let valueF32G = parseFloat(csvData[40][5]); // 6列目の値を取得

    let valueF33No = parseFloat(csvData[41][0]); // 0列目の値を取得
    let valueF33 = parseFloat(csvData[41][3]); // 4列目の値を取得
    let valueF33G = parseFloat(csvData[41][5]); // 6列目の値を取得

    let valueF34No = parseFloat(csvData[42][0]); // 0列目の値を取得
    let valueF34 = parseFloat(csvData[42][3]); // 4列目の値を取得
    let valueF34G = parseFloat(csvData[42][5]); // 6列目の値を取得

    let valueF35No = parseFloat(csvData[43][0]); // 0列目の値を取得
    let valueF35 = parseFloat(csvData[43][3]); // 4列目の値を取得
    let valueF35G = parseFloat(csvData[43][5]); // 6列目の値を取得

    let valueF36No = parseFloat(csvData[44][0]); // 0列目の値を取得
    let valueF36 = parseFloat(csvData[44][3]); // 4列目の値を取得
    let valueF36G = parseFloat(csvData[44][5]); // 6列目の値を取得

    let valueF37No = parseFloat(csvData[45][0]); // 0列目の値を取得
    let valueF37 = parseFloat(csvData[45][3]); // 4列目の値を取得
    let valueF37G = parseFloat(csvData[45][5]); // 6列目の値を取得

    let valueF38No = parseFloat(csvData[46][0]); // 0列目の値を取得
    let valueF38 = parseFloat(csvData[46][3]); // 4列目の値を取得
    let valueF38G = parseFloat(csvData[46][5]); // 6列目の値を取得

    let valueF39No = parseFloat(csvData[47][0]); // 0列目の値を取得
    let valueF39 = parseFloat(csvData[47][3]); // 4列目の値を取得
    let valueF39G = parseFloat(csvData[47][5]); // 6列目の値を取得

    let valueF40No = parseFloat(csvData[48][0]); // 0列目の値を取得
    let valueF40 = parseFloat(csvData[48][3]); // 4列目の値を取得
    let valueF40G = parseFloat(csvData[48][5]); // 6列目の値を取得

    let valueF41No = parseFloat(csvData[49][0]); // 0列目の値を取得
    let valueF41 = parseFloat(csvData[49][3]); // 4列目の値を取得
    let valueF41G = parseFloat(csvData[49][5]); // 6列目の値を取得

    let valueF42No = parseFloat(csvData[50][0]); // 0列目の値を取得
    let valueF42 = parseFloat(csvData[50][3]); // 4列目の値を取得
    let valueF42G = parseFloat(csvData[50][5]); // 6列目の値を取得

    let valueF43No = parseFloat(csvData[51][0]); // 0列目の値を取得
    let valueF43 = parseFloat(csvData[51][3]); // 4列目の値を取得
    let valueF43G = parseFloat(csvData[51][5]); // 6列目の値を取得


//XY軸の円の記述//// ここから

    // キャンバスの中心にオフセット
    let centerX = width / 50;
    let centerY = height / 50;

    ////これはメモのみ////ここから
    //CSVデータが存在する場合、4列目と5列目を使って円を描画
    //let x = parseFloat(csvData[csvData.length - 1][4]); // 最新の4列目をX座標に使用
    //let y = parseFloat(csvData[csvData.length - 1][5]); // 最新の5列目をY座標に使用
        
    //let x = parseFloat(csvData[i][4]); // 4列目をX座標に使用
    //let y = parseFloat(csvData[i][5]); // 5列目を円の直径に使用
        
    //x と y が数値かどうか確認
    ////これはメモのみ////ここまで

    // X座標をキャンバスの横幅にマップ
    //let mappedX = map(valueF2, 100000.00, 999999.99, 0, width); // 横幅にマッピング
    // Y座標をキャンバスの高さにマップ
    //let mappedY = map(valueF2G, -10, 10, height, 0); // 上部が-10、下部が10でキャンバスの高さにマッピング
              
    // 円の直径を設定（ここでは固定の値を使用）
    //let diameter = 20; // 直径を20に設定
    //fill(255, 0, 0); // 赤色
    //noStroke();

    //円を描画 ＊これは端に表示
    //ellipse(mappedX, mappedY, diameter, diameter); 
    // キャンバスの中心に基づいて円を描画
    //ellipse(centerX + (mappedX - centerX), centerY + (mappedY - centerY), diameter, diameter);

//XY軸の円の記述//// ここまで


    // 文字列を表示
    //fill(0); // 黒色
    textSize(12); // テキストサイズを設定
    //textAlign(CENTER, CENTER); // テキストの配置を中央に設定

    ///丸の縁をとる
    noStroke();
              
    // テキストを描画
    // text(`F222No: ${valueF222No}, F222: ${valueF222}, F222Gap: ${valueF222G}`, centerX, centerY + 0); // 下に表示

    // text(`F2No: ${valueF2No}, F2: ${valueF2}, F2Gap: ${valueF2G}`, centerX, centerY + 20); // 下に表示
    // text(`F3No: ${valueF3No}, F3: ${valueF3}, F3Gap: ${valueF3G}`, centerX, centerY + 30); // 下に表示
    // text(`F4No: ${valueF4No}, F4: ${valueF4}, F4Gap: ${valueF4G}`, centerX, centerY + 40); // 下に表示
    // text(`F5No: ${valueF5No}, F5: ${valueF5}, F5Gap: ${valueF5G}`, centerX, centerY + 50); // 下に表示
    // text(`F6No: ${valueF6No}, F6: ${valueF6}, F6Gap: ${valueF6G}`, centerX, centerY + 60); // 下に表示
    // text(`F7No: ${valueF7No}, F7: ${valueF7}, F7Gap: ${valueF7G}`, centerX, centerY + 70); // 下に表示
    // text(`F8No: ${valueF8No}, F8: ${valueF8}, F8Gap: ${valueF8G}`, centerX, centerY + 80); // 下に表示
    // text(`F9No: ${valueF9No}, F9: ${valueF9}, F9Gap: ${valueF9G}`, centerX, centerY + 90); // 下に表示
    // text(`F10No: ${valueF10No}, F10: ${valueF10}, F10Gap: ${valueF10G}`, centerX, centerY + 100); // 下に表示
    // //text(`F11No: ${valueF11No}, F11: ${valueF11}, F11Gap: ${valueF11G}`, centerX, centerY + 120); // 下に表示　＊オフする
    // text(`F12No: ${valueF12No}, F12: ${valueF12}, F12Gap: ${valueF12G}`, centerX, centerY + 130); // 下に表示
    // text(`F13No: ${valueF13No}, F13: ${valueF13}, F13Gap: ${valueF13G}`, centerX, centerY + 140); // 下に表示
    // text(`F14No: ${valueF14No}, F14: ${valueF14}, F14Gap: ${valueF14G}`, centerX, centerY + 150); // 下に表示
    // text(`F15No: ${valueF15No}, F15: ${valueF15}, F15Gap: ${valueF15G}`, centerX, centerY + 160); // 下に表示
    // text(`F16No: ${valueF16No}, F16: ${valueF16}, F16Gap: ${valueF16G}`, centerX, centerY + 170); // 下に表示
    // text(`F17No: ${valueF17No}, F17: ${valueF17}, F17Gap: ${valueF17G}`, centerX, centerY + 180); // 下に表示
    // text(`F18No: ${valueF18No}, F18: ${valueF18}, F18Gap: ${valueF18G}`, centerX, centerY + 190); // 下に表示
    // text(`F19No: ${valueF19No}, F19: ${valueF19}, F19Gap: ${valueF19G}`, centerX, centerY + 200); // 下に表示
    // text(`F20No: ${valueF20No}, F20: ${valueF20}, F20Gap: ${valueF20G}`, centerX, centerY + 210); // 下に表示
    // text(`F21No: ${valueF21No}, F21: ${valueF21}, F21Gap: ${valueF21G}`, centerX, centerY + 230); // 下に表示
    // text(`F22No: ${valueF22No}, F22: ${valueF22}, F22Gap: ${valueF22G}`, centerX, centerY + 240); // 下に表示
    // text(`F23No: ${valueF23No}, F23: ${valueF23}, F23Gap: ${valueF23G}`, centerX, centerY + 250); // 下に表示
    // text(`F24No: ${valueF24No}, F24: ${valueF24}, F24Gap: ${valueF24G}`, centerX, centerY + 260); // 下に表示
    // text(`F25No: ${valueF25No}, F25: ${valueF25}, F25Gap: ${valueF25G}`, centerX, centerY + 270); // 下に表示
    // text(`F26No: ${valueF26No}, F26: ${valueF26}, F26Gap: ${valueF26G}`, centerX, centerY + 280); // 下に表示
    // text(`F27No: ${valueF27No}, F27: ${valueF27}, F27Gap: ${valueF27G}`, centerX, centerY + 290); // 下に表示
    // text(`F28No: ${valueF28No}, F28: ${valueF28}, F28Gap: ${valueF28G}`, centerX, centerY + 300); // 下に表示
    // text(`F29No: ${valueF29No}, F29: ${valueF29}, F29Gap: ${valueF29G}`, centerX, centerY + 310); // 下に表示
    // text(`F30No: ${valueF30No}, F30: ${valueF30}, F30Gap: ${valueF30G}`, centerX, centerY + 320); // 下に表示
    // text(`F31No: ${valueF31No}, F31: ${valueF31}, F31Gap: ${valueF31G}`, centerX, centerY + 340); // 下に表示
    // text(`F32No: ${valueF32No}, F32: ${valueF32}, F32Gap: ${valueF32G}`, centerX, centerY + 350); // 下に表示
    // text(`F33No: ${valueF33No}, F33: ${valueF33}, F33Gap: ${valueF33G}`, centerX, centerY + 360); // 下に表示
    // text(`F34No: ${valueF34No}, F34: ${valueF34}, F34Gap: ${valueF34G}`, centerX, centerY + 370); // 下に表示
    // text(`F35No: ${valueF35No}, F35: ${valueF35}, F35Gap: ${valueF35G}`, centerX, centerY + 380); // 下に表示
    // text(`F36No: ${valueF36No}, F36: ${valueF36}, F36Gap: ${valueF36G}`, centerX, centerY + 390); // 下に表示
    // text(`F37No: ${valueF37No}, F37: ${valueF37}, F37Gap: ${valueF37G}`, centerX, centerY + 400); // 下に表示
    // text(`F38No: ${valueF38No}, F38: ${valueF38}, F38Gap: ${valueF38G}`, centerX, centerY + 410); // 下に表示
    // text(`F39No: ${valueF39No}, F39: ${valueF39}, F39Gap: ${valueF39G}`, centerX, centerY + 420); // 下に表示
    // text(`F40No: ${valueF40No}, F40: ${valueF40}, F40Gap: ${valueF40G}`, centerX, centerY + 430); // 下に表示
    // text(`F41No: ${valueF41No}, F41: ${valueF41}, F31Gap: ${valueF41G}`, centerX, centerY + 450); // 下に表示
    // text(`F42No: ${valueF42No}, F42: ${valueF42}, F32Gap: ${valueF42G}`, centerX, centerY + 460); // 下に表示
    // text(`F43No: ${valueF43No}, F43: ${valueF43}, F33Gap: ${valueF43G}`, centerX, centerY + 470); // 下に表示


 
    //const posF1 = mymap.latLngToPixel(33.5983, 130.2238);   //92001 福岡 ＊場所不明 　＊オフする
    const posF2 = mymap.latLngToPixel(33.6090, 130.4179);   //92002 福岡  
    const posF3 = mymap.latLngToPixel(33.5681, 130.3501);   //92003 福岡 
    const posF4 = mymap.latLngToPixel(33.5647, 130.3398);   //92004 福岡  
    const posF5 = mymap.latLngToPixel(33.5890, 130.3949);   //92005 福岡 
    const posF6 = mymap.latLngToPixel(33.5774, 130.2604);   //92006 福岡  
    const posF7 = mymap.latLngToPixel(33.5842, 130.4067);   //92007 福岡 
    const posF8 = mymap.latLngToPixel(33.5919, 130.3716);   //92008 福岡  
    const posF9 = mymap.latLngToPixel(33.5747, 130.3970);   //92009 福岡  
    const posF10 = mymap.latLngToPixel(33.5528, 130.3407);  //92010 福岡 
    //const posF11 = mymap.latLngToPixel(33.5528, 130.3407);  //92011 福岡  　＊オフする
    const posF12 = mymap.latLngToPixel(33.5794, 130.4187);  //92012 福岡 
    const posF13 = mymap.latLngToPixel(33.5787, 130.3665);  //92013 福岡 
    const posF14 = mymap.latLngToPixel(33.5845, 130.3481);  //92014 福岡 
    const posF15 = mymap.latLngToPixel(33.5923, 130.4228);  //92015 福岡 
    const posF16 = mymap.latLngToPixel(33.5726, 130.4651);  //92016 福岡 
    const posF17 = mymap.latLngToPixel(33.5390, 130.3832);  //92017 福岡  
    const posF18 = mymap.latLngToPixel(33.5615, 130.4263);  //92018 福岡 
    const posF19 = mymap.latLngToPixel(33.5851, 130.3187);  //92019 福岡 
    const posF20 = mymap.latLngToPixel(33.6101, 130.4206);  //92020 福岡 
    const posF21 = mymap.latLngToPixel(33.5721, 130.3249);  //92021 福岡  
    const posF22 = mymap.latLngToPixel(33.5910, 130.3810);  //92022 福岡 
    const posF23 = mymap.latLngToPixel(33.5497, 130.3704);  //92023 福岡  
    const posF24 = mymap.latLngToPixel(33.5538, 130.3137);  //92024 福岡 
    const posF25 = mymap.latLngToPixel(33.5692, 130.4396);  //92025 福岡  
    const posF26 = mymap.latLngToPixel(33.5577, 130.3817);  //92026 福岡 
    const posF27 = mymap.latLngToPixel(33.5762, 130.3441);  //92027 福岡  
    const posF28 = mymap.latLngToPixel(33.5844, 130.3598);  //92028 福岡 
    const posF29 = mymap.latLngToPixel(33.5670, 130.3785);  //92029 福岡 
    const posF30 = mymap.latLngToPixel(33.5972, 130.4119);  //92030 福岡  
    const posF31 = mymap.latLngToPixel(33.5787, 130.3533);  //92031 福岡
    const posF32 = mymap.latLngToPixel(33.5405, 130.4114);  //92032 福岡 
    const posF33 = mymap.latLngToPixel(33.5508, 130.3905);  //92033 福岡 
    const posF34 = mymap.latLngToPixel(33.5491, 130.4279);  //92034 福岡
    const posF35 = mymap.latLngToPixel(33.5581, 130.4035);  //92035 福岡 
    const posF36 = mymap.latLngToPixel(33.5671, 130.3610);  //92036 福岡 
    //const posF37 = mymap.latLngToPixel(33.5092, 130.3357);  //92037 福岡 　＊オフする
    const posF38 = mymap.latLngToPixel(33.4866, 130.3515);  //92038 福岡  
    const posF39 = mymap.latLngToPixel(33.5794, 130.3767);  //92039 福岡  
    const posF40 = mymap.latLngToPixel(33.683, 130.235);  //92040 福岡  
    const posF41 = mymap.latLngToPixel(33.5241, 130.4753);  //92101 福岡 
    const posF42 = mymap.latLngToPixel(33.5963, 130.2214);  //92102 福岡 
    const posF43 = mymap.latLngToPixel(33.5773, 130.3782);  //92103 福岡  




    let FukuVal2 = Math.abs(parseFloat(csvData[10][5]));  //92002 福岡 
    if( FukuVal2 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal2 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal2 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal2 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal2 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal2 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal2 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal2 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal2 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal2 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal2 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal2 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal2 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal2 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal2 < 0){
          FukuVal2 = 0;
        }    
    }  //青&透明度150  
    ellipse(posF2.x, posF2.y, (valueF2+FukuVal2*100000)*commonp,  (valueF2+FukuVal2*100000)*commonp);  



    let FukuVal3 = Math.abs(parseFloat(csvData[11][5]));  
    if( FukuVal3 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal3 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal3 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal3 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal3 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal3 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal3 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal3 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal3 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal3 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal3 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal3 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal3 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal3 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal3 < 0){
          FukuVal3 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF3.x, posF3.y, (valueF3+FukuVal3*100000)*commonp,  (valueF3+FukuVal3*100000)*commonp);  



    let FukuVal4 = Math.abs(parseFloat(csvData[12][5]));  
    if( FukuVal4 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal4 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal4 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal4 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal4 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal4 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal4 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal4 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal4 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal4 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal4 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal4 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal4 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal4 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal4 < 0){
          FukuVal4 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF4.x, posF4.y, (valueF4+FukuVal4*100000)*commonp,  (valueF4+FukuVal4*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal5 = Math.abs(parseFloat(csvData[13][5]));  
    if( FukuVal5 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal5 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal5 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal5 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal5 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal5 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal5 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal5 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal5 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal5 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal5 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal5 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal5 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal5 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal5 < 0){
          FukuVal5 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF5.x, posF5.y, (valueF5+FukuVal5*100000)*commonp,  (valueF5+FukuVal5*100000)*commonp);  // before:Ko+KochiVal1*10 //10000



    let FukuVal6 = Math.abs(parseFloat(csvData[14][5]));  
    if( FukuVal6 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal6 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal6 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal6 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal6 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal6 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal6 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal6 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal6 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal6 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal6 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal6 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal6 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal6 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal6 < 0){
          FukuVal6 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF6.x, posF6.y, (valueF6+FukuVal6*100000)*commonp,  (valueF6+FukuVal6*100000)*commonp);  // before:Ko+KochiVal1*10 //10000



    let FukuVal7 = Math.abs(parseFloat(csvData[15][5]));  
    if( FukuVal7 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal7 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal7 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal7 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal7 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal7 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal7 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal7 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal7 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal7 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal7 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal7 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal7 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal7 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal7 < 0){
          FukuVal7 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF7.x, posF7.y, (valueF7+FukuVal7*100000)*commonp,  (valueF7+FukuVal7*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal8 = Math.abs(parseFloat(csvData[16][5]));  
    if( FukuVal8 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal8 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal8 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal8 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal8 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal8 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal8 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal8 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal8 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal8 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal8 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal8 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal8 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal8 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal8 < 0){
          FukuVal8 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF8.x, posF8.y, (valueF8+FukuVal8*100000)*commonp,  (valueF8+FukuVal8*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal9 = Math.abs(parseFloat(csvData[17][5])); 
    if( FukuVal9 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal9 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal9 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal9 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal9 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal9 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal9 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal9 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal9 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal9 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal9 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal9 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal9 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal9 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal9 < 0){
          FukuVal9 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF9.x, posF9.y, (valueF9+FukuVal9*100000)*commonp,  (valueF9+FukuVal9*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal10 = Math.abs(parseFloat(csvData[18][5]));  
    if( FukuVal10 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal10 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal10 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal10 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal10 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal10 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal10 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal10 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal10 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal10 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal10 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal10 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal10 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal10 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal10 < 0){
          FukuVal10 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF10.x, posF10.y, (valueF10+FukuVal10*100000)*commonp,  (valueF10+FukuVal10*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    //FukuVal11 は設置場所不明


    let FukuVal12 = Math.abs(parseFloat(csvData[20][5])); 
    if( FukuVal12 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal12 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal12 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal12 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal12 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal12 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal12 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal12 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal12 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal12 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal12 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal12 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal12 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal12 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal12 < 0){
          FukuVal12 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF12.x, posF12.y, (valueF12+FukuVal12*100000)*commonp,  (valueF12+FukuVal12*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal13 = Math.abs(parseFloat(csvData[21][5])); 
    if( FukuVal13 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal13 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal13 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal13 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal13 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal13 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal13 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal13 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal13 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal13 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal13 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal13 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal13 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal13 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal13 < 0){
          FukuVal13 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF13.x, posF13.y, (valueF13+FukuVal13*100000)*commonp,  (valueF13+FukuVal13*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal14 = Math.abs(parseFloat(csvData[22][5]));  
    if( FukuVal14 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal14 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal14 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal14 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal14 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal14 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal14 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal14 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal14 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal14 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal14 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal14 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal14 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal14 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal14 < 0){
          FukuVal14 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF14.x, posF14.y, (valueF14+FukuVal14*100000)*commonp,  (valueF14+FukuVal14*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal15 = Math.abs(parseFloat(csvData[23][5]));  
    if( FukuVal15 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal15 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal15 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal15 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal15 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal15 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal15 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal15 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal15 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal15 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal15 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal15 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal15 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal15 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal15 < 0){
          FukuVal15 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF15.x, posF15.y, (valueF15+FukuVal15*100000)*commonp,  (valueF15+FukuVal15*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal16 = Math.abs(parseFloat(csvData[24][5]));  
    if( FukuVal16 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal16 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal16 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal16 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal16 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal16 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal16 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal16 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal16 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal16 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal16 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal16 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal16 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal16 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal16 < 0){
          FukuVal16 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF16.x, posF16.y, (valueF16+FukuVal16*100000)*commonp,  (valueF16+FukuVal16*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal17 = Math.abs(parseFloat(csvData[25][5]));  
    if( FukuVal17 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal17 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal17 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal17 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal17 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal17 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal17 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal17 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal17 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal17 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal17 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal17 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal17 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal17 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal17 < 0){
          FukuVal17 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF17.x, posF17.y, (valueF17+FukuVal17*100000)*commonp,  (valueF17+FukuVal17*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal18 = Math.abs(parseFloat(csvData[26][5]));  
    if( FukuVal18 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal18 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal18 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal18 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal18 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal18 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal18 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal18 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal18 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal18 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal18 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal18 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal18 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal18 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal18 < 0){
          FukuVal18 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF18.x, posF18.y, (valueF18+FukuVal18*100000)*commonp,  (valueF18+FukuVal18*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal19 = Math.abs(parseFloat(csvData[27][5]));  
    if( FukuVal19 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal19 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal19 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal19 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal19 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal19 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal19 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal19 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal19 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal19 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal19 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal19 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal19 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal19 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal19 < 0){
          FukuVal19 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF19.x, posF19.y, (valueF19+FukuVal19*100000)*commonp,  (valueF19+FukuVal19*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal20 = Math.abs(parseFloat(csvData[28][5]));  
    if( FukuVal20 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal20 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal20 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal20 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal20 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal20 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal20 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal20 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal20 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal20 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal20 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal20 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal20 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal20 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal20 < 0){
          FukuVal20 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF20.x, posF20.y, (valueF20+FukuVal20*100000)*commonp,  (valueF20+FukuVal20*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal21 = Math.abs(parseFloat(csvData[29][5]));  
    if( FukuVal21 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal21 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal21 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal21 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal21 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal21 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal21 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal21 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal21 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal21 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal21 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal21 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal21 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal21 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal21 < 0){
          FukuVal21 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF21.x, posF21.y, (valueF21+FukuVal21*100000)*commonp,  (valueF21+FukuVal21*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal22 = Math.abs(parseFloat(csvData[30][5]));  
    if( FukuVal22 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal22 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal22 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal22 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal22 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal22 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal22 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal22 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal22 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal22 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal22 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal22 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal22 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal22 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal22 < 0){
          FukuVal22 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF22.x, posF22.y, (valueF22+FukuVal22*100000)*commonp,  (valueF22+FukuVal22*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal23 = Math.abs(parseFloat(csvData[31][5]));  
    if( FukuVal23 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal23 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal23 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal23 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal23 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal23 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal23 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal23 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal23 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal23 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal23 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal23 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal23 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal23 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal23 < 0){
          FukuVal23 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF23.x, posF23.y, (valueF23+FukuVal23*100000)*commonp,  (valueF23+FukuVal23*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal24 = Math.abs(parseFloat(csvData[32][5]));  
    if( FukuVal24 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal24 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal24 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal24 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal24 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal24 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal24 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal24 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal24 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal24 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal24 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal24 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal24 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal24 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal24 < 0){
          FukuVal24 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF24.x, posF24.y, (valueF24+FukuVal24*100000)*commonp,  (valueF24+FukuVal24*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal25 = Math.abs(parseFloat(csvData[33][5])); 
    if( FukuVal25 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal25 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal25 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal25 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal25 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal25 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal25 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal25 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal25 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal25 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal25 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal25 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal25 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal25 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal25 < 0){
          FukuVal25 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF25.x, posF25.y, (valueF25+FukuVal25*100000)*commonp,  (valueF25+FukuVal25*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal26 = Math.abs(parseFloat(csvData[34][5])); 
    if( FukuVal26 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal26 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal26 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal26 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal26 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal26 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal26 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal26 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal26 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal26 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal26 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal26 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal26 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal26 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal26 < 0){
          FukuVal26 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF26.x, posF26.y, (valueF26+FukuVal26*100000)*commonp,  (valueF26+FukuVal26*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal27 = Math.abs(parseFloat(csvData[35][5]));  
    if( FukuVal27 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal27 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal27 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal27 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal27 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal27 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal27 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal27 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal27 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal27 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal27 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal27 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal27 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal27 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal27 < 0){
          FukuVal27 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF27.x, posF27.y, (valueF27+FukuVal27*100000)*commonp,  (valueF27+FukuVal27*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal28 = Math.abs(parseFloat(csvData[36][5]));  
    if( FukuVal28 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal28 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal28 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal28 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal28 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal28 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal28 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal28 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal28 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal28 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal28 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal28 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal28 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal28 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal28 < 0){
          FukuVal28 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF28.x, posF28.y, (valueF28+FukuVal28*100000)*commonp,  (valueF28+FukuVal28*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal29 = Math.abs(parseFloat(csvData[37][5]));  
    if( FukuVal29 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal29 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal29 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal29 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal29 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal29 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal29 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal29 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal29 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal29 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal29 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal29 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal29 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal29 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal29 < 0){
          FukuVal29 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF29.x, posF29.y, (valueF29+FukuVal29*100000)*commonp,  (valueF29+FukuVal29*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal30 = Math.abs(parseFloat(csvData[38][5]));  
    if( FukuVal30 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal30 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal30 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal30 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal30 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal30 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal30 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal30 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal30 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal30 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal30 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal30 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal30 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal30 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal30 < 0){
          FukuVal30 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF30.x, posF30.y, (valueF30+FukuVal30*100000)*commonp,  (valueF30+FukuVal30*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal31 = Math.abs(parseFloat(csvData[39][5])); 
    if( FukuVal31 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal31 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal31 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal31 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal31 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal31 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal31 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal31 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal31 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal31 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal31 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal31 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal31 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal31 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal31 < 0){
          FukuVal31 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF31.x, posF31.y, (valueF31+FukuVal31*100000)*commonp,  (valueF31+FukuVal31*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal32 = Math.abs(parseFloat(csvData[40][5]));  
    if( FukuVal32 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal32 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal32 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal32 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal32 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal32 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal32 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal32 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal32 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal32 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal32 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal32 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal32 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal32 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal32 < 0){
          FukuVal32 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF32.x, posF32.y, (valueF32+FukuVal32*100000)*commonp,  (valueF32+FukuVal32*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal33 = Math.abs(parseFloat(csvData[41][5]));  
    if( FukuVal33 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal33 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal33 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal33 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal33 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal33 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal33 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal33 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal33 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal33 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal33 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal33 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal33 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal33 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal33 < 0){
          FukuVal33 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF33.x, posF33.y, (valueF33+FukuVal33*100000)*commonp,  (valueF33+FukuVal33*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal34 = Math.abs(parseFloat(csvData[42][5]));  
    if( FukuVal34 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal34 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal34 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal34 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal34 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal34 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal34 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal34 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal34 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal34 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal34 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal34 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal34 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal34 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal34 < 0){
          FukuVal34 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF34.x, posF34.y, (valueF34+FukuVal34*100000)*commonp,  (valueF34+FukuVal34*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal35 = Math.abs(parseFloat(csvData[43][5]));  
    if( FukuVal35 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal35 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal35 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal35 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal35 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal35 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal35 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal35 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal35 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal35 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal35 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal35 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal35 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal35 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal35 < 0){
          FukuVal35 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF35.x, posF35.y, (valueF35+FukuVal35*100000)*commonp,  (valueF35+FukuVal35*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal36 = Math.abs(parseFloat(csvData[44][5]));  
    if( FukuVal36 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal36 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal36 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal36 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal36 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal36 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal36 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal36 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal36 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal36 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal36 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal36 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal36 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal36 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal36 < 0){
          FukuVal36 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF36.x, posF36.y, (valueF36+FukuVal36*100000)*commonp,  (valueF36+FukuVal36*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


   //FukuVal37 は設置場所不明


    let FukuVal38 = Math.abs(parseFloat(csvData[46][5]));  //92038
    if( FukuVal38 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal38 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal38 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal38 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal38 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal38 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal38 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal38 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal38 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal38 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal38 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal38 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal38 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal38 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal38 < 0){
          FukuVal38 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF38.x, posF38.y, (valueF38+FukuVal38*100000)*commonp,  (valueF38+FukuVal38*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal39 = Math.abs(parseFloat(csvData[47][5]));  //92039
    if( FukuVal39 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal39 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal39 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal39 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal39 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal39 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal39 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal39 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal39 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal39 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal39 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal39 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal39 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal39 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal39 < 0){
          FukuVal39 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF39.x, posF39.y, (valueF39+FukuVal39*100000)*commonp,  (valueF39+FukuVal39*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal40 = Math.abs(parseFloat(csvData[48][5]));  //92101
    if( FukuVal40 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal40 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal40 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal40 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal40 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal40 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal40 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal40 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal40 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal40 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal40 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal40 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal40 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal40 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal40 < 0){
          FukuVal40 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF40.x, posF40.y, (valueF40+FukuVal40*100000)*commonp,  (valueF40+FukuVal40*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal41 = Math.abs(parseFloat(csvData[49][5]));  //92101
    if( FukuVal41 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal41 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal41 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal41 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal41 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal41 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal41 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal41 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal41 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal41 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal41 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal41 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal41 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal41 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal41 < 0){
          FukuVal41 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF41.x, posF41.y, (valueF41+FukuVal41*100000)*commonp,  (valueF41+FukuVal41*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal42 = Math.abs(parseFloat(csvData[50][5]));  //92102
    if( FukuVal42 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal42 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal42 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal42 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal42 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal42 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal42 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal42 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal42 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal42 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal42 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal42 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal42 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal42 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal42 < 0){
          FukuVal42 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF42.x, posF42.y, (valueF42+FukuVal42*100000)*commonp,  (valueF42+FukuVal42*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


    let FukuVal43 = Math.abs(parseFloat(csvData[51][5]));  //92103
    if( FukuVal43 > 20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal43 > 10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal43 > 5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal43 > 2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal43 > 1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal43 > 0.5 ){
      fill(24,101,138,200);}  //青&透明度
    else if( FukuVal43 > 0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else if( FukuVal43 < -20 ){  //左の５はCSV 6行目(Row)の数値（ハイパス？） 右の5はCSV6列目(Column)の数値（差分の数値）
      fill(246,103,0,200);}  //オレンジ&透明度
    else if( FukuVal43 < -10 ){
      fill(250,222,54,200);}  //黄&透明度
    else if( FukuVal43 < -5 ){
      fill(129,212,72,200);}  //黄緑&透明度
    else if( FukuVal43 < -2 ){
      fill(26,183,117,200);}  //緑&透明度
    else if( FukuVal43 < -1 ){
      fill(1,146,136,200);}  //青緑&透明度
    else if( FukuVal43 < -0.5 ){
      fill(24,101,138,200);}   //青&透明度
    else if( FukuVal43 < -0.25 ){
      fill(50,51,128,200);}  //紺&透明度
    else{  
        fill(66,0,87,200); //紫&透明度
        if(FukuVal43 < 0){
          FukuVal43 = 0;
        }    
    }  //青&透明度150 
    ellipse(posF43.x, posF43.y, (valueF43+FukuVal43*100000)*commonp,  (valueF43+FukuVal43*100000)*commonp);  // before:Ko+KochiVal1*10 //10000


　  ////黒丸 チェック用
    //ellipse(posF2.x, posF2.y, (valueF2*0.0001), (valueF2*0.0001) );  
    //ellipse(posF3.x, posF3.y, (valueF3*0.0001), (valueF3*0.0001) );  
    //ellipse(posF4.x, posF4.y, (valueF4*0.0001), (valueF4*0.0001) );  
    //ellipse(posF5.x, posF5.y, (valueF5*0.0001), (valueF5*0.0001) );  
    //ellipse(posF6.x, posF6.y, (valueF6*0.0001), (valueF6*0.0001) );  
    //ellipse(posF7.x, posF7.y, (valueF7*0.0001), (valueF7*0.0001) );  
    //ellipse(posF8.x, posF8.y, (valueF8*0.0001), (valueF8*0.0001) );  
    //ellipse(posF9.x, posF9.y, (valueF9*0.0001), (valueF9*0.0001) );  
    //ellipse(posF10.x, posF10.y, (valueF10*0.0001), (valueF10*0.0001) ); 
    //ellipse(posF11.x, posF11.y, (valueF11*0.0001), (valueF11*0.0001) );  ＊オフする
    //ellipse(posF12.x, posF12.y, (valueF12*0.0001), (valueF12*0.0001) );  
    //ellipse(posF13.x, posF13.y, (valueF13*0.0001), (valueF13*0.0001) );  
    //ellipse(posF14.x, posF14.y, (valueF14*0.0001), (valueF14*0.0001) );  
    //ellipse(posF15.x, posF15.y, (valueF15*0.0001), (valueF15*0.0001) );  
    //ellipse(posF16.x, posF16.y, (valueF16*0.0001), (valueF16*0.0001) );  
    //ellipse(posF17.x, posF17.y, (valueF17*0.0001), (valueF17*0.0001) );  
    //ellipse(posF18.x, posF18.y, (valueF18*0.0001), (valueF18*0.0001) );  
    //ellipse(posF19.x, posF19.y, (valueF19*0.0001), (valueF19*0.0001) );  
    //ellipse(posF20.x, posF20.y, (valueF20*0.0001), (valueF20*0.0001) );  
    //ellipse(posF21.x, posF21.y, (valueF21*0.0001), (valueF21*0.0001) );  
    //ellipse(posF22.x, posF22.y, (valueF22*0.0001), (valueF22*0.0001) );  
    //ellipse(posF23.x, posF23.y, (valueF23*0.0001), (valueF23*0.0001) );  
    //ellipse(posF24.x, posF24.y, (valueF24*0.0001), (valueF24*0.0001) );  
    //ellipse(posF25.x, posF25.y, (valueF25*0.0001), (valueF25*0.0001) );  
    //ellipse(posF26.x, posF26.y, (valueF26*0.0001), (valueF26*0.0001) );  
    //ellipse(posF27.x, posF27.y, (valueF27*0.0001), (valueF27*0.0001) );  
    //ellipse(posF28.x, posF28.y, (valueF28*0.0001), (valueF28*0.0001) );  
    //ellipse(posF29.x, posF29.y, (valueF29*0.0001), (valueF29*0.0001) );  
    //ellipse(posF30.x, posF30.y, (valueF30*0.0001), (valueF30*0.0001) );  
    //ellipse(posF31.x, posF31.y, (valueF31*0.0001), (valueF31*0.0001) );  
    //ellipse(posF32.x, posF32.y, (valueF32*0.0001), (valueF32*0.0001) );  
    //ellipse(posF33.x, posF33.y, (valueF33*0.0001), (valueF33*0.0001) );  
    //ellipse(posF34.x, posF34.y, (valueF34*0.0001), (valueF34*0.0001) );  
    //ellipse(posF35.x, posF35.y, (valueF35*0.0001), (valueF35*0.0001) );  
    //ellipse(posF36.x, posF36.y, (valueF36*0.0001), (valueF36*0.0001) );  
    //ellipse(posF37.x, posF37.y, (valueF37*0.0001), (valueF37*0.0001) );  ＊オフする
    //ellipse(posF38.x, posF38.y, (valueF38*0.0001), (valueF38*0.0001) );  
    //ellipse(posF39.x, posF39.y, (valueF39*0.0001), (valueF39*0.0001) );  
    //ellipse(posF40.x, posF40.y, (valueF40*0.0001), (valueF40*0.0001) );  
    //ellipse(posF41.x, posF41.y, (valueF41*0.0001), (valueF41*0.0001) );  
    //ellipse(posF42.x, posF42.y, (valueF42*0.0001), (valueF42*0.0001) );  
    //ellipse(posF43.x, posF43.y, (valueF43*0.0001), (valueF43*0.0001) );  
        }


    else {
    console.warn("Insufficient data in csvData array for accessing index 51.");
    }




      }
    
    




