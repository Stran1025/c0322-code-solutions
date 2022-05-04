let count = 3;
const countDown = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(countDown);
  }
}, 1000);
