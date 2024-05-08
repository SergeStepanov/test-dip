export function dayWeek(day) {
    const strDay = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    return strDay[day];
}

export const addZero = (num) => {
    if (num < 10) {
        return (num = "0" + num);
    }
    return num;
};
