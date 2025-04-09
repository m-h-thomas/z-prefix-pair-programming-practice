class GalvanizeSet {
  constructor(items = []) {
    this.items = items;
  }

  getSize(){
    return this.items.length;
  }

  insert(item){
    if (!this.items.includes(item)) {
      this.items.push(item);
    }
  }

  contains(item){
    for(let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        return true;
      }
    }
    return false;
  }

  delete(item){
    for(let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item){
        this.items.splice(i, 1)[0]
        return true;
      }
    }
    return false
  }

}

module.exports = GalvanizeSet