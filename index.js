function onOff(myName){
    disp.innerHTML += (myName)
}
function clearall(){
    disp.innerHTML = disp.innerHTML.slice(0,-1)
    // disp.value = disp.value.

}
function equalTo(){
    disp2.innerHTML = eval(disp.innerHTML)
}
function act(){
    disp.innerHTML = ''
    disp2.innerHTML = ''

}