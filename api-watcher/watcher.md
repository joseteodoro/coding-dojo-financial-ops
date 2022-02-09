# api watcher problem

## Summary

Status code
2xx <--- sucesso
3xx <--- pode ser sucess
4xx, 5xx <-- erros

A watcher to test a lot of apis and notify (using a http post / get, console, and slack) if the state (online / offline) changes.

- each test should return status code, error (if present), state (online / offline), response time
- Test should accept either get and post requests
- Test should accept headers
- Test should accept body
- Test should track the status code and the error (if present)
- Those test should be configured using JSON files in a config folder
- Each test should be placed on a different JSON file
- Invalid JSON files should be ignored
- should be possible to skip a test (using the test config file)
- should be possible configure the nofification target (slack, post, get, console) using the test config file
- persist using a JSON file

runnint first time
start
    api test 1 200 <--  notifica 
    api test 2 200 <--  notifica
    api test 3 404 <-- notifica
end

runnint scnd time
start
    api test 1 200
    api test 2 200
    api test 3 200 <-- notifica
end


runnint trd time
start
    api test 1 400 <-- notifica
    api test 2 200
    api test 3 200
end


