let num = parseFloat(prompt("Hãy nhập nhiệt độ: ").value);
while (num){
    if (num >100) {
        alert("Vui lòng giảm nhiệt độ");
        break;
    } else if (num < 20) {
        alert("Vui lòng tăng nhiệt độ");
        break;
    } else {
        alert("Nhiệt độ hiện tại là" + num);
        break:
    }
}