function hasilInputPilihan(){
    const name = document.getElementById('nama').value;
    const totalPilihan =  parseInt(document.getElementById('jumlahPilihan').value);
    const masukkanTeks = document.getElementById('masukkanTeks');

    if(isNaN(totalPilihan) || totalPilihan <= 0 ){
        alert("Masukkan pilihan yang valid");
        return;
    }

    if(name.trim() == ''){
        alert("Masukkan nama");
        return;
    }

    masukkanTeks.innerHTML = ''; 
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

    let hasilDipilih = '<h4>Teks Pilihan:</h4>';

    
    for (let i = 1; i <= totalPilihan; i++) {
        let pilihan = document.getElementById(`pilihan${i}`).value;
        hasilDipilih += `<p>Pilihan ${i}: ${pilihan}</p>`;
    }

    pilihTeks.innerHTML = hasilDipilih;
}

function pesan(){
    const name = document.getElementById('nama').value;
    const totalPilihan =  parseInt(document.getElementById('jumlahPilihan').value);
    const pesan = document.getElementById('pesan');

    let pilihanTeks = [];

    for (let i = 1; i <= totalPilihan; i++) {
        let pilihan = document.getElementById(`pilihan ${i}`).value;
        pilihanTeks.push(pilihan);
    }

    let pesanHalo = `Hallo, nama saya ${name}, saya mempunyai sejumlah ${totalPilihan} pilihan, yaitu ${pilihanTeks.join(', ')}, dan saya memilih ${pilihanTerpilih}.`;
    
    alert(pesanHalo);
}