import 'dayjs/locale/ko'
import dayjs from "dayjs"
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.locale('ko')
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string, format?: string) => {
  return dayjs(date)
    .tz('Asia/Seoul')
    .format(format ? format : 'YYYY년 MM월 DD일 HH시 mm분 ss초')
}
