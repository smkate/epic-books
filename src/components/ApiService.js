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
}

const apiService = new ApiService()

export default apiService;
