/*Exercise - Make it red
1. Create a web page with half a dozen paragraphs on it.
2. Add a click handler. When you click a paragraph it goes red.
*/
$(document).ready(background);

function background(){
    $('p').click(function(){
        $(this).css({'color': 'red','font-weight':'bold'})
    })
}