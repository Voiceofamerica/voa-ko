
import * as React from 'react'
import { push } from 'react-router-redux'
import store from 'redux-store'
import toggleCircumventionDrawer from 'redux-store/actions/toggleCircumventionDrawer'
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import { Audience } from 'helpers/graphql-types'

setAnalyticsOptions({
  language: 'Korean',
  languageService: 'VOA Korea Service',
  propertyName: 'voa korean news app',
  propertyId: '350',
  rsidAccount: 'bbgvoa.korean.streaming.app',
  reportSuite: 'bbgvoa.korean.streaming.app',
})
setDirection('ltr')

export const graphqlAudience = Audience.ko

moment.locale('ko')

export const articleLabels = {
  updatedOn: (date: string) => `입력 ${date}`,
  relatedContent: '관련 뉴스',
  shareMessage: '뉴스 보기',
  galleryLoading: '로딩 중',
}

export const categorySettingsLabels = {
  header: '카테고리 순서 변경',
  myCategories: '맞춤 카테고리',
  allCategories: '전체 카테고리',
  dragAndDrop: '원하는 카테고리를 이곳으로 이동하세요',
  headlinesFirst: '한반도 주요 뉴스 위치',
  cancel: '취소',
}

export const circumventionDrawerLabels = {
  enabledContent: (
    <div>
      <p>
        VOA 뉴스 앱은 Psiphon의 '우회' 프록시 기술을 사용해서 여러분의 개인 정보와 익명성을 보호합니다
      </p>
      <p>
        VOA와 익명으로 연결됐습니다.
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>설정에서 변경할 수 있습니다</a>.
      </p>
    </div>
  ),
  disabledContent: (
    <div>
      <p>
        VOA 뉴스 앱은 Psiphon의 '우회' 프록시 기술을 사용해서 여러분의 개인 정보와 익명성을 보호합니다
      </p>
      <p>
        프록시 연결이 해제됐습니다.
      </p>
      <p>
        <a href='#' onClick={() => {
          store.dispatch(push('/settings'))
          store.dispatch(toggleCircumventionDrawer({ open: false }))
        }}>설정에서 변경할 수 있습니다</a>.
      </p>
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: '추천 콘텐츠',
  empty: '추천 콘텐츠를 준비 중입니다',
}

export const errorBoundaryLabels = {
  error: '오류가 발생했습니다',
  retry: '재시도',
}

export const favoritesSettingsLabels = {
  header: '스크랩',
  removeAll: '모두 지우기',
}

export const homeLabels = {
  headlines: '한반도 주요 뉴스',
  search: '검색',
  manage: '+',
}

export const introLabels = {
  content: 'VOA 한국어 방송의 뉴스와 다양한 콘텐츠를 쉽고 빠르게 전해드립니다.',
  continue: '계속',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        선택한 오디오/비디오를 재생하는 곳입니다.
        기사를 읽는 동안 재생 중인 오디오/비디오 창을 닫았다가, 원할 때 다시 열어서 계속 재생할 수 있습니다.
      </p>
    </div>
  ),
  loading: '로딩 중',
}

export const mediaSettingsLabels = {
  normalSpeed: '정상',
  halfAgainSpeed: '1.5',
  doubleSpeed: '2배속',
  chooseSpeed: '재생 속도',
}

export const programsScreenLabels = {
  videos: '주문형 비디오',
  audio: '주문형 오디오',
  empty: '콘텐츠를 준비 중입니다',
  youtube: 'YouTube',
}

export const psiphonLoadingLabels = {
  bold: '',
  text: '사용자를 위한 최적의 정보를 모으고 있습니다.',
}

export const pullToRefreshLabels = {
  pull: '화면 끌어내려서 새로 고침',
  release: '화면 끌어내려서 새로 고침',
}

export const searchLabels = {
  header: '검색',
  back: '돌아가기',
  all: '전체',
  query: '검색',
  empty: '검색 결과가 없습니다',
}

export const settingsLabels = {
  header: '개인 설정',
  panic: '초기 설정 돌아가기',
  sendToFriends: '앱 공유하기',
  sendFeedback: '의견 보내기',
  aboutVoa: 'Voice of America, VOA는 미국 연방정부가 운영하는 국제방송으로, 1942년 첫 전파를 송출한 이래, 전 세계 40여 개 언어로 신뢰성 있는 뉴스와 정보를 전달해드리고 있습니다.',
  feedbackEmail: 'korea@voanews.com',
  feedbackSubject: encodeURIComponent('VOA 뉴스 앱 의견 보내기'),
  feedbackBody: encodeURIComponent('VOA 뉴스 앱에 보내는 의견:\n'),
  shareMessage: 'VOA 뉴스 앱을 추천합니다',
  psiphon: '안전한 프록시 연결',
  psiphonOn: '켜기',
  psiphonOff: '끄기',
  takeEffectOnRestart: '설정 변경을 적용하려면 앱을 다시 시작해야 합니다.',
  okay: 'OK',
}

export const textSettingsLabels = {
  textSize: '글자 크기 설정',
  normalSize: '작게',
  largeSize: '보통',
  hugeSize: '크게',
}
