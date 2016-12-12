package com.enotion.spring.cloud.client;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class FeignAccountClientFallback implements FeignAccountClient {
    @Override
    public ResponseEntity<String> feignHello() {
        return ResponseEntity.ok("[sc-web] FeignAccountClient.hello() FALLBACK");
    }
}
