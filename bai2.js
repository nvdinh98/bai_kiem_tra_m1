function checkNumber(){
    let array =[5,6,7,8,9,11,12,13]
    let input = prompt('mời bạn nhập số cần tìm ?');
    for (let i = 0 ; i < array.length; i++){
        if (input == array[i]){
            alert('Số của bạn cần tìm là : '+ array[i] + 'ở vị trí :'+i);
        }
        else {
            alert('Không tìm thấy số bạn muốn tìm');
        }
    }
}
checkNumber();
