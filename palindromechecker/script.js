const input=document.getElementById("text-input");
const check=document.getElementById("check-btn");
const output=document.getElementById("result");
const isp="is a Palindrome";
const nop="is not a Palindrome";
check.addEventListener("click",function (){
    if(input.value.trim()===""){
        return alert("Please input a value");
    }
    let inp=input.value.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    for(let i=0;i<inp.length/2;i++){
        if(inp[i]!==inp[inp.length-1-i]){
            output.innerHTML=`
            <p><strong>${input.value}</strong> ${nop}</p>`;
            output.classList.remove("hidden");
            return;
        }
    }
    output.innerHTML=`<p><strong>${input.value}</strong> ${isp}</p>`;
    output.classList.remove("hidden");
});