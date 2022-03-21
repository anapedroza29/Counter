
// document.querySelectorAll()
let count = 0;
const value = document.querySelector('#value');
//console.log(value);
const btns = document.querySelectorAll(".btn");
//console.log(btns);
   
 // forEach btns create a eventlistener for our class list. when I clik the btns it should decrease, increase or reset. 

btns.forEach(myfuntion)
function myfuntion (btn) {
  console.log (btn)
btn.addEventListener('click', myfuntion1)
function myfuntion1 (list) {
  console.log (list)
const styles = list.currentTarget.classList;
    if (styles.contains('decrease')){
    count --;
    } else if (styles.contains('increase')){
    count ++;
    } else {
      count = 0;
    }
   
    if (count > 0){
      value.style.color = ("red")
      console.log(value)
    } if (count < 0){
      value.style.color = ("blue")
    } if (count === 0){
      value.style.color = ("black")

    }

    value.textContent = count;

}
};


