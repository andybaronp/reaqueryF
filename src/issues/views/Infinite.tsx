import { useState } from 'react'
import { IssueList } from '../components/IssueList'
import { LabelPicker } from '../components/LabelPicker'
import { useIssues } from '../hooks'
import LoadingIcon from '../../shared/components/LoadingIcon'
import { State } from '../interfaces'
import { useIssuesInfinite } from '../hooks/useIssuesInfinite'

export const Infinite = () => {
  const [seletedLabel, setSeletedLabel] = useState<string[]>([])

  const [state, setState] = useState<State>()

  const { issuesQuery } = useIssuesInfinite({
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
            issues={issuesQuery.data?.pages.flat() || []}
            state={state}
            onStateChange={(newState) => setState(newState)}
          />
        )}

        <button
          disabled={!issuesQuery.hasNextPage}
          className='btn btn-outline-primary mt-2'
          onClick={() => issuesQuery.fetchNextPage()}
        >
          Load more...
        </button>
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
