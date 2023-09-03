const sayılar = [13,5,6,8,2,7]

let toplam = sayılar.reduce(topla)

function topla(total, value, index, array){
    return total + value
}

document.write('toplam:' + toplam + "</br>")






const rDeger = parseInt(Math.random)

/*
Bir öğrencinin ders notlarından vizenin %40 ını  finalin %60ını alarak eğer ortalama
50 altı ise ekrana "kaldı"  50 üstü ise bu sefer "geçti" ve hangi notla 
geçtiğini de gösteren bir program yazınız.
50-60 arası DC
60-70 arası CC
70-80 arası CB
80-90 arası BB
90-95 ARASI BA
95 ve devamı AA Olarak da cıktı da belirtilmelidir.

*/

const vize = parseInt(promt("vize notu"))
const final = parseInt(promt("final notu"))

const ort = ((vize * 40) / 100) + ((final * 60) / 100 )
console





