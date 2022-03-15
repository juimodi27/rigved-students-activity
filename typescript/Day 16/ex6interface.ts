interface Point {
    x : number;
    y : number;
}
interface Point3D extends Point {
    z: number;
}
// coord is an object
let coord: Point = {x: 10, y : 20}
let axis3d : Point3D = {x: 10, y: 20, z : 30};

function printCoord(pt : Point) {
    document.write(`<p>x = ${pt.x}, y = ${pt.y}</p>`)
}
function print3DCoord(pt3: Point3D) {
    document.write(`<p>x = ${pt3.x}, y = ${pt3.y}, z = ${pt3.z}</p>`)
}
printCoord(coord);
print3DCoord(axis3d);