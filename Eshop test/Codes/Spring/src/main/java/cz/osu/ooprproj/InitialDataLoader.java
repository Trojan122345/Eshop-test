package cz.osu.ooprproj;

import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.Arrays;

public class InitialDataLoader implements ApplicationListener<ContextRefreshedEvent> {
    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        Role adminRole = new Role("ADMIN_ROLE", new ArrayList<>());
    }
}
