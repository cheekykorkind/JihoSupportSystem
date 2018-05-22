var rawCTXFreeGrammar = 
`
LITERAL:   DecimalConstant     |   OctalConstant     |   HexadecimalConstant     ;

DecimalConstant
    :   '0'
	|   [1-9] [0-9]*
    ;
`;

//  一番前は改行文字がある。排除する。
if (rawCTXFreeGrammar[0].match(/\n/) && rawCTXFreeGrammar[rawCTXFreeGrammar.length-1].match(/\n/)) {
    rawCTXFreeGrammar = rawCTXFreeGrammar.slice(1,rawCTXFreeGrammar.length-1);
}

/*
scanner(
    var nodeList = createNode();
    return nodeList;
);
nodeList와는 별도로 함수를 만들자.
setChildNode(
    searchChildNode();
    setValue(child);
);

function setChildNode(){
    var child = searchChildNode();
    if(child){
        self.setValue(child);
    }
    function setValue(child){
        for(i in self.value){
            if(self.value[i] === child.name){
                self.value[i] = child;
                break;
            }
        }
    }
}
*/
