package com.bakigoal.jokes.backend.joke;

public class Joke {
  private String setup;
  private String punchline;

  public Joke(String setup, String punchline) {
    this.setup = setup;
    this.punchline = punchline;
  }

  public String getSetup() {
    return setup;
  }

  public String getPunchline() {
    return punchline;
  }
}
