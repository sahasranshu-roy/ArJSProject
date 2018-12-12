var fourthFloor = document.querySelector('.meeting-4-rooms');
var fifthFloor = document.querySelector('.meeting-5-rooms');

function toggle(floor) {
    if (floor == 4) {
        fifthFloor.style.display = 'none';
        fourthFloor.style.display = 'initial';
    }
    else {
        fourthFloor.style.display = 'none';
        fifthFloor.style.display = 'initial';
    }

}

function toogleMenu() {
    body.querySelector('.ui-panel').style.display = 'initial';
    body.querySelector('.ui-menu').style.display = 'none';
}


