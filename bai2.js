

let selected = document.getElementById("selectFamily");
function selectedHello(){
  let string = selected.options[selected.selectedIndex].text;
  if (string =="Chọn thành viên"){
    document.querySelector('#selectedHello').value = "Vui lòng chọn thành viên cần gửi lời chào";
    document.querySelector('#selectedHello').style.border = "1px solid red";
    document.querySelector('#selectedHello').style.color = "red";
  }
  else{
    document.querySelector('#selectedHello').value = `Hello, Chào mừng ${string} đến với trải nghiệm bị con gái đì`;
      document.querySelector('#selectedHello').style.border = "1px solid transparent";
      document.querySelector('#selectedHello').style.color = "#000";
      document.querySelector('#selectedHello').style.fontSize = "21px";

  }
  
}