window.addEventListener('DOMContentLoaded', function() {
   
   const card = document.getElementById('card');
   const setBtn = document.getElementById('setBtn');
   const chooseBtn = document.getElementById('chooseBtn');
   const roulette = document.getElementById('roulette');
   const historyList = document.getElementById('history-list');
   const resetBtn = document.getElementById('resetBtn');
   
   let countClick = 0;
   let cardArr = [];
   let resultArr = [];
   setBtn.disabled = false;
   chooseBtn.disabled = false;

   setBtn.addEventListener('click', function() {
      const select1 = new SelectNumber(cardArr);
      const select2 = new SelectNumber(resultArr);
      console.log(cardArr);
      console.log(resultArr);

      for (let i = 0; i < 25; i++) {
         const cell = document.createElement('div');
         const cellInner = document.createElement('div');
         cell.classList.add('cell');
         cellInner.classList.add('cell-inner');
      
         cellInner.textContent = cardArr[i];
         cell.setAttribute('name', cardArr[i]);
      
         cell.appendChild(cellInner);
         card.appendChild(cell);
      };

      setBtn.disabled = true;
   });
   
   chooseBtn.addEventListener('click', function() {
      if(countClick === 25) {
         chooseBtn.disabled = true;
         alert('FINISH!!!!');
      } else {
         const result = resultArr[countClick];
         roulette.textContent = result;
         
         const li = document.createElement('li');
         li.textContent = result;
         historyList.appendChild(li); 

         const resultCell = document.querySelector(`.cell[name = "${result}"]`);
         if(resultCell !== null) {
            resultCell.classList.add('opened');
         }
         
         countClick++;
      }  
   }); 

   resetBtn.addEventListener('click', function() {
      window.location.reload();
   });
});
