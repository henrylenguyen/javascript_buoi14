
function check(n){
  let string ='';
    let a = Math.floor(n / 100);
    let b = Math.floor((n % 100) / 10);
    let c = Math.floor(n % 10);
if (n < 100 || n > 999 || n=="") {
  return 0;
}
else{
  switch (a) {
    case 1:
      a = "Một trăm";
      break;
    case 2:
      a = "Hai trăm";
      break;
    case 3:
      a = "Ba trăm";
      break;
    case 4:
      a = "Bốn trăm";
      break;
    case 5:
      a = "Năm trăm";
      break;
    case 6:
      a = "Sáu trăm";
      break;
    case 7:
      a = "Bảy trăm";
      break;
    case 8:
      a = "Tám trăm";
      break;
    case 9:
      a = "Chín trăm";
      break;
  }
  switch (b) {
    case 0:
      b = "lẻ";
      break;
    case 1:
      b = "mười";
      break;
    case 2:
      b = "hai mươi";
      break;
    case 3:
      b = "ba mươi";
      break;
    case 4:
      b = "bốn mươi";
      break;
    case 5:
      b = "năm mươi";
      break;
    case 6:
      b = "sáu mươi";
      break;
    case 7:
      b = "bảy mươi";
      break;
    case 8:
      b = "tám mươi";
      break;
    case 9:
      b = "chín mươi";
      break;
  }
  if(n==100){
    a = "Một trăm";
    b = "";
    c = "";
  }
  if(n==110){
    a = "Một trăm";
    b = "mười";
    c = "";
  }
  if(n<112){
     switch (c) {
       case 1:
         c = "một";
         break;
       case 2:
         c = "hai";
         break;
       case 3:
         c = "ba";
         break;
       case 4:
         c = "bốn";
         break;
       case 5:
         c = "năm";
         break;
       case 6:
         c = "sáu";
         break;
       case 7:
         c = "bảy";
         break;
       case 8:
         c = "tám";
         break;
       case 9:
         c = "chín";
         break;
     }
  }
  else{
    switch (c) {
      case 1:
        c = "mốt";
        break;
      case 2:
        c = "hai";
        break;
      case 3:
        c = "ba";
        break;
      case 4:
        c = "bốn";
        break;
      case 5:
        c = "năm";
        break;
      case 6:
        c = "sáu";
        break;
      case 7:
        c = "bảy";
        break;
      case 8:
        c = "tám";
        break;
      case 9:
        c = "chín";
        break;
    }
  }

  }
  string = `${a} ${b} ${c}`;
  return string;
}

function SpeakNumber(){
  let n = document.querySelector('.speakNumber').value;
  

  if (check(n) == 0) {
    document.querySelector('#SpeakNumber').value = "Dữ liệu không hợp lệ";
    document.querySelector('#SpeakNumber').style.border = "1px solid red";
    document.querySelector('#SpeakNumber').style.color = "red";
  } else {
    document.querySelector('#SpeakNumber').value = check(n);
    document.querySelector('#SpeakNumber').style.border = "1px solid transparent";
    document.querySelector('#SpeakNumber').style.color = "#000";

  }
}
