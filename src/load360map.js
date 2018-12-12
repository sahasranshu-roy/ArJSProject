function create3Dview(floor) {
    clearScreen();
    if (floor == 4) {
        Object.keys(meetingRooms.fourth).forEach(room => {
            createandAnimate(meetingRooms.fourth[room]);
        });
    }
    removeContainer();
}

function clearScreen() {
    var entities = document.querySelectorAll('.location-entity');
    entities.forEach(entity => {
        scene.removeChild(entity);
    });

    var text = document.querySelector('.a-text');
    scene.removeChild(text);
}

function createandAnimate(room) {
    var newObjects = createEntity(room.position[room.position.length - 1], '3 3 3', room.name);
    var entity = newObjects.newEntity;
    var text = newObjects.newText;

    scene.appendChild(entity);
    scene.appendChild(text);
}

function createEntity(newPos, newScale, textValue) {
    var entity = document.createElement('a-entity');
    var gltfModel = document.createAttribute('gltf-model');
    gltfModel.value = 'url(./models/Drone/flying sacuer.gltf)';
    entity.setAttributeNode(gltfModel);

    var position = document.createAttribute('position');
    position.value = newPos;

    var scale = document.createAttribute('scale');
    scale.value = newScale;

    var text = document.createElement('a-text');

    var textPosition = document.createAttribute('position');
    textPosition.value = newPos;

    textScale = document.createAttribute('scale');
    textScale.value = '12 12 12';

    var textGeometry = document.createAttribute("geometry");
    textGeometry.value = 'primitive:plane';
    text.setAttributeNode(textGeometry);
    text.setAttribute('value', textValue);

    entity.setAttributeNode(position);
    entity.setAttributeNode(scale);
    entity.setAttribute('class', 'location-entity');

    text.setAttributeNode(textPosition);
    text.setAttributeNode(textScale);

    return {
        newEntity: entity,
        newText: text
    };
}