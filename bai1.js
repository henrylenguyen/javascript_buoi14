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


function resultSort(){
  if (!checkNull(".number")) {
    let arr = getValue(".number");
    let arrParse = new Array();
    arr.forEach(element =>{
      arrParse.push(parseFloat(element));
    })
    for (let i = 0; i < arrParse.length; i++) {
      for (let j = i + 1; j < arrParse.length; j++) {
        if (arrParse[i] > arrParse[j]) {
          let temp = arrParse[i];
          arrParse[i] = arrParse[j];
         arrParse[j] = temp;
        }
      }
    }
  //  console.log(arrParse);
    addStyle("#resultSort", [arrParse, "1px solid #000", "#000"]);
  }

  else {
    addStyle("#resultSort", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);

   }

}