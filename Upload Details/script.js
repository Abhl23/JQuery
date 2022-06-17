function renderData(data){
    let div=`<div class="items">Roll no - <span class="highlight">${data.rollNo}</span>, <span class="highlight">${data.name}</span> has scored <span class="highlight">${data.marks}</span> marks</div>`;
    $('#items').append(div);
    return;
}

function addDetails(rollNo, name, marks){
    console.log('button clicked');
    let data={
        rollNo : rollNo,
        name : name,
        marks : marks
    };
    $('#rollno').val('');
    $('#name').val('');
    $('#marks').val('');
    console.log(data);
    renderData(data);
    return;
}

$('button').click(function(event){
    event.preventDefault();
    let rollNo=$('#rollno').val();
    let name=$('#name').val();
    let marks=$('#marks').val();
    if(rollNo=='' || name=='' || marks=='')
        window.alert('Please fill all the fields!');
    else
        addDetails(rollNo, name, marks);
});