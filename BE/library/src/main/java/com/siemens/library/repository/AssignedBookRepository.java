package com.siemens.library.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.siemens.library.pojo.BookAssignment;

public interface AssignedBookRepository extends JpaRepository<BookAssignment, Long>{

	public List<BookAssignment> findAllByBookId(Long bookId); 
}
