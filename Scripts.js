function Scripts(){
    this.setSolidScript = function(scriptNames){
      this.setScript(scriptNames, 'solidFunction');
    }
    this.setTempScript = function(scriptNames){
      this.setScript(scriptNames, 'tempFunction');
    }
  
    this.setScript = function(scriptNames, scriptType){
      for (key in scriptNames) {
        var script = document.createElement("script");
        script.src = './'+scriptType+'/'+ scriptNames[key] +'.js';
        document.head.appendChild(script);
      }
    }
    
    this.setRawScript = function(scriptNames){
      for (key in scriptNames) {
        var script = document.createElement("script");
        script.src = './'+scriptNames[key] +'.js';
        document.head.appendChild(script);
      }
    }
  }