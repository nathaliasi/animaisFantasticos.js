export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    //bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  //cria a tooltip e adc os eventos de mousemove e mouseleave ao target
  onMouseOver(e) {
    //cria a tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(e.currentTarget);
    e.currentTarget.addEventListener('mousemove', this.onMouseMove);
    e.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }
  //remove a tooltip
  onMouseLeave() {
    this.tooltipBox.remove();
    this.element.removeEventListener('mouseleave', this.onMouseLeave);
    this.element.removeEventListener('mousemove', this.onMouseMove);
  }
  //move a tooltip com base nos movimentos
  onMouseMove(e) {
    this.tooltipBox.style.top = e.pageY + 20 + 'px';
    this.tooltipBox.style.left = e.pageX + 20 + 'px';
  }
  //cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  //adc os eventos de mouseover a cada tooltip
  addTooltipsEvents() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }
  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvents();
    }
    return this;
  }
}
