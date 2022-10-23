export function useGetDate() {
    let date = new Date()
    let dayweek = date.getDay()
    let monthDate = date.getMonth()
    let dayDate = date.getDate()
    let year = date.getFullYear()

    let week = ''
    let month = ''

    if(dayweek === 0) week = 'Sunday'
    if(dayweek === 1) week = 'Monday'
    if(dayweek === 2) week = 'Tuesday'
    if(dayweek === 3) week = 'Wednesday'
    if(dayweek === 4) week = 'Thursday'
    if(dayweek === 5) week = 'Friday'
    if(dayweek === 6) week = 'Saturday'

    if(monthDate === 0) month = 'January'
    if(monthDate === 1) month = 'February'
    if(monthDate === 2) month = 'March'
    if(monthDate === 3) month = 'April'
    if(monthDate === 4) month = 'May'
    if(monthDate === 5) month = 'June'
    if(monthDate === 6) month = 'July'
    if(monthDate === 7) month = 'August'
    if(monthDate === 8) month = 'September'
    if(monthDate === 9) month = 'October'
    if(monthDate === 10) month = 'November'
    if(monthDate === 11) month = 'December'

    let associateDate = `${week}, ${month} ${dayDate}, ${year}`

    return String(associateDate)
}