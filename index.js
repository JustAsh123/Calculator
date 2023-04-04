function add_to_screen(x){
    if(x=="b_l"){
        x="("
    }else if(x=="b_r"){
        x=")"
    }
    document.getElementById("screen").value = document.getElementById("screen").value+x
}

function calculate(){
    let eq = document.getElementById("screen").value;
    let res = eval(eq);
    document.getElementById("screen").placeholder = res;
    document.getElementById("screen").value = "";
}
