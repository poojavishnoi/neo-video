export function getInstru(videos) {
  return [
    ...videos.filter((ele) => ele.categoryName === "Instrumental Music"),
  ];
}