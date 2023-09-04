import { useEffect, useState } from "react"
function App() {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

useEffect(() => {
  console.log('Efecto', {enable})
  const handleMove = (event) => {
    const {clientX, clientY} = event
    setPosition({x: clientX, y:clientY})
  }

  if (enable) {
    window.addEventListener('pointermove', handleMove)
  }

  // Limpiamos efecto
  return () => {
    window.removeEventListener('pointermove', handleMove)
  }

}, [enable])

useEffect(() => {
document.body.classList.toggle('no-cursor', enable)

return () => {
  document.body.classList.remove('no-cursor')

}
}, [enable])

    return (
      <main>
        <h3>Seguimiento de puntero</h3>
      <div style={
        {
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: '0.8',
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }
      }>
        </div>  
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Desactivar" : "Activar"} el segumiento
      </button>
      </main>
      )
}

export default App
