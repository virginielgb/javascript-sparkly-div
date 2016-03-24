var mySparkle = function ( ) { };

mySparkle.prototype.star = { 
  "height": "15px",
  "width": "15px",
  "background-image": " url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAQAAACR313BAAAAS0lEQVQYGZXBQRGAIABFwVeCJBIG00AbwkgRKfE8c/kz7sLBQmIlsZE4SJwkPiRuTharze50udXX5XR4e1k4uUlcJE4SO4mNxIs/PsnOKsJwHzXnAAAAAElFTkSuQmCC )",
  "position": "absolute"
};

mySparkle.prototype.verify = function ( ) { 
  if( !this.elem )
    this.elem = $( "body" );
  if( !this.elem.is( $( "body" ) ) )
    this.elem.css( "position", "relative" );
  if( !this.stars )
    this.stars = [ ];
};

mySparkle.prototype.createStar = function ( ) { 
  this.verify( );
  var star = $( "<div class='star'></div>" );

  var randTop = Math.random( ) * 100;
  var randLeft = Math.random( ) * 100;
  star.css( "top", randTop + "%" );
  star.css( "left", randLeft + "%" );

  for( var prop in this.star ) { 
    star.css( prop, this.star[ prop ] );
  }

  this.elem.append( star );
  this.stars.push( star );

};

mySparkle.prototype.createStars = function ( n ) { 
  for( var i = 0; i < n; i++ )
    this.createStar( );
};

mySparkle.prototype.moveStars = function ( ) { 
  for( var i = 0; i < this.stars.length; i++ ) { 
    var randTop = Math.random( ) * 100;
    var randLeft = Math.random( ) * 100;
    this.stars[ i ].css( "top", randTop + "%" );
    this.stars[ i ].css( "left", randLeft + "%" );
  }
  setTimeout( this.moveStars.bind( this ), 300 );
};

mySparkle.prototype.init = function ( elem, n, opt ) { 
  this.elem = $( elem );
  for( var prop in opt )
    this.star[ prop ] = opt[ prop ];
  
  this.createStars( n );
  this.moveStars( );
};