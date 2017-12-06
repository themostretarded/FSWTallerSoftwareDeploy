/**Basado en 
 https://api.jquery.com/each/
 http://api.jquery.com/jquery.getjson/
 api falsa
 http://myjson.com/i1gx3
 https://api.myjson.com/bins/i1gx3

 */

const url = "https://api.myjson.com/bins/i1gx3"

$(() => {
    //consumir api 
    /*
    $.getJSON(url,data=>{
      var item = [];
      $.each();
    }); */
    $.getJSON( url, ( data ) => {
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
        console.log("insercion arreglo")
      });
     
      /*$( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );*/
    });
});
