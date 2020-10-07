# nodejs-passport-auth

### Development Setup

1. `git clone https://github.com/subhendu17620/nodejs-passport-auth.git`
2. `cd nodejs-passport-auth`
3. `npm install`
4. `npm start`



### Testing

1.  Start your local mongo Server `mongod`

2. Start the app `npm start`

3. Open Postman

   1. #### Signup

      1. POST - localhost:3000/signup

      2. **body**  x-www-form-urlencoded (Content-Type : application/x-www-form-urlencoded)

      
      |   Key    |    Value    |
      | :------: | :---------: |
      |  email   | s@gmail.com |
      | password |   123456    |
   
   output:
   
   ![signup](D:\crap\nodejs-passport\screenshots\signup.PNG)
   
4. #### Login

   1. POST - localhost:3000/login

   2. body - x-www-form-urlencoded (Content-Type : application/x-www-form-urlencoded)


   |   Key    |    Value    |
   | :------: | :---------: |
   |  email   | s@gmail.com |
   | password |   123456    |



​	output:

![login](D:\crap\nodejs-passport\screenshots\login.PNG)


   3. #### Profile route (Secure-path) 

      1. GET - localhost:3000/user/profile?secret_token=< token returned from login >
      
         output:
      
         ![secure-route](D:\crap\nodejs-passport\screenshots\secure-route.PNG)