document.querySelector('.range').addEventListener('input', ()=>{
    let data = document.querySelector('.range').value;
    document.querySelector('.out-1').innerHTML = data;
})