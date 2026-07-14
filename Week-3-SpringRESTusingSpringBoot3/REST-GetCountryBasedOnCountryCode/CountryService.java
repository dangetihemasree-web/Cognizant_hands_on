package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CountryService {

    public Country getCountry(String code) {
        // 1. Load the spring configuration XML file
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        // 2. Retrieve the list of countries from the XML
        // (Spring automatically collects all bean definitions of type Country into a list if requested,
        // or we can grab the bean container. Since your country.xml currently has the 'country' bean:)
        ArrayList<Country> countries = new ArrayList<>();
        countries.add((Country) context.getBean("country"));

        // 3. Use a case-insensitive lambda expression to find the matching country
        return countries.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null); // Returns null if no match is found
    }
}