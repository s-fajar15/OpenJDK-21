//// 1. Dasar-Dasar JavaScript ////

// a. Variabel
// Di JavaScript, Anda dapat menyimpan data menggunakan variabel. Ada tiga kata kunci untuk mendeklarasikan variabel: var, let, dan const.

let nama = 'Saepul fajar';
const umur = 17;
console.log(nama)
console.log(umur)


//  b. Tipe Data

// JavaScript mendukung beberapa tipe data dasar:
// String: Teks, misalnya "Hello"
// Number: Angka, misalnya 42 atau 3.14
// Boolean: Nilai benar atau salah, misalnya true atau false
// Array: Kumpulan data, misalnya [1, 2, 3]
// Object: Struktur data dengan pasangan kunci-nilai, misalnya {nama: "John", umur: 25}

let isStudent = true;
let hobi = ["coding", "reading", "sports"];
let person = {
	nama: "Saepul fajar",
	age: 17
};

console.log(isStudent);
console.log(hobi);
console.log(person.nama)


// c. Fungsi
// Fungsi adalah blok kode yang bisa dijalankan kapan saja.

function greet(nama) {
	console.log("Halo, " + nama + "!");
}
greet("fajar")

// d. Kondisi (if-else)
// Kondisi memungkinkan Anda mengatur alur logika berdasarkan suatu keadaan.

let nilai = 95;

if (nilai >= 90) {
	console.log("Nilai A");
} else if (nilai >= 85) {
	console.log("Nilai B");
} else {
	console.log("Nilai C");
}

//// 2. Interaksi dengan Pengguna ////
// Anda bisa meminta input dari pengguna dengan menggunakan prompt() (di browser), tetapi di Node.js, Anda dapat menggunakan readline untuk input pengguna melalui terminal.

// Contoh menggunakan readline di Node.js:

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('siapa nama kamu? ', (nama) => {
	console.log(`Halo, ${nama}!`);
	rl.close();
});