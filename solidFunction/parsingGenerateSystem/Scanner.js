// scanner(
//     var nodeList = createNode();
//     return nodeList;
// );

/*
    S0 초기상태
    S0 -> A1 idPattern을 만남.
    A1 -> A1 idPattern을 만남.
    A1 -> A2 spacePattern을 만남.
    A2 -> A2 spacePattern을 만남.
    A2 -> A3 :을 만남.
    A3 -> A3 spacePattern을 만남.
    A3 -> A4 valuePattern을 만남.

*/
function Scanner(rawCTXFreeGrammar){
    this.rootNode = null;
    var temp = '';
    var idPattern = new RegExp('[a-zA-Z_]', 'g');
    var spacePattern = new RegExp('[(\n|\\s|\t)]', 'g');
    var valuePattern = new RegExp('[a-zA-Z_0-9]', 'g');

    for(i in rawCTXFreeGrammar){
        if(rawCTXFreeGrammar[i].match(idPattern)){
            
        }else if(rawCTXFreeGrammar[i].match(spacePattern)){
            console.log(i);
        }
        
    }
}

function Node(name, values){
    this.name = name;   //  string
    this.values = values;   //  Array
    this.childNode = null;

    this.setName = function(name){
        this.name = name;
    }
    this.getName = function(){
        return this.name;
    }

    this.setValues = function(values){
        if(this.values === undefined){
            this.values = new Array();
        }
        this.values.push(values);
    }
    this.getValues = function(){
        return this.values;
    }

    this.setChildNode = function(childNode){
        this.childNode = childNode;
    }
    this.getChildNode = function(){
        return this.childNode;
    }
}