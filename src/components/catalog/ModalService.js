class ModalService {
  constructor() {
    this.modal = document.querySelector(".modal");
    this.isOpen = false;

    if (!this.modal) return;

    this.init();
  }

  init() {
    // слушаем
    // кнопку закрыть

    // escape
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  open(html) {
    if (!html && !html.length) return;

    this.isOpen = true;
    this.renderModal(html);
    document.querySelector('html').classList.add("js-modal-open");
    this.modal.classList.add("modal--open");
  }

  close() {
    this.isOpen = false;
    document.querySelector('html').classList.remove("js-modal-open");
    this.modal.classList.remove("modal--open");
  }

  renderModal(html) {
    const content = this.modal.querySelector('[data-modal-content]');
    content.innerHTML = html;
  }
}

export default ModalService