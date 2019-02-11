This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Structure

This is MultiStore MicroKernel React-Redux Framework for large scale applications. You can create your own modules and add them to the router easily.

The structure is like this:

```
.
├── src
|   ├── actions     -> Global reducers and actions 
|   └── components  -> Global components, each component can have container
|   └── layouts     -> Layout of whole project
|   └── modules     -> All of your modules can add to this directory
|   |   ├── module1
|   |   |   ├── actions     -> module1 reducers and actions
|   |   |   └── components  -> module1 components, each component can have container
|   |   |   └── pages       -> module1 pages
|   |   |   └── index.js    -> module1 Local Store
|   |   └── module2
|   |   |   ├── actions     -> module2 reducers and actions
|   |   |   └── components  -> module2 components, each component can have container
|   |   |   └── pages       -> module2 pages
|   |   |   └── index.js    -> module2 Local Store
|   └── routes      -> Add you project routes here
|   └── store       -> Global Store which is accessible from all modules
```


Please follow the example to understand the structure better.



### `npm start`
### `npm run build`
