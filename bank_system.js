class BankAkun {
  constructor() {
    this.saldo = 0;
  }

  deposit(jumlah) {
    if (jumlah && jumlah > 0) {
      this.saldo += jumlah;
      return true;
    }
    return false;
  }

  withdraw(jumlah) {
    if (jumlah && jumlah > 0 && jumlah <= this.saldo) {
      this.saldo -= jumlah;
      return true;
    }
    return false;
  }
}

function updateSaldoDisplay() {
  let saldoElement = document.getElementById("saldo");
  saldoElement.textContent = `saldo lu sekarang tersedia : $${myAkun.saldo.toFixed(
    2
  )}`;
}

function perfomTransaksi(akun, tipeTransaksi, jumlah) {
  setTimeout(() => {
    try {
      let sukses = false;

      if (tipeTransaksi === "deposit") {
        sukses = akun.deposit(jumlah);
      } else if (tipeTransaksi === "withdraw") {
        sukses = akun.withdraw(jumlah);
      }

      if (sukses) {
        updateSaldoDisplay();
        console.log(
          `transaksi sukses. saldo lu sekarang: $${akun.saldo.toFixed(2)}`
        );
      } else {
        console.log("transaksi gagal boy");
      }
    } catch (error) {
      console.error("terjadi kesalahan dalam transaksi:", error.message);
    }
  }, 3000); // dieksekusi selama 3 detik
}

const myAkun = new BankAkun();

function tambahSaldo() {
  let tambahan = Number(prompt("masukkan jumlah saldo:"));

  if (tambahan && tambahan > 0) {
    perfomTransaksi(myAkun, "deposit", tambahan);
  } else {
    alert("isi yang benar.");
  }
}

function kurangiSaldo() {
  let pengurangan = Number(prompt("amsukkan jumlah yang ingin diambil:"));

  if (pengurangan && pengurangan > 0 && pengurangan <= myAkun.saldo) {
    perfomTransaksi(myAkun, "withdraw", pengurangan);
  } else {
    alert("jumlah saldo ga bener.");
  }
}

updateSaldoDisplay();
