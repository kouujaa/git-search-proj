import moment from "moment"

export const formatTimeAgo = (time: any) => {
    const timeToFormat = moment(time)
    return timeToFormat.fromNow()
  }