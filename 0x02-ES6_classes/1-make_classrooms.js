import { ClassRoom } from './0-classroom.js';

function initializeRooms() {
  const sizes = [19, 20, 34];

  return sizes.map((size) => new ClassRoom(size));
}

const classrooms = initializeRooms();
console.log(classrooms);

