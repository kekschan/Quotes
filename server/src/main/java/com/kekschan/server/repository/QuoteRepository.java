package com.kekschan.server.repository;

import com.kekschan.server.model.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface QuoteRepository extends JpaRepository<Quote, UUID> {

    //отбираем по-убыванию список всех цитат по количеству лайков
    List<Quote> findAllByOrderByScoreLikesDesc();

    //ВТОРОСТИПЕННОЕ
    //

}