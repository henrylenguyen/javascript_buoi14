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

function checkCircle(a,b,c){
  string = '';
  let power =  Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2);
  let power1 = Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2);
  let power2 = Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2);
  if(a + b > c && a + c > b && c + b  > a){
    if(a==b && a==c){
      string = 'Tam giác đều';
    }
    else if(a==b || a==c || c==b){
      string = 'Tam giác cân';
    }
    else if( power || power1 || power2){
      string = 'Tam giác vuông';
    }
    else{
      string = 'Tam giác loại khác';
    }
  }
  else{
    string = "";
  }
  return string;
}

function resultCircle(){
  if (!checkNull(".circle")) {
    let arr = getValue(".circle");
    let arrParse = new Array();
    arr.forEach(element => {
      arrParse.push(parseFloat(element));
    })
    let string = checkCircle(arrParse[0],arrParse[1],arrParse[2]);
    if(string==""){
        addStyle("#resultCircle", ['Dữ liệu không hợp lệ!!!', ' 1px solid red', 'red']);
    }
    else{
      addStyle("#resultCircle", [string, "1px solid #000", "#000"]);

    }
    //  console.log(arrParse);
  } else {
    addStyle("#resultCircle", ['Làm ơn nhập đầy đủ dữ liệu!!!', ' 1px solid red', 'red']);

  }
}