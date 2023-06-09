import { useState } from 'react'
import { IssueList } from '../components/IssueList'
import { LabelPicker } from '../components/LabelPicker'
import { useIssues } from '../hooks'
import LoadingIcon from '../../shared/components/LoadingIcon'
import { State } from '../interfaces'

export const ListView = () => {
  const [seletedLabel, setSeletedLabel] = useState<string[]>([])

  const [state, setState] = useState<State>()

  const { issuesQuery, page, nextPage, prevPage } = useIssues({
    state,
    labels: seletedLabel,
  })

  const onChangeLabel = (labelName: string) => {
    seletedLabel.includes(labelName)
      ? setSeletedLabel(seletedLabel.filter((label) => label !== labelName))
      : setSeletedLabel([...seletedLabel, labelName])
  }
  return (
    <div className='row mt-5'>
      <div className='col-8'>
        {issuesQuery.isLoading ? (
          <LoadingIcon />
        ) : (
          <IssueList
            issues={issuesQuery.data || []}
            state={state}
            onStateChange={(newState) => setState(newState)}
          />
        )}
        <div className='d-flex mt-2 justify-content-between '>
          <button
            className='btn btn-outline-primary'
            onClick={prevPage}
            disabled={issuesQuery.isFetching}
          >
            Prev
          </button>
          <span>{page}</span>
          <button
            className='btn btn-outline-primary'
            onClick={nextPage}
            disabled={issuesQuery.isFetching}
          >
            Next
          </button>
        </div>
      </div>

      <div className='col-4'>
        <LabelPicker
          seletedLabel={seletedLabel}
          onChange={(label) => onChangeLabel(label)}
        />
      </div>
    </div>
  )
}
