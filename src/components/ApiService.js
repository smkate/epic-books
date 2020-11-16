class ApiService {
  constructor() {
    // this.findBook(id);
  }

  findBook(id) {
    const index = books.findIndex((item) => {
      return item.uri === id;
    });

    return books[index];
  }

  getBookStore(id) {
    const book = this.findBook(id);

    if (book) {
      return book.store;
    }

    return 0;
  }

  checkPromo(promo) {
    if (promo === "PROMOCODE") {
      return {
        status: 'ok',
      };
    } else {
      return {
        status: 'invalid',
      };
    }
  }
}

const apiService = new ApiService();

export default apiService;
