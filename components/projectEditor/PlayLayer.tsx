import { useState } from "react"

export default function PlayLayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = (event: any) => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div onClick={handleClick}>&#8883;</div>
  )
}
