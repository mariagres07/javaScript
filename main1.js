function hasilInputPilihan(){
    const name = document.getElementById('nama').value;
    const totalPilihan =  parseInt(document.getElementById('jumlahPilihan').value);
    const masukkanTeks = document.getElementById('masukkanTeks');

    if(isNaN(totalPilihan) || totalPilihan <= 0 ){ //pilihan null atau tidak valid
        alert("Masukkan pilihan yang valid");
        return;
    }

    if(name.trim() == ''){ //nama kosong
        alert("Masukkan nama");
        return;
    }

    masukkanTeks.innerHTML = ''; //reset form
    let hasilInput = '<h4>Masukkan Teks:</h4>';

    for(let i = 1; i <= totalPilihan; i++){
        hasilInput += `
            <label for="pilihan${i}">Pilihan ${i}:</label>
            <input type="text" id="pilihan${i}" name="pilihan${i}" required>
            <br><br>
        `;
    }
    hasilInput += '<button onclick="teksPilihan()">OK</button>';
    masukkanTeks.innerHTML = hasilInput;
}

function teksPilihan(){
    const totalPilihan = parseInt(document.getElementById('jumlahPilihan').value);
    const pilihTeks = document.getElementById('pilihTeks');
    let hasilDipilih = '<h4>Pilih Teks:</h4>';
    
    for(let i = 1; i <= totalPilihan; i++){
        let pilihan = document.getElementById(`pilihan${i}`).value;
        hasilDipilih += `
            <input type="radio" name="pilihanRadio" value="${pilihan}" id="radio${i}">
            <label for="radio${i}">${pilihan}</label><br>        `;
    }
    hasilDipilih += '<br><button onclick="pesan()">Tampilkan Pesan</button>';
    pilihTeks.innerHTML = hasilDipilih;
}

function pesan(){
    const name = document.getElementById('nama').value;
    const totalPilihan =  parseInt(document.getElementById('jumlahPilihan').value);
    const pesanTeks = document.getElementById('pesanTeks');
    const pilihanTerpilih = document.querySelector('input[name="pilihanRadio"]:checked');

    //meminta user untuk memilih kembali jika belum memilih pilihan yang ada
    if (!pilihanTerpilih) {
        pesanTeks.innerHTML = `<p style="color:red;">Silakan pilih salah satu opsi!</p>`;
        return;
    }

    let pesanHalo = `Hallo, nama saya <b>${name}</b>, saya mempunyai <b>${totalPilihan}</b> pilihan, dan saya memilih <b>${pilihanTerpilih.value}</b>.`;

    // Menampilkan pesan
    pesanTeks.innerHTML = `<p>${pesanHalo}</p>`;
}