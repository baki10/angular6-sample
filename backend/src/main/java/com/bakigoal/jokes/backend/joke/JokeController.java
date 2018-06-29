package com.bakigoal.jokes.backend.joke;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@Component
@RestController("/jokes")
@CrossOrigin(origins = "http://localhost:4200")
public class JokeController {

    @GetMapping
    public List<Joke> jokeList() {
        return Arrays.asList(
                new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
                new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)")
        );
    }
}
