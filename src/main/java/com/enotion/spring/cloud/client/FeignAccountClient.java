package com.enotion.spring.cloud.client;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name = "sc-account", fallback = FeignAccountClientFallback.class)
public interface FeignAccountClient {

    @RequestMapping(value = "feign/hello", method = RequestMethod.GET)
    ResponseEntity<String> feignHello();
}