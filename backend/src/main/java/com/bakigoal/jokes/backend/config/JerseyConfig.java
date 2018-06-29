package com.bakigoal.jokes.backend.config;

import com.bakigoal.jokes.backend.joke.JokeController;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JerseyConfig extends ResourceConfig {
  public JerseyConfig() {
    register(JokeController.class);
  }
}
