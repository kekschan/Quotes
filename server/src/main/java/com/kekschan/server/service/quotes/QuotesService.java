package com.kekschan.server.service.quotes;

import com.kekschan.server.model.Quote;
import com.kekschan.server.service.IService;

import java.util.List;

public interface QuotesService extends IService<Quote> {
    public List<Quote> findTop10QuotesByScoreLikes();
}
