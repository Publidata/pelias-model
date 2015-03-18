
module.exports.uppercase = function(){
  return function( val ){
    return val.toUpperCase();
  };
};

module.exports.lowercase = function(){
  return function( val ){
    return val.toLowerCase();
  };
};

module.exports.stringify = function(){
  return function( val ){
    // because javascript: (''+undefined) === 'undefined'
    if( 'undefined' === typeof val ){
      return '';
    }
    return '' + val;
  };
};

module.exports.floatify = function( precision ){
  return function( val ){
    return parseFloat( val ).toFixed( precision || 10 )/1;
  };
};

module.exports.roundify = function(){
  return function( val ){
    return Math.round(val);
  };
};