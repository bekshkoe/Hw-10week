function findMinMax() {
    let n = parseInt(prompt("Оң сан енгізіңіз:"));
    let min = null;
    let max = null;
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            if (min === null) {
                min = i
            }[]
            max = i;
        }
    }
    if (min === null) {
        alert("5-ке бөлінетін сан жоқ!");
    } else {
        alert(`Ең кіші 5-ке бөлінетін сан: ${min}`);
        alert(`Ең үлкен 5-ке бөлінетін сан: ${max}`);
    }
}
findMinMax();