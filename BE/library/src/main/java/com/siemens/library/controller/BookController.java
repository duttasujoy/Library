package com.siemens.library.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.siemens.library.pojo.Book;
import com.siemens.library.pojo.BookAssignment;
import com.siemens.library.repository.AssignedBookRepository;
import com.siemens.library.repository.BookRepository;

@RestController
@CrossOrigin(origins="*")
public class BookController {
	@Autowired
	private BookRepository bookRepository;
	@Autowired
	private AssignedBookRepository assignedBookRepository;
	@Transactional
	@PostMapping(path="/addBook",produces="application/json",consumes="application/json")
	public Map<String,String> addBooks(@RequestBody Book book){
		System.out.println(book);
		bookRepository.save(book);
		Map<String,String> result = new HashMap<>();
		result.put("message", "Book Added Successfully");
		return result;
	}

	@GetMapping(path="/findAll",produces="application/json")
	public List<Book> findAllBooks(){
		return bookRepository.findAll();
	}
	
	@GetMapping(path="/findHistory/{bookId}",produces="application/json")
	public List<BookAssignment> findHistory(@PathVariable Long bookId){
		return assignedBookRepository.findAllByBookId(bookId);
	}
	
	@GetMapping(path="/findById/{id}",produces="application/json")
	public Book findBooksById(@PathVariable long id){
		return bookRepository.findById(id).get();
	}

	@GetMapping(path="/delete/{id}",produces="application/json")
	public Map<String,String> deleteById(@PathVariable long id){
		bookRepository.deleteById(id);
		Map<String,String> result = new HashMap<>();
		result.put("message", "Deleted Successfully");
		return result;
	}
	@Transactional
	@PostMapping(path="/assign",produces="application/json",consumes="application/json")
	public Map<String,String> assignBook(@RequestBody BookAssignment book){
		System.out.println(book);
		assignedBookRepository.save(book);
		Map<String,String> result = new HashMap<>();
		result.put("message", "Book Assigned Successfully");
		return result;
	}
}
