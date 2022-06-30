// import package for property types
import { PropTypes } from "prop-types";

// create component here

function DetailAbout(props){

    return(
        <div>
            <h1>name: {props.name}</h1>
            <h1>email: {props.email}</h1>
            <h1>age: {props.age}</h1>
        </div>
    )
}

// define property type for this component here

export default DetailAbout

DetailAbout.propTypes= {
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    age: PropTypes.number,
}
