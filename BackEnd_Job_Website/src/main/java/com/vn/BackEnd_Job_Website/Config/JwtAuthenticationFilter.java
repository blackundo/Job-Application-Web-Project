package com.vn.BackEnd_Job_Website.Config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vn.BackEnd_Job_Website.Exception.CustomAccessDeniedHandler;
import com.vn.BackEnd_Job_Website.Service.JwtService;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.net.URI;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;



    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        try {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                filterChain.doFilter(request, response);
//                throw new AccessDeniedException("Please put your token");
                return;
            }
            jwt = authHeader.substring(7);
            userEmail = jwtService.extractUsername(jwt);
            if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
                if (jwtService.isTokenValid(jwt, userDetails)) {
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities()
                    );
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);

                }
            }
            filterChain.doFilter(request, response);

        }catch (AccessDeniedException ex) {
            ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
                errDetail.setProperty("access_denied_reason", "Not Authorized !");
                errDetail.setInstance(URI.create(request.getRequestURI()));
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                response.setContentType("application/json");
                new ObjectMapper().writeValue(response.getOutputStream(), errDetail);
//            ex.printStackTrace();
//            ProblemDetail errDetail = null;
//            if (ex instanceof AccessDeniedException){
//                errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
//                errDetail.setProperty("access_denied_reason", "Not Authorized !");
//                errDetail.setInstance(URI.create(request.getRequestURI()));
//                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//                response.setContentType("application/json");
//                new ObjectMapper().writeValue(response.getOutputStream(), errDetail);
//                }
//
//            if (ex instanceof SignatureException){
//                errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
//                errDetail.setProperty("access_denied_reason", "JWT Signature not valid !");
//                errDetail.setInstance(URI.create(request.getRequestURI()));
//                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//                response.setContentType("application/json");
//                new ObjectMapper().writeValue(response.getOutputStream(), errDetail);
////                response.getWriter().write("{\"error\": \"Internal Server Error\", \"message\": \"JWT Signature not valid ! \"}");
//            }
//
//            if (ex instanceof ExpiredJwtException){
//                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//                response.setContentType("application/json");
//                errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
//                errDetail.setProperty("access_denied_reason", "JWT already expired !");
//                errDetail.setInstance(URI.create(request.getRequestURI()));
//                new ObjectMapper().writeValue(response.getOutputStream(), errDetail);
//            }
//            if (ex instanceof MalformedJwtException){
//                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
//                response.setContentType("application/json");
//                errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
//                errDetail.setProperty("access_denied_reason", "JWT Wrong !");
//                errDetail.setInstance(URI.create(request.getRequestURI()));
//                new ObjectMapper().writeValue(response.getOutputStream(), errDetail);
//            }
        }catch (SignatureException ex){
            ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
                errDetail.setProperty("access_denied_reason", "JWT Signature not valid !");
                errDetail.setInstance(URI.create(request.getRequestURI()));
                response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                response.setContentType("application/json");
                new ObjectMapper().writeValue(response.getOutputStream(), errDetail);
////                response.getWriter().write("{\"error\": \"Internal Server Error\", \"message\": \"JWT Signature not valid ! \"}");
        }catch (ExpiredJwtException ex){
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                response.setContentType("application/json");
            ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
                errDetail.setProperty("access_denied_reason", "JWT already expired !");
                errDetail.setInstance(URI.create(request.getRequestURI()));
                new ObjectMapper().writeValue(response.getOutputStream(), errDetail);
        }catch (MalformedJwtException ex){
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                response.setContentType("application/json");
            ProblemDetail errDetail = ProblemDetail.forStatusAndDetail(HttpStatusCode.valueOf(403), ex.getMessage());
                errDetail.setProperty("access_denied_reason", "JWT Wrong !");
                errDetail.setInstance(URI.create(request.getRequestURI()));
                new ObjectMapper().writeValue(response.getOutputStream(), errDetail);
        }
    }
}
