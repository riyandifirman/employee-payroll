$('body').on('submit', '#orderForm', function(e){
    e.preventDefault();

    let data = $(this).serializeArray();

    const nik = $('#NIK').val();
    const nama = $('#Nama').val();
    const nickname = nama.split(' ')[0];
    const golongan = $('#golongan').val();
    const status = $('#status').val();
    const jenkel = $('input[name="jenis_kelamin"]:checked').val();
    let titlename;
    let gapok;
    let tunjangan;
    let potongan;
    let total_gaji;

    if (golongan == 1) {
        gapok = 3000000;
        potongan = 100000;
    } else if (golongan == 2) {
        gapok = 3500000;
        potongan = 150000;
    } else if (golongan == 3) {
        gapok = 4000000;
        potongan = 200000;
    } else if (golongan == 4) {
        gapok = 4500000;
        potongan = 250000;
    }

    if (status == "Belum Menikah") {
        tunjangan = 200000;
    } else if (status == "Sudah Menikah") {
        tunjangan = 400000;
    } else if (status == "Cerai") {
        tunjangan = 250000;
    }

    if (jenkel == "Pria") {
        titlename = "Mr.";
    } else if (jenkel == "Wanita") {
        titlename = "Mrs.";
    }

    total_gaji = (gapok + tunjangan) - potongan;

    $('#output-nik').html(nik);
    $('#output-nama').html(nama);
    $('#output-golongan').html(golongan);
    $('#output-pernikahan').html(status);
    $('#output-jenkel').html(jenkel);
    $('#output-gapok').html('Rp.' + gapok);
    $('#output-tunjangan').html('Rp.' + tunjangan);
    $('#output-potongan').html('Rp.' + potongan);
    $('#output-gaji').html('Rp.' + total_gaji);
    $('#exampleModalLongTitle').html('Salary Report ' + titlename + nickname)
    $('#exampleModalLong').modal('show')
})  