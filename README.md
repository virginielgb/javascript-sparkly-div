# javascript-sparkly-div
Add moving stars (or anything else) on any div

<h2> In this readme... </h2>
<ul>
  <li> <a href="#nutshell"> In a nutshell </a> </li>
  <li> <a href="#usage"> Usage </a> </li>
  <li> <a href="#dep"> Dependencies </a> </li>
</ul>

<h2 id="nutshell"> In a nutshell </h2>
<ul>
  <li> All you really need is the js file <a href="https://github.com/virginielgb/javascript-sparkly-div/blob/master/src/sparkly.js">sparkly.js</a> </li>
  <li> <a href="https://jsfiddle.net/virginieLGB/5nxy2y8g/6/">Demo</a> </li>
  <li> Or you can see how it works in the <a href="https://github.com/virginielgb/javascript-sparkly-div/tree/master/src">src</a> folder  </li>
</ul>

<h2 id="usage"> Usage </h2>
Basic command is `new mySparkle( ).init( $( elem ) , number_of_stars , options );`, with `options` being JSON-parsed CSS properties.
<h3> Examples </h3>
In your html file, just add
```
<script>
  new mySparkle( ).init( $( ".mySparkleDiv" ) , 300 );
</script>
```
Or even
```
<script>
  var sparks = new mySparkle( );
  sparks.init( $( ".mySparkleDiv" ) , 150 , {
    "width" : "5px",
  } ); // creates 150 stars with a 5px width, in the div(s) with the "mySparkleDiv" class 
</script>
```
If no element is specified, then it is assumed that the stars have to be added to the `body`.

<h2 id="dep"> Dependencies </h2>
This requires <a href="http://jquery.com/">jQuery</a> to have been loaded first.
You can add `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>` in the head of your HTML file.
