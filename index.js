let sta = document.querySelector("h5")
let add = document.querySelector("#add")
let remove = document.querySelector("#remove")
add.addEventListener('click',function(){
    sta.textContent = "Friends"
    sta.style.color = 'green'
})
remove.addEventListener('click',function(){
    sta.textContent = 'Stranger'
    sta.style.color = 'red'
})