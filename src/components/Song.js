const Song = ({artist, image, children}) => {
  return  (
    <li>
        <img src={image}></img>
        <h2>{children}</h2> 
        <h3>by {artist}</h3>
    </li>

  )
    
}

export default Song