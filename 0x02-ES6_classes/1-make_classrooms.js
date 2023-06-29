import { ClassRoom } from './0-classroom.js';

export deefault function initializeRooms() {
  const sizes = [19, 20, 34];

  return sizes.map((size) => new ClassRoom(size));
}

