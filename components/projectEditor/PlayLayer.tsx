import { NextPage } from "next";
import { useState } from "react"

interface Props {
  isPlaying: boolean,
  setIsPlaying: Function,
}

const PlayLayer: NextPage<Props> = ({ isPlaying, setIsPlaying }) => {
  const handleClick = (event: any) => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div onClick={handleClick}>&#8883;</div>
  )
}

export default PlayLayer;
