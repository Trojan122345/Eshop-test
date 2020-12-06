package cz.osu.ooprproj.security;

public class JwtResponse {
    private final String token;
    private final boolean isAdmin;

    public JwtResponse(String token, boolean isAdmin) {
        this.token = token;
        this.isAdmin = isAdmin;
    }

    public String getToken() {
        return token;
    }

    public boolean isAdmin() {
        return isAdmin;
    }
}
