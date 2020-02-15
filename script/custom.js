/**
 * dropdownコントロール
 */
(function($){
	/* humburger menu */
	function removeMenu($shade){
		$shade
		.remove();
		$('#js-slidemenu').slideUp('fast');
	}
	$('#slidemenu-btn').on('click', function(e){
		e.preventDefault();
		var $shade = $('.js-slidemenu-effect')[0];
		if($shade === undefined) {
			$('<div>')
			.addClass('js-slidemenu-effect')
			.on('click', function(){
				removeMenu(this);
			})
			.appendTo($('body'));
			$('#js-slidemenu').slideDown('fast');
		} else {
			removeMenu($shade);
		}
	});
})(jQuery);

//スライダー//
$('#tab-slider').each(function(){

    var $tabAnchors = $(this).find('.tab a'),//タブのaタグ
          $panelInner = $(this).find('.panel-inner'),//スライドする部分
          panelWidth = $panelInner.find('.panel-item').width();//パネルのwidth

    //タブがクリックされたらタブのインデックス番号を取得し、
    //$panelInnerをタブのwidth*インデックス番号分leftを移動
    $tabAnchors.click(function(event){

        //デフォルトのaタグの動作をキャンセル
        event.preventDefault();

        var index = $(this).closest('li').index();//クリックされたタブのインデックス番号
        $panelInner.animate({
            left: -panelWidth * index  + 'px'
        });
    });
});