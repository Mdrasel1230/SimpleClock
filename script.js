setInterval(runTheClock, 1000);

const secnd = document.querySelector('[second]');
const mint = document.querySelector('[minute]');
const hour = document.querySelector('[hour]');


function runTheClock() {
  const date = new Date()
  console.log(date);
	let sec = date.getSeconds();
    let min = date.getMinutes();
	let hr = date.getHours();
    
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
	
	let secPosition = sec*360/60;
	let minPosition = (min*360/60)+(sec*(360/60)/60);
	let hrPosition = (hr*360/12)+(min*(360/12)/60);
	
    hour.style.transform = "rotate(" + hrPosition + "deg)";
    mint.style.transform = "rotate(" + minPosition + "deg)";
    secnd.style.transform = "rotate(" + secPosition + "deg)";
}
runTheClock()