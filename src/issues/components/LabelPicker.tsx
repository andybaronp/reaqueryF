import LoadingIcon from '../../shared/components/LoadingIcon'
import { useLabels } from '../hooks/useLabels'
import { FC } from 'react'

interface Props {
  seletedLabel: string[]
  onChange: (labelName: string) => void
}
export const LabelPicker: FC<Props> = ({ onChange, seletedLabel }) => {
  const labelQuery = useLabels()

  if (labelQuery.isLoading) return <LoadingIcon />
  return (
    <div>
      {labelQuery.data?.map((label) => (
        <span
          onClick={() => onChange(label.name)}
          className={`badge rounded-pill m-1 label-picker  ${
            seletedLabel.includes(label.name) && 'labelActive'
          } `}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          key={label.id}
        >
          {label.name}
        </span>
      ))}
    </div>
  )
}
