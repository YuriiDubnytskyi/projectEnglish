class word{
    constructor(name) {
        this.name = name;
        this.obgEng={};
        this.obgEngTran={};
        this.obgUkr={};
        this.obgUkrTran={};
        this.indexWord=1;
        this.indexTranslate=1;
    }
    addEng(word){
        this.obgEng[this.indexWord]=word;
    }
    addEngTran(word,tran){
        this.obgEngTran[word]=tran;
    }
    addUrk(word,tran){
        for(var i =0;i<tran.length;i++){
            this.obgUkr[this.indexTranslate]=tran[i]
            this.obgUkrTran[tran[i]]=word;
            this.indexTranslate++
        }
        this.indexWord++
    }
    show(){
        console.log(this.obgEng)
        console.log(this.obgEngTran)
        console.log(this.obgUkr)
        console.log(this.obgUkrTran)
    }
    getArrayObj(){
        let array=[this.obgEng , this.obgEngTran , this.obgUkr , this.obgUkrTran];
        return array
    }


}
var wording= new word();

function addWord(){
    var word = document.getElementById('name-form1-7').value.toLowerCase().trim();
    var translate=document.getElementById('email-form1-7').value;
    var tran = translate.split(',');

    console.log(tran[0]);

    wording.addEng(word);
    wording.addEngTran(word,tran);
    wording.addUrk(word,tran);
    wording.show();
}

function sendServer() {
    var array = wording.getArrayObj();
    console.log(array);
var str='';    
for(var i =0;i<array.length;i++){
       str+=array[i]
}
console.log(str)
    var myJSON = JSON.stringify(array);
    var request = new XMLHttpRequest();
    function reqReadyStateChange() {
        if (request.readyState == 4) {
            var status = request.status;
            if (status == 200) {
                document.getElementById("output").innerHTML=request.responseText;
            }
        }
    }

    var body = "array=" + myJSON;
    request.open("GET", "http://englishword.kl.com.ua/src/php/datapost.php?"+body);
    request.onreadystatechange = reqReadyStateChange;
    request.send();

}

		