export function getAcoustic(videos) {
  return [...videos.filter((ele) => ele.categoryName === "Acoustic Cover")];
}
