// function hasilInputPilihan(){
//     const name = document.getElementById('nama').value;
//     const jumlahPilihan = parseInt(document.getElementById('jumlah_pilihan').value);
//     const pilihanContainer = document.getElementById('pilihPilihan');

//     if(isNaN(jumlahPilihan) || jumlahPilihan <= 0){
//         alert("Masukkan pilihan di atas 0");
//         return;
//     }

//     if(name.trim() == ''){//memeriksa nama kosong atau tidak
//         alert("Masukkan nama");
//         return;
//     }

//     pilihanPilih.innerHTML = '';
//     let hasil = 'Nama: ${name}\n';

//     for (let i = 1; i <= jumlahPilihan; i++) {
//         hasil += `Pilihan: ${i}\n`;

//         let input = document.createElement('input');
//         input.type = "text";
//         input.id = `pilihan${i}`;
//         input.placeholder = `Masukkan pilihan ${i}`;

//         pilihanPilih.appendChild(input);
//         pilihanPilih.appendChild(document.createElement('br'));
//     }

//     let button = document.createElement('button');
//     button.innerText = "Tampilkan Hasil";
//     button.onclick = tampilkanHasil;
//     pilihanPilih.appendChild(button);
// }

// function tampilkanHasil(){
//     const jumlahPilihan = parseInt(document.getElementById('jumlah_pilihan').value);
//     let hasilPilih = " "

//     for (let i = 1; i <= jumlahPilihan; i++) {
//         let pilihan = document.getElementById(`pilihan${i}`).value;
//         hasilPilih += `Pilihan ${i}: ${pilihan}\n`;
//     }

//     alert(hasilPilih);

// }

// function ButtonTeksPilihan(){


// }

