function isSubstring(searchString, subString) {
  var lowerSearch = searchString.toUpperCase();
  var lowerSub = subString.toUpperCase();

  if (lowerSearch.indexOf(lowerSub) > -1) {
    return true;
  } else {
    return false;
  }
}

console.log(isSubstring("Time to program", "time"));


var word = "string"
