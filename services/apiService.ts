export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data.slice(0, 5);
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};
