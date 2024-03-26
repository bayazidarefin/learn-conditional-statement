const obtaindMark = document.getElementById("obtaindNum");
const resultOutput = document.getElementById("resultMassage");

const submitNum = () => {
    const inpNum = parseInt(document.getElementById("markInput").value);
    if (inpNum>100 || inpNum<=0){
        alert("Mark is not valid");
    }
    else{
        obtaindMark.innerText = inpNum;
        if(inpNum > 79){
            resultOutput.innerText = "Your Grade is : A+";
        }
        else if(inpNum > 69){
            resultOutput.innerText = "Your Grade is : A";
        }
        else if(inpNum > 59){
            resultOutput.innerText = "Your Grade is : A-";
        }
        else if(inpNum > 49){
            resultOutput.innerText = "Your Grade is : B";
        }
        else if(inpNum > 39){
            resultOutput.innerText = "Your Grade is : C";
        }
        else if(inpNum > 32){
            resultOutput.innerText = "Your Grade is : D";
        }
        else{
            resultOutput.innerText = "You are fail";
            resultOutput.classList.remove("pass_massage");
            resultOutput.classList.add("fail_massage");
        }
    }
}


// bayazid arefin [26/3/24]