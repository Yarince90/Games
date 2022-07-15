
//Click Event listener To Expand game descriptions
document.getElementById("expandText1").addEventListener("click", ()=>{
    document.getElementById("hiddenText1").hidden = false;
    document.getElementById("shrinkText1").hidden = false;
    document.getElementById("expandText1").hidden = true;
  });

  document.getElementById("expandText2").addEventListener("click", ()=>{
    document.getElementById("hiddenText2").hidden = false;
    document.getElementById("shrinkText2").hidden = false;
    document.getElementById("expandText2").hidden = true;
  });

  document.getElementById("expandText3").addEventListener("click", ()=>{
    document.getElementById("hiddenText3").hidden = false;
    document.getElementById("shrinkText3").hidden = false;
    document.getElementById("expandText3").hidden = true;
  });

  //Click Event listener To Shrink game descriptions
document.getElementById("shrinkText1").addEventListener("click", ()=>{
    document.getElementById("hiddenText1").hidden = true;
    document.getElementById("shrinkText1").hidden = true;
    document.getElementById("expandText1").hidden = false;
  });

  document.getElementById("shrinkText2").addEventListener("click", ()=>{
    document.getElementById("hiddenText2").hidden = true;
    document.getElementById("shrinkText2").hidden = true;
    document.getElementById("expandText2").hidden = false;
  });

  document.getElementById("shrinkText3").addEventListener("click", ()=>{
    document.getElementById("hiddenText3").hidden = true;
    document.getElementById("shrinkText3").hidden = true;
    document.getElementById("expandText3").hidden = false;
  });