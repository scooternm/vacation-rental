document.getElementById("overnightForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    const roomType = document.querySelector('input[name="roomType"]:checked');
    const startDate = new Date(document.getElementById("when").value);
    const numOfDays = parseInt(document.getElementById("numOfDays").value);
    const isAAAOrMilitary = document.querySelector('input[name="member"]:checked').value;
    
    
    const month = startDate.getMonth();
    
    let roomRate;
    if (month >= 5 && month <= 7) {
        if (roomType.id === "king" || roomType.id === "queen") {
            roomRate = 250;
        } else if (roomType.id === "suite") {
            roomRate = 350;
        }
    } else {
        if (roomType.id === "king" || roomType.id === "queen") {
            roomRate = 150;
        } else if (roomType.id === "suite") {
            roomRate = 210;
        }
    }
    
    
    let totalCost = roomRate * numOfDays;

    
    if (isAAAOrMilitary === "yes") {
        const discountType = document.querySelector('input[name="discountType"]:checked').value;
        if (discountType === "aaa") {
            totalCost *= 0.9; 
        } else if (discountType === "military") {
            totalCost *= 0.8;
        }
    }
    
    
    document.getElementById("output").textContent = `Total Cost: $${totalCost.toFixed(2)}`;
});

const yesRadio = document.getElementById("yes");
const noRadio = document.getElementById("no");
const discountTypeSection = document.getElementById("discountTypeSection");

yesRadio.addEventListener("change", function() {
    discountTypeSection.style.display = "block";
});

noRadio.addEventListener("change", function() {
    discountTypeSection.style.display = "none";
});
