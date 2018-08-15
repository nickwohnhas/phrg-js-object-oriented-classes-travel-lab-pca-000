class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let vertical = parseInt(this.endingLocation["vertical"]) - parseInt(this.beginningLocation["vertical"])
    let horizontal_start = this.beginningLocation["horizontal"]
    let horizontal_end = this.endingLocation["horizontal"]
    const index1 = eastWest.findIndex(street => street === horizontal_start)
    const index2 = eastWest.findIndex(street => street === horizontal_end)
    return index2 - index1 + vertical
  }

  estimatedTime(peak_hours) {
    if (peak_hours === true) {
      return this.blocksTravelled() / 2
    }
    else
    return this.blocksTravelled() / 3
  }
}
