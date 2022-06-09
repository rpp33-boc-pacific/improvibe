import { NextPage } from "next";

interface Props {
  startMarker: number,
  endMarker: number,
}

const TimeLine: NextPage<Props> = ({ startMarker, endMarker }) => {
  let markers = Array.from(Array(250).keys());
  markers = markers.map((value) => value + 1);

  return (
    <div className='marker-holder'>
      {markers.map((column) => {
        if (column === startMarker || (column - 1 === startMarker && startMarker === 0)) {
          return <div className='start-marker' style={{ gridColumn: startMarker }}></div>
        }

        if (column === endMarker) {
          return <div className='end-marker' style={{ gridColumn: endMarker }}></div>
        }

        if ((column - 1) % 5 === 0) {
          return <div className='tick' style={{ gridColumn: column }}></div>
        }
      })}
    </div>
  )
}

export default TimeLine;