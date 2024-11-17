function increment() {

    let inputValue = document.getElementById("input");

    let value = parseInt(inputValue.value);
    if (value == 10) {
        return;
    }
    value += 1;
    inputValue.value = value;

    // console.log(value)
}

function decrement() {
  let inputValue = document.getElementById("input");
  let value = parseInt(inputValue.value);
  value -= 1;
  if (value >= 0) {

    inputValue.value = value;

    // console.log(value)
    
  }
}

function resetNumber() {
  
  let inputValue = document.getElementById("input");
  value = 0;
  inputValue.value = value;
  
}

