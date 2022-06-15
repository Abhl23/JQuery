console.log('Hey');
let color=['black', 'white'];
let i=0,j=1;

function changeTheme(){
    $('body').css('background-color', color[i]);
    $('h1').css('color', color[j]);
    if(i==0){
        i++;
        j--;
    }
    else{
        i--;
        j++;
    }
}

$('#toggle-label').on('click', changeTheme);



// console.log('Hey');
// var color=['black', 'white'];
// var i=0, j=1;

// function changeTheme(){
// 	document.body.style.backgroundColor=color[i];
// 	var text=document.getElementById('text');
// 	text.style.color=color[j];
// 	if(color[i]=='black'){
// 		i++;
// 		j--;
// 	}
// 	else{
// 		i--;
// 		j++;
// 	}
// }

// var toggle=document.getElementById('toggle-label');
// toggle.addEventListener('click', changeTheme);