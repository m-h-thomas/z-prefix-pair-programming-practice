# USAF-sdi-pair-programming-assessments

This repo contains pair-programming challenges to provide practice for pair-programming interviews.  This repo is design to be used by two people, one playing the role of the _Navigator_, and one playing the role of the _Driver_.  The Driver is the person who will do all of the typing and run the tests, the Navigator is responsible for coming up with and directing the problem-solving approach that will be used - in other words, the Navigator will tell the Driver what they want to do, and the Driver will implement the described changes without adding anythign the Navigator didn't mention.  As you may have guessed, in this simulation, the Navigator is the person being interviewed, and the Driver is the interviewer. This is an exercise to practice effective communication and teamwork in live-action problem solving scenario for the Navigator.  You are encouraged to switch roles once you've completed your first challenge (and switch challenges to keep things fresh) so that both of you get a chance to be "in the hot seat"!

There are several challenges so that you can feel free to switch off a few times without the content getting stale:
- Blog
- Calculator
- Set
- Tic-Tac-Toe
- Todo-List

All of the challenges require you to embrace TDD and OOP to succeed. Each challenge is located in its own directory an had its own tests (located in the `spec` file within each challenge's directory). As suchm you'll need to be sure to install each challenge's dependencies separately:
- `cd` into the directory that contains the challenge you want to use
- run `npm install` in that directory to get the dependencies installed
- run `npm test` to run the tests for that challenge - you should see the result in the terminal

As you start each challenge, uncomment the first test in the test file and run the tests. When you see a failure, it's time for the Navigator to guide the Driver in writing code in the corresponding file to make sure that test passes. Once the Navigator tells the Driver how to do that and the test is successfully passed, uncomment the next test and continue the TDD cycle.  Some refactoring may indeed be necessary as you progress through the tests, so if passing the latest test causes an *earlier* test to fail, consider trying to refactor so that both tests pass rather than assuming that you've made an error and backtracking!