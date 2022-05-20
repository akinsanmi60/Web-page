/* eslint-disable */
// @ts-nocheck
/* eslint-disable */
// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react'
import { ProgressWrapper } from './style'

const CircularProgressWithLabel = props => {
  const [offset, setOffset] = useState(0)
  const circleRef = useRef(null)
  const { size, progress, strokeWidth, stroke } = props
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference
    setOffset(progressOffset)
    circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out;'
  }, [setOffset, circumference, progress, offset, props.progressColor])

  // default color
  let circleTwoStroke
  if (stroke && progress > 40) {
    circleTwoStroke = stroke.min
  }
  if (stroke && progress > 90) {
    circleTwoStroke = stroke.max
  }

  const url = stroke.light

  return (
    <ProgressWrapper key={stroke.light}>
      <svg className='svg' width={size} height={size}>
        <defs>
          <linearGradient
            id={stroke.light}
            x1='100%'
            y1='100%'
            x2='8%'
            y2='100%'
          >
            <stop offset='0%' stop-color={stroke.light} />
            <stop offset='50%' stop-color={stroke.light} />
          </linearGradient>
        </defs>
        <circle
          className='svg-circle-bg'
          stroke='#F2F2F2'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className='svg-circle'
          ref={circleRef}
          stroke={url}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          stroke-linejoin='round'
        />
        <text x='50%' y='55%' className='svg-circle-text'>
          {progress}%
        </text>
      </svg>
    </ProgressWrapper>
  )
}

export default CircularProgressWithLabel
