//hàm lấy dữ liệu
function getValue(value) {
  let number = document.querySelectorAll(value);
  let arr = new Array();
  number.forEach(element => {
    // mỗi lần lập sẽ đẩy dữ liệu vào mảng 
    arr.push(element.value);
  });
  return arr;
}

// hàm check có giá trị rỗng (người dùng không nhập) hay không
function checkNull(checked) {
  let arrValue = getValue(checked);
  for (let i = 0; i < arrValue.length; i++) {
    //nếu dữ liệu có rỗng trả về true liền (true là dữ liệu bị nhập bị thiếu);
    if (isNaN(arrValue[i]) || arrValue[i] == "") {
      return true;
    }
  }

  return false;
}

function addStyle(name, string) {
  document.querySelector(name).value = string[0];
  document.querySelector(name).style.border = string[1];
  document.querySelector(name).style.color = string[2];
}
// hàm kiểm tra dữ liệu nhập
function checkDate( m, y) {
  m = parseInt(m);
  y = parseInt(y);
  if (m < 1 || m > 12 || y < 1920) {
    return false;
  } 
  return true;
}
function date(m,y){
  let d = 0;
  m = parseInt(m);
  y = parseInt(y);
  if(checkDate(m,y)==false){
    return 0;
  }
  else{
    switch(m){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        d = 31;
        break;
      case 4:
        case 6:
        case 9:
        case 11:
          d = 30;
          break;
      case 2:
        if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
          d = 29;
        } else {
          d = 28;
        }
        break; 
    }
    console.log(d);
  }
  return d;
}
function dateCountResult() {
   if (!checkNull(".dateCount")) {
     let arr = getValue(".dateCount");
     let d = date(arr[0], arr[1]);
     console.log(d);
     if (d==0){
       addStyle("#dateCountResult", ["Dữ liệu không hợp lệ", "1px solid red", "red"]);

     }
     else{
       addStyle("#dateCountResult", [`tháng ${arr[0]} năm ${arr[1]} có ${d} ngày`, "1px solid #000", "#000"]);

     }

   } else {
     addStyle("#dateCountResult", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);

   }
}