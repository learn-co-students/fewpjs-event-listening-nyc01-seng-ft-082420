

function addingEventListener() {
    input = document.getElementById('input');
    input.addEventListener('mouseover', function(event){
        alert('you hovered over the input tag!')
    });
    input.setAttribute("style", "background-color:green;")
};

addingEventListener();
