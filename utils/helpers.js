import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATIONS = 'NOTIFICATIONS'

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATIONS)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  
  function createNotification () {
    return {
      title: 'Reminder!',
      body: "Please complete at least one quiz today!",
      ios: {
        sound: true,
      },
    }
  }
  
  export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATIONS)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(15)
                tomorrow.setMinutes(0)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )
                
                AsyncStorage.setItem(NOTIFICATIONS, JSON.stringify(true))
              }
            })
        }
      })
    }