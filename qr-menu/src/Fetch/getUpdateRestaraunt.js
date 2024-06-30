import { RESTAURANT_UPDATE } from "./settings";

const restaurantUpdate = async (restaurantData) => {
   if(restaurantData.logo) restaurantData.logo = restaurantData.logo.substring(23)
  try {
    const response = await fetch(RESTAURANT_UPDATE, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(restaurantData),
      credentials: "include", // включает cookies
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Network response was not ok: ${response.statusText}, ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error; // повторно выбрасываем ошибку для дальнейшей обработки
  }
};

export default restaurantUpdate;
