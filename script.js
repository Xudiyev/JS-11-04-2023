$(function () {


    $('img').attr('title', 'T-shirts')

    $('#bg').css({
        'width': '100%',
        'height': '100%',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
        'background-position': 'center',
        'background-color': 'rgba(0,0,0,0.6)',
        position: 'fixed',
        top: 0,
        display: 'none',

    })

    $('div.globalImg >img').click(function () {
        let imgPath = $(this).attr('src')
        $('#bg').css({
            'background-image': `url('${imgPath}')`,
            'display': 'block'
        })

    })
   
    $('#bg').click(function(){
        $('#bg').css({
            'display':'none'
        })
    })
    
    $('.t_Shirts >img').click(function () {
      
        let imgPath = $(this).attr('src')

        $('.globalImg >img').attr('src',imgPath);
       
       
       
       
    })


})
