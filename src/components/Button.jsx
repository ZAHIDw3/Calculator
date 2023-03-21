const Button= (props) =>{    
    return(
        <td><button type="button" className={props.style} value="8" onClick={(e) => props.handleClick(e)}>8</button></td>
    )
}

export default Button