const PROGRESS_COLORS = [
    "#D9BB6E",
    "#D4B16B",
    "#D0A767",
    "#CB9D64",
    "#C79361",
    "#C2895D",
    "#BE7F5A",
    "#B97557",
    "#B56B53",
    "#B06150",
]

export const getProgressColor = (progress) => {
    if (progress === 0) return PROGRESS_COLORS[0]

    const percentage = Math.min(progress * 100.0, 100)
    const index = Math.ceil(percentage / 10) - 1
    return PROGRESS_COLORS[index]
}
