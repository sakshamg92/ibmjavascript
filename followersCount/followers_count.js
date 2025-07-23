let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue(){
    if (count == 10 ){
        alert(`Your Instagram post gained ${count} followers! Congratulations!`);
    }else if (count == 20){
        alert(`Your Instagram post gained ${count} followers! Keep it up!`);
    }
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}