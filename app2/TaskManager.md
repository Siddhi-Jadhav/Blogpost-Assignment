#Task Manager
- user
    - Post /user/signup
    - Post /user/signin
    - GET /user/profile
    - PUT /user/profile
    - DELETE /user/close
 
- task (per user)
    - POST /task/
    - PUT /task/changeStatus
    - GET /task/all
    - GET /task/?search=task1&status=OPEN
    - PUT /task/:id
    - DELETE /task/:id

#NestJs
    - AppModule
    - UserModule
        - UserController
        - UserService
    - TaskModule
        - TaskController
        - TaskService