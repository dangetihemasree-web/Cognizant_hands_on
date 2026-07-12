package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load the Spring XML configuration file from resources
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the configured BookService bean (which now has BookRepository injected!)
        BookService bookService = (BookService) context.getBean("bookService");

        // Test the dependency injection flow
        bookService.processBook("Spring Framework Basics");
    }
}
