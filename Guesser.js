function result_generator(){
    let input_1=document.getElementById("input-section").value;
    let num_1=Math.random()*10
    let num_2=Math.floor(num_1)+1
    if(input_1<1 || input_1>10){
        alert("Number between 1 and 10");
        document.getElementById("input-section").value=""
        return
    }
    if(input_1==num_2){
        let str_1="Ada Gommalea...You Gussed right Congratulations...!!!"
        document.getElementById("result-section").value=str_1;
    }
    else{
        document.getElementById("result-section").value="Try Again Fail Again...!!! Number was"+" "+num_2
    }
    document.getElementById(input-section).value=""
    
}