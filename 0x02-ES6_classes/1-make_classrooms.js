import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);
  const newList = [class1, class2, class3];
  return (newList);
}
/*
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const sizes = [19, 20, 34];

  return sizes.map((size) => new ClassRoom(size));
}
*/