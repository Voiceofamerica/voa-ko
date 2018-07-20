
import {
  type as setPsiphonEnabledType,
  SetPsiphonEnabledAction,
} from '../actions/setPsiphonEnabled'

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
  [setPsiphonEnabledType]: (prev, { psiphonEnabled }: SetPsiphonEnabledAction) => ({
    ...prev,
    psiphonEnabled,
  }),
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
      id: 2712,
      name: '한반도',
    },
    {
      id: 5460,
      name: 'VOA 뉴스',
    },
    {
      id: 5350,
      name: '워싱턴 톡',
    },
    {
      id: 5425,
      name: '글로벌 리포트',
    },
    {
      id: 5329,
      name: 'Speak Easy English',
    },
  ],
  mediaPlaybackRate: 1,
  dailyNotificationOn: true,
  psiphonEnabled: true,
  textSize: 1,
}

export default buildReducer(INITIAL_STATE, actors)
