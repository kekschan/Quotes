package com.kekschan.server.data;

import lombok.Getter;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
public class QuoteData{
    private  String text;
    private  String authorId;
    private  Date date;
    private  Long scoreLikes;
}