const select = document.querySelector('.pagination_select');

// console.log(document.body.clientHeight );
// console.log(document.body.scrollHeight);

// window.addEventListener('scroll', function() {
//   console.log('Высона экрана: ' + document.body.clientHeight + 'px');
//   console.log('--- экрана: ' + document.body.scrollHeight + 'px');
// });

window.pointerdown = function() {
  var scrolled = window.pageYOffset;
  console.log( 'Позиция скрола: '+scrolled  );
};

// setInterval(() => {
  
//     console.log('Высона экрана: ' + document.body.clientHeight + 'px');
//     console.log('--- экрана: ' + document.body.scrollHeight + 'px');
//     console.log(window.pageXOffset);
// },1000);

// function resize()
// {
// console.log('Высона экрана: ' + document.body.clientHeight + 'px');
// console.log('--- экрана: ' + document.body.scrollHeight + 'px');
// }
// window.onresize = resize;

const paginationSelect = {
  select,
  checkSelect(location) {
    if (condition) {
      
    }
  }
}