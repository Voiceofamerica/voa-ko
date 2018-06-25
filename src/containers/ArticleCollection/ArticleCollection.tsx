
import * as React from 'react'
import { push } from 'react-router-redux'
import { connect, Dispatch } from 'react-redux'

import { StaticDefaultList } from '@voiceofamerica/voa-shared/components/DefaultList'
import { ListItem } from '@voiceofamerica/voa-shared/helpers/itemListHelper'

import AppState from 'types/AppState'

interface OwnProps {
  items: ListItem[]
}

type Props = OwnProps & StateProps & DispatchProps

class ArticleCollection extends React.Component<Props> {
  render () {
    const { items } = this.props

    return (
      <StaticDefaultList
        items={items}
        onItemClick={this.goToArticle}
      />
    )
  }

  private goToArticle = (id: number) => {
    this.props.goTo(`/article/${id}`)
  }
}

interface StateProps {
  favoriteIds: string[]
}

const withState = (state: AppState): StateProps => ({
  favoriteIds: Object.keys(state.favorites),
})

interface DispatchProps {
  goTo: (route: string) => void
}

const withDispatch = (dispatch: Dispatch<AppState>): DispatchProps => ({
  goTo: (route) => dispatch(push(route)),
})

const withRedux = connect(withState, withDispatch)

export default withRedux(ArticleCollection)
