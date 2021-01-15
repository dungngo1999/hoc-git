// Buoi 2
// Bai 1: Dao so
var number = 5612;
var reserveNumber = 0;
while(number > 0) {
    let numberElement = number % 10;
    reverNumber = reverseNumber*10  + numberElement;
    number = parseInt (number/10);  //parseInt bien so thap phan thanh so nguyen VD 123.4 --> 123. 
}
console.log (ReverseNumber);
// Bai 2: Dao nguoc so
var input = prompt ("nhap so muon dao:");
var soDao;
while (+input>=1) {
    soDao=input%10
    input= Math.floor(input/10);
    soDao.toString;
    console.log(soDao);
}

// Bai 3: Tinh tuoi hop
var namsinh1 = prompt("vui long nhap nam sinh ban nu");
var namsinh2 = prompt("vui long nhap nam sinh ban nam ");
if (namsinh1%4 === 0 && namsinh1 - namsinh2 >= -5) {
    console.log("Hop tuoi qua. Dat ten con di em");
} else console.log ("Hy vong em tim dc tinh yeu moi");

// Buoi 3
// BVN1
var dayso= [1, 2, 3, 4, 5, 6, "#", 7, 8, 9];
var tong1 = 0;
for (var chiso = 0; chiso < dayso.length; chiso++) {
        if (dayso[chiso] % 1 != 0) {
            for (var bienao = 0; bienao < chiso; bienao++) {
                tong1= tong1 + dayso[bienao];
            }
        }  
}
console.log(tong1);
 
// BVN2
var tong2 = 0;
for (var chiso = 0; chiso < dayso.length; chiso++) {
    if (dayso[chiso] % 1 === 0) {
        tong2 = tong2 + dayso[chiso];
    }
}
console.log(tong2 - tong1);

