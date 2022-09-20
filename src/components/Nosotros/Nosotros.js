

export const Nosotros = () => {
  const handleSaludar = (name) => {
    console.log(name)
  }



  return (
    <div className='container my-5'>

      <h2 onClick={ () => handleSaludar ("Valentin Markov")}>Nosotros</h2>
      <hr></hr>
    </div>
  )
}
