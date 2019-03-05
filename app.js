var obtenerRespuestas= function(){
    $.getJSON( "test.json", function( data ) {
  var items = [];
  var gotItems = data.respuestas;
  showItems(gotItems);
});};

var obtenerPreguntas= function(){
    $.getJSON( "test.json", function( data ) {
  var items = [];
  var gotItems = data.preguntas;
  showItems(gotItems);
});};

var showItems= function (gotItems){
    var items = [];
    $.each( gotItems, function( key, val ) {
      
    $( "body").append( "<div id='" + key + "'>" + val + "</div>" );
  });
    
};