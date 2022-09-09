const boxItems = document.querySelectorAll('.box-item');
const detailBox = document.querySelector('.detail-box');

boxItems.forEach((element) => {
  element.addEventListener('click', () => {
    detailBox.classList.remove('hide-detail-box');
    detailBox.classList.add('show-detail-box');

    const detailItem = document.getElementById(`detail-${element.id}`);
    detailItem.classList.remove('hide-detail-item');
    detailItem.classList.add('show-detail-item');
  });
});

detailBox.addEventListener('click', () => {
  const detailItems = document.querySelectorAll('.detail-box-item');
  detailItems.forEach((element) => {
    element.classList.remove('show-detail-item');
    element.classList.add('hide-detail-item');
  });

  detailBox.classList.remove('show-detail-box');
  detailBox.classList.add('hide-detail-box');
});
