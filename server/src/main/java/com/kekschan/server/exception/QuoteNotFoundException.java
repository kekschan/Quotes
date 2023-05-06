package com.kekschan.server.exception;

public class QuoteNotFoundException extends RuntimeException{
    public QuoteNotFoundException(String message) {
        super(message);
    }
}
