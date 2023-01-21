class Rating {
  constructor(dom) {
    dom.innerHTML = '<div style="width: 172px; height: 24px;"></div>';
    this.div = dom.querySelector('div');
    for(var i = 0; i < 5; i++)
      this.div.innerHTML += `<div data-value="${i+1}">`;
    this.render();
  }

  change(e) {
    let value = e.target.dataset.value;
    value && (this.svg.parentNode.dataset.value = value);
    this.render();
  }

  render() {
    this.div.querySelectorAll('div').forEach(star => {
      let on = +this.div.parentNode.dataset.value >= +star.dataset.value;
      star.classList.toggle('active', on);
    });
  }
}

document.querySelectorAll('.rating').forEach(dom => new Rating(dom));

const langue = document?.querySelector('.product-list__langue');
const langueRu = document.querySelector('.langue-ru');
const langueEn = document.querySelector('.langue-en');

langue.addEventListener('click', () => {
  if(langueRu.classList.contains('active')){
    langueRu.classList.remove('active');
    langueEn.classList.add('active');
  } else {
    langueRu.classList.add('active');
    langueEn.classList.remove('active');
  }
});