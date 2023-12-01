package com.vn.BackEnd_Job_Website.Config;

import com.vn.BackEnd_Job_Website.Advice.DataExceptionHandler;
import com.vn.BackEnd_Job_Website.Exception.CustomAccessDeniedHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {
    private static final String[] WHITE_LIST_URL = {"/api/auth/**",
            "/",
            "/messages/**",
            "/api/profile/download/**",
            "/api/profile"};
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors
                        .configurationSource(request -> {
                            CorsConfiguration config = new CorsConfiguration();
                            config.applyPermitDefaultValues();
                            config.addAllowedOrigin("http://localhost:5173");
                            config.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
                            config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
                            return config;
                        })
                )
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                        auth -> auth.requestMatchers(WHITE_LIST_URL).permitAll()
                                .requestMatchers("/api/admin/**").hasRole("Admin")
                                .requestMatchers("/api/company/**").hasRole("Company")
                                .requestMatchers("/api/hiring/**", "/api/hiring/").hasAnyRole("Company","Candidate")
                                .requestMatchers("/api/candidate/**").hasRole("Candidate")
                                .requestMatchers("/api/profile/uploadcv").hasRole("Candidate")
                                .requestMatchers("/api/profile/**").hasAnyRole("Candidate", "Company")
                                .requestMatchers("/api/profile/company/**").hasRole("Company")
                                .requestMatchers("/api/apply/").hasRole("Candidate")
                                .anyRequest().authenticated()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling(e -> {
                    e.accessDeniedHandler(new CustomAccessDeniedHandler()); //403
                    e.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.NOT_FOUND)); //404
                });
        return http.build();
    }

}
