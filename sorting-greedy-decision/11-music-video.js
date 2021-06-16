function solution([num, dvdNum, songs]) {
  songs = songs.split(' ').map(item => +item);
  const total = songs.reduce((c, p) => c + p, 0);

  if (total > 10000) {
    return;
  }

  const dvdTime = Math.ceil(total / dvdNum);

  const getDvdTime = (time) => {
    const dvds = [];
    for (let i = 0; i < dvdNum; i++) {
      dvds[i] = [];
    }
    let sum = 0;
    let song;
    const tmpSongs = [...songs];
    dvds.forEach(arr => {
      while (tmpSongs.length > 0) {
        if (sum + tmpSongs[0] <= time) {
          song = tmpSongs.shift();
          sum += song;
          arr.push(song)
        } else {
          break;
        }
      }
      sum = 0;
    })

    if (tmpSongs.length) {
      return getDvdTime(time + 1);
    }
    return time;
  }

  return getDvdTime(dvdTime);
}

// Execute Test
const exampleStrList = [
  [9, 3, '1 2 3 4 5 6 7 8 9'],
  [9, 3, '1 9 3 4 5 6 7 8 1'],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
