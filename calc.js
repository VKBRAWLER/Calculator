let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{

    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == "="){
            let evaluate = document.querySelector('input').value;
            try {
                evaluate = eval(evaluate);
            }
            catch(e){
                document.querySelector('input').value = "ERROR";
            }
            evaluate = eval(evaluate);
            document.querySelector('input').value = evaluate;
        }
        else if (e.target.innerHTML == "AC"){
            document.querySelector('input').value = "";
        }
        else{
            let string = "";
            string += e.target.innerHTML;
            document.querySelector('input').value += string;
        }
    })

    button.addEventListener('mouseover', (f)=>{
        f.target.style.setProperty('font-size', '75px');
    })
    
    button.addEventListener('mouseout', (g)=>{
        g.target.style.setProperty('font-size', '50px');
    })   
})

// added a comment to update the commit in the github reposoritory
