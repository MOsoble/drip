import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles, { iconStyles } from '../styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { formatDateForViewHeader } from '../components/cycle-day/labels/format'

export default class Header extends Component {
  render() {
    return (
      this.props.isCycleDayOverView ?
        <View style={[styles.header, styles.headerCycleDay]}>
          <Icon
            name='arrow-left-drop-circle'
            {...iconStyles.navigationArrow}
            onPress={() => this.props.goToCycleDay('before')}
          />
          <View>
            <Text style={styles.dateHeader}>
              {formatDateForViewHeader(this.props.date)}
            </Text>
            {this.props.cycleDayNumber &&
              <Text style={styles.cycleDayNumber} >
                Cycle day {this.props.cycleDayNumber}
              </Text>}
          </View >
          <Icon
            name='arrow-right-drop-circle'
            {...iconStyles.navigationArrow}
            onPress={() => this.props.goToCycleDay('after')}
          />
        </View >
        :
        <View style={styles.header}>
          <Text style={styles.dateHeader}>
            {this.props.title}
          </Text>
        </View >
    )
  }
}