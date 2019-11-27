function getTime () {
    const date = new Date();
    return `${date.getHours() % 12 == 0 ? 1 : date.getHours() % 12}:${date.getMinutes()}`;
}

module.exports = getTime;