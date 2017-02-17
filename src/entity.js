var Transform = require("./transform").Transform;
var Rigidbody = require("./rigidbody").Rigidbody;
var Collider = require("./collider").Collider;

exports.Entity = function (main, name, position) {
    this.main = main;
    this.name = name;
    this.transform = new Transform(this, position);
    this.transform.position = position;
    this.rigidbody = new Rigidbody(this);
    this.collider = new Collider(this, 0, 0, 10, 10);
    this.mesh = new Mesh(this);
    this.meshRenderer = new MeshRenderer(this);
};

exports.Entity.prototype.start = function () {
    this.rigidbody.enablePhysics();
};

exports.Entity.prototype.update = function () {
    this.rigidbody.updatePosition();
    this.meshRenderer.render();
};
