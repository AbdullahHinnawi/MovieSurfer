package com.msgroup.moviesurfer.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * This class handles what exceptions need to be thrown when user is not authenticated
 *
 * The AuthenticationEntryPoint is an interface that provides the implementation for commence() method,
 * which will be called whenever an exception is thrown, because the user is trying to access protected
 * endpoint with INVALID CREDENTIALS, or without AUTHENTICATION.
 */
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Autowired
    MessageSource messageSource;

    /**
     * This method will be called when the user trying to access protected endpoint without authentication,
     * or when the user send log in request with invalid email or password.
     * It will override the response message to be "Invalid email or password!".
     * It will override the  http response status to be 401.
     * @param httpServletRequest request
     * @param httpServletResponse response
     * @param e exception
     * @throws IOException exception
     * @throws ServletException exception
     */
    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                         AuthenticationException e) throws IOException, ServletException {


        System.out.println("AuthenticationEntryPoint interface implemented with overwritten message: Invalid email or password!");

        String invalidLoginResponse = messageSource.getMessage("jwtAuthenticationEntryPoint.invalidLoginResponse", null, LocaleContextHolder.getLocale());;

        httpServletResponse.setStatus(401);
        httpServletResponse.getWriter().print(invalidLoginResponse);




    }
}
