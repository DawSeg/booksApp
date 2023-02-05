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
  const render = function () {
      
    for (const book of dataSource.books) {
      const generatedHTML = templates.books(book);  
      const generateDOMElement = utils.createDOMFromHTML(generatedHTML);
      const booksContainer = document.querySelector(
        select.containerOf.booksList
      );
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
        
      }
    });
  };

  const filters = [];
  const checkbox = document.querySelector(select.containerOf.filters);
    
  render();
  initActions();
  
  
}
