{
  'use strict';
    
  const select = {
    templateOf: {
      book: '#template-book',
    },
    containerOf: {
      booksList: '.books-list',
      filters: '.filters',
    },
    
    book: {
      image: '.books-list .book__image',
    },
  };
    
  const classes = {
    favorite: 'favorite',
  };
    
  const templates = {
    books: Handlebars.compile(
      document.querySelector(select.templateOf.book).innerHTML
    ),
  };

  /* 
 const render = function () {
      
    for (const book of dataSource.books) {
      //const ratingBgc = determineRatingBgc(book.rating);
      //const ratingWidth = ratingBgc * 10;
      const generatedHTML = templates.books(book);  
      const generateDOMElement = utils.createDOMFromHTML(generatedHTML);
      const booksContainer = document.querySelector(select.containerOf.booksList);
      booksContainer.appendChild(generateDOMElement);
    }
  };
    
  const favoriteBooks = [];
    
  const initActions = function(){

    const booksList = document.querySelector(select.containerOf.booksList);
    booksList.addEventListener('dblclick', function (event) {

      event.preventDefault();
      const clicked = event.target;
      if (clicked.offsetParent.classList.contains('book__image')) {
        const bookId = clicked.offsetParent.getAttribute('data-id');
        if (!favoriteBooks.includes(bookId)) {
          clicked.offsetParent.classList.add(classes.favorite);
          favoriteBooks.push(bookId);
        } else {
          clicked.offsetParent.classList.remove(classes.favorite);
          const Index = favoriteBooks.indexOf(bookId);
          favoriteBooks.splice(Index, 1);
        }
      }
    });

    checkbox.addEventListener('click', function (event) {
      const form = event.target;
      if (
        form.tagName == 'INPUT' && form.name == 'filter' && form.type == 'checkbox'
      ) {
        const formValue = form.value;
        console.log(formValue);
        if (form.checked == true) {
          filters.push(formValue);
        } else {
          const checkedValue = filters.indexOf(formValue);
          filters.splice(checkedValue, 1);
        }
        console.log('filters:', filters);
        //https://www.diffchecker.com/smA6avho/
      }
      filterBooks();
    });
  };

  const filterBooks = function(){
    for(let book of dataSource.books){
      let shouldBeHidden = false;  
      const Image = document.querySelector('.book__image[data-id="' + book.id + '"]');
      for (let filter of filters){
        if(!book.details[filter]){
          shouldBeHidden = true;
          break;
        }    
      }
      if (shouldBeHidden) {
        //document.querySelector('.book__image[data-id="' + book.id + '"]').classList.add('hidden');
        Image.classList.add('hidden');
      } else {
        Image.classList.remove('hidden');
      }
    }
  };

  const filters = [];
  const checkbox = document.querySelector(select.containerOf.filters);
  console.log(filters);

  const determineRatingBgc = function(rating){
    let ratingBgc = '';
    if (rating < 6) {
      ratingBgc = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%';
    } else if (rating > 6 && rating <= 8) {
      ratingBgc = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%';
    } else if (rating > 8 && rating <= 9) {
      ratingBgc = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%';
    } else if (rating > 9) {
      ratingBgc = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%';
    }
    return ratingBgc;
  };
  render();
  initActions();
  determineRatingBgc();
  
} 
  */


  class BooksList {
    constructor() {
      const thisBooksList = this;

      thisBooksList.favoriteBooks = [];
      thisBooksList.filters = [];

      thisBooksList.initData();
      thisBooksList.render();
      thisBooksList.getElements();
      
      thisBooksList.initActions();
      thisBooksList.determineRatingBgc();
    }

    initData() {
    //const thisBooksList = this;

      this.data = dataSource.books;
    }

    render() {
      
      for (const book of dataSource.books) {
        
        //const ratingBgc = determineRatingBgc(book.rating);
        //const ratingWidth = ratingBgc * 10;
        const generatedHTML = templates.books(book);  
        const generateDOMElement = utils.createDOMFromHTML(generatedHTML);
        const booksContainer = document.querySelector(select.containerOf.booksList);
        booksContainer.appendChild(generateDOMElement);
      }
    }

    getElements() {
      const thisBooksList = this;
    
      
      thisBooksList.booksList = document.querySelector(select.containerOf.booksList);
      thisBooksList.checkbox = document.querySelector(select.containerOf.filters);
      console.log(thisBooksList.filters);
    }

    initActions() {
      const thisBooksList = this;

    
      thisBooksList.booksList.addEventListener('dblclick', function (event) {

        event.preventDefault();
        const clicked = event.target;
        if (clicked.offsetParent.classList.contains('book__image')) {
          const bookId = clicked.offsetParent.getAttribute('data-id');
          if (!thisBooksList.favoriteBooks.includes(bookId)) {
            clicked.offsetParent.classList.add(classes.favorite);
            thisBooksList.favoriteBooks.push(bookId);
          } else {
            clicked.offsetParent.classList.remove(classes.favorite);
            const Index = thisBooksList.favoriteBooks.indexOf(bookId);
            thisBooksList.favoriteBooks.splice(Index, 1);
          }
        }
      });

      thisBooksList.checkbox.addEventListener('click', function (event) {
        const form = event.target;
        if (
          form.tagName == 'INPUT' && form.name == 'filter' && form.type == 'checkbox'
        ) {
          const formValue = form.value;
          console.log(formValue);
          if (form.checked == true) {
            thisBooksList.filters.push(formValue);
          } else {
            const checkedValue = thisBooksList.filters.indexOf(formValue);
            thisBooksList.filters.splice(checkedValue, 1);
          }
          console.log('filters:', thisBooksList.filters);
        //https://www.diffchecker.com/smA6avho/
        }
        thisBooksList.filterBooks();
      });
    }

    filterBooks() {
      const thisBooksList = this;

      for(let book of dataSource.books){
        let shouldBeHidden = false;  
        thisBooksList.image = document.querySelector('.book__image[data-id="' + book.id + '"]');
        for (let filter of thisBooksList.filters){
          if(!book.details[filter]){
            shouldBeHidden = true;
            break;
          }    
        }
        if (shouldBeHidden) {
        //document.querySelector('.book__image[data-id="' + book.id + '"]').classList.add('hidden');
          thisBooksList.Image.classList.add('hidden');
        } else {
          thisBooksList.Image.classList.remove('hidden');
        }
      }
    }

    determineRatingBgc(rating) {
      const thisBookList = this;
    
      thisBookList.ratingBgc = '';
      if (rating < 6) {
        thisBookList.ratingBgc = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%';
      } else if (rating > 6 && rating <= 8) {
        thisBookList.ratingBgc = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%';
      } else if (rating > 8 && rating <= 9) {
        thisBookList.ratingBgc = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%';
      } else if (rating > 9) {
        thisBookList.ratingBgc = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%';
      }
      return thisBookList.ratingBgc;
    }
  }
  const app = new BooksList();
}