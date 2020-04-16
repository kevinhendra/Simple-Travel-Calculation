
function hitunga() {
	var tujuan = document.getElementById("tujuan").value;
	var kelas = document.getElementById("kelas").value;
	var jumlah = document.getElementById("jumlah").value;
	var member = document.getElementById("member").value;
	var harga = 0;
	if (tujuan == "jakarta") {
		if (kelas == "ekonomi") {
			harga = 25000;
			menghitung(jumlah,harga);
	}
		else if (kelas == "bisnis") {
			harga = 30000;
			menghitung(jumlah,harga);
		}
		else{
			harga = 50000;
			menghitung(jumlah,harga);
		}

	}
	else if (tujuan == "cirebon"){
		if (kelas == "ekonomi") {
			harga = 30000;
			menghitung(jumlah,harga);
		}
		else if (kelas == "bisnis") {
			harga = 50000;
			menghitung(jumlah,harga);
		}
		else{
			harga = 75000;
			menghitung(jumlah,harga);
		}
	}
	else {
		if (kelas == "ekonomi") {
			harga = 50000;
			menghitung(jumlah,harga);
		}
		else if (kelas == "bisnis") {
			harga = 75000;
			menghitung(jumlah,harga);
		}
		else{
			harga = 100000;
			menghitung(jumlah,harga);
		}
	}
	var tulis = "";
	tulis = menghitung(jumlah,harga);
	if (jumlah >= 1) {
		alert(tulis);
		document.getElementById("form").value = menghitung(jumlah,harga);
	}
	else {
		document.getElementById("form").reset();
		alert("Harap Isi Terlebih Dahulu");
	}
}


function menghitung (jumlah, harga) {
	var hargaa = harga;
	var potongan = 0;
	var total = 0;
	var subtotal = (jumlah*hargaa);
			document.getElementById("tiket").value = hargaa;
			document.getElementById("subtotal").value = subtotal;
			if(document.getElementById("member").checked){
			 potongan = subtotal*0.1;
			document.getElementById("diskon").value = potongan;
		}else{
			document.getElementById("diskon").value = 0;
		}
		total = (subtotal-potongan);
		document.getElementById("total").value = total;
		return total;
	}