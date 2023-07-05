export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao Callback
    // para fzr referencia aoobjeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  //abre e fecha modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }
  //adc o evento de toggle ao modal
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal(e);
  }
  //fecha modal ao clicar lado de fora
  cliqueForaModal(e) {
    if (e.target === this.containerModal) {
      this.toggleModal(e);
    }
  }
  //adc os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
