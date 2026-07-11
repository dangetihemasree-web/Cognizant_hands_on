package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        // Load the Spring Application Context XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the managed BookService bean from the Spring container
        BookService bookService = (BookService) context.getBean("bookService");

        // Execute business logic to test the configuration
        bookService.manageBook();
    }
}