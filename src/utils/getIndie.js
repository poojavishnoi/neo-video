export function getIndie(videos) {
  return [...videos.filter((ele) => ele.categoryName === "Indie Music")];
}

