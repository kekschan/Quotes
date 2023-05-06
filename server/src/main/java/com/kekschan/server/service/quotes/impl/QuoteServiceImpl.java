package com.kekschan.server.service.quotes.impl;

import com.kekschan.server.model.Quote;
import com.kekschan.server.repository.QuoteRepository;
import com.kekschan.server.service.quotes.QuotesService;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class QuoteServiceImpl implements QuotesService {

    @Autowired
    private QuoteRepository quoteRepository;

    //выборка 10 лучших цитат по количеству лайков
    @Override
    public List<Quote> findTop10QuotesByScoreLikes() {
        List<Quote> allQuotes = quoteRepository.findAllByOrderByScoreLikesDesc();
        return allQuotes.stream().limit(10).collect(Collectors.toList());
    }

    @Override
    public Collection<Quote> findAll() {
        return quoteRepository.findAll();
    }

    @Override
    public Optional<Quote> findById(UUID id) {
        return quoteRepository.findById(id);
    }

    @Override
    public Quote saveOrUpdate(Quote quote) {
        return quoteRepository.saveAndFlush(quote);
    }

    @Override
    public List<Quote> saveAll(List<Quote> quotes) {
        return quoteRepository.saveAll(quotes);
    }

    @Override
    public String deleteById(UUID id) {
        JSONObject jsonObject = new JSONObject();
        try {
            quoteRepository.deleteById(id);
            jsonObject.put("message", "Цитата успешно удалена");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jsonObject.toString();
    }
}
