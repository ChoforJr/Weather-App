export async function changeBackground(icon) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=IOR9rIgJvz2DykMmSsQfwHvDK5NkB5Nl&s=${icon}`,
      { mode: "cors" },
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    document.body.style.backgroundImage = `url(${result.data.images.original.url})`;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
