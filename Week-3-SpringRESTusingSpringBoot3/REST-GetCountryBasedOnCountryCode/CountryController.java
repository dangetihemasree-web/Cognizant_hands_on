package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    // Your previous exercise endpoint
    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public Country getCountryIndia() {
        return countryService.getCountry("IN");
    }

    // NEW ENDPOINT: Get country based on path variable country code
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable("code") String code) {
        return countryService.getCountry(code);
    }
}