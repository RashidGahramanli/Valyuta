function tlManat(liraAmount) {
    const exchangeRate = 0.0537; // 1 Türk lirəsi Azərbaycan manatına bərabər olan məzənnə
    const manatAmount = liraAmount * exchangeRate;
    return manatAmount.toFixed(2); // Nəticəni iki onluq rəqəmə yuvarla
}

function convert() {
    try {
        const liraInput = document.getElementById("liraInput").value.trim(); // Boşluqları sil
        if (!/^[\d.]+$/.test(liraInput)) {
            throw "Rəqəmdən başqa simvol, hərf daxil etmək qadağandır";
        }
    
        const lirAmount = parseFloat(liraInput);
        const manatOutput = tlManat(lirAmount);
        document.getElementById("result").innerHTML = lirAmount + " Türk lirəsi " + manatOutput + " Azərbaycan manatına bərabərdir.";
    } catch (error) {
        document.getElementById("result").innerHTML = "Xahiş edirəm düzgün bir rəqəm daxil edin.";
    }
}
