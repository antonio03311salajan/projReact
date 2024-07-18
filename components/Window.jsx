import React from "react";


// eslint-disable-next-line react/prop-types
function Window({children}) {
    function getButtons() {
        return React.Children.map(children, (child) => {
            return child;
        })
    }
    return(
        <div className={"window"}>
            {
              getButtons()
            }
        </div>
    )
}

export default Window;