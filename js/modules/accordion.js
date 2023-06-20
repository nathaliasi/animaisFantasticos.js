export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  //adc os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }
  //inicia função
  init() {
    if (this.accordionList.length) {
      //ativa primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
