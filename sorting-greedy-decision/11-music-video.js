/** 뮤직비디오 (결정 알고리즘) - 이분검색 응용
 * right: 전체 곡의 시간합
 * left: 가장 긴 곡의 시간
 * > 이분 검색 통해서 dvd 시간이 mid일 경우, dvd가 몇개 되는지 판단
 * > 주어진 숫자가 될 때까지 loop 후 mid 시간 반환
 */


function solution([num, dvdNum, songs]) {
  songs = songs.split(' ').map(item => +item);
  const total = songs.reduce((c, p) => c + p, 0);
  const getMid = (l, r) => parseInt((l + r) / 2);

  if (total > 10000) {
    return;
  }

  const getCount = (time, arr) => {
    let [sum, cnt] = [0, 1];

    for (let min of arr) {
      if (sum + min > time) {
        cnt++;
        sum = min;
      } else {
        sum += min;
      }
    }
    return cnt;
  }

  let [left, right] = [Math.max(...songs), total];
  let [count, mid] = [1, 0];
  while (left <= right) {
    mid = getMid(left, right);
    count = getCount(mid, [...songs]);

    if (count > dvdNum) {
      left = mid + 1;
    } else if (count < dvdNum) {
      right = mid - 1;
    } else {
      break;
    }
  }
  console.log(mid, count);
  return mid;
}

// Execute Test
const exampleStrList = [
  [9, 3, '1 2 3 4 5 6 7 8 9'],
  [9, 3, '1 9 3 4 5 6 7 8 1'],
];
exampleStrList.forEach(exampleStr => solution(exampleStr));
