
var INITIALIZE_SCRIPTS = new Scripts();
INITIALIZE_SCRIPTS.setSolidScript([
  ['addNumber'],
  ['parsingGenerateSystem', 'initCTXFreeGrammar'],
]);
INITIALIZE_SCRIPTS.setTempScript([
  ['setPHPKeyValue'],
]);

function start() {
  // CTXFreeGrammarMain();
  // var result = selectFunction('initCTXFreeGrammar');
  // PopupCenterDual('','a1', 600, 600, result);
}

function selectFunction(functionName){
  if(!isExistFunction(functionName)){
    alert('正しい関数を選んでください。');
    return '正しい関数を選んでください。';
  }

  var executeScript = 'return '+functionName+'();';
  return new Function(executeScript)();
}

function isExistFunction(scriptName)
{
  var result = false;
  var scripts = document.getElementsByTagName('script');
  var scriptsNames = new Array();

  // sciprt属性以外の属性もあるからfor inは使えない。
  for(var i = 0; i < scripts.length; i++){
    scriptsNames.push(scripts[i].src);
  }

  var fileURL = '';
  var rawFileURL = window.location.href

  var slashCount = rawFileURL.split('/').length - 1;
  var slachPattern = /\//;

  for (i in rawFileURL) {
    fileURL += rawFileURL[i];
    rawFileURL[i].match(slachPattern) ? slashCount-- : slashCount;
    if(slashCount === 0){
      break;
    }
  }

  // 새로운 디렉토리에 대한 로직을 추가해야함.
  var directories = ['solidFunction', 'tempFunction'];
  for (i in directories) {
    var tempURL = fileURL + directories[i] + '/' + scriptName + '.js';
    // if(){

    // }

    for(i in scriptsNames){
      if(scriptsNames[i] === tempURL){
        result = true;
        break;
      }
    }
  }

  return result;
}

function PopupCenterDual(url, title, w, h, result) {
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
  width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  
  var left = ((width / 2) - (w / 2)) + dualScreenLeft;
  var top = 120;
  
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  
  var HTMLresult = '<pre>'+  result +'</pre>';
  newDiv = newWindow.document.createElement("div");
  newDiv.innerHTML = HTMLresult;
  newWindow.document.body.appendChild(newDiv);
  
  if (window.focus) {
    newWindow.focus();
  }
}
