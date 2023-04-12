import React from 'react';
import './B.css'

const Blog = () => {
    return (
        <div className='card s-t'>
            <div className='card'>
            <h4> Q:1 The React Context API was introduced to overcome the problem of passing props down the tree of components. The state of the application can be stored globally, and shared across multiple components. Now with the addition of hooks to the React architecture, we get a new hook called useContext</h4>
            <h3>
           Q:2 A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.
            </h3>

            <h4>
           Q: 3 Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it.
            </h4>
            <h4>Q 4: By using memoization, we store the values that were calculated in the previously called subproblems. Then if the same subproblem is raised, we again use the stored value which reduces the time complexity as it removes the extra effort to calculate again and again for the same problem</h4>
            </div>
        </div>
    );
};

export default Blog;