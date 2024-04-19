$('.grid-container2').fadeToggle()
$('.grid-container3').fadeToggle()
$(document).ready(function(){
    let num = 1
    $('.next').on('click', function(){
        if(num < 3){
            $('.grid-container' + num).fadeToggle(1000)
            num += 1
            $('.grid-container' + num).fadeToggle(2000)
        }else if(num == 3){
            $('.grid-container' + num).fadeToggle(1000)
            num = 1
            $('.grid-container' + num).fadeToggle(2000)
        }
    })
    $('.back').on('click', function(){
        if(num > 1){
            $('.grid-container' + num).fadeToggle(1000)
            num -= 1
            $('.grid-container' + num).fadeToggle(2000)
        }else if(num == 1){
            $('.grid-container' + num).fadeToggle(1000)
            num = 3
            $('.grid-container' + num).fadeToggle(2000)
        }
    })
    $(document.body).on('keydown', function(e){
        let clicked = false
        e.preventDefault()
        if(e.key == 'ArrowRight' && !clicked){
            clicked = true
            if(num < 3){
                $('.grid-container' + num).fadeToggle(1000)
                num += 1
                $('.grid-container' + num).fadeToggle(2000, function(){
                    clicked = false
                })
            }else if(num === 3){
                $('.grid-container' + num).fadeToggle(1000)
                num = 1
                $('.grid-container' + num).fadeToggle(2000, function(){
                    clicked = false
                })
            }
        }
        if(e.key == 'ArrowLeft' && !clicked){
            clicked = true
            if(num > 1){
                $('.grid-container' + num).fadeToggle(1000)
                num -= 1
                $('.grid-container' + num).fadeToggle(2000, function(){
                    clicked = false
                })
            }else if(num == 1){
                $('.grid-container' + num).fadeToggle(1000)
                num = 3
                $('.grid-container' + num).fadeToggle(2000, function(){
                    clicked = false
                })
            }
        }
    })
})