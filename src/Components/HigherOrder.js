import React from "react";


const UpdatedComp = OriginalComp => {
    class newComp extends React.Component {

        render(){
            return <OriginalComp name = "The user" />;
        }
    }
    return newComp;
};

export default UpdatedComp;