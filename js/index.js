//This function will be called when user click changing language
function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en'){
      //$("#enTranslator").css('color', '#f4623a');
      //$("#afrTranslator").css('color', '#212529');
    }
    if(lng == 'afr'){
      //$("#afrTranslator").css('color', '#f4623a');
      //$("#enTranslator").css('color', '#212529');
    }
}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (Khmer) with attribute lng-tag
  $("#afrTranslator").click(function(){
    translate('afr', 'lng-tag');
  });
});
