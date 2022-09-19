package com.devcom;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication(scanBasePackages = {"com.devcom.controller", "com.devcom.dto", "com.devcom.entity", "com.devcom.service"})
@EnableSwagger2
public class DevcomApplication {

	public static void main(String[] args) {
		SpringApplication.run(DevcomApplication.class, args);
	}
	
	@Bean
    public Docket swaggerConfiguration() {

		return new Docket(DocumentationType.SWAGGER_2).select().paths(PathSelectors.any())
                .apis(RequestHandlerSelectors.basePackage("com.devcom.controller")).build().apiInfo(apiInfo());

   }


   @SuppressWarnings("deprecation")
    private ApiInfo apiInfo() {
        
        return new ApiInfoBuilder().title("Demo World")
                .description("Demo World")
                .termsOfServiceUrl("http://world.com")
                .contact("world@gmail.com").license("My License")
                .licenseUrl("world@gmail.com").version("1.0").build();
    }

}
