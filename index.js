import {useEffect, state, setState} from "./Mechanism.js";

// Case 1 : Some dependency value (array)
useEffect(() => {

    function print()
    {
        console.log("Yo foo wassup ma G");
        setState(Math.floor(Math.random() * 1000));
    }
    print();

}, [state]);

// Case 2 : No dependency (forever)
useEffect(() => {

    function print()
    {
        console.log("I come forever ma G");
        setState(Math.floor(Math.random() * 1000));
    }
    print();

});

// Case 3 : Empty array (Only once)
useEffect(() => {

    function print()
    {
        console.log("I come only once foo");
        setState(Math.floor(Math.random() * 1000));
    }
    print();

}, []);