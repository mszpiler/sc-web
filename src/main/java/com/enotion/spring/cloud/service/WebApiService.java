package com.enotion.spring.cloud.service;

import com.enotion.spring.cloud.client.FeignAccountClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebApiService {

    private static final Logger logger = LoggerFactory.getLogger(WebApiService.class);

    @Autowired
    private FeignAccountClient feignAccountClient;

    @RequestMapping("/hello_from_account")
    public String getAccountHello() {

        ResponseEntity<String> value = feignAccountClient.feignHello();

        logger.info("[sc-web][WebApiService] Value from account = " + value.getBody());

        return "[sc-web][getAccountHello] value = >>" + value.getBody() + "<<";
    }
}
