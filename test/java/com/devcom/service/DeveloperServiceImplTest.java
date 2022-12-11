package com.devcom.service;

import static org.junit.Assert.assertEquals;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.devcom.entity.Developer;
import com.devcom.exception.UserNotFoundException;
import com.devcom.repository.DeveloperRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
class DeveloperServiceImplTest {

	@Mock
	private DeveloperRepository developerRepository;
	
	@InjectMocks
	private DeveloperServiceImpl developerServiceImpl;
	Developer developer = new Developer(1,"name","name","name",new Date());

	@Test
	void testAddDeveloper() {
		Developer developer = new Developer("name", "name", "name");

		when(developerRepository.save(developer)).thenReturn(developer);
		assertEquals(developer, developerRepository.save(developer));

	}

	@Test
	void testGetDeveloper() {
		Developer developer = new Developer("name", "name", "name");
		Optional<Developer> devOptional = Optional.of(developer);
		when(developerRepository.findById(1)).thenReturn(devOptional);
		assertThat(developerServiceImpl.getDeveloper(1)).isPresent();
	}
	
	@Test
	void testGetAllDevelopers() {
		
		
		List<Developer> list= new ArrayList<Developer>();
		Developer developer= new Developer(1,"name","name","name",new Date());
		Developer developer1= new Developer(2,"name1","nam1e","name1",new Date());
		list.add(developer);
		list.add(developer1);
		when(developerRepository.findAll()).thenReturn(list);
		assertThat(list).hasSizeGreaterThan(0);
	}
	
	@Test
	void testAddDeveloperN() { 
		when(developerRepository.save(developer)).thenReturn(developer);
		try {
			assertEquals(developer,developerRepository.save(developer));
			
		}
		catch(UserNotFoundException e) {
			assertEquals("User doesn't exist",e.getMessage());
		}
		
	}

}
