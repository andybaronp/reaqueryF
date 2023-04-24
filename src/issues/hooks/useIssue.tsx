import { useQuery } from '@tanstack/react-query'
import { Issue } from '../interfaces'
import { githubapi } from '../../api/githubApi'
import { sleep } from '../../helpers/sleep'

export const getIssueInfo = async (issuesNumber: Number): Promise<Issue> => {
  await sleep(2)

  const { data } = await githubapi.get<Issue>(`/issues/${issuesNumber}`)
  return data
}
export const getIssueComments = async (
  issuesNumber: Number,
): Promise<Issue[]> => {
  await sleep(2)
  const { data } = await githubapi.get<Issue[]>(
    `/issues/${issuesNumber}/comments`,
  )
  return data
}
export const useIssue = (issueNumner: number) => {
  const issueQuery = useQuery(['issue', issueNumner], () =>
    getIssueInfo(issueNumner),
  )
  const commentQuery = useQuery(
    ['issue', issueNumner, 'comments'],
    () => getIssueComments(issueQuery.data!.number),
    {
      enabled: issueQuery.data !== undefined,
    },
  )

  return { issueQuery, commentQuery }
}
