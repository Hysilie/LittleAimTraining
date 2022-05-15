
const counterDisplay = document.querySelector("h3");
const reset = document.querySelector('#btn2');
const play = document.querySelector('#btn1');

// Set Up Counter
let counter = 0;

// Set up targets
const targetMaker = () => {
    
    const target = document.createElement("span");
    
    document.body.appendChild(target);
    
    target.classList.add("target");
    
    const size = Math.random()* 10 + 30 +"px";
    target.style.width = size;
    target.style.height = size;
    
    target.style.top = Math.random() * 100 + 50 + "5%";
    target.style.left = Math.random() * 100 + "%";
    
    const plusMinus = Math.random () > 0.5 ? 1 : -1;
    target.style.setProperty('--left', Math.random() * 100  * plusMinus + "%");

    target.addEventListener('click',() => {
        counter++;
        counterDisplay.textContent= counter;
        target.remove();
    })

    setTimeout(()=> {
        target.remove();
    },8000)
}

// Start Game 
const startGame =() => {
  setInterval( targetMaker, 1000); 

}
// Reset Game
const resetGame = () => {
    reset.addEventListener('click',() => {
        window.location.reload()
    })}

// Call Start & Reset on click
play.addEventListener('click', ()=>{
    startGame(); })

reset.addEventListener ('click', ()=> {
  resetGame(); })

    
