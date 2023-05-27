package com.kekschan.server.resource.quotes;

import com.kekschan.server.model.Quote;
import com.kekschan.server.resource.IResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public interface QuoteResource extends IResource<Quote> {

    //ссылка на 10 лучших цитат
    @GetMapping("/top")
    ResponseEntity<List<Quote>> RequestTopQuotes();
}
