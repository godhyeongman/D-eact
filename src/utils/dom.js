export const $ = (target, base = document) => base.querySelector(target);

export const fetchData = async url => {
  try {
    const fetchData = await fetch(url).then(data => data.json());
    return fetchData;
  } catch (e) {
    console.error(e);
  }
};
