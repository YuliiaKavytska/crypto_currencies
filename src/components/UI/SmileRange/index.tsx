import React, { FC } from 'react'

import Nouislider from 'nouislider-react'

import 'nouislider/distribute/nouislider.css'
import './style.scss'

interface ISmileScoreRange {
  step: number
  setStep: (value: number) => void
}

const SmileScoreRange: FC<ISmileScoreRange> = ({ step, setStep }: ISmileScoreRange) => {
  const onSelectValue = (value: number) => {
    setStep(value)
  }

  return (
    <div className="smile-range">
      <div className="smile-range__items">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <span key={i} onClick={() => onSelectValue(i + 1)}>
              {i + 1}
            </span>
          ))}
      </div>
      <div className={'i' + step.toString()}>
        <Nouislider
          range={{ min: 1, max: 10 }}
          start={step}
          step={1}
          connect={[true, false]}
          clickablePips={true}
          onSlide={(e) => onSelectValue(Number(e[0]))}
        />
      </div>
      <div className="smile-range__range-names">
        <div className="smile-range__name" onClick={() => setStep(1)}>
          Not at all likely
        </div>
        <div className="smile-range__name" onClick={() => setStep(10)}>
          Extremely likely
        </div>
      </div>
    </div>
  )
}

export default SmileScoreRange
