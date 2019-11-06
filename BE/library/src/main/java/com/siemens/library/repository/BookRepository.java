package com.siemens.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.siemens.library.pojo.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
