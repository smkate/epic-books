class ApiService {
    constructor() {
        
    }

    findBook(id) {
      const index = books.findIndex((item) => {
        return item.uri === id;
      });
  
      return books[index];
    }
}

export default ApiService;