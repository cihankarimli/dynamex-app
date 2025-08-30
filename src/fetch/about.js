import BaseService from "../service/baseService";

export async function fetchAbout() {
  try {
    const aboutData = await BaseService.get("/about");

    return aboutData;
  } catch (error) {
    console.error("HAqqinda datasini yuklerken xeta", error);
    throw error;
  }
}
