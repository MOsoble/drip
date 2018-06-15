import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import cycleDayModule from './get-cycle-day-number'
import DayView from './cycle-day-overview'
import BleedingEditView from './bleeding'
import TemperatureEditView from './temperature'
import { formatDateForViewHeader } from './format'
import styles from './styles'

const getCycleDayNumber = cycleDayModule()

export default class Day extends Component {
  constructor(props) {
    super(props)
    this.cycleDay = props.navigation.state.params.cycleDay
    this.cycleDayNumber = getCycleDayNumber(this.cycleDay.date)

    this.state = {
      visibleComponent: 'dayView',
    }

    this.showView = view => {
      this.setState({visibleComponent: view})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{formatDateForViewHeader(this.cycleDay.date)}</Text>
        { this.cycleDayNumber && <Text>Cycle day {this.cycleDayNumber}</Text> }
        {
          { dayView: <DayView cycleDay={this.cycleDay} showView={this.showView} />,
            bleedingEditView: <BleedingEditView cycleDay={this.cycleDay} showView={this.showView}/>,
            temperatureEditView: <TemperatureEditView cycleDay={this.cycleDay} showView={this.showView}/>
          }[this.state.visibleComponent]
        }

      </View >
    )
  }
}