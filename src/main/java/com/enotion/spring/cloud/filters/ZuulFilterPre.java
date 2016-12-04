package com.enotion.spring.cloud.filters;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;

/**
 * Example of zuul pre filter
 */
public class ZuulFilterPre extends ZuulFilter {

    private static final Logger logger = LoggerFactory.getLogger(ZuulFilterPre.class);

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 1;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() {
        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest request = ctx.getRequest();

        logger.info(String.format("[ZuulFilterPre] %s request to %s", request.getMethod(), request.getRequestURL().toString()));

        return null;
    }
}
