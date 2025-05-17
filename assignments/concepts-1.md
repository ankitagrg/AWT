# Web Development Core Concepts Review

## HTTP Methods and Status Codes

**HTTP Methods** 
- `GET` - Retrieve data (Eg: Loading a webpage)
- `POST` - Send data to the server (Eg: Submitting a form)
- `PUT` - Update existing data  (Eg: Update an record)
- `DELETE` - Remove data (Eg: Delete a user)
- `PATCH` - Update data partially.


**HTTP Status Codes** are server responses:
- `200 OK` - Success! 
- `201 Created` 
- `400 Bad Request` 
- `401 Unauthorized` 
- `404 Not Found`
- `500 Internal Server Error`



## CSS Selectors

1. **Element Selector** - Targets all elements of a specific type.
    p {
      color: blue;
      font-size: 16px;
    }
2. **Class Selector** - Selects elements with a specific class.
   .highlight {
      background-color: yellow;
      padding: 5px;
    }

3. **ID Selector** - Selects a unique element with the given ID.
    #main-title {
      font-size: 24px;
      color: red;
    }


## GIT Basics

- `git init`: Creates a new Git repository in current folder.
- `git add`: Stages changes for commit.
        (`git add .` for all changes)
- `git commit`: Saves staged changes with a message.
        (`git commit -m "message"`)
- `git push`: Sends commits to remote repository
- `git pull`: Gets updates from remote repository
- `git clone`: Copies a remote repository to local machine
- `git branch`: Manages branches.
        (`git branch new-feature creates a new branch)


## Callback & Higher-Order Function

**Callback**: A function passed as an argument to another function to be executed later.  

**Higher-Order Function**– A function that takes another function as a parameter or returns one.

## Array Methods

- **filter** – Creates a new array with elements that pass a test.
- **map** – Creates a new array with the results of calling a function on every element.
- **forEach** – Executes a function for each array element.
- **push** – Adds one or more elements to the end of an array.
- **pop** – Removes the last element from an array.
