package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter method for Spring XML Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void manageBook() {
        System.out.println("BookService is managing the book records...");
        bookRepository.saveBook();
    }
}
