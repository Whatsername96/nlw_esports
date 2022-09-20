// 10:00 -> ["18", "80"] -> [18, 80]

export function convertHourStringToMinutes(hourString: string) {
    const [hours, minutes] = hourString.split(":").map(Number);
    const minutesAmount = (hours * 60) + minutes;

    return minutesAmount;
}