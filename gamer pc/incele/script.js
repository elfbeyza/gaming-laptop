function yorumEkle() {
    const adInput = document.getElementById("adInput").value.trim();
    const soyadInput = document.getElementById("soyadInput").value.trim();
    const yorumInput = document.getElementById("yorumInput").value.trim();
    const yorumListesi = document.getElementById("yorumListesi");

    if (adInput === "" || soyadInput === "" || yorumInput === "") {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const yeniYorum = document.createElement("div");
    yeniYorum.classList.add("yorum");

    // Ad ve soyad kısmını ekleyelim
    const yorumIsim = document.createElement("div");
    yorumIsim.classList.add("yorum-isim");
    yorumIsim.textContent = `${adInput} ${soyadInput}`;

    // Yorum metnini ekleyelim
    const yorumMetin = document.createElement("div");
    yorumMetin.textContent = yorumInput;

    yeniYorum.appendChild(yorumIsim);
    yeniYorum.appendChild(yorumMetin);
    yorumListesi.appendChild(yeniYorum);

    // Alanları temizleyelim
    document.getElementById("adInput").value = "";
    document.getElementById("soyadInput").value = "";
    document.getElementById("yorumInput").value = "";
}