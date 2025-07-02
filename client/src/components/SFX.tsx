import SFXButton from "./SFXButton"

const SFX = () => {
  return (
    <div className="sfx-holder">
      { Array.from({ length: 30 }).map((_, i) => (
        <SFXButton key={i} sfxName={`sfx ${i}`} />
      ))}
    </div>
  )
}

export default SFX
