var selectedRoom, selectedFloor;
var body = document.querySelector('body');
var meetingRooms = {
    fourth: {
        "41": {
            id: "41",
            checkpoints: 2,
            position: ["0 0 -50", "-15 0 -70"],
            rotation: ["0 40 0", "0 120 0"],
            name: "SPHINX"
        },
        "42": {
            id: "42",
            checkpoints: 1,
            position: ["0 0 -100"],
            rotation: ["0 40 0", "0 120 0"],
            name: "SANCHI STUPA"
        },
        "43": {
            id: "43",
            checkpoints: 1,
            position: ["-60 0 0"],
            rotation: ["0 40 0", "0 120 0"],
            name: "TAJ MAHAL"
        },
        "44": {
            id: "44",
            checkpoints: 1,
            position: ["-80 0 20"],
            rotation: ["0 40 0", "0 120 0"],
            name: "CHAR MINAR"
        },
        "45": {
            id: "45",
            checkpoints: 1,
            position: ["-80 0 30"],
            rotation: ["0 40 0", "0 120 0"],
            name: "QUTUB MINAR"
        },
        "46": {
            id: "46",
            checkpoints: 1,
            position: ["70 0 -60"],
            rotation: ["0 40 0", "0 120 0"],
            name: "LOTUS TEMPLE"
        }

    },
    fifth: {
        "51": {
            id: "51",
            checkpoints: 2,
            position: ["4 0 -30"],
            rotation: ["0 40 0", "0 120 0"],
            name: "Shaniwar Wada"
        }
    }
}

function navigateTo(meetingRoom) {
    selectedFloor = Math.trunc(meetingRoom / 10);
    if (selectedFloor == 4) {
        selectedRoom = meetingRooms.fourth["" + meetingRoom + ""];
    }
    else {
        selectedRoom = meetingRooms.fifth["" + meetingRoom + ""];
    }
    createAugmentedView();
}

function createAugmentedView() {
    clearLocationEntity();
    camera.setAttribute('id', 'camera');
    gltfModel.value = 'url(./models/Drone/flying sacuer.gltf)';
    entity.setAttributeNode(gltfModel);
    entity.setAttribute('id', 'entity-0');
    position.value = selectedRoom.position[selectedRoom.position.length - 1];
    scale.value = '3 3 3';
    rotation.value = "0 40 0"
    entity.setAttributeNode(position);
    entity.setAttributeNode(scale);
    entity.setAttribute('class', 'navigation-entity');
    //entity.setAttributeNode(rotation);

    textScale = document.createAttribute('scale');
    textScale.value = '32 32 32';
    text.setAttributeNode(textScale);

    // geometry.value = 'value: VAPORWAVE; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; size: 1.5; height: 0.5;';
    // material.value = 'color:pink; metalness:0.9; roughness: 0.05;';

    textAttr.value = 'value: ' + selectedRoom.name + ';';
    text.setAttributeNode(textAttr);

    textPosition = document.createAttribute('position');
    textPosition.value = selectedRoom.position[selectedRoom.position.length - 1];
    text.setAttributeNode(textPosition);
    text.setAttribute('value', selectedRoom.name);
    text.setAttributeNode(visible);
    text.setAttribute('class', 'a-text');

    addAnimations();
    removeContainer();

}

function clearLocationEntity() {
    var entity = document.querySelectorAll('.location-entity');
    var texts = document.querySelectorAll('.location-text');
    if (entity) {
        entity.forEach(z => {
            scene.removeChild(z);
        })
    }
    if (texts) {
        texts.forEach(z => {
            scene.removeChild(z);
        })
    }
}

function removeContainer() {
    body.querySelector('.ui-panel').style.display = 'none';
    body.querySelector('.ui-menu').style.display = 'block';
}

function addAnimations() {

    selectedRoom.position.forEach((element, i) => {
        var animation = document.createElement('a-animation');
        attribute.value = 'position';
        animation.setAttribute('attribute', 'position');
        animation.setAttribute('id', selectedRoom.position.length == 1 ? 'animation-last' : 'animation-' + i);
        animation.setAttribute('dur', '4000');
        animation.setAttribute('from', i == 0 ? '0 0 -10' : selectedRoom.position[i - 1]);
        animation.setAttribute('to', selectedRoom.position[i]);

        if (i != 0) {
            animation.setAttribute('begin', 'done-1');
        }
        entity.appendChild(animation);
    });
}