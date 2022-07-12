import Stack from "./Stack";

class Tower {
  constructor() {    
    this.disks = new Stack();
  }
  add(disk) {
    this.disks.push(disk);
    this.size++; //antes aparecia como length
    return this;   
  }

moveTopTo(destination) {
  if (
    destination.disks.top === null ||
    this.disks.top.value < destination.disks.top.value
  ) {
    destination.disks.push(this.disks.top.value);
    destination.size++;
    this.size--;
    this.disks.pop();
    return true;
  }
}

  moveDisks(disks, towerDestination, towerAux) {
    if (disks === 0) {
      return true;
    }
    if (disks === 1) {
      this.moveTopTo(towerDestination);
    }
    if (disks >= 2) {
      this.moveDisks(disks - 1, towerAux, towerDestination);
      this.moveTopTo(towerDestination);
      towerAux.moveDisks(disks - 1, towerDestination, this);
    }
    return true;
  }  
}

export default Tower;