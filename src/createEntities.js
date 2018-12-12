// var scene = document.createElement('a-scene');
// var assets = document.createElement('a-assets');
var scene = document.querySelector('a-scene');
var entity = document.createElement('a-entity');
var text = document.createElement('a-entity');
var camera = document.createElement('a-camera');
// var assetItem = document.createElement('a-asset-item');
var animation = document.createElement('a-animation');

var visible = document.createAttribute('visible');
visible.value = 'false';

var gltfModel = document.createAttribute("gltf-model");
// entity.setAttributeNode(gltfModel);

var geometry = document.createAttribute("text-geometry");
text.setAttributeNode(geometry);

var textAttr = document.createAttribute('text');
text.setAttributeNode(textAttr);

var material = document.createAttribute("material");
text.setAttributeNode(material);

var gpsCameraDebug = document.createAttribute("gps-camera-debug");

var position = document.createAttribute("position");
entity.setAttributeNode(position);

var rotation = document.createAttribute("rotation");
entity.setAttributeNode(rotation);

var scale = document.createAttribute("scale");
entity.setAttributeNode(scale);

var embedded = document.createAttribute("embedded");
scene.setAttributeNode(embedded);

var arJs = document.createAttribute("arjs");
arJs.value = 'sourceType: webcam';
scene.setAttributeNode(arJs);

var attribute = document.createAttribute("attribute");
animation.setAttributeNode(attribute);

var dur = document.createAttribute('dur');
animation.setAttributeNode(dur);

var from = document.createAttribute('from');
animation.setAttributeNode(from);

var to = document.createAttribute("to");
animation.setAttributeNode(to);

var begin = document.createAttribute("begin");
animation.setAttributeNode(begin);


scene.appendChild(entity);
scene.appendChild(text);
scene.appendChild(camera);


