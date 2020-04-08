/*Exercise - Append
1. Use jQuery to select the body element
2. Use the .append() function to append a new hyperlink.
3. Use the .attr() function to set an href attribute on the hyperlink. Open it in your DOM and check it's clickable.
*/

let link = $('body').append('<a>Google</a>');

$('a').attr('href', 'https://www.google.com/')