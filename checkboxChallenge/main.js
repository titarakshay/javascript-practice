let checkboxs= document.querySelectorAll("input");
console.log(checkboxs);
let lastChecked;
function handleBox(event){
    console.log(event)
    //check shift key down or not;
    //also checkbox is checked or not;
    let inBetween=false;
    if(event.shiftKey && this.checked){
    checkboxs.forEach(checkbox=>{
        console.log(checkbox)
        if(checkbox === this || checkbox===lastChecked){
            inBetween = !inBetween;
            console.log("start to end")
        }
        if(inBetween){
            checkbox.checked=true;
        }
    })
    }
    lastChecked=this;
}

checkboxs.forEach(checkbox=>{
    checkbox.addEventListener('click',handleBox)
})