$(function(){
    const oGrid=document.querySelector('#grid');
    let html='';
    for(let i=0;i<img_list.length;i++){
        html+=`
            <li>
                <a href="#">
                    <img style="width:100%;" src="${img_list[i].link}" alt="img01">
                    <h3>${img_list[i].title}</h3>
                </a>
            </li>
        `;
    }
    oGrid.innerHTML=html;
    $('.t_show').hide();
    $('.t_images').hide();
    new GridScrollFx( document.getElementById( 'grid' ), {
        viewportFactor : 0.4
    } );
    $('#grid li').click(function(){
        $('.t_show').show();
        $('.t_images').show();
        var _this = $(this).children().children('img').attr('src');
        $('.t_img').css({'background': 'url('+ _this +') no-repeat center','background-size':'contain'})
    });
    $('.t_images').click(function(){
        $('.t_show').hide();
        $('.t_images').hide();
    });
});