package com.kekschan.server.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import org.springframework.hateoas.RepresentationModel;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Quote extends RepresentationModel<Quote> {
    @Id
    @GeneratedValue
    private UUID id;

    private String text;
    //после создания spring security создать model Author
    private String authorId;
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    //при создании новой цитаты автоматически ставится ноль
    private Long scoreLikes;

    @JsonCreator
    public Quote(@JsonProperty("id") UUID id, @JsonProperty("text") String text,
                 @JsonProperty("authorId") String authorId, @JsonProperty("date") String dateString,
                 @JsonProperty("scoreLikes") Long scoreLikes) throws ParseException {
        this.id = id;
        this.text = text;
        this.authorId = authorId;
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        this.date = format.parse(dateString);
        this.scoreLikes = scoreLikes;
    }

    public Quote(String text, String authorId, Date date, Long scoreLikes) {
        this.text = text;
        this.authorId = authorId;
        this.date = date;
        this.scoreLikes = scoreLikes;
    }
}


