
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import TopNav, { TopNavItem, StaticItem, CenterText } from '@voiceofamerica/voa-shared/components/TopNav'
import ThemeProvider from '@voiceofamerica/voa-shared/components/ThemeProvider'

import analytics, { AnalyticsProps } from '@voiceofamerica/voa-shared/helpers/analyticsHelper'
import ErrorBoundary from 'components/ErrorBoundary'
import Category from 'types/Category'
import { programsScreenLabels } from 'labels'

import TopNavTheme from './TopNavTheme'
import Params from './Params'
import VideoPrograms from './VideoPrograms'
import AudioPrograms from './AudioPrograms'
import YouTube from './YouTube'
import { programsScreen, programTypeNav, typeItem, active } from './ProgramsScreen.scss'

type ProgramType = 'audio' | 'video' | 'youtube'

const YOUTUBE: ProgramType = 'youtube'
const VIDEO: ProgramType = 'video'
const AUDIO: ProgramType = 'audio'
const DEFAULT = YOUTUBE

const VIDEO_ZONES: Category[] = [
  {
    id: 0,
    name: '전체 프로그램',
  },
  {
    id: 5350,
    name: '워싱턴 톡',
  },
  {
    id: 5299,
    name: 'VOA Now',
  },
  {
    id: 5306,
    name: '스냅샷 서울',
  },
  {
    id: 5425,
    name: '글로벌 리포트',
  },
  {
    id: 5380,
    name: '나의 아메리카',
  },
  {
    id: 5377,
    name: '플러싱 사람들',
  },
  {
    id: 5409,
    name: '미국을 만나다',
  },
]

const AUDIO_ZONES: Category[] = [
  {
    id: 0,
    name: '전체 프로그램',
  },
  {
    id: 2721,
    name: 'VOA 뉴스 투데이',
  },
  {
    id: 4420,
    name: '생방송 여기는 워싱턴입니다',
  },
  {
    id: 2709,
    name: '구석구석 미국 이야기',
  },
  {
    id: 4935,
    name: 'VOA 이야기 미국사',
  },
  {
    id: 5149,
    name: '타박타박 미국 여행',
  },
  {
    id: 5150,
    name: '인물 아메리카',
  },
  {
    id: 5148,
    name: '나는 미국인입니다',
  },
]

interface Props extends RouteComponentProps<Params>, AnalyticsProps {
}

class ProgramsScreen extends React.Component<Props> {
  setProgramType = (programType: ProgramType) => {
    const { history, match } = this.props
    const { type } = match.params

    if (type === programType) {
      return
    }

    history.replace(`/programs/${programType}`)
  }

  setZoneId = (zoneId: number) => {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    history.replace(`/programs/${type}/${zoneId}`)
  }

  renderPrograms () {
    const { history, match } = this.props
    const { type = DEFAULT } = match.params
    if (type === VIDEO) {
      return <VideoPrograms history={history} zoneId={this.getZoneId()} />
    } else if (type === AUDIO) {
      return <AudioPrograms history={history} zoneId={this.getZoneId()} />
    } else if (type === YOUTUBE) {
      return <YouTube />
    } else {
      throw new Error(`Invalid programType ${type}`)
    }
  }

  renderProgramTypes () {
    const { type = DEFAULT } = this.props.match.params

    return (
      <div className={programTypeNav}>
        <div className={type === YOUTUBE ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(YOUTUBE)}>
          {programsScreenLabels.youtube}
        </div>
        <div className={type === VIDEO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(VIDEO)}>
          {programsScreenLabels.videos}
        </div>
        <div className={type === AUDIO ? `${typeItem} ${active}` : typeItem} onClick={() => this.setProgramType(AUDIO)}>
          {programsScreenLabels.audio}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className={programsScreen}>
        {this.renderTopNav()}
        <ErrorBoundary>
          {this.renderPrograms()}
        </ErrorBoundary>
        {this.renderProgramTypes()}
      </div>
    )
  }

  private getZoneId = () => {
    const { zone = 0 } = this.props.match.params
    return typeof zone === 'number' ? zone : parseInt(zone, 10)
  }

  private renderTopNav () {
    const { type = DEFAULT } = this.props.match.params

    if (type === VIDEO) {
      return this.renderTopNavFromItems(VIDEO_ZONES)
    } else if (type === AUDIO) {
      return this.renderTopNavFromItems(AUDIO_ZONES)
    } else if (type === YOUTUBE) {
      return (
        <ThemeProvider value={TopNavTheme}>
          <TopNav flex>
            <CenterText>VOA 한국어</CenterText>
          </TopNav>
        </ThemeProvider>
      )
    } else {
      throw new Error(`Unrecognized program type ${type}`)
    }
  }

  private renderTopNavFromItems (items: Category[]) {
    const zoneId = this.getZoneId()

    return (
      <ThemeProvider value={TopNavTheme}>
        <TopNav flex>
          <StaticItem />
          {
            items.map(({ id, name }) => {
              const selected = zoneId === id

              return (
                <TopNavItem
                  key={id}
                  selected={selected}
                  onClick={() => this.setZoneId(id)}
                >
                  {name}
                </TopNavItem>
              )
            })
          }
          <TopNavItem />
        </TopNav>
      </ThemeProvider>
    )
  }
}

const withAnalytics = analytics<Props>({
  state: 'Programs',
  title: 'Programs',
})

export default withAnalytics(ProgramsScreen)
