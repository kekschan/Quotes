package com.kekschan.server.resource.quotes.impl;

import com.kekschan.server.exception.ApplicationException;
import com.kekschan.server.exception.QuoteNotFoundException;
import com.kekschan.server.model.Quote;
import com.kekschan.server.resource.quotes.QuoteResource;
import com.kekschan.server.service.quotes.QuotesService;
import lombok.extern.slf4j.Slf4j;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Field;
import java.util.*;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@RestController
@RequestMapping("/quotes")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class QuoteResourceImpl implements QuoteResource {

    @Autowired
    private QuotesService quotesService;

    @Override
    public ResponseEntity<List<Quote>> RequestTopQuotes() {
        List<Quote> requestTopQuotes =  quotesService.findTop10QuotesByScoreLikes();
        return new ResponseEntity<>(requestTopQuotes, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Collection<Quote>> findAll() {
        log.info("QuoteResourceImpl - findAll");
        Collection<Quote> quotes = quotesService.findAll();
        List<Quote> response = new ArrayList<>();
        quotes.forEach(quote -> {
            quote.add(linkTo(methodOn(QuoteResourceImpl.class).findById(quote.getId())).withSelfRel());
            response.add(quote);
        });
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Quote> findById(UUID id) {
        log.info("QuoteResourceImpl - findById");
        Quote quoteObject = null;
        Optional<Quote> quote = quotesService.findById(id);
        if (quote.isEmpty()) {
            throw new QuoteNotFoundException("Цитата не найдена");
        } else {
            quoteObject = quote.get();
            quoteObject.add(linkTo(methodOn(QuoteResourceImpl.class).findAll()).withSelfRel());
        }
        return new ResponseEntity<>(quoteObject, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Quote> save(Quote quote) {
        log.info("QuoteResourceImpl - save");
        if (quote.getId() != null) {
            throw new ApplicationException("Цитата с таким id уже существует");
        } else {
            Quote savedQuote = quotesService.saveOrUpdate(quote);
            savedQuote.add(linkTo(methodOn(QuoteResourceImpl.class).findById(savedQuote.getId())).withSelfRel());
            savedQuote.add(linkTo(methodOn(QuoteResourceImpl.class).findAll()).withSelfRel());
            return new ResponseEntity<>(savedQuote, HttpStatus.CREATED);
        }
    }

    @Override
    public ResponseEntity<Quote> update(Quote quote) {
        log.info("QuoteResourceImpl - update");
        if (quote.getId() == null) {
            throw new ApplicationException("Цитата с таким id не найдена");
        } else {
            Quote updatedQuote = quotesService.saveOrUpdate(quote);
            updatedQuote.add(linkTo(methodOn(QuoteResourceImpl.class).findById(updatedQuote.getId())).withSelfRel());
            updatedQuote.add(linkTo(methodOn(QuoteResourceImpl.class).findAll()).withSelfRel());
            return new ResponseEntity<>(updatedQuote, HttpStatus.OK);
        }
    }

    @Override
    public ResponseEntity<Quote> patch(UUID id, Map<Object, Object> fields) {
        Optional<Quote> quote = quotesService.findById(id);
        if (quote.isPresent()) {
            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(Quote.class, (String) key);
                field.setAccessible(true);
                ReflectionUtils.setField(field, quote.get(), value);
            });
            Quote updatedQuote = quotesService.saveOrUpdate(quote.get());
            updatedQuote.add(linkTo(methodOn(QuoteResourceImpl.class).findById(updatedQuote.getId())).withSelfRel());
            updatedQuote.add(linkTo(methodOn(QuoteResourceImpl.class).findAll()).withSelfRel());
            return new ResponseEntity<>(updatedQuote, HttpStatus.OK);
        }
        return null;
    }

    @Override
    public ResponseEntity<String> deleteById(UUID id) {
        log.info("QuoteResourceImpl - deleteById");
        Optional<Quote> quote = quotesService.findById(id);
        if (quote.isEmpty()) {
            throw new QuoteNotFoundException("Цитата не найдена");
        }
        return new ResponseEntity<>(quotesService.deleteById(id), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> invalid() {
        log.info("QuoteResourceImpl - invalid");
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("message", "чего-то не хватает, пожалуйста проверьте все перед отправкой");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(jsonObject.toString(), HttpStatus.OK);
    }


}
