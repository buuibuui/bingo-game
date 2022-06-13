class SelectNumber {
   constructor(arrBox) {
      this.arrBox = arrBox;
      this.arr = [];
      this._setNumber();
      this._assignNumber(arrBox);
   }
   _setNumber() {
      for(let i = 1; i <= 75; i++) {
         this.arr.push(i);
      }
   }
   _assignNumber() {
      for(let j = 0, len = this.arr.length; j < 25; j++, len--) {
         let rdmNumber = Math.floor(Math.random() * len);
         this.arrBox.push(this.arr[rdmNumber]);
         this.arr[rdmNumber] = this.arr[len - 1];
      }
   }
}