function add_to_screen(x){
    if(x=="b_l"){
        x="("
    }else if(x=="b_r"){
        x=")"
    }
    document.getElementById("screen").value = document.getElementById("screen").value+x
}