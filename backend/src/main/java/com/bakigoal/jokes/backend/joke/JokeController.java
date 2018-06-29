package com.bakigoal.jokes.backend.joke;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.Arrays;
import java.util.List;

@Component
@Path("/jokes")
public class JokeController {

  @GET
  @Produces("application/json")
  public List<Joke> jokeList() {
    return Arrays.asList(
        new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
        new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)")
    );
  }
}
