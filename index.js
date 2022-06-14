function removeNegative(num) {
    return num >= 0
}

let filtered = [10, 20, 30, 40, -50, -60, 70, 80].filter(removeNegative)
console.log(filtered);
