package com.vn.BackEnd_Job_Website.Service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface ProfileService {

    void info(HttpServletRequest request,
              HttpServletResponse response) throws IOException;
}
