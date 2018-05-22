// scanner(
//     var nodeList = createNode();
//     return nodeList;
// );
function Scanner(rawCTXFreeGrammar){
    for(i in rawCTXFreeGrammar){
        console.log(rawCTXFreeGrammar[i]);
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