package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // This setter method is what Spring uses to inject the BookRepository dependency!
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void processBook(String bookName) {
        System.out.println("Service processing book: " + bookName);
        bookRepository.saveBook(bookName);
    }
}
