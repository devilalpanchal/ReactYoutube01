import React, { useState } from "react";
function Profile(){
    // let [loggedIn,setloggedIn] = useState(true )
    let [loggedIn,setloggedIn] = useState(2)

return <div className="app">

{/* {loggedIn?<h1>helo devi</h1>:<h2>by devi</h2>} */}


{/* we can use if we have number */}
{/* let 1,2,3  ho apne pass to */}
{loggedIn==1?<h1>helo devi</h1>:loggedIn==2?<h2>by devi</h2>:<h4>devi3</h4>}
</div>

    // belove code is right but Not Recomended way
    // if(loggedIn)
    // {
    //     return(
    //         <div>
    //             <h2>Welcome deved developer</h2>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h2>Welcome devi bhai</h2>
    //         </div>
    //     )
    // }
  
}

export default Profile;