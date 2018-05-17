
import {
  type as setCategoryOrderType,
  SetCategoryAction,
} from '../actions/setCategoryOrder'

import {
  type as setMediaPlaybackRateType,
  SetMediaPlaybackRateAction,
} from '../actions/setMediaPlaybackRate'

import {
  type as toggleDailyNotificationType,
  ToggleDailyNotificationAction,
} from '../actions/toggleDailyNotification'

import {
  type as setTextSizeType,
  SetTextSizeAction,
} from '../actions/setTextSize'

import { ActorMap, buildReducer } from '../actorMap'
import AppSettings from 'types/AppSettings'

const actors: ActorMap<AppSettings> = {
  [setCategoryOrderType]: (prev, { categories }: SetCategoryAction) => ({
    ...prev,
    categories,
  }),
  [setMediaPlaybackRateType]: (prev, { mediaPlaybackRate }: SetMediaPlaybackRateAction) => ({
    ...prev,
    mediaPlaybackRate,
  }),
  [toggleDailyNotificationType]: (prev, { on: dailyNotificationOn = !prev.dailyNotificationOn }: ToggleDailyNotificationAction) => ({
    ...prev,
    dailyNotificationOn,
  }),
  [setTextSizeType]: (prev, { textSize }: SetTextSizeAction) => ({
    ...prev,
    textSize,
  }),
}

export const INITIAL_STATE: AppSettings = {
  categories: [
    {
      id: 594,
      name: 'News',
    },
    {
      id: 599,
      name: 'USA',
    },
    {
      id: 4720,
      name: 'US Politics',
    },
    {
      id: 621,
      name: 'Silicon Valley & Technology',
    },
    {
      id: 605,
      name: 'Economy',
    },
    {
      id: 607,
      name: 'Science & Health',
    },
    {
      id: 602,
      name: 'Arts & Entertainment',
    },
    {
      id: 3413,
      name: 'Day in Photos',
    },
    {
      id: 611,
      name: 'Europe',
    },
    {
      id: 616,
      name: 'Americas',
    },
  ],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  usePsiphon: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)
