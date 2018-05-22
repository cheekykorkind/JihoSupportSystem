function addNumber(){
  return 'addNumber1';
  // var status = 'S0';
  // var result = '1. ';
  // var sentenceNumber = 1;
  // 
  // var noNewLinePattern = /\n/;
  // 
  // var str = document.getElementById('textId').value;
  // for(var i = 0; i < str.length; i++){
  //   if(status === 'S0' && !str[i].match(noNewLinePattern)){
  //     result += str[i];
  //     setStatus('A1');
  //   }
  //   else if(status === 'A1' && !str[i].match(noNewLinePattern)){
  //     result += str[i];
  //     setStatus('A1');
  //   }
  //   else if(status === 'A1' && str[i].match(noNewLinePattern)){
  //     result += '\n';
  //     sentenceNumber++;
  //     setStatus('A2');
  //   }
  //   else if(status === 'A2' && !str[i].match(noNewLinePattern)){
  //     result = result + sentenceNumber + '. ' + str[i];
  //     setStatus('S0');
  //   }
  // }
  // 
  // return = result;
}

function setStatus(currentStatus){
  status = currentStatus;
}
