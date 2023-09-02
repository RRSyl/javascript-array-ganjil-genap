//Author:RR Sylva Prayuniza

//Deklarasi variabel
let y=[]
let ygenap=[]
let yganjil=[]

//perulangan untuk memberikan nilai pada array
for(let i=0;i<100;i++){
    y[i]=Math.floor((1+(Math.random()*50)))
   
   //kondisi untuk memisahkan array genap dan ganjil
    if(y[i]%2===0){
        ygenap.push(y[i])
    }
    else{
        yganjil.push(y[i])
    }
}

//menampilkan array
console.log("100 Bilangan Acak dari 1-50")
console.log(y)
console.log("50 Bilangan acak genap dari 1-50")
console.log(ygenap)
console.log("50 Bilangan acak ganjil dari 1-50")
console.log(yganjil)

//inisiasi variabel dengan array berindex 0, sebagai penyimpan nilai minimal
var minimal_number=ygenap[0]
var minimal_number1=yganjil[0]

//perulangan untuk mencari nilai minimal dari array
for(let x=0;x<ygenap.length;x++){
    if(ygenap[x]<minimal_number){
        minimal_number=ygenap[x]
    }
}

for(let x=0;x<yganjil.length;x++){
    if(yganjil[x]<minimal_number1){
      minimal_number1=yganjil[x]
    }
}

//menampilkan nilai terkecil pada array
console.log("Nilai terkecil dari array genap adalah : "+minimal_number)
console.log("Nilai terkecil dari array genap adalah : "+minimal_number1)

//inisiasi variabel untuk menyimpan nilai maksimal pada index terbesar
var maksimal_number=ygenap[ygenap.length-1]
var maksimal_number1=yganjil[yganjil.length-1]

//perulangan untuk mencari nilai terbesar dalam array
for(let x=0;x<ygenap.length;x++){
    if(ygenap[x]>maksimal_number){
        maksimal_number=ygenap[x]
    }
}

for(let x=0;x<ygenap.length;x++){
    if(ygenap[x]>maksimal_number1){
        maksimal_number1=yganjil[x]
    }
}

//menampilkan nilai terbesar dalam array
console.log("Nilai terbesar dari array genap adalah : "+maksimal_number)
console.log("Nilai terbesar dari array ganjil adalah : "+maksimal_number1)

//inisiasi nilai penambah dengan 0
let sum=0
let sum1=0

//perulangan untuk menambahkan setiap value elemen pada array
for(let i=0;i<ygenap.length;i++){
    sum+=ygenap[i]
}

for(let i=0;i<yganjil.length;i++){
    sum1+=yganjil[i]
}

//menampilkan total penjumlahan elemen pada array
console.log("Total penjumlahan elemen pada array genap : "+sum)
console.log("Total penjumlahan elemen pada array ganjil : "+sum1)

//Menampilkan total rata-rata pada array
console.log("Rata rata pada array genap : "+sum/ygenap.length)
console.log("Rata rata pada array ganjil : "+sum1/yganjil.length)

//Menampilkan selisih antara array genap dan ganjil
console.log("Selisih nilai minimal pada array genap dan ganjil : "+(minimal_number-minimal_number1))
console.log("Selisih nilai maksimal pada array genap dan ganjil : "+(maksimal_number-maksimal_number1))
console.log("Selisih total pada array genap dan ganjil : "+(sum-sum1))
console.log("Selisih rata-rata pada array genap dan ganjil : "+((sum/ygenap.length)-(sum1/yganjil.length)))
