import React from 'react'
import {
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import styles from '../../styles/index'
import settingsLabels from '../../i18n/en/settings'
import AppText from '../app-text'

console.log(settingsLabels.menuTitles)
const labels = settingsLabels.menuTitles
console.log(settingsLabels.menuTitles)

const menu = [
  {title: labels.reminders, component: 'Reminders'},
  {title: labels.nfpSettings, component: 'NfpSettings'},
  {title: labels.importExport, component: 'ImportExport'},
  {title: labels.password, component: 'Password'},
  {title: labels.about, component: 'About'}
]

export default function SettingsMenu(props) {
  return (
    <ScrollView>
      { menu.map(menuItem)}
    </ScrollView>
  )

  function menuItem(item) {
    return (
      <TouchableOpacity
        style={styles.settingsSegment}
        key={item.title}
        onPress={() => props.navigate(item.component)}
      >
        <AppText>{item.title}</AppText>
      </TouchableOpacity>
    )
  }
}