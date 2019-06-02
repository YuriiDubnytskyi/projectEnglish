let newWord = new words('Yura',3,2);

let x = Math.floor(1+Math.random()*101);
let slovo= newWord.getRandomEnglish(x);
let answer = newWord.getWordEnglish(slovo);
console.log(slovo);
responsiveVoice.speak(""+slovo+"", "UK English Female");
$(document).ready(function(){
    $("#word").append(slovo);
    $(".alert-success").hide();
    $(".alert-danger").hide();
});
console.log(answer)
function next() {
    $('.showing').empty();
    let trueP = $('#trueP').text()
    let falseP = $('#falseP').text()
    go(answer,trueP,falseP);
    newWording();


}

function go(answer,trueP,falseP) {
    let inputValue = document.getElementById('name-header15-f').value.toLowerCase().trim();
    if (answer.includes(inputValue)) {
        $("#trueP").empty();
        $("#trueP").append(++trueP);
        $(".alert-success").append("<strong class='showing'>Success</strong>").show();
        $(".alert-success").slideUp(3000);
        return trueP
    } else {
        $("#falseP").empty();
        $("#falseP").append(++falseP);
        $(".alert-danger").append("<strong class='showing'>Danger !</strong><span class='showing'>"+answer+"</span>").show();
        $(".alert-danger").slideUp(3000);
        return falseP
    }
}
function newWording(){
    $('#word').empty();
    let inputValue = document.getElementById('name-header15-f');
    inputValue.value ='';
    let varible = Math.floor(1+Math.random()*2);
    if(varible == 1){
        let x = Math.floor(1+Math.random()*80);
        slovo = newWord.getRandomEnglish(x);
        answer = newWord.getWordEnglish(slovo);
        responsiveVoice.speak(""+slovo+"", "UK English Female");
    }else if(varible == 2){
        let x = Math.floor(1+Math.random()*97);
        slovo = newWord.getRandomUkraine(x);
        answer = newWord.getWordUkraine(slovo);
    }
    $('.showing').remove(200000);
    $("#word").append(slovo)
}