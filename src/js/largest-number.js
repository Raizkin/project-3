function findBiggestNumber() {
    const inpt1 = document.querySelector("#input-1")

    const inpt2 = document.querySelector("#input-2")

    const inpt3 = document.querySelector("#input-3")


//==================================================================================================

    const input1 = Number(inpt1.value) || 0
    const input2 = Number(inpt2.value) || 0

    const input3  = Number(inpt3.value) || 0


//===================================================================================================    
    if (isNaN(input1) || isNaN(input2) || isNaN(input3)) {
        document.getElementById("result").textContent = "Введені некоректні числа!";
    } else {
        const biggestNumber = Math.max(input1, input2, input3);
        document.getElementById("result2").textContent = biggestNumber;
    }
}


document.querySelector("#input-1").addEventListener("blur", findBiggestNumber);
document.querySelector("#input-2").addEventListener("blur", findBiggestNumber);
document.querySelector("#input-3").addEventListener("blur", findBiggestNumber);




