import BaseService from "../service/baseService";
export async function fetchServices() {
  try {
    const servicesData = await BaseService.get("/services");

    return servicesData;
  } catch (error) {
    console.error("Xidmetler datasini yuklerken xeta", error);
    throw error;
  }
}
