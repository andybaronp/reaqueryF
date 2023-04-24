import { useQuery } from '@tanstack/react-query'
import { githubapi } from '../../api/githubApi'
import { sleep } from '../../helpers/sleep'
import { Label } from '../interfaces/label'

const getLabels = async (): Promise<Label[]> => {
  await sleep(2)
  const { data } = await githubapi.get<Label[]>('/labels?per_page=100')
  return data
}

export const useLabels = () => {
  const labelQuery = useQuery(['labels'], getLabels, {
    // refetchOnWindowFocus: false,
    // staleTime: 1000 * 60 * 60,
    // placeholderData: [
    //   {
    //     id: 1155972012,
    //     node_id: 'MDU6TGFiZWwxMTU1OTcyMDEy',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Scheduler',
    //     name: 'Component: Scheduler',
    //     color: '9de8f9',
    //     default: false,
    //   },
    //   {
    //     id: 52079258,
    //     node_id: 'MDU6TGFiZWw1MjA3OTI1OA==',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Difficulty:%20starter',
    //     name: 'Difficulty: starter',
    //     color: '94ce52',
    //     default: false,
    //   },
    // ],
    initialData: [
      {
        id: 1155972012,
        node_id: 'MDU6TGFiZWwxMTU1OTcyMDEy',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Scheduler',
        name: 'Component: Scheduler',
        color: '9de8f9',
        default: false,
      },
      {
        id: 52079258,
        node_id: 'MDU6TGFiZWw1MjA3OTI1OA==',
        url: 'https://api.github.com/repos/facebook/react/labels/Difficulty:%20starter',
        name: 'Difficulty: starter',
        color: '94ce52',
        default: false,
      },
    ],
  })
  return labelQuery
}
