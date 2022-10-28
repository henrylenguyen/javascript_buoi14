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
function checkDate(d, m, y) {
  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1920) {
    return false;
  } else {
    if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
      if (d > 29) {
        return false;
      }
    } else {
      if (d > 28) {
        return false;
      }
    }

  }
  return true;
}
// hàm kiểm tra ngày hôm trước
function checkDateBefore(d,m,y){
  let string='';
  if (checkDate(d,m,y)==false) {
    return 0;
  }
  else{
    d = d - 1;
    //ngày giảm đi 1 => ngày lúc này là 0 nên nó sẽ đi vào if(d<1)
    if (d < 1) {
      // tháng giảm đi 1 do ngày đã dưới 1 (sẽ quay lại là ngày 30 hoặc 31)
      m = m - 1;
      //nếu tháng là tháng 1,3,5,7,8,10,12 là tháng có 31 ngày
      if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
        d = 31;
      }
      //nếu tháng là tháng 1,3,5,7,8,10,12 là tháng có 30 ngày
      if (m == 4 || m == 6 || m == 9 || m == 11) {
        d = 30;
      }
      //nếu tháng là tháng 2 thì chia ra năm nhuận hoặc không nhuận
      if (m == 2) {
        //nếu là năm nhuận thì tháng 2 có 29 ngày
        if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
          d = 29;
        }
        //ngược lại thì tháng 2 có 28 ngày
        else {
          d = 28;
        }
      }
      if (m < 1) {
        //nếu mà tháng giảm xuống mà nhỏ hơn 1 mình sẽ giảm tới năm
        y = y - 1;
        // giảm năm rồi thì tháng sẽ quay lại là tháng 12
        m = 12;
        //ngày sẽ là ngày 31
        d = 31;
      }
    }
    if(m>9){
      string = `${d}/${m}/${y}`;
    }
    else{
      string = `${d}/0${m}/${y}`;
      
    }
    // console.log(`Ngày hôm trước của 01/01/2020 là: ${d}/${m}/${y}`);
  }
  return string;

}
// hàm kiểm tra ngày hôm sau
function checkDateAfter(d, m, y) {
  let string = '';
  if (checkDate(d,m,y)==false) {
    return 0;
  } else {
    d = d + 1;
    //ngày tăng lên 1 => ngày lúc này là 29 nên nó sẽ đi vào if(d>28)
    //do làm như vậy mới kiểm tra được tháng đó là có phải là tháng 2 hay tháng có 30 hay 31 ngày
    if (d > 27) { //28 tháng 2
      //nếu là tháng 2 thì kiểm tra năm nhuận hay không
       if (m == 2) {
         //nếu là năm nhuận thì tháng 2 có 29 ngày
         if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
           d = 29;
         }
         //ngược lại thì tháng 2 có 28 ngày nên tăng tháng lên 1 và ngày trở lại ngày 1
         else {
           m = m + 1;
           d = 1;
         }
       }
    }
    if(d>28){ // ngày 29 tháng 2
      if (m == 2) {
        //nếu là năm nhuận thì tháng 2 có 29 ngày nên tháng tăng 1, ngày trở về 1
        if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
          m = m +1;
          d = 1;
        } 
      }
    }
    //nếu ngày lớn hơn ngày 30 thì kiểm tra xem tháng đó có nằm trong danh sách tháng 31 ngày không
    if(d>29){
      switch(m){
        case 4: case 6: case 9 : case 11:
          m = m + 1;
          d = 1;
          break;
      }
    }
    //lớn hơn ngày 31 là mặc định tăng tháng
    // nếu dùng if thì luồng sử lí if 1 mà không đúng sẽ xuống if 2
    // nếu dùng else thì nó sẽ kiểm tra nếu if 1 đúng là dừng lun, không xuống kiểm tra if 2
    if(d>30){
      m = m + 1;
      d = 1;
      //kiểm tra nếu trên tháng 12 thì năm tăng lên 1, ngày quay lại là 1 tháng là 1
      if(m>12){
        y = y + 1;
        d = 1;
        m = 1;
      }
    }
    console.log(`Ngày hôm sau của 01/01/2020 là: ${d}/${m}/${y}`);
  }
  // return string;

}
checkDateAfter(30,3,2020);
function resultDateBefore(){
   if (!checkNull(".date")) {
     let arr = getValue(".date");
     if(checkDateBefore(arr[0],arr[1],arr[2])==0){
       addStyle("#resultDate", ["Dữ liệu không hợp lệ", "1px solid red", "red"]);
     }
     else{
       addStyle("#resultDate", [`Ngày hôm trước là: ${checkDateBefore(arr[0],arr[1],arr[2])}`, "1px solid #000", "#000"]);
     }
   }
   else{
      addStyle("#resultDate", ["Làm ơn nhập đầy đủ dữ liệu!!!", "1px solid red", "red"]);
    }
}