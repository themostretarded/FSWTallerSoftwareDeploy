/**Basado en 
 https://api.jquery.com/each/
 http://api.jquery.com/jquery.getjson/
 api falsa
 http://myjson.com/i1gx3
 https://api.myjson.com/bins/i1gx3

 */
const url = "https://api.myjson.com/bins/q5nfr"

$(() => {
    $.ajax({
        url: "https://api.myjson.com/bins/q5nfr",
        type: "GET",
        success: function (result) {
            console.log(result)
        }
      });
});
    