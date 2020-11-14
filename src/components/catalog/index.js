import Catalog from "@/components/catalog/Catalog";
import cartService from "@/components/catalog/CartService";
import ModalService from "@/components/catalog/ModalService";

export default () => {
  const catalogBox = document.querySelector("[data-catalog]");

  if (!catalogBox) return;

  const modalService = new ModalService();

  const catalog = new Catalog("[data-catalog]", cartService, modalService);
  catalog.render();

  const slider = new Catalog(
    "[data-popular-slider]",
    cartService,
    modalService
  );
  slider.renderSlider();

  new Catalog("[data-modal-content]", cartService, null);
};
