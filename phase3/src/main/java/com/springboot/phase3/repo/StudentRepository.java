package com.springboot.phase3.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.phase3.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

	

	Optional<Student> findById(Long id);

}
