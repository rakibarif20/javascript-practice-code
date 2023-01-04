// debounce holo performance issue er jonno kag kar thake muloto example mone karen akta sumbit button ase e-commerce site akta click karte akta sumbit hobe r akkbar sumbit karle taka niye bibe apne akta click karse bujte paren nai click hoise kina abr click karlen aktu por dkahen 2 bar click hoise and 2 bar taka kaita niye gase tahon ki karben ai kag er jonno e muloto debounce use kara .


let button = document.querySelector("#bounce");

const debounce =(fc, delay = 500)=>{
    let timeout;

    return ()=>{
        if(timeout){
            clearInterval(timeout)
        }

       timeout = setTimeout(()=>{
        fc()
       },delay)
    }
}

button.addEventListener('click', debounce(()=>{
    console.log('functon is clicked');
},1000))