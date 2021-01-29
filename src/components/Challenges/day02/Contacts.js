const AlumniComponent = (props) => {

        return  <div>
        <h1>Hello,I'm {props.name}!</h1>
        <p>I am {props.age} yrs old, went to {props.school}, and graduated in {props.gradYear}</p>
        </div>
    }
    
    export default AlumniComponent;


/*<h3>name, <p>age, school, grad year*/