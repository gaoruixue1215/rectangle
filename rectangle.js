$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
      $forkMeGH.show("https://github.com/gaoruixue1215/rectangle"),
      $bszPageFooter.show('body')

  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }

  /*calc button click event*/
  $btnCal.click(function(){

    //get value
    var w = Number($width.val());
    var h = Number($height.val());

    //calculate
    var p =roundFractional(2*(w+h),1);
    var a =roundFractional(w*h,2);

    //output
    $perimeter.val(p);
    $area.val(a);
  })
});
