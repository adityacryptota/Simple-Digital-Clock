function dateFunction(){

    let date = new Date(); 
    
    let hours = date.getHours();

    let minutes = date.getMinutes();

    let seconds = date.getSeconds();

    let timeis = hours + ' : ' + minutes + ' : ' + seconds;

    document.querySelector('h1').innerHTML = timeis;


}

setInterval(dateFunction, 1000);