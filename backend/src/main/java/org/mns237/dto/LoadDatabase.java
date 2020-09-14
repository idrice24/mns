package org.mns237.dto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframwork.boot.CommandLineRunner;
import org.springframwork.context.annotation.Bean;
import org.springframwork.context.annotation.Configuration;

@Configuration
class LoadDatabase{
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

	@BeanCommandLineRunner initDatabase(EmployeeRepository repository){
		return args ->{
			log.info("Preloading " + repository.save(new Employee("Idrice24", " tsafouet")));
			log.info("Preloading " + repository.save(new Employee("Idrice24", " Chanelle")));
			log.info("Preloading " + repository.save(new Employee("Idrice24", " Fransine")));
		};
	}
}
