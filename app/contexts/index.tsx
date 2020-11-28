import React from 'react';

export default React.createContext({
    setTest: (x:any) => console.log("set x")

});