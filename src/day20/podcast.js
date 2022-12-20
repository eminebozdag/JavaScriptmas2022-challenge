import podcasts from "./data.js";

const getFreePodcasts = (data) => {
  return data
    .filter((p) => p.paid === false)
    .map((p) => ({ title: p.title, rating: p.rating, paid: p.paid }));
};

console.log("Free podcasts: ", getFreePodcasts(podcasts));
