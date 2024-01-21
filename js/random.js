function randomnum() {
    // Initialize an array to keep track of used numbers
    if (!randomnum.usedNumbers) {
      randomnum.usedNumbers = [];
    }
  
    // Generate a random number within the specified range
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 30);
    } while (randomnum.usedNumbers.includes(randomNumber));
  
    // Store the used number in the array
    randomnum.usedNumbers.push(randomNumber);
  
    // Reset the array if all numbers have been used
    if (randomnum.usedNumbers.length === 30) {
      randomnum.usedNumbers = [];
    }
  
    return randomNumber;
}
// alert(randomnum())
document.getElementById('btimg1').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('btimg2').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('btimg3').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('btimg4').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('aboutbtimg1').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('aboutbtimg2').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('aboutbtimg3').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('aboutbtimg4').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('contactbtimg1').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('contactbtimg2').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('contactbtimg3').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('contactbtimg4').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('editbtimg1').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('editbtimg2').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('editbtimg3').src = 'img/'+randomnum()+'.jpeg';
document.getElementById('editbtimg4').src = 'img/'+randomnum()+'.jpeg';