# api watcher problem

## Summary

A watcher to test a lot of apis and notify (using a http post / get, console, and slack) if the state (online / offline) changes.

- Test should accept either get and post requests
- Test should accept headers
- Test should accept body
- Test should track the status code and the error (if present)
- Those test should be configured using JSON files in a config folder
- Each test should be placed on a different JSON file
- Invalid JSON files should be ignored
- should be possible to skip a test (using the test config file)
- should be possible configure the nofification target (slack, post, get, console) using the test config file

