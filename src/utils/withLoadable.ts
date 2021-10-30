import Loadable from 'react-loadable'

const withLoadable = (comp: any) =>
  Loadable({
    loader: () => comp,
    loading: () => null,
  })

export default withLoadable