let color=[ 'red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

function stackBalls(){
    let i=Math.floor(Math.random()*15);
    let ball=$('<div></div>').css({
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        backgroundColor: color[i]
    });
    $('#basket').append(ball);;
    
}

$('button').click(stackBalls);