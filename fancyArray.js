function fancyArray(sText, isReversed) {
  sText = sText || '-->';


  var arr = ["James", "Jill", "Jane", "Jack"];
  if (isReversed == 'false') {
    for (var i = 0; i < arr.length; i++) {
      console.log(i + sText + arr[i]);
    }
  } else if (isReversed == 'true') {
    for (var i = arr.length - 1; i >= 0; i--) {
      console.log(i + sText + arr[i]);
    }
  }

}
fancyArray('-----!!!!--->', 'true');
fancyArray('-****----->', 'false');
