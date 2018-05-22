function Scripts(){
    this.setSolidScript = function(scriptNames){
      this.setScript(scriptNames, 'solidFunction');
    }
    this.setTempScript = function(scriptNames){
      this.setScript(scriptNames, 'tempFunction');
    }
  
    this.setScript = function(scriptNames, scriptType){
      for (i in scriptNames) {
        var script = document.createElement("script");
        var directoryPath = './'+scriptType+'/';
        var directoryPathCount = scriptNames[i].length -1;

        for(i1 in scriptNames[i]){
          if(i1 == directoryPathCount){
            script.src = directoryPath + scriptNames[i][i1] +'.js';
            continue;
          }
          directoryPath += scriptNames[i][i1] + '/';
        }

        document.head.appendChild(script);
      }
    }
  }