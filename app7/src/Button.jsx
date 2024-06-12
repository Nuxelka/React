
function Button(){

    const handleClick = (e) => {
        e.target.textContent = "👈(⌒▽⌒)👉";
    }

    return(<button onClick={(e) => handleClick(e)}>ᓚᘏᗢ</button>);
}

export default Button