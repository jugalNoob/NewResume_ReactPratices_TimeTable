import React from 'react';
// import Cookies from 'js-cookie';
function Storage() {

    //cookies
    // Cookies.set('name', 'value', { expires: 7, path: '' })
    // Cookies.get('name') // => 'value'

//     Cookies.set('name', 'value', { path: '' })
// Cookies.remove('name') // fail!
// Cookies.remove('name', { path: '' }) // removed!



// // Assign the js-cookie api to a different variable and restore the original "window.Cookies"
// var Cookies2 = Cookies.noConflict()
// Cookies2.set('name', 'value')




    //. localStorage 
// Set an item in localStorage
localStorage.setItem('username', 'JohnDoe');

// Get an item from localStorage
const username = localStorage.getItem('username');
console.log(username); // Outputs: JohnDoe

// Remove an item from localStorage
localStorage.removeItem('username');

// Clear all items in localStorage
localStorage.clear();




//3. sessionStorage -------------------------------------->>>><<>
// Set an item in sessionStorage
sessionStorage.setItem('sessionUser', 'JaneDoe');

// Get an item from sessionStorage
const sessionUser = sessionStorage.getItem('sessionUser');
console.log(sessionUser); // Outputs: JaneDoe

// Remove an item from sessionStorage
sessionStorage.removeItem('sessionUser');

// Clear all items in sessionStorage
sessionStorage.clear();





  return (
    <div>
      
    </div>
  )
}

export default Storage


// Second Level Line start row class   ------------------------


import React, { useEffect } from 'react';

function Storage() {

    // Cookies
    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    };

    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    // localStorage
    const setLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const getLocalStorage = (key) => {
        return JSON.parse(localStorage.getItem(key));
    };

    // sessionStorage
    const setSessionStorage = (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
    };

    const getSessionStorage = (key) => {
        return JSON.parse(sessionStorage.getItem(key));
    };

    useEffect(() => {
        // Set a cookie
        setCookie('username', 'JohnDoe', 7); // Expires in 7 days

        // Get the cookie
        console.log('Cookie: ', getCookie('username'));

        // Set localStorage
        setLocalStorage('user', { name: 'John', age: 30 });

        // Get localStorage
        console.log('Local Storage: ', getLocalStorage('user'));

        // Set sessionStorage
        setSessionStorage('sessionUser', { name: 'Jane', age: 25 });

        // Get sessionStorage
        console.log('Session Storage: ', getSessionStorage('sessionUser'));
    }, []);

    return (
        <div>
            <h1>Storage Example</h1>
            <p>Check the console for storage operations.</p>
        </div>
    );
}

export default Storage;






// Summary
// Cookies: Ideal for storing small amounts of data that need to be persisted
//  across sessions and even after the browser is closed. Typically used for things
//   like authentication tokens.


// localStorage: Best for storing larger amounts of data that need to persist even 
// after the browser is closed and reopened.

// sessionStorage: Good for storing data that should only be available during
//  the current browser session. Once the tab is closed, the data is lost.
// These examples demonstrate basic operations for each storage mechanism, allowing you to manage data on the client side effectively.