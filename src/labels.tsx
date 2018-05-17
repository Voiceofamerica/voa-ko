
import * as React from 'react'
import * as moment from 'moment'

import { setAnalyticsOptions } from '@voiceofamerica/voa-shared/helpers/analyticsBindings'
import { setDirection } from '@voiceofamerica/voa-shared/helpers/textDirectionHelper'

import { Audience } from 'helpers/graphql-types'

setAnalyticsOptions({
  language: 'english',
  languageService: 'english',
  propertyName: 'english',
  propertyId: 'something',
  rsidAccount: 'something',
  reportSuite: 'something',
})
setDirection('ltr')

export const graphqlAudience = Audience.enus

moment.locale('en-us')

export const articleLabels = {
  updatedOn: (date: string) => `Updated on ${date}`,
  relatedContent: 'Related stories',
  shareMessage: '',
  galleryLoading: 'Gallery loading...',
}

export const categorySettingsLabels = {
  header: 'Choose Categories',
  myCategories: 'My Categories',
  allCategories: 'All Categories',
  dragAndDrop: 'Drag Categories',
  headlinesFirst: 'Headline Category is First',
}

export const circumventionDrawerLabels = {
  content: (
    <div>
      Your connection is secured via a VPN.
    </div>
  ),
}

export const editorsChoiceLabels = {
  header: 'Editor\'s Choice',
}

export const errorBoundaryLabels = {
  error: 'An error occurred.',
  retry: 'Retry',
}

export const favoritesSettingsLabels = {
  header: 'My Favorites',
  removeAll: 'Remove All Favorites',
}

export const homeLabels = {
  headlines: 'Headlines',
  search: 'Search',
  manage: '+',
}

export const introLabels = {
  content: 'Welcome to Voice of America!',
  continue: 'Continue',
}

const hilight: React.CSSProperties = {
  color: '#0162B1',
}

export const mediaPlayerLabels = {
  empty: (
    <div>
      <p>
        This is VoA's <span style={hilight}>multimedia</span> player. When you play audio or video content, it will play here.
      </p>
      <p>
        You can continue to navigate the app without stopping the <span style={hilight}>multimedia</span> by closing the drawer.
      </p>
      <p>
        Use the round <span style={hilight}>multimedia</span> button at the bottom of the screen to open this screen again.
      </p>
      <p>
        You can also start and stop the <span style={hilight}>multimedia</span> by pressing the button at the bottom while this screen is open.
      </p>
    </div>
  ),
  loading: 'Loading media...',
}

export const mediaSettingsLabels = {
  normalSpeed: '1x',
  halfAgainSpeed: '1.5x',
  doubleSpeed: '2x',
  chooseSpeed: 'Media playback speed',
}

export const programsScreenLabels = {
  videos: 'Video',
  audio: 'Audio',
  empty: 'No content',
}

export const pullToRefreshLabels = {
  pull: 'Pull to refresh',
  release: 'Release to refresh',
}

export const searchLabels = {
  header: 'Search',
  back: 'Back',
  all: 'All',
  query: 'Search',
  empty: 'No content',
}

export const settingsLabels = {
  header: 'My Settings',
  panic: 'Reset the App',
  sendToFriends: 'Share with friends',
  sendFeedback: 'Send us feedback',
  aboutVoa: 'The Voice of America (VOA) publishes accurate, balanced, and comprehensive news and information to an international audience. It started in 1942 as a radio news service for people living in closed and war-torn societies and has since grown into a multimedia news operation. VOA now reaches people on web, mobile devices and social media in more than 40 languages.',
  feedbackEmail: 'app@voanews.com',
  feedbackSubject: encodeURIComponent('VOA Mobile App'),
  feedbackBody: encodeURIComponent(''),
  shareMessage: 'Check out the VOA mobile app',
}

export const textSettingsLabels = {
  textSize: 'Article font size',
  normalSize: '1x',
  largeSize: '1.5x',
  hugeSize: '2x',
}
