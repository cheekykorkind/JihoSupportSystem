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
          console.log(i +' '+i1);
          console.log(directoryPathCount);
          console.log(typeof i1);
          console.log(typeof directoryPathCount);

          if(i1 == directoryPathCount){
            script.src = directoryPath + scriptNames[i][i1] +'.js';
            continue;
          }
          directoryPath += scriptNames[i][i1] + '/';
        }

        document.head.appendChild(script);
      }
    }
    
    // this.setRawScript = function(scriptNames){
    //   for (i in scriptNames) {
    //     var script = document.createElement("script");
    //     script.src = './'+scriptNames[i] +'.js';
    //     document.head.appendChild(script);
    //   }
    // }
  }