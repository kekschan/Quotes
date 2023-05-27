package com.kekschan.server.config;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import com.kekschan.server.data.QuoteData;
import com.kekschan.server.model.Quote;
import com.kekschan.server.service.quotes.QuotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class MyCommandLineRunner implements CommandLineRunner {

    private final String QUOTES_JSON = "/data/quotes.json";

    @Autowired
    private QuotesService service;

    @Override
    public void run(String... args) throws Exception {
        if (service.findAll().size() == 0) {
            try {
                TypeReference<List<QuoteData>> typeReference = new TypeReference<>() {
                };
                InputStream inputStream = TypeReference.class.getResourceAsStream(QUOTES_JSON);
                List<QuoteData> quotes = new ObjectMapper().readValue(inputStream, typeReference);
                if (quotes != null && !quotes.isEmpty()) {
                    List<Quote> quoteList = new ArrayList<>();
                    quotes.forEach(quote -> quoteList.add(new Quote(quote.getText(), quote.getAuthorId(),
                            quote.getDate(), quote.getScoreLikes())));
                    List<Quote> savedQuotesList = service.saveAll(quoteList);
                    System.out.println(savedQuotesList.size());
                }
            } catch (Exception ex) {
                System.out.println("Не удалось сохранить цитаты " + ex.getMessage());
            }
        }
    }

}
