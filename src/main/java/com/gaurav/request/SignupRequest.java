package com.gaurav.request;

import com.gaurav.model.USER_ROLE;
import lombok.Data;

@Data
public class SignupRequest {
    private String fullName;
    private String email;
    private String password;
    private USER_ROLE role;
}
